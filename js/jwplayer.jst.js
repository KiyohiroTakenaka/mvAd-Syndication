/** takenaka add**/

var tag = new Object;
tag = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/14422805/Jst_test_mz&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=http:%2F%2Fwww3.stream.co.jp/&correlator=[timestamp]";

var value,dir,cid,mid,token,ad,auto,title,thum;

function get_location(){      
var pkg =location.search.substring(1).split('?');    
for(var i=0;pkg[i];i++) {
        value = pkg[i].split(',');
      }    
        dir = value[0];  
        cid = value[1];
        token = value[2];
        mid = value[3];
        ad = value[4];
        auto = value[5];
        title = value[6];
        thum = value[7];
};

if (ad!=="true")  ad="false";
if (auto!=="true")  auto=="false";


get_location();
var param = ({
  "mvAd-play" : {
    primary : "html5",
    androidhls : true,
    autostart:auto,
    skin: {
     name: "Stormtrooper",
     active: "red",
     inactive: "blue",
     background: "azure"
    },
    playlist : [{
      image:thum,
      cid : cid,
      mid : mid,
      token : token,
    }],
    plugins : {
    },
    width: "100%",
    aspectratio: "16:9"
  }
});
/**  jwplayer.jst.ext.js   **/

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? module.exports = e()
        : "function" == typeof define && define.amd
            ? define(e)
            : t.ES6Promise = e()
}(this, function () {
    "use strict";
    function t(t) {
        return "function" == typeof t || "object" == typeof t && null !== t
    }
    function e(t) {
        return "function" == typeof t
    }
    function n(t) {
        I = t
    }
    function r(t) {
        J = t
    }
    function o() {
        return function () {
            return process.nextTick(a)
        }
    }
    function i() {
        return "undefined" != typeof H
            ? function () {
                H(a)
            }
            : c()
    }
    function s() {
        var t = 0,
            e = new V(a),
            n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }),
        function () {
            n.data = t = ++t % 2
        }
    }
    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
        function () {
            return t
                .port2
                .postMessage(0)
        }
    }
    function c() {
        var t = setTimeout;
        return function () {
            return t(a, 1)
        }
    }
    function a() {
        for (var t = 0; t < G; t += 2) {
            var e = $[t],
                n = $[t + 1];
            e(n),
            $[t]     = void 0,
            $[t + 1] = void 0
        }
        G = 0
    }
    function f() {
        try {
            var t = require,
                e = t("vertx");
            return H = e.runOnLoop || e.runOnContext,
            i()
        } catch (n) {
            return c()
        }
    }
    function l(t, e) {
        var n = arguments,
            r = this,
            o = new this.constructor(p);
        void 0 === o[et] && k(o);
        var i = r._state;
        return i
            ? !function () {
                var t = n[i - 1];
                J(function () {
                    return x(i, o, t, r._result)
                })
            }()
            : E(r, o, t, e),
        o
    }
    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) 
            return t;
        var n = new e(p);
        return g(n, t),
        n
    }
    function p() {}
    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }
    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function _(t) {
        try {
            return t.then
        } catch (e) {
            return it.error = e,
            it
        }
    }
    function y(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }
    function m(t, e, n) {
        J(function (t) {
            var r = !1,
                o = y(n, e, function (n) {
                    r || (r = !0, e !== n
                        ? g(t, n)
                        : S(t, n))
                }, function (e) {
                    r || (r = !0, j(t, e))
                }, "Settle: " + (
                    t._label || " unknown promise"
                ));
            !r && o && (r = !0, j(t, o))
        }, t)
    }
    function b(t, e) {
        e._state === rt
            ? S(t, e._result)
            : e._state === ot
                ? j(t, e._result)
                : E(e, void 0, function (e) {
                    return g(t, e)
                }, function (e) {
                    return j(t, e)
                })
    }
    function w(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h
            ? b(t, n)
            : r === it
                ? j(t, it.error)
                : void 0 === r
                    ? S(t, n)
                    : e(r)
                        ? m(t, n, r)
                        : S(t, n)
    }
    function g(e, n) {
        e === n
            ? j(e, v())
            : t(n)
                ? w(e, n, _(n))
                : S(e, n)
    }
    function A(t) {
        t._onerror && t._onerror(t._result),
        P(t)
    }
    function S(t, e) {
        t._state === nt && (
            t._result = e,
            t._state  = rt,
            0 !== t._subscribers.length && J(P, t)
        )
    }
    function j(t, e) {
        t._state === nt && (t._state = ot, t._result = e, J(A, t))
    }
    function E(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null,
        o[i]       = e,
        o[i + rt]  = n,
        o[i + ot]  = r,
        0 === i && t._state && J(P, t)
    }
    function P(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) 
                r = e[s],
                o = e[s + n],
                r
                    ? x(n, r, o, i)
                    : o(i);
            t._subscribers.length = 0
        }
    }
    function T() {
        this.error = null
    }
    function M(t, e) {
        try {
            return t(e)
        } catch (n) {
            return st.error = n,
            st
        }
    }
    function x(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = void 0,
            a = void 0;
        if (i) {
            if (s = M(r, o), s === st
                ? (a = !0, u = s.error, s = null)
                : c = !0,
            n === s) 
                return void j(n, d())
        } else 
            s = o,
            c = !0;
        n._state !== nt || (i && c
            ? g(n, s)
            : a
                ? j(n, u)
                : t === rt
                    ? S(n, s)
                    : t === ot && j(n, s))
    }
    function C(t, e) {
        try {
            e(function (e) {
                g(t, e)
            }, function (e) {
                j(t, e)
            })
        } catch (n) {
            j(t, n)
        }
    }
    function O() {
        return ut++
    }
    function k(t) {
        t[et]          = ut++,
        t._state       = void 0,
        t._result      = void 0,
        t._subscribers = []
    }
    function Y(t, e) {
        this._instanceConstructor = t,
        this.promise              = new t(p),
        this.promise[et] || k(this.promise),
        B(e)
            ? (
                this._input     = e,
                this.length     = e.length,
                this._remaining = e.length,
                this._result    = new Array(this.length),
                0 === this.length
                    ? S(this.promise, this._result)
                    : (
                        this.length = this.length || 0,
                        this._enumerate(),
                        0 === this._remaining && S(this.promise, this._result)
                    )
            )
            : j(this.promise, q())
    }
    function q() {
        return new Error("Array Methods must be provided an Array")
    }
    function F(t) {
        return new Y(this, t).promise
    }
    function D(t) {
        var e = this;
        return new e(B(t)
            ? function (n, r) {
                for (var o = t.length, i = 0; i < o; i++) 
                    e
                        .resolve(t[i])
                        .then(n, r)
                }
            : function (t, e) {
                return e(new TypeError("You must pass an array to race."))
            })
    }
    function K(t) {
        var e = this,
            n = new e(p);
        return j(n, t),
        n
    }
    function L() {
        throw new TypeError(
            "You must pass a resolver function as the first argument to the promise constru" +
            "ctor"
        )
    }
    function N() {
        throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object cons" +
            "tructor cannot be called as a function."
        )
    }
    function U(t) {
        this[et]          = O(),
        this._result      = this._state = void 0,
        this._subscribers = [],
        p !== t && ("function" != typeof t && L(), this instanceof U
            ? C(this, t)
            : N())
    }
    function W() {
        var t = void 0;
        if ("undefined" != typeof global) 
            t = global;
        else if ("undefined" != typeof self) 
            t = self;
        else 
            try {
                t = Function("return this")()
            } catch (e) {
                throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                )
            }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object
                    .prototype
                    .toString
                    .call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) 
                return
        }
        t.Promise = U
    }
    var z = void 0;
    z = Array.isArray
        ? Array.isArray
        : function (t) {
            return "[object Array]" === Object
                .prototype
                .toString
                .call(t)
        };
    var B  = z,
        G  = 0,
        H  = void 0,
        I  = void 0,
        J  = function (t, e) {
            $[G]     = t,
            $[G + 1] = e,
            G        += 2,
            2 === G && (I
                ? I(a)
                : tt())
        },
        Q  = "undefined" != typeof window
            ? window
            : void 0,
        R  = Q || {},
        V  = R.MutationObserver || R.WebKitMutationObserver,
        X  = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}
            .toString
            .call(process),
        Z  = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        $  = new Array(1e3),
        tt = void 0;
    tt = X
        ? o()
        : V
            ? s()
            : Z
                ? u()
                : void 0 === Q && "function" == typeof require
                    ? f()
                    : c();
    var et = Math
            .random()
            .toString(36)
            .substring(16),
        nt = void 0,
        rt = 1,
        ot = 2,
        it = new T,
        st = new T,
        ut = 0;
    return Y.prototype._enumerate = function () {
        for (
            var t = this.length,
            e     = this._input,
            n     = 0;
            this._state === nt && n < t;
            n++
        ) 
            this._eachEntry(e[n], n)
    },
    Y.prototype._eachEntry        = function (t, e) {
        var n = this._instanceConstructor,
            r = n.resolve;
        if (r === h) {
            var o = _(t);
            if (o === l && t._state !== nt) 
                this._settledAt(t._state, e, t._result);
            else if ("function" != typeof o) 
                this._remaining--,
                this._result[e] = t;
            else if (n === U) {
                var i = new n(p);
                w(i, t, o),
                this._willSettleAt(i, e)
            } else 
                this._willSettleAt(new n(function (e) {
                    return e(t)
                }), e)
        } else 
            this._willSettleAt(r(t), e)
    },
    Y.prototype._settledAt        = function (t, e, n) {
        var r = this.promise;
        r._state === nt && (this._remaining--, t === ot
            ? j(r, n)
            : this._result[e] = n),
        0 === this._remaining && S(r, this._result)
    },
    Y.prototype._willSettleAt     = function (t, e) {
        var n = this;
        E(t, void 0, function (t) {
            return n._settledAt(rt, e, t)
        }, function (t) {
            return n._settledAt(ot, e, t)
        })
    },
    U.all                         = F,
    U.race                        = D,
    U.resolve                     = h,
    U.reject                      = K,
    U._setScheduler               = n,
    U._setAsap                    = r,
    U._asap                       = J,
    U.prototype                   = {
        "catch"    : function (t) {
            return this.then(null, t)
        },
        constructor: U,
        then       : l
    },
    U.polyfill                    = W,
    U.Promise                     = U,
    U
}),
ES6Promise.polyfill();

var pid, mid, cid, keyJson, pdEnabled, undefined;
var hasFlash = false;
var mp4uri = [];
var video = {};
var httpProtocol = 'http://';
var httpProtocolParam = '';
var url = {
  VERSION   : '3.01',
  JW        : 'jplib.cdnext.stream.ne.jp',
  LIBRARY   : 'jblib-manifest.cdnext.stream.ne.jp/jplib',
  MAKE_MP4  : 'jblib-manifest.cdnext.stream.ne.jp/jplib',
  ACCESS_API: 'api01-platform.stream.co.jp/apiservice/getAccessControl2/'
};
/**
 * デバッグコード
 */
var debugFlag = false;
var debugColor;
Array.prototype.getLastVal = function () {
  return this[this.length - 1];
};
var debug = function (type, msg, playerId) {
  var userAgent = window.navigator.userAgent.toLowerCase();
  if (!msg || !debugFlag) return false;
  var file;
  if (type === 'setup') {
    console.log('%c[Setup]%c■■■%c ' + msg, 'color: Lime;background-color: Black; padding: 3px;font-weight: bold;', 'color:' + debugColor + ';background-color:' + debugColor, '');
  }
  if (type === 'jwplayer') {
    console.log('%c[Player]%c ' + msg, 'color: Blue;background-color: SkyBlue; padding: 3px;font-weight: bold;', 'color:Lime;');
  }
  if (type === 'eq') {
    console.log('%cAnalytics[EQ]%c ' + msg, 'color: blue;background-color: #FFFC03; padding: 3px;font-weight: bold;', '');
  }
  if (type === 'aq') {
    console.log('%cAnalytics[AQ]%c ' + msg, 'color: green;background-color: #FFFC03; padding: 3px;font-weight: bold;', '');
  }
  if (type === 'ga') {
    console.log('%cAnalytics[GA]%c ' + msg, 'color: #DE0006;background-color: #FFFC03; padding: 3px;font-weight: bold;', '');
  }
  if (type === 'GET-false') {
    console.log('%c[GET]%c ' + msg, 'color: white;background-color: green; padding: 3px;font-weight: bold;', '');
  }
  if (type === 'VideoFile') {
    if (msg.match(/m3u8/)) {
      file = 'm3u8';
    } else if (msg.match(/mp4/)) {
      file = 'mp4';
    }
    console.log('%c[VideoFile: ' + file + ']%c ' + msg, 'color: blue;background-color: SkyBlue; padding: 0 3px;font-weight: bold;', '');
  }
  if (type === 'info') {
    if (msg.match(/m3u8/)) {
      file = 'm3u8';
    } else if (msg.match(/mp4/)) {
      file = 'mp4';
    }
    if (userAgent.indexOf('msie') === -1) {
      console.group(playerId);
    }
    console.log('LogColor: %c■■■', 'color:' + debugColor + ';background-color:' + debugColor);
    console.log('Protocol:', httpProtocol);
    console.log('Primary:', param[playerId].primary);
    console.log('Flash:', hasFlash);
    console.log('PD設定:', pdEnabled);
    console.log('File:', file);
    console.log('Video:', msg);
    if (userAgent.indexOf('msie') === -1) {
      console.groupEnd();
    }
  }
};
/**
 * 例外処理 エラー表示
 */
var showError = function (message, playerId) {
  var jwp = document.getElementById(playerId);
  var jwTitle = jwp.querySelector('.jw-title');
  var player = param[playerId];
  var errorBox = document.createElement('div');
  var errorBackImage = document.createElement('div');
  var errorMessage = document.createElement('p');
  var width = player.width + 'px';
  var height = player.height + 'px';
  var previousErrorBox = jwp.querySelector(".errorBackImage");
  if (previousErrorBox) {
    previousErrorBox.parentNode.removeChild(previousErrorBox);
  }
  if (width === undefined || height === undefined) {
    width = param[playerId].width + 'px';
    height = param[playerId].height + 'px';
  }
  //jwplayer hide
  if (jwTitle) {
    jwp.removeChild(jwTitle);
    jwplayer(playerId).setControls(false);
  } else {
    jwp.innerHTML = '';
  }

  //オーバーレイ
  errorBox.style.width = width;
  errorBox.style.height = height;
  errorBox.style.background = 'rgba(0,0,0,0.6)';
  errorBox.className = 'errorBox';
  if (jwp) {
    errorBox.style.position = 'absolute';
  }
  //メッセージ
  errorMessage.innerText = message;
  errorMessage.style.color = '#fff';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.lineHeight = height;
  errorMessage.style.margin = '0';
  errorMessage.className = 'errorMessage';

  //背景
  errorBackImage.style.width = width;
  errorBackImage.style.height = height;
  errorBackImage.style.background = 'url("' + player.playlist[0].image + '") #000';
  errorBackImage.style.backgroundSize = 'contain';
  errorBackImage.className = 'errorBackImage';

  ////append
  errorBox.appendChild(errorMessage);
  errorBackImage.appendChild(errorBox);
  jwp.appendChild(errorBackImage);
};
var error404 = {
  'service.jsonp': 'プレイヤーが生成できません(E1001)',
  'jwplayer.js'  : 'プレイヤーが生成できません(E1002)',
  'makeJsonp.php': 'プレイヤーが生成できません(E1003)'
};
var accessErrorCode = {
  '2000': 'この動画は、再生が許可されておりません(E2000)',
  '2001': 'この動画は、再生が許可されておりません(E2001)',
  '2002': 'この動画は現在公開されておりません(E2002)',
  '2003': 'この動画はまだ公開されておりません(E2003)',
  '2004': 'この動画の公開は終了しました(E2004)'
};
var errorMessage = {
  //other
  'Flash plugin failed to load'                               : 'Flash plugin failed to load',
  'Cannot load M3U8: No leveles to play'                      : 'Cannot load M3U8: No leveles to play',
  //Loading Errors
  'Error loading player: Could not load player configuration' : 'プレイヤーを呼び出せません(JW001)',
  'Error loading player:Flash version must be 11.2 or greater': 'Flash Playerを最新版にしてください(JW002)',
  'Error loading player:No media sources found'               : 'ファイルが見つかりません(JW003)',
  'Error loading player:Offline playback not supported'       : 'オフラインでは再生できないファイルです(JW004)',
  //Playlist Errors
  'Error loading player: No playable sources found'           : '再生可能なファイルがありません(JW005)',
  'Error loading playlist: File not found'                    : '再生可能なファイルがありません(JW006)',
  'Error loading playlist: Crossdomain loading denied'        : 'セキュリティ上の制限がかかっています(JW007)',
  'Error loading playlist: Error loading file'                : 'ファイルの取得に失敗しました(JW008)',
  'Error loading playlist: Not a valid RSS feed'              : 'ファイルの取得に失敗しました(JW009)',
  'Error loading playlist: No playable sources found'         : '再生可能なファイルがありません(JW010)',
  //File Errors
  'Error loading media: File not found'                       : '再生可能なファイルがありません(JW011)',
  'Cannot load M3U8: 404 '                                    : '再生可能なファイルがありません(JW012)',
  'Cannot load M3U8: 404 Not Found'                           : '再生可能なファイルがありません(JW012)',
  'Cannot load M3U8: 404 not found'                           : '再生可能なファイルがありません(JW012)',
  'Error loading media: File could not be played'             : '再生可能なファイルがありません(JW013)',
  'Cannot load M3U8: File crossdomain access denied'          : 'セキュリティ上の制限がかかっています(JW014)',
  //RTMP Errors
  'Error loading stream: Could not connect to server'         : 'サーバーに接続できません(JW015)',
  'Error loading stream: ID not found on server'              : '不正なIDです(JW016)',
  'Error loading stream: Manifest not found or invalid'       : 'ファイルの取得に失敗しました(JW017)',
  //Playback Issues
  'Video stutters frequently'                                 : '正しく再生できませんでした(JW018)',
  'Video is stretched or has black bars'                      : '正しく再生できませんでした(JW019)',
  'MP3 playback is too fast or too slow'                      : '正しく再生できませんでした(JW020)',
  'MP4 video seeking is not working'                          : 'ファイルの取得に失敗しました(JW021)'
};

/**
 * --------------------------------------------------------------------------------------------------------------------
 * Analytics class
 * --------------------------------------------------------------------------------------------------------------------
 */
    //aq
var aqObject = aqObject || {
    _q    : [],
    tag   : function () {
      this._q.push(arguments);
    },
    jsload: function (src) {
      var a, s;
      if ((a = document.createElement("script"))) {
        a.type = "text/javascript";
        a.async = true;
        a.src = httpProtocol + src;
        s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(a, s);
      }
    }
  };
//analytics class
var Analytics = (function () {
  function Analytics() {
    this.init();
  }

  Analytics.prototype.getDomain = function () {
    var arr_uri = location.hostname.match(/^(.*?)([a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i);
    if (arr_uri == null) return ".localhost";
    arr_uri[2] = "." + arr_uri[2];
    return arr_uri[2];
  };
  Analytics.prototype.setBaseURL = function (value) {
    this._baseURL = value;
  };
  Analytics.prototype.getBaseURL = function () {
    return this._baseURL;
  };
  Analytics.prototype.getVc = function () {
    return this._vc;
  };
  Analytics.prototype.setVc = function (value) {
    this._vc = value;
  };
  Analytics.prototype.getSelf = function () {
    return this._self;
  };
  Analytics.prototype.setSelf = function (value) {
    this._self = value;
  };
  Analytics.prototype.getCid = function () {
    return this._cid;
  };
  Analytics.prototype.setCid = function (value) {
    this._cid = value;
  };
  Analytics.prototype.getSid = function () {
    return this._sid;
  };
  Analytics.prototype.setSid = function (value) {
    this._sid = value;
  };
  // set from external
  Analytics.prototype.getUrl = function () {
    return this._url;
  };
  Analytics.prototype.setUrl = function (value) {
    this._url = value;
  };
  Analytics.prototype.getRef = function () {
    return this._ref;
  };
  Analytics.prototype.setRef = function (value) {
    this._ref = value;
  };
  Analytics.prototype.getSvcid = function () {
    return this._svcid;
  };
  Analytics.prototype.setSvcid = function (value) {
    this._svcid = value;
  };
  Analytics.prototype.getVid = function () {
    return this._vid;
  };
  Analytics.prototype.setVid = function (value) {
    this._vid = value;
  };
  Analytics.prototype.getUid = function () {
    return this._uid;
  };
  Analytics.prototype.setUid = function (value) {
    this._uid = value;
  };
  Analytics.prototype.getTotal = function () {
    return this._total;
  };
  Analytics.prototype.setTotal = function (value) {
    this._total = value;
  };
  Analytics.prototype.getPid = function () {
    return this._pid;
  };
  Analytics.prototype.setPid = function (value) {
    this._pid = value;
  };
  Analytics.prototype.getTagType = function () {
    return this._tagType;
  };
  Analytics.prototype.setTagType = function (value) {
    this._tagType = value;
  };
  Analytics.prototype.getObject = function () {
    return this._object;
  };
  Analytics.prototype.setObject = function (value) {
    this._object = value;
  };
  Analytics.prototype.requestUpdate = function (req) {
    this.requestExec(req);
  };
  Analytics.prototype.lastBeacon = "";
  Analytics.prototype.request = function (obj) {
    if (this.lastBeacon == obj.stat) {
      return;
    }
    this.lastBeacon = obj.stat;
    this.requestExec(obj);
  };
  Analytics.prototype.requestExec = function (obj) {
    var urlstr = this.genURL(obj);
    if (urlstr != "") {
      this.send(urlstr);
      if (obj.c) {
        debug('eq', 'click: ' + obj.c);
      } else {
        debug('eq', obj.stat);
      }
    }
  };
  /**
   * actual sending process
   * @param urlstr URL(beacon)
   */
  Analytics.prototype.send = function (urlstr) {
    var target = document.createElement("script");
    target.src = urlstr;
    document.body.appendChild(target);
    document.body.removeChild(target);
  };
  /**
   * setup beacon url
   * @param dataobj beacon object
   */
  Analytics.prototype.genURL = function (dataobj) {
    // set mandatory values
    var res = this.getBaseURL();
    if (this.getSvcid() === undefined || this.getSvcid() === null || this.getSvcid() === "") return "";
    res += "?sv=" + encodeURIComponent(this.getSvcid());
    if (dataobj.playhead === undefined || dataobj.playhead === null || dataobj.playhead === "") return "";
    res += "&s=" + encodeURIComponent(dataobj.playhead);
    if (dataobj.stat === undefined || dataobj.stat === null || dataobj.stat === "") return "";
    res += "&e=" + encodeURIComponent(dataobj.stat);
    if (this.getVid() === undefined || this.getVid() === null || this.getVid() === "") return "";
    res += "&v=" + encodeURIComponent(this.getVid());
    res += "&lt=" + new Date().getTime();

    if (this.getVc()) {
      res += "&vc=" + encodeURIComponent(this.getVc());
    }
    if (this.getSid()) {
      res += "&sd=" + encodeURIComponent(this.getSid());
    }
    if (this.getUid()) {
      res += "&u=" + encodeURIComponent(this.getUid());
    }
    if (this.getPid()) {
      res += "&p=" + encodeURIComponent(this.getPid());
    }

    if (this.getCid()) {
      res += "&cd=" + encodeURIComponent(this.getCid());
    }
    if (this.getRef()) {
      res += "&rf=" + encodeURIComponent(this.getRef());
    }
    if (this.getSelf()) {
      res += "&url=" + encodeURIComponent(this.getSelf());
    }
    if (this.getObject()) {
      res += "&o=" + encodeURIComponent(this.getObject());
    }
    if (this.getTagType()) {
      res += "&tagtype=" + encodeURIComponent(this.getTagType());
    }

    res += "&t=" + encodeURIComponent(this.getTotal());

    // set the rest of values
    var excludeParams = ["playhead", "stat"];
    for (var key in dataobj) {
      var isExcludeParam = excludeParams.indexOf(key);
      if (isExcludeParam < 0) {
        res += "&" + key + "=" + encodeURIComponent(dataobj[key]);
      }
    }

    return res;
  };
  Analytics.prototype.setEvents = function (playerAPI) {
    var _this = this;
    //_this.api = playerAPI;
    playerAPI.addEventListener("change_state", function () {

      var req = {
        playhead: playerAPI.getCurrentTime(),
        stat    : playerAPI.state
      };
      switch (playerAPI.state) {
        case "landing":
          _this.request(req);
          break;
        case "playing":
          // playing
          _this.request(req);
          break;
        case "paused":
          // stopping
          _this.request(req);
          break;
        case "seek_start":
          // start seeking
          req.stat = "paused";
          _this.request(req);
          break;
        case "complete":
          // complete
          _this.request(req);
          break;
        case "exit":
          // exit
          req.stat = "exit";
          _this.request(req);
          break;
      }
    });

    playerAPI.addEventListener("update", function () {
      var req = {
        playhead: playerAPI.getCurrentTime(),
        stat    : "updated"
      };
      _this.requestUpdate(req);
    });

    playerAPI.addEventListener("exit", function () {
      var req = {
        playhead: playerAPI.getCurrentTime(),
        stat    : "exit"
      };
      _this.request(req);
    })
  };
  Analytics.prototype.sendClickBeacon = function (type, time) {
    // click beacon
    var clickReq = {
      playhead: time,
      c       : type,
      stat    : "click"
    };
    this.requestUpdate(clickReq);
  };
  /**
   * initializing
   * set values that Analytics class generates itself.
   */
  Analytics.prototype.init = function () {
    // initializing value
    this.setSelf(encodeURIComponent(document.location.href));
    this.setVc(this.random(4));

    // get from url
    var cid = this.getQuerystring("cid", "");
    var sid = this.getQuerystring("sid", "");

    // the case cannot get from url
    if (cid == "") {
      this.setCid(this.createCid());
    } else {
      this.setCid(cid);
    }
    if (sid == "") {
      this.setSid(this.createSid());
    } else {
      this.setSid(sid);
    }
    // set baseURL
    this.initBaseURL();
  };
  /**
   * set beacon url
   */
  Analytics.prototype.initBaseURL = function () {
    var protocol = "http";
    if (location.href.indexOf("https://") == 0) {
      protocol = "https";
    }
    this._baseURL = protocol + '://eq-beacon.stream.co.jp/va/';
  };
  /**
   * get value from url query
   * @param key
   * @param default_
   */
  Analytics.prototype.getQuerystring = function (key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
      return default_;
    else
      return qs[1];
  };

  /**
   * add
   */
  Analytics.prototype.setCookieSID = function (sid) {
    var tmp = 'VA_SESSION_ID=' + sid + ';';
    tmp += ' path=/;';
    if (Analytics._domain) tmp += ' domain=' + Analytics._domain + ';';
    document.cookie = tmp;
  };
  Analytics.prototype.createSid = function () {
    if (document.cookie) {
      // retrieve from cookie
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
        var str = cookies[i].split("=");
        if (str[0] == 'VA_SESSION_ID') {
          return str[1];
        }
      }
    }

    var sid = this.random(32);
    this.setCookieSID(sid);
    return sid;
  };
// set value to cookie
  Analytics.prototype.setCookieCID = function (cid) {
    var dt = new Date();
    dt.setFullYear(dt.getFullYear() + 1);
    var tmp = 'VA_CONV_ID=' + cid + ';';
    tmp += ' path=/;';
    tmp += ' expires=' + dt.toGMTString() + ';';
    if (Analytics._domain) tmp += ' domain=' + Analytics._domain + ';';
    document.cookie = tmp;
  };
  Analytics.prototype.createCid = function () {
    Analytics._domain = this.getDomain();
    if (document.cookie) {
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
        var str = cookies[i].split("=");
        if (str[0] == 'VA_CONV_ID') {
          var _VANAY_CID = str[1];

          this.setCookieCID(_VANAY_CID);
          return str[1];
        }
      }
    }

    var cid = this.random(32);
    this.setCookieCID(cid);

    return cid;
  };
  Analytics.prototype.random = function (n) {
    var seed = 'abcdefghijklmnopqrstuvwxyz'
      + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      + '0123456789';
    seed = seed.split('');
    var s = '';
    for (var i = 0; i < n; i++) {
      s += seed[Math.floor(Math.random() * seed.length)];
    }
    return s;
  };
  /**
   * GoogleAnalyticsの生成
   * gapv が false 以外で gaにてpvを計測
   * @param gapv
   */
  Analytics.prototype.createGoogleAnalytics = function (gapv) {
    if (gapv === false) {
      return;
    }
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', keyJson.ga_id, 'auto', {'name': ''});
    ga('send', 'pageview');
  };

  return Analytics;
})();
/**
 * jsonp取得
 * @param fileUrl
 * @param completeAfterCallBack
 */
var jsonpRequest = function (fileUrl, completeAfterCallBack) {
  return new Promise(function (resolve, reject) {
    if (!fileUrl) {
      completeAfterCallBack();
      return;
    }
    debug('GET', fileUrl.split('/').getLastVal());
    var done = false;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = fileUrl;
    script.setAttribute('defer', true);
    document.getElementsByTagName('head')[0].appendChild(script);
    window.external_script_onload = completeAfterCallBack;
    script.onerror = function (error) {
      var errorSrc = error.target.src;
      for (var file in error404) {
        if (~errorSrc.indexOf(file)) {
          for (var pid in param) {
            showError(error404[file], pid);
          }
        }
      }
      reject({message: 'APIにアクセスできませんでした'});
    };
    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        completeAfterCallBack();
        script.onload = script.onreadystatechange = null;
        if (head && script.parentNode) {
          head.removeChild(script);
        }
        resolve();
      }
    }
  })
};

/**
 * etc
 */
var closeExtenstionButton = function (playerId) {
  var trg = document.getElementById(playerId);
  trg.parentNode.removeChild(trg);
  if (jwplayer().getState() === 'paused') {
    jwplayer().pause(false);
  }
};
var setDecode = function (str) {
  var str_check = str.match(/[^0-9]/);
  if (str_check) {
    str = base64decode(str);
  }
  return str;

};
var base64decode = function (e) {
  var base64list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  for (var r, a, t = "", n = -8, i = 0, o = 0; o < e.length; o++)(r = base64list.indexOf(e.charAt(o))) < 0 || (i = i << 6 | 63 & r, (n += 6) >= 0 && (a = i >> n & 255, 64 != r && (t += String.fromCharCode(a)), i &= 63, n -= 8));
  return t;
};
/**
 * jwPlayerのイベント設定
 */
var setPlayerEvent = function (player, playerId, analytics) {
  var eqObj = {};
  var config = param[playerId].plugins;
  var aqBase = 'page_type=VideoPlayer&cid=' + video[playerId].cid + '&MetaId=' + video[playerId].mid;
  var playFlgAq = video[playerId].playFlgAq;
  var replayFlg = video[playerId].replayFlg;
  //error :ga:aq
  player.on('error', function (error) {
    var message = errorMessage[error.message];
    if (!message) {
      message = error.message;
    }
    showError(message, playerId);
    debug('jwplayer', 'error');
    var errorMsg = '';
    try {
      errorMsg = encodeURIComponent(message);
    } catch (e) {
    }
    aqObject.tag("tag_cat", aqBase + "&event=error$message=" + errorMsg);
    debug('aq', message);

    if (video[playerId].ga) {
      ga('send', 'event', 'Video Player', "Error", video[playerId].title);
    }
  });

  player.on('setupError', function () {
    var message = errorMessage[error.message];
    if (!message) {
      message = error.message;
    }
    showError(message, playerId);
    debug('jwplayer', 'setupError', message);
  });

//play :eq:aq:ga
  player.on('play', function () {
    debug('jwplayer', 'play');

    if (replayFlg) {
      eqObj = {
        playhead: video[playerId].playhead,
        stat    : "replay"
      };
      replayFlg = false;
    } else {
      eqObj = {
        playhead: video[playerId].playhead,
        stat    : "playing"
      };
    }
    analytics.requestExec(eqObj);

    if (playFlgAq == false) {
      aqObject.tag("tag_cat", aqBase + "&event=landing&totaltime=" + video[playerId].duration);
      if (video[playerId].ga) {
        ga('send', 'event', 'Video Player', 'Play', video[playerId].title);
      }
      playFlgAq = true;
      debug('aq', 'landing');
    } else {
      aqObject.tag("tag_cat", aqBase + "&event=playing");
      debug('aq', 'playing');
    }
  });

  //complete :eq:aq:ga
  player.on('complete', function () {
    debug('jwplayer', 'Complete');
    aqObject.tag("tag_cat", aqBase + "&event=complete&duration=" + Math.ceil(this.getPosition()));
    debug('aq', 'complete');
    if (video[playerId].ga) {
      ga('send', 'event', 'Video Player', 'Complete', video[playerId].title);
    }
    analytics.requestExec({
      playhead: video[playerId].playhead,
      stat    : "complete"
    });
    playFlgAq = false;
    replayFlg = true;
  });

  //time :eq:aq
  player.on('time', function (object) {
    var nowPosition = Math.floor(object.position);
    if (nowPosition !== video[playerId].playhead && nowPosition % 5 === 0 && nowPosition > 0) {
      debug('jwplayer', 'Time: ' + object.position);
      aqObject.tag("tag_cat", aqBase + "&event=progress&duration=" + nowPosition);
      debug('aq', 'progress');
      video[playerId].playhead = nowPosition;

      analytics.requestExec({
        playhead: video[playerId].playhead,
        stat    : "updated"
      });
    }
  });

  //pause :eq:aq
  player.on('pause', function () {
    debug('jwplayer', 'Pause: ' + video[playerId].playhead);
    aqObject.tag("tag_cat", aqBase + "&event=paused");
    debug('aq', 'paused');
    analytics.requestExec({
      playhead: video[playerId].playhead,
      stat    : "paused"
    });
  });

  //seek :eq:aq
  player.on('seek', function () {
    debug('jwplayer', 'Seek: ' + Math.floor(video[playerId].playhead));
    aqObject.tag("tag_cat", aqBase + "&event=seek_start");
    debug('aq', 'seek_start');
    analytics.requestExec({
      playhead: Math.floor(video[playerId].playhead),
      stat    : "paused"
    });
  });

  //buffer :aq
  player.on('buffer', function () {
    debug('jwplayer', 'Buffer');
    debug('aq', 'buffering');
    aqObject.tag("tag_cat", aqBase + "&event=buffering");
  });
  // 貼り付けタグにセットされたfunctionを実行する
  if (param[playerId].jstOnReady !== undefined) {
    player.on('ready', param[playerId].jstOnReady);
  }

  /**
   * 「広告を表示」オプション
   */
  if (config.exlinks || config.sharing || config.showad) {
    var wrapper = document.createElement('div');
    wrapper.id = player.id + '_jwplayer.jst.ext';
    wrapper.style.position = 'relative';
    wrapper.style.bottom = 0;
  }
  if (config.showad) {
    // 広告表示開始
    player.on('adImpression', function () {
      debug('jwplayer', 'AdImpression');

      var baseTagId = player.id + "_showad";
      if (document.getElementById(baseTagId)) {
        document.getElementById(baseTagId).style.display = 'block';
      } else {
        var jwp = document.getElementById(player.id);
        var base = document.createElement('div');
        // 背景を含めた外側
        base.style.position = 'absolute';
        base.style.marginLeft = '30px';
        base.style.top = '0px';
        base.style.zIndex = 11;
        base.style.backgroundColor = 'rgba(0,0,0,0.7)';
        base.id = baseTagId;
        //文言
        var head = document.createElement('div');
        head.style.fontSize = '16px';
        head.style.color = '#fff';
        head.style.padding = '10px';
        //タイトル
        var head_title = document.createElement('span');
        head_title.style.color = '#fff';
        head_title.innerHTML = '';
        head.appendChild(head_title);
        base.appendChild(head);
        jwp.appendChild(base);
      }
    });

    // 広告の経過時間を取得
    player.on('adTime', function (adTime) {
      var baseTagId = player.id + "_showad";
      var div1body = document.getElementById(baseTagId);
      var div2body = div1body.childNodes;
      var div2spanbody = div2body[0].childNodes[0];
      var admessage = param[playerId].advertising.admessage;
      var advideotime = Math.ceil(adTime.duration); // 広告の再生時間
      var coursetime = advideotime - Math.ceil(adTime.position); // 残時間
      div2spanbody.innerHTML = admessage.replace(/xx/, coursetime);
    });

    player.on("adComplete", function () {
      debug('jwplayer', 'adComplete');
      deleteShowAd();
    });

    player.on('adSkipped', function () {
      debug('jwplayer', 'adSkipped');
      deleteShowAd();
    });

    //「この広告は*秒後に終了します」要素の削除
    var deleteShowAd = function () {
      var baseTagId = player.id + "_showad";
      if (document.getElementById(baseTagId)) {
        var showad = document.getElementById(baseTagId);
        showad.parentNode.removeChild(showad);
      }
    }
  }

  /**
   * ボタンを追加
   */
  //addbutton
  if (config.exlinks !== undefined) {
    player.addButton(
      adminUrl + "/images/sharing/appbar.information.png",
      "関連ページ",
      function () {
        player.pause(true);
        var baseTagId = player.id + "_exlinlk";
        var jwp = document.getElementById(player.id);
        var base = document.createElement('div');
        base.style.width = '100%';
        base.style.height = '100%';
        base.style.position = 'absolute';
        base.style.top = '0px';
        base.style.zIndex = 11;
        base.style.backgroundColor = 'rgba(0,0,0,0.7)';
        base.id = baseTagId;

        var close_block = document.createElement('div');
        close_block.style.padding = '5px 10px';
        close_block.style.textAlign = 'right';

        var close = document.createElement('span');
        close.innerHTML = '<a href="javascript:void(0);" onclick="closeExtenstionButton(\'' + baseTagId + '\');return false;"><img src="' + adminUrl + '/images/sharing/close.png"></a>';
        close_block.appendChild(close);
        base.appendChild(close_block);

        var head = document.createElement('div');
        head.style.fontSize = '16px';
        head.style.color = '#fff';
        head.style.marginTop = '3px';
        head.style.marginLeft = '30px';

        var head_title = document.createElement('span');
        head_title.style.color = '#fff';
        head_title.innerHTML = '関連ページ';
        head.appendChild(head_title);
        base.appendChild(head);

        var elm = document.createElement('div');
        elm.style.marginTop = '5px';
        elm.style.marginLeft = '30px';
        elm.style.marginRight = '30px';
        elm.style.fontSize = '14px';

        var sanitize = {
          encode: function (str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }
        };

        var i;
        var exlinks = param[playerId].plugins.exlinks;
        for (i = 0; i < exlinks.length; i++) {
          var anchor = document.createElement('a');
          var linkTitle = exlinks[i].title.length > 20 ? exlinks[i].title.substr(0, 20) + '...' : exlinks[i].title;
          anchor.href = exlinks[i].url;
          anchor.target = '_blank';
          anchor.innerHTML = sanitize.encode(linkTitle);
          anchor.style.color = '#fff';
          anchor.onclick = (function (idx) {
            return function () {
              analytics.requestExec({
                playhead: video[playerId].playhead,
                stat    : "click",
                c       : "exlink" + idx
              });
            }
          })(i + 1);
          var $p = document.createElement('p');
          $p.style.lineHeight = '28px';
          $p.style.margin = 0;
          $p.appendChild(anchor);
          elm.appendChild($p);
        }
        base.appendChild(elm);
        jwp.appendChild(base);
      },
      "exlinkButton"
    );
  }

  //動画を共有ボタン
  if (config.sharing !== undefined) {
    player.addButton(
      adminUrl + "/images/sharing/appbar.social.sharethis.png",
      "動画を共有",
      function () {
        player.pause(true);

        var baseTagId = player.id + "_sharing_org";
        var jwp = document.getElementById(player.id);
        var base = document.createElement('div');
        base.style.width = '100%';
        base.style.height = '100%';
        base.style.position = 'absolute';
        base.style.top = '0px';
        base.style.left = '0px';
        base.style.zIndex = 11;
        base.style.backgroundColor = 'rgba(0,0,0,0.7)';
        base.id = baseTagId;

        var close_block = document.createElement('div');
        close_block.style.padding = '5px 10px';
        close_block.style.textAlign = 'right';

        var close = document.createElement('span');
        close.innerHTML = '<a href="javascript:void(0);" onclick="closeExtenstionButton(\'' + baseTagId + '\');return false;"><img src="' + adminUrl + '/images/sharing/close.png"></a>';
        close_block.appendChild(close);
        base.appendChild(close_block);

        var head = document.createElement('div');
        head.style.fontSize = '16px';
        head.style.color = '#fff';
        head.style.marginTop = '20px';
        head.style.marginLeft = '50px';

        var head_title = document.createElement('span');
        head_title.style.color = '#fff';
        head_title.innerHTML = 'この動画を共有';
        head.appendChild(head_title);
        base.appendChild(head);

        var elm = document.createElement('div');
        elm.style.marginTop = '20px';
        elm.style.marginLeft = '50px';

        var url = encodeURI(location.href);
        var facebookUrl = url;
        if (config.facebookUrl != undefined && config.facebookUrl.length > 0) {
          facebookUrl = encodeURI(config.facebookUrl);
        }
        var sharingLink = document.createElement('a');
        sharingLink.href = "https://www.facebook.com/sharer/sharer.php?u=" + facebookUrl;
        sharingLink.target = "_blank";
        var imgButton = document.createElement('img');
        imgButton.src = adminUrl + "/images/sharing/FB-f-Logo__blue_50.png";
        imgButton.width = '40';
        imgButton.style.marginRight = "15px";
        sharingLink.onclick = function () {
          analytics.requestExec({
            playhead: video[playerId].playhead,
            stat    : "click",
            c       : "facebook"
          });
        };
        sharingLink.appendChild(imgButton);
        elm.appendChild(sharingLink);

        sharingLink = document.createElement('a');
        sharingLink.href = "https://twitter.com/intent/tweet?url=" + url;
        sharingLink.target = "_blank";
        imgButton = document.createElement('img');
        imgButton.src = adminUrl + "/images/sharing/TwitterLogo_white.png";
        imgButton.style.backgroundColor = "#55acee";
        imgButton.style.marginRight = "15px";
        imgButton.width = '40';
        sharingLink.onclick = function () {
          analytics.requestExec({
            playhead: video[playerId].playhead,
            stat    : "click",
            c       : "twitter"
          });
        };
        sharingLink.appendChild(imgButton);
        elm.appendChild(sharingLink);

        sharingLink = document.createElement('a');
        var docTitle = document.title;
        if (docTitle !== '') {
          docTitle = encodeURI(docTitle) + "%0d%0a";
        }
        sharingLink.href = "http://line.me/R/msg/text/?" + docTitle + url;
        sharingLink.target = "_blank";
        imgButton = document.createElement('img');
        imgButton.src = adminUrl + "/images/sharing/linebutton.png";
        imgButton.width = '40';
        sharingLink.onclick = function () {
          analytics.requestExec({
            playhead: video[playerId].playhead,
            stat    : "click",
            c       : "line"
          });
        };
        sharingLink.appendChild(imgButton);
        elm.appendChild(sharingLink);
        base.appendChild(elm);
        jwp.appendChild(base);
      },
      "sharingButton"
    );
  }
};
/**
 * init
 */
var init = (function () {
  //プロトコル設定
  if ('https:' === document.location.protocol) {
    httpProtocol = 'https://';
    httpProtocolParam = '&sp='
  }
  //URL設定
  adminUrl = httpProtocol + "admin-" + url.JW + '/' + url.VERSION;
  playerFile = "//" + dir + '-' + url.JW + "/player/jwplayer.js";
  m3u8Url = httpProtocol + url.LIBRARY + "/make.m3u8?token=";
  //flash 判別
  try {
    var shockWave = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if (shockWave) {
      hasFlash = true;
    }
  } catch (e) {
    if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) {
      hasFlash = true;
    }
  }
})();
/**
 * loadJWFile
 * @param playerId
 */
var loadingCnt = 0;
var loadQue = [];
var queCnt = 1;
var loadJWFile = function (playerId) {
  ++loadingCnt;
  if (loadingCnt > 1) {
    loadQue[loadingCnt] = playerId;
    return false;
  }
  setupJwPlayer(playerId);
};
/**
 * setupJwPlayer
 * @param playerId
 */
var setupJwPlayer = function (playerId) {
  pid = playerId;
  debugColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  debug('setup', '開始', playerId);
  var mid = setDecode(param[playerId].playlist[0].mid);
  var cid = setDecode(param[playerId].playlist[0].cid);
  var jsonmp4File = '';
  var checkDomainApiUrl = httpProtocol + url.ACCESS_API + '?cid=' + cid + '&mid=' + mid + '&domain=' + window.location.href;
  var keyFile = httpProtocol + url.LIBRARY + "/makeJsonp.php?json=" + adminUrl + "/licenseKey/" + dir + ".json&callback=keyCallbackJsonp";
  var eqApiUrl = httpProtocol + dir + '.eq.webcdn.stream.ne.jp/www50/' + dir + '/jmc_pub/jmc_swf/setting/service.jsonp?callback=serviseResult';
  jsonpRequest(checkDomainApiUrl, function () {
  }).then(function () {
    jsonpRequest(eqApiUrl, function () {
      //pd有効な場合mp4を取得
      if (pdEnabled == 1) {
        for (var id in param) {
          jsonmp4File =
            httpProtocol + url.MAKE_MP4 + "/makemp4.json?callback=mp4Callback&token=" + param[id].playlist[0].token + "&mid=" + mid + httpProtocolParam;
        }
      }
      jsonpRequest(jsonmp4File, function () {
        jsonpRequest(playerFile, function () {
          jsonpRequest(keyFile, function () {
            var i;
            var pluginName = 'jstream';
            var jwConfig = param[playerId];
            var playlistCnt = jwConfig.playlist.length;
            //playlist設定 video source
            for (i = 0; i < playlistCnt; ++i) {
              jwConfig.playlist[i].sources = [];
              jwConfig.playlist[i].sources[0] = {file: m3u8Url + jwConfig.playlist[i].token + "&mid=" + mid + httpProtocolParam};
              //mp4のURLを設定(PD:true) sourceをmp4にを2番めのソースに設定する
              if (mp4uri[i]) {
                jwConfig.playlist[i].sources[1] = {file: mp4uri[i]};
              }
            }
            //html5 hlsを有効に
            if (jwConfig.hlshtml === undefined && jwConfig.primary === 'html5') {
              jwConfig.hlshtml = true;
            }
            jwConfig.plugins[pluginName] = {};
            jwConfig.plugins[pluginName].cid = cid;
            jwConfig.plugins[pluginName].duration = jwConfig.playlist[0].duration;
            jwConfig.plugins[pluginName].mid = mid;
            jwConfig.plugins[pluginName].aqid = keyJson.aq_id;
            if (jwConfig.plugins.showad) {
              jwConfig.plugins[pluginName].showad = jwConfig.plugins.showad;
            }
            if (jwConfig.plugins.exlinks) {
              jwConfig.plugins[pluginName].exlinks = jwConfig.plugins.exlinks;
            }
            if (jwConfig.plugins.ga) {
              jwConfig.plugins[pluginName].ga = jwConfig.plugins.ga;
            }
            if (jwConfig.plugins.sharing) {
              jwConfig.plugins[pluginName].sharing = jwConfig.plugins.sharing;
            }
            if (jwConfig.plugins.facebookUrl) {
              jwConfig.plugins[pluginName].facebookUrl = jwConfig.plugins.facebookUrl;
            }

            var nextQue;
            var currentPlayer = document.getElementById(playerId);
            if (currentPlayer !== null) {
              var errorBox = currentPlayer.querySelector('.errorBox');
            }

            //設定エラーの場合は次の動画へ
            if (errorBox !== null) {
              ++queCnt;
              debug('setup', '終了', playerId);
              nextQue = loadQue[queCnt];
              if (nextQue !== undefined) {
                setupJwPlayer(loadQue[queCnt]);
              }
              return false;
            }

            jwplayer(playerId).setup(jwConfig);

            /**
             * analytics設定
             */
            var analytics = new Analytics(true);
            var playlist = jwplayer(playerId).getPlaylist();
            if (playlist) {
              playlist = playlist[0];
              video[playerId] = {
                ga       : keyJson.ga_id,
                cid      : cid,
                mid      : mid,
                playhead : 0,
                playFlgAq: false,
                replayFlg: false,
                title    : playlist.title,
                duration : playlist.duration
              };
              //:ga
              analytics.createGoogleAnalytics(param[playerId].plugins.gapv);
              //:eq
              analytics.setSvcid(cid);
              analytics.setVid(cid + "-" + mid + "-0");
              analytics.setTotal(video[playerId].duration);
              analytics.createSid();
              analytics.createCid();
              analytics.setRef(document.referrer);
              analytics.setSelf(document.location.href);
              analytics.requestExec({
                playhead: video[playerId].playhead,
                stat    : "landing"
              });
              window.onbeforeunload = function () {
                analytics.requestExec({
                  playhead: video[playerId].playhead,
                  stat    : "exit"
                });
              };

              //:aq
              aqObject.aqid = keyJson.aq_id;
              aqObject.jsload("t10.aqtracker.com/asp/aq_tag_aos.js");

              //playerのEventを設定
              setPlayerEvent(jwplayer(playerId), playerId, analytics);

              //fix firefox : non flash
              if (!jwplayer(playerId).getPlaylist()[0]) {
                showError(errorMessage['Error loading playlist: No playable sources found'], playerId);
                return false;
              }
              var debugInfo = jwplayer(playerId).getPlaylist()[0].sources[0].file;
            }
            //que
            ++queCnt;
            debug('setup', '終了', playerId);
            if (debugInfo) {
              debug('info', debugInfo, playerId);
            }
            nextQue = loadQue[queCnt];
            if (nextQue !== undefined) {
              setupJwPlayer(nextQue);
            }
          })
        })
      })
    });
  });
};

/**
 * コールバック
 * **/
window.keyCallbackJsonp = function (response) {
  keyJson = response;
  jwplayer.key = response.jwplayer_key;
};
window.accessControlResultEq = function (response) {
  //ドメイン制限がされていた時のエラー表示
  debug('setup', 'コールバック', pid);
  var statusCode = response.response_status;
  var access = response.response;
  if (access !== 'OK') {
    console.warn('ドメイン制限', accessErrorCode[statusCode]);
    showError(accessErrorCode[statusCode], pid);
    return;
  }
  if(debugFlag){
    console.info('ドメイン制限', access, statusCode)
  }
};
window.serviceResult = function (response) {
  pdEnabled = response.service.pd_enable;
};
window.mp4Callback = function (data) {
  mp4uri.push(data.mp4_url);
};

loadJWFile("mvAd-play");