<template>
    <header class="header">
        <!-- <h3 class="hdn">{{ header.title }}</h3> -->
        <div class="max-area" v-if="header !== undefined">
            <button class="header-link header-more" @click="headerOpen()">
                <span v-if="!open" class="hdn">{{ header.toggle[0] }}</span>
                <span v-else class="hdn">{{ header.toggle[1] }}</span>

                <span class="header-more-line top"></span>
                <span class="header-more-line middle"></span>
                <span class="header-more-line bottom"></span>
            </button>
        </div>

        <div class="header-modal">
            <nav class="max-area" v-if="header !== undefined && footer !== undefined">
                <h4 class="hdn">luiskr.com</h4>

                    <div>
                        <router-link class="header-modal-link" :to="header.home[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ header.home[1] }}</span>
                        </router-link>

                        <router-link class="header-modal-link" :to="header.about[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ header.about[1] }}</span>
                        </router-link>

                        <router-link class="header-modal-link" :to="header.social[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ header.social[1] }}</span>
                        </router-link>

                        <a class="header-modal-link" :href="header.mail[0]" rel="noopener">
                            <span class="header-modal-link-title" @click="headerClose()">{{ header.mail[1] }}</span>
                        </a>
                    </div>

                    <h4 class="hdn">{{ footer.title }}</h4>

                    <div>
                        <router-link class="header-modal-link" :to="footer.privacy_policy[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.privacy_policy[1] }}</span>
                        </router-link>

                        <router-link class="header-modal-link" :to="footer.terms_of_use[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.terms_of_use[1] }}</span>
                        </router-link>

                        <router-link class="header-modal-link" :to="footer.GDPR[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.GDPR[1] }}</span>
                        </router-link>

                        <router-link class="header-modal-link" :to="footer.credits[0]">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.credits[1] }}</span>
                        </router-link>

                        <a class="header-modal-link" :href="footer.instagram[0]" rel="noopener">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.instagram[1] }}</span>
                        </a>

                        <a class="header-modal-link" :href="footer.phone[0]" rel="noopener">
                            <span class="header-modal-link-title" @click="headerClose()">{{ footer.phone[1] }}</span>
                        </a>
                    </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return {
            origin: this.$parent.origin,
            header: undefined,
            footer: undefined,
            remember: 0,
            open: false
        }
    },
    methods: {
        headerClose() {
            document.body.classList.remove("header-open");

            window.scrollTo(0, this.remember);
            document.querySelector("main").style = '';

            this.open = false;
        },
        headerOpen() {
            if(this.open) {
                this.headerClose();
            } else {
                this.remember = window.scrollY;

                document.querySelector("main").style = `transform: translateY(-${this.remember}px`;
                document.body.classList.add("header-open");
                this.open = true;
            }
        }
    },
    created() {
        let self = this, lastresize = 0;

        function close() {
            document.body.classList.remove("header-open");
            self.open =  false;
        }

        close();
        fetch(`${self.origin}/translations/en_us/header.json`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                self.header = data;
            });

        fetch(`${self.origin}/translations/en_us/footer.json`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                self.footer = data;
            });

        window.addEventListener('resize', function() {
            lastresize++;

            if (lastresize > 10 && self.open) {
                close();
                lastresize = 0;
            }
        });

    }
}
</script>
