const str = '𠮷abc';

console.log(str.length);
// 길이 출력
console.log(str.charAt(0));
// 0번째 인덱스 값 출력
console.log(str.charAt(1));
// 1번째 인덱스 값 출력
console.log(str.charCodeAt(0));
// 0번째 캐릭터 코드 값
console.log(str.charCodeAt(1));
// 1번째 캐릭터 코드 값
console.log(str.split(''));
// 문자열 쪼개기
console.log(str.codePointAt(0));
// 0번째 코드 포인트
console.log(str.codePointAt(1));
// 1번째 코드 포인트
console.log(String.fromCodePoint(134071));
// 코드 포인트를 String으로 변환
console.log(String.fromCodePoint(0x20BB7));
// 코드 포인트를 String으로 변환

for(let c in str) {
    // for in 에서는 글자가 깨짐
  console.log(str[c]);
}
for(let c of str) {
    // for of 에서는 깨지지 않음
  console.log(c);
}
console.log([...str])
// 깨진 문자열이 아닌 완성된 문자열을 이터러블하게 펼치기

console.log('\u20BB7');
// 제대로 되지 않은 유니코드 인식
console.log('\u{20BB7}');
// 제대로 되는 유니코드 인식
console.log('\u{20BB7}' === '\uD842\uDFB7');
// True


console.log('\u0061');
// 유니코드로서 a를 의미
const \u0061 = 'abc';
// 유니코드a 자체를 변수로 설정
console.log(\u0061);
// 'abc'로 출력
console.log(a);
// 'abc'로 출력

const \u{62} = 'def';
// 유니코드 b를 'def'로 초기화
console.log(\u{62});
// 'def'로 출력
console.log(b);
// 'def'로 출력

export default str