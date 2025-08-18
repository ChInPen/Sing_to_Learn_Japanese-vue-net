<template>
    <div class="page-layout" v-if="song">
        <div class="content">
            <!-- 影片 + 雙字幕 -->
            <div class="video-container">
                <video ref="videoEl" :src="song.videoUrl" controls loop
                    controlslist="nodownload nofullscreen noremoteplayback" @click="onVideoClick" />
                <div id="subtitle">
                    <p class="j-text" v-if="currentLine" v-html="currentLine.jp"></p>
                </div>
                <div id="subtitle2" style="display:flex;">
                    <p class="c-text" v-if="currentLine">{{ currentLine.zh }}</p>
                </div>
            </div>

            <!-- 控制列 -->
            <div id="icons">
                <span class="btleft" @click="goPrev"><i class="fa-solid fa-circle-left"></i></span>
                <span class="btstop" @click="togglePlay"><i class="fa-solid fa-circle-stop"></i></span>
                <span class="btright" @click="goNext"><i class="fa-solid fa-circle-right"></i></span>
                <span class="btrepeat" :class="{ click: repeatIndex >= 0, click2: repeatIndex < 0 }"
                    @click="toggleGlobalRepeat">
                    <i class="fa-solid fa-arrows-rotate"></i>
                </span>
            </div>

            <!-- 歌曲資訊 -->
            <div class="explain">
                <h1>{{ song.title }}</h1>
                <h5>{{ song.artist }}</h5>
                <div class="song-meta">
                    <p v-if="song.lyricist">作詞: {{ song.lyricist }}</p>
                    <p v-if="song.arranger">編曲: {{ song.arranger }}</p>
                </div>
                <div class="song-meta">
                    <p v-if="song.composer">作曲: {{ song.composer }}</p>
                    <p v-if="song.releaseDate">發行日期: {{ song.releaseDate }}</p>
                </div>

                <p v-if="song.videoSource" class="song-meta">
                    影片來源：
                    <a :href="song.videoSource" target="_blank" rel="noopener">{{ song.videoSource }}</a>
                </p>
            </div>
            <!-- 自動捲動開關 -->
            <div class="subs-tool">
                <label><input type="checkbox" v-model="autoScroll" />歌詞自動捲動</label>
            </div>
            <!-- 歌詞 -->
            <div id="lyrics" class="" ref="lyricsWrap">
                <div class="lyrics-s" v-for="(line, idx) in lyrics" :key="line.no ?? idx"
                    :ref="el => lyricRefs[idx] = el">
                    <p class="Numerical-order" :class="{ active: idx === activeIndex }">
                        {{ line.no ?? idx + 1 }}
                    </p>

                    <div class="text" :class="{ 'active-1': idx === activeIndex }">
                        <div class="lyric-line">
                            <p class="j-text" v-html="line.jp"></p>
                            <!-- 單行播放 -->
                            <i class="fa-solid fa-play pa" :class="{ click: idx === activeIndex }"
                                @click="playLine(idx)" title="播放這一行"></i>
                        </div>

                        <div class="lyric-line">
                            <p class="c-text">{{ line.zh }}</p>
                            <!-- 單行重複 -->
                            <i class="fa-solid fa-arrows-rotate re" :class="{
                                click: repeatIndex === idx,
                                click2: repeatIndex !== idx
                            }" @click="toggleLineRepeat(idx)" title="重複播放這一行"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /歌詞 -->
        </div>
    </div>

    <div v-else class="content">
        <p style="color:#fff;">找不到這首歌。</p>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getSongById } from '@/data/songs'

const route = useRoute()
const songId = computed(() => route.params.id)
const song = computed(() => getSongById(songId.value))

// DOM refs
const videoEl = ref(null)
const autoScroll = ref(true)       // ← 使用者可關閉自動捲動
const lyricsWrap = ref(null)       // ← 歌詞容器

// 播放狀態
const activeIndex = ref(-1)     // 目前播放或高亮中的歌詞索引
const repeatIndex = ref(-1)     // 單行重複的索引；-1 代表關閉
const userJumpIndex = ref(-1)   // 使用者剛點擊的行（避免 timeupdate 邏輯搶走）

// 歌詞（從 data 取）
const lyrics = computed(() => song.value?.lyrics ?? [])

// 目前字幕（雙行）
const currentLine = computed(() => {
    if (activeIndex.value < 0) return null
    return lyrics.value[activeIndex.value]
})

function setVolumeDefault() {
    if (videoEl.value) videoEl.value.volume = 0.1
}

function findIndexByTime(time) {
    return lyrics.value.findIndex(l => time >= l.start && time < l.end)
}

function handleTimeUpdate() {
    if (!videoEl.value) return
    const t = videoEl.value.currentTime

    // 若正處於單行重複
    if (repeatIndex.value >= 0) {
        const sec = lyrics.value[repeatIndex.value]
        if (t > sec.end) {
            videoEl.value.currentTime = sec.start
        }
        activeIndex.value = repeatIndex.value
        return
    }

    // 正常追蹤目前時間所在行
    const idx = findIndexByTime(t)
    activeIndex.value = idx

    // 若剛剛是使用者點了 playLine，先吃一次 timeupdate，不要立刻被打斷
    if (userJumpIndex.value >= 0) {
        activeIndex.value = userJumpIndex.value
        userJumpIndex.value = -1
    }
}

function playLine(idx) {
    if (!videoEl.value) return
    const line = lyrics.value[idx]
    if (!line) return
    userJumpIndex.value = idx
    activeIndex.value = idx
    videoEl.value.currentTime = line.start
    videoEl.value.play()
}

function toggleLineRepeat(idx) {
    if (repeatIndex.value === idx) {
        // 關閉單行重複
        repeatIndex.value = -1
    } else {
        // 開啟單行重複，並跳到該行開頭
        repeatIndex.value = idx
        playLine(idx)
    }
}

function toggleGlobalRepeat() {
    if (!videoEl.value) return
    const idx = findIndexByTime(videoEl.value.currentTime)
    if (idx === -1) return
    if (repeatIndex.value === idx) {
        repeatIndex.value = -1
    } else {
        repeatIndex.value = idx
        playLine(idx)
    }
}

function togglePlay() {
    if (!videoEl.value) return
    // 若正在重複播放某行，按下 stop 只切換播放狀態，不變更 repeatIndex
    if (videoEl.value.paused) videoEl.value.play()
    else videoEl.value.pause()
}

function goPrev() {
    if (!videoEl.value) return
    // 取消重複狀態
    if (repeatIndex.value >= 0) repeatIndex.value = -1

    let idx = findIndexByTime(videoEl.value.currentTime)
    if (idx === -1) idx = 0
    else idx -= 1
    if (idx < 0) idx = 0
    playLine(idx)
}

function goNext() {
    if (!videoEl.value) return
    // 取消重複狀態
    if (repeatIndex.value >= 0) repeatIndex.value = -1

    let idx = findIndexByTime(videoEl.value.currentTime)
    if (idx === -1) idx = 0
    else idx += 1
    if (idx >= lyrics.value.length) idx = lyrics.value.length - 1
    playLine(idx)
}

function onVideoClick() {
    if (!videoEl.value) return
    const idx = findIndexByTime(videoEl.value.currentTime)

    if (videoEl.value.paused) {
        videoEl.value.play()
    } else {
        // 若沒在單行重複 → 點擊影片就暫停
        if (repeatIndex.value === -1) {
            videoEl.value.pause()
        } else if (repeatIndex.value === idx) {
            // 正在單行重複，且點擊時仍在同一行 → 取消重複
            repeatIndex.value = -1
        }
    }
}

// 綁定/解綁 timeupdate
onMounted(() => {
    setVolumeDefault()
    videoEl.value?.addEventListener('timeupdate', handleTimeUpdate)
})

onBeforeUnmount(() => {
    videoEl.value?.removeEventListener('timeupdate', handleTimeUpdate)
})

// 切換歌曲時，重置狀態
watch(songId, () => {
    activeIndex.value = -1
    repeatIndex.value = -1
    userJumpIndex.value = -1
    if (videoEl.value) {
        videoEl.value.pause()
        videoEl.value.currentTime = 0
        setVolumeDefault()
    }
})
// 存放每一行的 DOM 
const lyricRefs = ref([])
watch(activeIndex, async (newVal) => {
    if (newVal < 0) return
    if (!autoScroll.value) return   // ← 關掉時，直接不捲
    await nextTick()

    const el = lyricRefs.value[newVal]
    if (!el) return

    el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    })
})
</script>

<style scoped>
/* 小工具行 */
.subs-tool {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 8px 0;
}

/* 歌詞按鈕設定 */
.lyric-line {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
}

/* 播放中的歌詞 */
.text.active-1 .j-text {
    color: #fff;
    /* 日文顯示白色 */
}

.text.active-1 .c-text {
    color: #00BFAE;
    /* 中文顯示綠色 */
}

.song-meta {
    display: flex;
    font-size: 20px;
    justify-content: center;
    gap: 10px;
}

.explain {
    text-align: center;
    font-size: 30px;
}

.page-layout {
    display: flex;
    justify-content: center;
}

.content {
    max-width: 1100px;
    width: 100%;
    color: #fff;
}

.video-container {
    position: relative;
}

video {
    width: 100%;
    border-radius: 8px;
    background: #000;
}

#subtitle,
#subtitle2 {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .7);
}

#subtitle {
    bottom: 80px;
    font-size: 24px;
}

#subtitle2 {
    bottom: 40px;
    font-size: 18px;
    justify-content: center;
}

#icons {
    display: flex;
    gap: 18px;
    align-items: center;
    margin: 16px 0;
    font-size: 60px;
    align-items: center;
    justify-content: center;
}

#icons span {
    cursor: pointer;
}

#icons .click {
    color: #fff;
}

#icons .click2 {
    opacity: .6;
}

#lyrics {
    margin-top: 16px;
}

.lyrics-s {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.Numerical-order {
    width: 28px;
    text-align: center;
    opacity: .6;
    font-size: 1.5rem;
}

.Numerical-order.active {
    opacity: 1;
    font-weight: 700;
}

.text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 1.5rem;
}

.text>div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.text.active-1 {
    background: rgba(255, 255, 255, .06);
    border-radius: 8px;
    padding: 6px 8px;
}

.j-text,
.c-text {
    margin: 0;
    color: white;
}

.text .j-text,
.c-text {
    margin: 0;
    color: #888;
}

.pa,
.re {
    cursor: pointer;
}

.pa.click {
    color: #fff;
}

.re.click {
    color: #fff;
}

.re.click2 {
    opacity: .6;
}

:deep(ruby) {
    display: ruby;
    ruby-position: over;
    ruby-align: center;
}

:deep(rt) {
    display: ruby-text;
    font-size: 0.6em;
    line-height: 1;
}

:deep(rp) {
    display: none;
}
</style>
