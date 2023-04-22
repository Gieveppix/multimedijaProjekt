<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <el-container class="layout">
    <Header />

    <div>
      <el-main>
        <div class="wrapper">
          <RouterView />
        </div>
      </el-main>
    </div>

    <Footer />
  </el-container>
</template>

<style scoped>
.layout {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}
</style>
