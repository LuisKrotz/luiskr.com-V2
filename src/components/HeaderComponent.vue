<template>
    <header class="header max-area">
        <div class="header-content" ref="header_content" :style="{height: `${$store.state.header.afterScroll}`}">
            <div>
                <h3 class="header-title">Luis Krötz </h3>
                <transition name="expand">
                    <h4 class="header-subtitle" v-if="!$store.state.header.hideSubtitle">Frond-End Developer </h4>
                </transition>
                <transition name="expand">
                    <p class="header-description" v-if="!$store.state.header.hideDescription">UX / Front End Dev at @Transa, freelancing on my spare time.<br>Graduated in Systems for Internet at Federal University of Santa Maria.</p>
                </transition>
            </div>

            <div class="header-buttons">
                <!-- Emit event to home to change project listing / go to home with the selected listing -->
                <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.about[1], 100)">
                    <router-link class="primary-button" :to="array.about[0]">
                        <span class="primary-button-text">{{ array.about[1] }}</span>
                    </router-link>
                </h4>

                <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.home[1], 100)">
                    <router-link class="primary-button active" :to="array.home[0]">
                        <span class="primary-button-text">{{ array.home[1] }}</span>
                    </router-link>
                </h4>


                <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.awards[1], 100)">
                    <router-link class="primary-button" :to="array.awards[0]">
                        <span class="primary-button-text">{{ array.awards[1] }}</span>
                    </router-link>
                </h4>


                <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.contact[1], 100)">
                    <router-link class="primary-button" :to="array.contact[0]">
                        <span class="primary-button-text">{{ array.contact[1] }}</span>
                    </router-link>
                </h4>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
        data() {
            return {
                array: this.$parent.headerFooterArray,
                afterCounter: null,
                oldScroll: null,
                isSmall: false,
                originalTitle: document.title
            }
        },
        mounted() {
            this.$store.commit('setHeaderHeight', `${this.$parent.$refs.c1_media_height.clientHeight}`);

            window.addEventListener('scroll', () => this.scroll(), false);
        },
        methods: {
            scroll() {
                if (!this.$store.state.header.stopHeaderScroll) {
                    let scrollTop = window.scrollY;
                    let docHeight = document.body.offsetHeight;
                    let winHeight = window.innerHeight;
                    let scrollPercent = scrollTop / (docHeight - winHeight);
                    let scrollPercentRounded = Math.round(scrollPercent * 100);

                    let height = this.$store.state.header.height;

                    document.title = scrollPercentRounded !== 0 ? `(${scrollPercentRounded}%) ${this.originalTitle}`: `${this.originalTitle}`;

                    if (scrollPercentRounded !== 0) {
                            window.requestAnimationFrame(() => {

                            this.afterCounter =  (height - (scrollPercentRounded/ 100) * height).toFixed(0);

                            this.$store.commit('setHideDescription', this.afterCounter <= (height / 1.5));
                            this.$store.commit('setHideSubtitle', this.afterCounter <= (height / 1.75));
                            
                            if (this.afterCounter >= (height / 2.75)) {
                                this.$store.commit('setAfterScroll', `${(height - (scrollPercentRounded/ 100) * height).toFixed(0)}px`);
                            }
                        });
                    } else {
                        this.$store.commit('setAfterScroll', `${height}px`);
                    }
                } else {
                    this.$store.commit('setAfterScroll', 'auto');
                    this.$store.commit('setHideSubtitle', true);
                    this.$store.commit('setHideDescription', true);
                }
            },
            sendAnalyticsEvent(category, action, label, value) {
                this.$parent.sendAnalyticsEvent(category, action, label, value);
            }
        }
    }
</script>


