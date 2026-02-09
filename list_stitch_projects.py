import urllib.request
import json
import ssl
import sys

# Disable SSL verification if needed
context = ssl._create_unverified_context()

url = "https://stitch.googleapis.com/mcp"
headers = {
    "X-Goog-Api-Key": "AQ.Ab8RN6JtmQN3505DnL8Sk7RcTcq0EL02T2OecWOXIt9zxZ9eig",
    "Content-Type": "application/json"
}

def call_mcp(method, params=None):
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": method,
        "params": params or {}
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req, context=context) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        return {"error": {"code": e.code, "message": e.reason}, "raw": e.read().decode()}
    except Exception as e:
        return {"error": {"message": str(e)}}

results = {}

print("Fetching Tools...")
results["tools"] = call_mcp("tools/list")

print("Fetching Projects...")
results["projects"] = call_mcp("tools/call", {"name": "list_projects", "arguments": {"filter": "view=owned"}})

with open("stitch_info.json", "w") as f:
    json.dump(results, f, indent=2)

print("Done. Saved to stitch_info.json")
