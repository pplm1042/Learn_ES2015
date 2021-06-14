const str = '𠮷';
console.log(/^.$/.test(str));
// 시작이 ^이고 끝나는 것이 $이면 True를 반환하는 정규표현식이지만 𠮷는 두 글자이기에 False를 반환
console.log(/^.$/u.test(str));
// 𠮷 전체가 하나의 유니코드이기에 u를 붙여준 정규표현식에서는 True를 반환

const msg = 'to be, or not to be, that is the question.';

console.log(msg.startsWith('to be'));
// 시작하는 것이 'to be' 이므로 True 를 반환
console.log(msg.endsWith('tion.'));
// 끝나는 것이 'tion.'이므로 True를 반환
console.log(msg.includes('that'));
// 'that'을 포함하므로 True를 반환

console.log(msg.startsWith('to be', 14));
// 14번째에서 'to be'로 시작하느냐? True
console.log(msg.endsWith('to be', 19));
// 19번째가 ','인데 그 앞에 'to be'가 있으므로 True
console.log(msg.includes('the', 20));
// 20번째 뒷 부분에서 'the'가 있느냐? True

console.log('x'.repeat(10));
// x 10번 반복
console.log('hello'.repeat(2));
// hello 2번 반복

const indent = ' '.repeat(4);
const indentation = depth => inde.repeat(depth);

console.log(Number.isInteger(25));
// 정수여부 판단 True
console.log(Number.isInteger(25.0));
// 정수여부 판단 True
console.log(Number.isInteger(25.1));
// 정수여부 판단 False

console.log(Math.pow(2, 53));
// 2의 53승으로.. 이 숫자를 넘어가면 안전성이 떨어짐. 즉 계산이 제데로 안됨
console.log(Number.MAX_SAFE_INTEGER);
// 안전한 범위의 맥시멈 숫자
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// 안전한 범위의 숫자인지 판단. True
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// 안전한 범위의 숫자인지 판단. False
console.log(Number.EPSILON);
// 10의 -16승, 자바스크립트가 계산을 할 때 모두 실수로 인식을 하다보니 계산을 못하는 순간이 나옴.
// 자바스크립트가 낼 수 있는 오차 범위의 한계
// 즉, 4 - Number.EPSILON < x < 4 + Number>EPSILON 이런식으로 짰을 때, 오차 범위가 이정도라면 x는 4로 간주한다.
console.log(0.00000000000000004 < Number.EPSILON);
// True
console.log(Number.isInteger(0.00000000000000004));
// False

export default str