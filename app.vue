<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const baseTitle = "김주찬 정리 사이트";
    return titleChunk ? `${baseTitle} - ${titleChunk}` : baseTitle;
  },
  meta: [
    {
      name: "title",
      content: "김주찬 정리 사이트",
    },
    {
      name: "description",
      content: "김주찬 정리 사이트 입니다.",
    },
    {
      name: "og:title",
      property: "og:title",
      content: `김주찬 정리 사이트 입니다.`,
    },
    {
      name: "og:description",
      property: "og:description",
      content: "김주찬 정리 사이트 입니다.",
    },
    {
      name: "og:image",
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhdq4v4ar/image/upload/v1664593520/back-Portfolio/hihuwcqoqqjafvshekmq.jpg",
    },
    {
      name: "og:type",
      property: "og:type",
      content: "website",
    },
  ],
});
</script>

<style lang="scss">
body {
  margin: 0;
}

.code_editor {
  .code_area {
    textarea {
      color: white;
    }
  }
}
</style>
