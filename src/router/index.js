import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
    component: ()  => import(/* webpackChunkName: "Project73" */ '../views/projects/Project73')
  },
  {
    path: '/projects/minimelissa-dreamers',
    name: 'Minimelissa | AW\'20',
    component: ()  => import(/* webpackChunkName: "Project72" */ '../views/projects/Project72')
  },
  {
    path: '/projects/minimelissa-color-me',
    name: 'Minimelissa | SS\'20',
    component: ()  => import(/* webpackChunkName: "Project71" */ '../views/projects/Project71')
  },
  {
    path: '/projects/melissa-dreamers-infinitos',
    name: 'Melissa | Dreamers / Infinitos',
    component: ()  => import(/* webpackChunkName: "Project70" */ '../views/projects/Project70')
  },
  {
    path: '/projects/metcha-newsletter',
    name: 'MMETCHA | Newsletter',
    component: ()  => import(/* webpackChunkName: "Project69" */ '../views/projects/Project69')
  },
  {
    path: '/projects/metcha-newsletter-generator',
    name: 'METCHA | Newsletter Generator',
    component: ()  => import(/* webpackChunkName: "Project68" */ '../views/projects/Project68')
  },
  {
    path: '/projects/metcha-cms',
    name: 'METCHA | CMS',
    component: ()  => import(/* webpackChunkName: "Project67" */ '../views/projects/Project67')
  },
  {
    path: '/projects/metcha-website',
    name: 'METCHA | Website',
    component: ()  => import(/* webpackChunkName: "Project66" */ '../views/projects/Project66')
  },
  {
    path: '/projects/melissa-sustainability',
    name: 'Melissa | Sustainability',
    component: ()  => import(/* webpackChunkName: "Project65" */ '../views/projects/Project65')
  },
  {
    path: '/projects/melissa-color-me',
    name: 'Melissa | Color ME',
    component: ()  => import(/* webpackChunkName: "Project64" */ '../views/projects/Project64')
  },
  {
    path: '/projects/transainc-muda',
    name: 'Transainc | Muda',
    component: ()  => import(/* webpackChunkName: "Project63" */ '../views/projects/Project63')
  },
  {
    path: '/projects/cicb-sustainability-forum-2019',
    name: 'CICB | Sustainability Forum 2019',
    component: ()  => import(/* webpackChunkName: "Project62" */ '../views/projects/Project62')
  },
  {
    path: '/projects/cicb-sustainability-forum-2018',
    name: 'CICB | Sustainability Forum 2018',
    component: ()  => import(/* webpackChunkName: "Project61" */ '../views/projects/Project61')
  },
  {
    path: '/projects/cicb-sustainability-forum-2017',
    name: 'CICB | Sustainability Forum 2017',
    component: ()  => import(/* webpackChunkName: "Project60" */ '../views/projects/Project60')
  },
  {
    path: '/projects/cicb-sustainability-forum-2016',
    name: 'CICB | Sustainability Forum 2016',
    component: ()  => import(/* webpackChunkName: "Project59" */ '../views/projects/Project59')
  },
  {
    path: '/projects/coza-webpage',
    name: 'Coza | Webpage',
    component: ()  => import(/* webpackChunkName: "Project58" */ '../views/projects/Project58')
  },
  {
    path: '/projects/coza-where-to-find',
    name: 'Coza | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project57" */ '../views/projects/Project57')
  },
  {
    path: '/projects/melissa-family',
    name: 'Melissa | Family',
    component: ()  => import(/* webpackChunkName: "Project56" */ '../views/projects/Project56')
  },
  {
    path: '/projects/melissa-mapping',
    name: 'Melissa | Mapping',
    component: ()  => import(/* webpackChunkName: "Project55" */ '../views/projects/Project55')
  },
  {
    path: '/projects/melissa-mirror',
    name: 'Melissa | Mirror',
    component: ()  => import(/* webpackChunkName: "Project54" */ '../views/projects/Project54')
  },
  {
    path: '/projects/melissa-open-vibes',
    name: 'Melissa | Open Vibes',
    component: ()  => import(/* webpackChunkName: "Project53" */ '../views/projects/Project53')
  },
  {
    path: '/projects/melissa-a-la-garconne',
    name: 'Melissa | À Lá Garçonne',
    component: ()  => import(/* webpackChunkName: "Project52" */ '../views/projects/Project52')
  },
  {
    path: '/projects/melissa-awaytomars',
    name: 'Melissa | AWAYTOMARS',
    component: ()  => import(/* webpackChunkName: "Project51" */ '../views/projects/Project51')
  },
  {
    path: '/projects/melissa-baja-east',
    name: 'Melissa | Baja East',
    component: ()  => import(/* webpackChunkName: "Project50" */ '../views/projects/Project50')
  },
  {
    path: '/projects/melissa-melissa+csc',
    name: 'Melissa | Melissa + CSC',
    component: ()  => import(/* webpackChunkName: "Project49" */ '../views/projects/Project49')
  },
  {
    path: '/projects/melissa-fabula',
    name: 'Melissa | Fábula',
    component: ()  => import(/* webpackChunkName: "Project48" */ '../views/projects/Project48')
  },
  {
    path: '/projects/melissa-melissa+rider',
    name: 'Melissa | Melissa + Rider',
    component: ()  => import(/* webpackChunkName: "Project47" */ '../views/projects/Project47')
  },
  {
    path: '/projects/melissa-galleries-sp-nyc-lon',
    name: 'Melissa | Galleries SP\/NYC\/LON',
    component: ()  => import(/* webpackChunkName: "Project46" */ '../views/projects/Project46')
  },
  {
    path: '/projects/melissa-bike',
    name: 'Melissa | Bike',
    component: ()  => import(/* webpackChunkName: "Project45" */ '../views/projects/Project45')
  },
  {
    path: '/projects/melissa-creatives',
    name: 'Melissa | Creatives',
    component: ()  => import(/* webpackChunkName: "Project44" */ '../views/projects/Project44')
  },
  {
    path: '/projects/melissa-sk8',
    name: 'Melissa | SK8',
    component: ()  => import(/* webpackChunkName: "Project43" */ '../views/projects/Project43')
  },
  {
    path: '/projects/melissa-possession',
    name: 'Melissa | Possession',
    component: ()  => import(/* webpackChunkName: "Project42" */ '../views/projects/Project42')
  },
  {
    path: '/projects/minimelissa-candy-framework',
    name: 'Minimelissa | Candy Framework',
    component: ()  => import(/* webpackChunkName: "Project41" */ '../views/projects/Project41')
  },
  {
    path: '/projects/minimelissa-website',
    name: 'Minimelissa | Website',
    component: ()  => import(/* webpackChunkName: "Project40" */ '../views/projects/Project40')
  },
  {
    path: '/projects/minimelissa-a-w16',
    name: 'Minimelissa | A/W\'16',
    component: ()  => import(/* webpackChunkName: "Project39" */ '../views/projects/Project39')
  },
  {
    path: '/projects/minimelissa-a-w17',
    name: 'Minimelissa | A/W\'17',
    component: ()  => import(/* webpackChunkName: "Project38" */ '../views/projects/Project38')
  },
  {
    path: '/projects/minimelissa-a-w18',
    name: 'Minimelissa | A/W\'18',
    component: ()  => import(/* webpackChunkName: "Project37" */ '../views/projects/Project37')
  },
  {
    path: '/projects/minimelissa-a-w19',
    name: 'Minimelissa | A/W\'19',
    component: ()  => import(/* webpackChunkName: "Project36" */ '../views/projects/Project36')
  },
  {
    path: '/projects/minimelissa-where-to-find',
    name: 'Minimelissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project35" */ '../views/projects/Project35')
  },
  {
    path: '/projects/minimelissa-s-s16',
    name: 'Minimelissa | S/S\'16',
    component: ()  => import(/* webpackChunkName: "Project34" */ '../views/projects/Project34')
  },
  {
    path: '/projects/minimelissa-s-s17',
    name: 'Minimelissa | S/S\'17',
    component: ()  => import(/* webpackChunkName: "Project33" */ '../views/projects/Project33')
  },
  {
    path: '/projects/minimelissa-s-s18',
    name: 'Minimelissa | S/S\'18',
    component: ()  => import(/* webpackChunkName: "Project32" */ '../views/projects/Project32')
  },
  {
    path: '/projects/minimelissa-s-s19',
    name: 'Minimelissa | S/S\'19',
    component: ()  => import(/* webpackChunkName: "Project31" */ '../views/projects/Project31')
  },
  {
    path: '/projects/mor-website',
    name: 'Mor | Website',
    component: ()  => import(/* webpackChunkName: "Project30" */ '../views/projects/Project30')
  },
  {
    path: '/projects/mor-where-to-find',
    name: 'Mor | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project29" */ '../views/projects/Project29')
  },
  {
    path: '/projects/cicb-cscb-leather-law-brazilian-portal',
    name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
    component: ()  => import(/* webpackChunkName: "Project28" */ '../views/projects/Project28')
  },
  {
    path: '/projects/melissa-new-features',
    name: 'Melissa | New Features',
    component: ()  => import(/* webpackChunkName: "Project27" */ '../views/projects/Project27')
  },
  {
    path: '/projects/melissa-flygrl',
    name: 'Melissa | Flygrl',
    component: ()  => import(/* webpackChunkName: "Project26" */ '../views/projects/Project26')
  },
  {
    path: '/projects/melissa-mashup',
    name: 'Melissa | Mashup',
    component: ()  => import(/* webpackChunkName: "Project25" */ '../views/projects/Project25')
  },
  {
    path: '/projects/melissa-cine-melissa',
    name: 'Melissa | Cine Melissa',
    component: ()  => import(/* webpackChunkName: "Project24" */ '../views/projects/Project24')
  },
  {
    path: '/projects/melissa-dance-machine',
    name: 'Melissa | Dance Machine',
    component: ()  => import(/* webpackChunkName: "Project23" */ '../views/projects/Project23')
  },
  {
    path: '/projects/melissa-eat-my-melissa',
    name: 'Melissa | Eat My Melissa',
    component: ()  => import(/* webpackChunkName: "Project22" */ '../views/projects/Project22')
  },
  {
    path: '/projects/melissa-nation',
    name: 'Melissa | Nation',
    component: ()  => import(/* webpackChunkName: "Project21" */ '../views/projects/Project21')
  },
  {
    path: '/projects/melissa-starwalker',
    name: 'Melissa | Starwalker',
    component: ()  => import(/* webpackChunkName: "Project20'" */ '../views/projects/Project20')
  },
  {
    path: '/projects/melissa-wanna-be-carioca',
    name: 'Melissa | Wanna Be Carioca',
    component: ()  => import(/* webpackChunkName: "Project19'" */ '../views/projects/Project19')
  },
  {
    path: '/projects/melissa-we-are-flowers',
    name: 'Melissa | We are Flowers',
    component: ()  => import(/* webpackChunkName: "Project18'" */ '../views/projects/Project18')
  },
  {
    path: '/projects/melissa-campana',
    name: 'Melissa | Campana',
    component: ()  => import(/* webpackChunkName: "Project17'" */ '../views/projects/Project17')
  },
  {
    path: '/projects/melissa-gaetano-pesce',
    name: 'Melissa | Gaetano Pesce',
    component: ()  => import(/* webpackChunkName: "Project16'" */ '../views/projects/Project16')
  },
  {
    path: '/projects/melissa-gareth-pugh',
    name: 'Melissa | Gareth Pugh',
    component: ()  => import(/* webpackChunkName: "Project15'" */ '../views/projects/Project15')
  },
  {
    path: '/projects/melissa-j-maskrey',
    name: 'Melissa | J Maskrey',
    component: ()  => import(/* webpackChunkName: "Project14'" */ '../views/projects/Project14')
  },
  {
    path: '/projects/melissa-jason-wu',
    name: 'Melissa | Jason Wu',
    component: ()  => import(/* webpackChunkName: "Project13'" */ '../views/projects/Project13')
  },
  {
    path: '/projects/melissa-jeremy-scott',
    name: 'Melissa | Jeremy Scott',
    component: ()  => import(/* webpackChunkName: "Project12'" */ '../views/projects/Project12')
  },
  {
    path: '/projects/melissa-karl-lagerfeld',
    name: 'Melissa | Karl Lagerfeld',
    component: ()  => import(/* webpackChunkName: "Project11'" */ '../views/projects/Project11')
  },
  {
    path: '/projects/melissa-sebastian-errazuriz',
    name: 'Melissa | Sebastian Errazuriz',
    component: ()  => import(/* webpackChunkName: "Project10'" */ '../views/projects/Project10')
  },
  {
    path: '/projects/melissa-vitorino-campos',
    name: 'Melissa | Vitorino Campos',
    component: ()  => import(/* webpackChunkName: "Project9'" */ '../views/projects/Project9')
  },
  {
    path: '/projects/melissa-vivienne-westwood',
    name: 'Melissa | Vivienne Westwood',
    component: ()  => import(/* webpackChunkName: "Project8'" */ '../views/projects/Project8')
  },
  {
    path: '/projects/melissa-zaha-hadid',
    name: 'Melissa | Zaha Hadid',
    component: ()  => import(/* webpackChunkName: "Project7'" */ '../views/projects/Project7')
  },
  {
    path: '/projects/melissa-where-to-find',
    name: 'Melissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project6'" */ '../views/projects/Project6')
  },
  {
    path: '/projects/melissa-roller-joy',
    name: 'Melissa | Roller Joy',
    component: ()  => import(/* webpackChunkName: "Project5'" */ '../views/projects/Project5')
  },
  {
    path: '/projects/melissa-tropico-surreal',
    name: 'Melissa | Tropico Surreal',
    component: ()  => import(/* webpackChunkName: "Project4'" */ '../views/projects/Project4')
  },
  {
    path: '/projects/mor-loja-mor',
    name: 'Mor | Loja Mor',
    component: ()  => import(/* webpackChunkName: "Project3'" */ '../views/projects/Project3')
  },
  {
    path: '/projects/vibra-website',
    name: 'Vibra | Website',
    component: ()  => import(/* webpackChunkName: "Project2'" */ '../views/projects/Project2')
  },
  {
    path: '/projects/genesysinf-sageweb',
    name: 'GenesysInf | SageWeb',
    component: ()  => import(/* webpackChunkName: "Project1" */ '../views/projects/Project1')
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
