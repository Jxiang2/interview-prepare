def capitalize(str):
    wordList = []
    for word in str.split(' '):
        capitalizedWord = word[0].upper() + word[1:]
        wordList.append(capitalizedWord)
    return ' '.join(wordList)


print(capitalize('a short sentence'))
