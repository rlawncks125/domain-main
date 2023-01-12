<template>
  <!-- 구조  -->
  <div>
    <template v-for="(item, index) in items" :key="index">
      <h1 class="text-[1.5rem]">{{ item.title }}</h1>
      <div class="my-[.5rem]" v-for="(code, kindex) in item.code" :key="kindex">
        <LazyCodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const items = [미디어(), 내가쓰는구조(), Mixins(), include()];

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

function 내가쓰는구조(): CodeReutrnType {
  return {
    title: "내가 쓰는 영역 구조",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `@media (max-width: 400px) {
    content: "mobile";
    color: red;
}

@media (min-width: 400px) {
    content: "doublephon";
    color: goldenrod;
}

@media (min-width: 700px) {
    content: "table";
    color: green;
}`,
      },
    ],
  };
}

function Mixins(): CodeReutrnType {
  return {
    title: "Mixins을 사용한 미디어쿼리",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `$screen: (
    xs: 475px,
    sm: 640px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    xxl: 1536px,
);

@mixin xs {
    @media (min-width: 0) and (max-width: map-get($screen,xs)) {
        @content();
    }
}
@mixin sm {
    @media (min-width: calc(map-get($screen,xs) + 1px)) and (max-width: map-get($screen,sm)) {
        @content();
    }
}
@mixin md {
    @media (min-width: calc(map-get($screen,sm) + 1px)) and (max-width: map-get($screen,md)) {
        @content();
    }
}
@mixin lg {
    @media (min-width: calc(map-get($screen,md) + 1px)) and (max-width: map-get($screen,lg)) {
        @content();
    }
}
@mixin xl {
    @media (min-width: calc(map-get($screen,lg) + 1px)) and (max-width: map-get($screen,xl)) {
        @content();
    }
}
@mixin xxl {
    @media (min-width: calc(map-get($screen,xl) + 1px)) {
        @content();
    }
}`,
      },
    ],
  };
}

function include(): CodeReutrnType {
  return {
    title: "Mixins 사용 = include()",
    code: [
      {
        lang: CodeLanguages.css,
        code: `@include 믹스인 이름;
@include 믹스인 이름(인수);
// 변수 키워드 할당
@include 믹스인 이름($매개변수 : 인수);

// ex)
.box {
    display : none;
    @icnlude md(){
        display: "block";
    }
}
`,
      },
    ],
  };
}
</script>

<style></style>
