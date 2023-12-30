
react有一个api-[createPortal](https://react.dev/reference/react-dom/createPortal)

这个功能呢,平时写业务基本没有用过,大家都习惯了较为稳定的dom结构,正巧我最近在重构我的博客网站,想要一个不同路由切换背景的组件

这时候按照以前的想法大家都会创建一个背景组件基于路由来切换,但是很明显,这样写不是很内聚,然后我就突然想到了这个api, 那么直接开始一个试的尝

首先我们在index.html里添加上我们的节点, 基于unocss写一点小样式

```javascript
<div id="bgPortal" class="fixed top-0 w-screen h-screen"></div>

```

然后在我们想要显示背景那个组件文件的jsx里,加上我们的protal代码

```javascript
{createPortal(<Spline className='absolute top-0 w-full pointer-events-none' scene="https://prod.spline.design/地址" /> ,
document.getElementById('bgPortal')
)}
```

打开浏览器看一下效果

完美,非常的完美啊