import requests
import time
import csv

base_url = "https://npiregistry.cms.hhs.gov/api/"

# API parameters
details = {
    "version": "2.1",
    "limit": 50,
    "skip": 0,
    "first_name": "John",
    "last_name": "Smith",
    "gender": "",
    "state": "NY",
    "taxonomy_description": "Internal Medicine"
}

all_results = []
tofindtime = 5
starttime = 0

while starttime < tofindtime:
    print(f"(Call = {starttime + 1})")

    response = requests.get(base_url, params=details)

    if response.status_code != 200:
        print("Request failed:", response.status_code)
        break

    data = response.json()
    results = data.get("results", [])

    if not results:
        print("No more results.")
        break

    all_results.extend(results)

    details["skip"] += details["limit"]
    starttime += 1
    time.sleep(0.5)

# File path (update as needed)
csv_file_path = r"/Users/abcd/Desktop/Indixpert/Python/links.csv"

# Write to CSV
with open(csv_file_path, mode='w', newline='', encoding='utf-8') as csvfile:
    if all_results:
        fieldnames = [
            'NPI Number', 'Type', 'Full Name', 'Gender', 'Specialty',
            'Enumeration Date', 'City', 'State', 'Postal Code', 'Phone',
            'Instagram Search', 'Facebook Search', 'Twitter Search',
            'LinkedIn Search', 'YouTube Search', 'Gmail Search'
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for entry in all_results:
            basic = entry.get("basic", {})
            addresses = entry.get("addresses", [])
            taxonomies = entry.get("taxonomies", [])

            first_name = basic.get('first_name', '')
            last_name = basic.get('last_name', '')
            full_name = f"{first_name} {last_name}".strip()
            taxonomy = next((t for t in taxonomies if t.get("primary")), {}).get("desc", "")
            location = next((a for a in addresses if a.get("address_purpose") == "LOCATION"), {})

            city = location.get("city", "")
            phone = location.get("telephone_number", "")

            # Build search query
            def search_url(platform_domain):
                query = f'"{full_name}" "{city}" "{taxonomy}" site:{platform_domain}'
                return f"https://www.google.com/search?q={query.replace(' ', '+')}"

            writer.writerow({
                'NPI Number': entry.get("number"),
                'Type': entry.get("enumeration_type"),
                'Full Name': full_name or basic.get("organization_name", ""),
                'Gender': basic.get("gender", ""),
                'Specialty': taxonomy,
                'Enumeration Date': basic.get("enumeration_date", ""),
                'City': city,
                'State': location.get("state", ""),
                'Postal Code': location.get("postal_code", ""),
                'Phone': phone,
                'Instagram Search': search_url("instagram.com"),
                'Facebook Search': search_url("facebook.com"),
                'Twitter Search': search_url("twitter.com"),
                'LinkedIn Search': search_url("linkedin.com"),
                'YouTube Search': search_url("youtube.com"),
                'Gmail Search': search_url("gmail.com")
            })

print(f"✅ Total records saved with all social media search links: {len(all_results)}")