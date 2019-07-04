import { $ } from "../utils.js";
import '../mock.js';
import { fetchPost } from "../fetch.js";
export default (opts = {}) => {
    const $loginBtn = $('login-btn');
    const $remember = $('login-remember');
    const $clearAccount = $('clear-account');
    const $clearPassword = $('clear-password');
    const $account = $('login-account');
    const $password = $('login-password');
    const $error = $('login-error');
    $loginBtn.onclick = async () => {

        let remember = '0';
        if ($remember.getAttribute('checked')) {
            remember = '1'
        }
        let data = await fetchPost('/login', {
            account: $account.value,
            password: $password.value,
            remember: remember
        });
        console.log(data);
        
        if (data.code === 200) {
            alert('登录成功');
            opts.success && opts.success();
        }
        else {
            $error.innerHTML = data.message;
        }
    }

    $account.oninput = () => {

    }
    $clearAccount.onclick = () => {

    }
    $password.oninput = () => {

    }


}