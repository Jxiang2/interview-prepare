def fizzbuzz(n):
    for i in range(n+1):
        fizzbuzz = ''
        if i % 3 == 0:
            fizzbuzz += 'fizz'
        if i % 5 == 0:
            fizzbuzz += 'buzz'
        print(fizzbuzz if len(fizzbuzz) > 0 else i)


fizzbuzz(15)
