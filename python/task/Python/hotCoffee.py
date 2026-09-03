# import requests 
# import json 

# data=requests.get("https://api.sampleapis.com/coffee/hot")


# listdata=[]

# for d in data.json():
#     if "Espresso" and "Expresso" not in d["ingredients"]:
#         listdata.append(d)

# print(json.dumps(listdata, indent=4))

import requests
import json

url = "https://api.sampleapis.com/coffee/hot"


response = requests.get(url).json()


for coffee in response:
    if "Karamellsirap" not in coffee['ingredients']:
        print(json.dumps(coffee, indent=4))


