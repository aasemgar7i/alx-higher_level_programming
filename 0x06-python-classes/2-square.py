#!/usr/bin/python3

"""start here>>"""


class Square:
    """NEW Square!."""

    def __init__(self, size=0):
        """Args:
               size (int): SIZE of input
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
