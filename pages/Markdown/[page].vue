<template>
  <!-- marked -->
  <!-- 설치 npm install --save marked -->
  <!-- @types 설치 npm install --save @types/marked-->

  <!-- github-markdown-css -->
  <!-- https://github.com/sindresorhus/github-markdown-css -->
  <!-- 참고 사이트 : https://sukvvon.tistory.com/74 -->
  <div class="markdown-body">
    <div v-if="markDownHtml" v-html="markDownHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { marked } from "marked";

const { page } = useRoute().params;
console.log(page);

const markDownHtml = useState("mark-down-html");

marked.setOptions({
  // renderer: new marked.Renderer(),
  // gfm: true,
  headerIds: false,
  // breaks: true,
  // pedantic: false,
  // sanitize: true,
  // smartLists: true,
  // smartypants: false,
});

onMounted(async () => {
  const data = await fetch(
    `https://raw.githubusercontent.com/rlawncks125/markdown/main/${page}.md`
  );
  if (data.ok) {
    const text = await data.text();
    console.log(text);
    markDownHtml.value = marked(text);
  }
});
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.0.0/github-markdown-light.min.css";

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;
  // @include mobile() {
  //   padding: 8px;
  // }
  ul {
    padding-left: 1rem;
  }
  blockquote {
    line-height: 0.2rem;
  }

  @apply sm:p-[8px];
}

ul {
  list-style-type: disc;

  ul {
    list-style-type: circle;
  }

  ul ul {
    list-style-type: square;
  }
}
</style>
