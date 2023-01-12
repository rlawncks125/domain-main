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

const items = [데이터_종류(), 변수(), 연산()];

function 데이터_종류(): CodeReutrnType {
  return {
    title: "데이터_종류",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `Number : 숫자
            ex) 1, .02 , 10px , 1rem ···
String : 문자
            ex) bold , flex , "/images/a.png" , "string"
Colors : 색상 표현
            ex) red , blue , #FFFFFF , rgba(255,255,255,1)
Boolean : 논리
            ex) true, false
Null : null

List : 공백이나 ',' 로 구분된 값의 목록
            ex) (ab,bc,cd) , ab bc cd
Map : List와 유사하나 Key:Value 형태
            ex) (ab : first , bc : two , cd : three)`,
      },
    ],
  };
}

function 변수(): CodeReutrnType {
  return {
    title: "변수",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `// $변수이름 : 값;

$color-primary : #e030300;
$image : "/assets/images/";
$w : 200px;

.box {
    width : $w;
    color : $color-primary;
    backgorund-image : url($images + 'bg.jpg')
}

// 재할당
$red : $FF0000;

$color-primary : $red;

//전역 설정 : !global
.box1 {
    $color: #ffffff !global;
    background: $color;
}
.box2 {
    background : $color
}

// 초기값 설정 : !default
// 기존의 변수가 있다면 기존 값을 할당
.box {
    $color-primary : yellow !default;
}

// #{} 문자보간
// #{} 문자보간 = $ {변수}와 활용 같음
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");


// @use 사용시 Praviate member 생성가능
// underscore ( _ ) or Hyphen ( - ) 를 사용
$_border : 1px solid #fff;`,
      },
    ],
  };
}

function 연산(): CodeReutrnType {
  return {
    title: "연산",
    code: [
      {
        lang: CodeLanguages.scss,
        code: `산술 :
+ : 더하기
= : 빼기
* : 곱하기 = 하나 이상의 값이 반드시 숫자
/ : 나누기 = 오른쪽 값이 반드시 숫자
% : 나머지

비교 :
== : 동등
!= : 부등
<
>
<=
>=

논리 :
and
or
not

// 숫자
// 상대적 단위(%,em,vw) 시 calc()함수 이용
상대적 단위 연산시 :
width : 50% - 5px; // 에러
width : calc(50% - 5px) // 연산 가능

나누기 연산시 :
$w : 100px;
width : $w / 4;
height : (100px / 2);
font-size : 10px + 12px / 3;

// 문자
// 첫번째 연산자에 따라 따옴표 처리가됨
content : "hello " + World; // "Hello World";
content : row + "-reverse" + " " + wrap; // row-reverse wrap;


// color
color : #123456 + #31456;
color : rgba(50,50,50,.2) + rgba(10,20,30,.3);

// 논리
$width : 80px;
div {
    @if not ($width > 100px){
        height : 200px;
    }
}`,
      },
    ],
  };
}
</script>

<style scoped></style>
