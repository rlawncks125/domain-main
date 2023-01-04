<template>
  <div>
    <h2 :style="{ fontWeight: 'bold' }">
      로컬에서만작동
      <p>Netlify 에선 파일 생성안되므로 작동 x</p>
    </h2>
    <div>Post state: {{ resDataSuccess }}</div>
    <div>Get Data: {{ resData }}</div>
  </div>
</template>

<script setup lang="ts">
const { data: resDataSuccess } = await useFetch("/api/nitroStorage", {
  method: "post",
  body: { text: "Nuxt is Awesome! 아아ㅏ" },
});
const { data: resData } = await useFetch("/api/nitroStorage");
</script>

<style scoped></style>
