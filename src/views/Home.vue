<template>
  <div>
    <main class="home">
      <article class="main ">
            <div id="square-1"></div>
            <div id="square-2"></div>
            <div id="square-3"></div>

            <div class="max-area">
              <h3 class="main-title"><span><router-link to="/about">Hy, I'm Luis.</router-link>Check out the projects I worked on in the last years' bellow.</span></h3>
            </div>
            <div class="home-projects">
              <div class="max-area">
              <router-link class="home-project" :to="post.path" v-for="(post, index) in posts" :key="index" :style="sethover">
                    <h3 class="home-project-title"  @mouseleave="clear()" @mouseenter="hover($event)" @mousemove="onMouseMove($event)" @click="projectClick('portfolio_link', 'click', post.project, 100)">
                        <span v-view>{{ post.name }}</span>
                    </h3>
              </router-link>
              </div>
            </div>
        <img v-if="this.$parent.domLoaded && !this.$parent.has_touch" :src="storage + 'click/'+ random + '.gif'" class="hover" :style="'transform: translate3D(' + page.left + 'px, ' + page.top + 'px, 0);'+ (showhover ? ' visibility: visible; opacity: 1' : ' visibility: hidden; opacity: 0')" alt="" aria-hidden="true">
      </article>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'HomeComponent',
  data() {
    return {
        storage: this.$parent.storage,
        origin: this.$parent.origin,
        sethover: '',
        hovers: 13,
        showhover: false,
        random: 0,
        page: {
          left : 0,
          top: 0
        },
        posts: [
          {
            path: '/projects/melissa-next-br',
            name: 'Melissa | Next'
          },
          {
            path: '/projects/minimelissa-dreamers',
            name: 'Minimelissa | AW\'20'
          },
          {
            path: '/projects/minimelissa-color-me',
            name: 'Minimelissa | SS\'20'
          },
          {
            path: '/projects/melissa-dreamers-infinitos',
            name: 'Melissa | Dreamers / Infinitos'
          },
          {
            path: '/projects/metcha-newsletter',
            name: 'METCHA | Newsletter'
          },
          {
            path: '/projects/metcha-newsletter-generator',
            name: 'METCHA | Newsletter Generator'
          },
          {
            path: '/projects/metcha-cms',
            name: 'METCHA | CMS'
          },
          {
            path: '/projects/metcha-website',
            name: 'METCHA | Website'
          },
          {
            path: '/projects/melissa-sustainability',
            name: 'Melissa | Sustainability'
          },
          {
            path: '/projects/melissa-color-me',
            name: 'Melissa | Color ME'
          },
          {
            path: '/projects/transainc-muda',
            name: 'Transainc | Muda'
          },
          {
            path: '/projects/cicb-sustainability-forum-2019',
            name: 'CICB | Sustainability Forum 2019'
          },
          {
            path: '/projects/cicb-sustainability-forum-2018',
            name: 'CICB | Sustainability Forum 2018'
          },
          {
            path: '/projects/cicb-sustainability-forum-2017',
            name: 'CICB | Sustainability Forum 2017'
          },
          {
            path: '/projects/cicb-sustainability-forum-2016',
            name: 'CICB | Sustainability Forum 2016'
          },
          {
            path: '/projects/coza-webpage',
            name: 'Coza | Webpage'
          },
          {
            path: '/projects/coza-where-to-find',
            name: 'Coza | Where to Find'
          },
          {
            path: '/projects/melissa-family',
            name: 'Melissa | Family'
          },
          {
            path: '/projects/melissa-mapping',
            name: 'Melissa | Mapping'
          },
          {
            path: '/projects/melissa-mirror',
            name: 'Melissa | Mirror'
          },
          {
            path: '/projects/melissa-open-vibes',
            name: 'Melissa | Open Vibes'
          },
          {
            path: '/projects/melissa-a-la-garconne',
            name: 'Melissa | À Lá Garçonne'
          },
          {
            path: '/projects/melissa-awaytomars',
            name: 'Melissa | AWAYTOMARS'
          },
          {
            path: '/projects/melissa-baja-east',
            name: 'Melissa | Baja East'
          },
          {
            path: '/projects/melissa-melissa+csc',
            name: 'Melissa | Melissa + CSC'
          },
          {
            path: '/projects/melissa-fabula',
            name: 'Melissa | Fábula'
          },
          {
            path: '/projects/melissa-melissa+rider',
            name: 'Melissa | Melissa + Rider'
          },
          {
            path: '/projects/melissa-galleries-sp-nyc-lon',
            name: 'Melissa | Galleries SP\/NYC\/LON'
          },
          {
            path: '/projects/melissa-bike',
            name: 'Melissa | Bike'
          },
          {
            path: '/projects/melissa-creatives',
            name: 'Melissa | Creatives'
          },
          {
            path: '/projects/melissa-sk8',
            name: 'Melissa | SK8'
          },
          {
            path: '/projects/melissa-possession',
            name: 'Melissa | Possession'
          },
          {
            path: '/projects/minimelissa-candy-framework',
            name: 'Minimelissa | Candy Framework'
          },
          {
            path: '/projects/minimelissa-website',
            name: 'Minimelissa | Website'
          },
          {
            path: '/projects/minimelissa-a-w16',
            name: 'Minimelissa | A/W\'16'
          },
          {
            path: '/projects/minimelissa-a-w17',
            name: 'Minimelissa | A/W\'17'
          },
          {
            path: '/projects/minimelissa-a-w18',
            name: 'Minimelissa | A/W\'18'
          },
          {
            path: '/projects/minimelissa-a-w19',
            name: 'Minimelissa | A/W\'19'
          },
          {
            path: '/projects/minimelissa-where-to-find',
            name: 'Minimelissa | Where to Find'
          },
          {
            path: '/projects/minimelissa-s-s16',
            name: 'Minimelissa | S/S\'16'
          },
          {
            path: '/projects/minimelissa-s-s17',
            name: 'Minimelissa | S/S\'17'
          },
          {
            path: '/projects/minimelissa-s-s18',
            name: 'Minimelissa | S/S\'18'
          },
          {
            path: '/projects/minimelissa-s-s19',
            name: 'Minimelissa | S/S\'19'
          },
          {
            path: '/projects/mor-website',
            name: 'Mor | Website'
          },
          {
            path: '/projects/mor-where-to-find',
            name: 'Mor | Where to Find'
          },
          {
            path: '/projects/cicb-cscb-leather-law-brazilian-portal',
            name: 'CICB / CSCB/ Leather Law / Brazilian Leather | Portal'
          },
          {
            path: '/projects/melissa-new-features',
            name: 'Melissa | New Features'
          },
          {
            path: '/projects/melissa-flygrl',
            name: 'Melissa | Flygrl'
          },
          {
            path: '/projects/melissa-mashup',
            name: 'Melissa | Mashup'
          },
          {
            path: '/projects/melissa-cine-melissa',
            name: 'Melissa | Cine Melissa'
          },
          {
            path: '/projects/melissa-dance-machine',
            name: 'Melissa | Dance Machine'
          },
          {
            path: '/projects/melissa-eat-my-melissa',
            name: 'Melissa | Eat My Melissa'
          },
          {
            path: '/projects/melissa-nation',
            name: 'Melissa | Nation'
          },
          {
            path: '/projects/melissa-starwalker',
            name: 'Melissa | Starwalker'
          },
          {
            path: '/projects/melissa-wanna-be-carioca',
            name: 'Melissa | Wanna Be Carioca'
          },
          {
            path: '/projects/melissa-we-are-flowers',
            name: 'Melissa | We are Flowers'
          },
          {
            path: '/projects/melissa-campana',
            name: 'Melissa | Campana'
          },
          {
            path: '/projects/melissa-gaetano-pesce',
            name: 'Melissa | Gaetano Pesce'
          },
          {
            path: '/projects/melissa-gareth-pugh',
            name: 'Melissa | Gareth Pugh'
          },
          {
            path: '/projects/melissa-j-maskrey',
            name: 'Melissa | J Maskrey'
          },
          {
            path: '/projects/melissa-jason-wu',
            name: 'Melissa | Jason Wu'
          },
          {
            path: '/projects/melissa-jeremy-scott',
            name: 'Melissa | Jeremy Scott'
          },
          {
            path: '/projects/melissa-karl-lagerfeld',
            name: 'Melissa | Karl Lagerfeld'
          },
          {
            path: '/projects/melissa-sebastian-errazuriz',
            name: 'Melissa | Sebastian Errazuriz'
          },
          {
            path: '/projects/melissa-vitorino-campos',
            name: 'Melissa | Vitorino Campos'
          },
          {
            path: '/projects/melissa-vivienne-westwood',
            name: 'Melissa | Vivienne Westwood'
          },
          {
            path: '/projects/melissa-zaha-hadid',
            name: 'Melissa | Zaha Hadid'
          },
          {
            path: '/projects/melissa-where-to-find',
            name: 'Melissa | Where to Find'
          },
          {
            path: '/projects/melissa-roller-joy',
            name: 'Melissa | Roller Joy'
          },
          {
            path: '/projects/melissa-tropico-surreal',
            name: 'Melissa | Tropico Surreal'
          },
          {
            path: '/projects/mor-loja-mor',
            name: 'Mor | Loja Mor'
          },
          {
            path: '/projects/vibra-website',
            name: 'Vibra | Website'
          },
          {
            path: '/projects/genesysinf-sageweb',
            name: 'GenesysInf | SageWeb'
          }
        ]
    }
  },
  mounted() {
    const scroll1 = document.body.querySelector('#square-1'),
          scroll2 = document.body.querySelector('#square-2'),
          scroll3 = document.body.querySelector('#square-3'),
          title = document.body.querySelector('.main-title');

    let last_known_scroll_position = 0,
        ticking = false,
        vh = window.innerHeight / 10;

      function animate(scroll_pos) {
        title.style = `opacity: ${vh / scroll_pos}`;
        if (window.innerWidth < 640)
          scroll1.style = `transform: translate3d(-${scroll_pos}px, 0, 0)`;
        else if (window.innerWidth < 1024)
          scroll1.style = `transform: translate3d(0, -${scroll_pos}px , 0)`;
        else
          scroll1.style = `transform: translate3d(${scroll_pos}px, 0, 0)`;
        
        scroll2.style = `transform: translate3d(${scroll_pos}px, 0, 0)`;
        scroll3.style = `transform: translate3d(-${scroll_pos}px, 0, 0)`;
      }

      window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function() {
            animate(last_known_scroll_position);
            ticking = false;
          });

          ticking = true;
        }
      });
  },
  methods: {
    onMouseMove(e) {
      if(!this.$parent.has_touch) {
        this.page.left = e.pageX - 50;
        this.page.top = e.pageY - 25;
      }
    },
    hover(e) {
      if(!this.$parent.has_touch) {
        this.showhover = true;
        this.random = Math.round(Math.random() * this.hovers);

        this.onMouseMove(e);
      }
    },
    clear() {
        this.showhover = false;
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    projectClick(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    }
  }
}
</script>

