import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const total = 77;
const total_aw = 4;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Luis Krötz'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About'),
    meta: {
      title: 'Luis Krötz - About'
    }
  },
  {
    path: '/productions',
    name: 'Productions',
    component: () => import(/* webpackChunkName: "Productions" */ '../views/Productions'),
    meta: {
      title: 'Luis Krötz - Productions'
    }
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "Credits" */ '../views/Credits'),
    meta: {
      title: 'Luis Krötz - Credits'
    }
  },
  {
    path: '/gdpr',
    name: 'GDPR',
    component: () => import(/* webpackChunkName: "GDPR" */ '../views/GDPR'),
    meta: {
      title: 'Luis Krötz - GDPR'
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicy'),
    meta: {
      title: 'Luis Krötz - Privacy Policy'
    }
  },
  {
    path: '/terms-of-use',
    name: 'Terms of Use',
    component: () => import(/* webpackChunkName: "TermsOfUse" */ '../views/TermsOfUse'),
    meta: {
      title: 'Luis Krötz - Terms of Use'
    }
  },
  {
    path: '/license',
    name: 'License',
    component: () => import(/* webpackChunkName: "MIT" */ '../views/Mit'),
    meta: {
      title: 'Luis Krötz - License'
    }
  },
  {
    path: '/awards/cssda-kudos-06-2020',
    name: 'cssda-kudos-06-2020',
    component: ()  => import(/* webpackChunkName: "Awards" */ '../views/Awards'),
    meta: {
      title: 'Luis Krötz - Awards',
      last: true,
      id: 4,
      total: total_aw
    }
  },
  {
    path: '/awards/cssda-inn-06-2020',
    name: 'cssda-inn-06-2020',
    component: ()  => import(/* webpackChunkName: "Awards" */ '../views/Awards'),
    meta: {
      title: 'Luis Krötz - Awards',
      id: 3,
      total: total_aw
    }
  },
  {
    path: '/awards/cssda-ux-06-2020',
    name: 'cssda-ux-06-2020',
    component: ()  => import(/* webpackChunkName: "Awards" */ '../views/Awards'),
    meta: {
      title: 'Luis Krötz - Awards',
      id: 2,
      total: total_aw
    }
  },
  {
    path: '/awards/cssda-ui-06-2020',
    name: 'cssda-ui-06-2020',
    component: ()  => import(/* webpackChunkName: "Awards" */ '../views/Awards'),
    meta: {
      title: 'Luis Krötz - Awards',
      id: 1,
      total: total_aw
    }
  },
  {
    path: '/projects/forum-cscb-2020',
    name: 'CSCB Sustainability Forum 2020',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'Luis Krötz - CSCB Sustainability Forum 2020',
      last: true,
      id: 77,
      total: total
    }
  },
  {
    path: '/projects/melissa-pop-2020',
    name: 'Melissa | POP',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'Luis Krötz - Melissa | POP',
      last: false,
      id: 76,
      total: total
    }
  },
  {
    path: '/projects/brazilian-leather-webinar-series-2020',
    name: 'Brazilian Leather Webinar Series | 2020',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'Luis Krötz - Brazilian Leather Webinar Series',
      last: false,
      id: 75,
      total: total
    }
  },
  {
    path: '/projects/aboutmarco',
    name: 'Marco Almeida',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'Luis Krötz - Marco Almeida',
      last: false,
      id: 74,
      total: total
    }
  },
  {
    path: '/projects/melissa-next-br',
    name: 'Melissa | Next',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'Luis Krötz - Melissa | Next',
      last: false,
      id: 73,
      total: total
    }
  },
  {
    path: '/projects/minimelissa-dreamers',
    name: 'Minimelissa | AW\'20',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 72,
      total: total,
      title: 'Luis Krötz - Minimelissa | AW\'20'
    }
  },
  {
    path: '/projects/minimelissa-color-me',
    name: 'Minimelissa | SS\'20',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 71,
      total: total,
      title: 'Luis Krötz - Minimelissa | SS\'20'
    }
  },
  {
    path: '/projects/melissa-dreamers-infinitos',
    name: 'Melissa | Dreamers / Infinitos',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 70,
      total: total,
      title: 'Luis Krötz -  Melissa Dreamers / Infinitos'
    }
  },
  {
    path: '/projects/metcha-newsletter',
    name: 'METCHA | Newsletter',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 69,
      total: total,
      title: 'Luis Krötz - METCHA | Newsletter'
    }
  },
  {
    path: '/projects/metcha-newsletter-generator',
    name: 'METCHA | Newsletter Generator',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 68,
      total: total,
      title: 'Luis Krötz - METCHA | Newsletter Generator'
    }
  },
  {
    path: '/projects/metcha-cms',
    name: 'METCHA | CMS',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 67,
      total: total,
      title: 'Luis Krötz - METCHA | CMS'
    }
  },
  {
    path: '/projects/metcha-website',
    name: 'METCHA | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 66,
      total: total,
      title: 'Luis Krötz - METCHA | Website'
    }
  },
  {
    path: '/projects/melissa-sustainability',
    name: 'Melissa | Sustainability',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 65,
      total: total,
      title: 'Luis Krötz - Melissa | Sustainability'
    }
  },
  {
    path: '/projects/melissa-color-me',
    name: 'Melissa | Color ME',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 64,
      total: total,
      title: 'Luis Krötz - Melissa | Color ME'
    }
  },
  {
    path: '/projects/transainc-muda',
    name: 'Transainc | Muda',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 63,
      total: total,
      title: 'Luis Krötz - Transainc | Muda'
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2019',
    name: 'CICB | Sustainability Forum 2019',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 62,
      total: total,
      title: 'Luis Krötz - CICB | Sustainability Forum 2019'
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2018',
    name: 'CICB | Sustainability Forum 2018',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 61,
      total: total,
      title: 'Luis Krötz - CICB | Sustainability Forum 2018'
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2017',
    name: 'CICB | Sustainability Forum 2017',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 60,
      total: total,
      title: 'Luis Krötz - CICB | Sustainability Forum 2017'
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2016',
    name: 'CICB | Sustainability Forum 2016',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 59,
      total: total,
      title: 'Luis Krötz - CICB | Sustainability Forum 2016'
    }
  },
  {
    path: '/projects/coza-webpage',
    name: 'Coza | Webpage',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 58,
      total: total,
      title: 'Luis Krötz - Coza | Webpage'
    }
  },
  {
    path: '/projects/coza-where-to-find',
    name: 'Coza | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 57,
      total: total,
      title: 'Luis Krötz - Coza | Where to Find'
    }
  },
  {
    path: '/projects/melissa-family',
    name: 'Melissa | Family',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 56,
      total: total,
      title: 'Luis Krötz - Melissa | Family'
    }
  },
  {
    path: '/projects/melissa-mapping',
    name: 'Melissa | Mapping',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 55,
      total: total,
      title: 'Luis Krötz - Melissa | Mapping'
    }
  },
  {
    path: '/projects/melissa-mirror',
    name: 'Melissa | Mirror',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 54,
      total: total,
      title: 'Luis Krötz - Melissa | Mirror'
    }
  },
  {
    path: '/projects/melissa-open-vibes',
    name: 'Melissa | Open Vibes',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 53,
      total: total,
      title: 'Luis Krötz - Melissa | Open Vibes'
    }
  },
  {
    path: '/projects/melissa-a-la-garconne',
    name: 'Melissa | À Lá Garçonne',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 52,
      total: total,
      title: 'Luis Krötz - Melissa | À Lá Garçonne'
    }
  },
  {
    path: '/projects/melissa-awaytomars',
    name: 'Melissa | AWAYTOMARS',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 51,
      total: total,
      title: 'Luis Krötz - Melissa | AWAYTOMARS'
    }
  },
  {
    path: '/projects/melissa-baja-east',
    name: 'Melissa | Baja East',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 50,
      total: total,
      title: 'Luis Krötz - Melissa | Baja East'
    }
  },
  {
    path: '/projects/melissa-melissa+csc',
    name: 'Melissa | Melissa + CSC',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 49,
      total: total,
      title: 'Luis Krötz - Melissa | Melissa + CSC'
    }
  },
  {
    path: '/projects/melissa-fabula',
    name: 'Melissa | Fábula',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 48,
      total: total,
      title: 'Luis Krötz - Melissa | Fábula'
    }
  },
  {
    path: '/projects/melissa-melissa+rider',
    name: 'Melissa | Melissa + Rider',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 47,
      total: total,
      title: 'Luis Krötz - Melissa | Melissa + Rider'
    }
  },
  {
    path: '/projects/melissa-galleries-sp-nyc-lon',
    name: 'Melissa | Galleries SP\/NYC\/LON',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 46,
      total: total,
      title: 'Luis Krötz - Melissa | Galleries SP\/NYC\/LON'
    }
  },
  {
    path: '/projects/melissa-bike',
    name: 'Melissa | Bike',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 45,
      total: total,
      title: 'Luis Krötz - Melissa | Bike'
    }
  },
  {
    path: '/projects/melissa-creatives',
    name: 'Melissa | Creatives',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 44,
      total: total,
      title: 'Luis Krötz - Melissa | Creatives'
    }
  },
  {
    path: '/projects/melissa-sk8',
    name: 'Melissa | SK8',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 43,
      total: total,
      title: 'Luis Krötz - Melissa | SK8'
    }
  },
  {
    path: '/projects/melissa-possession',
    name: 'Melissa | Possession',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 42,
      total: total,
      title: 'Luis Krötz - Melissa | Possession'
    }
  },
  {
    path: '/projects/minimelissa-candy-framework',
    name: 'Minimelissa | Candy Framework',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 41,
      total: total,
      title: 'Luis Krötz - Minimelissa | Candy Framework'
    }
  },
  {
    path: '/projects/minimelissa-website',
    name: 'Minimelissa | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 40,
      total: total,
      title: 'Luis Krötz - Minimelissa | Website'
    }
  },
  {
    path: '/projects/minimelissa-a-w16',
    name: 'Minimelissa | A/W\'16',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 39,
      total: total,
      title: 'Luis Krötz - Minimelissa | A/W\'16'
    }
  },
  {
    path: '/projects/minimelissa-a-w17',
    name: 'Minimelissa | A/W\'17',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 38,
      total: total,
      title: 'Luis Krötz - Minimelissa | A/W\'17'
    }
  },
  {
    path: '/projects/minimelissa-a-w18',
    name: 'Minimelissa | A/W\'18',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 37,
      total: total,
      title: 'Luis Krötz - Minimelissa | A/W\'18'
    }
  },
  {
    path: '/projects/minimelissa-a-w19',
    name: 'Minimelissa | A/W\'19',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 36,
      total: total,
      title: 'Luis Krötz - Minimelissa | A/W\'19'
    }
  },
  {
    path: '/projects/minimelissa-where-to-find',
    name: 'Minimelissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 35,
      total: total,
      title: 'Luis Krötz - Minimelissa | Where to Find'
    }
  },
  {
    path: '/projects/minimelissa-s-s16',
    name: 'Minimelissa | S/S\'16',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 34,
      total: total,
      title: 'Luis Krötz - Minimelissa | S/S\'16'
    }
  },
  {
    path: '/projects/minimelissa-s-s17',
    name: 'Minimelissa | S/S\'17',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 33,
      total: total,
      title: 'Luis Krötz - Minimelissa | S/S\'17'
    }
  },
  {
    path: '/projects/minimelissa-s-s18',
    name: 'Minimelissa | S/S\'18',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 32,
      total: total,
      title: 'Luis Krötz - Minimelissa | S/S\'18'
    }
  },
  {
    path: '/projects/minimelissa-s-s19',
    name: 'Minimelissa | S/S\'19',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 31,
      total: total,
      title: 'Luis Krötz - Minimelissa | S/S\'19'
    }
  },
  {
    path: '/projects/mor-website',
    name: 'Mor | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 30,
      total: total,
      title: 'Luis Krötz - Mor | Website'
    }
  },
  {
    path: '/projects/mor-where-to-find',
    name: 'Mor | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 29,
      total: total,
      title: 'Luis Krötz - Mor | Where to Find'
    }
  },
  {
    path: '/projects/cicb-cscb-leather-law-brazilian-portal',
    name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 28,
      total: total,
      title: 'Luis Krötz - CICB / CSCB/ Leather Law / Brazilian Leather | Portal'
    }
  },
  {
    path: '/projects/melissa-new-features',
    name: 'Melissa | New Features',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 27,
      total: total,
      title: 'Luis Krötz - Melissa | New Features'
    }
  },
  {
    path: '/projects/melissa-flygrl',
    name: 'Melissa | Flygrl',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 26,
      total: total,
      title: 'Luis Krötz - Melissa | Flygrl'
    }
  },
  {
    path: '/projects/melissa-mashup',
    name: 'Melissa | Mashup',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 25,
      total: total,
      title: 'Luis Krötz - Melissa | Mashup'
    }
  },
  {
    path: '/projects/melissa-cine-melissa',
    name: 'Melissa | Cine Melissa',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 24,
      total: total,
      title: 'Luis Krötz - Melissa | Cine Melissa'
    }
  },
  {
    path: '/projects/melissa-dance-machine',
    name: 'Melissa | Dance Machine',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 23,
      total: total,
      title: 'Luis Krötz - Melissa | Dance Machine'
    }
  },
  {
    path: '/projects/melissa-eat-my-melissa',
    name: 'Melissa | Eat My Melissa',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 22,
      total: total,
      title: 'Luis Krötz - Melissa | Eat My Melissa'
    }
  },
  {
    path: '/projects/melissa-nation',
    name: 'Melissa | Nation',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 21,
      total: total,
      title: 'Luis Krötz - Melissa | Nation'
    }
  },
  {
    path: '/projects/melissa-starwalker',
    name: 'Melissa | Starwalker',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 20,
      total: total,
      title: 'Luis Krötz - Melissa | Starwalker'
    }
  },
  {
    path: '/projects/melissa-wanna-be-carioca',
    name: 'Melissa | Wanna Be Carioca',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 19,
      total: total,
      title: 'Luis Krötz - Melissa | Wanna Be Carioca'
    }
  },
  {
    path: '/projects/melissa-we-are-flowers',
    name: 'Melissa | We are Flowers',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 18,
      total: total,
      title: 'Luis Krötz - Melissa | We are Flowers'
    }
  },
  {
    path: '/projects/melissa-campana',
    name: 'Melissa | Campana',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 17,
      total: total,
      title: 'Luis Krötz - Melissa | Campana'
    }
  },
  {
    path: '/projects/melissa-gaetano-pesce',
    name: 'Melissa | Gaetano Pesce',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 16,
      total: total,
      title: 'Luis Krötz - Melissa | Gaetano Pesce'
    }
  },
  {
    path: '/projects/melissa-gareth-pugh',
    name: 'Melissa | Gareth Pugh',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 15,
      total: total,
      title: 'Luis Krötz - Melissa | Gareth Pugh'
    }
  },
  {
    path: '/projects/melissa-j-maskrey',
    name: 'Melissa | J Maskrey',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 14,
      total: total,
      title: 'Luis Krötz - Melissa | J Maskrey'
    }
  },
  {
    path: '/projects/melissa-jason-wu',
    name: 'Melissa | Jason Wu',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 13,
      total: total,
      title: 'Luis Krötz - Melissa | Jason Wu'
    }
  },
  {
    path: '/projects/melissa-jeremy-scott',
    name: 'Melissa | Jeremy Scott',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 12,
      total: total,
      title: 'Luis Krötz - Melissa | Jeremy Scott'
    }
  },
  {
    path: '/projects/melissa-karl-lagerfeld',
    name: 'Melissa | Karl Lagerfeld',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 11,
      total: total,
      title: 'Luis Krötz - Melissa | Karl Lagerfeld'
    }
  },
  {
    path: '/projects/melissa-sebastian-errazuriz',
    name: 'Melissa | Sebastian Errazuriz',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 10,
      total: total,
      title: 'Luis Krötz - Melissa | Sebastian Errazuriz'
    }
  },
  {
    path: '/projects/melissa-vitorino-campos',
    name: 'Melissa | Vitorino Campos',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 9,
      total: total,
      title: 'Luis Krötz - Melissa | Vitorino Campos'
    }
  },
  {
    path: '/projects/melissa-vivienne-westwood',
    name: 'Melissa | Vivienne Westwood',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 8,
      total: total,
      title: 'Luis Krötz - Melissa | Vivienne Westwood'
    }
  },
  {
    path: '/projects/melissa-zaha-hadid',
    name: 'Melissa | Zaha Hadid',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 7,
      total: total,
      title: 'Luis Krötz - Melissa | Zaha Hadid'
    }
  },
  {
    path: '/projects/melissa-where-to-find',
    name: 'Melissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 6,
      total: total,
      title: 'Luis Krötz - Melissa | Where to Find'
    }
  },
  {
    path: '/projects/melissa-roller-joy',
    name: 'Melissa | Roller Joy',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 5,
      total: total,
      title: 'Luis Krötz - Melissa | Roller Joy'
    }
  },
  {
    path: '/projects/melissa-tropico-surreal',
    name: 'Melissa | Tropico Surreal',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 4,
      total: total,
      title: 'Luis Krötz - Melissa | Tropico Surreal'
    }
  },
  {
    path: '/projects/mor-loja-mor',
    name: 'Mor | Loja Mor',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 3,
      total: total,
      title: 'Luis Krötz - Mor | Loja Mor'
    }
  },
  {
    path: '/projects/vibra-website',
    name: 'Vibra | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 2,
      total: total,
      title: 'Luis Krötz - Vibra | Website'
    }
  },
  {
    path: '/projects/genesysinf-sageweb',
    name: 'GenesysInf | SageWeb',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 1,
      total: total,
      title: 'Luis Krötz - GenesysInf | SageWeb'
    }
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: 'Error404'*/ '../views/NotFound'),
    meta: {
      title: 'Luis Krötz - 404'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.use(VueAnalytics, {
  id: 'UA-142757641-1',
  router,
  autoTracking: {
    skipSamePath: true,
    pageviewTemplate (route) {
      return {
        page: route.path,
        title: document.title,
        location: window.location.hrefcoo
      }
    }
  }
});

export default router
