/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2021-06-16 17:54:22
 * @description: 统一事件监听派发处理；支持跨屏联动，支持普通同屏事件监听派发
 */

import EventEmitter from './EventEmitter';
import { local, subscribe, unsubscribe } from 'brownies';
const event = new EventEmitter(true);

type CrossEvent = {
  on(eventName: string, cb: Function): string | number;
  emit(eventName: string, data: any): void;
  off(id: string | number): void;
};

class RhEvent {
  static crossEvent: CrossEvent = {
    on: this.crossSubscribe,
    emit: this.crossEmit,
    off: unsubscribe,
  };

  /**
   * 跨屏订阅
   * @return 返回监听句柄，用于解除监听
   */
  private static crossSubscribe(eventName: string, cb: Function) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    const subId = subscribe(local, eventName, (value: any) => {
      cb && cb(value);
    });
    return subId;
  }

  /**
   * 跨屏派发事件
   */
  private static crossEmit(eventName: string, data: any) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    local[eventName] = data;
  }

  /**
   * 事件订阅
   * @param eventName
   * @param cb
   */
  static on(eventName: string, cb: Function) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    event.on(eventName, cb);
  }

  /**
   * 事件派发
   * @param eventName
   * @param data
   */
  static emit(eventName: string, data: any) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    event.emit(eventName, data);
  }

  /**
   * 取消订阅
   * @param eventName 事件名称
   * @param cb 绑定事件的回调函数，如果不传，则取消所有事件eventName订阅
   */
  static off(eventName: string, cb?: Function) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    event.off(eventName, cb);
  }

  /**
   * 像Bind方法一样绑定一个事件，但是会在它被触发后删除侦听器。
   * @param eventName
   * @param cb
   */
  static once(eventName: string, cb: Function) {
    if (!eventName?.trim()) {
      throw new Error('eventName 不能为空！');
    }
    event.once(eventName, cb);
  }
}

export default RhEvent;
