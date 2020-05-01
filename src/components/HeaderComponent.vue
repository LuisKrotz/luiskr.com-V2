<template>
    <header class="footer">
        <div class="max-area" v-if="translations !== undefined">
            <h3 class="hdn">{{ translations.title }}</h3>

            <button class="footer-link footer-more" @click="footerOpen()" v-if="current !== 'info'" style="text-align: left">
            <span>
                <svg width="18" height="18" style="fill:white">
                    <use xlink:href="#svg-caret-up"/>
                </svg>
                <p v-if="!open" class="footer-link-title">{{ translations.toggle[0] }}</p>
                <p v-else class="footer-link-title">{{ translations.toggle[1] }}</p>
            </span>
            </button>

            <router-link class="footer-link" :to="translations.home[0]" v-if="current !== 'home' && current === 'awards'" style="text-align: center">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-home"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.home[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.about[0]" v-if="current !== 'about'" :style="'text-align: '+ (current === 'awards' ? 'right' : current === 'info' ? 'left' : 'center')">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-portrait"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.about[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.home[0]" v-if="current !== 'home' && current !== 'awards'" style="text-align: center">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-home"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.home[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.awards[0]" v-if="current !== 'awards'" style="text-align: right">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-trophy"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.awards[1] }}</p>
                </span>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return {
            origin: window.location.origin,
            translations: undefined,
            open: false
        }
    },
    props: {
      current: {
            default: 'home',
            required: true
      }
    },
    methods: {
        footerOpen() {
            if(this.open) {
                document.body.classList.remove("footer-open");
                this.open = false;
            } else {
                document.body.classList.add("footer-open");
                this.open = true;
            }
        }
    },
    created() {
      let self = this;

      fetch(`${self.origin}/translations/en_us/header.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.translations = data;
        });
    }
}
</script>
