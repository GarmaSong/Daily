# 🤔 문제

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

```
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

# 🤘 풀이

```
const longestCommonPrefix = function(strs) {
1) let prefix =""
2) if(!strs.length) return prefix

3) for(let i=0; i < strs[0].length; i++){
  const standard = strs[0][i]

4)  for(let j=1; j<strs.length; j++){
    if(strs[j][i] !== standard) return prefix
      }
5)  prefix = prefix + standard
   }

    return prefix

};
```

# 💁 설명

- 오늘도 알고리즘을 생각하기 위해 열심히 노력하였으나 실패..ㅠㅠ 해답을 보고 이해했다.
- 내가 생각했던 로직:
  1.  배열안에 있는 요소들의 글자를 하나씩 한꺼번에 비교할 수 있지 않을까?
  2.  배열의 첫요소의 글자를 다음것과 비교해서 같으면 뱉으면 되지 않을까?
- 해답을 참고했을 때는 2)의 방법을 통해서 구현해 놓은 듯!
- 내가 부족한 부분.. 이중 for문은 감이 솔직히 잘 잡히지 않는다. 뭔가 for문을 두번 써야 하는건 알겠는데 어떻게 해야하는지 모르겠는 부분이랄까..? + 굳이 모든걸 배열로 해결하지 않아도 되는데 뭔가 스트링을 잘라서 배열에 넣고 하나씩 비교하려고 함.

#### 1) prefix 의 값에 빈값으로 초기 세팅

- 크게 두가지의 이유가 있음 만약 빈 스트링이 값으로 들어왔을 때, ""으로 결과값을 리턴하기 위함
- prefix를 변수로 선언하여 배열의 각요소가 더이상 동일하지 않을때까지 새로운 값으로 업데이트 시키기 위함

#### 2) 예외처리

- 빈 스트링이 들어왔을때는 바로 ""을 뱉을 수 있도록 설정!
- 이 때, string의 length를 !strs.length라고 하면 등식을 넣지 않고도 '빈 값이다'라고 바로 나타낼 수 있음!

#### 3) 기준점 초기세팅

- 앞서 말했듯 배열의 첫 번째 요소를 기준으로 다음 요소들을 비교해나갈 것이기에 standard라는 변수를 선언해주고 for문을 돌면서 첫번째 요소의 첫번째 글자부터 들어가면서 비교해나감!

#### 4) 비교할 요소들의 조건 비교

- 두번째 요소부터 비교를 해야하기 때문에 새로운 변수 j는 1부터 시작하며 for문 돌려돌려!
- 이 때 배열의 각요소들이 아예 시작과 다를 수 있기 때문에 `if(strs[j][i] !== standard) return prefix` 라고 설정해주며 중복된게 없을때는 1)의 값을 뱉을 수 있도록 설정!

#### 5) 예외 요소를 처리한 중복되는 값들 업데이트

- `prefix = prefix + standard` 에서 우측의 prefix는 이전의 중복되는 값들을 담은 스트링일 것이고 standard는 반복문을 돌며 새로운 중복 값이 추가되어 둘을 더하여 prefix에 할당하면 최종적인 prefix 값을 얻을 수 있다!!
