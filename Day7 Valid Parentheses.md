An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

```
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
```

# 🤔 내가 생각한 로직과 풀이(틀림 주의❌)

#### 로직

- 사실 문제를 풀지 못했다.. 좋은 방법은 아닐지라도 로직을 생각해낸 내 자신이 뿌듯하기에 적는다..
- 요리조리 분석하다가 알아낸 것은 s에 들어오는 괄호의 쌍이 인덱스로 바꿔서 계산해 더했을 때 홀수값이 나와야 제대로 순서가 맞는다는 사실을 발견했다.
- 예로 "()[]" => [0,1,2,3] => 여기서 ()에 해당하는 인덱스 값 0,1을 더하면 1 []의 2,3을 더하면 5가 되는 것과 같이 홀수로 나옴
- 이렇게 접근한다면 이상하게 구성되어 있는 괄호안에서는 해당 식이 짝수로 나옴 "([)]"에서 ()은 인덱스값이 0,2 더하면 2 []는 인덱스값이 1,3 짝수로 더하면 4가 나와서 참과 거짓을 판별할 수 있다고 생각했다.

#### 풀이

```
if(s.length % 2 === 1) false // 일단 제대로 짝도 없는것들 거르기
const condition1= (s.indexOf('(') + s.indexOf(')')) %2
const condition2= (s.indexOf('{') + s.indexOf('}')) %2
const condition3= (s.indexOf('[') + s.indexOf(']')) %2
//괄호의 조건마다 동일하게 쌍이되는 괄호의 인덱스 값들을 더해서 2로 나눈 나머지 체크

// 짝수는 나누면 나머지가 0(false)값이 되어버리기에 조건문에 거짓이라고 표시하며 false를 리턴함.. 아니면 true

if(!condition1 || !condition2 || !condition3) return false
else return true

```

# 예외처리를 위한 시도(하지만 실패)

- 용용님의 도움으로 예외처리를 시도하였으나 역시나 로직의 오류 때문에 다른 테스트 케이스의 오류를 발견하였다...! 그래도 도와줘서 쏘 땡큐

```
const resultPrint = (s) => {
  let result = false
const condition1= (s.indexOf('(') + s.indexOf(')')) % 2 === 1
const condition2= (s.indexOf('{') + s.indexOf('}')) % 2 === 1
const condition3= (s.indexOf('[') + s.indexOf(']')) %2 === 1


if(condition1 && condition2 && condition3)
{result = true} else
if(condition1 && condition2)
{result = true} else
if(condition1 && condition3)
{result = true} else
if(condition2 && condition3)
{result = true} else
if(condition1)
  {result = true} else
if(condition2)
  {result = true} else
if(condition3)
  {result = true}
  return result
}
```

# 🕺 설명

- 일단 허점이 많음을 인지하고 있다.
- 또한 결국 답을 봐버렸지만 기본 CS 중 하나인 스택과 큐 개념을 이해하면 조금 더 수월하게 풀 수 있다.
- 차차 업데이트 하겠다!!

# 🎊 돌아온 해결책

- 앞서 언급했듯 스택과 해시를 이용한 해결책을 연구했다. [참고블로그](https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2)
- 객체에 여러단계를 통해 접근해서 살짝 헷갈리기도 하지만, 이해하는 과정이 무척 즐거웠다!

#### 일단 해시(hash)란 무엇일까?

- 해시 함수는 임의의 길이의 데이터(key)를 고정된 길이의 데이터(value)로 매핑하는 함수이다. 해시를 이용해서 괄호의 짝들을 체크한다!

#### 그러면 스택은?

- 스택은 우물과 같다. 한방향으로만 나갔다 들어올 수 있기에 A->B->C의 순서로 들어간다면 나올때는 가장 바깥의 C->B->A 순으로 나오게 된다.

## 풀이

```
var isValid = function(s) {
1) let map ={
  ')':'(',
  '}':'{',
  ']':'['
}

2) let stack =[];
for(let i =0; i<s.length; i++){
3)  if(s[i] === '(' || s[i] === '{' || s[i] === '['){
    stack.push(s[i]);
4)  } else if(stack[stack.length-1] === map[s[i]]){
    stack.pop()
5)  } else return false;
}
6) return stack.length ? false : true
};
```

1. 괄호들의 짝을 확인해줄 해시 객체를 만들어주었다. 키 값은 ')','}',']'가 되고 여기에 각각 '(','{','[' 가 대응된다.
2. 우리는 스택구조를 활용해서 문제를 풀것이기 때문에 빈 우물을 하나 만들어준다.

- 여기서 포인트 하나는 스택의 삽입 삭제를 위해 push와 pop을 이용
- 반복문을 돌면서 열린괄호들을 스택에 넣고(push) 해당하는 짝을 만났을때 빼서(pop) 조건을 모두 만족시킨다면 빈 배열이 나와야 한다.

3. 열린 괄호를 넣는 식. 반복문에 따라 열린괄호를 만났을 때 스택에 넣고 아니면 다음 단계로 넘어간다.

4. 열린괄호로 시작하지 않을 때는 크게 두가지

- 이미 짝이 되는 열린 괄호가 있어서 닫힌 괄호만 남아있을 때 => 4) 실행
- 잘못 시작된 괄호일 경우 => 5) 실행

**포인트**
`stack[stack.length-1] === map[s[i]])` 이 식을 비교하는 부분에서 살짝 시간을 들였는데,
`stack[stack.length-1]`은 열린 괄호들이 들어가있다. 가장 늦게 들어간 열린 괄호가 들어있을 것!
`map[s[i]]` 여기서 s[i]는 해시 중 ')', '}', ']'에 대응되는 '(', '{', '['의 값들이 들어갈 것이다.
=> 따라서 조건문을 만족하면 스택에 들어있던 값들을 하나씩 빼주는 방식으로 돌아간다.

5. 이를 만족시키지 못했을때는 false를 뱉어낸다.
6. 모든 괄호가 정상적으로 있어서 스택이 비어져있다면 true! 비어져 있지 않다면 false를 return 한다.
   => 약간 캐릭터가 두개밖에 없는 애니팡 같은 느낌이다 '(',')'가 만나면 팡하고 터져서 사라지고 결국에 우물안의 모든걸 비워낼 수 있게 만드는 것!
