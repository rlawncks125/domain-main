<template>
  <CodeConvert
    width="100%"
    height="auto"
    :read_only="true"
    :wrap_code="true"
    :language_selector="true"
    :languages="editorLanges($props.lang)"
    :value="$props.code"
  ></CodeConvert>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { CodeLanguages } from "@/plugins/simple-code-editor";

defineProps({
  code: String,
  lang: {
    type: String as PropType<CodeLanguages>,
    default: CodeLanguages["1c"],
  },
});

const editorLanges = (lang?: CodeLanguages) => {
  return [[lang, lang]];
};
</script>

<style lang="scss">
.code-margin {
  margin: 1rem 0;
}
</style>
