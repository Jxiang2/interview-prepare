def reverse(str):
    reversedList = []
    for ch in str:
        reversedList.insert(0, ch)
    return ''.join(reversedList)


print(reverse('Greetings!'))
