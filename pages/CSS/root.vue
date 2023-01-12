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

const items = [변수선언(), 변수사용(), root()];

function 변수선언(): CodeReutrnType {
  return {
    title: "변수 선언",
    code: [
      {
        lang: CodeLanguages.css,
        code: `// 문서의 루트 요소 선택 = HTML에서는 <html>
// 전역 변수 전언

:root {
    변수 : 값
    --main-color : hotpink;
}`,
      },
    ],
  };
}
function 변수사용(): CodeReutrnType {
  return {
    title: "변수 사용",
    code: [
      {
        lang: CodeLanguages.css,
        code: `// var(변수,유효하지 않을시 대체값)
.root-span {
    color: var(--main-color);
    // 변수가 유효하지않을떄 2번째 값으로대체
    color: var(--main-color,red);
}`,
      },
    ],
  };
}
function root(): CodeReutrnType {
  return {
    title: "Root 접근",
    code: [
      {
        lang: CodeLanguages.javascript,
        code: `// root값 get
// :root값 접근 해서 값얻을수있다
const rootVar = getComputedStyle(document.documentElement).getPropertyValue("접근할변수");

// :root 접근x set값을 주면 변수접근가능
const setVar = document.documentElement.style.getPropertyValue("접근할변수");


// 변수값 set
// 최상위 html의 변수값 지정
document.documentElement.style.setProperty("변수", "값");`,
      },
    ],
  };
}
</script>

<style scoped></style>
