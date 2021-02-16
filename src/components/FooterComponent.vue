<template>
    <footer class="header">
        <button>Back to top</button>

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

        <h4 class="hover-span" @click="sendAnalyticsEvent('modal_link', 'click', array.productions[1], 100)">
            <router-link class="header-modal-link" :to="array.productions[0]">
                <span class="header-modal-link-title" @click="headerClose()" >{{ array.productions[1] }}</span>
            </router-link>
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


