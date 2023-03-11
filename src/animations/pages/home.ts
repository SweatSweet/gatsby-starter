import { Page } from '../classes/page'
export class Home extends Page {
  constructor() {
    super({
      element: '[data-animation="home"]',
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
