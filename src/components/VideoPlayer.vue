<template>
  <div class="video-player" :class="{ small: !isExpanded, expanded: isExpanded }" @click="toggleSize" ref="containerRef">
    <video ref="videoRef" @ended="videoEnded" @loadedmetadata="videoMetadataLoaded">
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button @click.stop="togglePlayback">
      {{ isPlaying ? "Pause" : "Play" }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, nextTick } from "vue";

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
const containerRef = ref(null);
const isPlaying = ref(false);
const isExpanded = ref(false);

const togglePlayback = () => {
  if (isPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const videoEnded = () => {
  isPlaying.value = false;
};

const videoMetadataLoaded = () => {
  videoRef.value.volume = 0.5; // Set default volume
};

const toggleSize = () => {
  isExpanded.value = !isExpanded.value;
  updateTransformOrigin();
};

const updateTransformOrigin = async () => {
  await nextTick();
  const containerRect = containerRef.value.getBoundingClientRect();
  const x = containerRect.left + containerRect.width / 2;
  const y = containerRect.top + containerRect.height / 2;
  containerRef.value.style.transformOrigin = `${x}px ${y}px`;
};

onMounted(updateTransformOrigin);
onUpdated(updateTransformOrigin);
</script>

<style scoped>
.video-player {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease;
  transform-origin: center center;
}

.video-player.small {
  width: 400px;
  height: 225px;
}

.video-player.expanded {
  position: fixed;
  top: 0;
  left: 0;
  width: 99vw;
  height: 100vh;
  z-index: 1000;
  border: 5px solid orangered;
  box-shadow: 10px 10px 10px black;
}

.video-player video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-player button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 1;
}

.video-player button:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
