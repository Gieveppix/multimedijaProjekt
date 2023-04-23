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
          <span class="white ml-2">Multimedia Technique</span>
        </el-space>
        <div>
          <el-dropdown trigger="click" class="pointer avatar-padding">
            <el-avatar shape="square" :size="40">
              <el-avatar shape="square" :size="100" :fit="fit" :src="url" />
            </el-avatar>
            <!-- <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Management</el-dropdown-item>
                <el-dropdown-item> </el-dropdown-item>
                <el-dropdown-item divided
                  ><el-space size="small"
                    ><el-icon><SwitchButton /></el-icon></el-space
                  >Logout</el-dropdown-item
                >
              </el-dropdown-menu>
            </template> -->
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
