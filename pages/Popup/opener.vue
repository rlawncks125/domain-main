<template>
  <div>opener popup</div>
  <input
    type="text"
    name=""
    id=""
    v-model="txt"
    placeholder="보낼 데이터를 입력하세요"
  />
  <button @click="colsePopup">팝업 활성화한 창에 데이터 주고 닫기</button>
  <button @click="postMsg">postMessage</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const txt = ref();

const colsePopup = () => {
  // open한 창에서 self 접근과 같은값
  console.log(window.opener);
  console.log(document.domain);
  try {
    window.opener.HandlePopupMsg({
      type: "testPopup",
      data: txt.value,
    });
  } catch (e) {
    console.log(e);
  }

  window.close();
};

const postMsg = () => {
  window.opener.postMessage(
    {
      type: "testPopup",
      data: txt.value,
    },
    "*"
  );
  window.close();
};
</script>

<style scoped lang="scss">
input,
button {
  @apply border rounded-md border-black p-1 my-1;
}
</style>
