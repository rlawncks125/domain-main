<template>
  <p>구글 검색 : '요소' animation [css]</p>
  <div>
    <a
      target="_blank"
      href="https://www.sliderrevolution.com/resources/css-border-animation/"
      >border 애니메이션 모음 사이트</a
    >
  </div>
  <div>
    <a href="https://dev.to/webdeasy/top-20-css-buttons-animations-f41"
      >버튼 애니메이션 모음 사이트</a
    >
  </div>

  <!-- 백그라인드_그라데이션 -->
  <div>
    <h1>{{ backGroundCode.title }}</h1>
    <div class="bg-graident-animation">bg graident animation</div>
    <div
      class="my-[.5rem]"
      v-for="(code, index) in backGroundCode.code"
      :key="index"
    >
      <LazyCodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </div>

  <!-- 클릭시 애니메이션 호출 -->
  <div>
    <h1>{{ clickCallAniCode.title }}</h1>
    <div ref="clickCallEl" class="click-animation">클릭</div>
    <div
      class="my-[.5rem]"
      v-for="(code, index) in clickCallAniCode.code"
      :key="index"
    >
      <LazyCodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const backGroundCode = 백그라인드_그라데이션();
const clickCallAniCode = clickCallAnimation();

// 클릭시 애니메이션 호출
const clickCallEl = ref<HTMLElement>();

onMounted(() => {
  if (!clickCallEl.value) return;

  clickCallEl.value.addEventListener("click", () => {
    // 애니메이션 실행
    clickCallEl.value?.animate(
      {
        backgroundColor: ["white", "#5252f1db", "red"],
      },
      1000
    );
  });
});

function 백그라인드_그라데이션(): CodeReutrnType {
  return {
    title: "백그라운드 그라데이션 애니메이션",
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<div class="bg-graident-animation" > bg graident animation </div>`,
      },
      {
        lang: CodeLanguages.scss,
        code: `
.bg-graident-animation {
  background : linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size : 400% 400%;
  animation : graident-animation 10s ease infinite;

  width : 400px;
  height : 400px;
}

@keyframes graident-animation {
  0% {
    background-position : 0% 50%;
  }
  50% {
    background-position : 100% 50%;
  }
  100% {
    background-position : 0% 50%;
  }
}
        `,
      },
    ],
  };
}

function clickCallAnimation(): CodeReutrnType {
  return {
    title: "클릭시 애니메이션 호출",
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<div class="click-animation" > 클릭 </div>`,
      },
      {
        lang: CodeLanguages.css,
        code: `
.click-animation {
  border : 1px solid black;
  width : 100px;
  height : 100px;
}
        `,
      },
      {
        lang: CodeLanguages.javascript,
        code: `
const clickAni = document.querySelector(".click-animation");

if (!clickAni) return;

clickAni?.addEventListener("click", () => {
// 애니메이션 실행
  clickAni.animate(
    {
      backgroundColor: ["white", "#5252f1db","red"],
    },
    1000 
  );
});`,
      },
    ],
  };
}
</script>

<style scoped>
.bg-graident-animation {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: graident-animation 10s ease infinite;

  width: 400px;
  height: 400px;
}

@keyframes graident-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.click-animation {
  border: 1px solid black;
  width: 100px;
  height: 100px;
}
</style>
