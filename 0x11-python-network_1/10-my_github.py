#!/usr/bin/python3
"""A script that:
- takes your GitHub credentials (username and password)
- uses the GitHub API to display your id
"""


import requests
import sys

if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]

    response = requests.get('https://api.github.com/user',
                            auth=(username, password))

    if response.status_code == 200:
        user_data = response.json()
        print(user_data['id'])
    else:
        print(None)
