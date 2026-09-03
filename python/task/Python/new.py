import requests 
# import json 

data=requests.get("http://universities.hipolabs.com/search?country=India")


listdata=[]

for d in data.json():
    if d["state-province"]=="Haryana":
        listdata.append(d)


for i in listdata:
        print(f"state = Haryana")
        print(f"name = {i["name"]}")
        print(f"web_page = {i["web_pages"]}")
        print("-" * 50)


# print(json.dumps(listdata, indent=4))

# ------------------------------------------------------------