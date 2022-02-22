# objects need __eq__
class Person:
    def __init__(self, name, age: int, items: list[str]) -> None:
        self.name = name
        self.age = age
        self.items = items

    def __str__(self) -> str:
        return f"My name is {self.name}, I am {self.age} years old"

    def __eq__(self, __o: object) -> bool:
        return self.name == __o.name and self.age == __o.age


p1 = Person("xjy", 13, [1, 2, 3])
p2 = Person("xjy", 13, [1, 2, 3])
print(p1 == p2)

# lists can use direct equal
a1 = [1, 2, 3, True, "5"]
a2 = [1, 2, 3, True, "5"]
print(a1 == a2)

# dicts can use direct equal
d1 = {
    1: "hello",
    2: "world"
}
d2 = {
    1: "hello",
    2: "world"
}
print(d1 == d2)

# Strings can use direct equal
s1 = "jello"
s2 = "jello"
print(s1 == s2)
