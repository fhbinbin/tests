import '../scss/login.scss';
import logEx from "@/public/js/login/init.js";

var login = logEx({
    container: document.getElementById('login-container'),
    autocomplete: false,
    success: function () {
        location.replace('profile.html');
    }
})