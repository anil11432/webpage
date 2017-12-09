// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.directive('dropdown', {
    inserted(el) {
        el.addEventListener('click', function() {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
            } else {
                el.classList.add('open');
            }
        });
    }
});


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})