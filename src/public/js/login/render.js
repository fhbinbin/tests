// import { $ } from "../utils.js";
const template = (opts = {}) => {
    const tpl = `
        <div id="login-wrapper">
            <p id="login-error" class="login-error"></p>
            <form id="login-form" onsubmit="return false">
                
                <label class="login-accound-wrapper">
                    <span class="account-label">${opts.accountLabel}</span>
                    <input id="login-account" valid="present" name="account" type="text" placeholder="${opts.accountPlaceholder}" maxlength="" autocomplete="">
                    <span id="clear-account" class="del"></span>
                </label>

                <label class="login-password-wrapper">
                    <span class="password-label">${opts.passwordLabel}</span>
                    <input id="login-password" valid="present" name="password" type="password" placeholder="${opts.passwordPlaceholder}" maxlength="" autocomplete="">
                </label>

                <label style="display: none" class="login-verify-wrapper">
                    <span class="verify-label">验证码：</span>
                    <input id="login-verify" name="verifyCode" type="text" placeholder="">
                    <img src="/verifycode">
                </label>

                <label class="login-remember-wrapper" style="display: ">
                    <span>记住密码：</span>
                    <input id="login-remember" name="remember" type="checkbox">
                </label>

                <input id="login-btn" class="login-btn" type="submit" value="${ opts.loginBtnText}">
            </form>
            <div class="login-extra-wrapper">
                <a href="forget.html">忘记密码</a>
                <a href="register-mobile.html">免费注册</a>
            </div>
        </div>`
    return tpl;
}
export default (conf = {}) => {
    conf.container.innerHTML = template(conf);
    
}