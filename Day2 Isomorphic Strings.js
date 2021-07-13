// Given two strings `s` and `t`, determine if they are isomorphic.

// Two strings `s` and `t` care isomorphic if the characters in `s` can be replaced to get `t`.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// ```
// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// ```

// ## 👉 내가 생각한 로직
// 1) string의 각각의 글자를 배열로 바꾼다. => [e,g,g] / [a,d,d]
// 2) 배열로 바꾼 글자들의 출현 횟수를 카운트 하여 새로운 배열로 바꾼다. => [1,2,2]/[1,2,2]
// 3) 2)에서 나온 배열을 비교하여 True/False 값을 반환한다.

// ## 👉 풀이
// 야니수님의 도움을 얻어 풀이 성공!

let isIsomorphic = function (s, t) {
  const changetoNum = str => {
    let arr = str.split('');
    let answer = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let z = 0; z < arr.length; z++) {
        if (arr[i] === arr[z]) counter += 1;
        if (z === arr.length - 1) {
          answer.push(counter);
          counter = 0;
        }
      }
    }
    return answer;
  };
  const result = () => {
    if (String(changetoNum(s)) === String(changetoNum(t))) {
      return true;
    } else {
      return false;
    }
  };
  return result();
};
