#!/usr/bin/python3

"""start here"""


class Square:
    """want to get square of an int"""

    def __init__(self, size=0):
        """check and inform for int

        Args:
            size (int): 0
        """
        if not isinstance(size, int):
            raise TypeError("size must be an intger")
        elif size < 0:
            raise ValueError("size must be >+ 0")
        self.__size = size
