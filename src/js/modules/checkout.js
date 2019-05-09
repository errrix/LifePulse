!function (s, c) {
    s.LiqPayCheckout = new function () {
        var i, a, e = s.encodeURIComponent, o = {}, p = (new Date).getTime().toString();
        this.init = function (t) {
            var a = (t.host || "https://www.liqpay.ua/") + (t.language || "ru") + "/checkoutjs";
            for (var n in a += "?hostname=" + e(location.hostname), a += "&port=" + e(location.port), a += "&protocol=" + e(location.protocol), a += "&uid=" + p, t) a += "&" + e(n) + "=" + e(t[n]);
            (i = c.createElement("iframe")).setAttribute("frameborder", "0"), i.setAttribute("allowtransparency", "true"), i.setAttribute("scrolling", "no"), i.setAttribute("style", "width:100%;height:0px;background-color:transparent;"), i.setAttribute("src", a);
            try {
                "popup" == t.mode ? this.popup(i) : c.querySelector(t.embedTo || "body").appendChild(i)
            } catch (t) {
                console.error(t)
            }
            return this
        }, this.popup = function (t) {
            (a = c.createElement("div")).innerHTML = '<div id="liqpay_widget_popup_container" style="position: fixed !important;top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;z-index: 3000 !important"><div id="liqpay_widget_popup_background" style="width: 100% !important;height: 100% !important;background: #000 !important;opacity: .4 !important"></div><div id="liqpay_widget_popup_iframe" style="position: absolute !important;\ttop: 50% !important;left: 50% !important;width: 385px !important;border-radius: 6px !important;\ttransform: translate(-50%, -50%) !important;-moz-transform: translate(-50%, -50%) !important;-ms-transform: translate(-50%, -50%) !important;-webkit-transform: translate(-50%, -50%) !important;-o-transform: translate(-50%, -50%) !important"></div></div>', c.querySelector("body").appendChild(a), c.querySelector("#liqpay_widget_popup_iframe").appendChild(t)
        }, this.on = function (t, a) {
            if ("function" == typeof a) return t in o || (o[t] = []), o[t].push(a), this
        }, this.off = function (t, a) {
            if (t in o) {
                for (var n = [], e = 0; e < o[t].length; e++) o[t][e] != a && n.push(o[t][e]);
                return o[t] = n, this
            }
        }, this.call = function (t, a) {
            if (t in o) {
                for (var n = 0; n < o[t].length; n++) o[t][n](a);
                return this
            }
        };
        var n = function (t, a) {
            var n = {cmd: t, params: a, uid: p}, e = JSON.stringify(n);
            i.contentWindow.postMessage(e, "*")
        }, t = function (t) {
            if ("object" != typeof t.data) try {
                var a = JSON.parse(t.data);
                if (!a) return;
                if (a.uid != p) return;
                var n = a.cmd || a.params.cmd;
                this.call(n, a.params), this.call("_", a.params)
            } catch (t) {
            }
        }.bind(this);
        s.addEventListener ? s.addEventListener("message", t, !1) : s.attachEvent("onmessage", t), this.on("window.resize", function (t) {
            i.style.height = t.height + "px"
        }), this.on("liqpay.close", function () {
            i.parentNode.removeChild(i), a && a.parentNode.removeChild(a)
        });
        var r = void 0;
        this.on("applepay.canUse", function (t) {
            s.ApplePaySession && t.applepay_merchant_id && s === s.parent ? ApplePaySession.canMakePaymentsWithActiveCard(t.applepay_merchant_id).then(function (t) {
                n("applepay.canUse", t ? {canUse: !0} : {canUse: !1})
            }) : n("applepay.canUse", {canUse: !1})
        }), this.on("applepay.begin", function (t) {
            (r = new s.ApplePaySession(1, t.apple_data)).onvalidatemerchant = function (t) {
                n("applepay.onvalidatemerchant", {validationURL: t.validationURL, domain: c.location.hostname})
            }, r.onpaymentauthorized = function (t) {
                n("applepay.onpaymentauthorized", {paymentData: t.payment.token.paymentData})
            }.bind(this), r.oncancel = function (t) {
                n("applepay.oncancel", {})
            }.bind(this), r.begin()
        }), this.on("applepay.completeMerchantValidation", function (t) {
            r.completeMerchantValidation(t.merchantSession)
        }), this.on("applepay.completePayment", function (t) {
            r.completePayment(t.status)
        }), this.on("applepay.abort", function () {
            r.abort()
        })
    }, s.LiqPayCheckoutCallback && s.LiqPayCheckoutCallback()
}(window, document);