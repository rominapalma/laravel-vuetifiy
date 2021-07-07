require('./bootstrap');
window.Vue = require('vue').default;
import vuetify from './vuetify';

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component("ExampleComponent", () => import("./components/ExampleComponent"));

const app = new Vue({
    el: '#app',
    vuetify,
});