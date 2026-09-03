# import requests 

# data=requests.get("http://universities.hipolabs.com/search?country=India")


# listdata=[]

# for d in data.json():
#     if d["state-province"]=="Haryana":
#         listdata.append(d)


# print(listdata)

# # ********** gpt
# import requests

# # Get university data for India
# response = requests.get("http://universities.hipolabs.com/search?country=India")

# listdata = []

# # Filter universities where state-province is Haryana
# for university in response.json():
#     if university["state-province"] and university["state-province"].lower() == "haryana":
#         listdata.append(university)

# # Print the results
# if listdata:
#     for uni in listdata:
#         print(f"{uni['name']} - {uni['web_pages'][0]}")
# else:
#     print("No universities found in Haryana.")



import requests
import json

response = requests.get("https://jsonplaceholder.typicode.com/users")

listdata = []

for d in response.json():
    if "Howemouth" in d["address"]["city"]:
        listdata.append(d)

print(json.dumps(listdata, indent=4))