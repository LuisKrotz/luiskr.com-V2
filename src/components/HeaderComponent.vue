<template>
    <header class="header max-area">
        <div class="header-content" ref="header_content" :style="{height: `${afterScroll}`}">
            <div>
                <h3 class="header-title">Luis Krötz </h3>
                <transition name="expand">
                    <h4 class="header-subtitle" v-if="!hideSubtitle">Frond-End Developer </h4>
                </transition>
                <transition name="expand">
                    <p class="header-description" v-if="!hideDescription">UX / Front End Dev at @Transa, freelancing on my spare time.<br>Graduated in Systems for Internet at Federal University of Santa Maria.</p>
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


            <!-- <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.mail[1], 200)">
                <a class="header-modal-link" :href="array.mail[0]" rel="noopener">
                    <span class="header-modal-link-title">{{ array.mail[1] }}</span>
                </a>
            </h4>

            <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.phone[1], 200)">
                <a class="header-modal-link" :href="array.phone[0]" rel="noopener">
                    <span class="header-modal-link-title" @click="headerClose()">{{ array.phone[1] }}</span>
                </a>
            </h4>

            <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.linkedin[1], 100)">
                <a class="header-modal-link" :href="array.linkedin[0]" rel="noopener">
                    <span class="header-modal-link-title" @click="headerClose()">{{ array.linkedin[1] }}</span>
                </a>
            </h4>

            <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.github[1], 100)">
                <a class="header-modal-link" :href="array.github[0]" rel="noopener">
                    <span class="header-modal-link-title" @click="headerClose()">{{ array.github[1] }}</span>
                </a>
            </h4>

            <h4 @click="sendAnalyticsEvent('modal_link', 'click', array.instagram[1], 100)">
                <a class="header-modal-link" :href="array.instagram[0]" rel="noopener">
                    <span class="header-modal-link-title" @click="headerClose()">{{ array.instagram[1] }}</span>
                </a>
            </h4> -->
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
        data() {
            return {
                array: this.$parent.headerFooterArray,
                height: null,
                hideSubtitle: false,
                hideDescription: false,
                afterScroll: null,
                afterCounter: null,
                oldScroll: null,
                isSmall: false,
                originalTitle: document.title
            }
        },
        mounted() {
            this.height = this.$parent.$refs.c1_media_height.clientHeight;
            this.afterScroll = `${this.height}px`;

            window.addEventListener('scroll', () => this.scroll(), false);
        },
        methods: {
            scroll() {
                let scrollTop = window.scrollY;
                let docHeight = document.body.offsetHeight;
                let winHeight = window.innerHeight;
                let scrollPercent = scrollTop / (docHeight - winHeight);
                let scrollPercentRounded = Math.round(scrollPercent * 100);

                document.title = scrollPercentRounded !== 0 ? `(${scrollPercentRounded}%) ${this.originalTitle}`: `${this.originalTitle}`;

                if (scrollPercentRounded !== 0) {
                        window.requestAnimationFrame(() => {

                        this.afterCounter =  (this.height - (scrollPercentRounded/ 100) * this.height).toFixed(0);

                        this.hideDescription = this.afterCounter <= (this.height / 1.75);
                        this.hideSubtitle = this.afterCounter <= (this.height / 2);

                        if (this.afterCounter >= (this.height / 2.75)) {
                            this.afterScroll = `${(this.height - (scrollPercentRounded/ 100) * this.height).toFixed(0)}px`
                        }
                    });
                } else {
                    this.afterScroll = `${this.height}px`
                }
            },
            sendAnalyticsEvent(category, action, label, value) {
                this.$parent.sendAnalyticsEvent(category, action, label, value);
            }
        }
    }
</script>


