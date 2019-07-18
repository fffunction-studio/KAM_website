import { eventBus } from '@/js/core'
import { animeManager } from './anime-manager'
import { imageManager } from './image-manager'
import { swiperManager } from './swiper-manager'
import { fietsenSwiper } from './fietsen-swiper'

eventBus.$on('init', () => {
  animeManager.init()
  imageManager.init()
  swiperManager.init()
  fietsenSwiper.init()
})

eventBus.$on('barba-page-change', () => {
  swiperManager.init()
  fietsenSwiper.init()
})

export { animeManager, imageManager, swiperManager, fietsenSwiper }
