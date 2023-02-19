# InterviewPreparation

_This Repo aims to collect and organize potential interview questions._

## Question Types

- Algorithms
- Data Structures
- LeetCode Challenges
- Programming Language Basics

## Programming Languages

- JavaScript
- TypeScript
- Java

## Dynamic Programming

### Memoization

#### workflow

1. visualize problem as a tree
2. solve with recursive brutal force
3. optimize with memo

#### big O analysis

1. const time : 1 => input size 2 -> runtime does not change
2. log time: log(n) => input size 2 -> runtime <2
3. linear time: n => input size 2 -> runtime 2
4. quaslinear time: nlogn => input size 2 -> runtime <4
5. quadradic time: n^2 => input size 2 -> runtime 4
6. expo time: 2^n => input size 2 -> runtime 8

#### recusrsion big O analysis

- level of tree = l
- breadth of tree b

1. the space complexity is always l.
2. the time complexity is always b ^ l.
3. time complexiy can be reduced from exponential to linear or linear x linear by memoization.

#### Examples

- howSum(tartgetSum, numbers, memo):
  ![image](./assets/howSum.jpg)

- countConstruct(target, wordDict, memo):
  ![image](./assets/countConstruct.jpg)

- houseRob(nums):
  ![image](./assets/houseRob.jpg)

- mergeSort(arr):

  ![image](./assets/mergesort1.png)

## Miscs

- **Copy**

  **Reference Copy**: create another variable that point to the same object: var1 --> obj1 0x86 <-- var2
  ![image](./assets/copy.jpg)
