<template>
  <div>
    <main class="max-area">
        <article>
          <div class="about main">
            <h2 class="main-title">About</h2>
            <p class="main-text">I went to college at UFSM / Federal University of Santa Maria, on the City of Frederico Westphalen - Brazil, and graduated in August of 2014 in Technology in Systems for the Internet.
              <video loading="lazy" :poster="storage + 'college' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'college.m3u8'"/>
                <source type="video/mp4" :src="storage + 'college.mp4'"/>
                <source type="video/webm" :src="storage + 'college.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle">Working at transainc</h3>
            <p class="main-text">Started as a Jr. front-end developer on Apr. 2016 then, I learned a lot and became a front-end developer on Dez. 2016, the opportunities kept appearing and I started leading the front-end at Jan of 2018, and now I'm managing the front-end team while working as the leading front end developer until this date.</p>

            <h3 class="main-subtitle">Freelancing</h3>
            <p class="main-text">I started my "<em>one-man army</em>" company in 2016 to test my skills and since then been working on side jobs non stop as a Freelancer.
              <video loading="lazy" :poster="storage + 'cat-lady' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'cat-lady.m3u8'"/>
                <source type="video/mp4" :src="storage + 'cat-lady.mp4'"/>
                <source type="video/webm" :src="storage + 'cat-lady.webm'"/>
              </video>
            </p>
            <h3 class="main-subtitle">Genesyinf / Dismaquinas</h3>
            <p class="main-text">When I graduated, I started working for a short period at Dismáquinas, on Frederico Westphalen, then I moved to Santana do Livramento, to live with my parents for a while, and work at Genesysinf, before leaving to Porto Alegre, my current home.</p>

            <h3 class="main-subtitle">Whats keeps me sane</h3>
            <p class="main-text">I enjoy listening to music, music is my way to relax after a hard, stressful or normal day, I can listen to music at any given moment - <em>if the moment allows it.</em>
              <video loading="lazy" :poster="storage + 'music' + webp2" playsinline autoplay muted loop width="480" height="264">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'music.m3u8'"/>
                <source type="video/mp4" :src="storage + 'music.mp4'"/>
                <source type="video/webm" :src="storage + 'music.webm'"/>
              </video>
            </p>
            <p class="main-text">Another passion of mine is video games, I love playing for hours and hours and hours.</p>
            <p class="main-text">I also love reading, the narratives, the places one can go while reading is fantastic. There is no better way to meet the unknown than a book.</p>
            <p class="main-text">I love to write, one of my favourite past time is to sit on my iPad and write a novel or an article by hand.</p>
            <p class="main-text">I love photography, check out some <a @click="sendAnalyticsEvent('about_link', 'click', 'instagram', 100)" href="https://www.instagram.com/j_luiskrotz" rel="noopener">Instagram pictures</a> of mine.</p>
            
            <h3 class="main-subtitle">I love to learn</h3>
            <p class="main-text">Be it watching a ted talk, an video on youtube, coding for fun, developing a crazy system just by the sake of it, learning a new language, I just love learning.</p>
            <p class="main-text">I learned English playing video games and listening to music, I learned to code by trial, error and bing watching tutorials. I can't get enough of experimenting, is so exciting.</p>

            <h3 class="main-subtitle">Languages</h3>
            <p class="main-text">I love learning a new language and to practise those I already know, like English, German, Spanish, Portuguese, and love to scratch a few words in Italian, French and Latin.
              <video loading="lazy" :poster="storage + 'bean' + webp2" playsinline autoplay muted loop width="480" height="270">
                <source type="application/vnd.apple.mpegurl" :src="storage + 'bean.m3u8'"/>
                <source type="video/mp4" :src="storage + 'bean.mp4'"/>
                <source type="video/webm" :src="storage + 'bean.webm'"/>
              </video>
            </p>

            <h3 class="main-subtitle">Awards</h3>
            <p class="main-text">At the College, I was awarded the prize of being placed between the <a @click="sendAnalyticsEvent('about_link', 'click', '40 melhores', 100)" href="http://www2.fw.iffarroupilha.edu.br/site/index.php/649-trabalho-de-aluno-do-cafw-entre-os-40-melhores-da-jai">40 best works of the 28th JAI</a></p>
            <p class="main-text">Recently I submitted the version 1.0 of this website to AWWWARDS and got a nomination.</p>

            <h3 class="main-subtitle">Published Articles</h3>
            <p class="main-text">VICENTE, D. ; ECKHARDT, D. D. ; OLIVEIRA, E. S. ; Krotz.Jacson ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; Ricardo Antunes Vieira ; PIVETTA, E. M. ; Cárla Callegaro Corrêa Kader . THE DEVELOPMENT OF INSTRUMENTAL ENGLISH ACTIVITIES VERSUS LEARNING STRATEGIES. Disciplinarum Scientia. Série Artes, Letras e Comunicação, v. 11, p. 137-147, 2010.</p>
            <p class="main-text">PIVETTA, E. M. ; ULBRICHT, V. R. ; Krotz.Jacson . Análise Para Desenvolver Um Tradutor Automatizado Da Língua Português Escrito Para A Libras. In: Ergodesign - Usihc, 2012. Lexus, 2012, 2012.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criando Jogos Didáticos em Inglês Instrumental a partir do Software Livre Hot Potatoes. In: II EATI - Encontro Anual de Tecnologia da Informação e Semana de Tecnologia da Informação, 2011, Frederico Westphalen. Anais do EATI - Encontro Anual de Tecnologia da Informação e Semana de Tecnologia da Informação, 2011.</p>
            <p class="main-text">PIVETTA, E. M. ; Krotz.JL ; ULBRICHT, V. R. . Definições de Métodos e Ferramentas Aplicáveis na Tradução Automática da Língua Portuguesa para a Língua Brasileira de Sinais. In: SABTIC - I Seminario Argentina-Brasil de Tecnologias da Informação e da Comunicação, 2011, Rosário, SF. SABTIC, 2011.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; Franciscatto. Msc Roberto . ANALI: Protótipo de um Sistema Especialista Web para análise de alimentos com o uso da linguagem de programação PHP. In: IV EATI, 2013, Frederico Westphalen. Anais do EATI - Encontro Anual de Tecnologia da Informação e Semana Acadêmica de Tecnologia da Informação, 2013. v. 1. p. 257-260.</p>
            <p class="main-text">Krotz.JL; Cárla Callegaro Corrêa Kader . Holografia: Evolução e Técnicas de Geração de Hologramas.. In: 27ª JAI, 2012, Santa Maria. Anais da 27ª JAI, 2012.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . DESENVOLVENDO UM SISTEMA ESPECIALISTA WEB PARA ANÁLISE ALIMENTAR. In: 66ª Reunião Anual da SBPC - 22 a 27 de Julho de 2014- UFAC - Rio Branco, 2014, Rio Branco. 66ª Reunião Anual - 22 a 27 de Julho de 2014- UFAC - Rio Branco, 2014.</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . Desenvolvendo um Sistema Especialista Web para Análise alimentar. In: 28ª Jai, 2013, Santa Maria. Anais 28ª Jornada Acadêmica Integrada, 2013.</p>

            <h3 class="main-subtitle">Presentations</h3>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. . Desenvolvendo um Sistema Especialista Web para Análise Alimentar. 2013. (Apresentação de Trabalho/Outra).</p>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; Franciscatto. Msc Roberto . ANALI: Protótipo de um Sistema Especialista Web para análise de Alimentos com o uso da linguagem de programação PHP. 2013. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">PEREIRA, A. S. ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; FLECK, J. P. ; Krotz.JL . Desenvolvimento de Sites para Divulgação de Empresas na Internet. 2012. (Apresentação de Trabalho/Outra).</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criando Jogos Didáticos em Inglês Instrumental a partir do Software Livre Hot Potatoes. 2011. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">Elisa Pivetta Cantarelli ; ULBRICHT, V. ; Krotz, J.L . Definições de Métodos e Ferramentas Aplicáveis na Tradução Automática da Língua Portuguesa para a Língua Brasileira de Sinais. 2011. (Apresentação de Trabalho/Seminário).</p>
            <p class="main-text">Krotz.JL; Cárla Callegaro Corrêa Kader . Holografia: Evolução e Técnicas de Geração de Hologramas.. 2011. (Apresentação de Trabalho/Outra).</p>

            <h3 class="main-subtitle">Unregistered Softwares</h3>
            <p class="main-text">Krotz.JL; PEREIRA, A. S. ; PEREIRA, A. S. . Sistema Especialista Web em Análise de Alimentos. 2014.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; ECKHARDT, D. D. ; Elisa Pivetta Cantarelli ; Krotz, J.L ; Mateus Berlatto da Rosa ; Natiel Cazarotto Chiavegatti ; OLIVEIRA, E. S. ; Ricardo Antunes Vieira ; VICENTE, D. . Criação de Jogos Educativos com o Software Livre Hot Potatoes. 2011.</p>
            <p class="main-text">Cárla Callegaro Corrêa Kader ; Krotz, J.L . Criação do Sumário em HTML para o projeto Criação de Jogos educativos para o auxilio no aprendizado da Lingua Inglesa Instrumental. 2011. (Editoração/Catálogo).</p>

            <h3 class="main-subtitle">Some Art</h3>
            <p class="main-text">Krotz.JL; Lewandowski, Isis . Banner - Semana de Integração da Calourada UFSM 2012. 2012. Computação Gráfica.</p>
          
            <h3 class="main-subtitle">Thank You</h3>
            <p class="main-text">Thanks for reading, feel free to contact me at <a @click="sendAnalyticsEvent('about_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a></p>
            
            <h3 class="main-subtitle">Contact Information</h3>
            <p class="main-text">Email: <a @click="sendAnalyticsEvent('about_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a><br>Address: Avenida João Pessoa, 925 / APTO. 14 / Farroupilha - Porto Alegre (RS) / BR</p>
          </div>
        </article>
    </main>
  </div>
</template>

<script>
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

    document.body.classList.remove("black");
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

<style lang="scss">
@import '../sass/variables';
@import '../sass/mixins';
@import '../sass/placeholders';
@import '../sass/extends';

@import '../sass/AboutComponent/main.scss';
</style>
