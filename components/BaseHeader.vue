<template>
  <div class="nav">
    <NuxtLink class="go-home" to="/">Home</NuxtLink>
    <input class="toggle-checkbox" type="checkbox" id="toggle" />
    <label class="toggle" for="toggle">toggle</label>
    <ul class="organize">
      <div class="title-warp">
        <input type="checkbox" id="check2" />
        <label for="check2">임시탭</label>
        <div class="menu-warp">
          <NuxtLink to="/test">test</NuxtLink>
          <NuxtLink to="/nitroStorage">intro storage</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check3" />
        <label for="check3">HTML</label>
        <div class="menu-warp">
          <NuxtLink to="/">HTML</NuxtLink>
          <NuxtLink to="/">기본구조</NuxtLink>
          <NuxtLink to="/">시멘틱태그</NuxtLink>
          <NuxtLink to="/">텍스트관련</NuxtLink>
          <NuxtLink to="/">목록관련</NuxtLink>
          <NuxtLink to="/">링크_이미지</NuxtLink>
          <NuxtLink to="/">테이블관련</NuxtLink>
          <NuxtLink to="/">폼관련</NuxtLink>
          <NuxtLink to="/">멀티미디어</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check4" />
        <label for="check4">CSS</label>
        <div class="menu-warp">
          <NuxtLink to="/">root의사클래스</NuxtLink>
          <NuxtLink to="/">CSS함수</NuxtLink>
          <NuxtLink to="/">CSS선택자</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check5" />
        <label for="check5">SCSS</label>
        <div class="menu-warp">
          <NuxtLink to="/">Media쿼리</NuxtLink>
          <NuxtLink to="/">@Container</NuxtLink>
          <NuxtLink to="/">데이터</NuxtLink>
          <NuxtLink to="/">중첩</NuxtLink>
          <NuxtLink to="/">라이브러리 가져오기</NuxtLink>
          <NuxtLink to="/">Mixins</NuxtLink>
          <NuxtLink to="/">Extend</NuxtLink>
          <NuxtLink to="/">Function</NuxtLink>
          <NuxtLink to="/">조건문_반복문</NuxtLink>
          <NuxtLink to="/">내장함수</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check100" />
        <label for="check100">CSS 디자인</label>
        <div class="menu-warp">
          <NuxtLink to="/">text</NuxtLink>
          <NuxtLink to="/">image</NuxtLink>
          <NuxtLink to="/">details-summary</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check101" />
        <label for="check101">정규식 표현</label>
        <div class="menu-warp">
          <NuxtLink to="/">정규식</NuxtLink>
          <NuxtLink to="/">예제_테스트</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check102" />
        <label for="check102">애니메이션</label>
        <div class="menu-warp">
          <NuxtLink to="/">정리전</NuxtLink>
          <NuxtLink to="/">input</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check6" />
        <label for="check6">Vue</label>
        <div class="menu-warp">
          <NuxtLink to="/">Vue</NuxtLink>
          <NuxtLink to="/">템플릿_문법</NuxtLink>
          <NuxtLink to="/">Class_Style_바인딩</NuxtLink>
          <NuxtLink to="/">DOM접근</NuxtLink>
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check8" />
        <label for="check8">Vue-Router</label>
        <div class="menu-warp"></div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check9" />
        <label for="check9">기타</label>
        <div class="menu-warp">
          <NuxtLink to="/">opener</NuxtLink>
          <!-- <NuxtLink to="/함수_Promise_리턴값"
              >함수_Promise_리턴값</NuxtLink
            > -->
        </div>
      </div>

      <div class="title-warp">
        <input type="checkbox" id="check10" />
        <label for="check10">CS기술 면접</label>
        <div class="menu-warp">
          <NuxtLink to="/">link</NuxtLink>
          <!-- <NuxtLink to="/cs기술면접/think">개발상식</NuxtLink>
            <NuxtLink to="/cs기술면접/network">네트워크</NuxtLink>
            <NuxtLink to="/cs기술면접/운영체재">운영체재</NuxtLink> -->
        </div>
      </div>
      <div class="title-warp">
        <input type="checkbox" id="check11" />
        <label for="check11">Markdown</label>
        <div class="menu-warp">
          <NuxtLink to="/">README</NuxtLink>
          <NuxtLink to="/">글자</NuxtLink>
          <NuxtLink to="/">링크_줄바꿈</NuxtLink>
          <NuxtLink to="/">선_강조</NuxtLink>
          <NuxtLink to="/">이미지</NuxtLink>
          <NuxtLink to="/">인용글_목록</NuxtLink>
          <NuxtLink to="/">코드</NuxtLink>
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
