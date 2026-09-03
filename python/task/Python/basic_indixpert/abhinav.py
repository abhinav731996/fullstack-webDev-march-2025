# ******************* Remove from dictionary ******************

abhinav = {"breakfast":"8-9am", "lunch":"2-3pm", "dinner":"8-9pm"}
abhinav["snacks"]="4-5pm"

del abhinav["lunch"]

abhinav.pop("dinner")

abhinav.clear()

print(abhinav)

data = (10=="10")
print(data)