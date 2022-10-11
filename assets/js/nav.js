! function () {
    if ($("#trigger-overlay").length) {
        var e = document.getElementById("trigger-overlay"),
            n = document.querySelector("div.overlay");
        n.querySelector("button.overlay-close"), e.addEventListener("click", (function () {
            if (classie.has(n, "open")) {
                classie.remove(n, "open"), classie.add(n, "close");
                var e = function e(t) {
                    "visibility" === t.propertyName && (this.removeEventListener("webkitTransitionEnd", e), this.removeEventListener("transitionend", e), this.removeEventListener("oTransitionEnd", e), this.removeEventListener("MSTransitionEnd", e), this.removeEventListener("transitionend", e), classie.remove(n, "close"))
                };
                n.addEventListener("webkitTransitionEnd", e), n.addEventListener("transitionend", e), n.addEventListener("oTransitionEnd", e), n.addEventListener("MSTransitionEnd", e), n.addEventListener("transitionend", e)
            } else classie.has(n, "close") || classie.add(n, "open")
        }))
    }
    $("#trigger-overlay").click((function () {
        $(this).toggleClass("open")
    }))
}();