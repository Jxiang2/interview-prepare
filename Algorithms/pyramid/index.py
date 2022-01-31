def pyramid(n, row=0, stair=''):
    if row == n:
        return

    if len(stair) == 2*n-1:
        print(stair)
        pyramid(n, row+1, stair='')
        return

    stair += ('#' if (len(stair) >= n-1-row and len(stair) <= n-1+row) else ' ')

    pyramid(n, row, stair)


pyramid(3)
