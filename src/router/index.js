import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/projects/metcha-website',
    name: 'METCHA | Website',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-sustainability',
    name: 'Melissa | Sustainability',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-color-me',
    name: 'Melissa | Color ME',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/transainc-muda',
    name: 'Transainc | Muda',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/cicb-sustainability-forum-2019',
    name: 'CICB | Sustainability Forum 2019',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/cicb-sustainability-forum-2018',
    name: 'CICB | Sustainability Forum 2018',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/cicb-sustainability-forum-2017',
    name: 'CICB | Sustainability Forum 2017',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/cicb-sustainability-forum-2016',
    name: 'CICB | Sustainability Forum 2016',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/coza-webpage',
    name: 'Coza | Webpage',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/coza-where-to-find',
    name: 'Coza | Where to Find',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-family',
    name: 'Melissa | Family',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-mapping',
    name: 'Melissa | Mapping',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-mirror',
    name: 'Melissa | Mirror',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-open-vibes',
    name: 'Melissa | Open Vibes',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-a-la-garconne',
    name: 'Melissa | À Lá Garçonne',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-awaytomars',
    name: 'Melissa | AWAYTOMARS',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-baja-east',
    name: 'Melissa | Baja East',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-melissa+csc',
    name: 'Melissa | Melissa + CSC',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-fabula',
    name: 'Melissa | Fábula',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-melissa+rider',
    name: 'Melissa | Melissa + Rider',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-galleries-sp-nyc-lon',
    name: 'Melissa | Galleries SP\/NYC\/LON',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-bike',
    name: 'Melissa | Bike',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-creatives',
    name: 'Melissa | Creatives',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-sk8',
    name: 'Melissa | SK8',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-possession',
    name: 'Melissa | Possession',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-candy-framework',
    name: 'Minimelissa | Candy Framework',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-website',
    name: 'Minimelissa | Website',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-a-w16',
    name: 'Minimelissa | A/W\'16',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-a-w17',
    name: 'Minimelissa | A/W\'17',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-a-w18',
    name: 'Minimelissa | A/W\'18',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-a-w19',
    name: 'Minimelissa | A/W\'19',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-where-to-find',
    name: 'Minimelissa | Where to Find',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-s-s16',
    name: 'Minimelissa | S/S\'16',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-s-s17',
    name: 'Minimelissa | S/S\'17',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-s-s18',
    name: 'Minimelissa | S/S\'18',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/minimelissa-s-s19',
    name: 'Minimelissa | S/S\'19',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/mor-website',
    name: 'Mor | Website',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/mor-where-to-find',
    name: 'Mor | Where to Find',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/cicb-cscb-leather-law-brazilian-portal',
    name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-new-features',
    name: 'Melissa | New Features',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-flygrl',
    name: 'Melissa | Flygrl',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-mashup',
    name: 'Melissa | Mashup',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-cine-melissa',
    name: 'Melissa | Cine Melissa',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-dance-machine',
    name: 'Melissa | Dance Machine',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-eat-my-melissa',
    name: 'Melissa | Eat My Melissa',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-nation',
    name: 'Melissa | Nation',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  },
  {
    path: '/projects/melissa-starwalker',
    name: 'Melissa | Starwalker',
    component: ()  => import(/* webpackChunkName: 'Project20'*/ '../views/projects/Project20')
  },
  {
    path: '/projects/melissa-wanna-be-carioca',
    name: 'Melissa | Wanna Be Carioca',
    component: ()  => import(/* webpackChunkName: 'Project19'*/ '../views/projects/Project19')
  },
  {
    path: '/projects/melissa-we-are-flowers',
    name: 'Melissa | We are Flowers',
    component: ()  => import(/* webpackChunkName: 'Project18'*/ '../views/projects/Project18')
  },
  {
    path: '/projects/melissa-campana',
    name: 'Melissa | Campana',
    component: ()  => import(/* webpackChunkName: 'Project17'*/ '../views/projects/Project17')
  },
  {
    path: '/projects/melissa-gaetano-pesce',
    name: 'Melissa | Gaetano Pesce',
    component: ()  => import(/* webpackChunkName: 'Project16'*/ '../views/projects/Project16')
  },
  {
    path: '/projects/melissa-gareth-pugh',
    name: 'Melissa | Gareth Pugh',
    component: ()  => import(/* webpackChunkName: 'Project15'*/ '../views/projects/Project15')
  },
  {
    path: '/projects/melissa-j-maskrey',
    name: 'Melissa | J Maskrey',
    component: ()  => import(/* webpackChunkName: 'Project14'*/ '../views/projects/Project14')
  },
  {
    path: '/projects/melissa-jason-wu',
    name: 'Melissa | Jason Wu',
    component: ()  => import(/* webpackChunkName: 'Project13'*/ '../views/projects/Project13')
  },
  {
    path: '/projects/melissa-jeremy-scott',
    name: 'Melissa | Jeremy Scott',
    component: ()  => import(/* webpackChunkName: 'Project12'*/ '../views/projects/Project12')
  },
  {
    path: '/projects/melissa-karl-lagerfeld',
    name: 'Melissa | Karl Lagerfeld',
    component: ()  => import(/* webpackChunkName: 'Project11'*/ '../views/projects/Project11')
  },
  {
    path: '/projects/melissa-sebastian-errazuriz',
    name: 'Melissa | Sebastian Errazuriz',
    component: ()  => import(/* webpackChunkName: 'Project10'*/ '../views/projects/Project10')
  },
  {
    path: '/projects/melissa-vitorino-campos',
    name: 'Melissa | Vitorino Campos',
    component: ()  => import(/* webpackChunkName: 'Project9'*/ '../views/projects/Project9')
  },
  {
    path: '/projects/melissa-vivienne-westwood',
    name: 'Melissa | Vivienne Westwood',
    component: ()  => import(/* webpackChunkName: 'Project8'*/ '../views/projects/Project8')
  },
  {
    path: '/projects/melissa-zaha-hadid',
    name: 'Melissa | Zaha Hadid',
    component: ()  => import(/* webpackChunkName: 'Project7'*/ '../views/projects/Project7')
  },
  {
    path: '/projects/melissa-where-to-find',
    name: 'Melissa | Where to Find',
    component: ()  => import(/* webpackChunkName: 'Project6'*/ '../views/projects/Project6')
  },
  {
    path: '/projects/melissa-roller-joy',
    name: 'Melissa | Roller Joy',
    component: ()  => import(/* webpackChunkName: 'Project5'*/ '../views/projects/Project5')
  },
  {
    path: '/projects/melissa-tropico-surreal',
    name: 'Melissa | Tropico Surreal',
    component: ()  => import(/* webpackChunkName: 'Project4'*/ '../views/projects/Project4')
  },
  {
    path: '/projects/mor-loja-mor',
    name: 'Mor | Loja Mor',
    component: ()  => import(/* webpackChunkName: 'Project3'*/ '../views/projects/Project3')
  },
  {
    path: '/projects/vibra-website',
    name: 'Vibra | Website',
    component: ()  => import(/* webpackChunkName: 'Project2'*/ '../views/projects/Project2')
  },
  {
    path: '/projects/genesysinf-sageweb',
    name: 'GenesysInf | SageWeb',
    component: ()  => import(/* webpackChunkName: 'Project1'*/ '../views/projects/Project1')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
