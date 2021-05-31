<template>
    <div>
        <header class="header">
            <h3 class="hdn">{{ array.title }}</h3>
            <div class="max-area">
                <router-link class="header-home" :to="array.home[0]">
                    <span class="header-home-link" @click="headerClose()" >Luis Krötz</span>
                </router-link>
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
                    <div class="header-modal-background"></div>
                    <div class="max-area">
                        <div>
                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.home[1], 100)">
                                <router-link class="header-modal-link" :to="array.home[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.home[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.about[1], 100)">
                                <router-link class="header-modal-link" :to="array.about[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.about[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.awards[1], 100)">
                                <router-link class="header-modal-link" :to="array.awards[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.awards[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.productions[1], 100)">
                                <router-link class="header-modal-link" :to="array.productions[0]">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.productions[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.mail[1], 200)">
                                <a class="header-modal-link" :href="array.mail[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()" >{{ array.mail[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.phone[1], 200)">
                                <a class="header-modal-link" :href="array.phone[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.phone[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.linkedin[1], 100)">
                                <a class="header-modal-link" :href="array.linkedin[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.linkedin[1] }}</span>
                                </a>
                            </h4>
                        </div>
                        <div>
                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.github[1], 100)">
                                <a class="header-modal-link" :href="array.github[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.github[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.instagram[1], 100)">
                                <a class="header-modal-link" :href="array.instagram[0]" rel="noopener">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.instagram[1] }}</span>
                                </a>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.credits[1], 50)">
                                <router-link class="header-modal-link" :to="array.credits[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.credits[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.GDPR[1], 50)">
                                <router-link class="header-modal-link" :to="array.GDPR[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.GDPR[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.terms_of_use[1], 50)">
                                <router-link class="header-modal-link" :to="array.terms_of_use[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.terms_of_use[1] }}</span>
                                </router-link>
                            </h4>

                            <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.privacy_policy[1], 50)">
                                <router-link class="header-modal-link" :to="array.privacy_policy[0]">
                                    <span class="header-modal-link-title" @click="headerClose()">{{ array.privacy_policy[1] }}</span>
                                </router-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </transition>
        </header>
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
                    "awards": [
                        "/awards/cssda-kudos-06-2020",
                        "awards"
                    ],
                    "productions": [
                        "/productions",
                        "productions"
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
                    this.sendAnalyticsEvent('modal', 'click', 'open', 100);
                } else {
                    this.remember = window.scrollY;
                    window.scrollTo(0, 0);

                    document.querySelector(".main").style = `transform: translateY(-${this.remember}px`;
                    document.body.classList.add("header-open");
                    this.open = true;
                    this.sendAnalyticsEvent('modal', 'click', 'close', 50);
                }
            },
            sendAnalyticsEvent(category, action, label, value) {
                this.$parent.sendAnalyticsEvent(category, action, label, value);
            }
        }
    }
</script>


