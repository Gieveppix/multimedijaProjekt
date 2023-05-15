<script setup>
import { ref, onMounted } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const rules = ref([
  "Pool specifications: Swimming competitions are held in standard-sized pools. Olympic events use a 50-meter pool (long course), while other competitions might use a 25-meter pool (short course). The pool is divided into multiple lanes, usually 8 or 10, with each lane being 2.5 meters wide. The water temperature must be maintained between 25-28°C (77-82.4°F).",
  "Swimming styles: There are four main competitive swimming styles: freestyle, backstroke, breaststroke, and butterfly. Each stroke has its own technique and specific rules.",
  "Race distances: Swimming events vary in distance, ranging from 50 meters (sprint) to 1500 meters (distance) for pool events. Open water swimming events can cover distances of 5, 10, or 25 kilometers.",
  "Starts: Swimmers begin the race with a dive start from starting blocks, except for the backstroke, where swimmers start from in the water. False starts can lead to disqualification.",
  "Turns and finishes: Swimmers must touch the wall with some part of their body when making turns and finishing the race. Different strokes have specific turn and touch rules. For instance, in freestyle and backstroke, swimmers can perform a flip turn and touch the wall with their feet. In breaststroke and butterfly, swimmers must touch the wall with both hands simultaneously.",
  "Individual medley (IM): IM events combine all four strokes in the following order: butterfly, backstroke, breaststroke, and freestyle. Swimmers must perform the correct technique for each stroke and adhere to the stroke-specific rules for turns and finishes. When transitioning from one stroke to another, swimmers must touch the wall according to the rules of the stroke they are finishing, and then initiate the next stroke according to its specific rules.",
  "Relays: Relay events involve teams of four swimmers, with each swimmer covering an equal distance. There are two types of relays: medley relays and freestyle relays. In medley relays, each swimmer performs a different stroke in the following order: backstroke, breaststroke, butterfly, and freestyle. In freestyle relays, all swimmers use the freestyle technique. Relay takeovers must be executed within a specific zone, and early takeovers can lead to disqualification.",
  "Disqualifications: Swimmers can be disqualified for various reasons, including false starts, performing illegal strokes, incorrect turns, and unsportsmanlike conduct. Officials have the authority to disqualify swimmers if they observe any rule violations.",
  "Swimwear: Competitors must wear approved swimwear, which usually includes a swimsuit, cap, and goggles. Full-body suits and certain types of materials may be restricted. Swimwear should not provide any unfair advantage, such as buoyancy or drag reduction. Swimwear rules are set by governing bodies like FINA and enforced by competition officials.",
  "Officials: Swimming competitions are overseen by a team of officials, including referees, starters, stroke judges, turn judges, and timers. These officials ensure that swimmers adhere to the rules, maintain a fair competition, and record accurate times. They also have the authority to disqualify swimmers for rule violations or other issues that may arise during the competition.",
]);

const audioModules = import.meta.globEager("../assets/*.mp3");
const videoModules = import.meta.globEager("../assets/*.mp4");

const images = ref([]);

const showStjepanDialog = ref(null);
const openStjepanImgDialog = () => {
  showStjepanDialog.value = true;
};

const showMarkoDialog = ref(null);
const openMarkoImgDialog = () => {
  showMarkoDialog.value = true;
};

const imageModules = import.meta.globEager(
  "../assets/swim*.@(jpg|jpeg|png|gif|tif|bmp)"
);
Object.keys(imageModules).forEach((key) => {
  images.value.push(imageModules[key].default);
});

const showRules = ref(false);

const selectedImage = ref(null);
const showDialog = ref(false);

const openDialog = (image) => {
  selectedImage.value = image;
  showDialog.value = true;
};

const stjepanAudio = ref(null);

let stjepanAudioSrc;
Object.keys(audioModules).forEach((key) => {
  if (key.includes("plivanje-stjepan-audio.mp3")) {
    stjepanAudioSrc = audioModules[key].default;
  }
});

onMounted(() => {
  stjepanAudio.value = new Audio(stjepanAudioSrc);
});

const playStjepanAudio = () => {
  stjepanAudio.value.play();
};

let wrVideoSrc, video1Src, video3Src;

Object.keys(videoModules).forEach((key) => {
  if (key.includes("wr.mp4")) {
    wrVideoSrc = videoModules[key].default;
  } else if (key.includes("video1.mp4")) {
    video1Src = videoModules[key].default;
  } else if (key.includes("video3.mp4")) {
    video3Src = videoModules[key].default;
  }
});

const wrVideoUrl = ref(wrVideoSrc);
const video1Url = ref(video1Src);
const video3Url = ref(video3Src);


</script>

<template>
  <div class="main_container flex flex-col">
    <div class="flex divider">
      <h1 class="white">Swimming</h1>
    </div>
    <el-carousel :interval="2500" type="card" height="513px">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img @click="() => openDialog(image)" width="768" height="513" :src="image" />
      </el-carousel-item>
    </el-carousel>
    <div class="divider"></div>
    <div class="flex flex-row justify-between">
      <div class="hover-pointer">
        <VideoPlayer :videoUrl="wrVideoUrl" />
        <div style="margin: 24px 0 0 0" class="text-center">
          David Popovici WR
        </div>
      </div>
      <div class="hover-pointer">
        <VideoPlayer :videoUrl="video1Url" />
        <div style="margin: 24px 0 0 0" class="text-center">Sample video 1</div>
      </div>
      <div class="hover-pointer">
        <VideoPlayer :videoUrl="video3Url" />
        <div style="margin: 24px 0 0 0" class="text-center">Sample video 2</div>
      </div>
    </div>
    <div class="rule-divider"></div>
    <el-card shadow="hover" style="background-color: var(--primary-color-400)" class="flex flex-col divider">
      <div class="center-content">
        <el-tag size="large" rounded class="hover-pointer" @click="showRules = !showRules">Rules</el-tag>
      </div>
      <div v-if="showRules" v-for="rule in rules">
        <p class="rule-divider">{{ rule }}</p>
      </div>
    </el-card>
  </div>
  <div class="rule-divider"></div>
  <div class="flex flex-row mx-auto justify-between w-75">
    <div class="flex flex-col">
      <img @click="() => openStjepanImgDialog()" width="320" height="213" src="../assets/stjepan-compressed.jpg"
        class="hover-pointer" />
      <el-popover placement="right" :width="500" trigger="click">
        <template #reference>
          <h2 class="text-center hover-pointer hover-highlight-underline">
            Stjepan Milardić
          </h2>
        </template>
        <el-descriptions title="Basic Info" :column="1" border>
          <el-descriptions-item label="Place of birth" label-align="right" align="center" label-class-name="my-label"
            class-name="my-content" width="150px">Vinkovci</el-descriptions-item>
          <el-descriptions-item label="Place of residence" label-align="right"
            align="center">Osijek</el-descriptions-item>
          <el-descriptions-item label="Elementary school" label-align="right" align="center"><el-link
              href="http://os-stari-jankovci.skole.hr/">OŠ Stari Jankovci</el-link></el-descriptions-item>
          <el-descriptions-item label="High school" label-align="right" align="center"><el-link
              href="http://ss-tehnicka-ntesla-vu.skole.hr/">
              TSNT Vukovar</el-link>
          </el-descriptions-item>
          <el-descriptions-item label="College" label-align="right" align="center"><el-link
              href="https://www.ferit.unios.hr/">FERIT Osijek</el-link></el-descriptions-item>
        </el-descriptions>
        <div style="margin: 16px 0 0 0" class="w-100 text-center">
          <el-link @click="playStjepanAudio">
            🔉 Bavim li se ja ovim sportom, ili ga samo volim?</el-link>
        </div>
      </el-popover>
      <router-link to="/stjepan_prvi" class="center-content">Stjepanov prvi izbor - Kosarka</router-link>
      <router-link to="/stjepan_drugi" class="center-content">Stjepanov drugi izbor - Biciklizam</router-link>
    </div>

    <div class="flex flex-col">
      <img @click="() => openMarkoImgDialog()" width="320" height="213" src="../assets/marko-compressed.jpg"
        class="hover-pointer" />
      <el-popover placement="right" :width="500" trigger="click">
        <template #reference>
          <h2 class="text-center hover-pointer hover-highlight-underline">
            Marko Milanović
          </h2>
        </template>
        <el-descriptions title="Basic Info" :column="1" border>
          <el-descriptions-item label="Place of birth" label-align="right" align="center" label-class-name="my-label"
            class-name="my-content" width="150px">Osijek</el-descriptions-item>
          <el-descriptions-item label="Place of residence" label-align="right"
            align="center">Osijek</el-descriptions-item>
          <el-descriptions-item label="Elementary school" label-align="right" align="center"><el-link
              href="http://os-fkrezme-os.skole.hr/">OŠ Franjo Krežma</el-link></el-descriptions-item>
          <el-descriptions-item label="High school" label-align="right" align="center"><el-link
              href="http://gimnazija-treca-os.skole.hr/">
              III. gimnazija Osijek</el-link>
          </el-descriptions-item>
          <el-descriptions-item label="College" label-align="right" align="center"><el-link
              href="https://www.ferit.unios.hr/">FERIT Osijek</el-link></el-descriptions-item>
        </el-descriptions>
        <div style="margin: 16px 0 0 0" class="w-100 text-center">
          <el-link @click="playStjepanAudio">
            🔉 Bavim li se ja ovim sportom, ili ga samo volim?</el-link>
        </div>
      </el-popover>
      <router-link to="/marko" class="center-content">Markov drugi izbor</router-link>
    </div>
  </div>

  <el-dialog :model-value="showDialog" @update:model-value="showDialog = $event" width="80%" center>
    <img v-if="selectedImage" :src="selectedImage" style="width: 100%" alt="Selected image" />
  </el-dialog>
  <el-dialog :model-value="showStjepanDialog" @update:model-value="showStjepanDialog = $event" width="80%" center>
    <p>Stjepan Milardic</p>
    <img src="../assets/stjepan.jpg" alt="" />
  </el-dialog>
  <el-dialog :model-value="showMarkoDialog" @update:model-value="showMarkoDialog = $event" width="80%" center>
    <p>Marko Milanovic</p>
    <img src="../assets/marko.jpg" alt="" />
  </el-dialog>
</template>

<style scoped>
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.divider {
  margin: 60px 0 100px 0;
}

.rule-divider {
  margin: 20px 0 20px 0;
}

.el-card {
  --el-card-border-color: none;
}
</style>
