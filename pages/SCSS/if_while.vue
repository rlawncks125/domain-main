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

const items = [if문(), if_else문(), for문(), each문(), while문()];

function if문(): CodeReutrnType {
  return {
    title: "if",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `if(조건 , ture , false)

div {
  $width : 300px;
  width : if($width > 200px , $width , 100px);
}`,
      },
    ],
  };
}
function if_else문(): CodeReutrnType {
  return {
    title: "if ~ else if",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `@if (조건1){

}@else if (조건2) {

}@else {

}

$color : red ;

div {
    @if $color == orange {
        color : #FE9A2E;
    }
    @else if $color == banana {
        color : $FFFFFF;
    }
    @else {
        color : red;
    }
}`,
      },
    ],
  };
}
function for문(): CodeReutrnType {
  return {
    title: "for",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// 종료 만큼 반복 ( through )
@for $변수 from 시작 through 종료 {
// ...
}

// 종료 진적까지 반복 ( to )
@for $변수 from 시작 to 종료 {
// ...
}

// 결과 :

// 1부터 3번 반복
@for $i from 1 through 3 {
    #through:nth-child(#{$i}) {
        width : 20px * $i
    }
}

// 1부터 3 직전까지만 반복(2번 반복)
@for $i from 1 to 3 {
    #to:nth-child(#{$i}) {
        width : 20px * $i
    }
}

// for 결과
#through:nth-child(1) { width: 20px; }
#through:nth-child(2) { width: 40px; }
#through:nth-child(3) { width: 60px; }

#to:nth-child(1) { width: 20px; }
#to:nth-child(2) { width: 40px; }`,
      },
    ],
  };
}

function each문(): CodeReutrnType {
  return {
    title: "each",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// List 와 Map을 반복할떄 사용
@each $변수 in 데이터 {
//...
}

// list타입
@each $변수 in List타입 {}
@each $변수,... in List타입,... {}

// map타입
@each $key변수 , $value변수 in 데이터 {}`,
      },
    ],
  };
}

function while문(): CodeReutrnType {
  return {
    title: "while",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `@while 조건 {
//...
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
