import Vuex from 'vuex';
import Vue from 'vue';
import { userModule } from './modules/userModule';
import { notificationsModule } from './modules/notificationsModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        userModule,
        notificationsModule
    }
})