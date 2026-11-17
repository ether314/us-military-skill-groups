import random, math
random.seed(41)
def octave(gw,gh):
    g=[[random.random() for _ in range(gw+2)] for _ in range(gh+2)]
    def f(x,y):
        i=int(x); j=int(y); fx=x-i; fy=y-j
        sx=fx*fx*(3-2*fx); sy=fy*fy*(3-2*fy)
        a=g[j][i]; b=g[j][i+1]; c=g[j+1][i]; d=g[j+1][i+1]
        return a+(b-a)*sx+(c-a)*sy+(a-b-c+d)*sx*sy
    return f
W,H=112,48
oc=[(octave(5,3),1.0,5/W,3/H),(octave(11,6),0.45,11/W,6/H),(octave(23,12),0.18,23/W,12/H)]
def field(ix,iy):
    return sum(w*f(ix*sx*1.0,iy*sy*1.0) for f,w,sx,sy in oc)
Z=[[field(x,y) for x in range(W+1)] for y in range(H+1)]
lo=min(min(r) for r in Z);hi=max(max(r) for r in Z)
levels=[lo+(hi-lo)*(k+0.5)/15 for k in range(15)]
SX=1200/W;SY=520/H
def interp(p,q,vp,vq,L):
    t=(L-vp)/(vq-vp) if vq!=vp else .5
    return (round((p[0]+(q[0]-p[0])*t)*SX,1),round((p[1]+(q[1]-p[1])*t)*SY,1))
segs=[]
for L in levels:
    for y in range(H):
        for x in range(W):
            a=(x,y);b=(x+1,y);c=(x+1,y+1);d=(x,y+1)
            va,vb,vc,vd=Z[y][x],Z[y][x+1],Z[y+1][x+1],Z[y+1][x]
            idx=(va>L)*8+(vb>L)*4+(vc>L)*2+(vd>L)*1
            if idx in(0,15):continue
            top=lambda:interp(a,b,va,vb,L);right=lambda:interp(b,c,vb,vc,L);bot=lambda:interp(d,c,vd,vc,L);left=lambda:interp(a,d,va,vd,L)
            tbl={1:[(left,bot)],2:[(bot,right)],3:[(left,right)],4:[(top,right)],5:[(top,left),(bot,right)],6:[(top,bot)],7:[(top,left)],8:[(top,left)],9:[(top,bot)],10:[(top,right),(left,bot)],11:[(top,right)],12:[(left,right)],13:[(bot,right)],14:[(left,bot)]}
            for s,e in tbl[idx]:segs.append((L,s(),e()))
# stitch per level
out=[]
byL={}
for L,s,e in segs:byL.setdefault(L,[]).append((s,e))
for L,ss in byL.items():
    ends={}
    for i,(s,e) in enumerate(ss):
        ends.setdefault(s,[]).append(i);ends.setdefault(e,[]).append(i)
    used=[False]*len(ss)
    for i in range(len(ss)):
        if used[i]:continue
        used[i]=True
        line=[ss[i][0],ss[i][1]]
        for direction in (0,1):
            while True:
                tip=line[-1] if direction==0 else line[0]
                nxt=None
                for j in ends.get(tip,[]):
                    if not used[j]:nxt=j;break
                if nxt is None:break
                used[nxt]=True
                s,e=ss[nxt]
                other=e if s==tip else s
                if direction==0:line.append(other)
                else:line.insert(0,other)
        out.append(line)
d=[]
for line in out:
    if len(line)<4:continue
    pts=line[::2] if len(line)>8 else line
    if pts[-1]!=line[-1]:pts=pts+[line[-1]]
    d.append("M"+" ".join(f"{x:g} {y:g}" for x,y in pts))
path="".join(d)
svg='<svg class="topo" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="'+path+'"/></svg>'
open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"topo.html"),"w",encoding="utf-8").write(svg)
print(len(svg),len(out))
