#!/usr/bin/python3
def safe_print_division(a, b):
    try:
        time = a / b
    except (TypeError, ZeroDivisionError):
        time = None
    finally:
        print("Inside result: {}".format(time))
    return time
