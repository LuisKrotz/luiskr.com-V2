<template>
    <div>
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

            <transition name="menu-open">
                <div class="header-modal" v-show="open">
                    <nav class="max-area" v-if="header !== undefined && footer !== undefined">
                        <h4 class="hdn">luiskr.com</h4>

                        <div>
                            <router-link class="header-modal-link" :style="sethover" :to="header.home[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', header.home[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ header.home[1] }}</span>
                                </span>
                            </router-link>

                            <router-link class="header-modal-link" :style="sethover" :to="header.about[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', header.about[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ header.about[1] }}</span>
                                </span>
                            </router-link>

                            <router-link class="header-modal-link" :style="sethover" :to="header.social[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', header.social[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ header.social[1] }}</span>
                                </span>
                            </router-link>

                            <a class="header-modal-link" :style="sethover" :href="header.mail[0]" rel="noopener">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', header.social[1], 200)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ header.mail[1] }}</span>
                                </span>
                            </a>

                            <a class="header-modal-link" :style="sethover" :href="footer.phone[0]" rel="noopener">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.phone[1], 200)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.phone[1] }}</span>
                                </span>
                            </a>
                        </div>

                        <h4 class="hdn">{{ footer.title }}</h4>

                        <div>
                            <router-link class="header-modal-link" :style="sethover" :to="footer.credits[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.credits[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.credits[1] }}</span>
                                </span>
                            </router-link>

                            <a class="header-modal-link" :style="sethover" :href="footer.instagram[0]" rel="noopener">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.instagram[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.instagram[1] }}</span>
                                </span>
                            </a>

                            <router-link class="header-modal-link" :style="sethover" :to="footer.GDPR[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.GDPR[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.GDPR[1] }}</span>
                                </span>
                            </router-link>

                            <router-link class="header-modal-link" :style="sethover" :to="footer.terms_of_use[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.terms_of_use[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.terms_of_use[1] }}</span>
                                </span>
                            </router-link>

                            <router-link class="header-modal-link" :style="sethover" :to="footer.privacy_policy[0]">
                                <span class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', footer.privacy_policy[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ footer.privacy_policy[1] }}</span>
                                </span>
                            </router-link>
                        </div>
                    </nav>
                </div>
            </transition>
        </header>
        <img v-if="open && this.$parent.domLoaded" :src="storage + 'glitches/'+ random + '.gif'" class="hover" :style="'transform: translate(' + page.left + 'px, ' + page.top + 'px) '+ (showhover ? 'scale(1); visibility: visible; opacity: 1' : 'scale(0); visibility: hidden: opacity: 0')" aria-hidden="true">
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
        data() {
            return {
                origin: this.$parent.origin,
                storage: this.$parent.storage,
                header: {
                    "title": "Menu",
                    "toggle": [
                        "Open Menu",
                        "Close Menu"
                    ],
                    "home": [
                        "/",
                        "Home"
                    ],
                    "about": [
                        "/about",
                        "About"
                    ],
                    "social": [
                        "/social",
                        "Social"
                    ],
                    "mail": [
                        "mailto:luis.krotz@gmail.com?subject=Contact%20from%20luiskr.com&body",
                        "Mail"
                    ]
                },
                footer: {
                    "title": "More stuff",
                    "privacy_policy": [
                        "/privacy-policy",
                        "Privacy Policy"
                    ],
                    "terms_of_use": [
                        "/terms-of-use",
                        "Terms of Use"
                    ],
                    "GDPR": [
                        "/GDPR",
                        "GDPR"
                    ],
                    "credits": [
                        "/credits",
                        "Credits"
                    ],
                    "instagram": [
                        "https://www.instagram.com/j_luiskrotz",
                        "Instagram"
                    ],
                    "phone": [
                        "tel:+5551982274782",
                        "phone"
                    ]
                },
                hovers: 30,
                sethover: '',
                remember: 0,
                open: false,
                showhover: false,
                random: 0,
                page: {
                    left : 0,
                    top: 0
                }
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
                    this.clear();
                    this.sendAnalyticsEvent('modal', 'click', 'open', 100);
                } else {
                    this.remember = window.scrollY;
                    window.scrollTo(0, 0);
                    this.clear();

                    document.querySelector("main").style = `transform: translateY(-${this.remember}px`;
                    document.body.classList.add("header-open");
                    this.open = true;
                    this.sendAnalyticsEvent('modal', 'click', 'close', 50);
                }
            },
            onMouseMove(e) {
                if(!this.$parent.has_touch) {
                    this.page.left = e.pageX - 50;
                    this.page.top = e.pageY - 50;
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
            }
        }
    }
</script>


