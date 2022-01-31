def solution(a):
    set_ = set()
    for num in a:
        if num in set_:
            return num
        set_.add(num)
    return -1


print(solution([2, 1, 3, 5, 3, 2]))
