try:
    miles_travel = 1100
    remaining_distance = 1000 - miles_travel

    if remaining_distance < 0:
        raise ValueError("distance can't be -ve")
    
    print(f"Remaining distnace: {remaining_distance}")

except ValueError as e:
    print(f"an error occurred: {e}")

finally:
    print("Refule!!")
