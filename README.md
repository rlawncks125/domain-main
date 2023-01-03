#에러 해결

```
  // Cannot find module 'node:module'
  해결 방법 node버전 업그레이드 v14->v16
```

## simple-code-ediotr 에러

```
// The requested module '/_nuxt/node_modules/highlight.js/lib/index.js?v=24169448' does not provide an export named 'default'

해결 방법
// plugins/simple-code-editor.ts
import "highlight.js"; // 선언
```
