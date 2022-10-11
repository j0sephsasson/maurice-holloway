! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        },
        s = n.push,
        a = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        m = function (e) {
            return null != e && e === e.window
        },
        g = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, r, o = (n = n || g).createElement("script");
        if (o.text = e, t)
            for (i in v)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var _ = "3.6.0",
        w = function (e, t) {
            return new w.fn.init(e, t)
        };

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return t % 2
            })))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[t] = w.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, i = 0;
            if (E(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r, s = 0,
                a = [];
            if (E(e))
                for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return o(a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var x = function (e) {
        var t, n, i, r, o, s, a, l, u, c, f, d, h, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            x = 0,
            C = le(),
            T = le(),
            S = le(),
            k = le(),
            A = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            O = D.push,
            j = D.push,
            I = D.slice,
            q = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
            M = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            B = new RegExp(R + "+", "g"),
            W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            $ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(M),
            Q = new RegExp("^" + F + "$"),
            Y = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                d()
            },
            se = _e((function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(D = I.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (t) {
            j = {
                apply: D.length ? function (e, t) {
                    O.apply(e, I.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, r) {
            var o, a, u, c, f, p, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!r && (d(t), t = t || h, m)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(u = t.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i
                    } else {
                        if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === w && (U.test(e) || $.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = _)), a = (p = s(e)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + be(p[a]);
                        v = p.join(",")
                    }
                    try {
                        return j.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        c === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, r)
        }

        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ue(e) {
            return e[_] = !0, e
        }

        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ue((function (t) {
                return t = +t, ue((function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, o = ae.isXML = function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !X.test(t || n && n.nodeName || "HTML")
            }, d = ae.setDocument = function (e) {
                var t, r, s = e ? e.ownerDocument || e : w;
                return s != h && 9 === s.nodeType && s.documentElement && (p = (h = s).documentElement, m = !o(h), w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce((function (e) {
                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ce((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ce((function (e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce((function (e) {
                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ce((function (e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ce((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function (e, t) {
                    if (e === t) return f = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return f = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                    if (r === o) return de(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? de(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                }), h
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if (d(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    k(t, !0)
                }
                return 0 < ae(t, h, null, [e]).length
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) != h && d(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) != h && d(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ie, re)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return c = null, e
            }, r = ae.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && C(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var r = ae.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, f, d, h, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (h = (u = (c = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [E, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, b]), d !== t)););
                                return (b -= r) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[_] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function (e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = q(e, o[s])] = !(n[i] = o[s])
                        })) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ue((function (e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(W, "$1"));
                        return i[_] ? ue((function (e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        })) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ue((function (e) {
                        return function (t) {
                            return 0 < ae(e, t).length
                        }
                    })),
                    contains: ue((function (e) {
                        return e = e.replace(te, ne),
                            function (t) {
                                return -1 < (t.textContent || r(t)).indexOf(e)
                            }
                    })),
                    lang: ue((function (e) {
                        return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return K.test(e.nodeName)
                    },
                    input: function (e) {
                        return G.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function () {
                        return [0]
                    })),
                    last: ge((function (e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    })),
                    gt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function _e(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = x++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var u, c, f, d = [E, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === E && u[1] === a) return d[2] = u[2];
                                if ((c[o] = d)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function xe(e, t, n, i, r, o) {
            return i && !i[_] && (i = xe(i)), r && !r[_] && (r = xe(r, o)), ue((function (o, s, a, l) {
                var u, c, f, d = [],
                    h = [],
                    p = s.length,
                    m = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !o && t ? m : Ee(m, d, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : g;
                if (n && n(g, v, a, l), i)
                    for (u = Ee(v, h), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(g[c] = f);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && -1 < (u = r ? q(o, f) : d[c]) && (o[u] = !(s[u] = f))
                    }
                } else v = Ee(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : j.apply(s, v)
            }))
        }

        function Ce(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = _e((function (e) {
                    return e === t
                }), a, !0), f = _e((function (e) {
                    return -1 < q(t, e)
                }), a, !0), d = [function (e, n, i) {
                    var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) d = [_e(we(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return xe(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && be(e))
                    }
                    d.push(n)
                } return we(d)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
            var n, r, o, s, a, l, u, c = T[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = i.preFilter; a;) {
                for (s in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = $.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = Y[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
        }, a = ae.compile = function (e, t) {
            var n, r, o, a, l, c, f = [],
                p = [],
                g = S[e + " "];
            if (!g) {
                for (t || (t = s(e)), n = t.length; n--;)(g = Ce(t[n]))[_] ? f.push(g) : p.push(g);
                (g = S(e, (r = p, a = 0 < (o = f).length, l = 0 < r.length, c = function (e, t, n, s, c) {
                    var f, p, g, v = 0,
                        y = "0",
                        b = e && [],
                        _ = [],
                        w = u,
                        x = e || l && i.find.TAG("*", c),
                        C = E += null == w ? 1 : Math.random() || .1,
                        T = x.length;
                    for (c && (u = t == h || t || c); y !== T && null != (f = x[y]); y++) {
                        if (l && f) {
                            for (p = 0, t || f.ownerDocument == h || (d(f), n = !m); g = r[p++];)
                                if (g(f, t || h, n)) {
                                    s.push(f);
                                    break
                                } c && (E = C)
                        }
                        a && ((f = !g && f) && v--, e && b.push(f))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; g = o[p++];) g(b, _, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || _[y] || (_[y] = L.call(s));
                            _ = Ee(_)
                        }
                        j.apply(s, _), c && !e && 0 < _.length && 1 < v + o.length && ae.uniqueSort(s)
                    }
                    return c && (E = C, u = w), b
                }, a ? ue(c) : c))).selector = e
            }
            return g
        }, l = ae.select = function (e, t, n, r) {
            var o, l, u, c, f, d = "function" == typeof e && e,
                h = !r && s(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                    if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && be(l))) return j.apply(n, r), n;
                        break
                    }
            }
            return (d || a(e, h))(r, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ce((function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        })), ce((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || fe("type|href|height|width", (function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ce((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || fe("value", (function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ce((function (e) {
            return null == e.getAttribute("disabled")
        })) || fe(P, (function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
    }(e);
    w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
    var C = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = w.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, t, n) {
        return p(t) ? w.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? w.grep(e, (function (e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function (e) {
            return -1 < a.call(t, e) !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function () {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function (e) {
            return !!N(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
        }
    });
    var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = g.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, D = w(g);
    var O = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return C(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function (e) {
            return I(e, "nextSibling")
        },
        prev: function (e) {
            return I(e, "previousSibling")
        },
        nextAll: function (e) {
            return C(e, "nextSibling")
        },
        prevAll: function (e) {
            return C(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function (e, t) {
        w.fn[e] = function (n, i) {
            var r = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (j[e] || w.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var q = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function F(e, t, n, i) {
        var r;
        try {
            e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(q) || [], (function (e, t) {
            n[t] = !0
        })), n) : w.extend({}, e);
        var i, r, o, s, a = [],
            l = [],
            u = -1,
            c = function () {
                for (s = s || e.once, o = i = !0; l.length; u = -1)
                    for (r = l.shift(); ++u < a.length;) !1 === a[u].apply(r[0], r[1]) && e.stopOnFalse && (u = a.length, r = !1);
                e.memory || (r = !1), i = !1, s && (a = r ? [] : "")
            },
            f = {
                add: function () {
                    return a && (r && !i && (u = a.length - 1, l.push(r)), function t(n) {
                        w.each(n, (function (n, i) {
                            p(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), r && !i && c()), this
                },
                remove: function () {
                    return w.each(arguments, (function (e, t) {
                        for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= u && u--
                    })), this
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = r = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], r || i || (a = r = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred((function (t) {
                            w.each(n, (function (n, i) {
                                var r = p(e[i[4]]) && e[i[4]];
                                o[i[1]]((function () {
                                    var e = r && r.apply(this, arguments);
                                    e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function (t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    u = function () {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, p(u) ? r ? u.call(e, s(o, n, P, r), s(o, n, R, r)) : (o++, u.call(e, s(o, n, P, r), s(o, n, R, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function () {
                                        try {
                                            u()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (i !== R && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred((function (e) {
                            n[0][3].add(s(0, e, p(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, p(t) ? t : P)), n[2][3].add(s(0, e, p(i) ? i : R))
                        })).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                o = {};
            return w.each(n, (function (e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add((function () {
                    i = a
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            })), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = r.call(arguments),
                s = w.Deferred(),
                a = function (e) {
                    return function (n) {
                        i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || s.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (F(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
            for (; n--;) F(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var M = w.Deferred();

    function B() {
        g.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
    }
    w.fn.ready = function (e) {
        return M.then(e).catch((function (e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || M.resolveWith(g, [w])
        }
    }), w.ready.then = M.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var W = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (a in r = !0, n) W(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, p(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(w(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        z = /^-ms-/,
        $ = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace($, U)
    }
    var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = w.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[V(t)] = n;
            else
                for (i in t) r[V(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(q) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var X = new Y,
        G = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function (e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function (e, t) {
            G.remove(e, t)
        },
        _data: function (e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function (e, t) {
            X.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), Z(o, i, r[i]));
                    X.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function () {
                G.set(this, e)
            })) : W(this, (function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each((function () {
                    G.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each((function () {
                G.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                w.dequeue(e, t)
            }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: w.Callbacks("once memory").add((function () {
                    X.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function (e) {
            return this.each((function () {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = w.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = X.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = g.documentElement,
        re = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    ie.getRootNode && (re = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
    };

    function ae(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) w.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, w.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var le = {};

    function ue(e, t) {
        for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && se(i) && (u[c] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = le[a]) || (o = s.body.appendChild(s.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    w.fn.extend({
        show: function () {
            return ue(this, !0)
        },
        hide: function () {
            return ue(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                se(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    ce = g.createDocumentFragment().appendChild(g.createElement("div")), (fe = g.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", h.option = !!ce.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(o) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            w.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (i && -1 < w.inArray(o, i)) r && r.push(o);
            else if (u = re(o), s = ge(f.appendChild(o), "script"), u && ve(s), n)
            for (c = 0; o = s[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    var _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Ee() {
        return !1
    }

    function xe(e, t) {
        return e === function () {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ce(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function (e) {
            return w().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), e.each((function () {
            w.event.add(this, t, r, i, n)
        }))
    }

    function Te(e, t, n) {
        n ? (X.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var i, o, s = X.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = r.call(arguments), X.set(this, t, s), i = n(this, t), this[t](), s !== (o = X.get(this, t)) || i ? X.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else s.length && (X.set(this, t, {
                    value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, h, p, m, g = X.get(e);
            if (Q(e))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(ie, r), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(q) || [""]).length; u--;) h = m = (a = _e.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, c = w.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[h] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, h, p, m, g = X.hasData(e) && X.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(q) || [""]).length; u--;)
                    if (h = m = (a = _e.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = w.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(e, h + t[u], n, i, !0);
                w.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, s, a = new Array(arguments.length),
                l = w.event.fix(e),
                u = (X.get(this, "events") || Object.create(null))[l.type] || [],
                c = w.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (s = w.event.handlers.call(this, l, u), t = 0;
                    (r = s[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < w(r, this).index(u) : w.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && Te(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && Te(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && k(t, "input") && X.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return Te(this, e, xe), !1
            },
            trigger: function () {
                return Te(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function (e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function () {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var Se = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, i, r, o, s, a;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (a = X.get(e).events))
                for (r in X.remove(t, "handle events"), a)
                    for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
            G.hasData(e) && (o = G.access(e), s = w.extend({}, o), G.set(t, s))
        }
    }

    function je(e, t, n, i) {
        t = o(t);
        var r, s, a, l, u, c, f = 0,
            d = e.length,
            m = d - 1,
            g = t[0],
            v = p(g);
        if (v || 1 < d && "string" == typeof g && !h.checkClone && ke.test(g)) return e.each((function (r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i)
        }));
        if (d && (s = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
            for (l = (a = w.map(ge(r, "script"), De)).length; f < d; f++) u = r, f !== m && (u = w.clone(u, !0, !0), l && w.merge(a, ge(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument, w.map(a, Le), f = 0; f < l; f++) u = a[f], pe.test(u.type || "") && !X.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : y(u.textContent.replace(Ae, ""), u, c))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(ge(i)), i.parentNode && (n && re(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                f = re(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = ge(c), i = 0, r = (o = ge(e)).length; i < r; i++) a = o[i], "input" === (u = (l = s[i]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), s = s || ge(c), i = 0, r = o.length; i < r; i++) Oe(o[i], s[i]);
                else Oe(e, c);
            return 0 < (s = ge(c, "script")).length && ve(s, !f && ge(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return W(this, (function (e) {
                return void 0 === e ? w.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function () {
            return je(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            }))
        },
        prepend: function () {
            return je(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function () {
            return je(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function () {
            return je(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return w.clone(this, e, t)
            }))
        },
        html: function (e) {
            return W(this, (function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return je(this, arguments, (function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Pe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Re = function (e, t, n) {
            var i, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            for (r in i = n.call(e), t) e.style[r] = o[r];
            return i
        },
        Fe = new RegExp(ne.join("|"), "i");

    function He(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Pe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = w.style(e, t)), !h.pixelBoxStyles() && qe.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Me(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ie.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, s, a, l, u = g.createElement("div"),
            c = g.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), r
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), o
            },
            reliableTrDimensions: function () {
                var t, n, i, r;
                return null == a && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        We = g.createElement("div").style,
        ze = {};

    function $e(e) {
        return w.cssProps[e] || ze[e] || (e in We ? e : ze[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                if ((e = Be[n] + t) in We) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Xe(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ge(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function Ke(e, t, n) {
        var i = Pe(e),
            r = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            o = r,
            s = He(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (qe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!h.boxSizingReliable() && r || !h.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Ge(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function Je(e, t, n, i, r) {
        return new Je.prototype.init(e, t, n, i, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = V(t),
                    l = Ve.test(t),
                    u = e.style;
                if (l || (t = $e(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = V(t);
            return Ve.test(t) || (t = $e(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = He(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], (function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Ue.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : Re(e, Qe, (function () {
                    return Ke(e, t, i)
                }))
            },
            set: function (e, n, i) {
                var r, o = Pe(e),
                    s = !h.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                    l = i ? Ge(e, t, i, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ge(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Xe(0, n, l)
            }
        }
    })), w.cssHooks.marginLeft = Me(h.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Xe)
    })), w.fn.extend({
        css: function (e, t) {
            return W(this, (function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Pe(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = Je).prototype = {
        constructor: Je,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Je.prototype.init, w.fx.step = {};
    var Ze, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function ot() {
        et && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout((function () {
            Ze = void 0
        })), Ze = Date.now()
    }

    function at(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, n) {
        for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ut(e, t, n) {
        var i, r, o = 0,
            s = ut.prefilters.length,
            a = w.Deferred().always((function () {
                delete l.elem
            })),
            l = function () {
                if (r) return !1;
                for (var t = Ze || st(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); o < s; o++)
            if (i = ut.prefilters[o].call(u, e, c, u.opts)) return p(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(c, lt, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    w.Animation = w.extend(ut, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            p(e) ? (t = e, e = ["*"]) : e = e.match(q);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                m = e.nodeType && se(e),
                g = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always((function () {
                    d.always((function () {
                        s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), t)
                if (r = t[i], it.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    h[i] = g && g[i] || w.style(e, i)
                } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = X.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = w.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (d.done((function () {
                        p.display = u
                    })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(e, "fxshow", {
                    display: u
                }), o && (g.hidden = !m), m && ue([e], !0), d.done((function () {
                    for (i in m || ue([e]), X.remove(e, "fxshow"), h) w.style(e, i, h[i])
                }))), l = lt(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = w.isEmptyObject(e),
                o = w.speed(t, n, i),
                s = function () {
                    var t = ut(this, w.extend({}, e), o);
                    (r || X.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = w.timers,
                    s = X.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || w.dequeue(this, e)
            }))
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each((function () {
                var t, n = X.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = w.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, r)
        }
    })), w.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), w.timers = [], w.fx.tick = function () {
        var e, t = 0,
            n = w.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), Ze = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        et || (et = !0, ot())
    }, w.fx.stop = function () {
        et = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        }))
    }, tt = g.createElement("input"), nt = g.createElement("select").appendChild(g.createElement("option")), tt.type = "checkbox", h.checkOn = "" !== tt.value, h.optSelected = nt.selected, (tt = g.createElement("input")).value = "t", tt.type = "radio", h.radioValue = "t" === tt.value;
    var ct, ft = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each((function () {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(q);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = ft[t] || w.find.attr;
        ft[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = ft[s], ft[s] = r, r = null != n(e, t, i) ? s : null, ft[s] = o), r
        }
    }));
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(q) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
    }
    w.fn.extend({
        prop: function (e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each((function () {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (p(e)) return this.each((function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            }));
            if ((t = gt(e)).length)
                for (; n = this[l++];)
                    if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (p(e)) return this.each((function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = gt(e)).length)
                for (; n = this[l++];)
                    if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            })) : this.each((function () {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = w(this), s = gt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = mt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + pt(mt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = p(e), this.each((function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }))) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : pt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, l, u, f, d, h, v = [i || g],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = a = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !m(i)) {
                    for (l = d.delegateType || y, yt.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;
                    a === (i.ownerDocument || g) && v.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = v[o++]) && !t.isPropagationStopped();) h = s, t.type = 1 < o ? l : d.bindType || y, (f = (X.get(s, "events") || Object.create(null))[t.type] && X.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && Q(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Q(i) || u && p(i[y]) && !m(i) && ((a = i[u]) && (i[u] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, bt), i[y](), t.isPropagationStopped() && h.removeEventListener(y, bt), w.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this,
                    r = X.access(i, t);
                r || i.addEventListener(e, n, !0), X.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this.document || this,
                    r = X.access(i, t) - 1;
                r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0), X.remove(i, t))
            }
        }
    }));
    var _t = e.location,
        wt = {
            guid: Date.now()
        },
        Et = /\?/;
    w.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, (function (e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var xt = /\[\]$/,
        Ct = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function kt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) w.each(t, (function (t, r) {
            n || xt.test(e) ? i(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) kt(e + "[" + r + "]", t[r], n, i)
    }
    w.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = p(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function () {
            r(this.name, this.value)
        }));
        else
            for (n in e) kt(n, e[n], t, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map((function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !de.test(e))
            })).map((function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            })).get()
        }
    });
    var At = /%20/g,
        Nt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        It = {},
        qt = {},
        Pt = "*/".concat("*"),
        Rt = g.createElement("a");

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(q) || [];
            if (p(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Ht(e, t, n, i) {
        var r = {},
            o = e === qt;

        function s(a) {
            var l;
            return r[a] = !0, w.each(e[a] || [], (function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Mt(e, t) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Rt.href = _t.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Mt(Mt(e, w.ajaxSettings), t) : Mt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(qt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, r, o, s, a, l, u, c, f, d, h = w.ajaxSetup({}, n),
                p = h.context || h,
                m = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = h.statusCode || {},
                _ = {},
                E = {},
                x = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Lt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return u ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return i && i.abort(t), T(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || _t.href) + "").replace(jt, _t.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Ht(It, h, n, C), u) return C;
            for (f in (c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), r = h.url.replace(Nt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (Et.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Dt, "$1"), d = (Et.test(r) ? "&" : "?") + "_=" + wt.guid++ + d), h.url = r + d), h.ifModified && (w.lastModified[r] && C.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || u)) return C.abort();
            if (x = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Ht(qt, h, n, C)) {
                if (C.readyState = 1, c && m.trigger("ajaxSend", [C, h]), u) return C;
                h.async && 0 < h.timeout && (a = e.setTimeout((function () {
                    C.abort("timeout")
                }), h.timeout));
                try {
                    u = !1, i.send(_, T)
                } catch (t) {
                    if (u) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, n, s, l) {
                var f, d, g, _, E, x = n;
                u || (u = !0, a && e.clearTimeout(a), i = void 0, o = l || "", C.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, s && (_ = function (e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, C, s)), !f && -1 < w.inArray("script", h.dataTypes) && w.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), _ = function (e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, C, f), f ? (h.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (w.lastModified[r] = E), (E = C.getResponseHeader("etag")) && (w.etag[r] = E)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, d = _.data, f = !(g = _.error))) : (g = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || x) + "", f ? v.resolveWith(p, [d, x, C]) : v.rejectWith(p, [C, x, g]), C.statusCode(b), b = void 0, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : g]), y.fireWith(p, [C, x]), c && (m.trigger("ajaxComplete", [C, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function (e, t) {
        w[t] = function (e, n, i, r) {
            return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function (e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                w.globalEval(e, t, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function (e) {
            return p(e) ? this.each((function (t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function (e) {
            var t = p(e);
            return this.each((function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Wt = w.ajaxSettings.xhr();
    h.cors = !!Wt && "withCredentials" in Wt, h.ajax = Wt = !!Wt, w.ajaxTransport((function (t) {
        var n, i;
        if (h.cors || Wt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function () {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (i, r) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    }));
    var zt, $t = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = $t.pop() || w.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || w.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always((function () {
            void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), s && p(o) && o(s[0]), s = o = void 0
        })), "script"
    })), h.createHTMLDocument = ((zt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
        var i, r, o
    }, w.fn.load = function (e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = pt(e.slice(a)), e = e.slice(0, a)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            s.each((function () {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, (function (t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, u = w.css(e, "position"),
                c = w(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(i, "marginTop", !0),
                    left: t.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return W(this, (function (e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }), e, i, arguments.length)
        }
    })), w.each(["top", "left"], (function (e, t) {
        w.cssHooks[t] = Me(h.pixelPosition, (function (e, n) {
            if (n) return n = He(e, t), qe.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function (n, i) {
            w.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return W(this, (function (t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a)
                }), t, s ? r : void 0, s)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        w.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = p, w.isWindow = m, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function (e) {
        return null == e ? "" : (e + "").replace(Vt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return w
    }));
    var Qt = e.jQuery,
        Yt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Qt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var r = t(e),
            o = r.overflow,
            s = r.overflowX,
            a = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + a + s) ? e : i(n(e))
    }

    function r(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }

    function o(e) {
        return 11 === e ? G : 10 === e ? K : G || K
    }

    function s(e) {
        if (!e) return document.documentElement;
        for (var n = o(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var r = i && i.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? s(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function l(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var u = o.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(r)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || s(e.firstElementChild) === e)
        }(u) ? u : s(u);
        var c = a(e);
        return c.host ? l(c.host, t) : l(e, a(t).host)
    }

    function u(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement,
                o = e.ownerDocument.scrollingElement || r;
            return o[n]
        }
        return e[n]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = u(t, "top"),
            r = u(t, "left"),
            o = n ? -1 : 1;
        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }

    function f(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
    }

    function d(e, t, n, i) {
        return V(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], o(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function h(e) {
        var t = e.body,
            n = e.documentElement,
            i = o(10) && getComputedStyle(n);
        return {
            height: d("Height", t, n, i),
            width: d("Width", t, n, i)
        }
    }

    function p(e) {
        return te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function m(e) {
        var n = {};
        try {
            if (o(10)) {
                n = e.getBoundingClientRect();
                var i = u(e, "top"),
                    r = u(e, "left");
                n.top += i, n.left += r, n.bottom += i, n.right += r
            } else n = e.getBoundingClientRect()
        } catch (e) {}
        var s = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            a = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
            l = a.width || e.clientWidth || s.width,
            c = a.height || e.clientHeight || s.height,
            d = e.offsetWidth - l,
            m = e.offsetHeight - c;
        if (d || m) {
            var g = t(e);
            d -= f(g, "x"), m -= f(g, "y"), s.width -= d, s.height -= m
        }
        return p(s)
    }

    function g(e, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            s = o(10),
            a = "HTML" === n.nodeName,
            l = m(e),
            u = m(n),
            f = i(e),
            d = t(n),
            h = parseFloat(d.borderTopWidth),
            g = parseFloat(d.borderLeftWidth);
        r && a && (u.top = V(u.top, 0), u.left = V(u.left, 0));
        var v = p({
            top: l.top - u.top - h,
            left: l.left - u.left - g,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0, v.marginLeft = 0, !s && a) {
            var y = parseFloat(d.marginTop),
                b = parseFloat(d.marginLeft);
            v.top -= h - y, v.bottom -= h - y, v.left -= g - b, v.right -= g - b, v.marginTop = y, v.marginLeft = b
        }
        return (s && !r ? n.contains(f) : n === f && "BODY" !== f.nodeName) && (v = c(v, n)), v
    }

    function v(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = g(e, n),
            r = V(n.clientWidth, window.innerWidth || 0),
            o = V(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : u(n),
            a = t ? 0 : u(n, "left"),
            l = {
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            };
        return p(l)
    }

    function y(e) {
        var i = e.nodeName;
        if ("BODY" === i || "HTML" === i) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var r = n(e);
        return !!r && y(r)
    }

    function b(e) {
        if (!e || !e.parentElement || o()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function _(e, t, o, s) {
        var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            u = {
                top: 0,
                left: 0
            },
            c = a ? b(e) : l(e, r(t));
        if ("viewport" === s) u = v(c, a);
        else {
            var f;
            "scrollParent" === s ? "BODY" === (f = i(n(t))).nodeName && (f = e.ownerDocument.documentElement) : f = "window" === s ? e.ownerDocument.documentElement : s;
            var d = g(f, c, a);
            if ("HTML" !== f.nodeName || y(c)) u = d;
            else {
                var p = h(e.ownerDocument),
                    m = p.height,
                    _ = p.width;
                u.top += d.top - d.marginTop, u.bottom = m + d.top, u.left += d.left - d.marginLeft, u.right = _ + d.left
            }
        }
        var w = "number" == typeof (o = o || 0);
        return u.left += w ? o : o.left || 0, u.top += w ? o : o.top || 0, u.right -= w ? o : o.right || 0, u.bottom -= w ? o : o.bottom || 0, u
    }

    function w(e) {
        return e.width * e.height
    }

    function E(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = _(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map((function (e) {
                return te({
                    key: e
                }, a[e], {
                    area: w(a[e])
                })
            })).sort((function (e, t) {
                return t.area - e.area
            })),
            u = l.filter((function (e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            })),
            c = 0 < u.length ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function x(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? b(t) : l(t, r(n));
        return g(n, o, i)
    }

    function C(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function (e) {
            return t[e]
        }))
    }

    function S(e, t, n) {
        n = n.split("-")[0];
        var i = C(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[T(a)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function A(t, n, i) {
        var r = void 0 === i ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex((function (e) {
                return e[t] === n
            }));
            var i = k(e, (function (e) {
                return e[t] === n
            }));
            return e.indexOf(i)
        }(t, "name", i));
        return r.forEach((function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = p(n.offsets.popper), n.offsets.reference = p(n.offsets.reference), n = i(n, t))
        })), n
    }

    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = A(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function D(e, t) {
        return e.some((function (e) {
            var n = e.name;
            return e.enabled && n === t
        }))
    }

    function L(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function O() {
        return this.state.isDestroyed = !0, D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[L("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function j(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function I(e, t, n, r) {
        var o = "BODY" === e.nodeName,
            s = o ? e.ownerDocument.defaultView : e;
        s.addEventListener(t, n, {
            passive: !0
        }), o || I(i(s.parentNode), t, n, r), r.push(s)
    }

    function q(e, t, n, r) {
        n.updateBound = r, j(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return I(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function P() {
        this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
            return j(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }(this.reference, this.state))
    }

    function F(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function H(e, t) {
        Object.keys(t).forEach((function (n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && F(t[n]) && (i = "px"), e.style[n] = t[n] + i
        }))
    }

    function M(e, t, n) {
        var i = k(e, (function (e) {
                return e.name === t
            })),
            r = !!i && e.some((function (e) {
                return e.name === n && e.enabled && e.order < i.order
            }));
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function B(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = re.indexOf(e),
            i = re.slice(n + 1).concat(re.slice(0, n));
        return t ? i.reverse() : i
    }

    function W(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map((function (e) {
                return e.trim()
            })),
            a = s.indexOf(k(s, (function (e) {
                return -1 !== e.search(/,|\s/)
            })));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return u = u.map((function (e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return e.reduce((function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }), []).map((function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        return p("%p" === s ? n : i)[t] / 100 * o
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? V(document.documentElement.clientHeight, window.innerHeight || 0) : V(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            }))
        })), u.forEach((function (e, t) {
            e.forEach((function (n, i) {
                F(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            }))
        })), r
    }
    var z = Math.min,
        $ = Math.floor,
        U = Math.round,
        V = Math.max,
        Q = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Y = function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (Q && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }(),
        X = Q && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then((function () {
                    t = !1, e()
                })))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout((function () {
                    t = !1, e()
                }), Y))
            }
        },
        G = Q && !(!window.MSInputMethodContext || !document.documentMode),
        K = Q && /MSIE 10/.test(navigator.userAgent),
        J = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Z = function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        ee = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        te = Object.assign || function (e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        ne = Q && /Firefox/i.test(navigator.userAgent),
        ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        re = ie.slice(3),
        oe = "flip",
        se = "clockwise",
        ae = "counterclockwise",
        le = function () {
            function t(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                J(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = X(this.update.bind(this)), this.options = te({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(te({}, t.Defaults.modifiers, o.modifiers)).forEach((function (e) {
                    r.options.modifiers[e] = te({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                    return te({
                        name: e
                    }, r.options.modifiers[e])
                })).sort((function (e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                })), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return Z(t, [{
                key: "update",
                value: function () {
                    return N.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return O.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return P.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return R.call(this)
                }
            }]), t
        }();
    return le.Utils = ("undefined" == typeof window ? global : window).PopperUtils, le.placements = ie, le.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            u = a ? "width" : "height",
                            c = {
                                start: ee({}, l, o[l]),
                                end: ee({}, l, o[l] + o[u] - s[u])
                            };
                        e.offsets.popper = te({}, s, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = F(+i) ? [+i, 0] : W(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                    var n = t.boundariesElement || s(e.instance.popper);
                    e.instance.reference === n && (n = s(n));
                    var i = L("transform"),
                        r = e.instance.popper.style,
                        o = r.top,
                        a = r.left,
                        l = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var u = _(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = o, r.left = a, r[i] = l, t.boundaries = u;
                    var c = t.priority,
                        f = e.offsets.popper,
                        d = {
                            primary: function (e) {
                                var n = f[e];
                                return f[e] < u[e] && !t.escapeWithReference && (n = V(f[e], u[e])), ee({}, e, n)
                            },
                            secondary: function (e) {
                                var n = "right" === e ? "left" : "top",
                                    i = f[n];
                                return f[e] > u[e] && !t.escapeWithReference && (i = z(f[n], u[e] - ("right" === e ? f.width : f.height))), ee({}, n, i)
                            }
                        };
                    return c.forEach((function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        f = te({}, f, d[t](e))
                    })), e.offsets.popper = f, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = $,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        u = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, n) {
                    var i;
                    if (!M(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0],
                        s = e.offsets,
                        a = s.popper,
                        l = s.reference,
                        u = -1 !== ["left", "right"].indexOf(o),
                        c = u ? "height" : "width",
                        f = u ? "Top" : "Left",
                        d = f.toLowerCase(),
                        h = u ? "left" : "top",
                        m = u ? "bottom" : "right",
                        g = C(r)[c];
                    l[m] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[m] - g)), l[d] + g > a[m] && (e.offsets.popper[d] += l[d] + g - a[m]), e.offsets.popper = p(e.offsets.popper);
                    var v = l[d] + l[c] / 2 - g / 2,
                        y = t(e.instance.popper),
                        b = parseFloat(y["margin" + f]),
                        _ = parseFloat(y["border" + f + "Width"]),
                        w = v - e.offsets.popper[d] - b - _;
                    return w = V(z(a[c] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (ee(i = {}, d, U(w)), ee(i, h, ""), i), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                    if (D(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0],
                        r = T(i),
                        o = e.placement.split("-")[1] || "",
                        s = [];
                    switch (t.behavior) {
                        case oe:
                            s = [i, r];
                            break;
                        case se:
                            s = B(i);
                            break;
                        case ae:
                            s = B(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach((function (a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = T(i);
                        var u = e.offsets.popper,
                            c = e.offsets.reference,
                            f = $,
                            d = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom),
                            h = f(u.left) < f(n.left),
                            p = f(u.right) > f(n.right),
                            m = f(u.top) < f(n.top),
                            g = f(u.bottom) > f(n.bottom),
                            v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g),
                            _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m),
                            w = b || _;
                        (d || v || w) && (e.flipped = !0, (d || v) && (i = s[l + 1]), w && (o = function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = te({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = A(e.instance.modifiers, e, "flip"))
                    })), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = p(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                    if (!M(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = k(e.instance.modifiers, (function (e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        o = k(e.instance.modifiers, (function (e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, u = void 0 === o ? t.gpuAcceleration : o,
                        c = s(e.instance.popper),
                        f = m(c),
                        d = {
                            position: r.position
                        },
                        h = function (e, t) {
                            var n = e.offsets,
                                i = n.popper,
                                r = n.reference,
                                o = U,
                                s = function (e) {
                                    return e
                                },
                                a = o(r.width),
                                l = o(i.width),
                                u = -1 !== ["left", "right"].indexOf(e.placement),
                                c = -1 !== e.placement.indexOf("-"),
                                f = t ? u || c || a % 2 == l % 2 ? o : $ : s,
                                d = t ? o : s;
                            return {
                                left: f(1 == a % 2 && 1 == l % 2 && !c && t ? i.left - 1 : i.left),
                                top: d(i.top),
                                bottom: d(i.bottom),
                                right: f(i.right)
                            }
                        }(e, 2 > window.devicePixelRatio || !ne),
                        p = "bottom" === n ? "top" : "bottom",
                        g = "right" === i ? "left" : "right",
                        v = L("transform");
                    if (l = "bottom" == p ? "HTML" === c.nodeName ? -c.clientHeight + h.bottom : -f.height + h.bottom : h.top, a = "right" == g ? "HTML" === c.nodeName ? -c.clientWidth + h.right : -f.width + h.right : h.left, u && v) d[v] = "translate3d(" + a + "px, " + l + "px, 0)", d[p] = 0, d[g] = 0, d.willChange = "transform";
                    else {
                        var y = "bottom" == p ? -1 : 1,
                            b = "right" == g ? -1 : 1;
                        d[p] = l * y, d[g] = a * b, d.willChange = p + ", " + g
                    }
                    var _ = {
                        "x-placement": e.placement
                    };
                    return e.attributes = te({}, _, e.attributes), e.styles = te({}, d, e.styles), e.arrowStyles = te({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                    return H(e.instance.popper, e.styles),
                        function (e, t) {
                            Object.keys(t).forEach((function (n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            }))
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && H(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function (e, t, n, i, r) {
                    var o = x(r, t, e, n.positionFixed),
                        s = E(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), H(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, le
})),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, (function (e, t, n) {
    "use strict";

    function i(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        }
    }
    var r = i(t),
        o = i(n);

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }

    function l() {
        return l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }, l.apply(this, arguments)
    }

    function u(e, t) {
        return u = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, u(e, t)
    }
    var c = "transitionend",
        f = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var t = r.default(e).css("transition-duration"),
                    n = r.default(e).css("transition-delay"),
                    i = parseFloat(t),
                    o = parseFloat(n);
                return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
            },
            reflow: function (e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function (e) {
                r.default(e).trigger(c)
            },
            supportsTransitionEnd: function () {
                return Boolean(c)
            },
            isElement: function (e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            s = o && f.isElement(o) ? "element" : null === (a = o) || void 0 === a ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    } var a
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? f.findShadowRoot(e.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = r.default.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
    f.jQueryDetection(), r.default.fn.emulateTransitionEnd = function (e) {
        var t = this,
            n = !1;
        return r.default(this).one(f.TRANSITION_END, (function () {
            n = !0
        })), setTimeout((function () {
            n || f.triggerTransitionEnd(t)
        }), e), this
    }, r.default.event.special[f.TRANSITION_END] = {
        bindType: c,
        delegateType: c,
        handle: function (e) {
            if (r.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var d = "bs.alert",
        h = r.default.fn.alert,
        p = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function () {
                r.default.removeData(this._element, d), this._element = null
            }, t._getRootElement = function (e) {
                var t = f.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = r.default(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function (e) {
                var t = r.default.Event("close.bs.alert");
                return r.default(e).trigger(t), t
            }, t._removeElement = function (e) {
                var t = this;
                if (r.default(e).removeClass("show"), r.default(e).hasClass("fade")) {
                    var n = f.getTransitionDurationFromElement(e);
                    r.default(e).one(f.TRANSITION_END, (function (n) {
                        return t._destroyElement(e, n)
                    })).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, t._destroyElement = function (e) {
                r.default(e).detach().trigger("closed.bs.alert").remove()
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this),
                        i = n.data(d);
                    i || (i = new e(this), n.data(d, i)), "close" === t && i[t](this)
                }))
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }]), e
        }();
    r.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p)), r.default.fn.alert = p._jQueryInterface, r.default.fn.alert.Constructor = p, r.default.fn.alert.noConflict = function () {
        return r.default.fn.alert = h, p._jQueryInterface
    };
    var m = "bs.button",
        g = r.default.fn.button,
        v = "active",
        y = '[data-toggle^="button"]',
        b = 'input:not([type="hidden"])',
        _ = ".btn",
        w = function () {
            function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1
            }
            var t = e.prototype;
            return t.toggle = function () {
                var e = !0,
                    t = !0,
                    n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = this._element.querySelector(b);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(v)) e = !1;
                            else {
                                var o = n.querySelector(".active");
                                o && r.default(o).removeClass(v)
                            } e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(v)), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && r.default(this._element).toggleClass(v))
            }, t.dispose = function () {
                r.default.removeData(this._element, m), this._element = null
            }, e._jQueryInterface = function (t, n) {
                return this.each((function () {
                    var i = r.default(this),
                        o = i.data(m);
                    o || (o = new e(this), i.data(m, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]()
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }]), e
        }();
    r.default(document).on("click.bs.button.data-api", y, (function (e) {
        var t = e.target,
            n = t;
        if (r.default(t).hasClass("btn") || (t = r.default(t).closest(_)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var i = t.querySelector(b);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === t.tagName || w._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName)
        }
    })).on("focus.bs.button.data-api blur.bs.button.data-api", y, (function (e) {
        var t = r.default(e.target).closest(_)[0];
        r.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    })), r.default(window).on("load.bs.button.data-api", (function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t],
                r = i.querySelector(b);
            r.checked || r.hasAttribute("checked") ? i.classList.add(v) : i.classList.remove(v)
        }
        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(v) : a.classList.remove(v)
        }
    })), r.default.fn.button = w._jQueryInterface, r.default.fn.button.Constructor = w, r.default.fn.button.noConflict = function () {
        return r.default.fn.button = g, w._jQueryInterface
    };
    var E = "carousel",
        x = "bs.carousel",
        C = r.default.fn[E],
        T = "active",
        S = "next",
        k = "prev",
        A = "slid.bs.carousel",
        N = ".active.carousel-item",
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        L = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        O = {
            TOUCH: "touch",
            PEN: "pen"
        },
        j = function () {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function () {
                this._isSliding || this._slide(S)
            }, t.nextWhenVisible = function () {
                var e = r.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(k)
            }, t.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (e) {
                var t = this;
                this._activeElement = this._element.querySelector(N);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) r.default(this._element).one(A, (function () {
                        return t.to(e)
                    }));
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = e > n ? S : k;
                        this._slide(i, this._items[e])
                    }
            }, t.dispose = function () {
                r.default(this._element).off(".bs.carousel"), r.default.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (e) {
                return e = l({}, D, e), f.typeCheckConfig(E, e, L), e
            }, t._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && r.default(this._element).on("keydown.bs.carousel", (function (t) {
                    return e._keydown(t)
                })), "hover" === this._config.pause && r.default(this._element).on("mouseenter.bs.carousel", (function (t) {
                    return e.pause(t)
                })).on("mouseleave.bs.carousel", (function (t) {
                    return e.cycle(t)
                })), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                    var t = function (t) {
                            e._pointerEvent && O[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function (t) {
                            e._pointerEvent && O[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                return e.cycle(t)
                            }), 500 + e._config.interval))
                        };
                    r.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                        return e.preventDefault()
                    })), this._pointerEvent ? (r.default(this._element).on("pointerdown.bs.carousel", (function (e) {
                        return t(e)
                    })), r.default(this._element).on("pointerup.bs.carousel", (function (e) {
                        return n(e)
                    })), this._element.classList.add("pointer-event")) : (r.default(this._element).on("touchstart.bs.carousel", (function (e) {
                        return t(e)
                    })), r.default(this._element).on("touchmove.bs.carousel", (function (t) {
                        return function (t) {
                            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    })), r.default(this._element).on("touchend.bs.carousel", (function (e) {
                        return n(e)
                    })))
                }
            }, t._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function (e, t) {
                var n = e === S,
                    i = e === k,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === k ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(N)),
                    o = r.default.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return r.default(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    r.default(t).removeClass(T);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && r.default(n).addClass(T)
                }
            }, t._updateInterval = function () {
                var e = this._activeElement || this._element.querySelector(N);
                if (e) {
                    var t = parseInt(e.getAttribute("data-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, t._slide = function (e, t) {
                var n, i, o, s = this,
                    a = this._element.querySelector(N),
                    l = this._getItemIndex(a),
                    u = t || a && this._getItemByDirection(e, a),
                    c = this._getItemIndex(u),
                    d = Boolean(this._interval);
                if (e === S ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), u && r.default(u).hasClass(T)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
                    var h = r.default.Event(A, {
                        relatedTarget: u,
                        direction: o,
                        from: l,
                        to: c
                    });
                    if (r.default(this._element).hasClass("slide")) {
                        r.default(u).addClass(i), f.reflow(u), r.default(a).addClass(n), r.default(u).addClass(n);
                        var p = f.getTransitionDurationFromElement(a);
                        r.default(a).one(f.TRANSITION_END, (function () {
                            r.default(u).removeClass(n + " " + i).addClass(T), r.default(a).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout((function () {
                                return r.default(s._element).trigger(h)
                            }), 0)
                        })).emulateTransitionEnd(p)
                    } else r.default(a).removeClass(T), r.default(u).addClass(T), this._isSliding = !1, r.default(this._element).trigger(h);
                    d && this.cycle()
                }
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this).data(x),
                        i = l({}, D, r.default(this).data());
                    "object" == typeof t && (i = l({}, i, t));
                    var o = "string" == typeof t ? t : i.slide;
                    if (n || (n = new e(this, i), r.default(this).data(x, n)), "number" == typeof t) n.to(t);
                    else if ("string" == typeof o) {
                        if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                        n[o]()
                    } else i.interval && i.ride && (n.pause(), n.cycle())
                }))
            }, e._dataApiClickHandler = function (t) {
                var n = f.getSelectorFromElement(this);
                if (n) {
                    var i = r.default(n)[0];
                    if (i && r.default(i).hasClass("carousel")) {
                        var o = l({}, r.default(i).data(), r.default(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), e._jQueryInterface.call(r.default(i), o), s && r.default(i).data(x).to(s), t.preventDefault()
                    }
                }
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return D
                }
            }]), e
        }();
    r.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", j._dataApiClickHandler), r.default(window).on("load.bs.carousel.data-api", (function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = r.default(e[t]);
            j._jQueryInterface.call(i, i.data())
        }
    })), r.default.fn[E] = j._jQueryInterface, r.default.fn[E].Constructor = j, r.default.fn[E].noConflict = function () {
        return r.default.fn[E] = C, j._jQueryInterface
    };
    var I = "collapse",
        q = "bs.collapse",
        P = r.default.fn[I],
        R = "show",
        F = "collapse",
        H = "collapsing",
        M = "collapsed",
        B = "width",
        W = '[data-toggle="collapse"]',
        z = {
            toggle: !0,
            parent: ""
        },
        $ = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        U = function () {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(W)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = f.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                            return t === e
                        }));
                    null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function () {
                r.default(this._element).hasClass(R) ? this.hide() : this.show()
            }, t.show = function () {
                var t, n, i = this;
                if (!(this._isTransitioning || r.default(this._element).hasClass(R) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(F)
                    }))).length && (t = null), t && (n = r.default(t).not(this._selector).data(q)) && n._isTransitioning))) {
                    var o = r.default.Event("show.bs.collapse");
                    if (r.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(r.default(t).not(this._selector), "hide"), n || r.default(t).data(q, null));
                        var s = this._getDimension();
                        r.default(this._element).removeClass(F).addClass(H), this._element.style[s] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass(M).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = f.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(f.TRANSITION_END, (function () {
                            r.default(i._element).removeClass(H).addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), r.default(i._element).trigger("shown.bs.collapse")
                        })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, t.hide = function () {
                var e = this;
                if (!this._isTransitioning && r.default(this._element).hasClass(R)) {
                    var t = r.default.Event("hide.bs.collapse");
                    if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", f.reflow(this._element), r.default(this._element).addClass(H).removeClass("collapse show");
                        var i = this._triggerArray.length;
                        if (i > 0)
                            for (var o = 0; o < i; o++) {
                                var s = this._triggerArray[o],
                                    a = f.getSelectorFromElement(s);
                                null !== a && (r.default([].slice.call(document.querySelectorAll(a))).hasClass(R) || r.default(s).addClass(M).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var l = f.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(f.TRANSITION_END, (function () {
                            e.setTransitioning(!1), r.default(e._element).removeClass(H).addClass(F).trigger("hidden.bs.collapse")
                        })).emulateTransitionEnd(l)
                    }
                }
            }, t.setTransitioning = function (e) {
                this._isTransitioning = e
            }, t.dispose = function () {
                r.default.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (e) {
                return (e = l({}, z, e)).toggle = Boolean(e.toggle), f.typeCheckConfig(I, e, $), e
            }, t._getDimension = function () {
                return r.default(this._element).hasClass(B) ? B : "height"
            }, t._getParent = function () {
                var t, n = this;
                f.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(t.querySelectorAll(i));
                return r.default(o).each((function (t, i) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                })), t
            }, t._addAriaAndCollapsedClass = function (e, t) {
                var n = r.default(e).hasClass(R);
                t.length && r.default(t).toggleClass(M, !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function (e) {
                var t = f.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this),
                        i = n.data(q),
                        o = l({}, z, n.data(), "object" == typeof t && t ? t : {});
                    if (!i && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), i || (i = new e(this, o), n.data(q, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return z
                }
            }]), e
        }();
    r.default(document).on("click.bs.collapse.data-api", W, (function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = r.default(this),
            n = f.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(n));
        r.default(i).each((function () {
            var e = r.default(this),
                n = e.data(q) ? "toggle" : t.data();
            U._jQueryInterface.call(e, n)
        }))
    })), r.default.fn[I] = U._jQueryInterface, r.default.fn[I].Constructor = U, r.default.fn[I].noConflict = function () {
        return r.default.fn[I] = P, U._jQueryInterface
    };
    var V = "dropdown",
        Q = "bs.dropdown",
        Y = r.default.fn[V],
        X = new RegExp("38|40|27"),
        G = "disabled",
        K = "show",
        J = "dropdown-menu-right",
        Z = "hide.bs.dropdown",
        ee = "hidden.bs.dropdown",
        te = "click.bs.dropdown.data-api",
        ne = "keydown.bs.dropdown.data-api",
        ie = '[data-toggle="dropdown"]',
        re = ".dropdown-menu",
        oe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        se = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        ae = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !r.default(this._element).hasClass(G)) {
                    var t = r.default(this._menu).hasClass(K);
                    e._clearMenus(), t || this.show(!0)
                }
            }, t.show = function (t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass(G) || r.default(this._menu).hasClass(K))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = r.default.Event("show.bs.dropdown", n),
                        s = e._getParentFromElement(this._element);
                    if (r.default(s).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = s : f.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && r.default(s).addClass("position-static"), this._popper = new o.default(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === r.default(s).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), r.default(this._menu).toggleClass(K), r.default(s).toggleClass(K).trigger(r.default.Event("shown.bs.dropdown", n))
                    }
                }
            }, t.hide = function () {
                if (!this._element.disabled && !r.default(this._element).hasClass(G) && r.default(this._menu).hasClass(K)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = r.default.Event(Z, t),
                        i = e._getParentFromElement(this._element);
                    r.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass(K), r.default(i).toggleClass(K).trigger(r.default.Event(ee, t)))
                }
            }, t.dispose = function () {
                r.default.removeData(this._element, Q), r.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                r.default(this._element).on("click.bs.dropdown", (function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                }))
            }, t._getConfig = function (e) {
                return e = l({}, this.constructor.Default, r.default(this._element).data(), e), f.typeCheckConfig(V, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(re))
                }
                return this._menu
            }, t._getPlacement = function () {
                var e = r.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = r.default(this._menu).hasClass(J) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : r.default(this._menu).hasClass(J) && (t = "bottom-end"), t
            }, t._detectNavbar = function () {
                return r.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function () {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element)), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), l({}, e, this._config.popperConfig)
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this).data(Q);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), r.default(this).data(Q, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, e._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = [].slice.call(document.querySelectorAll(ie)), i = 0, o = n.length; i < o; i++) {
                        var s = e._getParentFromElement(n[i]),
                            a = r.default(n[i]).data(Q),
                            l = {
                                relatedTarget: n[i]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), a) {
                            var u = a._menu;
                            if (r.default(s).hasClass(K) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && r.default.contains(s, t.target))) {
                                var c = r.default.Event(Z, l);
                                r.default(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), n[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), r.default(u).removeClass(K), r.default(s).removeClass(K).trigger(r.default.Event(ee, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function (e) {
                var t, n = f.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || r.default(t.target).closest(re).length) : !X.test(t.which)) && !this.disabled && !r.default(this).hasClass(G)) {
                    var n = e._getParentFromElement(this),
                        i = r.default(n).hasClass(K);
                    if (i || 27 !== t.which) {
                        if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && r.default(n.querySelector(ie)).trigger("focus"), void r.default(this).trigger("click");
                        var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                            return r.default(e).is(":visible")
                        }));
                        if (0 !== o.length) {
                            var s = o.indexOf(t.target);
                            38 === t.which && s > 0 && s--, 40 === t.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    }
                }
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return oe
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return se
                }
            }]), e
        }();
    r.default(document).on(ne, ie, ae._dataApiKeydownHandler).on(ne, re, ae._dataApiKeydownHandler).on(te + " keyup.bs.dropdown.data-api", ae._clearMenus).on(te, ie, (function (e) {
        e.preventDefault(), e.stopPropagation(), ae._jQueryInterface.call(r.default(this), "toggle")
    })).on(te, ".dropdown form", (function (e) {
        e.stopPropagation()
    })), r.default.fn[V] = ae._jQueryInterface, r.default.fn[V].Constructor = ae, r.default.fn[V].noConflict = function () {
        return r.default.fn[V] = Y, ae._jQueryInterface
    };
    var le = "bs.modal",
        ue = r.default.fn.modal,
        ce = "modal-open",
        fe = "fade",
        de = "show",
        he = "modal-static",
        pe = "hidden.bs.modal",
        me = "show.bs.modal",
        ge = "focusin.bs.modal",
        ve = "resize.bs.modal",
        ye = "click.dismiss.bs.modal",
        be = "keydown.dismiss.bs.modal",
        _e = "mousedown.dismiss.bs.modal",
        we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ee = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        xe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Ce = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function (e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    var n = r.default.Event(me, {
                        relatedTarget: e
                    });
                    r.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, r.default(this._element).hasClass(fe) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on(ye, '[data-dismiss="modal"]', (function (e) {
                        return t.hide(e)
                    })), r.default(this._dialog).on(_e, (function () {
                        r.default(t._element).one("mouseup.dismiss.bs.modal", (function (e) {
                            r.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function () {
                        return t._showElement(e)
                    })))
                }
            }, t.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = r.default.Event("hide.bs.modal");
                    if (r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = r.default(this._element).hasClass(fe);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off(ge), r.default(this._element).removeClass(de), r.default(this._element).off(ye), r.default(this._dialog).off(_e), i) {
                            var o = f.getTransitionDurationFromElement(this._element);
                            r.default(this._element).one(f.TRANSITION_END, (function (e) {
                                return t._hideModal(e)
                            })).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                [window, this._element, this._dialog].forEach((function (e) {
                    return r.default(e).off(".bs.modal")
                })), r.default(document).off(ge), r.default.removeData(this._element, le), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (e) {
                return e = l({}, Ee, e), f.typeCheckConfig("modal", e, xe), e
            }, t._triggerBackdropTransition = function () {
                var e = this,
                    t = r.default.Event("hidePrevented.bs.modal");
                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(he);
                    var i = f.getTransitionDurationFromElement(this._dialog);
                    r.default(this._element).off(f.TRANSITION_END), r.default(this._element).one(f.TRANSITION_END, (function () {
                        e._element.classList.remove(he), n || r.default(e._element).one(f.TRANSITION_END, (function () {
                            e._element.style.overflowY = ""
                        })).emulateTransitionEnd(e._element, i)
                    })).emulateTransitionEnd(i), this._element.focus()
                }
            }, t._showElement = function (e) {
                var t = this,
                    n = r.default(this._element).hasClass(fe),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && f.reflow(this._element), r.default(this._element).addClass(de), this._config.focus && this._enforceFocus();
                var o = r.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    s = function () {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, r.default(t._element).trigger(o)
                    };
                if (n) {
                    var a = f.getTransitionDurationFromElement(this._dialog);
                    r.default(this._dialog).one(f.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._enforceFocus = function () {
                var e = this;
                r.default(document).off(ge).on(ge, (function (t) {
                    document !== t.target && e._element !== t.target && 0 === r.default(e._element).has(t.target).length && e._element.focus()
                }))
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown ? r.default(this._element).on(be, (function (t) {
                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                })) : this._isShown || r.default(this._element).off(be)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? r.default(window).on(ve, (function (t) {
                    return e.handleUpdate(t)
                })) : r.default(window).off(ve)
            }, t._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
                    r.default(document.body).removeClass(ce), e._resetAdjustments(), e._resetScrollbar(), r.default(e._element).trigger(pe)
                }))
            }, t._removeBackdrop = function () {
                this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (e) {
                var t = this,
                    n = r.default(this._element).hasClass(fe) ? fe : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on(ye, (function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        })), n && f.reflow(this._backdrop), r.default(this._backdrop).addClass(de), !e) return;
                    if (!n) return void e();
                    var i = f.getTransitionDurationFromElement(this._backdrop);
                    r.default(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    r.default(this._backdrop).removeClass(de);
                    var o = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (r.default(this._element).hasClass(fe)) {
                        var s = f.getTransitionDurationFromElement(this._backdrop);
                        r.default(this._backdrop).one(f.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else e && e()
            }, t._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(we)),
                        n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    r.default(t).each((function (t, n) {
                        var i = n.style.paddingRight,
                            o = r.default(n).css("padding-right");
                        r.default(n).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    })), r.default(n).each((function (t, n) {
                        var i = n.style.marginRight,
                            o = r.default(n).css("margin-right");
                        r.default(n).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    }));
                    var i = document.body.style.paddingRight,
                        o = r.default(document.body).css("padding-right");
                    r.default(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                r.default(document.body).addClass(ce)
            }, t._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(we));
                r.default(e).each((function (e, t) {
                    var n = r.default(t).data("padding-right");
                    r.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                }));
                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                r.default(t).each((function (e, t) {
                    var n = r.default(t).data("margin-right");
                    void 0 !== n && r.default(t).css("margin-right", n).removeData("margin-right")
                }));
                var n = r.default(document.body).data("padding-right");
                r.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (t, n) {
                return this.each((function () {
                    var i = r.default(this).data(le),
                        o = l({}, Ee, r.default(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, o), r.default(this).data(le, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else o.show && i.show(n)
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ee
                }
            }]), e
        }();
    r.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
        var t, n = this,
            i = f.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var o = r.default(t).data(le) ? "toggle" : l({}, r.default(t).data(), r.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = r.default(t).one(me, (function (e) {
            e.isDefaultPrevented() || s.one(pe, (function () {
                r.default(n).is(":visible") && n.focus()
            }))
        }));
        Ce._jQueryInterface.call(r.default(t), o, this)
    })), r.default.fn.modal = Ce._jQueryInterface, r.default.fn.modal.Constructor = Ce, r.default.fn.modal.noConflict = function () {
        return r.default.fn.modal = ue, Ce._jQueryInterface
    };
    var Te = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Se = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        ke = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Ae(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
                var i = o[e],
                    s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach((function (e) {
                    (function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Te.indexOf(n) || Boolean(Se.test(e.nodeValue) || ke.test(e.nodeValue));
                        for (var i = t.filter((function (e) {
                                return e instanceof RegExp
                            })), r = 0, o = i.length; r < o; r++)
                            if (i[r].test(n)) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                }))
            }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Ne = "tooltip",
        De = "bs.tooltip",
        Le = r.default.fn.tooltip,
        Oe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        Ie = "fade",
        qe = "show",
        Pe = "show",
        Re = "out",
        Fe = "hover",
        He = "focus",
        Me = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Be = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        We = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        ze = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        $e = function () {
            function e(e, t) {
                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = r.default(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (r.default(this.getTipElement()).hasClass(qe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function () {
                clearTimeout(this._timeout), r.default.removeData(this.element, this.constructor.DATA_KEY), r.default(this.element).off(this.constructor.EVENT_KEY), r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && r.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = r.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    r.default(this.element).trigger(t);
                    var n = f.findShadowRoot(this.element),
                        i = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var s = this.getTipElement(),
                        a = f.getUID(this.constructor.NAME);
                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && r.default(s).addClass(Ie);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c = this._getContainer();
                    r.default(s).data(this.constructor.DATA_KEY, this), r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(s).appendTo(c), r.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, s, this._getPopperConfig(u)), r.default(s).addClass(qe), r.default(s).addClass(this.config.customClass), "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                    var d = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, r.default(e.element).trigger(e.constructor.Event.SHOWN), t === Re && e._leave(null, e)
                    };
                    if (r.default(this.tip).hasClass(Ie)) {
                        var h = f.getTransitionDurationFromElement(this.tip);
                        r.default(this.tip).one(f.TRANSITION_END, d).emulateTransitionEnd(h)
                    } else d()
                }
            }, t.hide = function (e) {
                var t = this,
                    n = this.getTipElement(),
                    i = r.default.Event(this.constructor.Event.HIDE),
                    o = function () {
                        t._hoverState !== Pe && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), r.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (r.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (r.default(n).removeClass(qe), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, r.default(this.tip).hasClass(Ie)) {
                        var s = f.getTransitionDurationFromElement(n);
                        r.default(n).one(f.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (e) {
                r.default(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(r.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), r.default(e).removeClass("fade show")
            }, t.setElementContent = function (e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Ae(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? r.default(t).parent().is(e) || e.empty().append(t) : e.text(r.default(t).text())
            }, t.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getPopperConfig = function (e) {
                var t = this;
                return l({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function (e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function (e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, t._getOffset = function () {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element)), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function () {
                return !1 === this.config.container ? document.body : f.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
            }, t._getAttachment = function (e) {
                return Me[e.toUpperCase()]
            }, t._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach((function (t) {
                    if ("click" === t) r.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                        return e.toggle(t)
                    }));
                    else if ("manual" !== t) {
                        var n = t === Fe ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === Fe ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        r.default(e.element).on(n, e.config.selector, (function (t) {
                            return e._enter(t)
                        })).on(i, e.config.selector, (function (t) {
                            return e._leave(t)
                        }))
                    }
                })), this._hideModalHandler = function () {
                    e.element && e.hide()
                }, r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? He : Fe] = !0), r.default(t.getTipElement()).hasClass(qe) || t._hoverState === Pe ? t._hoverState = Pe : (clearTimeout(t._timeout), t._hoverState = Pe, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function () {
                    t._hoverState === Pe && t.show()
                }), t.config.delay.show) : t.show())
            }, t._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? He : Fe] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Re, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function () {
                    t._hoverState === Re && t.hide()
                }), t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function (e) {
                var t = r.default(this.element).data();
                return Object.keys(t).forEach((function (e) {
                    -1 !== je.indexOf(e) && delete t[e]
                })), "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), f.typeCheckConfig(Ne, e, this.constructor.DefaultType), e.sanitize && (e.template = Ae(e.template, e.whiteList, e.sanitizeFn)), e
            }, t._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function () {
                var e = r.default(this.getTipElement()),
                    t = e.attr("class").match(Oe);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function (e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function () {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (r.default(e).removeClass(Ie), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this),
                        i = n.data(De),
                        o = "object" == typeof t && t;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, o), n.data(De, i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Be
                }
            }, {
                key: "NAME",
                get: function () {
                    return Ne
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return De
                }
            }, {
                key: "Event",
                get: function () {
                    return ze
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return We
                }
            }]), e
        }();
    r.default.fn.tooltip = $e._jQueryInterface, r.default.fn.tooltip.Constructor = $e, r.default.fn.tooltip.noConflict = function () {
        return r.default.fn.tooltip = Le, $e._jQueryInterface
    };
    var Ue = "bs.popover",
        Ve = r.default.fn.popover,
        Qe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ye = l({}, $e.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Xe = l({}, $e.DefaultType, {
            content: "(string|element|function)"
        }),
        Ge = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Ke = function (e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, u(t, n);
            var o = i.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function (e) {
                r.default(this.getTipElement()).addClass("bs-popover-" + e)
            }, o.getTipElement = function () {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, o.setContent = function () {
                var e = r.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var e = r.default(this.getTipElement()),
                    t = e.attr("class").match(Qe);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, i._jQueryInterface = function (e) {
                return this.each((function () {
                    var t = r.default(this).data(Ue),
                        n = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this, n), r.default(this).data(Ue, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                }))
            }, a(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ye
                }
            }, {
                key: "NAME",
                get: function () {
                    return "popover"
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return Ue
                }
            }, {
                key: "Event",
                get: function () {
                    return Ge
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Xe
                }
            }]), i
        }($e);
    r.default.fn.popover = Ke._jQueryInterface, r.default.fn.popover.Constructor = Ke, r.default.fn.popover.noConflict = function () {
        return r.default.fn.popover = Ve, Ke._jQueryInterface
    };
    var Je = "scrollspy",
        Ze = "bs.scrollspy",
        et = r.default.fn[Je],
        tt = "active",
        nt = "position",
        it = ".nav, .list-group",
        rt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ot = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        st = function () {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r.default(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                    return n._process(e)
                })), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function () {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? "offset" : nt,
                    n = "auto" === this._config.method ? t : this._config.method,
                    i = n === nt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                    var t, o = f.getSelectorFromElement(e);
                    if (o && (t = document.querySelector(o)), t) {
                        var s = t.getBoundingClientRect();
                        if (s.width || s.height) return [r.default(t)[n]().top + i, o]
                    }
                    return null
                })).filter((function (e) {
                    return e
                })).sort((function (e, t) {
                    return e[0] - t[0]
                })).forEach((function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                }))
            }, t.dispose = function () {
                r.default.removeData(this._element, Ze), r.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (e) {
                if ("string" != typeof (e = l({}, rt, "object" == typeof e && e ? e : {})).target && f.isElement(e.target)) {
                    var t = r.default(e.target).attr("id");
                    t || (t = f.getUID(Je), r.default(e.target).attr("id", t)), e.target = "#" + t
                }
                return f.typeCheckConfig(Je, e, ot), e
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map((function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })),
                    n = r.default([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(tt), n.addClass(tt)) : (n.addClass(tt), n.parents(it).prev(".nav-link, .list-group-item").addClass(tt), n.parents(it).prev(".nav-item").children(".nav-link").addClass(tt)), r.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: e
                })
            }, t._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                    return e.classList.contains(tt)
                })).forEach((function (e) {
                    return e.classList.remove(tt)
                }))
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this).data(Ze);
                    if (n || (n = new e(this, "object" == typeof t && t), r.default(this).data(Ze, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return rt
                }
            }]), e
        }();
    r.default(window).on("load.bs.scrollspy.data-api", (function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = r.default(e[t]);
            st._jQueryInterface.call(n, n.data())
        }
    })), r.default.fn[Je] = st._jQueryInterface, r.default.fn[Je].Constructor = st, r.default.fn[Je].noConflict = function () {
        return r.default.fn[Je] = et, st._jQueryInterface
    };
    var at = "bs.tab",
        lt = r.default.fn.tab,
        ut = "active",
        ct = "fade",
        ft = "show",
        dt = ".active",
        ht = "> li > .active",
        pt = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass(ut) || r.default(this._element).hasClass("disabled"))) {
                    var t, n, i = r.default(this._element).closest(".nav, .list-group")[0],
                        o = f.getSelectorFromElement(this._element);
                    if (i) {
                        var s = "UL" === i.nodeName || "OL" === i.nodeName ? ht : dt;
                        n = (n = r.default.makeArray(r.default(i).find(s)))[n.length - 1]
                    }
                    var a = r.default.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        l = r.default.Event("show.bs.tab", {
                            relatedTarget: n
                        });
                    if (n && r.default(n).trigger(a), r.default(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, i);
                        var u = function () {
                            var t = r.default.Event("hidden.bs.tab", {
                                    relatedTarget: e._element
                                }),
                                i = r.default.Event("shown.bs.tab", {
                                    relatedTarget: n
                                });
                            r.default(n).trigger(t), r.default(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, u) : u()
                    }
                }
            }, t.dispose = function () {
                r.default.removeData(this._element, at), this._element = null
            }, t._activate = function (e, t, n) {
                var i = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? r.default(t).children(dt) : r.default(t).find(ht))[0],
                    s = n && o && r.default(o).hasClass(ct),
                    a = function () {
                        return i._transitionComplete(e, o, n)
                    };
                if (o && s) {
                    var l = f.getTransitionDurationFromElement(o);
                    r.default(o).removeClass(ft).one(f.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, t._transitionComplete = function (e, t, n) {
                if (t) {
                    r.default(t).removeClass(ut);
                    var i = r.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && r.default(i).removeClass(ut), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                r.default(e).addClass(ut), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f.reflow(e), e.classList.contains(ct) && e.classList.add(ft);
                var o = e.parentNode;
                if (o && "LI" === o.nodeName && (o = o.parentNode), o && r.default(o).hasClass("dropdown-menu")) {
                    var s = r.default(e).closest(".dropdown")[0];
                    if (s) {
                        var a = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                        r.default(a).addClass(ut)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this),
                        i = n.data(at);
                    if (i || (i = new e(this), n.data(at, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }]), e
        }();
    r.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
        e.preventDefault(), pt._jQueryInterface.call(r.default(this), "show")
    })), r.default.fn.tab = pt._jQueryInterface, r.default.fn.tab.Constructor = pt, r.default.fn.tab.noConflict = function () {
        return r.default.fn.tab = lt, pt._jQueryInterface
    };
    var mt = "bs.toast",
        gt = r.default.fn.toast,
        vt = "hide",
        yt = "show",
        bt = "showing",
        _t = "click.dismiss.bs.toast",
        wt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Et = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        xt = function () {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function () {
                var e = this,
                    t = r.default.Event("show.bs.toast");
                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function () {
                        e._element.classList.remove(bt), e._element.classList.add(yt), r.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                            e.hide()
                        }), e._config.delay))
                    };
                    if (this._element.classList.remove(vt), f.reflow(this._element), this._element.classList.add(bt), this._config.animation) {
                        var i = f.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(f.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, t.hide = function () {
                if (this._element.classList.contains(yt)) {
                    var e = r.default.Event("hide.bs.toast");
                    r.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function () {
                this._clearTimeout(), this._element.classList.contains(yt) && this._element.classList.remove(yt), r.default(this._element).off(_t), r.default.removeData(this._element, mt), this._element = null, this._config = null
            }, t._getConfig = function (e) {
                return e = l({}, wt, r.default(this._element).data(), "object" == typeof e && e ? e : {}), f.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, t._setListeners = function () {
                var e = this;
                r.default(this._element).on(_t, '[data-dismiss="toast"]', (function () {
                    return e.hide()
                }))
            }, t._close = function () {
                var e = this,
                    t = function () {
                        e._element.classList.add(vt), r.default(e._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove(yt), this._config.animation) {
                    var n = f.getTransitionDurationFromElement(this._element);
                    r.default(this._element).one(f.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, t._clearTimeout = function () {
                clearTimeout(this._timeout), this._timeout = null
            }, e._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = r.default(this),
                        i = n.data(mt);
                    if (i || (i = new e(this, "object" == typeof t && t), n.data(mt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](this)
                    }
                }))
            }, a(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.6.1"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Et
                }
            }, {
                key: "Default",
                get: function () {
                    return wt
                }
            }]), e
        }();
    r.default.fn.toast = xt._jQueryInterface, r.default.fn.toast.Constructor = xt, r.default.fn.toast.noConflict = function () {
        return r.default.fn.toast = gt, xt._jQueryInterface
    }, e.Alert = p, e.Button = w, e.Carousel = j, e.Collapse = U, e.Dropdown = ae, e.Modal = Ce, e.Popover = Ke, e.Scrollspy = st, e.Tab = pt, e.Toast = xt, e.Tooltip = $e, e.Util = f, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function (e) {
    e.extend(e.fn, {
        validate: function (t) {
            if (this.length) {
                var n = e.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", (function (t) {
                    n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                })), this.on("submit.validate", (function (t) {
                    function i() {
                        var i, r;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r)
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                }))), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function () {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each((function () {
                (t = n.element(this) && t) || (i = i.concat(n.errorList))
            })), n.errorList = i), t
        },
        rules: function (t, n) {
            var i, r, o, s, a, l, u = this[0],
                c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != u && (!u.form && c && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
                if (t) switch (i = e.data(u.form, "validator").settings, r = i.rules, o = e.validator.staticRules(u), t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, e.each(n.split(/\s/), (function (e, t) {
                            l[t] = o[t], delete o[t]
                        })), l) : (delete r[u.name], o)
                }
                return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (a = s.required, delete s.required, s = e.extend({
                    required: a
                }, s)), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {
                    remote: a
                })), s
            }
        }
    });
    var t = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function (n) {
            return !t("" + e(n).val())
        },
        filled: function (n) {
            var i = e(n).val();
            return null !== i && !!t("" + i)
        },
        unchecked: function (t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function (t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function (t, n) {
        return 1 === arguments.length ? function () {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (void 0 === n || (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, (function (e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), (function () {
                return n
            }))
        }))), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function (e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function (t, n) {
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function (t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function (t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function t(t) {
                    var n = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    if (!this.form && n && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), i === this.form) {
                        var r = e.data(this.form, "validator"),
                            o = "on" + t.type.replace(/^validate/, ""),
                            s = r.settings;
                        s[o] && !e(this).is(s.ignore) && s[o].call(r, this, t)
                    }
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.currentForm,
                    r = this.groups = {};
                e.each(this.settings.groups, (function (t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, (function (e, n) {
                        r[n] = t
                    }))
                })), n = this.settings.rules, e.each(n, (function (t, i) {
                    n[t] = e.validator.normalizeRule(i)
                })), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function (t) {
                var n, i, r = this.clean(t),
                    o = this.validationTargetFor(r),
                    s = this,
                    a = !0;
                return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), (i = this.groups[o.name]) && e.each(this.groups, (function (e, t) {
                    t === i && e !== o.name && ((r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r), a = s.check(r) && a))
                })), n = !1 !== this.check(o), a = a && n, this.invalid[o.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
            },
            showErrors: function (t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, (function (e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    })), this.successList = e.grep(this.successList, (function (e) {
                        return !(e.name in t)
                    }))
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function (e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (e) {
                var t, n = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, (function (e) {
                    return e.element.name === t.name
                })).length && t
            },
            elements: function () {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function () {
                    var i = this.name || e(this).attr("name"),
                        r = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = e(this).closest("form")[0], this.name = i), !(this.form !== t.currentForm || i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0))
                }))
            },
            clean: function (t) {
                return e(t)[0]
            },
            errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function (t) {
                var n, i, r = e(t),
                    o = t.type,
                    s = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = s ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, o, s = e(t).rules(),
                    a = e.map(s, (function (e, t) {
                        return t
                    })).length,
                    l = !1,
                    u = this.elementValue(t);
                for (i in "function" == typeof s.normalizer ? o = s.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o && (u = o.call(t, u), delete s.normalizer), s) {
                    r = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, u, t, r.parameters)) && 1 === a) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                    }
                }
                if (!l) return this.objectLength(s) && this.successList.push(t), !0
            },
            customDataMessage: function (t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function (e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function () {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function (t, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function (e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function (e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function () {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return e(this.errorList).map((function () {
                    return this.element
                }))
            },
            showLabel: function (t, n) {
                var i, r, o, s, a = this.errorsFor(t),
                    l = this.idOrName(t),
                    u = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (i = a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (u += " " + o) : u = o, e(t).attr("aria-describedby", u), (r = this.groups[t.name]) && (s = this, e.each(s.groups, (function (t, n) {
                    n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                }))))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function (t) {
                var n = this.escapeCssMeta(this.idOrName(t)),
                    i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function (e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function (e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function (t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function (t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function (e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function (e) {
                    return e
                },
                string: function (t, n) {
                    return !!e(t, n.form).length
                },
                function: function (e, t) {
                    return e(t)
                }
            },
            optional: function (t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function (t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (t, n) {
                return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: n
                    })
                })
            },
            destroy: function () {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var n = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), (function () {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            })), n
        },
        normalizeAttributeRule: function (e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function (t) {
            var n, i, r = {},
                o = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (t) {
            var n, i, r = {},
                o = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) "" === (i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(r, s, n, i);
            return r
        },
        staticRules: function (t) {
            var n = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function (t, n) {
            return e.each(t, (function (i, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!e(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
                    }
                } else delete t[i]
            })), e.each(t, (function (e, i) {
                t[e] = "function" == typeof i && "normalizer" !== e ? i(n) : i
            })), e.each(["minlength", "maxlength"], (function () {
                t[this] && (t[this] = Number(t[this]))
            })), e.each(["rangelength", "range"], (function () {
                var e;
                t[this] && (Array.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (e = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(e[0]), Number(e[1])]))
            })), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), (function () {
                    n[this] = !0
                })), t = n
            }
            return t
        },
        addMethod: function (t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : null != t && t.length > 0
            },
            email: function (e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function (e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function () {
                var e = !1;
                return function (t, n) {
                    return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(t).toString())
                }
            }(),
            dateISO: function (e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function (e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function (e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function (e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n
            },
            maxlength: function (e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n
            },
            rangelength: function (e, t, n) {
                var i = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n[0] && i <= n[1]
            },
            min: function (e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function (e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function (e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function (t, n, i) {
                var r, o = e(n).attr("type"),
                    s = "Step attribute on input type " + o + " is not supported.",
                    a = new RegExp("\\b" + o + "\\b"),
                    l = function (e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    },
                    u = function (e) {
                        return Math.round(e * Math.pow(10, r))
                    },
                    c = !0;
                if (o && !a.test(["text", "number", "range"].join())) throw new Error(s);
                return r = l(i), (l(t) > r || u(t) % u(i) != 0) && (c = !1), this.optional(n) || c
            },
            equalTo: function (t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function () {
                    e(n).valid()
                })), t === r.val()
            },
            remote: function (t, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var o, s, a, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
                    url: i
                } || i, a = e.param(e.extend({
                    data: t
                }, i.data)), l.old === a ? l.valid : (l.old = a, o = this, this.startRequest(n), (s = {})[n.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: o.currentForm,
                    success: function (e) {
                        var i, s, a, u = !0 === e || "true" === e;
                        o.settings.messages[n.name][r] = l.originalMessage, u ? (a = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = a, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, s = e || o.defaultMessage(n, {
                            method: r,
                            parameters: t
                        }), i[n.name] = l.message = s, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = u, o.stopRequest(n, u)
                    }
                }, i)), "pending")
            }
        }
    });
    var n, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter((function (e, t, n) {
        var r = e.port;
        "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
    })) : (n = e.ajax, e.ajax = function (t) {
        var r = ("mode" in t ? t : e.ajaxSettings).mode,
            o = ("port" in t ? t : e.ajaxSettings).port;
        return "abort" === r ? (i[o] && i[o].abort(), i[o] = n.apply(this, arguments), i[o]) : n.apply(this, arguments)
    }), e
})),
function (e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function r() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, (function (e, t, n) {
            return t + n.toUpperCase()
        })).replace(/^-/, "")
    }

    function a(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function l(e) {
        return e.replace(/([A-Z])/g, (function (e, t) {
            return "-" + t.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function u(t, n, i) {
        var r;
        if ("getComputedStyle" in e) {
            r = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== r) i && (r = r.getPropertyValue(i));
            else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else r = !n && t.currentStyle && t.currentStyle[i];
        return r
    }

    function c(e, n, i, o) {
        var s, a, l, u, c = "modernizr",
            f = r("div"),
            d = function () {
                var e = t.body;
                return e || ((e = r(_ ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(i, 10))
            for (; i--;)(l = r("div")).id = o ? o[i] : c + (i + 1), f.appendChild(l);
        return (s = r("style")).type = "text/css", s.id = "s" + c, (d.fake ? d : f).appendChild(s), d.appendChild(f), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), f.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(d)), a = n(f, e), d.fake ? (d.parentNode.removeChild(d), b.style.overflow = u, b.offsetHeight) : f.parentNode.removeChild(f), !!a
    }

    function f(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(l(t[r]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; r--;) o.push("(" + l(t[r]) + ":" + i + ")");
            return c("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function (e) {
                return "absolute" == u(e, null, "position")
            }))
        }
        return n
    }

    function d(e, t, a, l) {
        function u() {
            d && (delete T.style, delete T.modElem)
        }
        if (l = !i(l, "undefined") && l, !i(a, "undefined")) {
            var c = f(e, a);
            if (!i(c, "undefined")) return c
        }
        for (var d, h, p, m, g, v = ["modernizr", "tspan", "samp"]; !T.style && v.length;) d = !0, T.modElem = r(v.shift()), T.style = T.modElem.style;
        for (p = e.length, h = 0; p > h; h++)
            if (m = e[h], g = T.style[m], o(m, "-") && (m = s(m)), T.style[m] !== n) {
                if (l || i(a, "undefined")) return u(), "pfx" != t || m;
                try {
                    T.style[m] = a
                } catch (e) {}
                if (T.style[m] != g) return u(), "pfx" != t || m
            } return u(), !1
    }

    function h(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + x.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? d(l, t, r, o) : function (e, t, n) {
            var r;
            for (var o in e)
                if (e[o] in t) return !1 === n ? e[o] : i(r = t[e[o]], "function") ? a(r, n || t) : r;
            return !1
        }(l = (e + " " + E.join(s + " ") + s).split(" "), t, n)
    }

    function p(e, t, i) {
        return h(e, n, n, t, i)
    }
    var m = [],
        g = [],
        v = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout((function () {
                    t(n[e])
                }), 0)
            },
            addTest: function (e, t, n) {
                g.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                g.push({
                    name: null,
                    fn: e
                })
            }
        },
        y = function () {};
    y.prototype = v, y = new y;
    var b = t.documentElement,
        _ = "svg" === b.nodeName.toLowerCase();
    _ || function (e, t) {
        function n() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e) {
            var t = p[e[d]];
            return t || (t = {}, h++, e[d] = h, p[h] = t), t
        }

        function r(e, n, r) {
            return n || (n = t), l ? n.createElement(e) : (r || (r = i(n)), !(o = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || c.test(e) || o.tagUrn ? o : r.frag.appendChild(o));
            var o
        }

        function o(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return m.shivMethods ? r(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, (function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            })) + ");return n}")(m, t.frag)
        }

        function s(e) {
            e || (e = t);
            var n = i(e);
            return !m.shivCSS || a || n.hasCSS || (n.hasCSS = !! function (e, t) {
                var n = e.createElement("p"),
                    i = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
            }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || o(e, n), e
        }
        var a, l, u = e.html5 || {},
            c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            d = "_html5shiv",
            h = 0,
            p = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", a = "hidden" in e, l = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                a = !0, l = !0
            }
        }();
        var m = {
            elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== u.shivCSS,
            supportsUnknownElements: l,
            shivMethods: !1 !== u.shivMethods,
            type: "default",
            shivDocument: s,
            createElement: r,
            createDocumentFragment: function (e, r) {
                if (e || (e = t), l) return e.createDocumentFragment();
                for (var o = (r = r || i(e)).frag.cloneNode(), s = 0, a = n(), u = a.length; u > s; s++) o.createElement(a[s]);
                return o
            },
            addElements: function (e, t) {
                var n = m.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), m.elements = n + " " + e, s(t)
            }
        };
        e.html5 = m, s(t), "object" == typeof module && module.exports && (module.exports = m)
    }(void 0 !== e ? e : this, t);
    var w = "Moz O ms Webkit",
        E = v._config.usePrefixes ? w.toLowerCase().split(" ") : [];
    v._domPrefixes = E;
    var x = v._config.usePrefixes ? w.split(" ") : [];
    v._cssomPrefixes = x;
    var C = {
        elem: r("modernizr")
    };
    y._q.push((function () {
        delete C.elem
    }));
    var T = {
        style: C.elem.style
    };
    y._q.unshift((function () {
            delete T.style
        })), v.testProp = function (e, t, i) {
            return d([e], n, t, i)
        }, v.testAllProps = h, v.testAllProps = p, y.addTest("cssanimations", p("animationName", "a", !0)),
        function () {
            var e, t, n, r, o, s;
            for (var a in g)
                if (g.hasOwnProperty(a)) {
                    if (e = [], (t = g[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (s = e[o].split(".")).length ? y[s[0]] = r : (!y[s[0]] || y[s[0]] instanceof Boolean || (y[s[0]] = new Boolean(y[s[0]])), y[s[0]][s[1]] = r), m.push((r ? "" : "no-") + s.join("-"))
                }
        }(),
        function (e) {
            var t = b.className,
                n = y._config.classPrefix || "";
            if (_ && (t = t.baseVal), y._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            y._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? b.className.baseVal = t : b.className = t)
        }(m), delete v.addTest, delete v.addAsyncTest;
    for (var S = 0; S < y._q.length; S++) y._q[S]();
    e.Modernizr = y
}(window, document),
function (e) {
    e.fn.viewportChecker = function (t) {
        var n = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (e, t) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        e.extend(n, t);
        var i = this,
            r = {
                height: e(n.scrollBox).height(),
                width: e(n.scrollBox).width()
            },
            o = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") || -1 != navigator.userAgent.toLowerCase().indexOf("windows phone") ? "body" : "html";
        return this.checkElements = function () {
            var t, s;
            n.scrollHorizontal ? (t = e(o).scrollLeft(), s = t + r.width) : (t = e(o).scrollTop(), s = t + r.height), i.each((function () {
                var i = e(this),
                    o = {},
                    a = {};
                if (i.data("vp-add-class") && (a.classToAdd = i.data("vp-add-class")), i.data("vp-remove-class") && (a.classToRemove = i.data("vp-remove-class")), i.data("vp-add-class-full-view") && (a.classToAddForFullView = i.data("vp-add-class-full-view")), i.data("vp-keep-add-class") && (a.removeClassAfterAnimation = i.data("vp-remove-after-animation")), i.data("vp-offset") && (a.offset = i.data("vp-offset")), i.data("vp-repeat") && (a.repeat = i.data("vp-repeat")), i.data("vp-scrollHorizontal") && (a.scrollHorizontal = i.data("vp-scrollHorizontal")), i.data("vp-invertBottomOffset") && (a.scrollHorizontal = i.data("vp-invertBottomOffset")), e.extend(o, n), e.extend(o, a), !i.data("vp-animated") || o.repeat) {
                    String(o.offset).indexOf("%") > 0 && (o.offset = parseInt(o.offset) / 100 * r.height);
                    var l = o.scrollHorizontal ? i.offset().left : i.offset().top,
                        u = o.scrollHorizontal ? l + i.width() : l + i.height(),
                        c = Math.round(l) + o.offset,
                        f = o.scrollHorizontal ? c + i.width() : c + i.height();
                    o.invertBottomOffset && (f -= 2 * o.offset), c < s && f > t ? (i.removeClass(o.classToRemove), i.addClass(o.classToAdd), o.callbackFunction(i, "add"), u <= s && l >= t ? i.addClass(o.classToAddForFullView) : i.removeClass(o.classToAddForFullView), i.data("vp-animated", !0), o.removeClassAfterAnimation && i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
                        i.removeClass(o.classToAdd)
                    }))) : i.hasClass(o.classToAdd) && o.repeat && (i.removeClass(o.classToAdd + " " + o.classToAddForFullView), o.callbackFunction(i, "remove"), i.data("vp-animated", !1))
                }
            }))
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements), e(n.scrollBox).bind("load scroll", this.checkElements), e(window).resize((function (t) {
            r = {
                height: e(n.scrollBox).height(),
                width: e(n.scrollBox).width()
            }, i.checkElements()
        })), this.checkElements(), this
    }
}(jQuery);
var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

function isInViewport(e) {
    var t = e.getBoundingClientRect(),
        n = document.documentElement;
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || n.clientHeight) && t.right <= (window.innerWidth || n.clientWidth)
}

function isElementInViewport(e) {
    "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom - 300 <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
}
var isProcessingBlock = !1,
    processBlocks = function () {
        if (!isProcessingBlock) {
            isProcessingBlock = !0;
            var e = $(".invisible"),
                t = 0;
            ! function n() {
                var i = e.eq(t++);
                i.length ? isElementInViewport(i) ? (i.removeClass("invisible").addClass("animated fadeInUp"), setTimeout((function () {
                    n(), isProcessingBlock = !1
                }), 200)) : n() : isProcessingBlock = !1
            }()
        }
    };
$(document).ready((function () {
    processBlocks(), $(window).on("scroll", processBlocks), $((function (e) {
        $(document).ready((function () {
            $.fn.navcust()
        })), $(window).scroll((function (e) {
            $.fn.navcust()
        })), $.fn.navcust = function () {
            if ($(window).width() > 768) {
                (e = $(window).scrollTop()) > 165 ? $("header.headerfixed").addClass("active") : $("header.headerfixed").removeClass("active")
            } else {
                var e = $(window).scrollTop();
                console.log(e), e > 60 ? $("header.headerfixed").addClass("active") : $("header.headerfixed").removeClass("active")
            }
        }
    })), $(".onhoveranimation").mouseenter((function () {
        $(this).find(".invisible2").removeClass("invisible2").addClass("fadeInUp cust")
    })), $(".onhoveranimation").mouseleave((function () {
        $(this).find(".cust").removeClass("full-visible").addClass("invisible2")
    }))
}));
var animateTiles = function () {
    $(".animation1").viewportChecker({
        classToAdd: "animated fadeInUp",
        classToRemove: "invisible",
        offset: 10,
        repeat: !1
    })
};
$(document).ready((function () {
        $(".about-page h1 p").viewportChecker({
            classToAdd: "animated3 fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".about-page .btnblack").viewportChecker({
            classToAdd: "animated3 fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".about-page .mailing-list").viewportChecker({
            classToAdd: "animated3 fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".artist-page h1.title").viewportChecker({
            classToAdd: "animated fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".artist-main .artist-content").viewportChecker({
            classToAdd: "animated fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".artist-images .artistani1, .artist-images .artistani2, .artist-images .artistani3, .artist-images .artistani4").viewportChecker({
            classToAdd: "animated fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        }), $(".artist-btn .btnblack").viewportChecker({
            classToAdd: "animated fadeInUp",
            classToRemove: "invisible",
            offset: 10,
            repeat: !1
        })
    })),
    function (e) {
        "use strict";

        function t(e) {
            if (e) {
                if ("string" == typeof i[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, r = 0, o = n.length; o > r; r++)
                    if (t = n[r] + e, "string" == typeof i[t]) return t
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define((function () {
            return t
        })) : e.getStyleProperty = t
    }(window),
    function (e) {
        "use strict";

        function t(e) {
            var t = parseFloat(e);
            return -1 === e.indexOf("%") && !isNaN(t) && t
        }

        function n(e) {
            var n, i = e("boxSizing");
            return function () {
                    if (i) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[i] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(e);
                        var s = r(e);
                        n = 200 === t(s.width), o.removeChild(e)
                    }
                }(),
                function (e) {
                    if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                        var s = r(e);
                        if ("none" === s.display) return function () {
                            for (var e = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0
                                }, t = 0, n = o.length; n > t; t++) e[o[t]] = 0;
                            return e
                        }();
                        var a = {};
                        a.width = e.offsetWidth, a.height = e.offsetHeight;
                        for (var l = a.isBorderBox = !(!i || !s[i] || "border-box" !== s[i]), u = 0, c = o.length; c > u; u++) {
                            var f = o[u],
                                d = s[f],
                                h = parseFloat(d);
                            a[f] = isNaN(h) ? 0 : h
                        }
                        var p = a.paddingLeft + a.paddingRight,
                            m = a.paddingTop + a.paddingBottom,
                            g = a.marginLeft + a.marginRight,
                            v = a.marginTop + a.marginBottom,
                            y = a.borderLeftWidth + a.borderRightWidth,
                            b = a.borderTopWidth + a.borderBottomWidth,
                            _ = l && n,
                            w = t(s.width);
                        !1 !== w && (a.width = w + (_ ? 0 : p + y));
                        var E = t(s.height);
                        return !1 !== E && (a.height = E + (_ ? 0 : m + b)), a.innerWidth = a.width - (p + y), a.innerHeight = a.height - (m + b), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
                    }
                }
        }
        var i = document.defaultView,
            r = i && i.getComputedStyle ? function (e) {
                return i.getComputedStyle(e, null)
            } : function (e) {
                return e.currentStyle
            },
            o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define(["get-style-property"], n) : e.getSize = n(e.getStyleProperty)
    }(window),
    function (e) {
        "use strict";
        var t = document.documentElement,
            n = function () {};
        t.addEventListener ? n = function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : t.attachEvent && (n = function (t, n, i) {
            t[n + i] = i.handleEvent ? function () {
                var t = e.event;
                t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
            } : function () {
                var n = e.event;
                n.target = n.target || n.srcElement, i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var i = function () {};
        t.removeEventListener ? i = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : t.detachEvent && (i = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(r) : e.eventie = r
    }(this),
    function (e) {
        "use strict";

        function t(e) {
            "function" == typeof e && (t.isReady ? e() : o.push(e))
        }

        function n(e) {
            var n = "readystatechange" === e.type && "complete" !== r.readyState;
            if (!t.isReady && !n) {
                t.isReady = !0;
                for (var i = 0, s = o.length; s > i; i++) {
                    (0, o[i])()
                }
            }
        }

        function i(i) {
            return i.bind(r, "DOMContentLoaded", n), i.bind(r, "readystatechange", n), i.bind(e, "load", n), t
        }
        var r = e.document,
            o = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define(["eventie"], i) : e.docReady = i(e.eventie)
    }(this),
    function (e) {
        "use strict";

        function t() {}

        function n(e, t) {
            if (r) return t.indexOf(e);
            for (var n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        }
        var i = t.prototype,
            r = !!Array.prototype.indexOf;
        i._getEvents = function () {
            return this._events || (this._events = {})
        }, i.getListeners = function (e) {
            var t, n, i = this._getEvents();
            if ("object" == typeof e)
                for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
            else t = i[e] || (i[e] = []);
            return t
        }, i.getListenersAsObject = function (e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n
        }, i.addListener = function (e, t) {
            var i, r = this.getListenersAsObject(e);
            for (i in r) r.hasOwnProperty(i) && -1 === n(t, r[i]) && r[i].push(t);
            return this
        }, i.on = i.addListener, i.defineEvent = function (e) {
            return this.getListeners(e), this
        }, i.defineEvents = function (e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function (e, t) {
            var i, r, o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && (-1 !== (i = n(t, o[r])) && o[r].splice(i, 1));
            return this
        }, i.off = i.removeListener, i.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function (e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) o.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }, i.removeEvent = function (e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.emitEvent = function (e, t) {
            var n, i, r = this.getListenersAsObject(e);
            for (i in r)
                if (r.hasOwnProperty(i))
                    for (n = r[i].length; n--;) !0 === (t ? r[i][n].apply(null, t) : r[i][n]()) && this.removeListener(e, r[i][n]);
            return this
        }, i.trigger = i.emitEvent, i.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, "function" == typeof define && define.amd ? define((function () {
            return t
        })) : e.EventEmitter = t
    }(this),
    function (e) {
        "use strict";

        function t() {}

        function n(e) {
            function n(t) {
                t.prototype.option || (t.prototype.option = function (t) {
                    e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
                })
            }

            function r(t, n) {
                e.fn[t] = function (r) {
                    if ("string" == typeof r) {
                        for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var u = this[a],
                                c = e.data(u, t);
                            if (c)
                                if (e.isFunction(c[r]) && "_" !== r.charAt(0)) {
                                    var f = c[r].apply(c, s);
                                    if (void 0 !== f) return f
                                } else o("no such method '" + r + "' for " + t + " instance");
                            else o("cannot call methods on " + t + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each((function () {
                        var i = e.data(this, t);
                        i ? (i.option(r), i._init()) : (i = new n(this, r), e.data(this, t, i))
                    }))
                }
            }
            if (e) {
                var o = "undefined" == typeof console ? t : function (e) {
                    console.error(e)
                };
                e.bridget = function (e, t) {
                    n(t), r(e, t)
                }
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], n) : n(e.jQuery)
    }(window),
    function (e, t) {
        "use strict";

        function n(e, t) {
            return e[o](t)
        }

        function i(e) {
            e.parentNode || document.createDocumentFragment().appendChild(e)
        }
        var r, o = function () {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var r = e[n] + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (o) {
            var s = n(document.createElement("div"), "div");
            r = s ? n : function (e, t) {
                return i(e), n(e, t)
            }
        } else r = function (e, t) {
            i(e);
            for (var n = e.parentNode.querySelectorAll(t), r = 0, o = n.length; o > r; r++)
                if (n[r] === e) return !0;
            return !1
        };
        "function" == typeof define && define.amd ? define((function () {
            return r
        })) : window.matchesSelector = r
    }(0, Element.prototype),
    function (e) {
        "use strict";

        function t(e, t) {
            e && (this.element = e, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var n = e.getSize,
            i = e.getStyleProperty,
            r = e.EventEmitter,
            o = document.defaultView,
            s = o && o.getComputedStyle ? function (e) {
                return o.getComputedStyle(e, null)
            } : function (e) {
                return e.currentStyle
            },
            a = i("transition"),
            l = i("transform"),
            u = a && l,
            c = !!i("perspective"),
            f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            } [a],
            d = ["transform", "transition", "transitionDuration", "transitionProperty"],
            h = function () {
                for (var e = {}, t = 0, n = d.length; n > t; t++) {
                    var r = d[t],
                        o = i(r);
                    o && o !== r && (e[r] = o)
                }
                return e
            }();
        (function (e, t) {
            for (var n in t) e[n] = t[n]
        })(t.prototype, r.prototype), t.prototype._create = function () {
            this.css({
                position: "absolute"
            })
        }, t.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, t.prototype.getSize = function () {
            this.size = n(this.element)
        }, t.prototype.css = function (e) {
            var t = this.element.style;
            for (var n in e) {
                t[h[n] || n] = e[n]
            }
        }, t.prototype.getPosition = function () {
            var e = s(this.element),
                t = this.layout.options,
                n = t.isOriginLeft,
                i = t.isOriginTop,
                r = parseInt(e[n ? "left" : "right"], 10),
                o = parseInt(e[i ? "top" : "bottom"], 10);
            r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
            var a = this.layout.size;
            r -= n ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
        }, t.prototype.layoutPosition = function () {
            var e = this.layout.size,
                t = this.layout.options,
                n = {};
            t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
        };
        var p = c ? function (e, t) {
            return "translate3d(" + e + "px, " + t + "px, 0)"
        } : function (e, t) {
            return "translate(" + e + "px, " + t + "px)"
        };
        t.prototype._transitionTo = function (e, t) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(e, 10),
                o = parseInt(t, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(e, t), !s || this.isTransitioning) {
                var a = e - n,
                    l = t - i,
                    u = {},
                    c = this.layout.options;
                a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = p(a, l), this.transition({
                    to: u,
                    onTransitionEnd: this.layoutPosition,
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, t.prototype.goTo = function (e, t) {
            this.setPosition(e, t), this.layoutPosition()
        }, t.prototype.moveTo = u ? t.prototype._transitionTo : t.prototype.goTo, t.prototype.setPosition = function (e, t) {
            this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
        }, t.prototype._nonTransition = function (e) {
            this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd && e.onTransitionEnd.call(this)
        }, t.prototype._transition = function (e) {
            var t = this.layout.options.transitionDuration;
            if (parseFloat(t)) {
                var n = e.to,
                    i = [];
                for (var r in n) i.push(r);
                var o = {};
                if (o.transitionProperty = i.join(","), o.transitionDuration = t, this.element.addEventListener(f, this, !1), (e.isCleaning || e.onTransitionEnd) && this.on("transitionEnd", (function (t) {
                        return e.isCleaning && t._removeStyles(n), e.onTransitionEnd && e.onTransitionEnd.call(t), !0
                    })), e.from) {
                    this.css(e.from);
                    this.element.offsetHeight;
                    null
                }
                this.css(o), this.css(n), this.isTransitioning = !0
            } else this._nonTransition(e)
        }, t.prototype.transition = t.prototype[a ? "_transition" : "_nonTransition"], t.prototype.onwebkitTransitionEnd = function (e) {
            this.ontransitionend(e)
        }, t.prototype.onotransitionend = function (e) {
            this.ontransitionend(e)
        }, t.prototype.ontransitionend = function (e) {
            e.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1, this.emitEvent("transitionEnd", [this]))
        }, t.prototype._removeStyles = function (e) {
            var t = {};
            for (var n in e) t[n] = "";
            this.css(t)
        };
        var m = {
            transitionProperty: "",
            transitionDuration: ""
        };
        t.prototype.removeTransitionStyles = function () {
            this.css(m)
        }, t.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, t.prototype.remove = a ? function () {
            var e = this;
            this.on("transitionEnd", (function () {
                return e.removeElem(), !0
            })), this.hide()
        } : t.prototype.removeElem, t.prototype.reveal = function () {
            this.css({
                display: ""
            });
            var e = this.layout.options;
            this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0
            })
        }, t.prototype.hide = function () {
            this.css({
                display: ""
            });
            var e = this.layout.options;
            this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: function () {
                    this.css({
                        display: "none"
                    })
                }
            })
        }, t.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, e.Outlayer = {
            Item: t
        }
    }(window),
    function (e) {
        "use strict";

        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            var t = [];
            if (function (e) {
                    return "[object Array]" === g.call(e)
                }(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function i(e, n) {
            if ("string" == typeof e && (e = d.querySelector(e)), e && v(e)) {
                this.element = e, this.options = t({}, this.options), t(this.options, n);
                var i = ++b;
                this.element.outlayerGUID = i, _[i] = this, this._create(), this.options.isInitLayout && this.layout()
            } else h && h.error("Bad " + this.settings.namespace + " element: " + e)
        }

        function r(e, n) {
            e.prototype[n] = t({}, i.prototype[n])
        }
        var o = e.Outlayer,
            s = o.Item,
            a = e.docReady,
            l = e.EventEmitter,
            u = e.eventie,
            c = e.getSize,
            f = e.matchesSelector,
            d = e.document,
            h = e.console,
            p = e.jQuery,
            m = function () {},
            g = Object.prototype.toString,
            v = "object" == typeof HTMLElement ? function (e) {
                return e instanceof HTMLElement
            } : function (e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            y = Array.prototype.indexOf ? function (e, t) {
                return e.indexOf(t)
            } : function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            b = 0,
            _ = {};
        i.prototype.settings = {
            namespace: "outlayer",
            item: o.Item
        }, i.prototype.options = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, t(i.prototype, l.prototype), i.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, i.prototype.reloadItems = function () {
            this.items = this._getItems(this.element.children)
        }, i.prototype._getItems = function (e) {
            for (var t = this._filterFindItemElements(e), n = this.settings.item, i = [], r = 0, o = t.length; o > r; r++) {
                var s = new n(t[r], this, this.options.itemOptions);
                i.push(s)
            }
            return i
        }, i.prototype._filterFindItemElements = function (e) {
            e = n(e);
            var t = this.options.itemSelector;
            if (!t) return e;
            for (var i = [], r = 0, o = e.length; o > r; r++) {
                var s = e[r];
                f(s, t) && i.push(s);
                for (var a = s.querySelectorAll(t), l = 0, u = a.length; u > l; l++) i.push(a[l])
            }
            return i
        }, i.prototype.getItemElements = function () {
            for (var e = [], t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].element);
            return e
        }, i.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, i.prototype._init = i.prototype.layout, i.prototype._resetLayout = function () {
            this.getSize()
        }, i.prototype.getSize = function () {
            this.size = c(this.element)
        }, i.prototype._getMeasurement = function (e, t) {
            var n, i = this.options[e];
            i ? ("string" == typeof i ? n = this.element.querySelector(i) : v(i) && (n = i), this[e] = n ? c(n)[t] : i) : this[e] = 0
        }, i.prototype.layoutItems = function (e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, i.prototype._getItemsForLayout = function (e) {
            for (var t = [], n = 0, i = e.length; i > n; n++) {
                var r = e[n];
                r.isIgnored || t.push(r)
            }
            return t
        }, i.prototype._layoutItems = function (e, t) {
            if (e && e.length) {
                this._itemsOn(e, "layout", (function () {
                    this.emitEvent("layoutComplete", [this, e])
                }));
                for (var n = [], i = 0, r = e.length; r > i; i++) {
                    var o = e[i],
                        s = this._getItemLayoutPosition(o);
                    s.item = o, s.isInstant = t, n.push(s)
                }
                this._processLayoutQueue(n)
            } else this.emitEvent("layoutComplete", [this, e])
        }, i.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, i.prototype._processLayoutQueue = function (e) {
            for (var t = 0, n = e.length; n > t; t++) {
                var i = e[t];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, i.prototype._positionItem = function (e, t, n, i) {
            i ? e.goTo(t, n) : e.moveTo(t, n)
        }, i.prototype._postLayout = function () {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }, i.prototype._getContainerSize = m, i.prototype._setContainerMeasure = function (e, t) {
            if (void 0 !== e) {
                var n = this.size;
                n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, i.prototype._itemsOn = function (e, t, n) {
            function i() {
                return ++r === o && n.call(s), !0
            }
            for (var r = 0, o = e.length, s = this, a = 0, l = e.length; l > a; a++) {
                e[a].on(t, i)
            }
        }, i.prototype.ignore = function (e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, i.prototype.unignore = function (e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, i.prototype.stamp = function (e) {
            if (e = this._find(e)) {
                this.stamps = this.stamps.concat(e);
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    this.ignore(i)
                }
            }
        }, i.prototype.unstamp = function (e) {
            if (e = this._find(e))
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t],
                        r = y(this.stamps, i); - 1 !== r && this.stamps.splice(r, 1), this.unignore(i)
                }
        }, i.prototype._find = function (e) {
            return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n(e)) : void 0
        }, i.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var e = 0, t = this.stamps.length; t > e; e++) {
                    var n = this.stamps[e];
                    this._manageStamp(n)
                }
            }
        }, i.prototype._getBoundingRect = function () {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, i.prototype._manageStamp = m, i.prototype._getElementOffset = function (e) {
            var t = e.getBoundingClientRect(),
                n = this._boundingRect,
                i = c(e);
            return {
                left: t.left - n.left - i.marginLeft,
                top: t.top - n.top - i.marginTop,
                right: n.right - t.right - i.marginRight,
                bottom: n.bottom - t.bottom - i.marginBottom
            }
        }, i.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.prototype.bindResize = function () {
            this.isResizeBound || (u.bind(e, "resize", this), this.isResizeBound = !0)
        }, i.prototype.unbindResize = function () {
            u.unbind(e, "resize", this), this.isResizeBound = !1
        }, i.prototype.onresize = function () {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout((function () {
                e.resize()
            }), 100)
        }, i.prototype.resize = function () {
            var e = c(this.element);
            this.size && e && e.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
        }, i.prototype.addItems = function (e) {
            var t = this._getItems(e);
            if (t.length) return this.items = this.items.concat(t), t
        }, i.prototype.appended = function (e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, i.prototype.prepended = function (e) {
            var t = this._getItems(e);
            if (t.length) {
                var n = this.items.slice(0);
                this.items = t.concat(n), this._resetLayout(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
            }
        }, i.prototype.reveal = function (e) {
            if (e && e.length)
                for (var t = 0, n = e.length; n > t; t++) {
                    e[t].reveal()
                }
        }, i.prototype.hide = function (e) {
            if (e && e.length)
                for (var t = 0, n = e.length; n > t; t++) {
                    e[t].hide()
                }
        }, i.prototype.getItem = function (e) {
            for (var t = 0, n = this.items.length; n > t; t++) {
                var i = this.items[t];
                if (i.element === e) return i
            }
        }, i.prototype.getItems = function (e) {
            if (e && e.length) {
                for (var t = [], n = 0, i = e.length; i > n; n++) {
                    var r = e[n],
                        o = this.getItem(r);
                    o && t.push(o)
                }
                return t
            }
        }, i.prototype.remove = function (e) {
            e = n(e);
            var t = this.getItems(e);
            this._itemsOn(t, "remove", (function () {
                this.emitEvent("removeComplete", [this, t])
            }));
            for (var i = 0, r = t.length; r > i; i++) {
                var o = t[i];
                o.remove();
                var s = y(this.items, o);
                this.items.splice(s, 1)
            }
        }, i.prototype.destroy = function () {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "";
            for (var t = 0, n = this.items.length; n > t; t++) {
                this.items[t].destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID
        }, i.data = function (e) {
            var t = e && e.outlayerGUID;
            return t && _[t]
        }, i.create = function (e, n) {
            function o() {
                i.apply(this, arguments)
            }
            return t(o.prototype, i.prototype), r(o, "options"), r(o, "settings"), t(o.prototype.options, n), o.prototype.settings.namespace = e, o.data = i.data, o.Item = function () {
                s.apply(this, arguments)
            }, o.Item.prototype = new i.Item, o.prototype.settings.item = o.Item, a((function () {
                for (var t = function (e) {
                        return e.replace(/(.)([A-Z])/g, (function (e, t, n) {
                            return t + "-" + n
                        })).toLowerCase()
                    }(e), n = d.querySelectorAll(".js-" + t), i = "data-" + t + "-options", r = 0, s = n.length; s > r; r++) {
                    var a, l = n[r],
                        u = l.getAttribute(i);
                    try {
                        a = u && JSON.parse(u)
                    } catch (e) {
                        h && h.error("Error parsing " + i + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + e);
                        continue
                    }
                    var c = new o(l, a);
                    p && p.data(l, e, c)
                }
            })), p && p.bridget && p.bridget(e, o), o
        }, i.Item = s, e.Outlayer = i
    }(window),
    function (e) {
        "use strict";

        function t(e, t) {
            var i = e.create("masonry");
            return i.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var e = this.cols;
                for (this.colYs = []; e--;) this.colYs.push(0);
                this.maxY = 0
            }, i.prototype.measureColumns = function () {
                var e = this.items[0].element;
                this.columnWidth = this.columnWidth || t(e).outerWidth, this.columnWidth += this.gutter, this.cols = Math.floor((this.size.innerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, i.prototype._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = Math.ceil(e.size.outerWidth / this.columnWidth);
                t = Math.min(t, this.cols);
                for (var i = this._getColGroup(t), r = Math.min.apply(Math, i), o = n(i, r), s = {
                        x: this.columnWidth * o,
                        y: r
                    }, a = r + e.size.outerHeight, l = this.cols + 1 - i.length, u = 0; l > u; u++) this.colYs[o + u] = a;
                return s
            }, i.prototype._getColGroup = function (e) {
                if (1 === e) return this.colYs;
                for (var t = [], n = this.cols + 1 - e, i = 0; n > i; i++) {
                    var r = this.colYs.slice(i, i + e);
                    t[i] = Math.max.apply(Math, r)
                }
                return t
            }, i.prototype._manageStamp = function (e) {
                var n = t(e),
                    i = this._getElementOffset(e),
                    r = this.options.isOriginLeft ? i.left : i.right,
                    o = r + n.outerWidth,
                    s = Math.floor(r / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(o / this.columnWidth);
                a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
            }, i.prototype._getContainerSize = function () {
                return this.maxY = Math.max.apply(Math, this.colYs), {
                    height: this.maxY
                }
            }, i
        }
        var n = Array.prototype.indexOf ? function (e, t) {
            return e.indexOf(t)
        } : function (e, t) {
            for (var n = 0, i = e.length; i > n; n++) {
                if (e[n] === t) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer", "get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
    }(window),
    function (e) {
        "use strict";
        var t = e.jQuery,
            n = e.console,
            i = void 0 !== n;

        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }
        var o = Object.prototype.toString;

        function s(e) {
            var t = [];
            if (function (e) {
                    return "[object Array]" === o.call(e)
                }(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; n < i; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function a(e, o) {
            function a(e, n, i) {
                if (!(this instanceof a)) return new a(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = r({}, this.options), "function" == typeof n ? i = n : r(this.options, n), i && this.on("always", i), this.getImages(), t && (this.jqDeferred = new t.Deferred);
                var o = this;
                setTimeout((function () {
                    o.check()
                }))
            }
            a.prototype = new e, a.prototype.options = {}, a.prototype.getImages = function () {
                this.images = [];
                for (var e = 0, t = this.elements.length; e < t; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, o = i.length; r < o; r++) {
                        var s = i[r];
                        this.addImage(s)
                    }
                }
            }, a.prototype.addImage = function (e) {
                var t = new u(e);
                this.images.push(t)
            }, a.prototype.check = function () {
                var e = this,
                    t = 0,
                    r = this.images.length;
                if (this.hasAnyBroken = !1, r)
                    for (var o = 0; o < r; o++) {
                        var s = this.images[o];
                        s.on("confirm", a), s.check()
                    } else this.complete();

                function a(o, s) {
                    return e.options.debug && i && n.log("confirm", o, s), e.progress(o), ++t === r && e.complete(), !0
                }
            }, a.prototype.progress = function (e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e), this.jqDeferred && this.jqDeferred.notify(this, e)
            }, a.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }, t && (t.fn.imagesLoaded = function (e, n) {
                return new a(this, e, n).jqDeferred.promise(t(this))
            });
            var l = {};

            function u(e) {
                this.img = e
            }
            return u.prototype = new e, u.prototype.check = function () {
                var e = l[this.img.src];
                if (e) this.useCached(e);
                else if (l[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                else {
                    var t = this.proxyImage = new Image;
                    o.bind(t, "load", this), o.bind(t, "error", this), t.src = this.img.src
                }
            }, u.prototype.useCached = function (e) {
                if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                else {
                    var t = this;
                    e.on("confirm", (function (e) {
                        return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                    }))
                }
            }, u.prototype.confirm = function (e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, u.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, u.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, u.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, u.prototype.unbindProxyEvents = function () {
                o.unbind(this.proxyImage, "load", this), o.unbind(this.proxyImage, "error", this)
            }, a
        }
        "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], a) : e.imagesLoaded = a(e.EventEmitter, e.eventie)
    }(window),
    function (e) {
        "use strict";

        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var n, i, r;

        function o(e, t) {
            (n(e, t) ? r : i)(e, t)
        }
        "classList" in document.documentElement ? (n = function (e, t) {
            return e.classList.contains(t)
        }, i = function (e, t) {
            e.classList.add(t)
        }, r = function (e, t) {
            e.classList.remove(t)
        }) : (n = function (e, n) {
            return t(n).test(e.className)
        }, i = function (e, t) {
            n(e, t) || (e.className = e.className + " " + t)
        }, r = function (e, n) {
            e.className = e.className.replace(t(n), " ")
        });
        var s = {
            hasClass: n,
            addClass: i,
            removeClass: r,
            toggleClass: o,
            has: n,
            add: i,
            remove: r,
            toggle: o
        };
        "function" == typeof define && define.amd ? define(s) : e.classie = s
    }(window),
    function (e) {
        "use strict";
        var t = e.document.documentElement;

        function n() {
            var n = t.clientHeight,
                i = e.innerHeight;
            return n < i ? i : n
        }

        function i() {
            return e.pageYOffset || t.scrollTop
        }

        function r(e, t) {
            var r = e.offsetHeight,
                o = i(),
                s = o + n(),
                a = function (e) {
                    var t = 0,
                        n = 0;
                    do {
                        isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft)
                    } while (e = e.offsetParent);
                    return {
                        top: t,
                        left: n
                    }
                }(e).top;
            return a + r * (t = t || 0) <= s && a + r - r * t >= o
        }

        function o(e, t) {
            this.el = e, this.options = function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }(this.defaults, t), this.processing = !1, this._init(), this.masonry = null
        }
        o.prototype = {
            defaults: {
                minDuration: 0,
                maxDuration: 0,
                viewportFactor: 0
            },
            _init: function (t) {
                this.processing && console.log("__processing__busy_"), this.processing = !0, this.items = Array.prototype.slice.call(document.querySelectorAll("#" + this.el.id + " > li")), this.itemsCount = this.items.length, this.itemsRenderedCount = 0, this.didScroll = !1;
                var n = this;
                imagesLoaded(this.el, (function () {
                    n.masonry ? n.masonry.appended(t) : n.masonry = new Masonry(n.el, {
                        itemSelector: "li",
                        transitionDuration: 0
                    }), Modernizr.cssanimations && (n.items.forEach((function (e, t) {
                        classie.has(e, "shown") || classie.has(e, "animate") || !r(e, n.options.viewportFactor) || (n._checkTotalRendered(), classie.add(e, "animate"))
                    })), e.addEventListener("scroll", (function () {
                        n._onScrollFn()
                    }), !1), e.addEventListener("resize", (function () {
                        n._resizeHandler()
                    }), !1)), n.processing = !1, $(".load-gallery-spiner").css("display", "none")
                }))
            },
            _onScrollFn: function () {
                var e = this;
                this.didScroll || (this.didScroll = !0, setTimeout((function () {
                    e._scrollPage()
                }), 60))
            },
            _scrollPage: function () {
                var e = this;
                this.items.forEach((function (t, o) {
                    classie.has(t, "shown") || classie.has(t, "animate") || !r(t, e.options.viewportFactor) || setTimeout((function () {
                        var r = i() + n() / 2;
                        if (e.el.style.WebkitPerspectiveOrigin = "50% " + r + "px", e.el.style.MozPerspectiveOrigin = "50% " + r + "px", e.el.style.perspectiveOrigin = "50% " + r + "px", e._checkTotalRendered(), e.options.minDuration && e.options.maxDuration) {
                            var o = Math.random() * (e.options.maxDuration - e.options.minDuration) + e.options.minDuration + "s";
                            t.style.WebkitAnimationDuration = o, t.style.MozAnimationDuration = o, t.style.animationDuration = o
                        }
                        classie.add(t, "animate")
                    }), 25)
                })), this.didScroll = !1
            },
            _resizeHandler: function () {
                var e = this;
                this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout((function () {
                    e._scrollPage(), e.resizeTimeout = null
                }), 1e3)
            },
            _checkTotalRendered: function () {
                ++this.itemsRenderedCount, this.itemsRenderedCount === this.itemsCount && e.removeEventListener("scroll", this._onScrollFn)
            }
        }, e.AnimOnScroll = o
    }(window),
    function (e) {
        "use strict";

        function t(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function n(e, n) {
            this.el = e, this.options = t({}, this.options), t(this.options, n), this._init()
        }
        n.prototype.options = {
            newTab: !0,
            stickyPlaceholder: !0,
            onChange: function (e) {
                return !1
            }
        }, n.prototype._init = function () {
            var e = this.el.querySelector("option[selected]");
            this.hasDefaultPlaceholder = e && e.disabled, this.selectedOpt = e || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
        }, n.prototype._createSelectEl = function () {
            var e = this,
                t = "",
                n = function (t) {
                    if (t == e.selectedOpt) return "";
                    var n = "",
                        i = "",
                        r = "";
                    return !t.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ", this.foundSelected = !0), t.getAttribute("data-class") && (i += t.getAttribute("data-class")), t.getAttribute("data-link") && (r = "data-link=" + t.getAttribute("data-link")), "" !== i && (n = 'class="' + i + '" '), "<li " + n + r + ' data-option data-value="' + t.value + '"><span>' + t.textContent + "</span></li>"
                };
            [].slice.call(this.el.children).forEach((function (e) {
                if (!e.disabled) {
                    var i = e.tagName.toLowerCase();
                    "option" === i ? t += n(e) : "optgroup" === i && (t += '<li class="cs-optgroup"><span>' + e.label + "</span><ul>", [].slice.call(e.children).forEach((function (e) {
                        t += n(e)
                    })), t += "</ul></li>")
                }
            }));
            var i = '<div class="cs-options"><ul>' + t + "</ul></div>";
            this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + i, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
        }, n.prototype._initEvents = function () {
            var e = this;
            this.selPlaceholder.addEventListener("click", (function () {
                e._toggleSelect()
            })), this.selOpts.forEach((function (t, n) {
                t.addEventListener("click", (function () {
                    e.current = n, e._changeOption(), e._toggleSelect()
                }))
            })), document.addEventListener("click", (function (t) {
                var n = t.target;
                e._isOpen() && n !== e.selEl && ! function (e, t) {
                    if (!e) return !1;
                    for (var n = e.target || e.srcElement || e || !1; n && n != t;) n = n.parentNode || !1;
                    return !1 !== n
                }(n, e.selEl) && e._toggleSelect()
            })), this.selEl.addEventListener("keydown", (function (t) {
                switch (t.keyCode || t.which) {
                    case 38:
                        t.preventDefault(), e._navigateOpts("prev");
                        break;
                    case 40:
                        t.preventDefault(), e._navigateOpts("next");
                        break;
                    case 32:
                        t.preventDefault(), e._isOpen() && void 0 !== e.preSelCurrent && -1 !== e.preSelCurrent && e._changeOption(), e._toggleSelect();
                        break;
                    case 13:
                        t.preventDefault(), e._isOpen() && void 0 !== e.preSelCurrent && -1 !== e.preSelCurrent && (e._changeOption(), e._toggleSelect());
                        break;
                    case 27:
                        t.preventDefault(), e._isOpen() && e._toggleSelect()
                }
            }))
        }, n.prototype._navigateOpts = function (e) {
            this._isOpen() || this._toggleSelect();
            var t = void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
            ("prev" === e && t > 0 || "next" === e && t < this.selOptsCount - 1) && (this.preSelCurrent = "next" === e ? t + 1 : t - 1, this._removeFocus(), classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
        }, n.prototype._toggleSelect = function () {
            this._removeFocus(), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), classie.add(this.selEl, "cs-active"))
        }, n.prototype._changeOption = function () {
            void 0 !== this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
            var t = this.selOpts[this.current];
            this.selPlaceholder.textContent = t.textContent, this.el.value = t.getAttribute("data-value");
            var n = this.selEl.querySelector("li.cs-selected");
            n && classie.remove(n, "cs-selected"), classie.add(t, "cs-selected"), t.getAttribute("data-link") && (this.options.newTab ? e.open(t.getAttribute("data-link"), "_blank") : e.location = t.getAttribute("data-link")), this.options.onChange(this.el.value)
        }, n.prototype._isOpen = function (e) {
            return classie.has(this.selEl, "cs-active")
        }, n.prototype._removeFocus = function (e) {
            var t = this.selEl.querySelector("li.cs-focus");
            t && classie.remove(t, "cs-focus")
        }, e.SelectFx = n
    }(window);
