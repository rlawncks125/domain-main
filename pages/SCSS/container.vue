<template>
  <p>아직 지원하는 브라우저 버전이 없음</p>
  <p>기능을 사용하고 싶으면 설정해야할것이 있음</p>

  <h1 :style="{ color: 'coral' }">설정</h1>
  <p>chrome://flags 주소창 입력하 설정 진입</p>
  <p>Enable CSS Container Queries 활성화</p>

  <h1>css 신기술 Container Query</h1>
  <section>
    <p>media 쿼리와 다른점 :</p>
    <p>media 쿼리는 viewport(브라우저) 넓이 기준</p>
    <p>container 쿼리는 요소(컴포넌트) 넓이 기준</p>
  </section>

  <br />

  <!-- dddd -->

  <div class="container-box">
    <p>text1</p>
    <p class="custom">text2</p>
  </div>

  <div
    style="margin: 0.5rem 0"
    v-for="(code, index) in container1"
    :key="index"
  >
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>
</template>

<script setup lang="ts">
import { CodeReutrnType, CodeLanguages } from "@/plugins/simple-code-editor";

const container1: {
  code: string;
  lang: CodeLanguages;
}[] = [
  {
    code: `
<div class="container-box">
  <p>text1</p>
  <p class="custom">text2</p>
</div>
    `,
    lang: CodeLanguages.xml,
  },
  {
    code: `
.container-box {
  height: 200px;
  border: 1px solid black;
  resize: both;
  overflow: scroll;
  container-type: inline-size;
  container-name: other-conatiner-name;
}

@container (min-width : 100px) {
  .container-box::before {
    content: "100px 이상";
  }

  p {
    color: red;
  }
}

@container (min-width : 200px) {
  .container-box::before {
    content: "200px 이상";
  }

  p {
    color: blue;
  }
}
@container (min-width : 300px) {
  .container-box::before {
    content: "300px 이상";
  }

  p {
    color: green;
  }
}

// container-name을 지정하여 특정 컨네이터에 값만 할당
@container other-conatiner-name (min-width : 300px) {
  .custom {
    color: coral;
  }
}
    `,
    lang: CodeLanguages.css,
  },
];
</script>

<style lang="scss" scoped>
.container-box {
  height: 200px;
  border: 1px solid black;
  resize: both;
  overflow: scroll;
  container-type: inline-size;
  container-name: other-conatiner-name;
}

@container (min-width : 100px) {
  .container-box::before {
    content: "100px 이상";
  }

  p {
    color: red;
  }
}

@container (min-width : 200px) {
  .container-box::before {
    content: "200px 이상";
  }

  p {
    color: blue;
  }
}
@container (min-width : 300px) {
  .container-box::before {
    content: "300px 이상";
  }

  p {
    color: green;
  }
}

@container other-conatiner-name (min-width : 300px) {
  .custom {
    color: coral;
  }
}
</style>
