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
      talbe(),
      tr(),
      th(),
      td(),
      caption(),
      colgroup_col(),
      thead_tbody_tfoot(),
    ];
    return { items };
  },
});

const talbe = (): CodeReutrnType => ({
  title: "talbe",
  html: `<table style="width: 100%; text-align: center">
        <caption style="text-align: left">
          caption : 테이블 제목넣는곳입니다.
        </caption>
        <thead>
          <tr>
            <th>성</th>
            <th>이름</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김</td>
            <td>두루미</td>
            <td>010-0101-0101</td>
          </tr>
          <tr>
            <td>이</td>
            <td>선생</td>
            <td>010-0101-0101</td>
          </tr>
          <tr>
            <td colspan="2">성 + 이름</td>
            <td>colspan col병합</td>
          </tr>
          <tr>
            <td rowspan="2">성 + 성<br />(row병합)</td>
            <td>이름1</td>
            <td>연란처1</td>
          </tr>
          <tr>
            <td>이름2</td>
            <td>연락처2</td>
          </tr>
        </tbody>
      </table>`.replaceAll("\n", ""),
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<table>: 테이블을 만드는 태그이다.

<!-- 구조 -->
<table style="width: 100vw; text-align: center" >
    <caption style="text-align: left" >
        caption : 테이블 제목넣는곳입니다.
    </caption>
    <thead>
        <tr>
            <th> 성 </th>
            <th> 이름 </th>
            <th> 연락처 </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 김 </td>
            <td> 두루미 </td>
            <td> 010-0101-0101 </td>
        </tr>
        <tr>
            <td> 이 </td>
            <td> 선생 </td>
            <td> 010-0101-0101 </td>
        </tr>
        <tr>
            <td colspan="2" > 성 + 이름 </td>
            <td> colspan col병합 </td>
        </tr>
        <tr>
            <td rowspan="2" > 성 + 성 br/ (row병합) </td>
            <td> 이름1 </td>
            <td> 연란처1 </td>
        </tr>
        <tr>
            <td> 이름2 </td>
            <td> 연락처2 </td>
        </tr>
    </tbody>
</table>`,
    },
    {
      lang: CodeLanguages.css,
      code: `tr,
td,
th {
    border: 1px solid black;
}`,
    },
  ],
});

const tr = (): CodeReutrnType => ({
  title: "tr",
  code: [{ lang: CodeLanguages.xml, code: `<tr>: 행(table row)을 시작한다.` }],
});
const th = (): CodeReutrnType => ({
  title: "th",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<th>: 테이블의 행, 열의 머리말(table heading)을 나타낸다. 기본적으로 가운데로 정렬되고 굵은 글씨로 표시된다.`,
    },
  ],
});
const td = (): CodeReutrnType => ({
  title: "td",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<td>: 표의 내용(table data), 셀을 표현한다.`,
    },
  ],
});
const caption = (): CodeReutrnType => ({
  title: "caption",
  code: [
    { lang: CodeLanguages.xml, code: `<caption>: 테이블의 제목을 기술한다.` },
  ],
});
const colgroup_col = (): CodeReutrnType => ({
  title: "colgroup col",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<colgroup>, <col>: 테이블 상단에 넣어 테이블의 열 정보를 기술한다. 주로 일괄적으로 셀의 너비를 지정할 때 쓰인다.`,
    },
  ],
});
const thead_tbody_tfoot = (): CodeReutrnType => ({
  title: "thead(상단) tbody(본문) tfoot(하단)",
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<thead>, <tbody>, <tfoot>: 테이블의 세부 구조를 기술한다. 각각 표의 상단, 본문, 하단 부분에 대응한다.`,
    },
  ],
});
</script>

<style>
tr,
td,
th {
  border: 1px solid black;
}
</style>
