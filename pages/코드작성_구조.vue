<template>
  <!-- 구조  -->
  <div>
    <h1>{{ codeWrap.title }}</h1>
    <div class="bg-graident-animation">HTML EL</div>
    <div class="my-[.5rem]" v-for="(code, index) in codeWrap.code" :key="index">
      <LazyCodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const codeWrap = 코드();

function 코드(): CodeReutrnType {
  return {
    title: "",
    code: [
      {
        lang: CodeLanguages.xml,
        code: ``,
      },
      {
        lang: CodeLanguages.scss,
        code: ``,
      },
    ],
  };
}
</script>

<style scoped></style>
