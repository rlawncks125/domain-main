<template>
  <LazyCodeEditor
    :code="text그라데이션().code[0].code"
    :lang="text그라데이션().code[0].lang"
  />
  <div>test</div>
  {{ CodeLanguages.css }}
</template>

<script setup lang="ts">
import { CodeLanguages, codeReutrnType } from "@/plugins/simple-code-editor";

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
</script>

<style></style>
