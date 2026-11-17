"""Assemble index.html from the template, styles, topographic art, code lists, and app script.

Run from anywhere: python src/build.py
Writes ../index.html and src/check.js (a script-only copy used by test.js).
"""
import os
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
read = lambda f: open(os.path.join(here, f), encoding="utf-8").read()
tpl, css, dark = read("index.tpl.html"), read("style.css"), read("dark.css").strip()
topo, data, app = read("topo.html"), read("data.js"), read("app.js")
style = ("<style>\n" + css +
         "\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){" + dark + "}}\n"
         ":root[data-theme=\"dark\"]{" + dark + "}\n</style>")
script = "<script>\n" + data + app + "</script>"
out = tpl.replace("__STYLE__", style).replace("__TOPO__", topo).replace("__SCRIPT__", script)
open(os.path.join(root, "index.html"), "w", encoding="utf-8").write(out)
open(os.path.join(here, "check.js"), "w", encoding="utf-8").write(data + app)
print("wrote index.html,", len(out), "bytes")
