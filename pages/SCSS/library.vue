<template>
  <!-- 구조  -->
  <div>
    <template v-for="(item, index) in items" :key="index">
      <h1>{{ item.title }}</h1>
      <div class="my-[.5rem]" v-for="(code, kindex) in item.code" :key="kindex">
        <LazyCodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const items = [callImport(), callUse(), use장점()];

function callImport(): CodeReutrnType {
  return {
    title: "@import",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `확장자 : @import "color.css";
http로시작 : @import "http://color.com/red";
url사용 : @import url(color) screen;
미디어쿼리 있을시 : @import "color" screen;
여러 파일 가죠오기 : @import "header , footer";`,
      },
    ],
  };
}
function callUse(): CodeReutrnType {
  return {
    title: "@use",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// 기본
@use "size";
// 별칭
@use "color" as c ;
// 내장함수 모듈가져오기
@use "sass:math";

box {
    font-size : size.$basic-size; // 기본 사용
    color : c.$color-primary; // 별칭 사용
    font-size : math.round(12.2px); // 내장함수 사용
}`,
      },
    ],
  };
}
function use장점(): CodeReutrnType {
  return {
    title: "@use 장점",
    code: [
      {
        lang: CodeLanguages.vim,
        code: `- @import를 사용시 모듈마다 변수와 함수 , 전역 namespace 등이 존재하기떄문에 다른 모듈과 중첩되는 상황이 발생함
- @use를 사용시 별도의 namespace를 가지고 있어 모듈마다 독립적으로 사용가능하다
- @use를 사용시 Praivate Member를 사용할수있다`,
      },
    ],
  };
}
</script>

<style scoped></style>
