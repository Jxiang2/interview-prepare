def anagrams(stringA: str, stringB: str):
    lowerStringAObj, lowerStringBObj = {}, {}
    lowerStringA = [ch for ch in stringA.lower() if ch.isalnum()]
    lowerStringB = [ch for ch in stringB.lower() if ch.isalnum()]
    
    for ch in list(lowerStringA):
        if ch not in lowerStringAObj:
            lowerStringAObj[ch] = 1
        else:
            lowerStringAObj[ch] += 1
            
    for ch in list(lowerStringB):
        if ch not in lowerStringBObj:
            lowerStringBObj[ch] = 1
        else:
            lowerStringBObj[ch] +=1
            
    if len(lowerStringBObj) == len(lowerStringAObj):
        return lowerStringAObj == lowerStringBObj
    return False
                
print(anagrams('Hi there', 'Bye there'))
    
    