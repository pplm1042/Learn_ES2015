const CONTAINER = Symbol('container')
const SLIDE_DATA = Symbol('SlideData')
const CURRENT_INDEX = Symbol('currentIndex')
const SLIDE_TO = Symbol('slideToIndex')
  
export default class {
    constructor($target, slideData) {
    const frag = document.createDocumentFragment()
    const $slide = document.createElement('div')
    this[CONTAINER] = document.createElement('ul')
    this[CURRENT_INDEX] = 0
    this[SLIDE_DATA] = slideData
    $slide.className = 'slide'
    this[CONTAINER].className = 'slide__container'
    this[CONTAINER].style.width = this[SLIDE_DATA].length * 100 + 'px'
    slideData.forEach((v, i) => {
        const $li = document.createElement('li')
        $li.className = 'slide__item'
        $li.innerText = v
        this[CONTAINER].appendChild($li)
    })
    $slide.appendChild(this[CONTAINER])
    $slide.addEventListener('click', this.triggerClick.bind(this))
    frag.appendChild($slide)
    $target.appendChild(frag)
    }
    [SLIDE_TO](index) {
    this[CURRENT_INDEX] = index
    this[CONTAINER].style.left = -100 * index + 'px'
    }
    set index(index) {
    index = index % this[SLIDE_DATA].length
    this[SLIDE_TO](index)
    }
    triggerClick(e) {
    e && e.preventDefault()
    this.index = this[CURRENT_INDEX] + 1
    }
}