import requests
import json

response = requests.get("http://universities.hipolabs.com/search?country=India")

print(response)

data = response.json()

listData = []

for d in data:
    # print(json.dumps(d,indent=4))
    if d["state-province"] == "Haryana":
        listData.append(d)

print(json.dumps(listData, indent=4))