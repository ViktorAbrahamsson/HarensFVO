import Vue from 'vue'
import Router from 'vue-router'
import Hem from './views/Hem.vue'
import FiskekortRegler from './views/FiskekortRegler.vue'
import Information from './views/Information.vue'
import Fiskarter from './views/Fiskarter.vue'
import Camping from './views/Camping.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hem',
      component: Hem
    },
    {
      path: '/fiskekort',
      name: 'fiskekortregler',
      component: FiskekortRegler
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/fiskarter',
      name: 'fiskarter',
      component: Fiskarter
    },
    {
      path: '/camping',
      name: 'camping',
      component: Camping
    }
  ]
})
