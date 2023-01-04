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
    const items = [
      제목(),
      p(),
      b(),
      strong(),
      em(),
      i(),
      ins(),
      u(),
      del(),
      s(),
      sup(),
      sub(),
      small(),
      br(),
      hr(),
      pre(),
      abbr(),
      기타태그(),
    ];
    return { items };
  },
});

const 제목 = (): CodeReutrnType => ({
  title: "제목 h[1-6]",
  html: `
    <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
  `,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<h [1-6]>: 제목(heading)을 표시할 때 사용된다. <h1>이 가장 크고 <h6>이 가장 작다
<h1>은 한 문서 안에 하나만 사용하는 것을 권장한다.`,
    },
  ],
});
const p = (): CodeReutrnType => ({
  title: "p 태그",
  html: `<p>p 태그입니다.</p>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<p>: 새 문단(paragraph)을 연다.`,
    },
  ],
});
const b = (): CodeReutrnType => ({
  title: "b 태그",
  html: `<b>b 태그입니다.</b>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<b>: 두껍게(bold) 효과를 준다`,
    },
  ],
});
const strong = (): CodeReutrnType => ({
  title: "strong 태그",
  html: `<strong>strong 태그입니다.</strong>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<strong>: 포함된 텍스트를 강하게 강조할 때 사용한다.`,
    },
  ],
});

const em = (): CodeReutrnType => ({
  title: "em 태그",
  html: `<em>em 태그입니다.</em>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<em>: <strong>보다 약한 강조를 나타낼 때 사용한다.`,
    },
  ],
});

const i = (): CodeReutrnType => ({
  title: "i 태그",
  html: `<i>i 태그입니다.</i>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<i>: 텍스트를 기울임꼴(italic)로 표시한다. 기술 용어, 외국어, 일반적으로 기울임꼴로 사용되는 용어 등을 강조한다`,
    },
  ],
});
const ins = (): CodeReutrnType => ({
  title: "ins 태그",
  html: `<ins>ins 태그입니다.</ins>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<ins>: 문서에 밑줄을 표시한다.`,
    },
  ],
});
const u = (): CodeReutrnType => ({
  title: "u 태그",
  html: `<u>u 태그입니다.</u>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<u>: 밑줄을 표시한다. 철자 오류를 지적하는데 사용`,
    },
  ],
});
const del = (): CodeReutrnType => ({
  title: "del 태그",
  html: `<del>del 태그입니다.</del>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<del>: 문서에서 취소선을 표시한다`,
    },
  ],
});

const s = (): CodeReutrnType => ({
  title: "s 태그",
  html: `<s>s 태그입니다.</s>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<s>: 취소선을 표시한다. <del>보다 약한 의미`,
    },
  ],
});
const sup = (): CodeReutrnType => ({
  title: "sup 태그",
  html: `글<sup>sup 태그입니다.</sup>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<sup>: 텍스트를 위첨자(superscript)로 표시한다.`,
    },
  ],
});
const sub = (): CodeReutrnType => ({
  title: "sub 태그",
  html: `글<sub>sub 태그입니다.</sub>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<sub>: 텍스트를 아래첨자(subscript)로 표시한다.`,
    },
  ],
});
const small = (): CodeReutrnType => ({
  title: "small 태그",
  html: `<small>small 태그입니다.</small>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `흠 내용이없음 나중에 추가`,
    },
  ],
});
const br = (): CodeReutrnType => ({
  title: "br 태그",
  html: `제1<br />제2`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<br />: 문단 내 줄바꿈(line break)`,
    },
  ],
});
const hr = (): CodeReutrnType => ({
  title: "hr 태그",
  html: `<hr />`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<hr />: 가로줄(horizontal rule)을 넣는다`,
    },
  ],
});
const pre = (): CodeReutrnType => ({
  title: "pre 태그",
  html: `글<pre>pre 태그입니다.</pre>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<pre>: 서식 있는(Preformatted) 텍스트를 넣기 위한 태그이다. 이 태그 안에는 <br> 태그 없이 개행하더라도 개행을 인식하고 공백 문자가 두 개 이상 연속으로 있어도 하나로 취급하지 않고 그대로 표시된다. 또한, 일반적으로 이 태그 안에 들어간 텍스트는 고정폭 글꼴로 표시된다. 이 태그 안에 다른 태그를 넣으면 경우에 따라 의도치 않게 표시될 수도 있으므로 가급적이면 다른 태그를 넣지 않는 것이 좋다.`,
    },
  ],
});
const abbr = (): CodeReutrnType => ({
  title: "abbr 태그",
  html: `<abbr title="약어에대한 설명입니다. title속성">abbr 태그입니다.마우스올려보세요</abbr>`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<abbr>: 약어를 이 태그로 묶어서 무엇의 약어인지 설명하기 위한 태그이다. <abbr title="약어에 대한 설명">약어</abbr> 식으로 써서 마우스 커서를 대면 설명이 떠서 읽을 수 있게 한다`,
    },
  ],
});
const 기타태그 = (): CodeReutrnType => ({
  title: "기타태그",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<!-- 잘안쓰일거 같은 태그 -->
<wbr>: 글이 길어질 때 띄어쓰기가 없더라도 이 태그가 쓰인 부분에서 자동개행이 이루어진다. 예를 들어, Java<wbr>Programming이라고 쓰면 개행되지 않을 때는 'JavaProgramming'으로 붙어서 나오지만 자동개행시 <wbr> 태그 앞뒤로 위치한 'Java'와 'Programming'이 서로 분리될 수 있다. 원래는 개행을 방지하는 비표준 태그 <nobr> 안애서 <br> 태그와 같은 기능을 하는 태그였으나 HTML5에서 표준으로 채택되면서 기능이 변경된 것. 코더들 사이에서 이 태그와 SHY 중 무엇을 써야 할 지 의견이 분분하다. 다만 한글은 글자 단위로 개행이 되기 때문에 한글에다가 이 태그를 쓸 필요성은 거의 없다.
<blockquote>: 인용구를 기술하는 태그이다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.
<q>: <blockquote>의 인라인 버전.
<dfn>: 후술할 <dl>의 인라인 버전.
<var>, <samp>, <kbd>, <code>: 변수 등 프로그래밍 언어와의 연계를 위한 태그.
<ruby>: 후리가나(루비 문자) 표기에 쓰이는 기본 태그. 절대 Ruby를 프로그래밍하기 위한 태그가 아니다!
<rp>: 후리가나가 지원되지 않는 환경에서 표기할 텍스트를 지정한다.
<rt>: 후리가나를 쓴다.
<rb>: 합성어 등으로 후리가나가 여러 단어로 이루어지는 경우 등에 후리가나 영역을 지정하는데 쓰인다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.
<rtc>: 후리가나의 의미적 주석을 넣는다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.`,
    },
  ],
});
</script>

<style>
h1 {
  font-size: 2rem !important;
}
h2 {
  font-size: 1.5rem !important;
}
h3 {
  font-size: 1.17rem !important;
}
h4 {
  font-size: 1rem !important;
}
h5 {
  font-size: 0.83rem !important;
}
h6 {
  font-size: 0.67rem !important;
}
</style>
