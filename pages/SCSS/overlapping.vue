<template>
  <!-- 구조  -->
  <div>
    <template v-for="(item, index) in items" :key="index">
      <h1>{{ item.title }}</h1>
      <div class="bg-graident-animation">HTML EL</div>
      <div class="my-[.5rem]" v-for="(code, kindex) in item.code" :key="kindex">
        <LazyCodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CodeLanguages, CodeReutrnType } from "~~/plugins/simple-code-editor";

const items = [구조(), at_root(), 중첩속성()];

function 구조(): CodeReutrnType {
  return {
    title: "구조",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `.btn {
    &.active {
        color : blue;
    }
    &:hover {
        color : yellow;
    }
    & p {
        font-size : 12px;
    }
}`,
      },
    ],
  };
}
function at_root(): CodeReutrnType {
  return {
    title: "@at-root",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// : 중첩 벗어나기

.btn {
    &f-s : 10px;
        span {
            font-size : $f-s;
        }
    @at-root body{
        font-size : $f-s;
    }
}`,
      },
    ],
  };
}

function 중첩속성(): CodeReutrnType {
  return {
    title: "중첩된 속성",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// 중첩된 속성 : 같은 네임 스페이스 속성들을 중첩으로 사용

.box {
    font: {
        weight : bold;
        size : 5px;
    }
    margin: {
        top : 5px;
        left : 5px;
    }
    padding: {
        top : 5px;
        bottom : 10px;
    }
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
