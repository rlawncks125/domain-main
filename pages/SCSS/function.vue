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

const items = [선언(), 사용(), Example()];

function 선언(): CodeReutrnType {
  return {
    title: "선언",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// @return 지시어를 통해 값을 반환
        
@function 함수이름($매개변수){
    @return 값
}`,
      },
    ],
  };
}
function 사용(): CodeReutrnType {
  return {
    title: "사용",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `함수이름(인수)`,
      },
    ],
  };
}
function Example(): CodeReutrnType {
  return {
    title: "Example",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `$max-width : 1280px;

// 선언
@function division-row($number:1 , $rows : 12){
    @return $max-width * ($number / $rows);
}

.box1 {
// 사용
    width : division-row(2);
}
.box2 {
// 사용
    width : division-row(4);
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
