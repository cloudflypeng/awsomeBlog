
```javascript
const {revoke, proxy} = Proxy.revocable(target, traps)
```
proxy 可以使用revocable创建一个可销毁的 代理对象,这对于一些临时使用的代理对象很有用

## 对象常用trap

get, has, set, ownKeys, deleteProperty, difineProperty, getOwnPropertyDescriptor, getPrototypeOf, setPrototypeOf

## 数组常用trap
deleteProperty, set重写+ 对象的trap

## Map常用trap
getSize, has, set, delete, clear, foreach, forEach, keys, values, entries,  

## Set trap
add + map 常用trap

### current方法 保存快照
用当前数据状态, 遍历复制整个树, 需要循环整个草稿结构, 性能差, 需要时可以用

### immer性能好原因
不改变原始数据,将原本数据扩展为新对象, 涉及到修改时才创建代理对象, 原始数据的引用在base_里, 修改都是用浅拷贝的copy_ 数据, 下层数据不修改,树结构的其他节点不修改

### scope
同一个数据树的修改信息在同一个scope里, 进行数据隔离

### 我应该
1. 活用proxy代理对象
2. 尽量减少深拷贝
3. trap定义要完整,防止出错

https://immerjs.github.io/immer/zh-CN/example-setstate
immer 和 各种数据管理库配合
https://docs.pmnd.rs/zustand/guides/updating-state#with-immer
immer 和 zustand组合使用, 我认为应该是比较优雅的hook状态管理方式