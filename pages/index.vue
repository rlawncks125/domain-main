<template>
  <div>
    <h2>기본 페이지 애드센스 1</h2>
    <div class="ad-sense-wrap">
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
      <Adsense :width="12" :height="30" :ad-slot="5147197541" />
    </div>

    <div>
      <div>Post state: {{ resDataSuccess }}</div>
      <div>Get Data: {{ resData }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: resDataSuccess } = await useFetch("/api/test", {
  method: "post",
  body: { text: "Nuxt is Awesome! 아아ㅏ" },
});
const { data: resData } = await useFetch("/api/test");
</script>

<style scoped lang="scss">
.ad-sense-wrap {
  display: flex;
  gap: 4rem;

  & ins {
    border: 1px solid black;
  }
}
</style>
