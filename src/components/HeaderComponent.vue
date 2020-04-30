<template>
    <header class="footer max-area">
        <h3 class="hdn">Menu</h3>

        <button class="footer-link footer-more active" @click="footerOpen()" v-if="current !== 'info'" style="text-align: left">
          <span>
            <svg width="18" height="18" style="fill:white">
                <use xlink:href="#svg-caret-up"/>
            </svg>
            <p v-if="!open" class="footer-link-title">More</p>
            <p v-else class="footer-link-title">Less</p>
          </span>
        </button>

        <router-link class="footer-link" to="/" v-if="current !== 'home' && current === 'awards'" style="text-align: center">
            <span>
                <svg width="18" height="18" style="fill:white">
                    <use xlink:href="#svg-home"/>
                </svg>
                <p class="footer-link-title">Home</p>
            </span>
        </router-link>

        <router-link class="footer-link" to="/about" v-if="current !== 'about'" :style="'text-align: '+ (current === 'awards' ? 'right' : current === 'info' ? 'left' : 'center')">
            <span>
                <svg width="18" height="18" style="fill:white">
                    <use xlink:href="#svg-portrait"/>
                </svg>
                <p class="footer-link-title">About</p>
            </span>
        </router-link>


        <router-link class="footer-link" to="/" v-if="current !== 'home' && current !== 'awards'" style="text-align: center">
            <span>
                <svg width="18" height="18" style="fill:white">
                    <use xlink:href="#svg-home"/>
                </svg>
                <p class="footer-link-title">Home</p>
            </span>
        </router-link>

 
        <router-link class="footer-link" to="/awards" v-if="current !== 'awards'" style="text-align: right">
            <span>
                <svg width="18" height="18" style="fill:white">
                    <use xlink:href="#svg-trophy"/>
                </svg>
                <p class="footer-link-title">Awards</p>
            </span>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return {
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
    }
}
</script>
