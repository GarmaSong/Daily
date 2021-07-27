# 문제

Implement `strStr()`.

Return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

Clarification:

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return `0` when `needle` is an empty string. This is consistent to C's `strstr()` and Java's `indexOf()`.

```
Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0
```

# 로직

- 아 일단 이 문제는 indexOf를 직접 구현하는게 포인트임. indexOf 쓰면 한방에 해결되나 어떤 원리로 푸는것인지 아는게 포인트

#### 내가 생각한 로직

- 어떻게 접근하는지는 알겠음. 내 수준에서 합당한 정도의 문제였다...!
- 하지만 어떻게 표현을 해야하는지 하는 부분에서 살짝 아쉬웠다.

1. start 지점의 설정: haystack과 needle의 값이 같은 지점
2. needle의 개수만큼 haystack의 값과 비교(이 부분에서 좀 애를 먹음)

#### 해답 중 하나

- string method 중 하나인 substring을 이용하여 문자열의 일부분을 비교한 해답이 많았다.
- 새로운걸 배워서 재밌었음 substring은 시작 인덱스로부터 종료 인덱스 전까지의 문자열을 뱉는다.
- str.substring(시작인덱스, 종료인덱스) 이런식으로 사용을 하는데 알아두어야 할것은 종료인덱스는 반환되는 문자열에 포함되지 않음 (2,4)라면 인덱스의 2,3만 반환됨!!

# 풀이

```
var strStr = function(haystack, needle) {
1) if(!needle) return 0

for(let i=0; i<haystack.length; i++){
2)  if(haystack[i]===needle[0]){
3)    let compare = haystack.substring(i, i+needle.length)
4)    if(compare === needle){
      return i
    }
  }
}
return -1
};
```

# 설명

1. 일단 예외처리 needle이 비어있을땐 0을 리턴
2. 이 부분과 다음에 나올 3)이 핵심. 지금보면 쉬운데 풀려고 하면 이런 아이디어가 잘 나오지 않는다..! needle은 무조건 비교해야 하는 값이기에 처음값과 haystack에 있는 인덱스 중 일치하면 이라는 조건문을 설정해준다.
3. 이게 메소드가 들어가서 그런지 개인적으로 재밌었는데 compare라는 임의의 변수를 정해주고 haystack의 어떤 문자열 일부분을 return해준다. 이때 문자열을 2)에서 비교한 needle과 같은 값을 기준으로 needle의 length만큼! 여기서 그냥 length인건 substring는 종료 인덱스 전 인덱스값까지 반환하기 때문!!
4. 그렇게 만들어진 compare를 needle과 비교해서 일치하면 처음 시작되었던 인덱스 i를 리턴하며 아닐 시 같지 않다는 뜻이기에 -1을 리턴한다.
