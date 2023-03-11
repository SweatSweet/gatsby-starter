import { Page } from '../classes/page'
export class Works extends Page {
  constructor() {
    super({
      element: '[data-animation="works"]',
      elements: {},
    })
  }

  reset(): void {}

  create() {
    super.create()
  }

  show() {
    super.show()
  }
}
