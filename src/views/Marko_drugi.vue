<script setup>
import { ref, onMounted } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const description =
  "Rukomet je energičan i zahtjevan sport koji uključuje igru sa specijaliziranom loptom dizajniranom za brze i precizne dodavanja i šuteve na gol. Ova igra zahtijeva kombinaciju fizičke snage, taktičkog razmišljanja i timskog rada kako bi se savladale obrambene linije suparničkih timova i postigli golovi. Rukomet se igra na terenima unutar zatvorenih prostora, što čini svaku utakmicu intenzivnom i nepredvidljivom.";

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
  if (key.includes("voisMarko.mp3")) {
    kosarkaStjepanSoundBavimSeKosarkomOggSrc = audioModules[key].default;
  }
  if (key.includes("voisMarko.mp3")) {
    shaqKobeSpeechOggSrc = audioModules[key].default;
  }
});
const kosarkaStjepanSoundBavimSeKosarkomMP3Url = ref(
  kosarkaStjepanSoundBavimSeKosarkomOggSrc
);
const shaqKobeSpeechOggUrl = ref(shaqKobeSpeechOggSrc);

const imgModules = import.meta.globEager("../assets/*.{gif,jpeg,jpg,png}");
let basketballDoncicImgSrc;
let kosarka1GifSrc;
let kosarkaSlika1JpegSrc;
Object.keys(imgModules).forEach((key) => {
  if (key.includes("rukomet1.jpg")) {
    basketballDoncicImgSrc = imgModules[key].default;
  }
  if (key.includes("rukomet2.jpeg")) {
    kosarka1GifSrc = imgModules[key].default;
  }
  if (key.includes("rukomet3.jpeg")) {
    kosarkaSlika1JpegSrc = imgModules[key].default;
  }
});
const basketballDoncicImgUrl = ref(basketballDoncicImgSrc);
const kosarka1GifUrl = ref(kosarka1GifSrc);
const kosarkaSlika1JpegUrl = ref(kosarkaSlika1JpegSrc);
</script>
<template>
  <div class="text-center header-big">
    Markov prvi izbor - Rukomet
  </div>
  <div class="divider"></div>
  <div class="text-align-center">
    <p>{{ description }}</p>
  </div>
  <div class="divider"></div>
  <div class="flex flex-row justify-between">
    <div class="hover-pointer">
      <img
        :src="kosarka1GifUrl"
        width="350"
        height="230"
        @click="() => openGifDialog()"
      />
    </div>
    <div class="hover-pointer">
      <img
        :src="kosarkaSlika1JpegUrl"
        width="350"
        height="230"
        alt=""
        @click="() => openImgDialog()"
      />
    </div>
    <div class="hover-pointer">
      <img
        :src="basketballDoncicImgSrc"
        width="350"
        height="230"
        alt=""
        @click="() => openImgDialog()"
      />
    </div>
  </div>
  <div class="divider"></div>
  <p class="text-align-center">Bavim li se ja rukometom?</p>
  <div class="center-content">
    <audio controls>
      <source :src="shaqKobeSpeechOggUrl" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
  <div class="divider"></div>
  <h1>Detaljniji opis</h1>
  <br />
  <div class="center-content">
    <p>
      Rukometni tereni mogu se znatno razlikovati po veličini, od standardnih do većih za međunarodna natjecanja. Igrači moraju biti sposobni za navigaciju kroz uske obrambene linije, precizno dodavanje, brze kontranapade i druge izazove, istovremeno održavajući kontrolu nad loptom i brzinu igre. Rukomet se može igrati u različitim okruženjima, uključujući školske dvorane, sportske centre i velike arene. Sport ima mnogo različitih disciplina, uključujući standardne utakmice, brze igre s manje igrača, beach rukomet, svaka sa svojim jedinstvenim izazovima i potrebnim vještinama. Sveukupno, rukomet je uzbudljiv i nagrađujući sport koji pruža odličan način za održavanje forme, uživanje u timskom radu i izazov sebi.
    </p>
  </div>
  <div class="divider"></div>
  <el-dialog
    :model-value="showGifDialog"
    @update:model-value="showGifDialog = $event"
    width="70%"
    center
  >
    <div class="center-content">
      <img :src="kosarka1GifUrl" alt="" />
    </div>
  </el-dialog>
  <el-dialog
    :model-value="showImgDialog"
    @update:model-value="showImgDialog = $event"
    width="70%"
    center
  >
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
