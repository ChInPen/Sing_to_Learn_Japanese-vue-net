<template>
    <div class="container">
        <h1 class="songs-title">
            <span class="title-text">最新歌曲</span>
            <div class="title-underline"></div>
        </h1>

        <div class="music-carousel">
            <button class="scroll-btn left" @click="scrollMusicList(-1)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>

            <div class="music-scroller" ref="scrollerRef">
                <div class="music-item" v-for="(item, index) in hotSongs" :key="index">
                    <RouterLink v-if="item.id" class="music-link" :to="{ name: 'song', params: { id: item.id } }">
                        <div class="image-container">
                            <img :src="item.img" :alt="item.title + ' 專輯封面'">
                            <div class="play-overlay">
                                <div class="play-button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 5v14l11-7z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div class="artist">{{ item.artist }}</div>
                        </div>
                    </RouterLink>

                    <span v-else class="music-link" style="cursor: not-allowed; opacity:.7;">
                        <div class="image-container">
                            <img :src="item.img" :alt="item.title + ' 專輯封面'">
                        </div>
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div class="artist">{{ item.artist }}</div>
                        </div>
                    </span>
                </div>
            </div>
            <button class="scroll-btn right" @click="scrollMusicList(1)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// 最新歌曲（把原本 link 改為 id；有做好的頁面就填 id，還沒做就先留空）
const hotSongs = [
    { id: 'bling-bang-bang-born', title: "Bling-Bang-Bang-Born", artist: "Creepy Nuts", img: "/images/music/Creepy Nuts-Bling-Bang-Bang-Born.jpg" },
    { id: 'zenszenzense', title: "前前前世", artist: "RADWIMPS", img: "/images/music/RADWIMPS-前前前世.jpg" },
    { id: 'lemon', title: "Lemon", artist: "米津玄師", img: "/images/music/米津玄師-Lemon.jpg" },
    { id: 'pretender', title: "Pretender", artist: "Official髭男dism", img: "/images/music/Official髭男dism-Pretender.jpg" },
    { id: 'idol', title: "Idol", artist: "Yoasobi", img: "/images/music/Yoasobi-Idol.png" },
    { id: '灰色と青', title: "灰色と青", artist: "米津玄師", img: "/images/music/米津玄師-灰色と青.jpg" },
    { id: '晚餐歌', title: "晚餐歌", artist: "tuki", img: "/images/music/tuki-晚餐歌.jpg" },
    { id: 'はいよろこんで', title: "はいよろこんで", artist: "Kocchi no Kento", img: "/images/music/Kocchi no Kento-はいよろこんで.jpg" },
    { id: '怪物', title: "怪物", artist: "Yoasobi", img: "/images/music/Yoasobi-怪物.jpg" },
    { id: '愛の賞味期限', title: "愛の賞味期限", artist: "tuki", img: "/images/music/tuki-愛の賞味期限.jpg" }
]

// 滑動
const scrollerRef = ref(null)
function scrollMusicList(direction) {
    const scrollAmount = 320
    scrollerRef.value?.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
}
</script>

<style scoped>
/* 容器樣式 */
.container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0px 40px;
}

/* 標題樣式 */
.songs-title {
    position: relative;
}

.title-text {
    font-size: 2.5rem;
    letter-spacing: 2px;
    color: white;
}

.title-underline {
    width: 180px;
    height: 4px;
    background: linear-gradient(90deg, transparent, white, transparent);
    border-radius: 2px;
    animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {

    0%,
    100% {
        opacity: 0.6;
        transform: scaleX(1);
    }

    50% {
        opacity: 1;
        transform: scaleX(1.2);
    }
}

.title-underline {
    width: 180px;
    height: 4px;
    background: linear-gradient(90deg, transparent, white, transparent);
    border-radius: 2px;
    animation: shimmer 2s ease-in-out infinite;
}

/* 音樂輪播容器 */
.music-carousel {
    position: relative;
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* 滾動容器 */
.music-scroller {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
    gap: 24px;
    overflow-x: auto;
    padding: 20px 10px;
    scroll-behavior: smooth;
}

.music-scroller::-webkit-scrollbar {
    height: 8px;
}

.music-scroller::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.music-scroller::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    transition: background 0.3s ease;
}

.music-scroller::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* 音樂項目 */
.music-item {
    width: 380px;
    transition: transform 0.3s ease, filter 0.3s ease;
}

.music-item:hover {
    transform: translateY(-8px);
    filter: brightness(1.1);
}

/* 音樂連結 */
.music-link {
    display: flex;
    text-decoration: none;
    color: inherit;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.music-link:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
}

/* 圖片容器 */
.image-container {
    position: relative;
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 12px;
}

.music-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.music-item:hover img {
    transform: scale(1.15);
}

/* 播放覆蓋層 */
.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.music-item:hover .play-overlay {
    opacity: 1;
}

.play-button {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    transition: transform 0.2s ease;
}

.play-button:hover {
    transform: scale(1.1);
}

/* 資訊區域 */
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    flex: 1;
    min-width: 0;
}

.info .title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 6px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.info .artist {
    font-size: 1.1rem;
    color: #718096;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 滾動按鈕 */
.scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.9);
    color: #4a5568;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
}

.scroll-btn:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
    color: #2d3748;
}

.scroll-btn:active {
    transform: translateY(-50%) scale(0.95);
}

.scroll-btn.left {
    left: -28px;
}

.scroll-btn.right {
    right: -28px;
}

/* 響應式設計 */
@media (max-width: 768px) {
    .container {
        padding: 20px 10px;
    }

    .title-text {
        font-size: 2rem;
        margin-bottom: 30px;
    }

    .music-carousel {
        padding: 20px;
    }

    .music-scroller {
        grid-template-rows: auto;
        gap: 16px;
    }

    .music-item {
        width: 320px;
    }

    .scroll-btn {
        width: 48px;
        height: 48px;
    }

    .scroll-btn.left {
        left: -24px;
    }

    .scroll-btn.right {
        right: -24px;
    }

    .info .title {
        font-size: 1.1rem;
    }

    .info .artist {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .music-item {
        width: 280px;
    }

    .music-link {
        padding: 12px;
    }

    .image-container {
        width: 70px;
        height: 70px;
    }

    .info {
        padding-left: 15px;
    }

    .info .title {
        font-size: 1rem;
    }

    .info .artist {
        font-size: 0.9rem;
    }
}
</style>