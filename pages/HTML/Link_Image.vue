<template>
  <div>
    <template v-for="(item, index) in items" :key="index">
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
    const items = [a(), img(), SVG(), progress()];
    return { items };
  },
});

const a = (): CodeReutrnType => ({
  title: "a",
  html: `<a href="https://blog.naver.com/rlawncks125" target="_blank"
        >네이버블로그 새창 열기</a
      >`.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<a>: 하이퍼링크를 생성하는 태그이다. href 속성을 써서 <a href="링크할 페이지">내용</a>와 같이 작성한다. 페이지 내의 책갈피를 위한 속성으로 name이 있었으나, id로 대체 가능하여 HTML5에서는 폐기되었다.
  
속성 : 
  target : 링크를 클릭할때 창이 열릴 위치
    - _self : 현재 창에서 열음 (기본값)
    - _blank : 새로운 창이나 탭(tab) 으로 열음
    - _parent : 현재 프레임의 부모 프레임에서 오픈
    - _top : 현재 윈도우 전체에서 오픈
    - 프레임 이름 : 명시된 프레임에서 오픈 이름
  title : 마우스커서 올릴때 도움말 설명`,
    },
  ],
});

const img = (): CodeReutrnType => ({
  title: "img",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<img> : 페이지에 이미지를 추가하는 태그이다.
속성 :

  src : 경로 지정
    - 절대 경로 : http:// 또는 https
    - 상대 경로 : path/to/image/file
    - 데이터값 으로 지정 : data:image/jpeg|png|gif;base64, A1bC2dE3fG...
  alt : 이미지를 볼 수 없는 경우에 이미지에 대한 설명을 제공한다. 이 속성값이 없어도 이미지파일의 경로가 유효하다면 표시되기는 하지만 웹표준 검사기에서 걸린다.

  title : 이미지에 대한 추가 정보를 제공한다. 세피로트 이미지에 마우스를 갖다대면 말풍선으로 뜨는 것을 확인할 수 있다

  height , width : 이미지의 세로, 가로폭을 지정한다. HTML 4.01까지는 그냥 숫자만 쓰면 픽셀로, 뒤에 %를 붙이면 백분율로 지정할 수 있었으나, HTML5에서는 픽셀로만 지정할 수 있게 되었으므로 백분율로 지정하려면 CSS를 이용해야 한다.
  `,
    },
  ],
});

const SVG = (): CodeReutrnType => ({
  title: "SVG",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<svg>: 페이지에 SVG 형식의 그래픽을 추가하는 태그이다. SVG 파일은 위의 <img> 태그로 넣어도 되지만 SVG 파일이 XML 형식으로 만들어져 있기에 별도의 SVG 파일을 만들지 않고 직접 코딩해서 넣는 것도 가능하다. 이 때 <svg> 태그를 사용한다.`,
    },
  ],
});

const progress = (): CodeReutrnType => ({
  title: "progress",
  html: `
  <progress></progress><br />
  <progress value="40" max="100"></progress>
  `.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<progress>: 페이지에 진행 상황 막대를 추가하는 태그이다. 예를 들어 <progress value="22" max="100"></progress>와 같이 쓸 경우 22% 진행된 막대가 표시된다`,
    },
  ],
});

const picture = (): CodeReutrnType => ({
  title: "picture",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<picture>: 최신 HTML Living Standard에 추가된 이미지 태그로 <audio> 태그와 <video> 태그에 대응한다. 다양한 환경에서 서로 다른 이미지를 띄울 수 있게 한다. W3C HTML 표준에 반영되어 있지 않다.`,
    },
  ],
});
</script>

<style scoped>
li {
  list-style: square inside;
}
</style>
