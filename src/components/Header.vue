<script setup>
// import { reactive, toRefs } from "vue";
const fit = "contain";
const url = "https://cdn-icons-png.flaticon.com/512/2972/2972134.png";
</script>

<template>
  <el-header height="200px" class="header flex justify-between align-center">
    <div class="wrapper">
      <div class="flex justify-between align-center">
        <el-space size="small" class="pointer">
          <router-link style="text-decoration: none" to="/" class="white ml-2"
            >Multimedia Technique</router-link
          >
        </el-space>
        <div>
          <el-dropdown trigger="click" class="pointer avatar-padding">
            <el-avatar shape="square" :size="40">
              <el-avatar shape="square" :size="100" :fit="fit" :src="url" />
            </el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <router-link to="/stjepan">
                  <el-dropdown-item> Stjepanov drugi izbor </el-dropdown-item>
                </router-link>
                <router-link to="/marko">
                  <el-dropdown-item> Markov drugi izbor </el-dropdown-item>
                </router-link>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-header>
</template>

<style scoped>
.header {
  background-color: var(--primary-color-700);
  height: unset;
  padding: 1rem;
}

.pointer {
  cursor: pointer;
}

.avatar-padding {
  padding: 2px;
  border-radius: 10%;
}

.avatar-padding:hover {
  background-color: var(--primary-color-300);
}

.searchbox {
  width: fit-content;
  padding: 2px;
}

.badge-position-fix {
  position: relative;
  top: 0.25rem;
}
</style>
