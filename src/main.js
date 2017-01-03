import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

/* Components */
import Layout from './components/Layout.vue'
import UserList from './components/UserList.vue'
import Posts from './components/Posts.vue'
import {
  NotFoundComponent
} from './components/NotFoundComponent'

Vue.use(VueRouter) // wire up Vue Router

const routes = [

  /* Step 1: define our routes */
  {

    /*
    We mount our App component to the root route '/'. 
    The App component loads the Layout component which has our named
    router router-views.
    */
    path: '/',
    components: {
      default: App
    },
    // Children to the root path '/'
    children: [

      // Root path needs to show UserList in the left sidebar
      {
        path: '',
        components: {
          sidebar: UserList
        }
      },
      // /users likewise should show the UserList.
      {
        path: '/users',
        components: {
          sidebar: UserList
        }
      },
      // Don't show posts until the route is changed.
      {
        path: 'user/:id/posts',
        name: 'userPosts',
        components: {
          sidebar: UserList,
          content: Posts
        }
      }
    ]
  },
  /* Everything that isn't caught by the above routes,
  should just go to a 404 page.
  */
  {
    path: '*',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history', // 'history' mode so we don't see a hash '#' in our url.
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')