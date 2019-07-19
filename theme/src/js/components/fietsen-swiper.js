import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class FietsenSwiper {
  constructor() {}

  init() {
    let section = document.querySelector('.fietsen-swiper-section')

    if (section) {
      let swipers = [
        {
          slug: 'urban',
          container: section.querySelector('.urban.swiper-container'),
          navigator: section.querySelector('.urban.swiper-navigator')
        },
        {
          slug: 'cross',
          container: section.querySelector('.cross.swiper-container'),
          navigator: section.querySelector('.cross.swiper-navigator')
        },
        {
          slug: 'race',
          container: section.querySelector('.race.swiper-container'),
          navigator: section.querySelector('.race.swiper-navigator')
        }
      ]

      console.log(swipers)

      swipers.forEach((fietsSwiper) => {
        let slidesPerView = fietsSwiper.container.getAttribute(
          'data-slides-per-view'
        )
          ? container.getAttribute('data-slides-per-view')
          : 1
        let spaceBetween = fietsSwiper.container.getAttribute(
          'data-space-between'
        )
          ? container.getAttribute('data-space-between') * 4
          : 0
        let freeMode = fietsSwiper.container.getAttribute('data-free-mode')
          ? container.getAttribute('data-free-mode') == 'true'
          : false
        let autoplay = fietsSwiper.container.getAttribute('data-autoplay')
          ? container.getAttribute('data-autoplay') == 'true'
          : false

        let instance = new Swiper(fietsSwiper.container, {
          loop: true,
          autoplay: autoplay,
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
          freeMode: freeMode
        })

        fietsSwiper.navigator.addEventListener('click', (event) => {
          swipers.forEach((other) => {
            other.navigator.classList.remove('active')
            other.container.classList.remove('active')
          })

          fietsSwiper.navigator.classList.add('active')
          fietsSwiper.container.classList.add('active')
        })

        let navItems = fietsSwiper.navigator.querySelectorAll('.nav-item')

        navItems.forEach((item, key) => {
          item.addEventListener('click', (event) => {
            instance.slideTo(key + 1)
          })
        })

        instance.on('slideChange', () => {
          navItems.forEach((item) => {
            item.classList.remove('active')
          })

          navItems[instance.realIndex].classList.add('active')
        })
      })
    }
  }
}

export const fietsenSwiper = new FietsenSwiper()
