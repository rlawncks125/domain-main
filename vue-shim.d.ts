/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "simple-code-editor";

declare module "*.mp4" {
  const value: any;
  export default value;
}
