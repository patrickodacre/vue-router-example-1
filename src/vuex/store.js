// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
    users: [],
    tasksByID: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
    setUsers(state, users) {
        state.users = users

        console.log("Users set", users)
    },
    setSelectedUser(state, user) {
        state.selectedUser = user
    },
    setUserTasks(state, data) {

        const {
            selectedUser,
            task
        } = data

        if (!state.tasksByID[selectedUser.id]) {
            state.tasksByID[selectedUser.id] = []
        }
        state.tasksByID[selectedUser.id].push(task)
    }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    mutations
})