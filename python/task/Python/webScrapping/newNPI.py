# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

# driver = webdriver.Chrome()
# driver.get("https://npiregistry.cms.hhs.gov/search")

# # Wait for the search field to be available
# search_box = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.ID, "search-text"))
# )

# # Enter search term (e.g. a name or NPI number)
# search_box.clear()
# search_box.send_keys("john doe")

# # Click Search button
# search_button = driver.find_element(By.ID, "search-button")
# search_button.click()

# # Wait for results
# WebDriverWait(driver, 10).until(
#     EC.presence_of_all_elements_located((By.CLASS_NAME, "provider-card"))
# )

# # Extract provider names
# cards = driver.find_elements(By.CLASS_NAME, "provider-card")
# results = ""
# for card in cards:
#     try:
#         name = card.find_element(By.CLASS_NAME, "provider-name").text
#         print(name)
#         results += name + "\n"
#     except:
#         continue

# # Save to file
# with open("newNpi.txt", "w", encoding="utf-8") as f:
#     f.write(results)

# input("Press Enter to close browser...")
# driver.quit()




# ********************** option 1 **************************

import requests
import pandas as pd


def search_npi(first_name=None, last_name=None, organization_name=None, taxonomy=None, limit=10):
    url = "https://npiregistry.cms.hhs.gov/api/"
    params = {
        "version": "2.1",
        "limit": limit
    }

    if first_name:
        params["first_name"] = first_name
    if last_name:
        params["last_name"] = last_name
    if organization_name:
        params["organization_name"] = organization_name
    if taxonomy:
        params["taxonomy_description"] = taxonomy

    response = requests.get(url, params=params)

    if response.status_code != 200:
        print("API request failed!")
        return []

    data = response.json()
    return data.get("results", [])

def display_and_save(results, filename="npi_results.csv"):
    data_list = []

    for r in results:
        basic = r.get("basic", {})
        addresses = r.get("addresses", [{}])
        addr = addresses[0] if addresses else {}
        row = {
            "NPI": r.get("number"),
            "Name": f"{basic.get('first_name', '')} {basic.get('last_name', '')}".strip(),
            "Org Name": basic.get("organization_name", ""),
            "Gender": basic.get("gender", ""),
            "Credential": basic.get("credential", ""),
            "Enumeration Date": basic.get("enumeration_date", ""),
            "Address": f"{addr.get('address_1', '')}, {addr.get('city', '')}, {addr.get('state', '')}, {addr.get('postal_code', '')}"
        }
        data_list.append(row)

    df = pd.DataFrame(data_list)
    df.to_csv(filename, index=False)
    print(f"\n Results saved to {filename}")
    print(df)

#  Example usage:
if __name__ == "__main__":
    print("=== NPI Search Tool ===")
    fname = input("Enter First Name (or press Enter to skip): ").strip()
    lname = input("Enter Last Name (or press Enter to skip): ").strip()
    org = input("Enter Organization Name (or press Enter to skip): ").strip()
    taxonomy = input("Enter Taxonomy Description (or press Enter to skip): ").strip()
    limit = input("How many results do you want? (default=50): ").strip()

    limit = int(limit) if limit.isdigit() else 50

    results = search_npi(first_name=fname, last_name=lname, organization_name=org, taxonomy=taxonomy, limit=limit)
    
    if results:
        display_and_save(results)
    else:
        print(" No results found.")


