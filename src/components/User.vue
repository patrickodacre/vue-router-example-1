<template>
    <div class="box userCard">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img :src="user.avatar" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{user.name}}</strong>
                        <small>@{{user.username}}</small>
                        <br> {{user.company.catchPhrase}}
                    </p>

                    <!-- Change Route via router-link -->
                    <router-link :to="{name: 'userPosts', params: {id: user.id}}">Get Posts 1</router-link>

                    <!-- Or change route programmatically (see viewPosts function) -->
                    <button @click="viewPosts">Get Posts 2</button>
                </div>
            </div>
        </article>
    </div>
</template>
<script>

    import axios from 'axios'

    export default {

        name: 'User',
        // Step 4-1: User object passed in from UserList.vue
        props: {
            user: {

                // 4-2 Using Type Checking
                type: Object,
                required: true
            }
        },
        methods: {
            viewPosts
        }

    }

    /*
        Step 4-3 - instead of using a router-link component
        we can navigate to a new route programmatically.
    
        Under the hood, this is exactly what router-link does.
    */
    function viewPosts() {
        /* 4-4 - send the user.id through as a parameter. 
            This is picked up by the router so the appropriate posts
            are loaded in the named view, 'content' using the Posts.vue component.
        */
        this.$router.push({ name: 'userPosts', params: { id: this.user.id } })
    }

</script>

<style scoped>
    .userCard {
        margin-bottom: 2rem;
    }
</style>