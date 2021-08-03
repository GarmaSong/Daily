# 문제

Given a non-negative integer `x`, compute and return the square root of `x`.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

```
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
```

```
Example 1:

Input: x = 4
Output: 2

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

# 로직

#### 내가 생각했던 로직

- 역시나 또 원시인같은 방법으로 풀려고 함..
- 인자 x가 들어왔을 때 이걸 소인수분해 해서 제일 작은 단위로 쪼개고 그 안에 루트값이 있는건 소수들로 한정되어 있기 때문에 그 경우들을 지정해서 값들을 곱해주는,,, 또 생각은 엄청나지만 로직으로 구현하기 굉장히 까다로운 문제 발생... 빠르게 다른 원리를 찾아나섰다..

#### 해답 중 하나

- 약간 신셰계였는데 이진탐색법을 이용해서 제곱이 된 수들 중에서 인자로 들어온 x와 비교해서 위치를 알아내는 방법인것 같다..
  ![](https://images.velog.io/images/sgr2134/post/aef48e7d-3663-403f-bcf0-c18305690eea/image.png)
- 인자로 8이 들어오고 제곱근을 구하는 방식은 요런 느낌쓰

# 풀이

- 풀이를 보고 이해하는건 이진탐색을 위해 중간을 자른것까지밖에 이해를 하지 못했다.
- 그러기도 하고 스스로 풀어보고 싶기도 해서 오늘 고민해보고 내일 다시 돌아오겠다..
