import Slide from './Slide.js'
// import sub1 from './sub1.js'

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div>'
const slide1 = new Slide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])

// import ex1 from './ex1.js'
// import ex2 from './ex2.js'

