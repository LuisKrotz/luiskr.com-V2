import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import {getCLS, getFID, getLCP} from 'web-vitals';
import NProgress from 'nprogress';
import Home from '../views/Home.vue'

import '../../node_modules/nprogress/nprogress.css'

Vue.use(VueRouter)

const total = 73;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'luiskr.com | Portfolio',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About'),
    meta: {
      title: 'luiskr.com | About',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Frond-End Developer currently working full time at transainc. Living in Porto Alegre \/ Brazil, and a part time Freelancer.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Frond-End Developer currently working full time at transainc. Living in Porto Alegre \/ Brazil, and a part time Freelancer.'
        }
      ]
    }
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import(/* webpackChunkName: "Social" */ '../views/Social'),
    meta: {
      title: 'luiskr.com | Social',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out my social network links.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out my social network links.'
        }
      ]
    }
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "Credits" */ '../views/Credits'),
    meta: {
      title: 'luiskr.com | Credits',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the stuff I used on my page here.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the stuff I used on my page here.'
        }
      ]
    }
  },
  {
    path: '/gdpr',
    name: 'GDPR',
    component: () => import(/* webpackChunkName: "GDPR" */ '../views/GDPR'),
    meta: {
      title: 'luiskr.com | GDPR',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out about GDPR compliance here.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out about GDPR compliance here.'
        }
      ]
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicy'),
    meta: {
      title: 'luiskr.com | Privacy Policy',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out about cookies and privacy info here.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out about cookies and privacy info here.'
        }
      ]
    }
  },
  {
    path: '/terms-of-use',
    name: 'Terms of Use',
    component: () => import(/* webpackChunkName: "TermsOfUse" */ '../views/TermsOfUse'),
    meta: {
      title: 'luiskr.com | Terms of Use',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the legal stuff.'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the legal stuff.'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-next-br',
    name: 'Melissa | Next',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      title: 'luiskr.com |  ',
      last: true,
      id: 73,
      total: total,
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project '
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project '
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-dreamers',
    name: 'Minimelissa | AW\'20',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 72,
      total: total,
      title: 'luiskr.com |  ',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project '
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project '
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-color-me',
    name: 'Minimelissa | SS\'20',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 71,
      total: total,
      title: 'luiskr.com |  ',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project '
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project '
        }
      ]
    }
  },
  {
    path: '/projects/melissa-dreamers-infinitos',
    name: 'Melissa | Dreamers / Infinitos',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 70,
      total: total,
      title: 'luiskr.com |  ',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project '
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project '
        }
      ]
    }
  },
  {
    path: '/projects/metcha-newsletter',
    name: 'METCHA | Newsletter',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 69,
      total: total,
      title: 'luiskr.com | METCHA | Newsletter',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Newsletter'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Newsletter'
        }
      ]
    }
  },
  {
    path: '/projects/metcha-newsletter-generator',
    name: 'METCHA | Newsletter Generator',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 68,
      total: total,
      title: 'luiskr.com | METCHA | Newsletter Generator',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Newsletter Generator'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Newsletter Generator'
        }
      ]
    }
  },
  {
    path: '/projects/metcha-cms',
    name: 'METCHA | CMS',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 67,
      total: total,
      title: 'luiskr.com | METCHA | CMS',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | CMS'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | CMS'
        }
      ]
    }
  },
  {
    path: '/projects/metcha-website',
    name: 'METCHA | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 66,
      total: total,
      title: 'luiskr.com | METCHA | Website',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Website'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: METCHA | Website'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-sustainability',
    name: 'Melissa | Sustainability',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 65,
      total: total,
      title: 'luiskr.com | Melissa | Sustainability',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Sustainability'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Sustainability'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-color-me',
    name: 'Melissa | Color ME',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 64,
      total: total,
      title: 'luiskr.com | Melissa | Color ME',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Color ME'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Color ME'
        }
      ]
    }
  },
  {
    path: '/projects/transainc-muda',
    name: 'Transainc | Muda',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 63,
      total: total,
      title: 'luiskr.com | Transainc | Muda',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Transainc | Muda'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Transainc | Muda'
        }
      ]
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2019',
    name: 'CICB | Sustainability Forum 2019',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 62,
      total: total,
      title: 'luiskr.com | CICB | Sustainability Forum 2019',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2019'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2019'
        }
      ]
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2018',
    name: 'CICB | Sustainability Forum 2018',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 61,
      total: total,
      title: 'luiskr.com | CICB | Sustainability Forum 2018',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2018'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2018'
        }
      ]
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2017',
    name: 'CICB | Sustainability Forum 2017',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 60,
      total: total,
      title: 'luiskr.com | CICB | Sustainability Forum 2017',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2017'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2017'
        }
      ]
    }
  },
  {
    path: '/projects/cicb-sustainability-forum-2016',
    name: 'CICB | Sustainability Forum 2016',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 59,
      total: total,
      title: 'luiskr.com | CICB | Sustainability Forum 2016',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2016'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: CICB | Sustainability Forum 2016'
        }
      ]
    }
  },
  {
    path: '/projects/coza-webpage',
    name: 'Coza | Webpage',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 58,
      total: total,
      title: 'luiskr.com | Coza | Webpage',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Coza | Webpage'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Coza | Webpage'
        }
      ]
    }
  },
  {
    path: '/projects/coza-where-to-find',
    name: 'Coza | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 57,
      total: total,
      title: 'luiskr.com | Coza | Where to Find',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Coza | Where to Find'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Coza | Where to Find'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-family',
    name: 'Melissa | Family',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 56,
      total: total,
      title: 'luiskr.com | Melissa | Family',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Family'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Family'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-mapping',
    name: 'Melissa | Mapping',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 55,
      total: total,
      title: 'luiskr.com | Melissa | Mapping',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mapping'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mapping'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-mirror',
    name: 'Melissa | Mirror',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 54,
      total: total,
      title: 'luiskr.com | Melissa | Mirror',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mirror'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mirror'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-open-vibes',
    name: 'Melissa | Open Vibes',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 53,
      total: total,
      title: 'luiskr.com | Melissa | Open Vibes',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Open Vibes'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Open Vibes'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-a-la-garconne',
    name: 'Melissa | À Lá Garçonne',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 52,
      total: total,
      title: 'luiskr.com | Melissa | À Lá Garçonne',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | À Lá Garçonne'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | À Lá Garçonne'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-awaytomars',
    name: 'Melissa | AWAYTOMARS',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 51,
      total: total,
      title: 'luiskr.com | Melissa | AWAYTOMARS',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | AWAYTOMARS'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | AWAYTOMARS'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-baja-east',
    name: 'Melissa | Baja East',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 50,
      total: total,
      title: 'luiskr.com | Melissa | Baja East',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Baja East'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Baja East'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-melissa+csc',
    name: 'Melissa | Melissa + CSC',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 49,
      total: total,
      title: 'luiskr.com | Melissa | Melissa + CSC',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Melissa + CSC'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Melissa + CSC'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-fabula',
    name: 'Melissa | Fábula',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 48,
      total: total,
      title: 'luiskr.com | Melissa | Fábula',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Fábula'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Fábula'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-melissa+rider',
    name: 'Melissa | Melissa + Rider',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 47,
      total: total,
      title: 'luiskr.com | Melissa | Melissa + Rider',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Melissa + Rider'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Melissa + Rider'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-galleries-sp-nyc-lon',
    name: 'Melissa | Galleries SP\/NYC\/LON',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 46,
      total: total,
      title: 'luiskr.com | Melissa | Galleries SP\/NYC\/LON',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Galleries SP\/NYC\/LON'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Galleries SP\/NYC\/LON'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-bike',
    name: 'Melissa | Bike',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 45,
      total: total,
      title: 'luiskr.com | Melissa | Bike',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Bike'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Bike'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-creatives',
    name: 'Melissa | Creatives',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 44,
      total: total,
      title: 'luiskr.com | Melissa | Creatives',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Creatives'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Creatives'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-sk8',
    name: 'Melissa | SK8',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 43,
      total: total,
      title: 'luiskr.com | Melissa | SK8',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | SK8'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | SK8'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-possession',
    name: 'Melissa | Possession',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 42,
      total: total,
      title: 'luiskr.com | Melissa | Possession',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Possession'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Possession'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-candy-framework',
    name: 'Minimelissa | Candy Framework',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 41,
      total: total,
      title: 'luiskr.com | Minimelissa | Candy Framework',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Candy Framework'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Candy Framework'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-website',
    name: 'Minimelissa | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 40,
      total: total,
      title: 'luiskr.com | Minimelissa | Website',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Website'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Website'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-a-w16',
    name: 'Minimelissa | A/W\'16',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 39,
      total: total,
      title: 'luiskr.com | Minimelissa | A/W\'16',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'16'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'16'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-a-w17',
    name: 'Minimelissa | A/W\'17',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 38,
      total: total,
      title: 'luiskr.com | Minimelissa | A/W\'17',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'17'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'17'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-a-w18',
    name: 'Minimelissa | A/W\'18',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 37,
      total: total,
      title: 'luiskr.com | Minimelissa | A/W\'18',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'18'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'18'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-a-w19',
    name: 'Minimelissa | A/W\'19',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 36,
      total: total,
      title: 'luiskr.com | Minimelissa | A/W\'19',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'19'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | A/W\'19'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-where-to-find',
    name: 'Minimelissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 35,
      total: total,
      title: 'luiskr.com | Minimelissa | Where to Find',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Where to Find'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | Where to Find'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-s-s16',
    name: 'Minimelissa | S/S\'16',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 34,
      total: total,
      title: 'luiskr.com | Minimelissa | S/S\'16',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'16'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'16'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-s-s17',
    name: 'Minimelissa | S/S\'17',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 33,
      total: total,
      title: 'luiskr.com | Minimelissa | S/S\'17',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'17'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'17'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-s-s18',
    name: 'Minimelissa | S/S\'18',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 32,
      total: total,
      title: 'luiskr.com | Minimelissa | S/S\'18',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'18'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'18'
        }
      ]
    }
  },
  {
    path: '/projects/minimelissa-s-s19',
    name: 'Minimelissa | S/S\'19',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 31,
      total: total,
      title: 'luiskr.com | Minimelissa | S/S\'19',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'19'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Minimelissa | S/S\'19'
        }
      ]
    }
  },
  {
    path: '/projects/mor-website',
    name: 'Mor | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 30,
      total: total,
      title: 'luiskr.com | Mor | Website',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Website'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Website'
        }
      ]
    }
  },
  {
    path: '/projects/mor-where-to-find',
    name: 'Mor | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 29,
      total: total,
      title: 'luiskr.com | Mor | Where to Find',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Where to Find'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Where to Find'
        }
      ]
    }
  },
  {
    path: '/projects/cicb-cscb-leather-law-brazilian-portal',
    name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 28,
      total: total,
      title: 'luiskr.com | CICB / CSCB/ Leather Law / Brazilian Leather | Portal',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: CICB / CSCB/ Leather Law / Brazilian Leather | Portal'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: CICB / CSCB/ Leather Law / Brazilian Leather | Portal'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-new-features',
    name: 'Melissa | New Features',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 27,
      total: total,
      title: 'luiskr.com | Melissa | New Features',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | New Features'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | New Features'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-flygrl',
    name: 'Melissa | Flygrl',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 26,
      total: total,
      title: 'luiskr.com | Melissa | Flygrl',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Flygrl'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Flygrl'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-mashup',
    name: 'Melissa | Mashup',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 25,
      total: total,
      title: 'luiskr.com | Melissa | Mashup',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mashup'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Mashup'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-cine-melissa',
    name: 'Melissa | Cine Melissa',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 24,
      total: total,
      title: 'luiskr.com | Melissa | Cine Melissa',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Cine Melissa'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Cine Melissa'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-dance-machine',
    name: 'Melissa | Dance Machine',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 23,
      total: total,
      title: 'luiskr.com | Melissa | Dance Machine',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Dance Machine'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Dance Machine'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-eat-my-melissa',
    name: 'Melissa | Eat My Melissa',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 22,
      total: total,
      title: 'luiskr.com | Melissa | Eat My Melissa',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Eat My Melissa'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Eat My Melissa'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-nation',
    name: 'Melissa | Nation',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 21,
      total: total,
      title: 'luiskr.com | Melissa | Nation',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Nation'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Nation'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-starwalker',
    name: 'Melissa | Starwalker',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 20,
      total: total,
      title: 'luiskr.com | Melissa | Starwalker',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Starwalker'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Starwalker'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-wanna-be-carioca',
    name: 'Melissa | Wanna Be Carioca',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 19,
      total: total,
      title: 'luiskr.com | Melissa | Wanna Be Carioca',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Wanna Be Carioca'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Wanna Be Carioca'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-we-are-flowers',
    name: 'Melissa | We are Flowers',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 18,
      total: total,
      title: 'luiskr.com | Melissa | We are Flowers',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | We are Flowers'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | We are Flowers'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-campana',
    name: 'Melissa | Campana',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 17,
      total: total,
      title: 'luiskr.com | Melissa | Campana',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Campana'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Campana'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-gaetano-pesce',
    name: 'Melissa | Gaetano Pesce',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 16,
      total: total,
      title: 'luiskr.com | Melissa | Gaetano Pesce',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Gaetano Pesce'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Gaetano Pesce'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-gareth-pugh',
    name: 'Melissa | Gareth Pugh',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 15,
      total: total,
      title: 'luiskr.com | Melissa | Gareth Pugh',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Gareth Pugh'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Gareth Pugh'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-j-maskrey',
    name: 'Melissa | J Maskrey',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 14,
      total: total,
      title: 'luiskr.com | Melissa | J Maskrey',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | J Maskrey'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | J Maskrey'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-jason-wu',
    name: 'Melissa | Jason Wu',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 13,
      total: total,
      title: 'luiskr.com | Melissa | Jason Wu',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Jason Wu'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Jason Wu'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-jeremy-scott',
    name: 'Melissa | Jeremy Scott',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 12,
      total: total,
      title: 'luiskr.com | Melissa | Jeremy Scott',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Jeremy Scott'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Jeremy Scott'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-karl-lagerfeld',
    name: 'Melissa | Karl Lagerfeld',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 11,
      total: total,
      title: 'luiskr.com | Melissa | Karl Lagerfeld',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Karl Lagerfeld'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Karl Lagerfeld'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-sebastian-errazuriz',
    name: 'Melissa | Sebastian Errazuriz',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 10,
      total: total,
      title: 'luiskr.com | Melissa | Sebastian Errazuriz',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Sebastian Errazuriz'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Sebastian Errazuriz'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-vitorino-campos',
    name: 'Melissa | Vitorino Campos',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 9,
      total: total,
      title: 'luiskr.com | Melissa | Vitorino Campos',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Vitorino Campos'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Vitorino Campos'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-vivienne-westwood',
    name: 'Melissa | Vivienne Westwood',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 8,
      total: total,
      title: 'luiskr.com | Melissa | Vivienne Westwood',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Vivienne Westwood'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Vivienne Westwood'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-zaha-hadid',
    name: 'Melissa | Zaha Hadid',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 7,
      total: total,
      title: 'luiskr.com | Melissa | Zaha Hadid',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Zaha Hadid'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Zaha Hadid'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-where-to-find',
    name: 'Melissa | Where to Find',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 6,
      total: total,
      title: 'luiskr.com | Melissa | Where to Find',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Where to Find'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Where to Find'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-roller-joy',
    name: 'Melissa | Roller Joy',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 5,
      total: total,
      title: 'luiskr.com | Melissa | Roller Joy',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Roller Joy'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Roller Joy'
        }
      ]
    }
  },
  {
    path: '/projects/melissa-tropico-surreal',
    name: 'Melissa | Tropico Surreal',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 4,
      total: total,
      title: 'luiskr.com | Melissa | Tropico Surreal',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Tropico Surreal'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Melissa | Tropico Surreal'
        }
      ]
    }
  },
  {
    path: '/projects/mor-loja-mor',
    name: 'Mor | Loja Mor',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 3,
      total: total,
      title: 'luiskr.com | Mor | Loja Mor',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Loja Mor'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Mor | Loja Mor'
        }
      ]
    }
  },
  {
    path: '/projects/vibra-website',
    name: 'Vibra | Website',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 2,
      total: total,
      title: 'luiskr.com | Vibra | Website',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: Vibra | Website'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: Vibra | Website'
        }
      ]
    }
  },
  {
    path: '/projects/genesysinf-sageweb',
    name: 'GenesysInf | SageWeb',
    component: ()  => import(/* webpackChunkName: "Project" */ '../views/Project'),
    meta: {
      id: 1,
      total: total,
      title: 'luiskr.com | GenesysInf | SageWeb',
      metaTags: [{
          name: 'description',
          content: 'Hy, I\'m Luis. Check out the project: GenesysInf | SageWeb'
        },
        {
          property: 'og:description',
          content: 'Hy, I\'m Luis. Check out the project: GenesysInf | SageWeb'
        }
      ]
    }
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: 'Error404'*/ '../views/NotFound'),
    meta: {
      title: 'luiskr.com | 404',
      metaTags: [{
          name: 'description',
          content: 'Ops! Page not found.'
        },
        {
          property: 'og:description',
          content: 'Ops! Page not found.'
        }
      ]
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const n_options = {
  latencyThreshold: 0,        // Number of ms before progressbar starts showing, default: 100,
  router: true,               // Show progressbar when navigating routes, default: true
  http: true                 // Show progressbar when doing Vue.http, default: true
};

Vue.use(NProgress, n_options)

// This callback runs before every route change, including on page load.
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
})

router.afterEach((to, from) => {
  NProgress.done();
})

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
      fetch('/analytics', {body, method: 'POST', keepalive: true});
}


function init() {
  Vue.use(VueAnalytics, {
    id: 'UA-142757641-1',
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
  });


  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
}

if (Boolean(localStorage.getItem('cookie')) === true) {
  init();
} else {
  document.addEventListener('accepted', function() {
    if (Boolean(localStorage.getItem('cookie')) === true) {
      init();
    }
  });
}
export default router
