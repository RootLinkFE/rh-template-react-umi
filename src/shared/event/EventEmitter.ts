/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2021-06-16 17:16:59
 * @description: 最小可用事件监听
 */

class EventEmitter {
  private debugger: boolean;
  private _callback_: any;

  fire: (ev: any, data: any) => this | undefined;
  emit: (ev: any, data: any) => this | undefined;
  bind: (ev: any, callback: any) => this | undefined;
  on: (ev: any, callback: any) => this | undefined;
  off: (ev: any, callback: any) => this;
  unbind: ((ev: any, callback: any) => this) | undefined;
  unbindAll: (eventName: any) => void | undefined;

  constructor(debug = false) {
    this.debugger = !!debug;
    this._callback_ = {};
    this.fire = this.trigger;
    this.emit = this.trigger;
    this.bind = this.addListener;
    this.on = this.addListener;
    this.off = this.removeListener;
    this.unbind = this.removeListener;
    this.unbindAll = this.removeAllListeners;
  }

  debug(info: any) {
    if (!this.debugger) return;
    console.log(info);
  }

  /**
   * 事件监听
   * @param {string} ev 事件名称
   * @param {function} callback 回调函数
   */
  addListener(ev: string, callback: Function) {
    this.debug(`Add listener for ${ev}`);
    this._callback_[ev] = this._callback_[ev] || [];
    this._callback_[ev].push(callback);
    return this;
  }

  /**
   * 移除事件监听
   * @param {string} ev 事件名称
   * @param {function} callback 回调函数
   */
  removeListener(ev: string, callback?: Function) {
    let calls = this._callback_;
    if (!ev) {
      this.debug('Remove all listeners');
      this._callback_ = {};
      return this;
    }
    if (!callback) {
      this.debug(`Remove all listeners of ${ev}`);
      calls[ev] = [];
      return this;
    }
    let list = calls[ev] || [];
    list.forEach((cb: Function, index: number) => {
      if (cb === callback) {
        this.debug(`Remove all listeners of ${ev}`);
        list[index] = null;
      }
    });
    return this;
  }

  /**移除所有事件监听 */
  removeAllListeners(eventName: string) {
    this.removeListener(eventName);
  }

  /**
   * 事件触发器
   * @param {string} ev 事件名称
   * @param {*} data 数据
   */
  trigger(ev: string, data: any) {
    let list: any = [],
      callback,
      calls = this._callback_;
    if (!ev) return this;
    list = calls[ev] || [];
    list.forEach((cb: Function, i: number) => {
      if (!(callback = cb)) {
        list.splice(i, 1);
      } else {
        let args = [];
        for (let j = 1; j <= arguments.length; j++) {
          args.push(arguments[j]);
        }
        callback.apply(this, args);
      }
    });
    return this;
  }

  once(ev: string, callback: Function) {
    const self = this;
    const wrapper = function () {
      callback.apply(self, arguments);
      self.removeListener(ev, wrapper);
    };
    this.addListener(ev, wrapper);
    return this;
  }

  clear() {
    this._callback_ = {};
  }
}

export default EventEmitter;
