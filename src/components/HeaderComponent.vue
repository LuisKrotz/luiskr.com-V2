<template>
    <div>
        <header class="header">
            <h3 class="hdn">{{ array.title }}</h3>
            <div class="max-area">
                <button class="header-link header-more" @click="headerOpen()">
                    <span v-if="!open" class="hdn">{{ array.toggle[0] }}</span>
                    <span v-else class="hdn">{{ array.toggle[1] }}</span>

                    <span class="header-more-line top"></span>
                    <span class="header-more-line middle"></span>
                    <span class="header-more-line bottom"></span>
                </button>
            </div>

            <transition name="menu-open">
                <div class="header-modal" v-show="open">
                    <nav class="max-area">
                        <div>
                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.home[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.home[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.home[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.about[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.about[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.about[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.productions[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.productions[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.productions[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.mail[1], 200)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <a class="header-modal-link" :style="sethover" :href="array.mail[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.mail[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.phone[1], 200)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <a class="header-modal-link" :style="sethover" :href="array.phone[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.phone[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.linkedin[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <a class="header-modal-link" :style="sethover" :href="array.linkedin[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.linkedin[1] }}</span>
                                </a>
                            </h4>
                        </div>
                        <div>
                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.github[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <a class="header-modal-link" :style="sethover" :href="array.github[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.github[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.instagram[1], 100)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <a class="header-modal-link" :style="sethover" :href="array.instagram[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.instagram[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.credits[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.credits[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.credits[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.GDPR[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.GDPR[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.GDPR[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.terms_of_use[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.terms_of_use[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.terms_of_use[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.privacy_policy[1], 50)" @mouseleave="clear()" @mouseenter.self="hover($event)"  @mousemove="onMouseMove($event)">
                                <router-link class="header-modal-link" :style="sethover" :to="array.privacy_policy[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.privacy_policy[1] }}</span>
                                </router-link>
                            </h4>
                        </div>
                    </nav>
                </div>
            </transition>
        </header>
        <img v-if="open && this.$parent.domLoaded && !this.$parent.has_touch" :src="storage + 'glitches/'+ random + '.gif'" class="hover" :style="'transform: translate(' + page.left + 'px, ' + page.top + 'px) '+ (showhover ? 'scale(1); visibility: visible; opacity: 1' : 'scale(0); visibility: hidden: opacity: 0')" aria-hidden="true">
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
        data() {
            return {
                origin: this.$parent.origin,
                storage: this.$parent.storage,
                array: {
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
                    "productions": [
                        "/productions",
                        "editorials"
                    ],
                    "mail": [
                        "mailto:luis.krotz@gmail.com?subject=Contact%20from%20luiskr.com&body",
                        "Mail"
                    ],
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
                    "linkedin": [
                        "https://www.linkedin.com/in/luis-kr%C3%B6tz/",
                        "linkedin"
                    ],
                    "github": [
                        "https://github.com/LuisKrotz",
                        "github"
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
                document.querySelector(".main").style = '';

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

                    document.querySelector(".main").style = `transform: translateY(-${this.remember}px`;
                    document.body.classList.add("header-open");
                    this.open = true;
                    this.sendAnalyticsEvent('modal', 'click', 'close', 50);
                }
            },
            onMouseMove(e) {
                if(!this.$parent.has_touch) {
                    this.page.left = e.pageX;
                    this.page.top = e.pageY;
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


