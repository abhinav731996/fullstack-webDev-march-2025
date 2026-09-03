from requests_html import HTMLSession

session = HTMLSession()

response = session.get("https://python.org/")

print(response.text)
# print(response.html.links)

# for i in response.html.links:
#     print(i)

# about = response.html.find("#about", first = True)      # to find perticula element
# print(about.text) 