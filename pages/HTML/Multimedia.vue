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
import { defineComponent, onMounted } from "vue";
import movBB from "@/assets/video/mov_bbb.mp4";

export default defineComponent({
  setup() {
    onMounted(() => {
      const canvas = document.getElementById("#canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 150, 100);
      }
    });

    const items = [video(), audio(), canvas(), object_embed(), Iframe()];

    return { items };
  },
});

const video = (): CodeReutrnType => ({
  title: "video",
  html: `<video width="320" height="240" controls >
  <source src="${movBB}" / >
</video>`.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<video>: 비디오 재생

<!-- 코드 -->
<video width="320" height="240" controls >
  <source src="../../assets/mov_bbb.mp4" type="video/mp4" / >
</video>
`,
    },
  ],
});

const audio = (): CodeReutrnType => ({
  title: "audio",
  code: [{ lang: CodeLanguages.xml, code: `<audio>: 오디오 재생` }],
});
const canvas = (): CodeReutrnType => ({
  title: "canvas",
  html: `<canvas id=#canvas />`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<canvas>: 스크립트를 통해 그래픽을 그리는 데 사용될 수 있다. 예를 들어, 그래프 그리기, 사진 합성, 애니메이션 제작, 실시간 비디오 처리, 렌더링에 쓰일 수 있다`,
    },
    {
      lang: CodeLanguages.typescript,
      code: `const canvas = document.getElementById("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 150, 100);
}`,
    },
  ],
});

const object_embed = (): CodeReutrnType => ({
  title: "외부 페이지 삽입",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<object>, <embed>: 웹 페이지 또는 외부 프로그램을 임베드한다.
HTML 4.01에서 <embed>가 삭제되고 <object>로 대체되었으나 <object> 태그의 사용법이 워낙 복잡하다는 문제점이 있어서 HTML 5 규격에서 다시 표준으로 들어갔다. <embed>의 경우 파이어폭스에서 웹 페이지를 첨부할 수 없는 문제가 있었다.`,
    },
  ],
});
const Iframe = (): CodeReutrnType => ({
  title: "Iframe",
  html: `<iframe width="500" height="285" src="https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<iframe> : inline frame의 줄임말이다. <iframe>은 문서 전체가 프레임인 게 아니라 문서 안에 박스형으로 프레임을 넣을 때 쓴다. 이 태그는 HTML5에서도 계속 지원된다. 물론 iframe도 남용하면 웹 접근성 저하되는 건 똑같다.

<!-- 코드 -->
<!-- 유투브 소스 코드 복사로 끌어옴 -->
<iframe
  width="500"
  height="285"
  src="https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>`,
    },
  ],
});
</script>

<style scoped></style>
