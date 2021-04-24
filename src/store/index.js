// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        // user: {
        //     username: 'matt',
        //     fullName: 'Matt Maribojoc'
        // }
        sideImage: ['https://avatars.githubusercontent.com/u/18265646?s=400&u=0a7915965f86e1726e88e4de1d74b43a7ce1b3bd&v=4', null],
        header: {
            stopHeaderScroll: false,
            height: 0,
            afterScroll: null,
            hideSubtitle: null,
            hideDescription: null
        },
        posts: new Array(77),
        postsArrayLoaded: false,
        project: {
            selected: false,
            data: {}
        }
    },
    getters: {
    //     firstName: state => {
    //         return state.user.fullName.split(' ')[0]
    //     },
    //     lastName (state, getters) {
    //         return state.user.fullName.replace(getters.firstName, '');
    //    }
    },
    mutations: {
        // changeName (state, payload) {
        //     state.user.fullName = payload
        // }
        savePostData(state, payload) {
            state.posts[payload.id] = payload.data;
        },
        postsArrayLoaded(state, payload) {
            state.postsArrayLoaded = payload;
        },
        setHeaderHeight(state, payload) {
            state.header.height = payload;
        },
        stopHeaderScroll(state, payload) {
            state.header.stopHeaderScroll = payload;

            if (!payload) {
                state.header.afterScroll = `${state.header.height}px`;
                state.header.hideSubtitle = false;
                state.header.hideDescription = false;
            } else {
                state.header.afterScroll = `auto`;
                state.header.hideSubtitle = true;
                state.header.hideDescription = true;
            }
        },
        setAfterScroll(state, payload) {
            state.header.afterScroll = payload;
        },
        setHideSubtitle(state, payload) {
            state.header.hideSubtitle = payload;
        },
        setHideDescription(state, payload) {
            state.header.hideDescription = payload;
        },
        loadedProjectData(state, payload) {
            state.sideImage[1] = payload;
        },
        offloadProjectData(state) {
            state.sideImage[1] = state.sideImage[0];
        }
    },
    actions: {
        // changeName (context, payload) {
        //     setTimeout(() => {
        //         context.commit("changeName", payload);
        //     }, 2000);
        // }
    }
});