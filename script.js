class Scroll {
    constructor(info) {
        if (typeof info.element == 'string') {
            this.el = document.querySelector(info.element);
        } else if (info.element instanceof HTMLElement) {
            this.el = info.element
        }

        this.el.style.position = 'fixed'
        this.range = info.top
        this.el.style.top = this.scrollUnit()
        this.unit = info.unit ?? '%'
        this.move()

        window.addEventListener('scroll', () => this.move())
        window.addEventListener('resize', () => this.move())
    }

    move() {

        this.scrollValue = this.scrollUnit()

        if (this.scrollValue - scrollY > 0) {
            this.el.style.top = this.scrollValue - scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }

    scrollUnit() {
        if (this.unit == 'px') {
            return this.range >= 0 ? this.range : 0
        } else if (this.unit == '%') {
            return window.innerHeight / 100 * this.range - this.el.clientHeight
        }
    }

}

let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
    unit: '%'
})

// Home Work
class RandomPosition {
    constructor(title, max) {
        this.title = document.querySelector(title)
        this.max = max
    }

    absolute() {
        this.title.style.position = 'absolute'
        this.title.style.top = `${Math.floor(Math.random() * (this.max + 1))}%`
        this.title.style.left = `${Math.floor(Math.random() * (this.max + 1))}%`
    }
}

const position = new RandomPosition('.header__title', 90)

document.querySelector('.header__title').addEventListener('click', () => {
    position.absolute()
})
