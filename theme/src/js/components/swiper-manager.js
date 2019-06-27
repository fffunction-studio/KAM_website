import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class SwiperManager {
  constructor() {}
  init() {
    let sections = document.querySelectorAll('.swiper-section')

    sections.forEach((section) => {
      console.log(section)
      let navigation = section.querySelector('.swiper-navigation')
      let container = section.querySelector('.swiper-container')
      let instance = new Swiper(container, {
        loop: true
      })

      if (navigation) {
        let navItems = navigation.querySelectorAll('.nav-item')

        navItems.forEach((item, key) => {
          item.addEventListener('click', (event)=> {
            instance.slideTo(key + 1)
          })
        })

        instance.on('slideChange', () => {
          console.log(instance.realIndex)

          navItems.forEach((item) => {
            item.classList.remove('active')
          })

          navItems[instance.realIndex].classList.add('active')
        })
      }
    })
  }
}

export const swiperManager = new SwiperManager()
