"""Local dev server that disables browser caching.

Usage: python serve.py [port] [folder]
Defaults: port 8000, folder "site" (CommerceForce).
For the Digital-tek site: python serve.py 8001 digital-tek-site
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
folder = sys.argv[2] if len(sys.argv) > 2 else "site"
handler = partial(NoCacheHandler, directory=folder)
print(f"Serving {folder}/ at http://localhost:{port} (no caching)")
ThreadingHTTPServer(("", port), handler).serve_forever()
