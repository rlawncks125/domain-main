<template>
  <fieldset :style="{ border: '1px solid black', padding: '1rem' }">
    <legend>정규식 테스트</legend>
    <label for="text1">텍스트</label>
    <input
      type="text"
      id="text1"
      v-model="stateText"
      :style="{ width: '100%' }"
    /><br />
    <span>Flags</span>
    <select v-model="flagsRef">
      <option :value="item" v-for="(item, index) in regexpFlags" :key="index">
        {{ item }}
      </option>
    </select>
    <br />
    <label for="regexp">정규식 </label
    ><input
      type="text"
      id="regexp"
      placeholder="/ 정규식 작성후 Enter of 변환 버튼 클릭 /[flags]"
      @keydown="onKeydown"
      @input="
        (e:any) => {
          regexpStr = e.target.value;
        }
      "
      :style="{ width: '100%' }"
    />
    <br />
    <button @click.prevent="testBtn">변환 버튼</button> <br />
    <label>결과 : </label>
    <span class="regexpRender"></span>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

enum EkeyCode {
  Enter = 13,
}

export default defineComponent({
  setup() {
    const regexpStr = ref("");
    const regexpResult = ref("");
    const stateText = ref("");
    let innerDom = ref<HTMLElement>();
    const flagsRef = ref();
    const regexpFlags = ["i", "g", "ig"];

    // i : 대·소문자 구분 없이 검색 , ignoreCase
    // g : 일치하는 모든 문자 검색 , global
    // m : 여러 줄에 걸쳐 탐색 , multiline
    // s : .이 줄 바꿈에 일치하는지 , dotAll
    // u : Unicode 기능의 활성화 , unicode
    // y : 문자 내 특정 위치에서 검색을 진행하는 ‘sticky’ 모드를 활성화 , sticky

    onMounted(() => {
      innerDom.value = document.querySelector(".regexpRender")! as HTMLElement;
    });

    const testBtn = () => {
      if (!regexpStr.value) {
        innerDom.value!.innerHTML = "";
        return;
      }
      console.log(regexpStr.value);
      const reg = new RegExp(regexpStr.value, flagsRef.value);
      regexpResult.value = stateText.value.replace(reg, "●");

      innerDom.value!.innerHTML = regexpResult.value;
    };

    const onKeydown = (e: any) => {
      if (e.keyCode === EkeyCode.Enter) {
        testBtn();
      }
    };

    return { regexpStr, stateText, testBtn, onKeydown, regexpFlags, flagsRef };
  },
});
</script>

<style>
select,
button {
  @apply border border-black my-1;
}
</style>
