# import requests
# import json
# import time
# import csv
# import os

# base_url = "https://npiregistry.cms.hhs.gov/api/"

# details = {
#     "version": "2.1",
#     "limit": 50,
#     "skip": 0,
#     "city": "india"
# }

# all_results = []
# tofindtime = 5
# starttime = 0

# while starttime< tofindtime:
#     print(f" (Call = {call_count + 1})")

#     response = requests.get(base_url, details=details)

#     data = response.json()
#     results = data.get("results", [])

#     if not results:
#         print("No more results.")
#         break

#     all_results.extend(results)

#     details["skip"] += 200
#     call_count += 1
#     time.sleep(0.5)


# import time
# import random
# import pandas as pd
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.options import Options
# from fake_useragent import UserAgent

# # Optional: Use free proxy list
# proxies = [
#     '103.253.27.202:8080',
#     '103.170.120.172:8080',
#     '103.48.68.37:83'
# ]


# # Fake user-agent
# ua = UserAgent()

# def create_driver():
#     # proxy = random.choice(proxies)  ❌ Remove this
#     user_agent = ua.random

#     options = Options()
#     # options.add_argument(f'--proxy-server=http://{proxy}') ❌ Comment this
#     options.add_argument(f'user-agent={user_agent}')
#     options.add_argument("--headless=new")  # Optional: run browser in background

#     driver = webdriver.Chrome(options=options)
#     return driver


# def scrape_npi_data():
#     driver = create_driver()
#     driver.get("https://npiregistry.cms.hhs.gov/search")

#     # Wait for page to load JS content
#     time.sleep(3)

#     # Example: Search for all providers with "John" as first name
#     first_name_input = driver.find_element(By.ID, "firstName")
#     first_name_input.send_keys("John")

#     # Click search
#     search_button = driver.find_element(By.XPATH, "//button[contains(text(),'Search')]")
#     search_button.click()
#     time.sleep(5)

#     all_data = []

#     while True:
#         time.sleep(2)
#         results = driver.find_elements(By.CLASS_NAME, "result-container")

#         for result in results:
#             try:
#                 name = result.find_element(By.CLASS_NAME, "npi-header").text
#                 info = result.find_element(By.CLASS_NAME, "npi-details").text
#                 all_data.append({"Name": name, "Details": info})
#             except:
#                 continue

#         # Try going to the next page
#         try:
#             next_button = driver.find_element(By.XPATH, "//button[contains(text(),'Next')]")
#             if next_button.is_enabled():
#                 next_button.click()
#             else:
#                 break
#         except:
#             break

#     driver.quit()
#     return all_data

# # Get data
# data = scrape_npi_data()

# # Save to Excel
# df = pd.DataFrame(data)
# df.to_excel("npi_data.xlsx", index=False)
# print("✅ Data saved to 'npi_data.xlsx'")


import os
import requests
import pandas as pd

INPUT_FILE = "npi_list.csv"
OUTPUT_FILE = "doctor_emails.csv"
BING_API_KEY = "YOUR_BING_API_KEY"  # <-- replace with your Bing API Key


def get_npi_info(npi):
    url = f"https://npiregistry.cms.hhs.gov/api/?number={npi}&version=2.1"
    response = requests.get(url).json()

    if not response.get("results"):  # if empty list
        print(f"⚠️ No results found for NPI {npi}")
        return None

    result = response["results"][0]
    basic = result.get("basic", {})
    addresses = result.get("addresses", [{}])[0]

    doctor_name = basic.get("name") or f"{basic.get('first_name', '')} {basic.get('last_name', '')}".strip()
    city = addresses.get("city", "")
    state = addresses.get("state", "")

    return doctor_name, city, state


def find_doctor_email(npi, api_key):
    doctor_info = get_npi_info(npi)
    if not doctor_info:
        return None

    doctor_name, city, state = doctor_info
    query = f"{doctor_name} {city} {state} email"

    headers = {"Ocp-Apim-Subscription-Key": api_key}
    url = f"https://api.bing.microsoft.com/v7.0/search?q={query}"

    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        web_pages = data.get("webPages", {}).get("value", [])

        for page in web_pages:
            snippet = page.get("snippet", "")
            # crude email extraction
            if "@" in snippet:
                words = snippet.split()
                for word in words:
                    if "@" in word and "." in word:
                        return word.strip(",.;:")  # return first email found
    except Exception as e:
        print(f"Error searching Bing for NPI {npi}: {e}")

    return None


def main():
    # If file not found, create one with sample NPIs
    if not os.path.exists(INPUT_FILE):
        print("⚠️ npi_list.csv not found. Creating sample file...")
        with open(INPUT_FILE, "w") as f:
            f.write("npi\n1417962759\n1053315673\n")

    df = pd.read_csv(INPUT_FILE)
    results = []

    for npi in df["npi"]:
        print(f"🔍 Searching email for NPI: {npi}")
        email = find_doctor_email(npi, BING_API_KEY)
        results.append({"npi": npi, "email": email})

    out_df = pd.DataFrame(results)
    out_df.to_csv(OUTPUT_FILE, index=False)
    print(f"✅ Results saved to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
