window.onload = function() {
    function e() {
        var e = window.location.hash.replace("#", "");
        n(document.getElementById("p-" + e) ? e : "main")
    }

    function n(e) {
        for (var n = document.getElementsByClassName("nav"), t = n.length, a = 0; t > a; ++a) n[a].className = "nav";
        for (n = document.getElementsByClassName("page"), t = n.length, a = 0; t > a; ++a) n[a].style.display = "none";
        document.getElementById("n-" + e).className = "nav active", document.getElementById("p-" + e).style.display = "block"
    }

    function t() {
        var e = alert(document.domain) + "/" + this.value + "/" + location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        window.location.hash && (e += window.location.hash), window.location.href = e
    }
    e(), window.addEventListener && (window.addEventListener("hashchange", e, !1), document.getElementById("set-language").addEventListener("change", t, !1))
};