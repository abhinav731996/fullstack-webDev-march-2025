import bs4
import requests

url = "https://www.codewithharry.com/blog"

data = requests.get(url)

soup = bs4.BeautifulSoup(data.text,"html.parser")

# print(soup.prettify())          #print all the data

# for para in soup.find_all("p"):     #print all the paragraph
#     print(para.text) 

# for link in soup.find_all("a"):       #print all links
#     lnk = link.get("href")
#     # print(lnk)
#     if lnk and lnk.startswith("http"):
#         print(lnk)