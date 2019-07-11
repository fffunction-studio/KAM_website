import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class SwiperManager {
  constructor() {}
  init() {
    let sections = document.querySelectorAll('.swiper-section')

    sections.forEach((section) => {
      let containers = section.querySelectorAll('.swiper-container')
      containers.forEach(container => {
        let navigation = section.querySelector('.swiper-navigation')

        let slidesPerView = container.getAttribute('data-slides-per-view') ? container.getAttribute('data-slides-per-view') : 1
        let spaceBetween = container.getAttribute('data-space-between') ? container.getAttribute('data-space-between') * 4 : 0
        let freeMode = container.getAttribute('data-free-mode') ? container.getAttribute('data-free-mode') == 'true' : false
        let autoplay = container.getAttribute('data-autoplay') ? container.getAttribute('data-autoplay') == 'true' : false

        let instance = new Swiper(container, {
          loop: true,
          autoplay: autoplay,
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
          freeMode: freeMode,
          pagination: {
            el: container.querySelector('.swiper-pagination'),
          },
        })

        if (navigation) {
          let navItems = navigation.querySelectorAll('.nav-item')

          navItems.forEach((item, key) => {
            item.addEventListener('click', (event)=> {
              instance.slideTo(key + 1)
            })
          })

          instance.on('slideChange', () => {

            navItems.forEach((item) => {
              item.classList.remove('active')
            })

            navItems[instance.realIndex].classList.add('active')
          })
        }
      })
    })
  }
}

export const swiperManager = new SwiperManager()
