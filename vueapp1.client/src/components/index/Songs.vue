<template>
    <!-- 輪播圖 -->
    <div class="container">
        <h1>近期更新</h1>
        <div class="animation" id="songCards">
            <div class="flip-card" v-for="(item, index) in songs" :key="index">
                <div class="flip-card-inner">
                    <!-- 卡片正面 -->
                    <div class="flip-card-front">
                        <img :src="item.img" />
                    </div>
                    <!-- 卡片背面 -->
                    <a :href="item.link" class="flip-card-back">
                        <p style="font-size: 20px;">{{ item.title }}</p>
                        <p>{{ item.artist }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// 輪播圖
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
</script>
<style scoped>
.animation {
    display: flex;
    gap: 2%;
    width: 100%;
}

.container {
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
}

/* 動畫效果 */
.animation {
    height: auto;
    display: flex;
    animation: scroll 15s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* 翻轉卡片內容 */
.flip-card {
    height: auto;
    width: 18%;
    flex-shrink: 0;
    border-radius: 8px;
}

.flip-card-inner {
    height: auto;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.flip-card img {
    width: 100%;
    border-radius: 8px;
}

/* 滑鼠懸停時翻轉 */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* 卡片正面 & 背面 */
.flip-card-front,
.flip-card-back {
    backface-visibility: hidden;
}

/* 正面樣式 */
.flip-card-front img {
    display: block;
    width: 100%;
    height: auto;
    padding: 1%;
}

/* 背面樣式 */
.flip-card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: url("images/music/背景音符圖.jpg") no-repeat center center;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: opacity 0.5s ease;
    text-decoration: none;
}

.flip-card-back::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.flip-card-back p {
    position: relative;
    z-index: 2;
    margin: 0;
}

.flip-card-back:hover p,
.flip-card-back:hover a {
    color: #FF9900;
}

.flip-card-back .overlay {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}
</style>