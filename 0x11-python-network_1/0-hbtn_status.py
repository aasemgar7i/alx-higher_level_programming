#!/usr/bin/python3
"""A script that
- fetches https://alx-intranet.hbtn.io/status.
- uses urlib package
"""

import urllib.request

url = 'https://alx-intranet.hbtn.io/status'

req = urllib.request.Request(url)

with urllib.request.urlopen(req) as response:
    body = response.read().decode('utf-8')

print("- Body response:")
print("\t- type: {}".format(type(body)))
print("\t- content: {}".format(body))
