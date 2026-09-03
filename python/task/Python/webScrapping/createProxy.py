# import requests

# proxies = {
#   "http": "http://10.10.1.10:3128",
#   "https": "https://10.10.1.10:1080",
# }

# r = requests.get("https://api64.ipify.org?format=json", proxies=proxies)

# print(r.json())


# proxies = {
#     "http": "http://user:pass@10.10.1.10:3128/"
# }


# 'http://customer-%s-cc-%s:%s@pr.oxylabs.io:7777'
 




# ************ for random ip address ***********

# from random_ip_generator import random_ip

# print(f"IP: {random_ip()}")




# ************ for random proxies **************

from proxy_randomizer import RegisteredProviders

rp = RegisteredProviders()
rp.parse_providers()

print(f"proxy: {rp.get_random_proxy()}")