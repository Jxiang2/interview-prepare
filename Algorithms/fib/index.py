def fib(n, cache={}):
    if n in cache:
        return cache[n]

    if n == 0 or n == 1:
        return n

    fibNum = fib(n-1, cache) + fib(n-2, cache)
    cache[n] = fibNum
    return fibNum

print(fib(5))
