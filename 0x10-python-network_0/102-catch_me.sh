#!/bin/bash
# Make a POST request to the specified URL with the required data
curl -s -X PUT 0.0.0.0:5000/catch_me --data "user_id=98" -H "Origin: HolbertonSchool"

