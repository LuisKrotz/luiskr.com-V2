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

            <router-link class="footer-link" :to="translations.home[0]" v-if="current !== 'home' && current === 'social'" style="text-align: center">
                <span>
                    <svg width="18" height="18" style="fill:white" class="shuttle">
                        <use xlink:href="#svg-space-shuttle"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.home[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.about[0]" v-if="current !== 'about'" :style="'text-align: '+ (current === 'social' ? 'right' : current === 'info' ? 'left' : 'center')">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-scroll"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.about[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.home[0]" v-if="current !== 'home' && current !== 'social'" style="text-align: center">
                <span>
                    <svg width="18" height="18" style="fill:white" class="shuttle">
                        <use xlink:href="#svg-space-shuttle"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.home[1] }}</p>
                </span>
            </router-link>

            <router-link class="footer-link" :to="translations.social[0]" v-if="current !== 'social'" style="text-align: right">
                <span>
                    <svg width="18" height="18" style="fill:white">
                        <use xlink:href="#svg-user-astronaut"/>
                    </svg>
                    <p class="footer-link-title">{{ translations.social[1] }}</p>
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
            origin: this.$parent.origin,
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
