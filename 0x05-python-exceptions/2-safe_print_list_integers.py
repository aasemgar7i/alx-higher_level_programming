#!/usr/bin/python3
def safe_print_list_integers(my_list=[], x=0):
    time = 0
    for i in range(0, x):
        try:
            forp = my_list[i]
            print("{:d}".format(forp), end="")
            time += 1
        except (ValueError, TypeError):
            pass
        except IndexError:
            break
    print()
    return time
