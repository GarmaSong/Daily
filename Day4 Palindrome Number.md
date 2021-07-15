# 🤔 문제

Given an integer `x`, return true if `x` is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

```
Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
```

# 💣 내가 생각한 논리(라고 쓰고 삽질)

중간을 기준으로 앞뒤 숫자를 비교하는 방식

1. 비교를 위해 숫자를 문자 또는 배열로 바꾸기
2. 가운데를 기준으로 앞부분 뒷부분 나누기
3. 뒷부분을 역순으로 바꾸기
4. 앞부분이랑 뒷부분이랑 같은지 비교해서 True/False 비교

# 💥 내 논리의 오류

- parameter의 값의 길이가 짝수로 들어올 경우 반을 못나눔,,

# 😲 더 나은 해결책

- 중간을 나눌 필요 없이 palindrome 단어 그대로 역순으로만 바꾸면 되는거였음,,, (휴 바보)

```
original = String(x)
reverse = original.split('').reverse().join('')
return original === reverse ? true :false
```
