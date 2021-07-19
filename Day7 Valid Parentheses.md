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
