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

const items = [정의(), 사용(), content()];

function 정의(): CodeReutrnType {
  return {
    title: "정의",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `@mixin 믹스인 이름;
@mixin 믹스인 이름($매개변수);
@mixin 믹스인 이름($매개변수 : 기본값);
@mixin 믹스인 이름($매개변수 , $매개변수_가변인수...);

// 예
@mixin 믹스인 이름($fontSize , $color : red){
    font : {
        size : $fontSize;
        weight : bold;
        color : $color
    }

     &::after{
        content : '';
        display:block;
        width : 100vw;
        border-bottom : 1px solid black;
    }
    @content();
};
`,
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
        code: `@include 믹스인 이름;
@include 믹스인 이름(인수);
// 변수 키워드 할당
@include 믹스인 이름($매개변수 : 인수);

// 예
@include 믹스인 이름(12px);
`,
      },
    ],
  };
}
function content(): CodeReutrnType {
  return {
    title: "@content",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `@content : Minxin @content 부분에 원하는 블록 전달

@mixin 믹스인 이름 {
    font-size : 10px;
    @content
}

.box {
    display : none;

    @include 믹스인 이름 {
        //스타일...
        color : red;
    }
}

// 결과

.box {
    display : none;
    font-size : 10px;
    color : red;
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
