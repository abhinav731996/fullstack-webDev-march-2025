# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By

# driver = webdriver.Chrome()
# driver.get("https://www.python.org")
# assert "Python" in driver.title
# elem = driver.find_element(By.NAME,"q")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)

# e = driver.find_elements(By.TAG_NAME,"h3")
# st = ""
# for item in e:
#     print(item.text)
#     st += f"{item.text}\n"

# with open("result.txt", "w", encoding="utf-8") as f:
#     f.write(st)
# assert "No result found." not in driver.page_source

# a = input()
# # driver.close()


# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

# driver = webdriver.Chrome()
# driver.get("https://www.python.org")
# assert "Python" in driver.title

# # Perform the search
# elem = driver.find_element(By.NAME, "q")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)

# # Wait for the search results section
# WebDriverWait(driver, 10).until(
#     EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".list-recent-events.menu li h3"))
# )

# # Grab titles
# results = driver.find_elements(By.CSS_SELECTOR, ".list-recent-events.menu li h3")

# # Save to file
# st = ""
# for item in results:
#     print(item.text)
#     st += f"{item.text}\n"

# with open("result.txt", "w", encoding="utf-8") as f:
#     f.write(st)

# input("Press Enter to close browser...")

# driver.close()



from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.python.org")

assert "Python" in driver.title

elem = driver.find_element(By.NAME, "q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)

# Wait until search results are visible
WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".list-recent-events.menu li h3"))
)

# Get search result titles
results = driver.find_elements(By.CSS_SELECTOR, ".list-recent-events.menu li h3")

st = ""
for item in results:
    print(item.text)
    st += f"{item.text}\n"

with open("result.txt", "w", encoding="utf-8") as f:
    f.write(st)

input("Press Enter to close browser...")

# Safely quit driver
try:
    driver.quit()
except Exception as e:
    print(f"Error while quitting browser: {e}")
