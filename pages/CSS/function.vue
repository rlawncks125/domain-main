<template>
  <!-- 구조  -->
  <div>
    <template v-for="(item, index) in items" :key="index">
      <h1>{{ item.title }}</h1>
      <div v-if="item.html" v-html="item.html"></div>
      <div class="my-[.5rem]" v-for="(code, kindex) in item.code" :key="kindex">
        <LazyCodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const items = [transform(), math(), filter(), color(), image(), 도형(), attr()];

function transform(): CodeReutrnType {
  return {
    title: "transform 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `matrix() : 2D 변환 행렬 정의 matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )

perspective() : 사이의 거리를 설정하는 변환을 구체화함

rotate() : 회전하는 변환을 정의

scale() : 크기를 조정하는 변환을 정의

skew() : 비스듬히 움직이는 변환을 정의

translate() : 수평/수직 으로 위치시킨다.`,
      },
    ],
  };
}
function math(): CodeReutrnType {
  return {
    title: "Math 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `calc() : 사직 계삭을 수행

max() : 제일 큰값 적용

min() : 제일 작은값 적용

abs() : 절대값으로 반환

sign() : 양수일경우 1 음수일경우 -1 , 0일경우 0을 반환`,
      },
    ],
  };
}
function filter(): CodeReutrnType {
  return {
    title: "Filter 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `blur() : 이미지에 흐림을 적용

brightness() : 이미지의 밝기를 적용

contrast() : 이미지의 대비를 조정

drop-shadow() : 이미지에 새도우 효과를 적용

grayscale() : 회색 이미지 정도를 적용

hue-rotate() : 색상의 내용을 회전 = 색바뀜

invert() : 색상을 반전 시킴

opacity() : 투명성을 적용

saturate() : 이미지를 과포화 시키거나 불포화시킴

sepia() : 노란/갈색 으로 보이게 하는 정도`,
      },
    ],
  };
}
function color(): CodeReutrnType {
  return {
    title: "Color 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `hsl[a]() : H = 색상(r=0deg=360deg,b=240deg,g=120deg) , S = 포화도 , L = 백분율 , A = 투명성

rgb[a]() : r = red , g = green , b = blue , a = 투명성
`,
      },
    ],
  };
}

function image(): CodeReutrnType {
  return {
    title: "image 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `conic-gradient() : 중앙점 기준으로 색전환이 회전하는 그라데이션

linear-gradient() : 직선을 따라 둘 이상의 색상 사이에서 점진적인 전환으로 구성된 이미지

radial-gradient() : 원점에서 방사되어 원또는 타원일수있다. 두개 이상의 생상 사이의 점진적인 전환으로 구성된 이미지

repeating-linear-gradient() : 반복적인 선형 그라데이션

repeating-radial-gradient() : 원점에서 방사되어 반복적인 그라데이션

repeating-conic-gradient() : 중심점을 중심으로 반복적으로 회전하는 그라데이션
`,
      },
    ],
  };
}

function 도형(): CodeReutrnType {
  return {
    title: "도형 함수",
    code: [
      {
        lang: CodeLanguages.css,
        code: `// 잘안쓸거같음
circle()
ellipse()
inset()
polygon()
`,
      },
    ],
  };
}
function attr(): CodeReutrnType {
  return {
    title: "도형 함수",
    html: `<span class="attr-1" data-cnt="5">test</span>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<span class="attr-1" data-cnt="5">test</span>`,
      },
      {
        lang: CodeLanguages.scss,
        code: `.attr-1 {
  position: relative;
  border: 1px solid black;
  padding: 0 1rem;

  &::after {
    content: attr(data-cnt);
    position: absolute;
    top: -0.75em;
    right: -0.75em;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: red;
    color: white;
  }
}
`,
      },
    ],
  };
}
</script>

<style lang="scss">
.attr-1 {
  position: relative;
  border: 1px solid black;
  padding: 0 1rem;

  &::after {
    content: attr(data-cnt);
    position: absolute;
    top: -0.75em;
    right: -0.75em;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: red;
    color: white;
  }
}
</style>
