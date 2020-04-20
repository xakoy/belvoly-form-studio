import Vue from 'vue'

Vue.filter('log', function(value) {
    console.log(value)
})
