<template>
    <div>
        <!-- Iterate through the posts -->
        <div class="" v-for="post in posts">
            <div class="box postCard">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img :src="post.image" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{post.title}}</strong>
                                <br> {{post.note}}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Posts',
        data() {
            return {
                posts: []
            }
        },
        created() {
            // Step 5-1 - fetch the posts for the user when this component is first created.
            this.getPosts()
        },
        methods: {
            getPosts
        },
        // Step 5-2 - refetch the posts when the route changes. created() isn't called again.
        watch: {
            '$route': 'getPosts'
        }
    }

    function getPosts() {

        /*
            Step 5-3 the User ID is found in $route.params since
            we passed in the user id when we called the router-link
            in User.vue:
    
            <router-link :to="{name: 'userPosts', params: {id: user.id}}">Get Posts 1</router-link>

            or programmatically:

            this.$router.push({ name: 'userPosts', params: { id: this.user.id } })
        */
        const userID = this.$route.params.id

        /* Now the id is available to use in our GET request */
        axios.get(`${ apiUrl }/notes?user_id=${ userID }`)
            .then((resp) => {

                this.posts = resp.data
            })
    }
</script>

<style scoped>
    .postCard {
        margin-bottom: 2rem;
    }
</style>