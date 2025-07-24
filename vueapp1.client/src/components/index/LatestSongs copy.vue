<template>
    <div class="container">
        <h1>最新歌曲</h1>
        <div class="music-carousel">
            <button class="scroll-btn left" @click="scrollMusicList(-1)">&#10094;</button>
            <div class="music-scroller " ref="scrollerRef">
                <div class="music-item " v-for="(item, index) in hotSongs" :key="index">
                    <a :href="item.link">
                        <img :src="item.img" alt="音樂封面">
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div class="artist">{{ item.artist }}</div>
                        </div>
                    </a>
                </div>
            </div>
            <button class="scroll-btn right" @click="scrollMusicList(1)">&#10095;</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
// 最新歌曲重複區塊
const hotSongs = [
    { title: "Bling-Bang-Bang-Born", artist: "Creepy Nuts", img: "/images/music/Creepy Nuts-Bling-Bang-Bang-Born.jpg", link: "#" },
    { title: "前前前世", artist: "RADWIMPS", img: "/images/music/RADWIMPS-前前前世.jpg", link: "#" },
    { title: "Lemon", artist: "米津玄師", img: "/images/music/米津玄師-Lemon.jpg", link: "#" },
    { title: "Pretender", artist: "Official髭男dism", img: "/images/music/Official髭男dism-Pretender.jpg", link: "./Pretender.html" },
    { title: "Idol", artist: "Yoasobi", img: "/images/music/Yoasobi-Idol.png", link: "#" },
    { title: "灰色と青", artist: "米津玄師", img: "/images/music/米津玄師-灰色と青.jpg", link: "#" },
    { title: "晚餐歌", artist: "tuki", img: "/images/music/tuki-晚餐歌.jpg", link: "./晚餐歌.html" },
    { title: "はいよろこんで", artist: "Kocchi no Kento", img: "/images/music/Kocchi no Kento-はいよろこんで.jpg", link: "#" },
    { title: "怪物", artist: "Yoasobi", img: "/images/music/Yoasobi-怪物.jpg", link: "./怪物.html" },
    { title: "愛の賞味期限", artist: "tuki", img: "/images/music/tuki-愛の賞味期限.jpg", link: "#" }
]
// 熱播歌曲按鈕(螢幕滑動)
const scrollerRef = ref()
function scrollMusicList(direction) {
    const scrollAmount = 300
    if (scrollerRef.value) {
        scrollerRef.value.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        })
    }
}
</script>
<style scoped>
/* 最新歌曲 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.music-carousel {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    flex-direction: column;
    align-items: stretch;
}

.music-scroller {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    overflow-x: auto;
    padding: 20px;
}

.music-scroller::-webkit-scrollbar {
    display: none;
}

.music-group {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* 單首歌的外觀 */
.music-item {
    width: 400px;

}

.music-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.041);
}

.music-item a {
    display: flex;
}

.music-item img {
    width: 30%;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s ease;
}
.music-item:hover img {
    transform: scale(1.1);
}


.info {
    align-self: center;
    padding-left: 20px;
}

.info .title {
    font-size: 28px;
    font-weight: bold;

}

.info .artist {
    font-size: 25px;
    color: gray;
}

/* 左右箭頭按鈕 */
.scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
    z-index: 10;
}

.scroll-btn.left {
    left: 0;
}

.scroll-btn.right {
    right: 0;
}

.scroll-btn:hover {
    background: rgba(0, 0, 0, 0.4);
}
</style>