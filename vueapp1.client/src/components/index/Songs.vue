<template>
    <!-- 翻轉卡片輪播 -->
    <div class="carousel-wrapper">
        <div class="container">
            <h1 class="songs-title">
                <span class="title-text">近期更新</span>
                <div class="title-underline"></div>
            </h1>
            <div class="carousel-container">
                <div class="animation" id="songCards">
                    <div class="flip-card" v-for="(item, index) in songs" :key="index">
                        <div class="flip-card-inner">
                            <!-- 卡片正面 -->
                            <div class="flip-card-front">
                                <div class="image-container">
                                    <img :src="item.img" :alt="item.title + ' 專輯封面'" />
                                </div>
                                <div class="quick-info">
                                    <div class="song-title-preview">{{ item.title }}</div>
                                    <div class="artist-preview">{{ item.artist }}</div>
                                </div>
                            </div>
                            <!-- 卡片背面 -->
                            <a :href="item.link" class="flip-card-back">
                                <div class="back-content">
                                    <div class="music-note-icon">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                                                fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h3 class="back-title">{{ item.title }}</h3>
                                    <p class="back-artist">{{ item.artist }}</p>
                                    <div class="play-button">
                                        <span>立即播放</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 5v14l11-7z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 輪播控制 -->
            <div class="carousel-controls">
                <button class="control-btn pause-btn" @click="toggleAnimation">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 輪播圖數據
const songs = [
    { title: 'Pretender', artist: 'Official髭男dism', img: "/images/music/Official髭男dism-Pretender.jpg", link: "./Pretender.html" },
    { title: "前前前世", artist: "RADWIMPS", img: "/images/music/RADWIMPS-前前前世.jpg", link: "" },
    { title: "晚餐歌", artist: "tuki", img: "/images/music/tuki-晚餐歌.jpg", link: "./晚餐歌.html" },
    { title: "怪物", artist: "Yoasobi", img: "/images/music/Yoasobi-怪物.jpg", link: "./怪物.html" },
    { title: "灰色と青", artist: "米津玄師", img: "/images/music/米津玄師-灰色と青.jpg", link: "" },
    { title: 'Pretender', artist: 'Official髭男dism', img: "/images/music/Official髭男dism-Pretender.jpg", link: "./Pretender.html" },
    { title: "前前前世", artist: "RADWIMPS", img: "/images/music/RADWIMPS-前前前世.jpg", link: "" },
    { title: "晚餐歌", artist: "tuki", img: "/images/music/tuki-晚餐歌.jpg", link: "./晚餐歌.html" },
    { title: "怪物", artist: "Yoasobi", img: "/images/music/Yoasobi-怪物.jpg", link: "./怪物.html" },
    { title: "灰色と青", artist: "米津玄師", img: "/images/music/米津玄師-灰色と青.jpg", link: "" }
]

const isPaused = ref(false)
const animationElement = ref(null)

function toggleAnimation() {
    isPaused.value = !isPaused.value
    const element = document.getElementById('songCards')
    if (element) {
        element.style.animationPlayState = isPaused.value ? 'paused' : 'running'
    }
}

</script>

<style scoped>
/* 整體容器 */
.carousel-wrapper {
    padding: 60px 0;
    position: relative;
    overflow: hidden;
}

.carousel-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
}

.container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* 標題樣式 */
.songs-title {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
}

.title-text {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    letter-spacing: 3px;
    display: inline-block;
    position: relative;
    z-index: 2;
}

.title-underline {
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, white, transparent);
    margin: 16px auto 0;
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

/* 輪播容器 */
.carousel-container {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    height: 550px;
    display: flex;
    align-items: center; /* 垂直置中 */
}

/* 動畫輪播 */
.animation {
    display: flex;
    gap: 1%;
    width: 100%;
    animation: scroll 15s linear infinite;
    transition: animation-play-state 0.3s ease;
    margin: auto;
}

.animation:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* 翻轉卡片 */
.flip-card {
    width: 19%;
    height: 400px ;
    flex-shrink: 0;
    perspective: 1000px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* 卡片正面和背面共同樣式 */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
}

/* 卡片正面 */
.flip-card-front {
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
    height: 100%;
}

.flip-card:hover .flip-card-front {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.image-container {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
}

.flip-card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.flip-card:hover .flip-card-front img {
    transform: scale(1.1);
}


.quick-info {
    padding: 20px;
    text-align: center;
}

.song-title-preview {
    font-size: 1.2rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 8px;
    line-height: 1.3;
}

.artist-preview {
    font-size: 1rem;
    color: #718096;
    font-weight: 500;
}

/* 卡片背面 */
.flip-card-back {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    position: relative;
    overflow: hidden;
    height: 100%;
}

.flip-card-back::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%);
    opacity: 0.8;
}

.back-content {
    text-align: center;
    padding: 30px;
    position: relative;
    z-index: 2;
}

.music-note-icon {
    color: #667eea;
    margin-bottom: 20px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.back-title {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 12px;
    color: white;
    line-height: 1.2;
}

.back-artist {
    font-size: 1.1rem;
    color: #a0aec0;
    margin-bottom: 30px;
    font-weight: 500;
}

.play-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.flip-card-back:hover .play-button {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

/* 輪播控制 */
.carousel-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.control-btn {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.control-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}
/* 響應式設計 */
@media (max-width: 768px) {
    .title-text {
        font-size: 2.2rem;
        letter-spacing: 2px;
    }

    .carousel-container {
        padding: 20px;
    }

    .flip-card {
        width: 220px;
        height: 320px;
    }

    .image-container {
        height: 200px;
    }

    .quick-info {
        padding: 15px;
    }

    .song-title-preview {
        font-size: 1rem;
    }

    .artist-preview {
        font-size: 0.9rem;
    }

    .back-title {
        font-size: 1.2rem;
    }

    .back-artist {
        font-size: 1rem;
    }

    .carousel-controls {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .carousel-wrapper {
        padding: 40px 0;
    }

    .title-text {
        font-size: 1.8rem;
    }

    .flip-card {
        width: 180px;
        height: 280px;
    }

    .image-container {
        height: 160px;
    }

    .animation {
        gap: 5%;
    }
}
</style>