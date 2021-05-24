import sub2, {a, multiply as multi, publicName } from './sub2.js';
console.dir(sub2)

sub2(1, 2) // default
console.log(a) // sub2의 a
console.log(multi(2, 3)) // sub2의 multiply
console.log(publicName(' 쉿!')) // sub2의 publicName

export default x => x * x