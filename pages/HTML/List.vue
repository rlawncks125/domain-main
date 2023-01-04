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
import { CodeReutrnType, CodeLanguages } from "@/plugins/simple-code-editor";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const items = [ul(), ol(), li(), dl(), dt(), dd()];
    return { items };
  },
});

const ul = (): CodeReutrnType => ({
  title: "ul",
  html: `
  <ul>
    <dl>정의 목록 dl
      <dt>정의 기술 dt</dt>
      <dd>뜻 풀이 dd</dd>
    </dl>
    <li>li1</li>
    <li>li2</li>
  </ul>
  `.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<ul>: 순서 없는 목록(unordered list)을 표시한다.`,
    },
  ],
});
const ol = (): CodeReutrnType => ({
  title: "ol",
  html: `
  <ol>
    <li>li1</li>
    <li>li2</li>
  </ol>
  `.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<ol>: 순서 있는 목록(ordered list)을 표시한다.( 기능은 ul와 차이없고 비주얼적인 태그)`,
    },
  ],
});
const li = (): CodeReutrnType => ({
  title: "li",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<li>: 목록에서 각 항목(list item)은 <li>와 </li>사이에 넣는다.`,
    },
  ],
});
const dl = (): CodeReutrnType => ({
  title: "dl",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<dl>: 정의 목록(definition list)을 표시한다.`,
    },
  ],
});
const dt = (): CodeReutrnType => ({
  title: "dt",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<dt>: 정의 목록의 정의(definition term)를 기술한다.`,
    },
  ],
});
const dd = (): CodeReutrnType => ({
  title: "dd",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<dd>: 정의 목록의 뜻풀이(definition description)를 기술한다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.`,
    },
  ],
});
</script>

<style scoped></style>
