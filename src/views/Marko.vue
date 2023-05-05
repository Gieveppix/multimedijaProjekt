<script setup>
import { ref, onMounted } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const description =
  "Vaterpolo je sport u kojem se dva tima od po 7 igrača bore postići što više poena (golova) ubacivanjem lopte u gol protivničkog tima, uz skup određenih pravila.";

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
Object.keys(audioModules).forEach((key) => {
  if (key.includes("voisMarko.mp3")) {
    kosarkaStjepanSoundBavimSeKosarkomOggSrc = audioModules[key].default;
  }
});
const kosarkaStjepanSoundBavimSeKosarkomMP3Url = ref(
  kosarkaStjepanSoundBavimSeKosarkomOggSrc
);

const imgModules = import.meta.globEager("../assets/*.{gif,jpeg,jpg,png}");
let basketballDoncicImgSrc;
let kosarka1GifSrc;
let kosarkaSlika1JpegSrc;
Object.keys(imgModules).forEach((key) => {
  if (key.includes("waterpolo.jpg")) {
    basketballDoncicImgSrc = imgModules[key].default;
  }
  if (key.includes("waterpolo.gif")) {
    kosarka1GifSrc = imgModules[key].default;
  }
  if (key.includes("waterpolo.png")) {
    kosarkaSlika1JpegSrc = imgModules[key].default;
  }
});
const kosarka1GifUrl = ref(kosarka1GifSrc);
const kosarkaSlika1JpegUrl = ref(kosarkaSlika1JpegSrc);
</script>
<template>
  <div class="text-center header-big">Markov drugi izbor - Vaterpolo</div>
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
      <VideoPlayer :videoUrl="kosarkaVideo1url" />
    </div>
  </div>
  <div class="divider"></div>
  <p class="text-align-center">Bavim li se ja ovim sportom?</p>
  <div class="center-content">
    <audio controls>
      <source
        :src="kosarkaStjepanSoundBavimSeKosarkomMP3Url"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
  <div class="divider"></div>
  <h1>Pravila</h1>
  <br />
  <div class="center-content">
    <p>
      Osnovni rekviziti bez kojih je vaterpolo utakmica nemoguća su lopta i
      bazen, čije dimenzije iznose 30 x 20 m za muškarce i 25 x 17 m za žene.
      Dubina bazena mora biti minimalno 1,8 m. Na krajevima bazena nalaze se
      golovi širine 3 m i visine 0,9 m. Lopta za muškarce ima obim od 68-71 cm i
      masu od 400-450 g, dok za žene masa lopte iznosi 350-400 g, a obim 65-67
      cm. Cilj igre je ubaciti loptu u gol protivničkog tima. Igru kontrolira 2
      glavna suca, zapisničar te dvoje pomoćnika koji prate igrače na klupi. U
      jednom timu su 7 glavnih i do 6 rezervnih igrača. Broj izmjena je
      neograničen, ali vrše se u prekidu igre. Utakmica traje 32 minuta (4 x 8),
      s time-outom od 2 minute između prvog i drugog te trećeg i četvrtog
      perioda, te pauzom od 5 minuta između drugog i trećeg perioda
    </p>
  </div>
  <div class="divider"></div>
  <div class="center-content">
    <div class="flex flex-col">
      <div class="text-align-center">
        <p>
          Najdrazi tim:
          <a href="https://havk-mladost.hr/">Mladost</a>
        </p>
      </div>
    </div>
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
