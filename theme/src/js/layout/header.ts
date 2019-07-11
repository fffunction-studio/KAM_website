import { eventBus } from '../core/event-bus';
import { config } from '../core/config';

class Header {
  element: HTMLElement;
  burgerWrapper: HTMLElement;

  constructor() {}

  public init(element) {
    this.element = element;
    this.burgerWrapper = element.querySelector('.nav-burger-wrapper')

    if (window.scrollY > config.offsetFromTop) {
      this.pin();
    }

    this.setColor()
    this.addEventListeners()
  }

  addEventListeners() {
    eventBus.$on('scrolled-from-top', (event) => {
      this.pin();
    });

    eventBus.$on('scrolled-to-top', (event) => {
      this.unpin();
    });

    eventBus.$on('barba-page-change', event => {
      this.setColor()
    })
  }

  pin() {
    this.element.classList.add('pinned');
  }

  unpin() {
    this.element.classList.remove('pinned');
  }

  setColor() {
    let color = document.querySelector('.main').getAttribute('data-header-color')
      if (color) {
        this.element.classList.remove('text-blue')
        this.element.classList.add('text-orange')
        this.burgerWrapper.classList.remove('bg-blue')
        this.burgerWrapper.classList.add('bg-orange')
      } else {
        this.element.classList.remove('text-orange-light')
        this.element.classList.remove('text-orange')
        this.element.classList.add('text-blue')
        this.burgerWrapper.classList.remove('bg-orange')
        this.burgerWrapper.classList.add('bg-blue')
      }
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
