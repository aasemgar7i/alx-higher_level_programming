#!/usr/bin/python3

"""start here>>"""


class Square:
    """NEW Square!."""

    def __init__(self, size=0):
        """Args:
               size (int): SIZE of input
        """
        self.size = size

    @property
    def size(self):
        """control the size"""
        return (self.__size)

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """back area of square size"""
        return self.__size ** 2

    def my_print(self):
        """Print the square with the # character."""
        for i in range(0, self.__size):
            [print("#", end="") for j in range(self.__size)]
            print("")
        if self.__size == 0:
            print("")
