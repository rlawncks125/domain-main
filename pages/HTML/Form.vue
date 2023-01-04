<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div
        style="margin: 0.5rem 0"
        v-for="(code, cindex) in item.code"
        :key="cindex"
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
    const items = [input(), tag()];

    return { items };
  },
});

const input = (): CodeReutrnType => ({
  title: "input 타입",
  html: `<label for="text" > text </label><input type="text" id="text" / >

<label for="number" > number </label><input type="number" id="number" / >

<label for="url" > url </label><input type="url" id="url" / >

<input type="email" id="email" placeholder="myEmail@email.com" / >

<label for="tel" > tel </label><input type="tel" id="tel" / >

<label for="search" > search </label><input type="search" id="search" / >

<label for="range" > range </label><input type="range" id="range" / >

<label for="color" > color </label><input type="color" id="color" / >

<label for="date" > </label><input type="date" id="date" / >

<label for="time" > </label><input type="time" id="time" / >

<label for="datetime" > datetime </label><input type="datetime" id="datetime" / >

<!-- checkbox -->
<label for="checkboxA" > checkboxA </label><input type="checkbox" id="checkboxA" name="checkboxA" / >
<label for="checkboxB" > checkboxB </label><input type="checkbox" id="checkboxB" name="checkboxB" / >

<!-- radio -->
<label for="radioA" > radioA </label><input type="radio" id="radioA" name="radio" value="radioA" / >
<label for="radioB" > radioB </label><input type="radio" id="radioB" name="radio" value="radioB" / >

<label for="button" > button </label><input type="button" id="button" value="button" / >

<label for="submit" > submit </label><input type="submit" id="submit" / >

<label for="image" > image </label><input type="image" src="https://res.cloudinary.com/dhdq4v4ar/image/upload/v1603952836/sample.jpg" alt="" id="image" width="100" height="100" />

<label for="reset" > reset </label><input type="reset" id="reset" / >

<label for="hidden" > hidden </label><input type="hidden" id="hidden" / >

<label for="file" > file </label><input type="file" id="file" / >`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<label for="text" > text </label>
<input type="text" id="text" / >

<label for="number" > number </label>
<input type="number" id="number" / >

<label for="url" > url </label>
<input type="url" id="url" / >

<input type="email" id="email" placeholder="myEmail@email.com" / >

<label for="tel" > tel </label>
<input type="tel" id="tel" / >

<label for="search" > search </label>
<input type="search" id="search" / >

<label for="range" > range </label>
<input type="range" id="range" / >

<label for="color" > color </label>
<input type="color" id="color" / >

<label for="date" > </label>
<input type="date" id="date" / >

<label for="time" > </label>
<input type="time" id="time" / >

<label for="datetime" > datetime </label>
<input type="datetime" id="datetime" / >

<!-- checkbox -->
<label for="checkboxA" > checkboxA </label>
<input type="checkbox" id="checkboxA" name="checkboxA" / >
<label for="checkboxB" > checkboxB </label>
<input type="checkbox" id="checkboxB" name="checkboxB" / >

<!-- radio -->
<label for="radioA" > radioA </label>
<input type="radio" id="radioA" name="radio" value="radioA" / >
<label for="radioB" > radioB </label>
<input type="radio" id="radioB" name="radio" value="radioB" / >

<label for="button" > button </label>
<input type="button" id="button" value="button" / >

<label for="submit" > submit </label>
<input type="submit" id="submit" / >

<label for="image" > image </label>
<input type="image"
src="https://res.cloudinary.com/dhdq4v4ar/image/upload/v1603952836/sample.jpg"
alt=""
id="image"
width="100"
height="100"
/>

<label for="reset" > reset </label>
<input type="reset" id="reset" / >

<label for="hidden" > hidden </label>
<input type="hidden" id="hidden" / >

<label for="file" > file </label>
<input type="file" id="file" / >`,
    },
  ],
});
const tag = (): CodeReutrnType => ({
  title: "tag 타입",
  html: `<textarea id="" cols="30" rows="10" > </textarea>

<button> button </button>

<output> output </output>

<select name="" id="" >
<option value="one" > 12 </option>
<option value="two" > 24 </option>
</select>

<form>
  <fieldset>
    <legend> 그룹제목 </legend>
    <input type="text" value="inputText입니당." / >
    <input type="range" name="" id="" / >
  </fieldset>
<form>
<!-- datalist 쓰는법 -->
<datalist id="data-list" >
  <option value="Chocolate" > </option>
  <option value="Coconut" > </option>
</datalist>

<label for="list" > datalist </label><input list="data-list" id="list" name="list" / >`,
  code: [
    {
      lang: CodeLanguages.xml,
      code: `<textarea id="" cols="30" rows="10" > </textarea>

<button> button </button>

<output> output </output>

<select name="" id="" >
  <option value="one" > 12 </option>
  <option value="two" > 24 </option>
</select>

<form>
  <fieldset>
    <legend> 그룹제목 </legend>
    <input type="text" value="inputText입니당." / >
    <input type="range" name="" id="" / >
  </fieldset>
<form>
<!-- datalist 쓰는법 -->
<datalist id="data-list" >
  <option value="Chocolate" > </option>
  <option value="Coconut" > </option>
</datalist>

<label for="list" > datalist </label>
<input list="data-list" id="list" name="list" / >`,
    },
  ],
});
</script>

<style>
input,
textarea {
  @apply border;
}
</style>
