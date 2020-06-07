<template>
  <div>
    <main class="max-area">
        <article>
          <div class="about main">
            <h2 class="main-title" v-view @click="sendAnalyticsEvent('about_link', 'click','home', 100)"><router-link to="/">luiskr</router-link></h2>
            <h3 class="main-subtitle" v-view>About Me</h3>
            <p class="main-text" v-view>I'm a Frond-End Developer currently working full time at <a @click="sendAnalyticsEvent('about_link', 'click','transainc', 100)" href="https://www.instagram.com/transainc_" rel="noopener">transainc</a>. Living in Porto Alegre / Brazil, and a part-time Freelancer.<br>
                                <router-link to="/">Feel free to explore</router-link> and contact me at any time, by <a @click="sendAnalyticsEvent('about_link', 'click','mailto', 200)" href="mailto:luis.krotz@gmail.com" rel="noopener">email</a>, <a @click="sendAnalyticsEvent('about_link', 'click','tel', 200)" href="tel:+55982274782" rel="noopener">imessage</a> or <a @click="sendAnalyticsEvent('about_link', 'click','whatsapp', 200)" href="https://api.whatsapp.com/send?phone=+5551982274782" rel="noopener">whatsapp</a>.
            </p>
            <p class="main-text" v-view>I went to college at UFSM / Federal University of Santa Maria, on the City of Frederico Westphalen - Brazil, and graduated in August of 2014 in Technology in Systems for the Internet.
              <video v-view loading="lazy" :poster="storage + 'college' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'college.m3u8'"/>
                <source type="video/mp4" :src="storage + 'college.mp4'"/>
                <source type="video/webm" :src="storage + 'college.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle" v-view>Working at transainc</h3>
            <p class="main-text" v-view>Started as a Jr. front-end developer on Apr. 2016 then, I learned a lot and became a front-end developer on Dez. 2016, the opportunities kept appearing and I started leading the front-end at Jan of 2018, and now I'm managing the front-end team while working as the leading front end developer until this date.</p>

            <h3 class="main-subtitle" v-view>Freelancing</h3>
            <p class="main-text" v-view>I started my "<em>one-man army</em>" company in 2016 to test my skills and since then been working on side jobs non stop as a Freelancer.
              <video v-view loading="lazy" :poster="storage + 'cat-lady' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'cat-lady.m3u8'"/>
                <source type="video/mp4" :src="storage + 'cat-lady.mp4'"/>
                <source type="video/webm" :src="storage + 'cat-lady.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle" v-view>Genesyinf / Dismaquinas</h3>
            <p class="main-text" v-view>When I graduated, I started working for a short period at Dismáquinas, on Frederico Westphalen, then I moved to Santana do Livramento, to live with my parents for a while, and work at Genesysinf, before leaving to Porto Alegre, my current home.</p>

            <h3 class="main-subtitle" v-view>Whats keeps me sane</h3>
            <p class="main-text" v-view>I enjoy listening to music, music is my way to relax after a hard, stressful or normal day, I can listen to music at any given moment - <em>if the moment allows it.</em>
              <video v-view loading="lazy" :poster="storage + 'music' + webp2" playsinline autoplay muted loop width="480" height="264">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'music.m3u8'"/>
                <source type="video/mp4" :src="storage + 'music.mp4'"/>
                <source type="video/webm" :src="storage + 'music.webm'"/>
              </video>
            </p>
            <p class="main-text" v-view>Another passion of mine is video games, I love playing for hours and hours and hours.</p>
            <p class="main-text" v-view>I also love reading, the narratives, the places one can go while reading is fantastic. There is no better way to meet the unknown than a book.</p>
            <p class="main-text" v-view>I love to write, one of my favourite past time is to sit on my iPad and write a novel or an article by hand.</p>
            <p class="main-text" v-view>I love photography, check out some <a @click="sendAnalyticsEvent('about_link', 'click', 'instagram', 100)" href="https://www.instagram.com/j_luiskrotz" rel="noopener">Instagram pictures</a> of mine.</p>
            
            <h3 class="main-subtitle" v-view>I love to learn</h3>
            <p class="main-text" v-view>Be it watching a ted talk, an video on youtube, coding for fun, developing a crazy system just by the sake of it, learning a new language, I just love learning.</p>
            <p class="main-text" v-view>I learned English playing video games and listening to music, I learned to code by trial, error and bing watching tutorials. I can't get enough of experimenting, is so exciting.</p>

            <h3 class="main-subtitle" v-view>Languages</h3>
            <p class="main-text" v-view>I love learning a new language and to practise those I already know, like English, German, Spanish, Portuguese, and love to scratch a few words in Italian, French and Latin.
              <video v-view loading="lazy" :poster="storage + 'bean' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'bean.m3u8'"/>
                <source type="video/mp4" :src="storage + 'bean.mp4'"/>
                <source type="video/webm" :src="storage + 'bean.webm'"/>
              </video>
            </p>

            <h3 class="main-subtitle" v-view>Awards</h3>
            <p class="main-text" v-view>At the College, I was awarded the prize of being placed between the <a @click="sendAnalyticsEvent('about_link', 'click', '40 melhores', 100)" href="http://www2.fw.iffarroupilha.edu.br/site/index.php/649-trabalho-de-aluno-do-cafw-entre-os-40-melhores-da-jai">40 best works of the 28th JAI</a></p>
            <p class="main-text" v-view>Recently I submitted the version 1.0 of this website to AWWWARDS and got a nomination.</p>

            <h3 class="main-subtitle" v-view>Contact Information</h3>
            <p class="main-text" v-view>Email: <a @click="sendAnalyticsEvent('about_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a><br>Address: Avenida João Pessoa, 925 / APTO. 14 / Farroupilha - Porto Alegre (RS) / BR</p>
          </div>
        </article>
    </main>
  </div>
</template>

<script>

import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);
export default {
  name: 'About',
  data() {
    return {
      webp2: this.$parent.webp2,
      storage: this.$parent.storage
    }
  },
  created() {
    let self = this;

    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  methods: {
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    }
  }
}
</script>