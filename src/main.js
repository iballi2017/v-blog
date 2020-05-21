import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'//for routing
import routes from "./routes"

// vue-resource for HTTP request
import VueResource from "vue-resource"

Vue.use(VueResource)


Vue.use(VueRouter)

//Custom Directives

/*################################################## Directives (Globally) */
/*
###### Syntax:
 Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === "wide") {

      // css style comes here
      el.style.maxWidth = "1200px"
      el.style.margin = "0 auto"
    }
  }
})

*/

// Vue.directive('rainbow', {
//   bind(el) {
//     el.style.color = '#' + Math.random().toString().slice(2, 8)
//     el.style.textTransform = "capitalize"
//   }
// })
Vue.directive('theme', {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px"
      el.style.margin = "0 auto"
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px"
      el.style.margin = "0 auto"
    }
    if (binding.arg === "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px"
    }
  }
})


const router = new VueRouter({
  mode: "history",
  routes: routes
})


/*################################################## Filters (Globally) */
// Vue.filter('toUppercase', (value) => {
//   return value.toUpperCase()   //..this filter will be called "toUppercase"
// })

// Vue.filter('snippet', (value) => {
//   return value.slice(0, 100) + "..."   //..this filter will be called "snippet"
// })



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
