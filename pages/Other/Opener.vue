<template>
  <div>opener</div>

  <button @click="openPopup_1">내부popup</button>
  <br />
  <button @click="openPopup_2">내부,외부popup</button>
  <p>받은 데이터 : {{ txt }}</p>

  <h1>popup_ 내부에서만 접근</h1>

  <details data-details="Accordion">
    <summary>자세히</summary>
    <div
      style="margin: 0.5rem 0"
      v-for="(code, index) in opener_type_1().code"
      :key="index"
    >
      <CodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </details>

  <br />
  <h1>popup_ 내부,외부 에서 접근</h1>

  <div
    style="margin: 0.5rem 0"
    v-for="(code, index) in opener_type_2().code"
    :key="index"
  >
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { CodeReutrnType, CodeLanguages } from "@/plugins/simple-code-editor";

const txt = ref();
let callbackBuffer: any;

const onHandlePopupRetrunValue = (d: any) => {
  console.log(d);
  txt.value = d;
};
const onHandlePostMessage = (d: MessageEvent) => {
  if (!d.data) return;

  console.log(d.data);
  txt.value = d.data;
};

const openPopup_1 = () => {
  open_1(onHandlePopupRetrunValue);
};

const openPopup_2 = () => {
  open_2(onHandlePostMessage);
};

const windowFeatures = () => {
  const width = 300;
  const height = 300;
  // 포지션 center로 맞춘 값
  const left = (window.innerWidth - width) / 2 + window.screenX;
  const top = (window.innerHeight - height) / 2 + window.screenY;

  return `popup=true,width=${width},height=${height},left=${left},top=${top}`;
};

// 내부
const open_1 = (callback: (d: any) => void) => {
  const popup = window.open(
    location.origin + "/popup/opener",
    "popup_test",
    windowFeatures()
  );

  popup?.focus();

  // 같은 도메인끼리 데이터 주고받을때 사용가능
  // 외부 도메인시 접근 정책으로 접근 x
  // popup 페이지 에서 접근 할수 있게 함수 선언
  // @ts-ignore
  self.HandlePopupMsg = callback;
};

// 내부,외부
const open_2 = (callback: (d: any) => void) => {
  const popup = window.open(
    location.origin + "/popup/opener",
    "popup_test",
    windowFeatures()
  );

  popup?.focus();

  // postMessage 리스너 응답을 받음
  // 내부,외부 도메인에서 사용시 써야함
  callbackBuffer = callback;
  window.addEventListener("message", callbackBuffer);
};

onUnmounted(() => {
  // @ts-ignore
  delete self.HandlePopupMsg;

  window.removeEventListener("message", callbackBuffer);
});

const codewindowFeatures = () => {
  return (
    `
const windowFeatures = () => {
  const width = 300;
  const height = 300;
  // 포지션 center로 맞춘 값
  const left = (window.innerWidth - width) / 2 + window.screenX;
  const top = (window.innerHeight - height) / 2 + window.screenY;

  return ` +
    "`" +
    "popup=true,width=${width},height=${height},left=${left},top=${top}" +
    "`" +
    `;
};
  `
  );
};

const opener_type_1 = (): CodeReutrnType => {
  return {
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<button @click="openPopup_1">내부popup</button>`,
      },
      {
        lang: CodeLanguages.typescript,
        code: `// 내부에서만 접근할때

const onHandlePopupRetrunValue = (d: any) => {
  console.log(d);
};

const openPopup_1 = () => {
  open_1(onHandlePopupRetrunValue);
};
${codewindowFeatures()}

const open_1 = (callback: (d: any) => void) => {

  const popup = window.open(
    location.origin + "/popup/opener",
    "popup_test",
    windowFeatures()
  );

  // 같은 도메인끼리 데이터 주고받을때 사용가능
  // 외부 도메인시 접근 정책으로 접근 x
  // popup 페이지 에서 접근 할수 있게 함수 선언
  // @ts-ignore
  self.HandlePopupMsg = callback;
}

onUnmounted(() => {
  // @ts-ignore
  delete self.HandlePopupMsg;
});
        `,
      },
      {
        lang: CodeLanguages.typescript,
        code: `// 팝업 페이지

try {
    // open한 페이지에서 접근할수 있게 선언함 함수
    // window.opener === open한 페이지 slef
    window.opener.HandlePopupMsg({
      type: "testPopup",
      data: txt.value,
    });
  } catch (e) {
    console.log(e);
  }

  window.close();
        `,
      },
    ],
  };
};

const opener_type_2 = (): CodeReutrnType => {
  return {
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<button @click="openPopup_2">내부,외부popup</button>`,
      },
      {
        lang: CodeLanguages.typescript,
        code: ` // 내부,외부 에서 접근할때
let callbackBuffer:any;

const onHandlePostMessage = (d: MessageEvent) => {
  if (!d.data) return;

  console.log(d.data);
};

const openPopup_2 = () => {
  open_2(onHandlePostMessage);
};
${codewindowFeatures()}
const open_2 = (callback: (d: any) => void) => {
  const popup = window.open(
    location.origin + "/popup/opener",
    "popup_test",
    windowFeatures()
  );

  popup?.focus();

  // postMessage 리스너 응답을 받음
  // 내부,외부 도메인에서 사용시 써야함
  callbackBuffer = callback;
  window.addEventListener("message", callbackBuffer);
};

onUnmounted(() => {
  window.removeEventListener("message", callbackBuffer);
});

      `,
      },
      {
        lang: CodeLanguages.typescript,
        code: `// 팝업 페이지

window.opener.postMessage(
  {
    type: "testPopup",
    data: txt.value,
  },
  "*" // corss-origin
);
window.close();
        
        `,
      },
    ],
  };
};
</script>

<style scoped lang="scss">
input,
button {
  @apply border rounded-md border-black p-1 my-1;
}
</style>
