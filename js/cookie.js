function showCookieNotice() {
    if (this.window.localStorage.getItem('aCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('cCookieHinweis', '1');
}

function showCheckboxes() {
    document.getElementById("cookie-container").style="display:block";
    document.getElementById("config").style="display:none";
}
