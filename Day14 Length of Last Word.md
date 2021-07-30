# 문제

Given a string `s` consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return `0`.

A word is a maximal substring consisting of non-space characters only.

```
Example 1:

Input: s = "Hello World"
Output: 5

Example 2:

Input: s = " "
Output: 0
```

# 로직

#### 내가 생각했던 로직

- 정말 단순하게 생각했던 나,, indexOf로 " "인덱스만 리턴하면 되는거 아닌가..? ~~🐕🍯~~
- 하지만,, 역시나 그렇듯 무수한 테스트 케이스를 보며 단단히 잘못 되었다는걸 깨달음..

#### 해답

- for문을 찾아서 쓸 수도 있겠지만, **문자열 메소드**들을 결합하여 스트링이 비어있을 때의 예외처리와 함께 " "로 나눠지고 마지막 단어를 리턴하게 만든다.
- 여기서 문제를 푸는데 알고있으면 좋은 메소드는 **split, trim, pop** 등이 있었다.

**Trim**

- trim 메서드는 문자열의 양 끝 공백을 제거하는 메소드로 여기서 공백은 space, tab, NBSP를 모두 포함한 공백이다!
- 사용법은 string.trim()하면 간단히 사용 가능
- 위 문제에서 trim은 " a"이런식으로 공백 뒤에 문자가 나오거나 " " 아예 공백으로 이루어진 애들을 처리해서 길이를 0으로 만들어 줄 수 있다 (예외처리에 이용한다는 말씀!)

**split**

- split는 구분자를 이용해서 인자로 받은 문자열을 구분자를 기준으로 여러 문자열로 나눔
- 예를들어 "Hello*World"에서 내가 구분자로 *를 선택했다면 split 결과는 \_을 기준으로 "Hello", "World" 둘로 쪼개짐!!
- 사용법은 string.split(구분자 없으면 그냥 통으로 나오고 ''라고 넣어주면 한글자씩 나옴)
- 위 문제에서 우리는 공백 " "을 기준으로 문자열을 쪼갠다.

**pop**

- pop은 사실은 배열 메소드이다. split의 결과값이 배열로 반환되기 때문에 사용가능
- pop은 배열의 마지막 요소를 제거하고 그 요소를 반환한다 형식은 그냥 무조건 pop()으로 쓴다.
- split 된 배열에서 마지막 빈칸을 기준으로 그 뒤에있는 단어의 길이를 뱉어주면 되기 때문에 split다음에 pop을 하고 그 요소의 length를 찍어주며 문제를 풀 수 있다.

# 풀이

```
1)
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};

2)
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
}; // wow...한줄에 끝나벌임,,
```
