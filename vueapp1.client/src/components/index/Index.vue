<template>
    <Header />
    <main>
        <Songs />
        <LatestSongs/>
        <MoreSongs />
    </main>
    <Footer />
</template>
<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Songs from "./Songs.vue";
import LatestSongs from "./LatestSongs.vue";
import MoreSongs from "./MoreSongs.vue";
</script>