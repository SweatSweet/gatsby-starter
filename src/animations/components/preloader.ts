import { Component } from '../classes/component'
import gsap from 'gsap'

export class Preloader extends Component {
  images: any[]
  length: number
  interval!: ReturnType<typeof setInterval> | undefined

  lines: any[]
  transformPrefix: any
  easing: string
  paragraphs: any
  newLines: any[]
  constructor() {
    super({
      element: '[data-animation="preloader"]',
      elements: {},
    })

    this.images = gsap.utils.toArray(document.querySelectorAll('img'))

    this.length = 0
    this.interval
    this.createLoader()
  }

  createLoader() {
    if (this.images.length > 0) {
      this.images.forEach(image => {
        const media = new window.Image()
        const src = image.getAttribute('src')
        media.crossOrigin = 'anonymous'
        media.src = src

        media.onload = () => {
          image.setAttribute('src', src)
          this.onAssetLoaded()
        }
      })
    } else this.onLoaded()
  }

  onAssetLoaded() {
    this.length += 1

    const percent = this.length / this.images.length

    if (percent === 1) {
      this.onLoaded()
    }
  }

  create() {
    super.create()
  }

  onLoaded() {
    gsap
      .timeline()
      .to(this.element, { yPercent: 100 })
      .call(() => {
        this.emit('completed')
      })
  }

  destroy() {
    sessionStorage.setItem('preloader', 'true')
    window.onpagehide = function () {
      sessionStorage.removeItem('preloader')
    }

    this.element.parentNode?.removeChild(this.element)

    setTimeout(() => {
      clearInterval(this.interval)
    }, 4000)
  }
}
