import { Page } from '../classes/page'
export class About extends Page {
  constructor() {
    super({
      element: '[data-animation="about"]',
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
