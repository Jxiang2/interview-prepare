# join
myList = ["John", "Peter", "Vicky"]
x = "#".join(myList)
print(x)

# split
myString = "hello world !"
stringList = myString.split(" ")
print(stringList)

# delete item by index & by value
alist = ["a", "b", "c", "d", "e"]
del alist[0]
print(alist)

alist.remove("e")
print(alist)

# insert(index, value)
blist = ["a", "b", "c", "d", "e"]
blist.insert(0, 1)
print(blist)
