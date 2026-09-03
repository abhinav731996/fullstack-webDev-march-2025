import ipaddress
import random

def random_ip():
    return str(ipaddress.IPv4Address(random.randint(0, 2**32 - 1)))
