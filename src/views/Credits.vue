<template>
<div class="footer-open">
    <main class="max-area credits">
        <article>
          <div class="about main">
            <h2 class="main-title" v-view @click="sendAnalyticsEvent('credits_link', 'click','home', 100)"><router-link to="/">luiskr</router-link></h2>
            <h3 class="main-subtitle" v-view><span>Credits</span></h3>
            <p class="main-text" v-view><span>Special thanks for everyone that makes the web a better place by sharing resources. In this page, are listed all imagens, and main technologies used to build this website.</span></p>
            <h3 class="main-subtitle" v-view><span>Tech</span></h3>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'VueJS', 50)" href="https://vuejs.org/">VUEJS</a>, for Vue being the handiest and amazing framework to build quick, reliable and easy to maintain projects. Great shout out. </span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Threejs', 50)" href="https://threejs.org/">Threejs</a>, awsome JS lib for 3D rendering.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Google Fonts', 50)" href="https://fonts.google.com/">Google Fonts</a>, for providing with amazing typography without cost to beautify the web.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Sass', 50)" href="https://sass-lang.com/">Sass</a>, for making my life a lot easier.main-text</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Modernizr', 50)" href="https://modernizr.com/download/?-webp-setclasses">Modernizr</a>, for feature detection.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Checkview', 50)" href="https://vtimofeev.github.io/vue-check-view/index.html">Check Viewport Plugin from Vtimofeev</a>, an amazing plugin to detect if an object is on the current viewport, used for the play and pause functions of the videos on the homepage.</span></p>

            <h3 class="main-subtitle" v-view><span>Font Awsome</span></h3>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Font Awsome', 50)" href="https://fontawesome.com/license">Font Awsome</a>, for the amazing icons.</span></p>
            
            <h3 class="main-subtitle" v-view><span>GIPHY, for the amazing images that gave life to this project.</span></h3>
            <p class="main-text">
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ">https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/corona-covid19-quarantine-ZdliYXsCr5IAd3c3ZC">https://giphy.com/gifs/corona-covid19-quarantine-ZdliYXsCr5IAd3c3ZC</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/l0MYz8G9LOyebz0Qg">https://giphy.com/gifs/l0MYz8G9LOyebz0Qg</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/art-pink-green-3oFzm91Nna2F7SOceY">https://giphy.com/gifs/art-pink-green-3oFzm91Nna2F7SOceY</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/cat-video-kitty-r7Y17m4862kdW">https://giphy.com/gifs/cat-video-kitty-r7Y17m4862kdW</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/glitch-vhs-max-capacity-yugSj8GSC0wXm">https://giphy.com/gifs/glitch-vhs-max-capacity-yugSj8GSC0wXm</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/1990s-vhs-old-r7yDTMHecleQo">https://giphy.com/gifs/1990s-vhs-old-r7yDTMHecleQo</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/trippy-gif-artist-ericaofanderson-5bDAc3il2DySZAFGpQ">https://giphy.com/gifs/trippy-gif-artist-ericaofanderson-5bDAc3il2DySZAFGpQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/filmeditor--halloween-elvira-mistress-of-the-dark-3otPopD7T9VunkHd3a">https://giphy.com/gifs/filmeditor--halloween-elvira-mistress-of-the-dark-3otPopD7T9VunkHd3a</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/hellogiggles-work-cats-kSCB3oEcIpwRO">https://giphy.com/gifs/hellogiggles-work-cats-kSCB3oEcIpwRO</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/teddy-mr-bean-comedia-OC5Wo0drhtbwc">https://giphy.com/gifs/teddy-mr-bean-comedia-OC5Wo0drhtbwc</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/iOjNaLUI4oBgc">https://giphy.com/gifs/iOjNaLUI4oBgc</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/filmeditor--halloween-elvira-l2YWnw4TcCv5Vkgb6">https://giphy.com/gifs/filmeditor--halloween-elvira-l2YWnw4TcCv5Vkgb6</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/filmeditor--halloween-elvira-l2YWl72uc2Y15pIZy">https://giphy.com/gifs/filmeditor--halloween-elvira-l2YWl72uc2Y15pIZy</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/indigo-devil-wears-prada-that-is-all-gnsrxBc8QM7HW">https://giphy.com/gifs/indigo-devil-wears-prada-that-is-all-gnsrxBc8QM7HW</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/datamosh-databend-glitch-aesthetic-3o6fIUQjrb4DP1L4VG">https://giphy.com/gifs/datamosh-databend-glitch-aesthetic-3o6fIUQjrb4DP1L4VG</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/animation-ryan-seslow-l396Oh9gQ8tgumEJa">https://giphy.com/gifs/animation-ryan-seslow-l396Oh9gQ8tgumEJa</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/devindixon4597-yoJC2mCjCz82DqwaYg">https://giphy.com/gifs/devindixon4597-yoJC2mCjCz82DqwaYg</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-art-glitch-5JjIHhKc5iDh6">https://giphy.com/gifs/g1ft3d-art-glitch-5JjIHhKc5iDh6</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-art-glitch-60uCqMSFnctS8">https://giphy.com/gifs/g1ft3d-art-glitch-60uCqMSFnctS8</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-glitch-selfie-kidmograph-k8SOCi0VrjMu4">https://giphy.com/gifs/gustavo-glitch-selfie-kidmograph-k8SOCi0VrjMu4</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/glitch-art-datamosh-l4FGA0xBoEElheOC4">https://giphy.com/gifs/glitch-art-datamosh-l4FGA0xBoEElheOC4</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-loop-wsLkjgj5Rsehq">https://giphy.com/gifs/gustavo-art-glitch-loop-wsLkjgj5Rsehq</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-art-artists-on-tumblr-glitch-i49SWoLaY6Amc">https://giphy.com/gifs/g1ft3d-art-artists-on-tumblr-glitch-i49SWoLaY6Amc</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/11Y323Z7VwHEHK">https://giphy.com/gifs/11Y323Z7VwHEHK</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-databending-7qB9VEJcER9OE">https://giphy.com/gifs/gustavo-art-glitch-databending-7qB9VEJcER9OE</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-art-artists-on-tumblr-glitch-GBp5j8rt6M4AU">https://giphy.com/gifs/g1ft3d-art-artists-on-tumblr-glitch-GBp5j8rt6M4AU</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-artists-on-tumblr-glitch-DBQPbld7pXUmQ">https://giphy.com/gifs/gustavo-art-artists-on-tumblr-glitch-DBQPbld7pXUmQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/xcopy-xcopy-6TpNN0rW0LB9S">https://giphy.com/gifs/xcopy-xcopy-6TpNN0rW0LB9S</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-loop-Ncy6r92OIDPZC">https://giphy.com/gifs/gustavo-art-glitch-loop-Ncy6r92OIDPZC</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/animation-glitch-psychedelic-3kMifXiz9GbV37Sm9c">https://giphy.com/gifs/animation-glitch-psychedelic-3kMifXiz9GbV37Sm9c</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/theglitchmob-the-glitch-mob-fQJff33AEc2x3C3krm">https://giphy.com/gifs/theglitchmob-the-glitch-mob-fQJff33AEc2x3C3krm</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-glitch-c4d-kidmograph-m0I3oxp0ukfEk">https://giphy.com/gifs/gustavo-glitch-c4d-kidmograph-m0I3oxp0ukfEk</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/devindixon4597-3EAKx2exEC3jF9Obny">https://giphy.com/gifs/devindixon4597-3EAKx2exEC3jF9Obny</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-kidmograph-gustavo-OekalV33vD5q8">https://giphy.com/gifs/gustavo-art-kidmograph-gustavo-OekalV33vD5q8</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-loop-KZ71nR9Y8Tcs0">https://giphy.com/gifs/gustavo-art-glitch-loop-KZ71nR9Y8Tcs0</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-glitch-loop-kidmograph-wnTUf1ewxM2L6">https://giphy.com/gifs/gustavo-glitch-loop-kidmograph-wnTUf1ewxM2L6</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-kidmograph-1rxv1iFpqXQSQ">https://giphy.com/gifs/gustavo-art-glitch-kidmograph-1rxv1iFpqXQSQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-glitch-loop-kidmograph-14sOybKVrP71FS">https://giphy.com/gifs/gustavo-glitch-loop-kidmograph-14sOybKVrP71FS</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-glitch-3d-databending-eZ8Pk4R79d9m">https://giphy.com/gifs/g1ft3d-glitch-3d-databending-eZ8Pk4R79d9m</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-loop-head-12rs0LaEVysD16">https://giphy.com/gifs/gustavo-art-loop-head-12rs0LaEVysD16</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/kidmograph-gustavo-torres-rSCwJKGcN8CeQ">https://giphy.com/gifs/kidmograph-gustavo-torres-rSCwJKGcN8CeQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/glitch-art-datamosh-l4FGA0xBoEElheOC4">https://giphy.com/gifs/glitch-art-datamosh-l4FGA0xBoEElheOC4</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-glitch-rhVTVG7raYZAQ">https://giphy.com/gifs/gustavo-art-glitch-rhVTVG7raYZAQ</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-kidmograph-gustavo-mEpqV5CKACVs4">https://giphy.com/gifs/gustavo-art-kidmograph-gustavo-mEpqV5CKACVs4</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/gustavo-art-artists-on-tumblr-loop-94MXuCWZ6jZe">https://giphy.com/gifs/gustavo-art-artists-on-tumblr-loop-94MXuCWZ6jZe</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/g1ft3d-art-g1ft3d-VSW6yk6z7uety">https://giphy.com/gifs/g1ft3d-art-g1ft3d-VSW6yk6z7uety</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/mira-pleaseenjoythis-please-enjoy-this-KCevOBsYI8rwix4M7W">https://giphy.com/stickers/mira-pleaseenjoythis-please-enjoy-this-KCevOBsYI8rwix4M7W</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/check-this-out-LPrvoqQQdjVnZ92sFG">https://giphy.com/stickers/check-this-out-LPrvoqQQdjVnZ92sFG</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/tamu-check-this-out-SXNLjqUAOX9PtwuZTj">https://giphy.com/stickers/tamu-check-this-out-SXNLjqUAOX9PtwuZTj</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/fox-cinziopeillustration-check-this-KyNceNnI2CTGoN5y3H">https://giphy.com/stickers/fox-cinziopeillustration-check-this-KyNceNnI2CTGoN5y3H</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/point-linzie-hunter-WTuTn6rpDkMAYuBlPH">https://giphy.com/stickers/point-linzie-hunter-WTuTn6rpDkMAYuBlPH</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/transparent-dzDQnmrU5i8w5X7rvL">https://giphy.com/stickers/transparent-dzDQnmrU5i8w5X7rvL</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/transparent-dzDQnmrU5i8w5X7rvL">https://giphy.com/stickers/transparent-dzDQnmrU5i8w5X7rvL</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/fox-cinziopeillustration-check-this-XckNvpgQGiHPMjJHCc">https://giphy.com/stickers/fox-cinziopeillustration-check-this-XckNvpgQGiHPMjJHCc</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/go-n-check-it-out-RLV39cb2U9dnOPzYbU">https://giphy.com/stickers/go-n-check-it-out-RLV39cb2U9dnOPzYbU</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/point-pointing-this-is-cool-kE9C524P4auce7Gl2l">https://giphy.com/stickers/point-pointing-this-is-cool-kE9C524P4auce7Gl2l</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/cbs-violett-beane-god-friended-me-brandon-michael-hall-JSpj7yBZs6tpwzxBXY">https://giphy.com/stickers/cbs-violett-beane-god-friended-me-brandon-michael-hall-JSpj7yBZs6tpwzxBXY</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/pc-mac-windows-J5dm29T4xgwyEnUYYc">https://giphy.com/stickers/pc-mac-windows-J5dm29T4xgwyEnUYYc</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/arrow-link-click-RIXh7plKz6DvtbsacW">https://giphy.com/stickers/arrow-link-click-RIXh7plKz6DvtbsacW</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/arrow-here-aqui-mC7BziSmtviRL2604c">https://giphy.com/stickers/arrow-here-aqui-mC7BziSmtviRL2604c</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/stickers/arrow-here-click-dyYHdXPVMOhpgHN3Ns">https://giphy.com/stickers/arrow-here-click-dyYHdXPVMOhpgHN3Ns</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/motion-slow-goodness-zInikDLcEaNCo">https://giphy.com/gifs/motion-slow-goodness-zInikDLcEaNCo</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/slow-PnejBhs0NuLja">https://giphy.com/gifs/slow-PnejBhs0NuLja</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/time-coffee-break-6NlmBQLhWy2QM">https://giphy.com/gifs/time-coffee-break-6NlmBQLhWy2QM</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/3jVT4U5bilspG">https://giphy.com/gifs/3jVT4U5bilspG</a><br><br>
              <a v-view @click="sendAnalyticsEvent('credits_link', 'click', 'giphy', 25)" target="_blank" rel="noopener" href="https://giphy.com/gifs/nasa-nasareactions-Js7cqIkpxFy0bILFFA">https://giphy.com/gifs/nasa-nasareactions-Js7cqIkpxFy0bILFFA</a>
            </p>
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
  name: 'Credits',
  data() {
    return {
      storage: this.$parent.storage,
      webp2: this.$parent.webp2
    }
  },
  created() {
    document.body.classList.add("black");
    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  sendAnalyticsEvent(category, action, label, value) {
    this.$parent.sendAnalyticsEvent(category, action, label, value);
  }
}
</script>