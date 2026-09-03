# from bs4 import BeautifulSoup

# with open ("file.html", "r") as f:
#     html = f.read()


# soup = BeautifulSoup(html, "html.parser")

# # print(soup.prettify())

# # print(soup.title.text)
# # print(soup.p["class"])
# # print(soup.find_all("a"))
# # print(soup.find(id = "link3"))

# # to get all likns

# for i in soup.find_all("a"):
#     print(i.get("href"))


import bs4
import requests
import csv

url = r"https://npiregistry.cms.hhs.gov/search"

data = requests.get(url)

soup = bs4.BeautifulSoup(data.text, "html.parser")

print(soup.prettify())

