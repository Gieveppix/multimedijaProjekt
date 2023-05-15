<script setup>
import { ref, onMounted } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const description = "Planinski biciklizam je uzbudljiv i izazovan sport koji uključuje vožnju specijaliziranim biciklima dizajniranim za off-road teren, uključujući nepristupačne staze, strme spustove i kameniti teren. Sport zahtijeva kombinaciju fizičke izdržljivosti, tehničke vještine i mentalne snage kako bi se savladale izazovne prepreke i nepredvidljivi teren.";

const videoModules = import.meta.globEager("../assets/*.mp4");
let kosarkaVideo1src;
Object.keys(videoModules).forEach((key) => {
    if (key.includes("biking-video1.mp4")) {
        kosarkaVideo1src = videoModules[key].default;
    }
});
const kosarkaVideo1url = ref(kosarkaVideo1src);

const showGifDialog = ref(null);
const openGifDialog = () => {
    showGifDialog.value = true;
};

const showImgDialog = ref(null);
const openImgDialog = () => {
    showImgDialog.value = true;
};

const audioModules = import.meta.globEager("../assets/*.mp3");
let kosarkaStjepanSoundBavimSeKosarkomOggSrc;
let shaqKobeSpeechOggSrc;
Object.keys(audioModules).forEach((key) => {
    if (key.includes("biking-sound1.mp3")) {
        kosarkaStjepanSoundBavimSeKosarkomOggSrc = audioModules[key].default;
    }
    if (key.includes("biking-stjepan-vozim-bicikl.mp3")) {
        shaqKobeSpeechOggSrc = audioModules[key].default;
    }
});
const kosarkaStjepanSoundBavimSeKosarkomMP3Url = ref(kosarkaStjepanSoundBavimSeKosarkomOggSrc);
const shaqKobeSpeechOggUrl = ref(shaqKobeSpeechOggSrc);

const imgModules = import.meta.globEager("../assets/*.{gif,jpeg,jpg,png}");
let basketballDoncicImgSrc;
let kosarka1GifSrc;
let kosarkaSlika1JpegSrc;
Object.keys(imgModules).forEach((key) => {
    if (key.includes("trek-6300.jpg")) {
        basketballDoncicImgSrc = imgModules[key].default;
    }
    if (key.includes("biking-gif1.gif")) {
        kosarka1GifSrc = imgModules[key].default;
    }
    if (key.includes("trek-6300-kocnica.jpg")) {
        kosarkaSlika1JpegSrc = imgModules[key].default;
    }
});
const basketballDoncicImgUrl = ref(basketballDoncicImgSrc);
const kosarka1GifUrl = ref(kosarka1GifSrc);
const kosarkaSlika1JpegUrl = ref(kosarkaSlika1JpegSrc);

</script>
<template>
    <div class="text-center header-big">Stjepanov drugi izbor - Brdski biciklizam</div>
    <div class="divider"></div>
    <div class="text-align-center">
        <p>{{ description }}</p>
    </div>
    <div class="divider"></div>
    <div class="flex flex-row justify-between">
        <div class="hover-pointer">
            <img :src="kosarka1GifUrl" width="350" height="230" @click="() => openGifDialog()">
        </div>
        <div class="hover-pointer">
            <img :src="kosarkaSlika1JpegUrl" width="350" height="230" alt="" @click="() => openImgDialog()">
        </div>
        <div class=" hover-pointer">
            <VideoPlayer :videoUrl="kosarkaVideo1url" />
        </div>
    </div>
    <div class="divider"></div>
    <p class="text-align-center">Zvukovi dinamicne voznje na brdskom biciklu</p>
    <div class="center-content">
        <audio controls>
            <source :src="kosarkaStjepanSoundBavimSeKosarkomMP3Url" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <div class="divider"></div>
    <p class="text-align-center">Vozim li ja bicikl?</p>
    <div class="center-content">
        <audio controls>
            <source :src="shaqKobeSpeechOggUrl" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <div class="divider"></div>
    <h1>Detaljniji opis</h1> <br>
    <div class="center-content">
        <p>Staze za brdski biciklizam mogu se znatno razlikovati po težini, od relativno glatkih i laganih do izuzetno
            strmih i tehnički zahtjevnih. Biciklisti moraju biti sposobni za navigaciju uskih zavoja, skokova, padova i
            drugih prepreka, istovremeno održavajući kontrolu i brzinu. Planinski biciklizam može se uživati u različitim
            okruženjima, uključujući nacionalne parkove, šume i posebne
            parkove za planinski biciklizam. Sport ima mnogo različitih disciplina, uključujući cross-country utrke,
            downhill utrke, freeride i endurance vožnju, svaka sa svojim jedinstvenim izazovima i potrebnim vještinama.
            Sveukupno, planinski biciklizam je uzbudljiv i nagrađujući sport koji pruža odličan način za održavanje forme,
            uživanje u prirodi i izazov sebi.</p>
    </div>
    <div class="divider"></div>
    <div class="center-content">
        <div class="flex flex-col">
            <div class="text-align-center">
                <p>Moj bicikl:
                    <a href="https://archive.trekbikes.com/us/en/2012/Trek/6300">Trek 6300</a>
                </p>
            </div>
            <div>
                <img :src="basketballDoncicImgUrl" alt="">
                <div>TREK 6300</div>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <el-dialog :model-value="showGifDialog" @update:model-value="showGifDialog = $event" width="70%" center>
        <div class="center-content">
            <img :src="kosarka1GifUrl" alt="" />
        </div>
    </el-dialog>
    <el-dialog :model-value="showImgDialog" @update:model-value="showImgDialog = $event" width="70%" center>
        <div class="center-content">
            <img :src="kosarkaSlika1JpegUrl" alt="" />
        </div>
    </el-dialog>
</template>

<style>
.divider {
    margin: 60px 0 100px 0;
}

.header-big {
    font-size: 2em;
}

.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.text-align-center {
    text-align: center;
}
</style>
