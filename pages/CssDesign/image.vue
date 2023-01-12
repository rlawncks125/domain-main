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
import { defineComponent, onMounted } from "vue";
import { CodeReutrnType, CodeLanguages } from "@/plugins/simple-code-editor";

export default defineComponent({
  setup() {
    const items: CodeReutrnType[] = [
      imgeSrc(),
      imageBg(),
      imageBgAfter(),
      picture(),
      bgText(),
      youtubeImage(),
    ];

    return { items };
  },
});

const imgeSrc = (): CodeReutrnType => {
  return {
    title: "img 태그의 src를 이용한 불러오기",
    html: `
  <img
    src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
    alt=""
  />`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<img src="이미지 주소" alt="" />`,
      },
    ],
  };
};

const imageBg = (): CodeReutrnType => {
  return {
    title: "background 를 이용한 이미지 그리기",
    html: `<div class="image-bg"></div>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: ` <div class="image-bg"></div>`,
      },
      {
        lang: CodeLanguages.css,
        code: `
 .image-bg {
     background-image: url(이미지 주소);
     width: 300px;
     height: 250px;
  }
        `,
      },
    ],
  };
};
const imageBgAfter = (): CodeReutrnType => {
  return {
    title: "::after backgound를 이용한 이미지 그리기",
    html: `<div class="after-bg"></div>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `<div class="after-bg"></div>`,
      },
      {
        lang: CodeLanguages.scss,
        code: `
$after-bg-width: 300px;
$after-bg-height: 250px;

.after-bg {
  width: 400px;
  height: 400px;
  position: relative;
  background: rgb(18, 90, 150);

  &::after {
  display: block;
  content: "";
  width: $after-bg-width;
  height: $after-bg-height;
  
  position: absolute;
  top: calc(50% - (#{$after-bg-height} / 2));
  left: calc(50% - (#{$after-bg-width} / 2));
  
  background-image: url(이미지 주소);
  }
}
        `,
      },
    ],
  };
};
const picture = (): CodeReutrnType => {
  return {
    title: "picture 와 source 태그를 이용한 미디어크기에 따른 이미지 그리기",
    html: `
    <picture>
      <source
        media="(min-width: 800px)"
        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"
      />
      <source
        media="(min-width: 700px)"
        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
      />
      <img
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"
        alt="기본 이미지"
      />
    </picture>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `
<!-- soruce media 정의 순서 중요 ( 큰값 -> 작은값 -> 기본값(img) ) -->
  <picture>
    <source
    media="(min-width: 800px)"
    srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"
    />
    <source
    media="(min-width: 700px)"
    srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
    />
    <img
    src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"
    alt="기본 이미지"
    />
  </picture>
        `,
      },
    ],
  };
};
const bgText = (): CodeReutrnType => {
  return {
    title: "이미지 위에 글자 시인성 ( 잘보이게 )",
    html: `<div class="bg-text">
              <p>text 입력 하세요.</p>
            </div>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `
<div class="bg-text">
    <p>text 입력 하세요.</p>
</div>
        `,
      },
      {
        lang: CodeLanguages.scss,
        code: `
.bg-text {
  width: 250px;
  height: 250px;
  position: relative;
  background: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg")
    no-repeat center/contain;

  & p {
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  }
  &::before {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  // !! 이부분
  background: linear-gradient(to bottom, transparent, black);
  opacity: 0.6;
  }
}
        `,
      },
    ],
  };
};

const youtubeImage = (): CodeReutrnType => {
  onMounted(() => {
    const yb = document.querySelector(".youtube-struct") as HTMLElement;
    let addClassEvent: any;
    const delay = 800;

    yb.addEventListener("mouseenter", (e: any) => {
      addClassEvent = setTimeout(() => {
        (e.target as HTMLElement).classList.add("hover-event");
      }, delay);
    });
    yb.addEventListener("mouseleave", (e: any) => {
      clearTimeout(addClassEvent);
      (e.target as HTMLElement).classList.remove("hover-event");
    });
  });

  return {
    title: "유튜브 썸네일 마우스 오버시 딜레이후 동영상 재생으로 바뀜",
    html: ` <div class="youtube-struct">
    <div class="image-view">
      <img
        class="d-img"
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
      />
      <video class="d-video" autoplay controls>
        <source src="https://res.cloudinary.com/dhdq4v4ar/video/upload/v1652539977/mov_bbb_a1qrkh.mp4" type="video/mp4" />
      </video>
    </div>
  </div>`,
    code: [
      {
        lang: CodeLanguages.xml,
        code: `
<div class="youtube-struct">
  <div class="image-view">
    <img class="d-img" src="이미지 주소" />
    <video class="d-video" autoplay controls>
      <source src="동영상 주소" type="video/mp4" />
    </video>
  </div>
</div>
      `,
      },
      {
        lang: CodeLanguages.typescript,
        code: `
onMounted(() => {
  const yb = document.querySelector(".youtube-struct") as HTMLElement;
  let addClassEvent: any;
  const delay = 800;

  // 마우스 호버시
  yb.addEventListener("mouseenter", (e: any) => {
    // 딜레이후 evnet 작동 클래스 추가
    addClassEvent = setTimeout( () => {
      (e.target as HTMLElement).classList.add("hover-event");
    }, delay);
  });
  // 마우스 이탈시
  yb.addEventListener("mouseleave", (e: any) => {
  // timeout 설정 제거
  // evnet 작동 클래스 삭제
    clearTimeout(addClassEvent);
    (e.target as HTMLElement).classList.remove("hover-event");
  });
});
    `,
      },
      {
        lang: CodeLanguages.scss,
        code: `
.youtube-struct {
  $youtube-width: 300px;
  $youtube-height: 200px;
  $youtube-scale: 1.4;

  width: $youtube-width;
  height: $youtube-height;
  border: 1px solid black;
  overflow: hidden;

  .image-view {
    width: 100%;
    height: 250px;

    .d-img {
      width: 100%;
      max-height: 250px;
      display: block;
    }
    .d-video {
      display: none;
      width: 100%;
      max-height: 250px;
    }
  }

  &.hover-event {
    transition: all 0.3s ease-in;
    width: $youtube-width * $youtube-scale;
    height: $youtube-height * $youtube-scale;

    .image-view {
      .d-img {
        display: none;
      }
      .d-video {
        display: block;
      }
    }
  }
}
      `,
      },
    ],
  };
};
</script>

<style lang="scss">
.image-bg {
  background-image: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg");
  width: 300px;
  height: 250px;
}

$after-bg-width: 300px;
$after-bg-height: 250px;

.after-bg {
  width: 400px;
  height: 400px;
  position: relative;
  background: rgb(18, 90, 150);

  &::after {
    display: block;
    content: "";

    width: $after-bg-width;
    height: $after-bg-height;

    position: absolute;
    top: calc(50% - (#{$after-bg-height} / 2));
    left: calc(50% - (#{$after-bg-width} / 2));

    background-image: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg");
  }
}

.bg-text {
  width: 250px;
  height: 250px;
  position: relative;
  background: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg")
    no-repeat center/contain;

  & p {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    // !! 이부분
    background: linear-gradient(to bottom, transparent, black);
    opacity: 0.6;
  }
}

.youtube-struct {
  $youtube-width: 300px;
  $youtube-height: 200px;
  $youtube-scale: 1.4;

  width: $youtube-width;
  height: $youtube-height;
  border: 1px solid black;
  overflow: hidden;

  .image-view {
    width: 100%;
    height: 250px;

    .d-img {
      width: 100%;
      max-height: 250px;
      display: block;
    }
    .d-video {
      display: none;
      width: 100%;
      max-height: 250px;
    }
  }

  &.hover-event {
    transition: all 0.3s ease-in;
    // transition-delay: 0.4s;
    width: $youtube-width * $youtube-scale;
    height: $youtube-height * $youtube-scale;

    .image-view {
      .d-img {
        display: none;
      }
      .d-video {
        display: block;
      }
    }
  }
}
</style>
