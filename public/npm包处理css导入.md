## 问题

用vite打包一个库,less被处理成了css文件,但是这个css文件并没有被js引用,所以使用的时候并不会生效

## 处理办法

不是vite的问题,vite已经帮你打包好了,在package.json中exports这个css文件就可以了

```
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js"
    },
    // 用的时候直接引用就ojbk了
    "./dist/style.css": "./dist/style.css"
  },
```

## 反思

以后碰到问题先分析,别的库是怎么处理的,antd也要单独引用css文件,先想问题在解决