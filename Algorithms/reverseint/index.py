import math


def revertInt(n):
    sign = -1 if n > 0 else n < 0
    abs_n = abs(n)
    new_int = 0
    while abs_n != 0:
        new_int = new_int * 10 + abs_n % 10
        abs_n = math.floor(abs_n/10)
    return new_int * sign


print(revertInt(-123456))
