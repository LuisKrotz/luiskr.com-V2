<template>
  <div>
    <HeaderComponent current="about" />

    <video class="about-bg" loading="lazy" :poster="storage + 'work' + webp" playsinline autoplay muted loop>
      <source type="application/vnd.apple.mpegurl" :src="storage + 'work.m3u8'"/>
      <source type="video/mp4" :src="storage + 'work.mp4'"/>
      <source type="video/webm" :src="storage + 'work.webm'"/>
    </video>
    <main class="max-area">
        <article>
          <div class="about main">
            <h2 class="main-title">About</h2>
            <p class="main-text">I went to college at UFSM / Federal University of Santa Maria, on the City of Frederico Westphalen - Brazil, and graduated on August of 2014 in Technology in Sistems for the Internet.
              <video loading="lazy" :poster="storage + 'college' + webp" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'college.m3u8'"/>
                <source type="video/mp4" :src="storage + 'college.mp4'"/>
                <source type="video/webm" :src="storage + 'college.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle">Working at transainc</h3>
            <p class="main-text">Started as a Jr. front-end developer on Apr. 2016 they I learned a lot an became a front-end developer on dez. 2016 the oportunities kept appearing and I started leading the front-end at Jan of 2018, and now I'm managing the front-end team while working as the leading front end developer until this date.</p>

            <h3 class="main-subtitle">Freelacing</h3>
            <p class="main-text">I starded my "<em>one man army</em>" company on 2016 to test my skills and since then been working on side jobs non stop as a Freelancer.
              <video loading="lazy" :poster="storage + 'cat-lady' + webp" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'cat-lady.m3u8'"/>
                <source type="video/mp4" :src="storage + 'cat-lady.mp4'"/>
                <source type="video/webm" :src="storage + 'cat-lady.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle">Genesyinf / Dismaquinas</h3>
            <p class="main-text">When I graduated, I started working for a short period of time at Dismáquinas, on Frederico Westphalen, then I moved to Santana do Livramento, to live with my parents for a while, and work at Genesysinf, before leaving to Porto Alegre, my current home.</p>

            <h3 class="main-subtitle">Whats keeps me sane</h3>
            <p class="main-text">I really enjoy listening to music, music is my way to relax after a hard, stressfull or plainly normal day, I can listen to music at any given moment - <em>if the moment allows it.</em>
              <video loading="lazy" :poster="storage + 'music' + webp" playsinline autoplay muted loop width="480" height="264">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'music.m3u8'"/>
                <source type="video/mp4" :src="storage + 'music.mp4'"/>
                <source type="video/webm" :src="storage + 'music.webm'"/>
              </video>
            </p>
            <p class="main-text">Another passion of mine are video games, I love playing for hours and hours and hours.</p>
            <p class="main-text">I also love reading, the narratives, the places one can go while reading are fantastic. There is no better way to meet the unknown than a book.</p>
            <p class="main-text">I love to write, one of my favourite past time is to sit on my ipad and write a novel or an article by hand.</p>
            <p class="main-text">I love Photography, check out some <a href="https://www.instagram.com/j_luiskrotz" rel="noopener">instagram pictures</a> of mine.</p>
            
            <h3 class="main-subtitle">I love to Learn</h3>
            <p class="main-text">Be it watching a ted talk, an video on youtube, coding for fun, developing a crazu system just by the sake of it, learning a new language, I just love learning.</p>
            <p class="main-text">I learned english playing video games and listening to music, I learned to code by trial, error and bing watching tutorials. I can't get enought of experimenting, is so exciting.</p>

            <h3 class="main-subtitle">Languages</h3>
            <p class="main-text">I love learnign a new language and to practise those I already know, like English, German, Spanish, Portuguese, and love to scratch a few words in Italian, French and Latin.
              <video loading="lazy" :poster="storage + 'bean' + webp" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'bean.m3u8'"/>
                <source type="video/mp4" :src="storage + 'bean.mp4'"/>
                <source type="video/webm" :src="storage + 'bean.webm'"/>
              </video>
            </p>

            <h3 class="main-subtitle">Awards</h3>
            <p class="main-text">At the College I was awarded the prize of being placed between the <a href="http://www2.fw.iffarroupilha.edu.br/site/index.php/649-trabalho-de-aluno-do-cafw-entre-os-40-melhores-da-jai">40 best works of the 28th JAI</a></p>
            <p class="main-text">Recently I submited the version 1.0 of this website to AWWWARDS and got a nomination.</p>

            <h3 class="main-subtitle">Published Articles</h3>
            <p class="main-text">VICENTE, D. ; ECKHARDT, D. D. ; OLIVEIRA, E. S. ; Krotz.Jacson ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; Ricardo Antunes Vieira ; PIVETTA, E. M. ; Cárla Callegaro Corrêa Kader . THE DEVELOPMENT OF INSTRUMENTAL ENGLISH ACTIVITIES VERSUS LEARNING STRATEGIES. Disciplinarum Scientia. Série Artes, Letras e Comunicação, v. 11, p. 137-147, 2010.</p>
            <p class="main-text">PIVETTA, E. M. ; ULBRICHT, V. R. ; Krotz.Jacson . Análise Para Desenvolver Um Tradutor Automatizado Da Língua Português Escrito Para A Libras. In: Ergodesign - Usihc, 2012. Lexus, 2012, 2012.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criando Jogos Didáticos em Inglês Instrumental a partir do Software Livre Hot Potatoes. In: II EATI - Encontro Anual de Tecnologia da Informação e Semana de Tecnologia da Informação, 2011, Frederico Westphalen. Anais do EATI - Encontro Anual de Tecnologia da Informação e Semana de Tecnologia da Informação, 2011.</p>
            <p class="main-text">PIVETTA, E. M. ; Krotz.JL ; ULBRICHT, V. R. . Definições de Métodos e Ferramentas Aplicáveis na Tradução Automática da Língua Portuguesa para a Língua Brasileira de Sinais. In: SABTIC - I Seminario Argentina-Brasil de Tecnologias da Informação e da Comunicação, 2011, Rosário, SF. SABTIC, 2011.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; Franciscatto. Msc Roberto . ANALI: Protótipo de um Sistema Especialista Web para análise de alimentos com o uso da linguagem de programação PHP. In: IV EATI, 2013, Frederico Westphalen. Anais do EATI - Encontro Anual de Tecnologia da Informação e Semana Acadêmica de Tecnologia da Informação, 2013. v. 1. p. 257-260.</p>
            <p class="main-text">Krotz.JL; Cárla Callegaro Corrêa Kader . Holografia: Evolução e Técnicas de Geração de Hologramas.. In: 27ª JAI, 2012, Santa Maria. Anais da 27ª JAI, 2012.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . DESENVOLVENDO UM SISTEMA ESPECIALISTA WEB PARA ANÁLISE ALIMENTAR. In: 66ª Reunião Anual da SBPC - 22 a 27 de Julho de 2014- UFAC - Rio Branco, 2014, Rio Branco. 66ª Reunião Anual - 22 a 27 de Julho de 2014- UFAC - Rio Branco, 2014.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . Desenvolvendo um Sistema Especialista Web para Análise alimentar. In: 28ª Jai, 2013, Santa Maria. Anais 28ª Jornada Acadêmica Integrada, 2013.</p>

            <h3 class="main-subtitle">Presenations</h3>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . Desenvolvendo um Sistema Especialista Web para Análise Alimentar. 2013. (Apresentação de Trabalho/Outra).</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; Franciscatto. Msc Roberto . ANALI: Protótipo de um Sistema Especialista Web para análise de Alimentos com o uso da linguagem de programação PHP. 2013. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">PEREIRA, A. S. ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; FLECK, J. P. ; Krotz.JL . Desenvolvimento de Sites para Divulgação de Empresas na Internet. 2012. (Apresentação de Trabalho/Outra).</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criando Jogos Didáticos em Inglês Instrumental a partir do Software Livre Hot Potatoes. 2011. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">Elisa Pivetta Cantarelli ; ULBRICHT, V. ; Krotz, J.L . Definições de Métodos e Ferramentas Aplicáveis na Tradução Automática da Língua Portuguesa para a Língua Brasileira de Sinais. 2011. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">Krotz.JL; Cárla Callegaro Corrêa Kader . Holografia: Evolução e Técnicas de Geração de Hologramas.. 2011. (Apresentação de Trabalho/Outra).</p>

            <h3 class="main-subtitle">Unregistered Softwates</h3>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; PEREIRA, A. S. . Sistema Especialista Web em Análise de Alimentos. 2014.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criação de Jogos Educativos com o Software Livre Hot Potatoes. 2011.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; Krotz, J.L . Criação do Sumário em HTML para o projeto Criação de Jogos educativos para o auxilio no aprendizado da Lingua Inglesa Instrumental. 2011. (Editoração/Catálogo).</p>

            <h3 class="main-subtitle">Some ART</h3>
            <p class="main-text">Krotz.JL; Lewandowski, Isis . Banner - Seman de Integração da Calourada UFSM 2012. 2012. Computação Gráfica.</p>
          
            <h3 class="main-subtitle">Thank You</h3>
            <p class="main-text">Thanks for reading, feel free to contact me at <a href="luis.krotz@gmail.com">luis.krotz@gmail.com</a></p>
          </div>
        </article>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'About',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      webp: this.$parent.webp,
      placeholder: this.$parent.placeholder,
      storage: this.$parent.storage,
      origin: this.$parent.origin
    }
  },
  created() {
    let self = this;

    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  }
}
</script>

<style lang="scss">
@import '../sass/variables';
@import '../sass/mixins';
@import '../sass/placeholders';
@import '../sass/extends';

@import '../sass/AboutComponent/main.scss';

.about-bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
    object-position: center;
    filter: blur(7px) sepia(1) invert(1);
    opacity: .2;
}

.about {
  &-bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
    object-position: center;
    filter: blur(7px) sepia(1) invert(1);
    opacity: .2;
  }

  .main-text {
    video {
      display: block;
      position: relative;
      object-fit: cover;
      object-position: center;
      margin: 0 auto;
      max-width: to-em(520);
      margin-top: to-em(24);
      margin-bottom: to-em(40);
      width: 100%;
      height: auto;
      box-shadow: 10px 10px 0px 0 rgba(0, 0, 0, .1), 20px 20px 1px 0 rgba(0, 0, 0, 0.15);

      @include layout-768() {
         margin-top: to-em(40);
         margin-bottom: to-em(24);
      }

      @include layout-1024() {
        margin-left: 0;
        max-width: calc(100% - 20px);
      }
    }
  }
}
</style>
