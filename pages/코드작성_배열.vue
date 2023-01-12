<template>
  <!-- 구조  -->
  <div>
    <template v-for="(item, index) in items" :key="index">
      <h1>{{ item.title }}</h1>
      <div class="bg-graident-animation">HTML EL</div>
      <div class="my-[.5rem]" v-for="(code, kindex) in item.code" :key="kindex">
        <LazyCodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const items = [미디어()];

function 미디어(): CodeReutrnType {
  return {
    title: "미디어",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `all : 모든 장치
print : 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서
screen : 주로 화면이 새당
speech : 음성 합성장치 대상`,
      },
    ],
  };
}
</script>

<style scoped></style>
