import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import NProgress from 'nprogress';

import Home from '../views/Home.vue'

import '../../node_modules/nprogress/nprogress.css'

Vue.use(VueRouter)

const total = 73;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About')
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import(/* webpackChunkName: "Social" */ '../views/Social')
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "Credits" */ '../views/Credits')
  },
  {
    path: '/gdpr',
    name: 'GDPR',
    component: () => import(/* webpackChunkName: "GDPR" */ '../views/GDPR')
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicy')
  },
  {
    path: '/terms-of-use',
    name: 'Terms of Use',
    component: () => import(/* webpackChunkName: "TermsOfUse" */ '../views/TermsOfUse')
  },
  {
    path: '/projects/melissa-next-br',
    name: 'Melissa | Next',
    meta: {
      last: true,
      id: 73,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-dreamers',
    name: 'Minimelissa | AW\'20',
    meta: {
      id: 72,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-color-me',
    name: 'Minimelissa | SS\'20',
    meta: {
      id: 71,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-dreamers-infinitos',
    name: 'Melissa | Dreamers / Infinitos',
    meta: {
      id: 70,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/metcha-newsletter',
    name: 'METCHA | Newsletter',
    meta: {
      id: 69,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/metcha-newsletter-generator',
    name: 'METCHA | Newsletter Generator',
    meta: {
      id: 68,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/metcha-cms',
    name: 'METCHA | CMS',
    meta: {
      id: 67,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/metcha-website',
    name: 'METCHA | Website',
    meta: {
      id: 66,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-sustainability',
    name: 'Melissa | Sustainability',
    meta: {
      id: 65,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-color-me',
    name: 'Melissa | Color ME',
    meta: {
      id: 64,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/transainc-muda',
    name: 'Transainc | Muda',
    meta: {
      id: 63,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/cicb-sustainability-forum-2019',
    name: 'CICB | Sustainability Forum 2019',
    meta: {
      id: 62,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/cicb-sustainability-forum-2018',
    name: 'CICB | Sustainability Forum 2018',
    meta: {
      id: 61,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/cicb-sustainability-forum-2017',
    name: 'CICB | Sustainability Forum 2017',
    meta: {
      id: 60,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/cicb-sustainability-forum-2016',
    name: 'CICB | Sustainability Forum 2016',
    meta: {
      id: 59,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/coza-webpage',
    name: 'Coza | Webpage',
    meta: {
      id: 58,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/coza-where-to-find',
    name: 'Coza | Where to Find',
    meta: {
      id: 57,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-family',
    name: 'Melissa | Family',
    meta: {
      id: 56,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-mapping',
    name: 'Melissa | Mapping',
    meta: {
      id: 55,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-mirror',
    name: 'Melissa | Mirror',
    meta: {
      id: 54,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-open-vibes',
    name: 'Melissa | Open Vibes',
    meta: {
      id: 53,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-a-la-garconne',
    name: 'Melissa | À Lá Garçonne',
    meta: {
      id: 52,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-awaytomars',
    name: 'Melissa | AWAYTOMARS',
    meta: {
      id: 51,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-baja-east',
    name: 'Melissa | Baja East',
    meta: {
      id: 50,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-melissa+csc',
    name: 'Melissa | Melissa + CSC',
    meta: {
      id: 49,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-fabula',
    name: 'Melissa | Fábula',
    meta: {
      id: 48,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-melissa+rider',
    name: 'Melissa | Melissa + Rider',
    meta: {
      id: 47,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-galleries-sp-nyc-lon',
    name: 'Melissa | Galleries SP\/NYC\/LON',
    meta: {
      id: 46,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-bike',
    name: 'Melissa | Bike',
    meta: {
      id: 45,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-creatives',
    name: 'Melissa | Creatives',
    meta: {
      id: 44,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-sk8',
    name: 'Melissa | SK8',
    meta: {
      id: 43,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-possession',
    name: 'Melissa | Possession',
    meta: {
      id: 42,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-candy-framework',
    name: 'Minimelissa | Candy Framework',
    meta: {
      id: 41,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-website',
    name: 'Minimelissa | Website',
    meta: {
      id: 40,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-a-w16',
    name: 'Minimelissa | A/W\'16',
    meta: {
      id: 39,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-a-w17',
    name: 'Minimelissa | A/W\'17',
    meta: {
      id: 38,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-a-w18',
    name: 'Minimelissa | A/W\'18',
    meta: {
      id: 37,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-a-w19',
    name: 'Minimelissa | A/W\'19',
    meta: {
      id: 36,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-where-to-find',
    name: 'Minimelissa | Where to Find',
    meta: {
      id: 35,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-s-s16',
    name: 'Minimelissa | S/S\'16',
    meta: {
      id: 34,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-s-s17',
    name: 'Minimelissa | S/S\'17',
    meta: {
      id: 33,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-s-s18',
    name: 'Minimelissa | S/S\'18',
    meta: {
      id: 32,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/minimelissa-s-s19',
    name: 'Minimelissa | S/S\'19',
    meta: {
      id: 31,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/mor-website',
    name: 'Mor | Website',
    meta: {
      id: 30,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/mor-where-to-find',
    name: 'Mor | Where to Find',
    meta: {
      id: 29,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/cicb-cscb-leather-law-brazilian-portal',
    name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
    meta: {
      id: 28,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-new-features',
    name: 'Melissa | New Features',
    meta: {
      id: 27,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-flygrl',
    name: 'Melissa | Flygrl',
    meta: {
      id: 26,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-mashup',
    name: 'Melissa | Mashup',
    meta: {
      id: 25,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-cine-melissa',
    name: 'Melissa | Cine Melissa',
    meta: {
      id: 24,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-dance-machine',
    name: 'Melissa | Dance Machine',
    meta: {
      id: 23,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-eat-my-melissa',
    name: 'Melissa | Eat My Melissa',
    meta: {
      id: 22,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-nation',
    name: 'Melissa | Nation',
    meta: {
      id: 21,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-starwalker',
    name: 'Melissa | Starwalker',
    meta: {
      id: 20,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-wanna-be-carioca',
    name: 'Melissa | Wanna Be Carioca',
    meta: {
      id: 19,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-we-are-flowers',
    name: 'Melissa | We are Flowers',
    meta: {
      id: 18,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-campana',
    name: 'Melissa | Campana',
    meta: {
      id: 17,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-gaetano-pesce',
    name: 'Melissa | Gaetano Pesce',
    meta: {
      id: 16,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-gareth-pugh',
    name: 'Melissa | Gareth Pugh',
    meta: {
      id: 15,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-j-maskrey',
    name: 'Melissa | J Maskrey',
    meta: {
      id: 14,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-jason-wu',
    name: 'Melissa | Jason Wu',
    meta: {
      id: 13,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-jeremy-scott',
    name: 'Melissa | Jeremy Scott',
    meta: {
      id: 12,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-karl-lagerfeld',
    name: 'Melissa | Karl Lagerfeld',
    meta: {
      id: 11,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-sebastian-errazuriz',
    name: 'Melissa | Sebastian Errazuriz',
    meta: {
      id: 10,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-vitorino-campos',
    name: 'Melissa | Vitorino Campos',
    meta: {
      id: 9,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-vivienne-westwood',
    name: 'Melissa | Vivienne Westwood',
    meta: {
      id: 8,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-zaha-hadid',
    name: 'Melissa | Zaha Hadid',
    meta: {
      id: 7,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-where-to-find',
    name: 'Melissa | Where to Find',
    meta: {
      id: 6,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-roller-joy',
    name: 'Melissa | Roller Joy',
    meta: {
      id: 5,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/melissa-tropico-surreal',
    name: 'Melissa | Tropico Surreal',
    meta: {
      id: 4,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/mor-loja-mor',
    name: 'Mor | Loja Mor',
    meta: {
      id: 3,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/vibra-website',
    name: 'Vibra | Website',
    meta: {
      id: 2,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '/projects/genesysinf-sageweb',
    name: 'GenesysInf | SageWeb',
    meta: {
      id: 1,
      total: total
    },
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project')
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: 'Error404'*/ '../views/NotFound')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

Vue.use(VueAnalytics, {
  id: 'UA-142757641-2',
  router,
  autoTracking: {
    skipSamePath: true,
    pageviewTemplate (route) {
      return {
        page: route.path,
        title: document.title, 
        location: window.location.href
      }
    }
  }
})

export default router
