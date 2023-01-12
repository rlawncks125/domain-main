<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div
        style="margin: 0.5rem 0"
        v-for="(code, index) in item.code"
        :key="index"
      >
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { CodeLanguages, CodeReutrnType } from "@/plugins/simple-code-editor";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const items = [text그라데이션(), textThreeDot()];

    return { items };
  },
});

const text그라데이션 = () => {
  return {
    title: "TEXT 그라데이션",
    html: `<p class="text-gradient">gradient Font Test </p>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: ` <p class="text-gradient">gradient Font Test </p>`,
      },
      {
        lang: CodeLanguages.css,
        code: `
.text-gradient {
  background: linear-gradient(
    118deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(205, 29, 142, 1) 20%,
    rgba(7, 110, 144, 1) 45%,
    rgba(75, 105, 187, 1) 69%,
    rgba(73, 108, 189, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  color: transparent;
  font-size: 2rem;
}
        `,
      },
    ],
  };
};

const textThreeDot = (): CodeReutrnType => {
  return {
    title: "문자 길이 초과시 ...",
    html: `<p class="text-three-dot" style="width:220px; border:1px solid black">길이가 긴 텍스트 입니다.ㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>`,
    code: [
      {
        code: `<p class="text-three-dot" style="width:220px; border:1px solid black">길이가 긴 텍스트 입니다.ㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>`,
        lang: CodeLanguages.xml,
      },
      {
        code: `.text-three-dot {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
        lang: CodeLanguages.scss,
      },
    ],
  };
};
</script>

<style lang="scss">
.text-gradient {
  // bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-700 to-indigo-600 text-3xl

  background: linear-gradient(
    118deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(205, 29, 142, 1) 20%,
    rgba(7, 110, 144, 1) 45%,
    rgba(75, 105, 187, 1) 69%,
    rgba(73, 108, 189, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  color: transparent;
  font-size: 2rem;
}
.text-three-dot {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
