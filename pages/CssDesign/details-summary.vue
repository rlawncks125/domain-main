<template>
  <!-- 토글 애니메이션  Accordion-->
  <section>
    <details
      :style="{ border: '1px solid black', padding: '1rem' }"
      data-details="Accordion"
    >
      <summary>토글 애니메이션 Accordion class</summary>

      <div
        class="content"
        style="margin: 0.5rem 0"
        v-for="(code, index) in accordionEffect.code"
        :key="index"
      >
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </details>
  </section>
  <!-- 인풋과 디details을 같이 사용 -->
  <section>
    <h1>{{ inputAndDetails.title }}</h1>
    <br />
    <div style="display: flex; gap: 0.5rem; align-items: flex-start">
      <input class="mt-[0.8rem]" type="checkbox" name="" id="summaryCheck" />
      <div style="position: relative; flex: 1 1 auto">
        <label
          style="
            position: absolute;
            left: 0;
            top: 0;
            color: black;
            padding: 0.5rem;
          "
          for="summaryCheck"
        >
          input Label
        </label>
        <details class="input-details" data-details="Accordion">
          <summary>
            <span>자세히보기</span>
            <span class="custom-marker">▶</span>
          </summary>
          <div class="content">
            <p>콘텐츠</p>
            <p>ssaa</p>
          </div>
        </details>
      </div>
    </div>
    <div
      style="margin: 0.5rem 0"
      v-for="(code, index) in inputAndDetails.code"
      :key="index"
    >
      <CodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Accordion } from "@/assets/animate";
import { CodeReutrnType, CodeLanguages } from "@/plugins/simple-code-editor";

export default defineComponent({
  setup() {
    onMounted(() => {
      const details = document.querySelectorAll("[data-details='Accordion']");
      console.log(details);

      details.forEach((el) => {
        console.log(el);
        new Accordion(el as HTMLElement);
      });
    });

    const items = [inputAndDetails()];

    return {
      items,
      inputAndDetails: inputAndDetails(),
      accordionEffect: effectAccordion(),
    };
  },
});

const effectAccordion = (): CodeReutrnType => {
  return {
    code: [
      {
        code: `export class Accordion {
  el: any;
  summary: HTMLElement | null;
  content: HTMLElement | null;
  animation: any | null;
  isClosing: boolean;
  isExpanding: boolean;
  duration: number;
  constructor(el: HTMLElement) {
    // Store the <details> element
    this.el = el;
    // Store the <summary> element
    this.summary = el.querySelector("summary");
    // Store the <div class="content"> element
    this.content = el.querySelector(".content");
    // this.content = el;

    // Store the animation object (so we can cancel it if needed)
    this.animation = null;
    // Store if the element is closing
    this.isClosing = false;
    // Store if the element is expanding
    this.isExpanding = false;
    // duration
    this.duration = 100;
    // Detect user clicks on the summary element
    this.summary?.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e: any) {
    // Stop default behaviour from the browser
    e.preventDefault();
    // Add an overflow on the <details> to avoid content overflowing
    this.el.style.overflow = "hidden";
    // Check if the element is being closed or is already closed
    if (this.isClosing || !this.el.open) {
      this.open();
      // Check if the element is being openned or is already open
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    // Set the element as "being closed"
    this.isClosing = true;

    // Store the current height of the element
    const startHeight = #'@{this.el.offsetHeight}px#';
    // Calculate the height of the summary
    const endHeight = #'@{this.summary?.offsetHeight}px#';

    // If there is already an animation running
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }

    // Start a WAAPI animation
    this.animation = this.el.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: this.duration,
        easing: "ease-out",
      }
    );

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    // Apply a fixed height on the element
    this.el.style.height = #'@{this.el.offsetHeight}px#';
    // Force the [open] attribute on the details element
    this.el.open = true;
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    // Set the element as "being expanding"
    this.isExpanding = true;
    // Get the current fixed height of the element
    const startHeight = #'@{this.el.offsetHeight}px#';
    // Calculate the open height of the element (summary height + content height)
    const endHeight = #'@{this.summary!.offsetHeight + this.content!.offsetHeight}px#';

    // If there is already an animation running
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }

    // Start a WAAPI animation
    this.animation = this.el.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: this.duration,
        easing: "ease-out",
      }
    );
    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  onAnimationFinish(open: any) {
    // Set the open attribute based on the parameter
    this.el.open = open;
    // Clear the stored animation
    this.animation = null;
    // Reset isClosing & isExpanding
    this.isClosing = false;
    this.isExpanding = false;
    // Remove the overflow hidden and the fixed height
    this.el.style.height = this.el.style.overflow = "";
  }
}
`
          .replaceAll("#'", "`")
          .replaceAll("@{", "${"),
        lang: CodeLanguages.javascript,
      },
    ],
  };
};

const inputAndDetails = (): CodeReutrnType => {
  return {
    title: "input 과 details 사용한 Accordion",
    html: `<div style="display: flex; gap: .5rem;">
    <input type="checkbox" name="" id="summaryCheck" />
    <div style="position: relative; flex: 1 1 auto;">
      <label
        style="position: absolute; left: 0; top: 0; color: black; padding: .5rem;"
        for="summaryCheck">
        input Label
      </label>
      <details class="input-details" data-details="Accordion">
        <summary>
          <span>자세히보기</span>
          <span class="custom-marker">▶</span>
        </summary>
        <div class="content">
          <p>콘텐츠</p>
          <p>ssaa</p>
        </div>
      </details>
    </div>
  </div>`,
    code: [
      {
        code: `<div style="display: flex; gap: .5rem;">
    <input type="checkbox" name="" id="summaryCheck" />
    <div style="position: relative; flex: 1 1 auto;">
      <label
        style="position: absolute; left: 0; top: 0; color: black; padding: .5rem;"
        for="summaryCheck">
        input Label
      </label>
      <details data-details="Accordion">
        <summary>
          <span>자세히보기</span>
          <span class="custom-marker">▶</span>
        </summary>
        <div class="content">
          <p>콘텐츠</p>
          <p>ssaa</p>
        </div>
      </details>
    </div>
  </div>`,
        lang: CodeLanguages.xml,
      },
      {
        code: `onMounted(() => {
  const details = document.querySelectorAll("[data-details='Accordion']");      

  details.forEach((el) => {
    new Accordion(el as HTMLElement);
  });

});`,
        lang: CodeLanguages.typescript,
      },
      {
        code: `details.input-details {
  border: 1px solid black;

  summary {
    cursor: pointer;
    padding: 0.5rem;

    width: 7.5rem;
    margin-right: 0px;
    margin-left: auto;
    background: gray;
    color: white;

    & ~ .content {
      padding: 0.5rem;
      border-top: 1px solid black;
    }

    // 마커 없애기
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }

    .custom-marker {
      float: right;
      clear: both;
      pointer-events: auto;
      transform: rotate(0deg);
      transition: transform 0.1s;
    }
  }

  &[open] summary {
    .custom-marker {
      transform: rotate(90deg);
    }
  }
}`,
        lang: CodeLanguages.scss,
      },
    ],
  };
};
</script>

<style lang="scss">
details.input-details {
  border: 1px solid black;

  summary {
    cursor: pointer;
    padding: 0.5rem;

    width: 7.5rem;
    margin-right: 0px;
    margin-left: auto;
    background: gray;
    color: white;

    & ~ .content {
      padding: 0.5rem;
      border-top: 1px solid black;
    }

    // 마커 없애기
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }

    .custom-marker {
      float: right;
      clear: both;
      pointer-events: auto;
      transform: rotate(0deg);
      transition: transform 0.1s;
    }
  }

  &[open] summary {
    .custom-marker {
      transform: rotate(90deg);
    }
  }
}
</style>
