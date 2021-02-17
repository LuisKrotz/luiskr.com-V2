<template>
    <footer class="footer">
        <div class="max-area">
            <div class="footer-items">
                <a class="footer-link" :href="array.mail[0]" rel="noopener">
                    <span class="footer-link-title" @click="headerClose()" >{{ array.mail[1] }}</span>
                </a>

                <a class="footer-link" :href="array.phone[0]" rel="noopener">
                    <span class="footer-link-title" @click="headerClose()">{{ array.phone[1] }}</span>
                </a>

                <a class="footer-link" :href="array.github[0]" rel="noopener">
                    <span class="footer-link-title" @click="headerClose()">{{ array.github[1] }}</span>
                </a>

                <a class="footer-link" :href="array.linkedin[0]" rel="noopener">
                    <span class="footer-link-title" @click="headerClose()">{{ array.linkedin[1] }}</span>
                </a>

                <a class="footer-link" :href="array.instagram[0]" rel="noopener">
                    <span class="footer-link-title" @click="headerClose()">{{ array.instagram[1] }}</span>
                </a>

                <router-link class="footer-link" :to="array.productions[0]">
                    <span class="footer-link-title" @click="headerClose()" >{{ array.productions[1] }}</span>
                </router-link>

                <router-link class="footer-link" :to="array.credits[0]">
                    <span class="footer-link-title" @click="headerClose()">{{ array.credits[1] }}</span>
                </router-link>

                <router-link class="footer-link" :to="array.GDPR[0]">
                    <span class="footer-link-title" @click="headerClose()">{{ array.GDPR[1] }}</span>
                </router-link>

                <router-link class="footer-link" :to="array.terms_of_use[0]">
                    <span class="footer-link-title" @click="headerClose()">{{ array.terms_of_use[1] }}</span>
                </router-link>

                <router-link class="footer-link" :to="array.privacy_policy[0]">
                    <span class="footer-link-title" @click="headerClose()">{{ array.privacy_policy[1] }}</span>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
        data() {
            return {
                array: this.$parent.headerFooterArray
            }
        },
        methods: {
            sendAnalyticsEvent(category, action, label, value) {
                this.$parent.sendAnalyticsEvent(category, action, label, value);
            }
        }
    }
</script>


