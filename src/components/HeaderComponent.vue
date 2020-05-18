<template>
    <header class="header">
        <h3 class="hdn" v-if="header !== undefined">{{ header.title }}</h3>
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
                    <router-link class="header-modal-link" :style="sethover" :to="header.home[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', header.home[1], 100)">
                            <span class="header-modal-link-title" @click="headerClose()"  @mouseleave="clear()"  @mouseenter="random()">{{ header.home[1] }}</span>
                        </span>
                    </router-link>

                    <router-link class="header-modal-link" :style="sethover" :to="header.about[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', header.about[1], 100)">
                            <span class="header-modal-link-title" @click="headerClose()"  @mouseleave="clear()"  @mouseenter="random()">{{ header.about[1] }}</span>
                        </span>
                    </router-link>

                    <router-link class="header-modal-link" :style="sethover" :to="header.social[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', header.social[1], 100)">
                            <span class="header-modal-link-title" @click="headerClose()"  @mouseleave="clear()"  @mouseenter="random()">{{ header.social[1] }}</span>
                        </span>
                    </router-link>

                    <a class="header-modal-link" :style="sethover" :href="header.mail[0]" rel="noopener">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', header.social[1], 200)">
                            <span class="header-modal-link-title" @click="headerClose()"  @mouseleave="clear()"  @mouseenter="random()">{{ header.mail[1] }}</span>
                        </span>
                    </a>
                </div>

                <h4 class="hdn">{{ footer.title }}</h4>

                <div>
                    <router-link class="header-modal-link" :style="sethover" :to="footer.privacy_policy[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.privacy_policy[1], 50)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.privacy_policy[1] }}</span>
                        </span>
                    </router-link>

                    <router-link class="header-modal-link" :style="sethover" :to="footer.terms_of_use[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.terms_of_use[1], 50)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.terms_of_use[1] }}</span>
                        </span>
                    </router-link>

                    <router-link class="header-modal-link" :style="sethover" :to="footer.GDPR[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.GDPR[1], 50)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.GDPR[1] }}</span>
                        </span>
                    </router-link>

                    <router-link class="header-modal-link" :style="sethover" :to="footer.credits[0]">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.credits[1], 50)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.credits[1] }}</span>
                        </span>
                    </router-link>

                    <a class="header-modal-link" :style="sethover" :href="footer.instagram[0]" rel="noopener">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.instagram[1], 100)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.instagram[1] }}</span>
                        </span>
                    </a>

                    <a class="header-modal-link" :style="sethover" :href="footer.phone[0]" rel="noopener">
                        <span @click="sendAnalyticsEvent('modal_link', 'click', footer.phone[1], 200)">
                            <span class="header-modal-link-title" @click="headerClose()" @mouseleave="clear()"  @mouseenter="random()">{{ footer.phone[1] }}</span>
                        </span>
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
                storage: this.$parent.storage,
                header: undefined,
                footer: undefined,
                sethover: '',
                remember: 0,
                open: false
            }
        },
        created() {
            let self = this,
                lastresize = 0;

            function close() {
                document.body.classList.remove("header-open");
                self.open = false;
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

            window.addEventListener('resize', function () {
                lastresize++;

                if (lastresize > 10 && self.open) {
                    close();
                    lastresize = 0;
                }
            });
        },
        methods: {
            headerClose() {
                document.body.classList.remove("header-open");

                window.scrollTo(0, this.remember);
                document.querySelector("main").style = '';

                this.open = false;
            },
            headerOpen() {
                if (this.open) {
                    this.headerClose();
                    this.sendAnalyticsEvent('modal', 'click', 'open', 100)
                } else {
                    this.remember = window.scrollY;
                     window.scrollTo(0, 0);

                    document.querySelector("main").style = `transform: translateY(-${this.remember}px`;
                    document.body.classList.add("header-open");
                    this.open = true;
                    this.sendAnalyticsEvent('modal', 'click', 'close', 50)
                }
            },
            random() {
                this.sethover = `cursor: url(${this.storage}glitches/${Math.round(Math.random() * 30)}.gif), pointer`;
            },
            clear() {
                this.sethover = '';
            },
            sendAnalyticsEvent(category, action, label, value) {
                this.$parent.sendAnalyticsEvent(category, action, label, value);
            }
        }
    }
</script>
