<template>
  <div class="py-4">
    <h2>기본 페이지 애드센스 1</h2>
    <div class="ad-sense-wrap">
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ad-sense-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  & ins {
    border: 1px solid black;
  }
}
</style>
