<script setup>
import { ref, onMounted } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const description = "Košarka je sport u kojem se dva tima od po 5 igrača bore postići što više poena (koševa) ubacivanjem lopte kroz obruč protivničkog tima, uz skup određenih pravila.";

const videoModules = import.meta.globEager("../assets/*.mp4");
let kosarkaVideo1src;
Object.keys(videoModules).forEach((key) => {
    if (key.includes("kosarka-video1.mp4")) {
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
    if (key.includes("kosarka-stjepan-sound-bavim-se-kosarkom.mp3")) {
        kosarkaStjepanSoundBavimSeKosarkomOggSrc = audioModules[key].default;
    }
    if (key.includes("shaq-kobe-speech.mp3")) {
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
    if (key.includes("doncic.jpg")) {
        basketballDoncicImgSrc = imgModules[key].default;
    }
    if (key.includes("kosarka1.gif")) {
        kosarka1GifSrc = imgModules[key].default;
    }
    if (key.includes("kosarka-slika1.jpeg")) {
        kosarkaSlika1JpegSrc = imgModules[key].default;
    }
});
const basketballDoncicImgUrl = ref(basketballDoncicImgSrc);
const kosarka1GifUrl = ref(kosarka1GifSrc);
const kosarkaSlika1JpegUrl = ref(kosarkaSlika1JpegSrc);


</script>
<template>
    <div class="text-center header-big">Stjepanov prvi izbor - Kosarka</div>
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
    <p class="text-align-center">Bavim li se ja ovim sportom?</p>
    <div class="center-content">
        <audio controls>
            <source :src="kosarkaStjepanSoundBavimSeKosarkomMP3Url" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <div class="divider"></div>
    <p class="text-align-center">Shaquille O'Nealov govor o Kobe Bryantu</p>
    <div class="center-content">
        <audio controls>
            <source :src="shaqKobeSpeechOggUrl" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    <div class="divider"></div>
    <h1>Pravila</h1> <br>
    <div class="center-content">
        <p>Osnovni rekviziti bez kojih je košarkaška utakmica nemoguća jesu lopta i teren, koji mora biti ravan i dimenzija
            28 x 15 m. Na terenu se nalaze koševi s tablom, obručem i mrežicom, te linije. Metalni obruč nalazi se na 3.05 m
            visine od zemlje. Lopta za muškarce ima obim od 76 cm i masu od 600 g, dok za žene masa lopte iznosi 540 g, a
            obim 73 cm. Cilj igre je ubaciti loptu u koš protivničkog tima. Igru kontrolira 1 glavni, 2 pomoćna suca i
            delegati koji zapisuju prekršaje i mjere vrijeme. U jednom timu su 5 glavnih i 7 rezervnih igrača. Broj izmjena
            je neograničen, međutim, vrše se u prekidu igre. Lopta ubačena u koš izvan zone od 6.75 m (do sezone 2010/2011.
            bilo je 6.25 m) boduje se s 3 poena. Koš iz unutrašnje zone vrijedi 2 poena, a koš s linije za slobodna bacanja
            1 poen. Igra traje 40 minuta (4 x 10). Vrijeme se mjeri štopericom i mjeri se vrijeme stvarne igre. To znači da,
            kada se igra zaustavi zbog nekog prekršaja, zaustavlja se i sat. Zbog toga košarkaške utakmice traju u prosjeku
            2 sata. Igra započinje kada sudac podbaci loptu između dvaju igrača iz oba tima koji skaču u centralnom krugu i
            bore se za loptu. To je tzv. mrtva lopta. Ona se dosuđuje kad je drži više igrača odjednom ili se ne može
            procijeniti čija je lopta. Lopta se po terenu prenosi vođenjem ili dodavanjem između igrača. Lopta koja se nađe
            izvan terena, tj. koja dodiruje zemlju, predmet ili igrača izvan terena, jeste lopta u autu i dosuđuje se lopta
            za protivnički tim koji je izvodi s linije gdje je prekršaj napravljen.</p>
    </div>
    <div class="divider"></div>
    <div class="center-content">
        <div class="flex flex-col">
            <div class="text-align-center">
                <p>Najdrazi tim:
                    <a href="https://www.mavs.com/">Dallas Mavericks</a>
                </p>
            </div>
            <div>
                <img :src="basketballDoncicImgUrl" alt="">
                <div>Luka Doncic</div>
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