<template>
  <div>예제 _ 테스트</div>

  <!-- <div>
    <h2>Email</h2>
    <input type="text" v-model="emailStr" />
    <span>{{ isEmail }}</span>
    <div style="margin: 0.5rem 0">
      <CodeEditor :value="emailCode()" :lang="CodeLanguages['1c']" />
    </div>
  </div> -->
  <div v-for="(item, index) in items" :key="index">
    <h2>{{ item.regexName }}</h2>
    <input type="text" v-model="item.str.value" />
    <span>{{ item.isTrue.value }}</span>
    <div style="margin: 0.5rem 0">
      <CodeEditor :value="item.code()" :lang="CodeLanguages['1c']" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, toRefs, watch } from "vue";
import { CodeLanguages, CodeReutrnType } from "@/plugins/simple-code-editor";

interface IRegReturnType {
  regexName: string;
  str: Ref<string>;
  isTrue: Ref<boolean>;
  code: () => string;
}

export default defineComponent({
  setup() {
    const items = [
      emailReg(),
      phoneReg(),
      passwordReg1(),
      passwordReg2(),
    ] as IRegReturnType[];

    return {
      items,
      CodeLanguages,
    };
  },
});

// email
const emailReg = (): IRegReturnType => {
  const regexName = "email";
  const str = ref();
  const isTrue = ref(false);

  watch(str, () => {
    const reg = new RegExp(
      "^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$"
    );
    isTrue.value = reg.test(str.value);
  });

  const code = () => {
    return `// 정규화
"^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$"

// 해설
1. '@' 앞에 한개 이상의 숫자,알파벳이 있어여하고 '-' , '_' , '.' 문자는 두번쨰 문자 부터 사용 가능
2. '@' 뒤에는 문자숫자 한개이상 + '.'문자 + 문자숫자 한개이상 조합`;
  };

  str.value = "email@ads.na";
  return { regexName, str, isTrue, code };
};

// phone
const phoneReg = (): IRegReturnType => {
  const regexName = "phone";
  const str = ref();
  const isTrue = ref(false);

  watch(str, () => {
    const reg = new RegExp("^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$");

    isTrue.value = reg.test(str.value);
  });

  const code = () => {
    return `// 정규화
"^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$"

// 해설
1. 01로 시작하고 세번째 숫자가 (0,1,6,7,8,9)들 숫자중 하나
2. 숫자 중간중간 '-' 는 있어도 되고 없어도됨
3. 중간 자리 숫자는 0-9 사이 숫자가 {3,4} : 최소 3개 최대4개
4. 마지막 자리 숫자는 0-9자리 숫자가 {4} : 4개
`;
  };

  str.value = "010-1111-1111";
  return { regexName, str, isTrue, code };
};

// password
const passwordReg1 = (): IRegReturnType => {
  const regexName = "password 방식1";
  const str = ref();
  const isTrue = ref(false);

  watch(str, () => {
    const reg = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );

    isTrue.value = reg.test(str.value);
  });

  const code = () => {
    return `// 정규화
"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

// 해설
(?=.*?[A-Z]) // 영문 대문자가 최소 1개이상
(?=.*?[a-z]) // 영문 소문자가 최소 1개이상
(?=.*?[0-9]) // 숫자가 최소 1개이상
(?=.*?[#?!@$%^&*-]) // 포함된 특수문자가 최소 1개이상
.{8,} // 패스워드 길이가 최소 8 앵커포함
`;
  };

  str.value = "@Aa12345";
  return { regexName, str, isTrue, code };
};

const passwordReg2 = (): IRegReturnType => {
  const regexName = "password 방식2";
  const str = ref();
  const isTrue = ref(false);

  watch(str, () => {
    const reg = new RegExp("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$");

    isTrue.value = !reg.test(str.value);
  });

  const code = () => {
    return `// 정규화
"^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$"

정규식은 AND 연산자가 없기때문에
OR연산자를 이용하여 해당하는 조건을 만족(true)하면 틀린 패스워드

isTrue = !new RegExp.test(조건);

// 해설
.{0,7} // 패스워드 길이가 8미만일시
[^0-9]* // 숫자를 포함 안했을시
[^A-Z]* // 영문 대문자를 사용안했을시
[^a-z]* // 영문 소문자를 사용안했을시
[a-zA-Z0-9]* // 특수문자를 사용안했을시

`;
  };

  str.value = "@Aa12345";
  return { regexName, str, isTrue, code };
};
</script>

<style>
h2 {
  @apply text-[2rem] font-bold;
}

input {
  @apply border border-black mr-1;
}
</style>
