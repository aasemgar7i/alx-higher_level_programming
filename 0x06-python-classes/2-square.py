#!/usr/bin/python3

"""start here"""


class Square:
    """want to get square of an int"""

    def __init__(self, size=0);
        """check and inform for int"""
        if not isinstance(size, int):
            raise TypeError("size must be an intger")
        elif size < 0:
            raise ValueError("size must be >+ 0")
        else:
            self.__size = size
