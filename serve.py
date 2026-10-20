"""Local dev server for site/ that disables browser caching.

Usage: python serve.py [port]
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
handler = partial(NoCacheHandler, directory="site")
print(f"Serving site/ at http://localhost:{port} (no caching)")
ThreadingHTTPServer(("", port), handler).serve_forever()
