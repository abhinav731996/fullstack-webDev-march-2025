import sys
import os

sys.path.append(os.getcwd())

from mainTask.two import two_module

def one_function():
    print("calling one function!!")

one_function()
two_module.two_function()

