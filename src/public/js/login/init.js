import render from "./render.js";
import bindEvent from "./event.js";

const logEx = (opts = {}) => {
    const defaultOpts = {
        loginBtnText: '登录',
        accountLabel: '',
        accountPlaceholder: '手机号/邮箱密码',
        passwordLabel: '',
        passwordPlaceholder: '请输入密码'
    }
    const options = Object.assign(defaultOpts, opts);
    render(options)
    bindEvent(options)
}


// 类的写法   Class使用Symbol创建私有成员变量
const render_s = Symbol('render');
const event_s = Symbol('event');
class Slider {
    constructor(opts) {
        this[render_s](opts);
        this[event_s](opts);
    }
    [render_s](opts) {
        console.log(opts,'render');
    }
    [event_s](opts) {
        console.log(opts,'event');
    }
}

const slide = new Slider({
    container: 1
})

export default logEx