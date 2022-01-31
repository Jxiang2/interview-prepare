'''
Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '  0row -> 1#
      '##  '  1row -> 2#
      '### '  2row -> 3#
      '####'  3row -> 4#
'''


def steps(n, row=0, stair=''):
    if row == n:
        return

    if len(stair) == n:
        print(stair)
        steps(n, row+1)
        return

    if len(stair) <= row:
        stair += '#'
    else:
        stair += ' '

    steps(n, row, stair)


steps(3)
