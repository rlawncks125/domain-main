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

const items = [확장()];

function 확장(): CodeReutrnType {
  return {
    title: "확장 @extend",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// , 로 구분하는 다중 선택자로 만들어짐
// 부작용이 생길수 있어 권장하지 않으며 , Mixin을 대체 기능으로 권유

.btn {
    padding : 5px;
    margin : 2px;
    background-color : blue;
}

.btn-pramiary {
    @extend .btn;
    background-color : sky;
}

//결과 :

.btn , .btn-pramiary {
    padding : 5px;
    margin : 2px;
    background-color : blue;
}

.btn-pramiary {
    background-color : sky;
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
