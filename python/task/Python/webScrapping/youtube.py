import bs4
import requests
import http.cookiejar
import urllib.request
url = "https://www.youtube.com/@harkirat1"

data = requests.get(url)
soup = bs4.BeautifulSoup(data.text,"html.parser")

for link in soup.find_all("a"):
    abd = link.get("href")
    if abd and abd!="/":
        print(abd)

    # if abd and abd.startswith("http"):
    #     print(abd)

    # if abd[0:3]=="/wa":
    #     print("https://www.youtube.com/"+abd)