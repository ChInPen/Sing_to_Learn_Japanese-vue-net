<template>
    <Header />
    <main class="main-layout">
        <div class="sidebar">
            <sidebar />
        </div>
        <div class="main-content">
            <Songs />
            <LatestSongs />
            <MoreSongs />
        </div>
    </main>
    <Footer />
</template>
<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Songs from "./Songs.vue";
import LatestSongs from "./LatestSongs.vue";
import MoreSongs from "./MoreSongs.vue";
import sidebar from "../sidebar.vue";
</script>
<style scoped>
.main-layout {
    display: flex;
    gap: 20px;
    width: 90%;
    margin: 0 auto;

}

.sidebar {
    background-color: aqua;
    /* RWD */
    flex: 0 0 250px; 
}

.main-content {
    background-color: aquamarine;
    flex: 1;
    min-width: 0;
}
</style>