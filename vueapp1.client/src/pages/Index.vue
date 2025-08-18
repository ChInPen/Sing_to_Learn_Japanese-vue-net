<template>
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
</template>
<script setup>
import Songs from "../components/index/NewSongs.vue";
import LatestSongs from "../components/index/LatestSongs.vue";
import MoreSongs from "../components/index/MoreSongs.vue";
import sidebar from "../components/Modal/Sidebar.vue";
</script>
<style scoped>
.main-layout {
    display: flex;
    gap: 20px;
    width: 90%;
    margin: 0 auto;

}

.sidebar {
    flex: 0 0 250px;
}

.main-content {
    background-color: rgba(0, 0, 0, 0.849);
    flex: 1;
    min-width: 0;
}
</style>