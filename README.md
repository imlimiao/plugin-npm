# plugins-npm

## Npm 安装包试水插件

```
import { Toast, TipsLayer } from '@plugin-private/plugins-npm';
```
###  toast 插件

```
this.$toast({
    message: "胡卡回到家客户",
    position: "middle"
 })
```

###  TipsLayer 插件

```
this.$TipsLayer({
    firstTxt: "我正在测试组件",
    hasClose: true,
    btonTxt: "确定",
    btonFun: () => {
        console.log("demo")
    }
});
 ```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
