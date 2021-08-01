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
5. 인자로 들어온 string a,b를 일단 parseInt를 통해 정수로 바꿔준다.
6. 다 더한 값을 string으로 다시 바꾸고 값 중에 2가 있을 경우에는 그 자리에 0을 넣어주고 앞자리에 1을 더해준다.
7. 만약 2)의 결과가 3이 나온다면 그 자리에 1로 반환하고 앞자리에 1을 더해준다.
8. 맨 앞의 연산이 2,3이상 나온다면 0또는 1로 반환하고 string앞에 1을 붙여준다.

#### 해답

- 해답도 얼추 비슷한거 같음 근데,, 풀이가 너무 어려워서 이해하는데 시간이 더 필요할 것 같다... 따라서 나중에 조금 더 이해하고 추가설명하겠음....

# 풀이

- 여러 풀이가 있었는데 내가 그나마 이해하기 쉬웠던 풀이

```
var addBinary = function(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    len = a.length > b.length ? a.length : b.length;
    result = [];
    for(let i = 0; i < len; i += 1){
        num1 = Number(a[i] || 0);
        num2 = Number(b[i]) || 0;
        curr = Number(result[i]||0) + num1 + num2
        if(curr >= 2){
            result[i] = curr%2;
            result.push(1)
        }
        else{
            result[i] = curr
        }
    }
    return result.reverse().join("")
};

```
