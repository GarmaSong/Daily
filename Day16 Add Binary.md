! 나중에 다시 도전할 예정..

# 문제

Given two binary strings `a` and `b`, return their sum as a binary string.

```
Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
```

# 로직

#### 내가 생각한 로직

- 아.. 문제는 이해되는데 이걸 코드로 풀어내는건 너무 힘든일인거 같다.. ㅜㅜ 두 가지의 로직을 생각했다. 하나는 이진법 그대로 계산을 하는것 다른 하나는 10진법 처럼 계산을 하고 이후 이진법으로 다시 계산하는 방법
  **로직 1**

1. 배열 메소드를 사용하고 싶기 때문에 빈 배열을 만들고 반복문을 돌면서 뒤에서부터 계산을 하게 만든다.
2. 더해서 1이 나오면 1을 그대로 unshift해주고 2가 나오면 0을 unshift 하고 그 다음 연산에 1을 더해준다.
3. 더해서 3이 나올 경우는 1을 unshift하고 다음 연산에 1을 더해준다.
4. 만약에 그렇게 해서 마지막 연산에서 더한 값이 2나 3이 나왔을 경우엔 앞자리에 1을 추가해준다.
   **로직 2**
5. 인자로 들어온 string a,b를 일단 parseInt를 통해 10진수 처럼 생각하고 계산한다.
6. 다 더한 값을 string으로 다시 바꾸고 값 중에 2가 있을 경우에는 그 자리에 0을 넣어주고 앞자리에 1을 더해준다.
7. 만약 2)의 결과가 3이 나온다면 그 자리에 1로 반환하고 앞자리에 1을 더해준다.
8. 맨 앞의 연산이 2,3이상 나온다면 0또는 1로 반환하고 string앞에 1을 붙여준다.

#### 해답

- 쉬운 문제라고 하는데 나에겐 영 어려워서 이해하는데 시간이 오래걸렸다. 해답에 있는 carry가 무엇인지 감이 너무 안잡혔던것,,,

1. 대략적인 플루우(이해가 안된다면 정말 추천,, 아저씨 너무 재밌고 설명도 잘함 ㅜ)

- 좋아하는 알고리즘 해설영상인 [Back To Back SWE](https://www.youtube.com/watch?v=qq64FrA2UXQ)강의를 보면서 이해했다..
- 대략적인 플로우는 find carries(올려줘야 할 수들 찾기) -> Do the addition(값 더하기)-> carry들을 왼쪽으로 한칸씩 옮겨서 계산해주는 플로우였다.

2. 10진법 수로 바꾸어 풀기

- 몬가 내가 생각했던 로직과 살짝 비슷한 부분이 있는것 같은데 뒤에서부터 10진법으로 계산한 값들의 경우에 따라 remainder라는 나머지를 하드코딩 같이? 직접 설정해서 값들을 집어넣는 방식인듯..?

3. 메소드로 때려박기,,,(근데 엄청 큰 정수는 처리해주지 못해서 틀린 답임...)

- 문자열로 들어온 값들에 parseInt를 해주는데 두번째 인자로 진법을 적용할 수 있기에 parseInt(a, 2)이런식으로 적용가능,, 그렇게 a 와 b를 더한 값은 10진수로 나오기 때문레 toString(2)를 사용해서 2진법으로 바꾸어준다..(신기한점은 number.toString()할 때 ()안에 원하는 진법을 넣어주면 해당하는걸로 바꾸어준다...)

# 풀이

2.

```
var addBinary = function(a, b) {
    const result = [];
    a = a.split('');
    b = b.split('');
    let remainder = 0;

    while (a.length || b.length || remainder) {
        const el1 = parseInt(a.pop(), 10) || 0;
        const el2 = parseInt(b.pop(), 10) || 0;

        const sum = el1 + el2 + remainder;

        if (sum === 3) {
            result.unshift('1');
            remainder = 1;
        } else if (sum === 2) {
            result.unshift('0');
            remainder = 1;
        } else if (sum === 1) {
            result.unshift('1');
            remainder = 0;
        } else {
            result.unshift('0');
            remainder = 0;
        }
    }

    return result.join('');
};
```

3.

```
var addBinary = function(a, b) {
return (parseInt(a, 2)+parseInt(b,2)).toString(2);
};
```
