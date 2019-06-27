import { eventBus } from '@/js/core'
import { animeManager } from './anime-manager'
import { imageManager } from './image-manager'
import { swiperManager } from './swiper-manager'

eventBus.$on('init', () => {
  animeManager.init()
  imageManager.init()
  swiperManager.init()
})

eventBus.$on('barba-page-change', () => {
  swiperManager.init()
})

export { animeManager, imageManager, swiperManager }
