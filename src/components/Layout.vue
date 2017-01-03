<template>
    <div class="wrapper">
        <div class="sidebar">
            <!-- A named view, 'sidebar' -->
            <router-view name="sidebar"></router-view>
        </div>
        <main class="content">
            <!-- A named view, 'content' -->
            <router-view name="content"></router-view>
        </main>
    </div>
</template>
<script>
    export default {
        name: 'Layout'
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
    }

    .sidebar {
        flex: 1;
        padding: 2rem;
    }

    .content {
        flex: 2;
        border-left: 1px solid #ccc;
        padding: 2rem;
    }

</style>