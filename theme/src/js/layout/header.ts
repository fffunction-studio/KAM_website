import { eventBus } from '../core/event-bus';
import { config } from '../core/config';

class Header {
  element: HTMLElement;

  constructor() {}

  public init(element) {
    this.element = element;

    if (window.scrollY > config.offsetFromTop) {
      this.pin();
    }

    this.addEventListeners()
  }

  addEventListeners() {
    eventBus.$on('scrolled-from-top', (event) => {
      this.pin();
    });

    eventBus.$on('scrolled-to-top', (event) => {
      this.unpin();
    });

    eventBus.$on('footer-touched-header', (event) => {
      this.stickToFooter();
    });

    eventBus.$on('footer-released-header', (event) => {
      this.unstickFromFooter();
    });
  }

  pin() {
    this.element.classList.add('pinned');
  }

  unpin() {
    this.element.classList.remove('pinned');
  }

  stickToFooter() {
    this.element.style.position = 'absolute'
    this.element.style.bottom = '0'
  }

  unstickFromFooter() {
    this.element.style.position = ''
    this.element.style.bottom = ''
  }
}

export const header = new Header();
