<template>
    <div class="userList">
        <!-- Use a :key whenever possible -->
        <div v-for="user in users" :key="user.id">
            <!-- Step 3-2 Scope each user to their own component -->
            <User :user="user" />
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    import User from './User.vue'

    export default {

        name: 'UserList',
        data() {
            return {
                users: []
            }
        },

        // Step 3-1: grab all users when this component is created.
        created() {
            axios.get(`${ apiUrl }/users`)
                .then((resp) => {
                    this.users = resp.data
                })
        },
        components: {
            User
        }

    }
</script>

<style scoped>
    .userList {
    }
</style>