// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'

Vue.component('BaseInput', () => import('../components/BaseInput.vue'));
