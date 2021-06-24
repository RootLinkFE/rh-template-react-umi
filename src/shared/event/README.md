# RhEvent

事件监听和派发，因为存在三屏联动的场景，所以封装统一入口，方便管理和使用。


## 文档

静态类的方式调用。


### 跨屏通信

跨屏通信使用 `RhEvent.crossEvent` 对象中的以下方法：

- `on(eventName: string, cb: Function)` 监听事件
- `emit(eventName: string, data: any)` 派发事件
- `off(eventName: string, cb?: Function)` 解绑监听


eg:

```tsx
useEffect(() => {
  // 自定义事件名称：customEvent
  const subId = RhEvent.crossEvent.on('customEvent', (value: any) => {
    console.log(value);
  });

  return () => {
     // 解除监听
    RhEvent.crossEvent.off(subId);
  };
}, []);

```

### 同屏通信

和跨屏方法一致，但是挂载方法是类的成员方法

- `on(eventName: string, cb: Function)` 监听事件
- `emit(eventName: string, data: any)` 派发事件
- `off(eventName: string, cb?: Function)` 解绑监听
- `once(eventName: string, cb: Function)` 只一次性监听，自动解绑

eg:

```tsx
useEffect(() => {
  //  RhEvent.on
  const subId = RhEvent.on('custom_event_1', (value: any) => {
    console.log(value);
  });

  return () => {
     // 解除监听
    RhEvent.off(subId);
  };
}, []);

```
