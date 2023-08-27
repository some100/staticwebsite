var h;
h || (h = typeof Module !== 'undefined' ? Module : {});
h.Ah || (h.Ah = 0);
h.Ah++;
h.ENVIRONMENT_IS_PTHREAD || function(a) {
    function b(n, p, r, t) {
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node)
            require("fs").readFile(n, function(y, G) {
                y ? t(y) : r(G.buffer)
            });
        else {
            var u = new XMLHttpRequest;
            u.open("GET", n, !0);
            u.responseType = "arraybuffer";
            u.onprogress = function(y) {
                var G = p;
                y.total && (G = y.total);
                if (y.loaded) {
                    u.fg ? h.Pg[n].loaded = y.loaded : (u.fg = !0,
                    h.Pg || (h.Pg = {}),
                    h.Pg[n] = {
                        loaded: y.loaded,
                        total: G
                    });
                    var A = G = y = 0, J;
                    for (J in h.Pg) {
                        var I = h.Pg[J];
                        y += I.total;
                        G += I.loaded;
                        A++
                    }
                    y = Math.ceil(y * h.Ah / A);
                    h.setStatus && h.setStatus("Downloading data... (" + G + "/" + y + ")")
                } else
                    !h.Pg && h.setStatus && h.setStatus("Downloading data...")
            }
            ;
            u.onerror = function() {
                throw Error("NetworkError for: " + n);
            }
            ;
            u.onload = function() {
                if (200 == u.status || 304 == u.status || 206 == u.status || 0 == u.status && u.response)
                    r(u.response);
                else
                    throw Error(u.statusText + " : " + u.responseURL);
            }
            ;
            u.send(null)
        }
    }
    function c(n) {
        console.error("package error:", n)
    }
    function d() {
        function n(u, y, G) {
            this.start = u;
            this.end = y;
            this.audio = G
        }
        function p(u) {
            if (!u)
                throw "Loading data file failed." + Error().stack;
            if (u.constructor.name !== ArrayBuffer.name)
                throw "bad input to processPackageData" + Error().stack;
            u = new Uint8Array(u);
            n.prototype.ah = u;
            u = a.files;
            for (var y = 0; y < u.length; ++y)
                n.prototype.fg[u[y].filename].onload();
            h.removeRunDependency("datafile_bin/RSDKv3.data")
        }
        n.prototype = {
            fg: {},
            open: function(u, y) {
                this.name = y;
                this.fg[y] = this;
                h.addRunDependency("fp " + this.name)
            },
            send: function() {},
            onload: function() {
                this.Lg(this.ah.subarray(this.start, this.end))
            },
            Lg: function(u) {
                h.FS_createDataFile(this.name, null, u, !0, !0, !0);
                h.removeRunDependency("fp " + this.name);
                this.fg[this.name] = null
            }
        };
        for (var r = a.files, t = 0; t < r.length; ++t)
            (new n(r[t].start,r[t].end,r[t].audio || 0)).open("GET", r[t].filename);
        h.addRunDependency("datafile_bin/RSDKv3.data");
        h.fi || (h.fi = {});
        h.fi["bin/RSDKv3.data"] = {
            aj: !1
        };
        m ? (p(m),
        m = null) : g = p
    }
    "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    "function" !== typeof h.locateFilePackage || h.locateFile || (h.locateFile = h.locateFilePackage,
    k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
    var e = h.locateFile ? h.locateFile("RSDKv3.data", "") : "RSDKv3.data"
      , f = a.remote_package_size
      , g = null
      , m = h.getPreloadedPackage ? h.getPreloadedPackage(e, f) : null;
    m || b(e, f, function(n) {
        g ? (g(n),
        g = null) : m = n
    }, c);
    h.calledRun ? d() : (h.preRun || (h.preRun = []),
    h.preRun.push(d))
}({
    files: [{
        filename: "/Data.rsdk",
        start: 0,
        end: 38197654
    }],
    remote_package_size: 38200530
});
var aa = Object.assign({}, h), ba = [], ca = "./this.program", da = (a,b)=>{
    throw b;
}
, ea = "object" == typeof window, fa = "function" == typeof importScripts, ha = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, ia = "", ja, ka, la, ma;
if (ha) {
    ia = fa ? require("path").dirname(ia) + "/" : __dirname + "/";
    var fs, na;
    "function" === typeof require && (fs = require("fs"),
    na = require("path"));
    ja = (a,b)=>{
        a = na.normalize(a);
        return fs.readFileSync(a, b ? void 0 : "utf8")
    }
    ;
    la = a=>{
        a = ja(a, !0);
        a.buffer || (a = new Uint8Array(a));
        return a
    }
    ;
    ka = (a,b,c)=>{
        a = na.normalize(a);
        fs.readFile(a, function(d, e) {
            d ? c(d) : b(e.buffer)
        })
    }
    ;
    1 < process.argv.length && (ca = process.argv[1].replace(/\\/g, "/"));
    ba = process.argv.slice(2);
    "undefined" != typeof module && (module.exports = h);
    process.on("uncaughtException", function(a) {
        if (!(a instanceof oa))
            throw a;
    });
    process.on("unhandledRejection", function(a) {
        throw a;
    });
    da = (a,b)=>{
        if (noExitRuntime)
            throw process.exitCode = a,
            b;
        b instanceof oa || k("exiting due to exception: " + b);
        process.exit(a)
    }
    ;
    h.inspect = function() {
        return "[Emscripten Module object]"
    }
} else if (ea || fa)
    fa ? ia = self.location.href : "undefined" != typeof document && document.currentScript && (ia = document.currentScript.src),
    ia = 0 !== ia.indexOf("blob:") ? ia.substr(0, ia.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
    ja = a=>{
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    }
    ,
    fa && (la = a=>{
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response)
    }
    ),
    ka = (a,b,c)=>{
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = ()=>{
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        }
        ;
        d.onerror = c;
        d.send(null)
    }
    ,
    ma = a=>{
        document.title = a
    }
    ;
var pa = h.print || console.log.bind(console)
  , k = h.printErr || console.warn.bind(console);
Object.assign(h, aa);
aa = null;
h.arguments && (ba = h.arguments);
h.thisProgram && (ca = h.thisProgram);
h.quit && (da = h.quit);
var qa;
h.wasmBinary && (qa = h.wasmBinary);
var noExitRuntime = h.noExitRuntime || !0;
"object" != typeof WebAssembly && l("no native wasm support detected");
var ra, sa = !1, ua = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function va(a, b, c) {
    var d = b + c;
    for (c = b; a[c] && !(c >= d); )
        ++c;
    if (16 < c - b && a.buffer && ua)
        return ua.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224))
                d += String.fromCharCode((e & 31) << 6 | f);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else
            d += String.fromCharCode(e)
    }
    return d
}
function q(a, b) {
    return a ? va(v, a, b) : ""
}
function wa(a, b, c, d) {
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var m = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | m & 1023
        }
        if (127 >= g) {
            if (c >= d)
                break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d)
                    break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d)
                        break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d)
                        break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}
function w(a, b, c) {
    return wa(a, v, b, c)
}
function xa(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
        ++c) : b += 3
    }
    return b
}
var ya, x, v, za, Aa, z, B, C, Ca, Da, Ea, Fa = [], Ga = [], Ha = [], Ia = [], Ja = [];
function Ka() {
    var a = h.preRun.shift();
    Fa.unshift(a)
}
var La = 0
  , Ma = null
  , Na = null;
function Oa() {
    La++;
    h.monitorRunDependencies && h.monitorRunDependencies(La)
}
function Pa() {
    La--;
    h.monitorRunDependencies && h.monitorRunDependencies(La);
    if (0 == La && (null !== Ma && (clearInterval(Ma),
    Ma = null),
    Na)) {
        var a = Na;
        Na = null;
        a()
    }
}
function l(a) {
    if (h.onAbort)
        h.onAbort(a);
    a = "Aborted(" + a + ")";
    k(a);
    sa = !0;
    throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
}
function Qa() {
    return Ra.startsWith("data:application/octet-stream;base64,")
}
var Ra;
Ra = "RSDKv3.wasm";
if (!Qa()) {
    var Sa = Ra;
    Ra = h.locateFile ? h.locateFile(Sa, ia) : ia + Sa
}
function Ua() {
    var a = Ra;
    try {
        if (a == Ra && qa)
            return new Uint8Array(qa);
        if (la)
            return la(a);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        l(b)
    }
}
function Va() {
    if (!qa && (ea || fa)) {
        if ("function" == typeof fetch && !Ra.startsWith("file://"))
            return fetch(Ra, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok)
                    throw "failed to load wasm binary file at '" + Ra + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return Ua()
            });
        if (ka)
            return new Promise(function(a, b) {
                ka(Ra, function(c) {
                    a(new Uint8Array(c))
                }, b)
            }
            )
    }
    return Promise.resolve().then(function() {
        return Ua()
    })
}
var E, F, Ya = {
    754484: ()=>"undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1,
    754631: ()=>"undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
    754865: a=>{
        "undefined" === typeof h.SDL2 && (h.SDL2 = {});
        var b = h.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.ig || ("undefined" !== typeof AudioContext ? b.ig = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.ig = new webkitAudioContext),
        b.ig && Wa(b.ig));
        return void 0 === b.ig ? -1 : 0
    }
    ,
    755358: ()=>h.SDL2.ig.sampleRate,
    755426: (a,b,c,d)=>{
        function e() {}
        function f(m) {
            void 0 !== g.capture.hh && (clearTimeout(g.capture.hh),
            g.capture.hh = void 0);
            g.capture.rh = g.ig.createMediaStreamSource(m);
            g.capture.og = g.ig.createScriptProcessor(b, a, 1);
            g.capture.og.onaudioprocess = function(n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                g.capture.yh = n.inputBuffer,
                n = [d],
                L(c).apply(null, n))
            }
            ;
            g.capture.rh.connect(g.capture.og);
            g.capture.og.connect(g.ig.destination);
            g.capture.stream = m
        }
        var g = h.SDL2;
        g.capture.th = g.ig.createBuffer(a, b, g.ig.sampleRate);
        g.capture.th.getChannelData(0).fill(0);
        g.capture.hh = setTimeout(function() {
            g.capture.yh = g.capture.th;
            var m = [d];
            L(c).apply(null, m)
        }, b / g.ig.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(f).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, f, e)
    }
    ,
    757078: (a,b,c,d)=>{
        var e = h.SDL2;
        e.audio.og = e.ig.createScriptProcessor(b, 0, a);
        e.audio.og.onaudioprocess = function(f) {
            void 0 !== e && void 0 !== e.audio && (e.audio.Th = f.outputBuffer,
            f = [d],
            L(c).apply(null, f))
        }
        ;
        e.audio.og.connect(e.ig.destination)
    }
    ,
    757488: (a,b)=>{
        for (var c = h.SDL2, d = c.capture.yh.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.capture.yh.getChannelData(e);
            if (f.length != b)
                throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g)
                    Xa(a + 4 * g, f[g]);
            else
                for (g = 0; g < b; ++g)
                    Xa(a + 4 * (g * d + e), f[g])
        }
    }
    ,
    758093: (a,b)=>{
        for (var c = h.SDL2, d = c.audio.Th.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.audio.Th.getChannelData(e);
            if (f.length != b)
                throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g)
                f[g] = C[a + (g * d + e << 2) >> 2]
        }
    }
    ,
    758573: a=>{
        var b = h.SDL2;
        if (a) {
            void 0 !== b.capture.hh && clearTimeout(b.capture.hh);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++)
                    b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.og && (b.capture.og.onaudioprocess = function() {}
            ,
            b.capture.og.disconnect(),
            b.capture.og = void 0);
            void 0 !== b.capture.rh && (b.capture.rh.disconnect(),
            b.capture.rh = void 0);
            void 0 !== b.capture.th && (b.capture.th = void 0);
            b.capture = void 0
        } else
            void 0 != b.audio.og && (b.audio.og.disconnect(),
            b.audio.og = void 0),
            b.audio = void 0;
        void 0 !== b.ig && void 0 === b.audio && void 0 === b.capture && (b.ig.close(),
        b.ig = void 0)
    }
    ,
    759745: (a,b,c)=>{
        h.SDL2 || (h.SDL2 = {});
        var d = h.SDL2;
        d.oi !== h.canvas && (d.xg = h.createContext(h.canvas, !1, !0),
        d.oi = h.canvas);
        if (d.w !== a || d.Ai !== b || d.Fi !== d.xg)
            d.image = d.xg.createImageData(a, b),
            d.w = a,
            d.Ai = b,
            d.Fi = d.xg;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c; ) {
                var f = z[b];
                a[e] = f & 255;
                a[e + 1] = f >> 8 & 255;
                a[e + 2] = f >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            }
        else if (d.si !== a && (d.ri = new Int32Array(a.buffer),
        d.ti = new Uint8Array(a.buffer),
        d.si = a),
        a = d.ri,
        c = a.length,
        a.set(z.subarray(b, b + c)),
        a = d.ti,
        b = 3,
        e = b + 4 * c,
        0 == c % 8)
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0;
        else
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0;
        d.xg.putImageData(d.image, 0, 0)
    }
    ,
    761214: (a,b,c,d,e)=>{
        var f = document.createElement("canvas");
        f.width = a;
        f.height = b;
        var g = f.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var m = 0, n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; m < n; ) {
                var p = z[e];
                b[m] = p & 255;
                b[m + 1] = p >> 8 & 255;
                b[m + 2] = p >> 16 & 255;
                b[m + 3] = p >> 24 & 255;
                e++;
                m += 4
            }
        else
            b = new Int32Array(b.buffer),
            n = b.length,
            b.set(z.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
        d = M(c.length + 1);
        w(c, d, c.length + 1);
        return d
    }
    ,
    762203: a=>{
        h.canvas && (h.canvas.style.cursor = q(a))
    }
    ,
    762286: ()=>{
        h.canvas && (h.canvas.style.cursor = "none")
    }
    ,
    762355: ()=>window.innerWidth,
    762385: ()=>window.innerHeight
};
function oa(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
function Za(a, b, c) {
    a.addEventListener(b, c, {
        once: !0
    })
}
function Wa(a) {
    var b;
    b || (b = [document, document.getElementById("canvas")]);
    ["keydown", "mousedown", "touchstart"].forEach(function(c) {
        b.forEach(function(d) {
            d && Za(d, c, ()=>{
                "suspended" === a.state && a.resume()
            }
            )
        })
    })
}
function $a(a) {
    for (; 0 < a.length; )
        a.shift()(h)
}
var ab = [];
function L(a) {
    var b = ab[a];
    b || (a >= ab.length && (ab.length = a + 1),
    ab[a] = b = Ea.get(a));
    return b
}
function Xa(a, b) {
    var c = "float";
    c.endsWith("*") && (c = "*");
    switch (c) {
    case "i1":
        x[a >> 0] = b;
        break;
    case "i8":
        x[a >> 0] = b;
        break;
    case "i16":
        za[a >> 1] = b;
        break;
    case "i32":
        z[a >> 2] = b;
        break;
    case "i64":
        F = [b >>> 0, (E = b,
        1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
        z[a >> 2] = F[0];
        z[a + 4 >> 2] = F[1];
        break;
    case "float":
        C[a >> 2] = b;
        break;
    case "double":
        Da[a >> 3] = b;
        break;
    case "*":
        B[a >> 2] = b;
        break;
    default:
        l("invalid type for setValue: " + c)
    }
}
function bb(a) {
    this.pg = a - 24;
    this.Ei = function(b) {
        B[this.pg + 4 >> 2] = b
    }
    ;
    this.xi = function(b) {
        B[this.pg + 8 >> 2] = b
    }
    ;
    this.zi = function() {
        z[this.pg >> 2] = 0
    }
    ;
    this.ah = function() {
        x[this.pg + 12 >> 0] = 0
    }
    ;
    this.Di = function() {
        x[this.pg + 13 >> 0] = 0
    }
    ;
    this.fg = function(b, c) {
        this.Lg();
        this.Ei(b);
        this.xi(c);
        this.zi();
        this.ah();
        this.Di()
    }
    ;
    this.Lg = function() {
        B[this.pg + 16 >> 2] = 0
    }
}
var cb = 0
  , db = (a,b)=>{
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
        c++) : c && (a.splice(d, 1),
        c--)
    }
    if (b)
        for (; c; c--)
            a.unshift("..");
    return a
}
  , eb = a=>{
    var b = "/" === a.charAt(0)
      , c = "/" === a.substr(-1);
    (a = db(a.split("/").filter(d=>!!d), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
  , fb = a=>{
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b && (b = b.substr(0, b.length - 1));
    return a + b
}
  , gb = a=>{
    if ("/" === a)
        return "/";
    a = eb(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
;
function hb() {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);
        return ()=>{
            crypto.getRandomValues(a);
            return a[0]
        }
    }
    if (ha)
        try {
            var b = require("crypto");
            return ()=>b.randomBytes(1)[0]
        } catch (c) {}
    return ()=>l("randomDevice")
}
function ib() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!b)
            return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = db(a.split("/").filter(d=>!!d), !b).join("/");
    return (b ? "/" : "") + a || "."
}
function jb(a) {
    var b = Array(xa(a) + 1);
    a = wa(a, b, 0, b.length);
    b.length = a;
    return b
}
var kb = [];
function lb(a, b) {
    kb[a] = {
        input: [],
        output: [],
        Rg: b
    };
    mb(a, nb)
}
var nb = {
    open: function(a) {
        var b = kb[a.node.rdev];
        if (!b)
            throw new N(43);
        a.tty = b;
        a.seekable = !1
    },
    close: function(a) {
        a.tty.Rg.fsync(a.tty)
    },
    fsync: function(a) {
        a.tty.Rg.fsync(a.tty)
    },
    read: function(a, b, c, d) {
        if (!a.tty || !a.tty.Rg.Wh)
            throw new N(60);
        for (var e = 0, f = 0; f < d; f++) {
            try {
                var g = a.tty.Rg.Wh(a.tty)
            } catch (m) {
                throw new N(29);
            }
            if (void 0 === g && 0 === e)
                throw new N(6);
            if (null === g || void 0 === g)
                break;
            e++;
            b[c + f] = g
        }
        e && (a.node.timestamp = Date.now());
        return e
    },
    write: function(a, b, c, d) {
        if (!a.tty || !a.tty.Rg.Fh)
            throw new N(60);
        try {
            for (var e = 0; e < d; e++)
                a.tty.Rg.Fh(a.tty, b[c + e])
        } catch (f) {
            throw new N(29);
        }
        d && (a.node.timestamp = Date.now());
        return e
    }
}
  , ob = {
    Wh: function(a) {
        if (!a.input.length) {
            var b = null;
            if (ha) {
                var c = Buffer.alloc(256)
                  , d = 0;
                try {
                    d = fs.readSync(process.stdin.fd, c, 0, 256, -1)
                } catch (e) {
                    if (e.toString().includes("EOF"))
                        d = 0;
                    else
                        throw e;
                }
                0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
            } else
                "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(),
                null !== b && (b += "\n"));
            if (!b)
                return null;
            a.input = jb(b)
        }
        return a.input.shift()
    },
    Fh: function(a, b) {
        null === b || 10 === b ? (pa(va(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    fsync: function(a) {
        a.output && 0 < a.output.length && (pa(va(a.output, 0)),
        a.output = [])
    }
}
  , pb = {
    Fh: function(a, b) {
        null === b || 10 === b ? (k(va(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    fsync: function(a) {
        a.output && 0 < a.output.length && (k(va(a.output, 0)),
        a.output = [])
    }
}
  , O = {
    Bg: null,
    vg: function() {
        return O.createNode(null, "/", 16895, 0)
    },
    createNode: function(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440))
            throw new N(63);
        O.Bg || (O.Bg = {
            dir: {
                node: {
                    zg: O.dg.zg,
                    qg: O.dg.qg,
                    lookup: O.dg.lookup,
                    sh: O.dg.sh,
                    rename: O.dg.rename,
                    unlink: O.dg.unlink,
                    rmdir: O.dg.rmdir,
                    readdir: O.dg.readdir,
                    symlink: O.dg.symlink
                },
                stream: {
                    Ng: O.cg.Ng
                }
            },
            file: {
                node: {
                    zg: O.dg.zg,
                    qg: O.dg.qg
                },
                stream: {
                    Ng: O.cg.Ng,
                    read: O.cg.read,
                    write: O.cg.write,
                    Oh: O.cg.Oh,
                    Dh: O.cg.Dh,
                    bi: O.cg.bi
                }
            },
            link: {
                node: {
                    zg: O.dg.zg,
                    qg: O.dg.qg,
                    readlink: O.dg.readlink
                },
                stream: {}
            },
            Sh: {
                node: {
                    zg: O.dg.zg,
                    qg: O.dg.qg
                },
                stream: qb
            }
        });
        c = rb(a, b, c, d);
        16384 === (c.mode & 61440) ? (c.dg = O.Bg.dir.node,
        c.cg = O.Bg.dir.stream,
        c.eg = {}) : 32768 === (c.mode & 61440) ? (c.dg = O.Bg.file.node,
        c.cg = O.Bg.file.stream,
        c.gg = 0,
        c.eg = null) : 40960 === (c.mode & 61440) ? (c.dg = O.Bg.link.node,
        c.cg = O.Bg.link.stream) : 8192 === (c.mode & 61440) && (c.dg = O.Bg.Sh.node,
        c.cg = O.Bg.Sh.stream);
        c.timestamp = Date.now();
        a && (a.eg[b] = c,
        a.timestamp = c.timestamp);
        return c
    },
    cj: function(a) {
        return a.eg ? a.eg.subarray ? a.eg.subarray(0, a.gg) : new Uint8Array(a.eg) : new Uint8Array(0)
    },
    Uh: function(a, b) {
        var c = a.eg ? a.eg.length : 0;
        c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
        0 != c && (b = Math.max(b, 256)),
        c = a.eg,
        a.eg = new Uint8Array(b),
        0 < a.gg && a.eg.set(c.subarray(0, a.gg), 0))
    },
    Ni: function(a, b) {
        if (a.gg != b)
            if (0 == b)
                a.eg = null,
                a.gg = 0;
            else {
                var c = a.eg;
                a.eg = new Uint8Array(b);
                c && a.eg.set(c.subarray(0, Math.min(b, a.gg)));
                a.gg = b
            }
    },
    dg: {
        zg: function(a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.gg : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.mi = 4096;
            b.blocks = Math.ceil(b.size / b.mi);
            return b
        },
        qg: function(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            void 0 !== b.size && O.Ni(a, b.size)
        },
        lookup: function() {
            throw sb[44];
        },
        sh: function(a, b, c, d) {
            return O.createNode(a, b, c, d)
        },
        rename: function(a, b, c) {
            if (16384 === (a.mode & 61440)) {
                try {
                    var d = tb(b, c)
                } catch (f) {}
                if (d)
                    for (var e in d.eg)
                        throw new N(55);
            }
            delete a.parent.eg[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.eg[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b
        },
        unlink: function(a, b) {
            delete a.eg[b];
            a.timestamp = Date.now()
        },
        rmdir: function(a, b) {
            var c = tb(a, b), d;
            for (d in c.eg)
                throw new N(55);
            delete a.eg[b];
            a.timestamp = Date.now()
        },
        readdir: function(a) {
            var b = [".", ".."], c;
            for (c in a.eg)
                a.eg.hasOwnProperty(c) && b.push(c);
            return b
        },
        symlink: function(a, b, c) {
            a = O.createNode(a, b, 41471, 0);
            a.link = c;
            return a
        },
        readlink: function(a) {
            if (40960 !== (a.mode & 61440))
                throw new N(28);
            return a.link
        }
    },
    cg: {
        read: function(a, b, c, d, e) {
            var f = a.node.eg;
            if (e >= a.node.gg)
                return 0;
            a = Math.min(a.node.gg - e, d);
            if (8 < a && f.subarray)
                b.set(f.subarray(e, e + a), c);
            else
                for (d = 0; d < a; d++)
                    b[c + d] = f[e + d];
            return a
        },
        write: function(a, b, c, d, e, f) {
            if (!d)
                return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.eg || a.eg.subarray)) {
                if (f)
                    return a.eg = b.subarray(c, c + d),
                    a.gg = d;
                if (0 === a.gg && 0 === e)
                    return a.eg = b.slice(c, c + d),
                    a.gg = d;
                if (e + d <= a.gg)
                    return a.eg.set(b.subarray(c, c + d), e),
                    d
            }
            O.Uh(a, e + d);
            if (a.eg.subarray && b.subarray)
                a.eg.set(b.subarray(c, c + d), e);
            else
                for (f = 0; f < d; f++)
                    a.eg[e + f] = b[c + f];
            a.gg = Math.max(a.gg, e + d);
            return d
        },
        Ng: function(a, b, c) {
            1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.gg);
            if (0 > b)
                throw new N(28);
            return b
        },
        Oh: function(a, b, c) {
            O.Uh(a.node, b + c);
            a.node.gg = Math.max(a.node.gg, b + c)
        },
        Dh: function(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440))
                throw new N(43);
            a = a.node.eg;
            if (e & 2 || a.buffer !== ya) {
                if (0 < c || c + b < a.length)
                    a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                c = !0;
                l();
                b = void 0;
                if (!b)
                    throw new N(48);
                x.set(a, b)
            } else
                c = !1,
                b = a.byteOffset;
            return {
                pg: b,
                Vi: c
            }
        },
        bi: function(a, b, c, d) {
            O.cg.write(a, b, 0, d, c, !1);
            return 0
        }
    }
};
function ub(a, b, c) {
    var d = "al " + a;
    ka(a, e=>{
        e || l('Loading data file "' + a + '" failed (no arrayBuffer).');
        b(new Uint8Array(e));
        d && Pa(d)
    }
    , ()=>{
        if (c)
            c();
        else
            throw 'Loading data file "' + a + '" failed.';
    }
    );
    d && Oa(d)
}
var vb = null, wb = {}, xb = [], yb = 1, zb = null, Ab = !0, N = null, sb = {}, Cb = (a,b={})=>{
    a = ib("/", a);
    if (!a)
        return {
            path: "",
            node: null
        };
    b = Object.assign({
        Vh: !0,
        Gh: 0
    }, b);
    if (8 < b.Gh)
        throw new N(32);
    a = db(a.split("/").filter(g=>!!g), !1);
    for (var c = vb, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent)
            break;
        c = tb(c, a[e]);
        d = eb(d + "/" + a[e]);
        c.eh && (!f || f && b.Vh) && (c = c.eh.root);
        if (!f || b.bh)
            for (f = 0; 40960 === (c.mode & 61440); )
                if (c = Bb(d),
                d = ib(fb(d), c),
                c = Cb(d, {
                    Gh: b.Gh + 1
                }).node,
                40 < f++)
                    throw new N(32);
    }
    return {
        path: d,
        node: c
    }
}
, Db = a=>{
    for (var b; ; ) {
        if (a === a.parent)
            return a = a.vg.ai,
            b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent
    }
}
, Eb = (a,b)=>{
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % zb.length
}
, tb = (a,b)=>{
    var c;
    if (c = (c = Fb(a, "x")) ? c : a.dg.lookup ? 0 : 2)
        throw new N(c,a);
    for (c = zb[Eb(a.id, b)]; c; c = c.Qg) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.dg.lookup(a, b)
}
, rb = (a,b,c,d)=>{
    a = new Gb(a,b,c,d);
    b = Eb(a.parent.id, a.name);
    a.Qg = zb[b];
    return zb[b] = a
}
, Hb = {
    r: 0,
    "r+": 2,
    w: 577,
    "w+": 578,
    a: 1089,
    "a+": 1090
}, Ib = a=>{
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
, Fb = (a,b)=>{
    if (Ab)
        return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
, Jb = (a,b)=>{
    try {
        return tb(a, b),
        20
    } catch (c) {}
    return Fb(a, "wx")
}
, Kb = (a=0)=>{
    for (; 4096 >= a; a++)
        if (!xb[a])
            return a;
    throw new N(33);
}
, Mb = (a,b)=>{
    Lb || (Lb = function() {
        this.fg = {}
    }
    ,
    Lb.prototype = {},
    Object.defineProperties(Lb.prototype, {
        object: {
            get: function() {
                return this.node
            },
            set: function(c) {
                this.node = c
            }
        },
        flags: {
            get: function() {
                return this.fg.flags
            },
            set: function(c) {
                this.fg.flags = c
            }
        },
        position: {
            get: function() {
                return this.fg.position
            },
            set: function(c) {
                this.fg.position = c
            }
        }
    }));
    a = Object.assign(new Lb, a);
    b = Kb(b);
    a.fd = b;
    return xb[b] = a
}
, qb = {
    open: a=>{
        a.cg = wb[a.node.rdev].cg;
        a.cg.open && a.cg.open(a)
    }
    ,
    Ng: ()=>{
        throw new N(70);
    }
}, mb = (a,b)=>{
    wb[a] = {
        cg: b
    }
}
, Nb = (a,b)=>{
    var c = "/" === b
      , d = !b;
    if (c && vb)
        throw new N(10);
    if (!c && !d) {
        var e = Cb(b, {
            Vh: !1
        });
        b = e.path;
        e = e.node;
        if (e.eh)
            throw new N(10);
        if (16384 !== (e.mode & 61440))
            throw new N(54);
    }
    b = {
        type: a,
        lj: {},
        ai: b,
        Ji: []
    };
    a = a.vg(b);
    a.vg = b;
    b.root = a;
    c ? vb = a : e && (e.eh = b,
    e.vg && e.vg.Ji.push(b));
    return a
}
, Ob = (a,b,c)=>{
    var d = Cb(a, {
        parent: !0
    }).node;
    a = gb(a);
    if (!a || "." === a || ".." === a)
        throw new N(28);
    var e = Jb(d, a);
    if (e)
        throw new N(e);
    if (!d.dg.sh)
        throw new N(63);
    return d.dg.sh(d, a, b, c)
}
, Pb = (a,b,c)=>{
    "undefined" == typeof c && (c = b,
    b = 438);
    return Ob(a, b | 8192, c)
}
, Qb = (a,b)=>{
    if (!ib(a))
        throw new N(44);
    var c = Cb(b, {
        parent: !0
    }).node;
    if (!c)
        throw new N(44);
    b = gb(b);
    var d = Jb(c, b);
    if (d)
        throw new N(d);
    if (!c.dg.symlink)
        throw new N(63);
    c.dg.symlink(c, b, a)
}
, Rb = a=>{
    var b = Cb(a, {
        parent: !0
    }).node;
    if (!b)
        throw new N(44);
    var c = gb(a);
    a = tb(b, c);
    a: {
        try {
            var d = tb(b, c)
        } catch (f) {
            d = f.jg;
            break a
        }
        var e = Fb(b, "wx");
        d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0
    }
    if (d)
        throw new N(d);
    if (!b.dg.unlink)
        throw new N(63);
    if (a.eh)
        throw new N(10);
    b.dg.unlink(b, c);
    b = Eb(a.parent.id, a.name);
    if (zb[b] === a)
        zb[b] = a.Qg;
    else
        for (b = zb[b]; b; ) {
            if (b.Qg === a) {
                b.Qg = a.Qg;
                break
            }
            b = b.Qg
        }
}
, Bb = a=>{
    a = Cb(a).node;
    if (!a)
        throw new N(44);
    if (!a.dg.readlink)
        throw new N(28);
    return ib(Db(a.parent), a.dg.readlink(a))
}
, Sb = (a,b)=>{
    a = Cb(a, {
        bh: !b
    }).node;
    if (!a)
        throw new N(44);
    if (!a.dg.zg)
        throw new N(63);
    return a.dg.zg(a)
}
, Tb = a=>Sb(a, !0), Ub = (a,b)=>{
    a = "string" == typeof a ? Cb(a, {
        bh: !0
    }).node : a;
    if (!a.dg.qg)
        throw new N(63);
    a.dg.qg(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}
, Wb = (a,b,c)=>{
    if ("" === a)
        throw new N(44);
    if ("string" == typeof b) {
        var d = Hb[b];
        if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
        b = d
    }
    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" == typeof a)
        var e = a;
    else {
        a = eb(a);
        try {
            e = Cb(a, {
                bh: !(b & 131072)
            }).node
        } catch (f) {}
    }
    d = !1;
    if (b & 64)
        if (e) {
            if (b & 128)
                throw new N(20);
        } else
            e = Ob(a, c, 0),
            d = !0;
    if (!e)
        throw new N(44);
    8192 === (e.mode & 61440) && (b &= -513);
    if (b & 65536 && 16384 !== (e.mode & 61440))
        throw new N(54);
    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Ib(b) || b & 512) ? 31 : Fb(e, Ib(b)) : 44))
        throw new N(c);
    if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? Cb(c, {
            bh: !0
        }).node : c;
        if (!c.dg.qg)
            throw new N(63);
        if (16384 === (c.mode & 61440))
            throw new N(31);
        if (32768 !== (c.mode & 61440))
            throw new N(28);
        if (d = Fb(c, "w"))
            throw new N(d);
        c.dg.qg(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    e = Mb({
        node: e,
        path: Db(e),
        flags: b,
        seekable: !0,
        position: 0,
        cg: e.cg,
        Ri: [],
        error: !1
    });
    e.cg.open && e.cg.open(e);
    !h.logReadFiles || b & 1 || (Vb || (Vb = {}),
    a in Vb || (Vb[a] = 1));
    return e
}
, Xb = a=>{
    if (null === a.fd)
        throw new N(8);
    a.Mg && (a.Mg = null);
    try {
        a.cg.close && a.cg.close(a)
    } catch (b) {
        throw b;
    } finally {
        xb[a.fd] = null
    }
    a.fd = null
}
, Yb = (a,b,c)=>{
    if (null === a.fd)
        throw new N(8);
    if (!a.seekable || !a.cg.Ng)
        throw new N(70);
    if (0 != c && 1 != c && 2 != c)
        throw new N(28);
    a.position = a.cg.Ng(a, b, c);
    a.Ri = [];
    return a.position
}
, Zb = (a,b,c,d,e,f)=>{
    if (0 > d || 0 > e)
        throw new N(28);
    if (null === a.fd)
        throw new N(8);
    if (0 === (a.flags & 2097155))
        throw new N(8);
    if (16384 === (a.node.mode & 61440))
        throw new N(31);
    if (!a.cg.write)
        throw new N(28);
    a.seekable && a.flags & 1024 && Yb(a, 0, 2);
    var g = "undefined" != typeof e;
    if (!g)
        e = a.position;
    else if (!a.seekable)
        throw new N(70);
    b = a.cg.write(a, b, c, d, e, f);
    g || (a.position += b);
    return b
}
, $b = ()=>{
    N || (N = function(a, b) {
        this.node = b;
        this.Pi = function(c) {
            this.jg = c
        }
        ;
        this.Pi(a);
        this.message = "FS error"
    }
    ,
    N.prototype = Error(),
    N.prototype.constructor = N,
    [44].forEach(a=>{
        sb[a] = new N(a);
        sb[a].stack = "<generic error, no stack>"
    }
    ))
}
, ac, bc = (a,b)=>{
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
, cc = (a,b)=>{
    a = "string" == typeof a ? a : Db(a);
    for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
            var d = eb(a + "/" + c);
            try {
                Ob(d, 16895, 0)
            } catch (e) {}
            a = d
        }
    }
    return d
}
, dc = (a,b,c,d)=>{
    a = eb(("string" == typeof a ? a : Db(a)) + "/" + b);
    c = bc(c, d);
    return Ob(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}
, ec = (a,b,c,d,e,f)=>{
    var g = b;
    a && (a = "string" == typeof a ? a : Db(a),
    g = b ? eb(a + "/" + b) : a);
    a = bc(d, e);
    g = Ob(g, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d)
                b[d] = c.charCodeAt(d);
            c = b
        }
        Ub(g, a | 146);
        b = Wb(g, 577);
        Zb(b, c, 0, c.length, 0, f);
        Xb(b);
        Ub(g, a)
    }
    return g
}
, fc = (a,b,c,d)=>{
    a = eb(("string" == typeof a ? a : Db(a)) + "/" + b);
    b = bc(!!c, !!d);
    fc.Zh || (fc.Zh = 64);
    var e = fc.Zh++ << 8 | 0;
    mb(e, {
        open: f=>{
            f.seekable = !1
        }
        ,
        close: ()=>{
            d && d.buffer && d.buffer.length && d(10)
        }
        ,
        read: (f,g,m,n)=>{
            for (var p = 0, r = 0; r < n; r++) {
                try {
                    var t = c()
                } catch (u) {
                    throw new N(29);
                }
                if (void 0 === t && 0 === p)
                    throw new N(6);
                if (null === t || void 0 === t)
                    break;
                p++;
                g[m + r] = t
            }
            p && (f.node.timestamp = Date.now());
            return p
        }
        ,
        write: (f,g,m,n)=>{
            for (var p = 0; p < n; p++)
                try {
                    d(g[m + p])
                } catch (r) {
                    throw new N(29);
                }
            n && (f.node.timestamp = Date.now());
            return p
        }
    });
    return Pb(a, b, e)
}
, gc = a=>{
    if (!(a.Hi || a.Ii || a.link || a.eg)) {
        if ("undefined" != typeof XMLHttpRequest)
            throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (ja)
            try {
                a.eg = jb(ja(a.url)),
                a.gg = a.eg.length
            } catch (b) {
                throw new N(29);
            }
        else
            throw Error("Cannot load without read() or XMLHttpRequest.");
    }
}
, hc = (a,b,c,d,e)=>{
    function f() {
        this.Bh = !1;
        this.fg = []
    }
    f.prototype.get = function(r) {
        if (!(r > this.length - 1 || 0 > r)) {
            var t = r % this.chunkSize;
            return this.Xh(r / this.chunkSize | 0)[t]
        }
    }
    ;
    f.prototype.Lg = function(r) {
        this.Xh = r
    }
    ;
    f.prototype.Qh = function() {
        var r = new XMLHttpRequest;
        r.open("HEAD", c, !1);
        r.send(null);
        if (!(200 <= r.status && 300 > r.status || 304 === r.status))
            throw Error("Couldn't load " + c + ". Status: " + r.status);
        var t = Number(r.getResponseHeader("Content-length")), u, y = (u = r.getResponseHeader("Accept-Ranges")) && "bytes" === u;
        r = (u = r.getResponseHeader("Content-Encoding")) && "gzip" === u;
        var G = 1048576;
        y || (G = t);
        var A = this;
        A.Lg(J=>{
            var I = J * G
              , K = (J + 1) * G - 1;
            K = Math.min(K, t - 1);
            if ("undefined" == typeof A.fg[J]) {
                var D = A.fg;
                if (I > K)
                    throw Error("invalid range (" + I + ", " + K + ") or no bytes requested!");
                if (K > t - 1)
                    throw Error("only " + t + " bytes available! programmer error!");
                var H = new XMLHttpRequest;
                H.open("GET", c, !1);
                t !== G && H.setRequestHeader("Range", "bytes=" + I + "-" + K);
                H.responseType = "arraybuffer";
                H.overrideMimeType && H.overrideMimeType("text/plain; charset=x-user-defined");
                H.send(null);
                if (!(200 <= H.status && 300 > H.status || 304 === H.status))
                    throw Error("Couldn't load " + c + ". Status: " + H.status);
                I = void 0 !== H.response ? new Uint8Array(H.response || []) : jb(H.responseText || "");
                D[J] = I
            }
            if ("undefined" == typeof A.fg[J])
                throw Error("doXHR failed!");
            return A.fg[J]
        }
        );
        if (r || !t)
            G = t = 1,
            G = t = this.Xh(0).length,
            pa("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.li = t;
        this.ki = G;
        this.Bh = !0
    }
    ;
    if ("undefined" != typeof XMLHttpRequest) {
        if (!fa)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g = new f;
        Object.defineProperties(g, {
            length: {
                get: function() {
                    this.Bh || this.Qh();
                    return this.li
                }
            },
            chunkSize: {
                get: function() {
                    this.Bh || this.Qh();
                    return this.ki
                }
            }
        });
        var m = void 0
    } else
        m = c,
        g = void 0;
    var n = dc(a, b, d, e);
    g ? n.eg = g : m && (n.eg = null,
    n.url = m);
    Object.defineProperties(n, {
        gg: {
            get: function() {
                return this.eg.length
            }
        }
    });
    var p = {};
    Object.keys(n.cg).forEach(r=>{
        var t = n.cg[r];
        p[r] = function() {
            gc(n);
            return t.apply(null, arguments)
        }
    }
    );
    p.read = (r,t,u,y,G)=>{
        gc(n);
        r = r.node.eg;
        if (G >= r.length)
            t = 0;
        else {
            y = Math.min(r.length - G, y);
            if (r.slice)
                for (var A = 0; A < y; A++)
                    t[u + A] = r[G + A];
            else
                for (A = 0; A < y; A++)
                    t[u + A] = r.get(G + A);
            t = y
        }
        return t
    }
    ;
    p.Dh = ()=>{
        gc(n);
        l();
        throw new N(48);
    }
    ;
    n.cg = p;
    return n
}
, jc = (a,b,c,d,e,f,g,m,n,p)=>{
    function r(y) {
        function G(A) {
            p && p();
            m || ec(a, b, A, d, e, n);
            f && f();
            Pa(u)
        }
        ic(y, t, G, ()=>{
            g && g();
            Pa(u)
        }
        ) || G(y)
    }
    var t = b ? ib(eb(a + "/" + b)) : a
      , u = "cp " + t;
    Oa(u);
    "string" == typeof c ? ub(c, y=>r(y), g) : r(c)
}
, P = {}, Lb, Vb;
function kc(a, b, c) {
    if ("/" === b.charAt(0))
        return b;
    a = -100 === a ? "/" : lc(a).path;
    if (0 == b.length) {
        if (!c)
            throw new N(44);
        return a
    }
    return eb(a + "/" + b)
}
function mc(a, b, c) {
    try {
        var d = a(b)
    } catch (e) {
        if (e && e.node && eb(b) !== eb(Db(e.node)))
            return -54;
        throw e;
    }
    z[c >> 2] = d.dev;
    z[c + 8 >> 2] = d.ino;
    z[c + 12 >> 2] = d.mode;
    B[c + 16 >> 2] = d.nlink;
    z[c + 20 >> 2] = d.uid;
    z[c + 24 >> 2] = d.gid;
    z[c + 28 >> 2] = d.rdev;
    F = [d.size >>> 0, (E = d.size,
    1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 40 >> 2] = F[0];
    z[c + 44 >> 2] = F[1];
    z[c + 48 >> 2] = 4096;
    z[c + 52 >> 2] = d.blocks;
    F = [Math.floor(d.atime.getTime() / 1E3) >>> 0, (E = Math.floor(d.atime.getTime() / 1E3),
    1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 56 >> 2] = F[0];
    z[c + 60 >> 2] = F[1];
    B[c + 64 >> 2] = 0;
    F = [Math.floor(d.mtime.getTime() / 1E3) >>> 0, (E = Math.floor(d.mtime.getTime() / 1E3),
    1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 72 >> 2] = F[0];
    z[c + 76 >> 2] = F[1];
    B[c + 80 >> 2] = 0;
    F = [Math.floor(d.ctime.getTime() / 1E3) >>> 0, (E = Math.floor(d.ctime.getTime() / 1E3),
    1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 88 >> 2] = F[0];
    z[c + 92 >> 2] = F[1];
    B[c + 96 >> 2] = 0;
    F = [d.ino >>> 0, (E = d.ino,
    1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 104 >> 2] = F[0];
    z[c + 108 >> 2] = F[1];
    return 0
}
var nc = void 0;
function oc() {
    nc += 4;
    return z[nc - 4 >> 2]
}
function lc(a) {
    a = xb[a];
    if (!a)
        throw new N(8);
    return a
}
var Q = {
    sg: 8192,
    vg: function() {
        return rb(null, "/", 16895, 0)
    },
    ni: function() {
        var a = {
            hg: [],
            gi: 2
        };
        a.hg.push({
            buffer: new Uint8Array(Q.sg),
            offset: 0,
            wg: 0
        });
        var b = Q.Ag()
          , c = Q.Ag()
          , d = rb(Q.root, b, 4096, 0)
          , e = rb(Q.root, c, 4096, 0);
        d.pipe = a;
        e.pipe = a;
        a = Mb({
            path: b,
            node: d,
            flags: 0,
            seekable: !1,
            cg: Q.cg
        });
        d.stream = a;
        c = Mb({
            path: c,
            node: e,
            flags: 1,
            seekable: !1,
            cg: Q.cg
        });
        e.stream = c;
        return {
            Li: a.fd,
            Ui: c.fd
        }
    },
    cg: {
        gh: function(a) {
            var b = a.node.pipe;
            if (1 === (a.flags & 2097155))
                return 260;
            if (0 < b.hg.length)
                for (a = 0; a < b.hg.length; a++) {
                    var c = b.hg[a];
                    if (0 < c.offset - c.wg)
                        return 65
                }
            return 0
        },
        dh: function() {
            return 28
        },
        fsync: function() {
            return 28
        },
        read: function(a, b, c, d) {
            a = a.node.pipe;
            for (var e = 0, f = 0; f < a.hg.length; f++) {
                var g = a.hg[f];
                e += g.offset - g.wg
            }
            b instanceof ArrayBuffer || ArrayBuffer.isView(b) || l();
            b = b.subarray(c, c + d);
            if (0 >= d)
                return 0;
            if (0 == e)
                throw new N(6);
            c = d = Math.min(e, d);
            for (f = e = 0; f < a.hg.length; f++) {
                g = a.hg[f];
                var m = g.offset - g.wg;
                if (d <= m) {
                    var n = g.buffer.subarray(g.wg, g.offset);
                    d < m ? (n = n.subarray(0, d),
                    g.wg += d) : e++;
                    b.set(n);
                    break
                } else
                    n = g.buffer.subarray(g.wg, g.offset),
                    b.set(n),
                    b = b.subarray(n.byteLength),
                    d -= n.byteLength,
                    e++
            }
            e && e == a.hg.length && (e--,
            a.hg[e].offset = 0,
            a.hg[e].wg = 0);
            a.hg.splice(0, e);
            return c
        },
        write: function(a, b, c, d) {
            a = a.node.pipe;
            b instanceof ArrayBuffer || ArrayBuffer.isView(b) || l();
            b = b.subarray(c, c + d);
            c = b.byteLength;
            if (0 >= c)
                return 0;
            0 == a.hg.length ? (d = {
                buffer: new Uint8Array(Q.sg),
                offset: 0,
                wg: 0
            },
            a.hg.push(d)) : d = a.hg[a.hg.length - 1];
            d.offset <= Q.sg || l();
            var e = Q.sg - d.offset;
            if (e >= c)
                return d.buffer.set(b, d.offset),
                d.offset += c,
                c;
            0 < e && (d.buffer.set(b.subarray(0, e), d.offset),
            d.offset += e,
            b = b.subarray(e, b.byteLength));
            d = b.byteLength / Q.sg | 0;
            e = b.byteLength % Q.sg;
            for (var f = 0; f < d; f++) {
                var g = {
                    buffer: new Uint8Array(Q.sg),
                    offset: Q.sg,
                    wg: 0
                };
                a.hg.push(g);
                g.buffer.set(b.subarray(0, Q.sg));
                b = b.subarray(Q.sg, b.byteLength)
            }
            0 < e && (g = {
                buffer: new Uint8Array(Q.sg),
                offset: b.byteLength,
                wg: 0
            },
            a.hg.push(g),
            g.buffer.set(b));
            return c
        },
        close: function(a) {
            a = a.node.pipe;
            a.gi--;
            0 === a.gi && (a.hg = null)
        }
    },
    Ag: function() {
        Q.Ag.current || (Q.Ag.current = 0);
        return "pipe[" + Q.Ag.current++ + "]"
    }
}
  , R = {
    vg: function() {
        h.websocket = h.websocket && "object" === typeof h.websocket ? h.websocket : {};
        h.websocket.wh = {};
        h.websocket.on = function(a, b) {
            "function" === typeof b && (this.wh[a] = b);
            return this
        }
        ;
        h.websocket.emit = function(a, b) {
            "function" === typeof this.wh[a] && this.wh[a].call(this, b)
        }
        ;
        return rb(null, "/", 16895, 0)
    },
    createSocket: function(a, b, c) {
        b &= -526337;
        if (1 == b && c && 6 != c)
            throw new N(66);
        a = {
            family: a,
            type: b,
            protocol: c,
            kg: null,
            error: null,
            fh: {},
            pending: [],
            Sg: [],
            Ug: R.mg
        };
        b = R.Ag();
        c = rb(R.root, b, 49152, 0);
        c.Tg = a;
        b = Mb({
            path: b,
            node: c,
            flags: 2,
            seekable: !1,
            cg: R.cg
        });
        a.stream = b;
        return a
    },
    dj: function(a) {
        return (a = xb[a]) && 49152 === (a.node.mode & 49152) ? a.node.Tg : null
    },
    cg: {
        gh: function(a) {
            a = a.node.Tg;
            return a.Ug.gh(a)
        },
        dh: function(a, b, c) {
            a = a.node.Tg;
            return a.Ug.dh(a, b, c)
        },
        read: function(a, b, c, d) {
            a = a.node.Tg;
            d = a.Ug.Mi(a, d);
            if (!d)
                return 0;
            b.set(d.buffer, c);
            return d.buffer.length
        },
        write: function(a, b, c, d) {
            a = a.node.Tg;
            return a.Ug.Oi(a, b, c, d)
        },
        close: function(a) {
            a = a.node.Tg;
            a.Ug.close(a)
        }
    },
    Ag: function() {
        R.Ag.current || (R.Ag.current = 0);
        return "socket[" + R.Ag.current++ + "]"
    },
    mg: {
        lh: function(a, b, c) {
            if ("object" == typeof b) {
                var d = b;
                c = b = null
            }
            if (d)
                if (d._socket)
                    b = d._socket.remoteAddress,
                    c = d._socket.remotePort;
                else {
                    c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
                    if (!c)
                        throw Error("WebSocket URL must be in the format ws(s)://address:port");
                    b = c[1];
                    c = parseInt(c[2], 10)
                }
            else
                try {
                    var e = h.websocket && "object" === typeof h.websocket
                      , f = "ws://";
                    e && "string" === typeof h.websocket.url && (f = h.websocket.url);
                    if ("ws://" === f || "wss://" === f) {
                        var g = b.split("/");
                        f = f + g[0] + ":" + c + "/" + g.slice(1).join("/")
                    }
                    g = "binary";
                    e && "string" === typeof h.websocket.subprotocol && (g = h.websocket.subprotocol);
                    var m = void 0;
                    "null" !== g && (m = g = g.replace(/^ +| +$/g, "").split(/ *, */));
                    e && null === h.websocket.subprotocol && (m = void 0);
                    d = new (ha ? require("ws") : WebSocket)(f,m);
                    d.binaryType = "arraybuffer"
                } catch (n) {
                    throw new N(23);
                }
            b = {
                Dg: b,
                port: c,
                socket: d,
                mh: []
            };
            R.mg.Nh(a, b);
            R.mg.Bi(a, b);
            2 === a.type && "undefined" != typeof a.Vg && b.mh.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.Vg & 65280) >> 8, a.Vg & 255]));
            return b
        },
        nh: function(a, b, c) {
            return a.fh[b + ":" + c]
        },
        Nh: function(a, b) {
            a.fh[b.Dg + ":" + b.port] = b
        },
        hi: function(a, b) {
            delete a.fh[b.Dg + ":" + b.port]
        },
        Bi: function(a, b) {
            function c() {
                h.websocket.emit("open", a.stream.fd);
                try {
                    for (var f = b.mh.shift(); f; )
                        b.socket.send(f),
                        f = b.mh.shift()
                } catch (g) {
                    b.socket.close()
                }
            }
            function d(f) {
                if ("string" == typeof f)
                    f = (new TextEncoder).encode(f);
                else {
                    void 0 !== f.byteLength || l();
                    if (0 == f.byteLength)
                        return;
                    f = new Uint8Array(f)
                }
                var g = e;
                e = !1;
                g && 10 === f.length && 255 === f[0] && 255 === f[1] && 255 === f[2] && 255 === f[3] && 112 === f[4] && 111 === f[5] && 114 === f[6] && 116 === f[7] ? (f = f[8] << 8 | f[9],
                R.mg.hi(a, b),
                b.port = f,
                R.mg.Nh(a, b)) : (a.Sg.push({
                    Dg: b.Dg,
                    port: b.port,
                    data: f
                }),
                h.websocket.emit("message", a.stream.fd))
            }
            var e = !0;
            ha ? (b.socket.on("open", c),
            b.socket.on("message", function(f, g) {
                g && d((new Uint8Array(f)).buffer)
            }),
            b.socket.on("close", function() {
                h.websocket.emit("close", a.stream.fd)
            }),
            b.socket.on("error", function() {
                a.error = 14;
                h.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"])
            })) : (b.socket.onopen = c,
            b.socket.onclose = function() {
                h.websocket.emit("close", a.stream.fd)
            }
            ,
            b.socket.onmessage = function(f) {
                d(f.data)
            }
            ,
            b.socket.onerror = function() {
                a.error = 14;
                h.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"])
            }
            )
        },
        gh: function(a) {
            if (1 === a.type && a.kg)
                return a.pending.length ? 65 : 0;
            var b = 0
              , c = 1 === a.type ? R.mg.nh(a, a.Eg, a.Fg) : null;
            if (a.Sg.length || !c || c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED)
                b |= 65;
            if (!c || c && c.socket.readyState === c.socket.OPEN)
                b |= 4;
            if (c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED)
                b |= 16;
            return b
        },
        dh: function(a, b, c) {
            switch (b) {
            case 21531:
                return b = 0,
                a.Sg.length && (b = a.Sg[0].data.length),
                z[c >> 2] = b,
                0;
            default:
                return 28
            }
        },
        close: function(a) {
            if (a.kg) {
                try {
                    a.kg.close()
                } catch (e) {}
                a.kg = null
            }
            for (var b = Object.keys(a.fh), c = 0; c < b.length; c++) {
                var d = a.fh[b[c]];
                try {
                    d.socket.close()
                } catch (e) {}
                R.mg.hi(a, d)
            }
            return 0
        },
        bind: function(a, b, c) {
            if ("undefined" != typeof a.Hh || "undefined" != typeof a.Vg)
                throw new N(28);
            a.Hh = b;
            a.Vg = c;
            if (2 === a.type) {
                a.kg && (a.kg.close(),
                a.kg = null);
                try {
                    a.Ug.listen(a, 0)
                } catch (d) {
                    if (!(d instanceof N))
                        throw d;
                    if (138 !== d.jg)
                        throw d;
                }
            }
        },
        connect: function(a, b, c) {
            if (a.kg)
                throw new N(138);
            if ("undefined" != typeof a.Eg && "undefined" != typeof a.Fg) {
                var d = R.mg.nh(a, a.Eg, a.Fg);
                if (d) {
                    if (d.socket.readyState === d.socket.CONNECTING)
                        throw new N(7);
                    throw new N(30);
                }
            }
            b = R.mg.lh(a, b, c);
            a.Eg = b.Dg;
            a.Fg = b.port;
            throw new N(26);
        },
        listen: function(a) {
            if (!ha)
                throw new N(138);
            if (a.kg)
                throw new N(28);
            var b = require("ws").Server;
            a.kg = new b({
                host: a.Hh,
                port: a.Vg
            });
            h.websocket.emit("listen", a.stream.fd);
            a.kg.on("connection", function(c) {
                if (1 === a.type) {
                    var d = R.createSocket(a.family, a.type, a.protocol);
                    c = R.mg.lh(d, c);
                    d.Eg = c.Dg;
                    d.Fg = c.port;
                    a.pending.push(d);
                    h.websocket.emit("connection", d.stream.fd)
                } else
                    R.mg.lh(a, c),
                    h.websocket.emit("connection", a.stream.fd)
            });
            a.kg.on("close", function() {
                h.websocket.emit("close", a.stream.fd);
                a.kg = null
            });
            a.kg.on("error", function() {
                a.error = 23;
                h.websocket.emit("error", [a.stream.fd, a.error, "EHOSTUNREACH: Host is unreachable"])
            })
        },
        accept: function(a) {
            if (!a.kg || !a.pending.length)
                throw new N(28);
            var b = a.pending.shift();
            b.stream.flags = a.stream.flags;
            return b
        },
        ej: function(a, b) {
            if (b) {
                if (void 0 === a.Eg || void 0 === a.Fg)
                    throw new N(53);
                b = a.Eg;
                a = a.Fg
            } else
                b = a.Hh || 0,
                a = a.Vg || 0;
            return {
                Dg: b,
                port: a
            }
        },
        Oi: function(a, b, c, d, e, f) {
            if (2 === a.type) {
                if (void 0 === e || void 0 === f)
                    e = a.Eg,
                    f = a.Fg;
                if (void 0 === e || void 0 === f)
                    throw new N(17);
            } else
                e = a.Eg,
                f = a.Fg;
            var g = R.mg.nh(a, e, f);
            if (1 === a.type) {
                if (!g || g.socket.readyState === g.socket.CLOSING || g.socket.readyState === g.socket.CLOSED)
                    throw new N(53);
                if (g.socket.readyState === g.socket.CONNECTING)
                    throw new N(6);
            }
            ArrayBuffer.isView(b) && (c += b.byteOffset,
            b = b.buffer);
            b = b.slice(c, c + d);
            if (2 === a.type && (!g || g.socket.readyState !== g.socket.OPEN))
                return g && g.socket.readyState !== g.socket.CLOSING && g.socket.readyState !== g.socket.CLOSED || (g = R.mg.lh(a, e, f)),
                g.mh.push(b),
                d;
            try {
                return g.socket.send(b),
                d
            } catch (m) {
                throw new N(28);
            }
        },
        Mi: function(a, b) {
            if (1 === a.type && a.kg)
                throw new N(53);
            var c = a.Sg.shift();
            if (!c) {
                if (1 === a.type) {
                    a = R.mg.nh(a, a.Eg, a.Fg);
                    if (!a)
                        throw new N(53);
                    if (a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED)
                        return null
                }
                throw new N(6);
            }
            var d = c.data.byteLength || c.data.length
              , e = c.data.byteOffset || 0
              , f = c.data.buffer || c.data;
            b = Math.min(b, d);
            var g = {
                buffer: new Uint8Array(f,e,b),
                Dg: c.Dg,
                port: c.port
            };
            1 === a.type && b < d && (c.data = new Uint8Array(f,e + b,d - b),
            a.Sg.unshift(c));
            return g
        }
    }
};
function pc(a, b) {
    qc = a;
    rc = b;
    if (sc)
        if (tc || (tc = !0),
        0 == a)
            uc = function() {
                var d = Math.max(0, vc + b - wc()) | 0;
                setTimeout(xc, d)
            }
            ;
        else if (1 == a)
            uc = function() {
                yc(xc)
            }
            ;
        else if (2 == a) {
            if ("undefined" == typeof setImmediate) {
                var c = [];
                addEventListener("message", d=>{
                    if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                        d.stopPropagation(),
                        c.shift()()
                }
                , !0);
                setImmediate = function(d) {
                    c.push(d);
                    fa ? (void 0 === h.setImmediates && (h.setImmediates = []),
                    h.setImmediates.push(d),
                    postMessage({
                        target: "setimmediate"
                    })) : postMessage("setimmediate", "*")
                }
            }
            uc = function() {
                setImmediate(xc)
            }
        }
}
var wc;
wc = ha ? ()=>{
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
}
: ()=>performance.now();
function zc(a) {
    if (!noExitRuntime) {
        if (h.onExit)
            h.onExit(a);
        sa = !0
    }
    da(a, new oa(a))
}
function Ac(a) {
    a instanceof oa || "unwind" == a || da(1, a)
}
function Bc(a, b, c, d, e) {
    !sc || l("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    sc = a;
    Cc = d;
    var f = Dc;
    tc = !1;
    xc = function() {
        if (!sa)
            if (0 < Ec.length) {
                var g = Date.now()
                  , m = Ec.shift();
                m.bj(m.Wi);
                if (Fc) {
                    var n = Fc
                      , p = 0 == n % 1 ? n - 1 : Math.floor(n);
                    Fc = m.Yi ? p : (8 * n + (p + .5)) / 9
                }
                pa('main loop blocker "' + m.name + '" took ' + (Date.now() - g) + " ms");
                h.setStatus && (g = h.statusMessage || "Please wait...",
                m = Fc,
                n = Gc.$i,
                m ? m < n ? h.setStatus(g + " (" + (n - m) + "/" + n + ")") : h.setStatus(g) : h.setStatus(""));
                f < Dc || setTimeout(xc, 0)
            } else if (!(f < Dc))
                if (Hc = Hc + 1 | 0,
                1 == qc && 1 < rc && 0 != Hc % rc)
                    uc();
                else {
                    0 == qc && (vc = wc());
                    if (S)
                        for (g = S.Xg,
                        S.Xg = S.ih,
                        S.ih = g,
                        g = S.Jg,
                        S.Jg = S.vh,
                        S.vh = g,
                        g = Ic(2097152),
                        m = 0; m <= g; ++m)
                            S.Jg[m] = 0;
                    sa || h.preMainLoop && !1 === h.preMainLoop() || (Jc(a),
                    h.postMainLoop && h.postMainLoop());
                    f < Dc || ("object" == typeof SDL && SDL.audio && SDL.audio.Ki && SDL.audio.Ki(),
                    uc())
                }
    }
    ;
    e || (b && 0 < b ? pc(0, 1E3 / b) : pc(1, 1),
    uc());
    if (c)
        throw "unwind";
}
function Jc(a) {
    if (!sa)
        try {
            a()
        } catch (b) {
            Ac(b)
        }
}
function Kc(a) {
    setTimeout(function() {
        Jc(a)
    }, 1E4)
}
function Lc(a) {
    Mc || (Mc = {});
    Mc[a] || (Mc[a] = 1,
    ha && (a = "warning: " + a),
    k(a))
}
var Mc, tc = !1, uc = null, Dc = 0, sc = null, Cc = 0, qc = 0, rc = 0, Hc = 0, Ec = [], Gc = {}, vc, xc, Fc, Nc = !1, Oc = !1, Pc = [];
function Qc() {
    function a() {
        Oc = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas
    }
    h.preloadPlugins || (h.preloadPlugins = []);
    if (!Rc) {
        Rc = !0;
        try {
            Sc = !0
        } catch (c) {
            Sc = !1,
            k("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Tc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Sc ? null : k("warning: no BlobBuilder");
        Uc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        h.ci || "undefined" != typeof Uc || (k("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
        h.ci = !0);
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.ci && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, f) {
                var g = null;
                if (Sc)
                    try {
                        g = new Blob([c],{
                            type: Vc(d)
                        }),
                        g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer],{
                            type: Vc(d)
                        }))
                    } catch (p) {
                        Lc("Blob constructor present but fails: " + p + "; falling back to blob builder")
                    }
                g || (g = new Tc,
                g.append((new Uint8Array(c)).buffer),
                g = g.getBlob());
                var m = Uc.createObjectURL(g)
                  , n = new Image;
                n.onload = ()=>{
                    n.complete || l("Image " + d + " could not be decoded");
                    var p = document.createElement("canvas");
                    p.width = n.width;
                    p.height = n.height;
                    p.getContext("2d").drawImage(n, 0, 0);
                    Uc.revokeObjectURL(m);
                    e && e(c)
                }
                ;
                n.onerror = ()=>{
                    pa("Image " + m + " could not be decoded");
                    f && f()
                }
                ;
                n.src = m
            }
        });
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.kj && c.substr(-4)in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function(c, d, e, f) {
                function g() {
                    n || (n = !0,
                    e && e(c))
                }
                function m() {
                    n || (n = !0,
                    new Audio,
                    f && f())
                }
                var n = !1;
                if (Sc) {
                    try {
                        var p = new Blob([c],{
                            type: Vc(d)
                        })
                    } catch (t) {
                        return m()
                    }
                    p = Uc.createObjectURL(p);
                    var r = new Audio;
                    r.addEventListener("canplaythrough", ()=>g(r), !1);
                    r.onerror = function() {
                        if (!n) {
                            k("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                            for (var t = "", u = 0, y = 0, G = 0; G < c.length; G++)
                                for (u = u << 8 | c[G],
                                y += 8; 6 <= y; ) {
                                    var A = u >> y - 6 & 63;
                                    y -= 6;
                                    t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[A]
                                }
                            2 == y ? (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(u & 3) << 4],
                            t += "==") : 4 == y && (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(u & 15) << 2],
                            t += "=");
                            r.src = "data:audio/x-" + d.substr(-3) + ";base64," + t;
                            g(r)
                        }
                    }
                    ;
                    r.src = p;
                    Kc(function() {
                        g(r)
                    })
                } else
                    return m()
            }
        });
        var b = h.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (()=>{}
        ),
        b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (()=>{}
        ),
        b.exitPointerLock = b.exitPointerLock.bind(document),
        document.addEventListener("pointerlockchange", a, !1),
        document.addEventListener("mozpointerlockchange", a, !1),
        document.addEventListener("webkitpointerlockchange", a, !1),
        document.addEventListener("mspointerlockchange", a, !1),
        h.elementPointerLock && b.addEventListener("click", c=>{
            !Oc && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(),
            c.preventDefault())
        }
        , !1))
    }
}
function ic(a, b, c, d) {
    Qc();
    var e = !1;
    h.preloadPlugins.forEach(function(f) {
        !e && f.canHandle(b) && (f.handle(a, b, c, d),
        e = !0)
    });
    return e
}
function Wc(a, b, c, d) {
    if (b && h.xg && a == h.canvas)
        return h.xg;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            Ch: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
        };
        if (d)
            for (var g in d)
                f[g] = d[g];
        if ("undefined" != typeof Xc && (e = Yc(a, f)))
            var m = Zc[e].Cg
    } else
        m = a.getContext("2d");
    if (!m)
        return null;
    c && (b || "undefined" == typeof T || l("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
    h.xg = m,
    b && $c(e),
    h.Si = b,
    Pc.forEach(function(n) {
        n()
    }),
    Qc());
    return m
}
var ad = !1
  , bd = void 0
  , cd = void 0;
function dd(a, b) {
    function c() {
        Nc = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = ed,
        bd && d.requestPointerLock(),
        Nc = !0,
        cd ? ("undefined" != typeof SDL && (z[SDL.screen >> 2] = B[SDL.screen >> 2] | 8388608),
        fd(h.canvas),
        gd()) : fd(d)) : (f.parentNode.insertBefore(d, f),
        f.parentNode.removeChild(f),
        cd ? ("undefined" != typeof SDL && (z[SDL.screen >> 2] = B[SDL.screen >> 2] & -8388609),
        fd(h.canvas),
        gd()) : fd(d));
        if (h.onFullScreen)
            h.onFullScreen(Nc);
        if (h.onFullscreen)
            h.onFullscreen(Nc)
    }
    bd = a;
    cd = b;
    "undefined" == typeof bd && (bd = !0);
    "undefined" == typeof cd && (cd = !1);
    var d = h.canvas;
    ad || (ad = !0,
    document.addEventListener("fullscreenchange", c, !1),
    document.addEventListener("mozfullscreenchange", c, !1),
    document.addEventListener("webkitfullscreenchange", c, !1),
    document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? ()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? ()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
    e.requestFullscreen()
}
function ed() {
    if (!Nc)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}
    ).apply(document, []);
    return !0
}
var hd = 0;
function yc(a) {
    if ("function" == typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === hd)
            hd = b + 1E3 / 60;
        else
            for (; b + 2 >= hd; )
                hd += 1E3 / 60;
        setTimeout(a, Math.max(hd - b, 0))
    }
}
function Vc(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    }[a.substr(a.lastIndexOf(".") + 1)]
}
var jd = [];
function gd() {
    var a = h.canvas;
    jd.forEach(function(b) {
        b(a.width, a.height)
    })
}
function fd(a, b, c) {
    b && c ? (a.Ti = b,
    a.Ci = c) : (b = a.Ti,
    c = a.Ci);
    var d = b
      , e = c;
    h.forcedAspectRatio && 0 < h.forcedAspectRatio && (d / e < h.forcedAspectRatio ? d = Math.round(e * h.forcedAspectRatio) : e = Math.round(d / h.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e * f)
    }
    cd ? (a.width != d && (a.width = d),
    a.height != e && (a.height = e),
    "undefined" != typeof a.style && (a.style.removeProperty("width"),
    a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
    a.height != c && (a.height = c),
    "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
    a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
    a.style.removeProperty("height"))))
}
var Rc, Sc, Tc, Uc, U = 12288, kd = !1, ld = 0, md = 0, nd = 0, od = {
    alpha: !1,
    depth: !1,
    stencil: !1,
    antialias: !1
}, pd = {}, qd;
function rd(a) {
    var b = a.getExtension("ANGLE_instanced_arrays");
    b && (a.vertexAttribDivisor = function(c, d) {
        b.vertexAttribDivisorANGLE(c, d)
    }
    ,
    a.drawArraysInstanced = function(c, d, e, f) {
        b.drawArraysInstancedANGLE(c, d, e, f)
    }
    ,
    a.drawElementsInstanced = function(c, d, e, f, g) {
        b.drawElementsInstancedANGLE(c, d, e, f, g)
    }
    )
}
function sd(a) {
    var b = a.getExtension("OES_vertex_array_object");
    b && (a.createVertexArray = function() {
        return b.createVertexArrayOES()
    }
    ,
    a.deleteVertexArray = function(c) {
        b.deleteVertexArrayOES(c)
    }
    ,
    a.bindVertexArray = function(c) {
        b.bindVertexArrayOES(c)
    }
    ,
    a.isVertexArray = function(c) {
        return b.isVertexArrayOES(c)
    }
    )
}
function td(a) {
    var b = a.getExtension("WEBGL_draw_buffers");
    b && (a.drawBuffers = function(c, d) {
        b.drawBuffersWEBGL(c, d)
    }
    )
}
var ud = 1
  , vd = []
  , wd = {}
  , V = []
  , xd = []
  , yd = []
  , zd = []
  , Ad = []
  , Bd = []
  , Zc = []
  , W = []
  , Cd = []
  , Dd = []
  , Ed = []
  , Fd = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8]
  , Gd = {}
  , Hd = {}
  , Id = 4;
function X(a) {
    Jd || (Jd = a)
}
function Kd(a) {
    for (var b = ud++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
function Ic(a) {
    return 32 - Math.clz32(0 === a ? 0 : a - 1)
}
function Ld(a) {
    a = Ic(a);
    var b = S.Wg[a];
    if (b)
        return b;
    b = T.getParameter(34965);
    S.Wg[a] = T.createBuffer();
    T.bindBuffer(34963, S.Wg[a]);
    T.bufferData(34963, 1 << a, 35048);
    T.bindBuffer(34963, b);
    return S.Wg[a]
}
function Md(a) {
    Nd = !1;
    for (var b = 0; b < S.$h; ++b) {
        var c = S.Gg[b];
        if (c.Zg && c.enabled) {
            Nd = !0;
            var d = c.uh;
            d = 0 < d ? a * d : c.size * Fd[c.type - 5120] * a;
            var e = Ic(d);
            var f = S.Xg[e]
              , g = S.Jg[e];
            S.Jg[e] = S.Jg[e] + 1 & 63;
            var m = f[g];
            m ? e = m : (m = T.getParameter(34964),
            f[g] = T.createBuffer(),
            T.bindBuffer(34962, f[g]),
            T.bufferData(34962, 1 << e, 35048),
            T.bindBuffer(34962, m),
            e = f[g]);
            T.bindBuffer(34962, e);
            T.bufferSubData(34962, 0, v.subarray(c.pg, c.pg + d));
            c.Lh.call(T, b, c.size, c.type, c.Eh, c.uh, 0)
        }
    }
}
function Od() {
    Nd && T.bindBuffer(34962, vd[T.$g])
}
function Yc(a, b) {
    a.fg || (a.fg = a.getContext,
    a.getContext = function(d, e) {
        e = a.fg(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    }
    );
    var c = 1 < b.Ch ? a.getContext("webgl2", b) : a.getContext("webgl", b);
    return c ? Pd(c, b) : 0
}
function Pd(a, b) {
    var c = Kd(Zc)
      , d = {
        fj: c,
        attributes: b,
        version: b.Ch,
        Cg: a
    };
    a.canvas && (a.canvas.Yg = d);
    Zc[c] = d;
    ("undefined" == typeof b.vi || b.vi) && Qd(d);
    d.$h = d.Cg.getParameter(34921);
    d.Gg = [];
    for (a = 0; a < d.$h; a++)
        d.Gg[a] = {
            enabled: !1,
            Zg: !1,
            size: 0,
            type: 0,
            Eh: 0,
            uh: 0,
            pg: 0,
            Lh: null
        };
    a = Ic(2097152);
    d.Jg = [];
    d.vh = [];
    d.Jg.length = d.vh.length = a + 1;
    d.Xg = [];
    d.ih = [];
    d.Xg.length = d.ih.length = a + 1;
    d.Wg = [];
    d.Wg.length = a + 1;
    for (b = 0; b <= a; ++b) {
        d.Wg[b] = null;
        d.Jg[b] = d.vh[b] = 0;
        d.Xg[b] = [];
        d.ih[b] = [];
        var e = d.Xg[b]
          , f = d.ih[b];
        e.length = f.length = 64;
        for (var g = 0; 64 > g; ++g)
            e[g] = f[g] = null
    }
    return c
}
function $c(a) {
    S = Zc[a];
    h.xg = T = S && S.Cg
}
function Qd(a) {
    a || (a = S);
    if (!a.Gi) {
        a.Gi = !0;
        var b = a.Cg;
        rd(b);
        sd(b);
        td(b);
        b.Zi = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
        b.hj = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
        2 <= a.version && (b.ng = b.getExtension("EXT_disjoint_timer_query_webgl2"));
        if (2 > a.version || !b.ng)
            b.ng = b.getExtension("EXT_disjoint_timer_query");
        b.jj = b.getExtension("WEBGL_multi_draw");
        (b.getSupportedExtensions() || []).forEach(function(c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        })
    }
}
var Xc = {}, Jd, S, Nd;
function Rd(a) {
    var b = xa(a) + 1
      , c = M(b);
    c && wa(a, x, c, b);
    return c
}
var Sd = [];
function Td(a, b) {
    Sd.length = 0;
    var c;
    for (b >>= 2; c = v[a++]; )
        b += 105 != c & b,
        Sd.push(105 == c ? z[b] : (106 == c ? Ca : Da)[b++ >> 1]),
        ++b;
    return Sd
}
function Ud(a) {
    var b = Vd();
    a = a();
    Wd(b);
    return a
}
var Xd = 0;
function Yd() {
    for (var a = Zd.length - 1; 0 <= a; --a)
        $d(a);
    Zd = [];
    ae = []
}
var ae = [];
function be(a, b, c) {
    function d(g, m) {
        if (g.length != m.length)
            return !1;
        for (var n in g)
            if (g[n] != m[n])
                return !1;
        return !0
    }
    for (var e in ae) {
        var f = ae[e];
        if (f.Jh == a && d(f.Ph, c))
            return
    }
    ae.push({
        Jh: a,
        ei: b,
        Ph: c
    });
    ae.sort(function(g, m) {
        return g.ei < m.ei
    })
}
function ce(a) {
    for (var b = 0; b < ae.length; ++b)
        ae[b].Jh == a && (ae.splice(b, 1),
        --b)
}
function de() {
    if (Xd && ee.Kg)
        for (var a = 0; a < ae.length; ++a) {
            var b = ae[a];
            ae.splice(a, 1);
            --a;
            b.Jh.apply(null, b.Ph)
        }
}
var Zd = [];
function $d(a) {
    var b = Zd[a];
    b.target.removeEventListener(b.lg, b.wi, b.rg);
    Zd.splice(a, 1)
}
function fe(a) {
    function b(d) {
        ++Xd;
        ee = a;
        de();
        a.ug(d);
        de();
        --Xd
    }
    if (a.tg)
        a.wi = b,
        a.target.addEventListener(a.lg, b, a.rg),
        Zd.push(a),
        ge || (Ia.push(Yd),
        ge = !0);
    else
        for (var c = 0; c < Zd.length; ++c)
            Zd[c].target == a.target && Zd[c].lg == a.lg && $d(c--)
}
function he(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}
function ie() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var je = {}, ge, ee, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we = {}, xe = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];
function Y(a) {
    a = 2 < a ? q(a) : a;
    return xe[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0)
}
function ye(a) {
    return Ud(function() {
        var b = ze(8)
          , c = b + 4
          , d = ze(a.id.length + 1);
        w(a.id, d, a.id.length + 1);
        if (d = Y(d))
            z[b >> 2] = d.width,
            z[c >> 2] = d.height;
        return [z[b >> 2], z[c >> 2]]
    })
}
function Ae(a, b, c) {
    a = Y(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
function Be(a, b, c) {
    a.Xi ? Ud(function() {
        var d = ze(a.id.length + 1);
        w(a.id, d, a.id.length + 1);
        Ae(d, b, c)
    }) : (a.width = b,
    a.height = c)
}
function Ce(a) {
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || (document.removeEventListener("fullscreenchange", b),
        document.removeEventListener("webkitfullscreenchange", b),
        Be(a, d, e),
        a.style.width = f,
        a.style.height = g,
        a.style.backgroundColor = m,
        n || (document.body.style.backgroundColor = "white"),
        document.body.style.backgroundColor = n,
        a.style.paddingLeft = p,
        a.style.paddingRight = r,
        a.style.paddingTop = t,
        a.style.paddingBottom = u,
        a.style.marginLeft = y,
        a.style.marginRight = G,
        a.style.marginTop = A,
        a.style.marginBottom = J,
        document.body.style.margin = I,
        document.documentElement.style.overflow = K,
        document.body.scroll = D,
        a.style.Ig = H,
        a.Yg && a.Yg.Cg.viewport(0, 0, d, e),
        we.kh && L(we.kh)(37, 0, we.Rh))
    }
    var c = ye(a)
      , d = c[0]
      , e = c[1]
      , f = a.style.width
      , g = a.style.height
      , m = a.style.backgroundColor
      , n = document.body.style.backgroundColor
      , p = a.style.paddingLeft
      , r = a.style.paddingRight
      , t = a.style.paddingTop
      , u = a.style.paddingBottom
      , y = a.style.marginLeft
      , G = a.style.marginRight
      , A = a.style.marginTop
      , J = a.style.marginBottom
      , I = document.body.style.margin
      , K = document.documentElement.style.overflow
      , D = document.body.scroll
      , H = a.style.Ig;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
function De(a, b, c) {
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
function Ee(a) {
    return 0 > xe.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}
function Fe(a, b) {
    if (0 != b.Ih || 0 != b.xh) {
        Ce(a);
        var c = b.Qi ? innerWidth : screen.width
          , d = b.Qi ? innerHeight : screen.height
          , e = Ee(a)
          , f = e.width;
        e = e.height;
        var g = ye(a)
          , m = g[0];
        g = g[1];
        3 == b.Ih ? (De(a, (d - e) / 2, (c - f) / 2),
        c = f,
        d = e) : 2 == b.Ih && (c * g < m * d ? (f = g * c / m,
        De(a, (d - f) / 2, 0),
        d = f) : (f = m * d / g,
        De(a, 0, (c - f) / 2),
        c = f));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.yi && (a.style.Ig = "optimizeSpeed",
        a.style.Ig = "-moz-crisp-edges",
        a.style.Ig = "-o-crisp-edges",
        a.style.Ig = "-webkit-optimize-contrast",
        a.style.Ig = "optimize-contrast",
        a.style.Ig = "crisp-edges",
        a.style.Ig = "pixelated");
        f = 2 == b.xh ? devicePixelRatio : 1;
        0 != b.xh && (c = c * f | 0,
        d = d * f | 0,
        Be(a, c, d),
        a.Yg && a.Yg.Cg.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return ie() ? -3 : -1;
    we = b;
    b.kh && L(b.kh)(37, 0, b.Rh);
    return 0
}
function Ge(a) {
    if (a.requestPointerLock)
        a.requestPointerLock();
    else
        return document.body.requestPointerLock ? -3 : -1;
    return 0
}
function He(a, b) {
    Da[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        Da[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        Da[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        z[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    z[a + 1296 >> 2] = b.connected;
    z[a + 1300 >> 2] = b.index;
    z[a + 8 >> 2] = b.axes.length;
    z[a + 12 >> 2] = b.buttons.length;
    w(b.id, a + 1304, 64);
    w(b.mapping, a + 1368, 64)
}
var Ie = [];
function Je(a) {
    switch (a) {
    case 34962:
        a = 34964;
        break;
    case 34963:
        a = 34965;
        break;
    case 35051:
        a = 35053;
        break;
    case 35052:
        a = 35055;
        break;
    case 35982:
        a = 35983;
        break;
    case 36662:
        a = 36662;
        break;
    case 36663:
        a = 36663;
        break;
    case 35345:
        a = 35368
    }
    return (a = T.getParameter(a)) ? a.name | 0 : 0
}
function Ke(a) {
    switch (a) {
    case 34962:
    case 34963:
    case 36662:
    case 36663:
    case 35051:
    case 35052:
    case 35882:
    case 35982:
    case 35345:
        return !0;
    default:
        return !1
    }
}
function Me(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var f = T[c]()
          , g = f && Kd(d);
        f ? (f.name = g,
        d[g] = f) : X(1282);
        z[b + 4 * e >> 2] = g
    }
}
function Ne(a, b, c, d, e, f, g, m) {
    b = V[b];
    if (a = T[a](b, c))
        d = m && w(a.name, m, d),
        e && (z[e >> 2] = d),
        f && (z[f >> 2] = a.size),
        g && (z[g >> 2] = a.type)
}
function Oe(a, b) {
    B[a >> 2] = b;
    B[a + 4 >> 2] = (b - B[a >> 2]) / 4294967296
}
function Pe(a, b, c) {
    if (b) {
        var d = void 0;
        switch (a) {
        case 36346:
            d = 1;
            break;
        case 36344:
            0 != c && 1 != c && X(1280);
            return;
        case 34814:
        case 36345:
            d = 0;
            break;
        case 34466:
            var e = T.getParameter(34467);
            d = e ? e.length : 0;
            break;
        case 33309:
            if (2 > S.version) {
                X(1282);
                return
            }
            d = 2 * (T.getSupportedExtensions() || []).length;
            break;
        case 33307:
        case 33308:
            if (2 > S.version) {
                X(1280);
                return
            }
            d = 33307 == a ? 3 : 0
        }
        if (void 0 === d)
            switch (e = T.getParameter(a),
            typeof e) {
            case "number":
                d = e;
                break;
            case "boolean":
                d = e ? 1 : 0;
                break;
            case "string":
                X(1280);
                return;
            case "object":
                if (null === e)
                    switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 36662:
                    case 36663:
                    case 35053:
                    case 35055:
                    case 36010:
                    case 35097:
                    case 35869:
                    case 32874:
                    case 36389:
                    case 35983:
                    case 35368:
                    case 34068:
                        d = 0;
                        break;
                    default:
                        X(1280);
                        return
                    }
                else {
                    if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                        for (a = 0; a < e.length; ++a)
                            switch (c) {
                            case 0:
                                z[b + 4 * a >> 2] = e[a];
                                break;
                            case 2:
                                C[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                x[b + a >> 0] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (f) {
                        X(1280);
                        k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                        return
                    }
                }
                break;
            default:
                X(1280);
                k("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                return
            }
        switch (c) {
        case 1:
            Oe(b, d);
            break;
        case 0:
            z[b >> 2] = d;
            break;
        case 2:
            C[b >> 2] = d;
            break;
        case 4:
            x[b >> 0] = d ? 1 : 0
        }
    } else
        X(1281)
}
function Qe(a, b, c, d) {
    if (c) {
        b = T.getIndexedParameter(a, b);
        switch (typeof b) {
        case "boolean":
            a = b ? 1 : 0;
            break;
        case "number":
            a = b;
            break;
        case "object":
            if (null === b)
                switch (a) {
                case 35983:
                case 35368:
                    a = 0;
                    break;
                default:
                    X(1280);
                    return
                }
            else if (b instanceof WebGLBuffer)
                a = b.name | 0;
            else {
                X(1280);
                return
            }
            break;
        default:
            X(1280);
            return
        }
        switch (d) {
        case 1:
            Oe(c, a);
            break;
        case 0:
            z[c >> 2] = a;
            break;
        case 2:
            C[c >> 2] = a;
            break;
        case 4:
            x[c >> 0] = a ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
        }
    } else
        X(1281)
}
function Re(a) {
    var b = xa(a) + 1
      , c = M(b);
    w(a, c, b);
    return c
}
function Se(a) {
    return "]" == a.slice(-1) && a.lastIndexOf("[")
}
function Te(a) {
    var b = a.jh, c = a.ji, d;
    if (!b)
        for (a.jh = b = {},
        a.ii = {},
        d = 0; d < T.getProgramParameter(a, 35718); ++d) {
            var e = T.getActiveUniform(a, d);
            var f = e.name;
            e = e.size;
            var g = Se(f);
            g = 0 < g ? f.slice(0, g) : f;
            var m = a.Kh;
            a.Kh += e;
            c[g] = [e, m];
            for (f = 0; f < e; ++f)
                b[m] = f,
                a.ii[m++] = g
        }
}
function Z(a) {
    var b = T.pi;
    if (b) {
        var c = b.jh[a];
        "number" == typeof c && (b.jh[a] = c = T.getUniformLocation(b, b.ii[a] + (0 < c ? "[" + c + "]" : "")));
        return c
    }
    X(1282)
}
function Ue(a, b, c, d) {
    if (c)
        if (a = V[a],
        Te(a),
        a = T.getUniform(a, Z(b)),
        "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                z[c >> 2] = a;
                break;
            case 2:
                C[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    z[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    C[c + 4 * b >> 2] = a[b]
                }
    else
        X(1281)
}
function Ve(a, b, c, d) {
    if (c)
        if (S.Gg[a].enabled && k("glGetVertexAttrib*v on client-side array: not supported, bad data returned"),
        a = T.getVertexAttrib(a, b),
        34975 == b)
            z[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                z[c >> 2] = a;
                break;
            case 2:
                C[c >> 2] = a;
                break;
            case 5:
                z[c >> 2] = Math.fround(a)
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    z[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    C[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    z[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        X(1281)
}
function We(a) {
    a -= 5120;
    return 0 == a ? x : 1 == a ? v : 2 == a ? za : 4 == a ? z : 6 == a ? C : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? B : Aa
}
function Xe(a) {
    return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
}
function Ye(a, b, c, d, e) {
    a = We(a);
    var f = Xe(a)
      , g = Id;
    return a.subarray(e >> f, e + d * (c * ({
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
    }[b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f)
}
var Ze = []
  , $e = [];
function af(a, b) {
    if (!ie())
        return -1;
    a = Y(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? Xd && ee.Kg ? Fe(a, b) : b.ui ? (be(Fe, 1, [a, b]),
    1) : -2 : -3 : -4
}
function bf(a, b) {
    var c = {
        target: Y(2),
        lg: "beforeunload",
        tg: b,
        ug: function(d) {
            d = d || event;
            var e = L(b)(28, 0, a);
            e && (e = q(e));
            if (e)
                return d.preventDefault(),
                d.returnValue = e
        },
        rg: !0
    };
    fe(c)
}
function cf(a, b, c, d, e, f) {
    le || (le = M(256));
    a = {
        target: Y(a),
        lg: f,
        tg: d,
        ug: function(g) {
            g = g || event;
            var m = g.target.id ? g.target.id : ""
              , n = le;
            w(he(g.target), n + 0, 128);
            w(m, n + 128, 128);
            L(d)(e, n, b) && g.preventDefault()
        },
        rg: c
    };
    fe(a)
}
function df(a, b, c, d, e) {
    ne || (ne = M(280));
    fe({
        target: a,
        lg: e,
        tg: d,
        ug: function(f) {
            f = f || event;
            var g = ne
              , m = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              , n = !!m;
            z[g >> 2] = n;
            z[g + 4 >> 2] = ie();
            var p = n ? m : me
              , r = p && p.id ? p.id : "";
            w(he(p), g + 8, 128);
            w(r, g + 136, 128);
            z[g + 264 >> 2] = p ? p.clientWidth : 0;
            z[g + 268 >> 2] = p ? p.clientHeight : 0;
            z[g + 272 >> 2] = screen.width;
            z[g + 276 >> 2] = screen.height;
            n && (me = m);
            L(d)(19, g, b) && f.preventDefault()
        },
        rg: c
    })
}
function ef(a, b, c, d, e) {
    oe || (oe = M(1432));
    b = {
        target: Y(2),
        Kg: !0,
        lg: e,
        tg: c,
        ug: function(f) {
            f = f || event;
            var g = oe;
            He(g, f.gamepad);
            L(c)(d, g, a) && f.preventDefault()
        },
        rg: b
    };
    fe(b)
}
function ff(a, b, c, d, e, f) {
    pe || (pe = M(176));
    a = {
        target: Y(a),
        Kg: !0,
        lg: f,
        tg: d,
        ug: function(g) {
            var m = pe;
            Da[m >> 3] = g.timeStamp;
            var n = m >> 2;
            z[n + 2] = g.location;
            z[n + 3] = g.ctrlKey;
            z[n + 4] = g.shiftKey;
            z[n + 5] = g.altKey;
            z[n + 6] = g.metaKey;
            z[n + 7] = g.repeat;
            z[n + 8] = g.charCode;
            z[n + 9] = g.keyCode;
            z[n + 10] = g.which;
            w(g.key || "", m + 44, 32);
            w(g.code || "", m + 76, 32);
            w(g.char || "", m + 108, 32);
            w(g.locale || "", m + 140, 32);
            L(d)(e, m, b) && g.preventDefault()
        },
        rg: c
    };
    fe(a)
}
function gf(a, b, c) {
    Da[a >> 3] = b.timeStamp;
    a >>= 2;
    z[a + 2] = b.screenX;
    z[a + 3] = b.screenY;
    z[a + 4] = b.clientX;
    z[a + 5] = b.clientY;
    z[a + 6] = b.ctrlKey;
    z[a + 7] = b.shiftKey;
    z[a + 8] = b.altKey;
    z[a + 9] = b.metaKey;
    za[2 * a + 20] = b.button;
    za[2 * a + 21] = b.buttons;
    z[a + 11] = b.movementX;
    z[a + 12] = b.movementY;
    c = Ee(c);
    z[a + 13] = b.clientX - c.left;
    z[a + 14] = b.clientY - c.top
}
function hf(a, b, c, d, e, f) {
    qe || (qe = M(72));
    a = Y(a);
    fe({
        target: a,
        Kg: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        lg: f,
        tg: d,
        ug: function(g) {
            g = g || event;
            gf(qe, g, a);
            L(d)(e, qe, b) && g.preventDefault()
        },
        rg: c
    })
}
function jf(a, b, c, d, e) {
    re || (re = M(260));
    fe({
        target: a,
        lg: e,
        tg: d,
        ug: function(f) {
            f = f || event;
            var g = re
              , m = document.pointerLockElement || document.fg || document.ah || document.Lg;
            z[g >> 2] = !!m;
            var n = m && m.id ? m.id : "";
            w(he(m), g + 4, 128);
            w(n, g + 132, 128);
            L(d)(20, g, b) && f.preventDefault()
        },
        rg: c
    })
}
function kf(a, b, c, d) {
    se || (se = M(36));
    a = Y(a);
    fe({
        target: a,
        lg: "resize",
        tg: d,
        ug: function(e) {
            e = e || event;
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = se;
                    z[g >> 2] = e.detail;
                    z[g + 4 >> 2] = f.clientWidth;
                    z[g + 8 >> 2] = f.clientHeight;
                    z[g + 12 >> 2] = innerWidth;
                    z[g + 16 >> 2] = innerHeight;
                    z[g + 20 >> 2] = outerWidth;
                    z[g + 24 >> 2] = outerHeight;
                    z[g + 28 >> 2] = pageXOffset;
                    z[g + 32 >> 2] = pageYOffset;
                    L(d)(10, g, b) && e.preventDefault()
                }
            }
        },
        rg: c
    })
}
function lf(a, b, c, d, e, f) {
    te || (te = M(1696));
    a = Y(a);
    fe({
        target: a,
        Kg: "touchstart" == f || "touchend" == f,
        lg: f,
        tg: d,
        ug: function(g) {
            for (var m, n = {}, p = g.touches, r = 0; r < p.length; ++r)
                m = p[r],
                m.Yh = m.di = 0,
                n[m.identifier] = m;
            for (r = 0; r < g.changedTouches.length; ++r)
                m = g.changedTouches[r],
                m.Yh = 1,
                n[m.identifier] = m;
            for (r = 0; r < g.targetTouches.length; ++r)
                n[g.targetTouches[r].identifier].di = 1;
            p = te;
            Da[p >> 3] = g.timeStamp;
            var t = p >> 2;
            z[t + 3] = g.ctrlKey;
            z[t + 4] = g.shiftKey;
            z[t + 5] = g.altKey;
            z[t + 6] = g.metaKey;
            t += 7;
            var u = Ee(a)
              , y = 0;
            for (r in n)
                if (m = n[r],
                z[t] = m.identifier,
                z[t + 1] = m.screenX,
                z[t + 2] = m.screenY,
                z[t + 3] = m.clientX,
                z[t + 4] = m.clientY,
                z[t + 5] = m.pageX,
                z[t + 6] = m.pageY,
                z[t + 7] = m.Yh,
                z[t + 8] = m.di,
                z[t + 9] = m.clientX - u.left,
                z[t + 10] = m.clientY - u.top,
                t += 13,
                31 < ++y)
                    break;
            z[p + 8 >> 2] = y;
            L(d)(e, p, b) && g.preventDefault()
        },
        rg: c
    })
}
function mf(a, b, c) {
    var d = xe[1];
    ue || (ue = M(8));
    fe({
        target: d,
        lg: "visibilitychange",
        tg: c,
        ug: function(e) {
            e = e || event;
            var f = ue
              , g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            z[f >> 2] = document.hidden;
            z[f + 4 >> 2] = g;
            L(c)(21, f, a) && e.preventDefault()
        },
        rg: b
    })
}
function nf(a, b, c, d) {
    ve || (ve = M(104));
    fe({
        target: a,
        Kg: !0,
        lg: "wheel",
        tg: d,
        ug: function(e) {
            e = e || event;
            var f = ve;
            gf(f, e, a);
            Da[f + 72 >> 3] = e.deltaX;
            Da[f + 80 >> 3] = e.deltaY;
            Da[f + 88 >> 3] = e.deltaZ;
            z[f + 96 >> 2] = e.deltaMode;
            L(d)(9, f, b) && e.preventDefault()
        },
        rg: c
    })
}
var of = {};
function pf() {
    if (!qf) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: ca || "./this.program"
        }, b;
        for (b in of)
            void 0 === of[b] ? delete a[b] : a[b] = of[b];
        var c = [];
        for (b in a)
            c.push(b + "=" + a[b]);
        qf = c
    }
    return qf
}
var qf;
function rf(a) {
    a = a.split(".");
    for (var b = 0; 4 > b; b++) {
        var c = Number(a[b]);
        if (isNaN(c))
            return null;
        a[b] = c
    }
    return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0
}
function sf(a) {
    var b, c, d = [];
    if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a))
        return null;
    if ("::" === a)
        return [0, 0, 0, 0, 0, 0, 0, 0];
    a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
    0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"),
    a = a.split(":"),
    a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]),
    a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]),
    a = a.slice(0, a.length - 2)) : a = a.split(":");
    for (b = c = 0; b < a.length; b++)
        if ("string" == typeof a[b])
            if ("Z" === a[b]) {
                for (c = 0; c < 8 - a.length + 1; c++)
                    d[b + c] = 0;
                --c
            } else
                d[b + c] = tf(parseInt(a[b], 16));
        else
            d[b + c] = a[b];
    return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]]
}
var uf = 1
  , vf = {};
function wf(a) {
    var b = rf(a);
    if (null !== b)
        return a;
    b = sf(a);
    if (null !== b)
        return a;
    vf[a] ? b = vf[a] : (b = uf++,
    65535 > b || l("exceeded max address mappings of 65535"),
    b = "172.29." + (b & 255) + "." + (b & 65280),
    vf[a] = b);
    return b
}
function xf(a) {
    return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255)
}
var yf = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
};
function zf(a) {
    switch (a) {
    case 4:
        return "OpenGL ES lib expected, found OpenGL lib";
    case 5:
        return "OpenGL lib expected, found OpenGL ES lib";
    case 6:
        return "Missing EGL version";
    case 7:
        return "EGL 1.1 and up are supported"
    }
    switch (a) {
    case 0:
        return "No error";
    case 1:
        return "Missing GL version";
    case 2:
        return "GL 1.1 and up are supported";
    case 3:
        return "GLX 1.2 and up are supported";
    default:
        return null
    }
}
function Gb(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.vg = a.vg;
    this.eh = null;
    this.id = yb++;
    this.name = b;
    this.mode = c;
    this.dg = {};
    this.cg = {};
    this.rdev = d
}
Object.defineProperties(Gb.prototype, {
    read: {
        get: function() {
            return 365 === (this.mode & 365)
        },
        set: function(a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function() {
            return 146 === (this.mode & 146)
        },
        set: function(a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    },
    Ii: {
        get: function() {
            return 16384 === (this.mode & 61440)
        }
    },
    Hi: {
        get: function() {
            return 8192 === (this.mode & 61440)
        }
    }
});
$b();
zb = Array(4096);
Nb(O, "/");
Ob("/tmp", 16895, 0);
Ob("/home", 16895, 0);
Ob("/home/web_user", 16895, 0);
(()=>{
    Ob("/dev", 16895, 0);
    mb(259, {
        read: ()=>0,
        write: (b,c,d,e)=>e
    });
    Pb("/dev/null", 259);
    lb(1280, ob);
    lb(1536, pb);
    Pb("/dev/tty", 1280);
    Pb("/dev/tty1", 1536);
    var a = hb();
    fc("/dev", "random", a);
    fc("/dev", "urandom", a);
    Ob("/dev/shm", 16895, 0);
    Ob("/dev/shm/tmp", 16895, 0)
}
)();
(()=>{
    Ob("/proc", 16895, 0);
    var a = Ob("/proc/self", 16895, 0);
    Ob("/proc/self/fd", 16895, 0);
    Nb({
        vg: ()=>{
            var b = rb(a, "fd", 16895, 73);
            b.dg = {
                lookup: (c,d)=>{
                    var e = xb[+d];
                    if (!e)
                        throw new N(8);
                    c = {
                        parent: null,
                        vg: {
                            ai: "fake"
                        },
                        dg: {
                            readlink: ()=>e.path
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
}
)();
h.FS_createPath = cc;
h.FS_createDataFile = ec;
h.FS_createPreloadedFile = jc;
h.FS_unlink = Rb;
h.FS_createLazyFile = hc;
h.FS_createDevice = fc;
h.requestFullscreen = function(a, b) {
    dd(a, b)
}
;
h.requestAnimationFrame = function(a) {
    yc(a)
}
;
h.setCanvasSize = function(a, b, c) {
    fd(h.canvas, a, b);
    c || gd()
}
;
h.pauseMainLoop = function() {
    uc = null;
    Dc++
}
;
h.resumeMainLoop = function() {
    Dc++;
    var a = qc
      , b = rc
      , c = sc;
    sc = null;
    Bc(c, 0, !1, Cc, !0);
    pc(a, b);
    uc()
}
;
h.getUserMedia = function() {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
}
;
h.createContext = function(a, b, c, d) {
    return Wc(a, b, c, d)
}
;
for (var T, Af = 0; 32 > Af; ++Af)
    Ie.push(Array(Af));
var Bf = new Float32Array(288);
for (Af = 0; 288 > Af; ++Af)
    Ze[Af] = Bf.subarray(0, Af + 1);
var Cf = new Int32Array(288);
for (Af = 0; 288 > Af; ++Af)
    $e[Af] = Cf.subarray(0, Af + 1);
var Hf = {
    a: function(a, b, c, d) {
        l("Assertion failed: " + q(a) + ", at: " + [b ? q(b) : "unknown filename", c, d ? q(d) : "unknown function"])
    },
    Pa: function(a, b) {
        L(a)(b)
    },
    d: function(a) {
        return M(a + 24) + 24
    },
    c: function(a, b, c) {
        (new bb(a)).fg(b, c);
        cb++;
        throw a;
    },
    Oa: function(a, b, c, d) {
        try {
            for (var e = 0, f = b ? z[b >> 2] : 0, g = b ? z[b + 4 >> 2] : 0, m = c ? z[c >> 2] : 0, n = c ? z[c + 4 >> 2] : 0, p = d ? z[d >> 2] : 0, r = d ? z[d + 4 >> 2] : 0, t = 0, u = 0, y = 0, G = 0, A = 0, J = 0, I = (b ? z[b >> 2] : 0) | (c ? z[c >> 2] : 0) | (d ? z[d >> 2] : 0), K = (b ? z[b + 4 >> 2] : 0) | (c ? z[c + 4 >> 2] : 0) | (d ? z[d + 4 >> 2] : 0), D = 0; D < a; D++) {
                var H = 1 << D % 32;
                if (32 > D ? I & H : K & H) {
                    var Ta = lc(D)
                      , ta = 5;
                    Ta.cg.gh && (ta = Ta.cg.gh(Ta));
                    ta & 1 && (32 > D ? f & H : g & H) && (32 > D ? t |= H : u |= H,
                    e++);
                    ta & 4 && (32 > D ? m & H : n & H) && (32 > D ? y |= H : G |= H,
                    e++);
                    ta & 2 && (32 > D ? p & H : r & H) && (32 > D ? A |= H : J |= H,
                    e++)
                }
            }
            b && (z[b >> 2] = t,
            z[b + 4 >> 2] = u);
            c && (z[c >> 2] = y,
            z[c + 4 >> 2] = G);
            d && (z[d >> 2] = A,
            z[d + 4 >> 2] = J);
            return e
        } catch (Ba) {
            if ("undefined" == typeof P || !(Ba instanceof N))
                throw Ba;
            return -Ba.jg
        }
    },
    m: function(a, b, c) {
        nc = c;
        try {
            var d = lc(a);
            switch (b) {
            case 0:
                var e = oc();
                return 0 > e ? -28 : Mb(d, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = oc(),
                d.flags |= e,
                0;
            case 5:
                return e = oc(),
                za[e + 0 >> 1] = 2,
                0;
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return z[Df() >> 2] = 28,
                -1;
            default:
                return -28
            }
        } catch (f) {
            if ("undefined" == typeof P || !(f instanceof N))
                throw f;
            return -f.jg
        }
    },
    Ua: function(a, b) {
        try {
            if (0 === b)
                return -28;
            var c = xa("/") + 1;
            if (b < c)
                return -68;
            w("/", a, b);
            return c
        } catch (d) {
            if ("undefined" == typeof P || !(d instanceof N))
                throw d;
            return -d.jg
        }
    },
    Ma: function(a, b, c) {
        try {
            var d = lc(a);
            if (!d.Mg) {
                var e = Cb(d.path, {
                    bh: !0
                }).node;
                if (!e.dg.readdir)
                    throw new N(54);
                var f = e.dg.readdir(e);
                d.Mg = f
            }
            a = 0;
            for (var g = Yb(d, 0, 1), m = Math.floor(g / 280); m < d.Mg.length && a + 280 <= c; ) {
                var n = d.Mg[m];
                if ("." === n) {
                    var p = d.node.id;
                    var r = 4
                } else if (".." === n)
                    p = Cb(d.path, {
                        parent: !0
                    }).node.id,
                    r = 4;
                else {
                    var t = tb(d.node, n);
                    p = t.id;
                    r = 8192 === (t.mode & 61440) ? 2 : 16384 === (t.mode & 61440) ? 4 : 40960 === (t.mode & 61440) ? 10 : 8
                }
                F = [p >>> 0, (E = p,
                1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
                z[b + a >> 2] = F[0];
                z[b + a + 4 >> 2] = F[1];
                F = [280 * (m + 1) >>> 0, (E = 280 * (m + 1),
                1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
                z[b + a + 8 >> 2] = F[0];
                z[b + a + 12 >> 2] = F[1];
                za[b + a + 16 >> 1] = 280;
                x[b + a + 18 >> 0] = r;
                w(n, b + a + 19, 256);
                a += 280;
                m += 1
            }
            Yb(d, 280 * m, 0);
            return a
        } catch (u) {
            if ("undefined" == typeof P || !(u instanceof N))
                throw u;
            return -u.jg
        }
    },
    Wa: function(a, b, c) {
        nc = c;
        try {
            var d = lc(a);
            switch (b) {
            case 21509:
            case 21505:
                return d.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
                return d.tty ? 0 : -59;
            case 21519:
                if (!d.tty)
                    return -59;
                var e = oc();
                return z[e >> 2] = 0;
            case 21520:
                return d.tty ? -28 : -59;
            case 21531:
                a = e = oc();
                if (!d.cg.dh)
                    throw new N(59);
                return d.cg.dh(d, b, a);
            case 21523:
                return d.tty ? 0 : -59;
            case 21524:
                return d.tty ? 0 : -59;
            default:
                return -28
            }
        } catch (f) {
            if ("undefined" == typeof P || !(f instanceof N))
                throw f;
            return -f.jg
        }
    },
    Ia: function(a, b) {
        try {
            return a = q(a),
            mc(Tb, a, b)
        } catch (c) {
            if ("undefined" == typeof P || !(c instanceof N))
                throw c;
            return -c.jg
        }
    },
    Ka: function(a, b, c, d) {
        try {
            b = q(b);
            var e = d & 256;
            b = kc(a, b, d & 4096);
            return mc(e ? Tb : Sb, b, c)
        } catch (f) {
            if ("undefined" == typeof P || !(f instanceof N))
                throw f;
            return -f.jg
        }
    },
    O: function(a, b, c, d) {
        nc = d;
        try {
            b = q(b);
            b = kc(a, b);
            var e = d ? oc() : 0;
            return Wb(b, c, e).fd
        } catch (f) {
            if ("undefined" == typeof P || !(f instanceof N))
                throw f;
            return -f.jg
        }
    },
    Qa: function(a) {
        try {
            if (0 == a)
                throw new N(21);
            var b = Q.ni();
            z[a >> 2] = b.Li;
            z[a + 4 >> 2] = b.Ui;
            return 0
        } catch (c) {
            if ("undefined" == typeof P || !(c instanceof N))
                throw c;
            return -c.jg
        }
    },
    Ha: function(a, b, c) {
        try {
            return R.createSocket(a, b, c).stream.fd
        } catch (d) {
            if ("undefined" == typeof P || !(d instanceof N))
                throw d;
            return -d.jg
        }
    },
    Ja: function(a, b) {
        try {
            return a = q(a),
            mc(Sb, a, b)
        } catch (c) {
            if ("undefined" == typeof P || !(c instanceof N))
                throw c;
            return -c.jg
        }
    },
    aa: function(a) {
        do {
            var b = B[a >> 2];
            a += 4;
            var c = B[a >> 2];
            a += 4;
            var d = B[a >> 2];
            a += 4;
            b = q(b);
            cc("/", fb(b), !0, !0);
            ec(b, null, x.subarray(d, d + c), !0, !0, !0)
        } while (B[a >> 2])
    },
    Xa: function() {
        return !0
    },
    l: function() {
        l("")
    },
    jb: function(a) {
        if (12448 == a)
            return U = 12288,
            1;
        U = 12300;
        return 0
    },
    wd: function(a, b, c, d, e) {
        if (62E3 != a)
            U = 12296,
            c = 0;
        else {
            if (b)
                for (; ; ) {
                    a = z[b >> 2];
                    if (12321 == a)
                        od.alpha = 0 < z[b + 4 >> 2];
                    else if (12325 == a)
                        od.depth = 0 < z[b + 4 >> 2];
                    else if (12326 == a)
                        od.stencil = 0 < z[b + 4 >> 2];
                    else if (12337 == a)
                        a = z[b + 4 >> 2],
                        od.antialias = 0 < a;
                    else if (12338 == a)
                        a = z[b + 4 >> 2],
                        od.antialias = 1 == a;
                    else if (12544 == a)
                        od.gj = 12547 != z[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (z[e >> 2] = 1),
            c && 0 < d && (z[c >> 2] = 62002),
            U = 12288,
            c = 1) : (U = 12300,
            c = 0)
        }
        return c
    },
    ad: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        for (a = 1; ; ) {
            b = z[d >> 2];
            if (12440 == b)
                a = z[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return U = 12292,
                0;
            d += 8
        }
        if (2 > a || 3 < a)
            return U = 12293,
            0;
        od.Ch = a - 1;
        od.ij = 0;
        qd = Yc(h.canvas, od);
        if (0 != qd)
            return U = 12288,
            $c(qd),
            h.Si = !0,
            Pc.forEach(function(e) {
                e()
            }),
            $c(null),
            62004;
        U = 12297;
        return 0
    },
    Gc: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        U = 12288;
        return 62006
    },
    Rc: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62004 != b)
            return U = 12294,
            0;
        a = qd;
        S === Zc[a] && (S = null);
        if ("object" == typeof je)
            for (var c = Zc[a].Cg.canvas, d = 0; d < Zd.length; ++d)
                Zd[d].target != c || $d(d--);
        Zc[a] && Zc[a].Cg.canvas && (Zc[a].Cg.canvas.Yg = void 0);
        Zc[a] = null;
        U = 12288;
        ld == b && (ld = 0);
        return 1
    },
    vc: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62006 != b)
            return U = 12301,
            1;
        md == b && (md = 0);
        nd == b && (nd = 0);
        U = 12288;
        return 1
    },
    ld: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        if (!d)
            return U = 12300,
            0;
        U = 12288;
        switch (c) {
        case 12320:
            return z[d >> 2] = od.alpha ? 32 : 24,
            1;
        case 12321:
            return z[d >> 2] = od.alpha ? 8 : 0,
            1;
        case 12322:
            return z[d >> 2] = 8,
            1;
        case 12323:
            return z[d >> 2] = 8,
            1;
        case 12324:
            return z[d >> 2] = 8,
            1;
        case 12325:
            return z[d >> 2] = od.depth ? 24 : 0,
            1;
        case 12326:
            return z[d >> 2] = od.stencil ? 8 : 0,
            1;
        case 12327:
            return z[d >> 2] = 12344,
            1;
        case 12328:
            return z[d >> 2] = 62002,
            1;
        case 12329:
            return z[d >> 2] = 0,
            1;
        case 12330:
            return z[d >> 2] = 4096,
            1;
        case 12331:
            return z[d >> 2] = 16777216,
            1;
        case 12332:
            return z[d >> 2] = 4096,
            1;
        case 12333:
            return z[d >> 2] = 0,
            1;
        case 12334:
            return z[d >> 2] = 0,
            1;
        case 12335:
            return z[d >> 2] = 12344,
            1;
        case 12337:
            return z[d >> 2] = od.antialias ? 4 : 0,
            1;
        case 12338:
            return z[d >> 2] = od.antialias ? 1 : 0,
            1;
        case 12339:
            return z[d >> 2] = 4,
            1;
        case 12340:
            return z[d >> 2] = 12344,
            1;
        case 12341:
        case 12342:
        case 12343:
            return z[d >> 2] = -1,
            1;
        case 12345:
        case 12346:
            return z[d >> 2] = 0,
            1;
        case 12347:
            return z[d >> 2] = 0,
            1;
        case 12348:
            return z[d >> 2] = 1;
        case 12349:
        case 12350:
            return z[d >> 2] = 0,
            1;
        case 12351:
            return z[d >> 2] = 12430,
            1;
        case 12352:
            return z[d >> 2] = 4,
            1;
        case 12354:
            return z[d >> 2] = 0,
            1;
        default:
            return U = 12292,
            0
        }
    },
    P: function() {
        U = 12288;
        return 62E3
    },
    Va: function() {
        return U
    },
    Sd: function(a, b, c) {
        if (62E3 != a)
            return U = 12296,
            0;
        b && (z[b >> 2] = 1);
        c && (z[c >> 2] = 4);
        kd = !0;
        U = 12288;
        return 1
    },
    kc: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (0 != d && 62004 != d)
            return U = 12294,
            0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return U = 12301,
            0;
        $c(d ? qd : null);
        ld = d;
        nd = b;
        md = c;
        U = 12288;
        return 1
    },
    _a: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        U = 12288;
        if (pd[b])
            return pd[b];
        switch (b) {
        case 12371:
            a = Rd("Emscripten");
            break;
        case 12372:
            a = Rd("1.4 Emscripten EGL");
            break;
        case 12373:
            a = Rd("");
            break;
        case 12429:
            a = Rd("OpenGL_ES");
            break;
        default:
            return U = 12300,
            0
        }
        return pd[b] = a
    },
    $b: function() {
        if (kd)
            if (h.xg)
                if (h.xg.isContextLost())
                    U = 12302;
                else
                    return U = 12288,
                    1;
            else
                U = 12290;
        else
            U = 12289;
        return 0
    },
    Qb: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        0 == b ? pc(0, 0) : pc(1, b);
        U = 12288;
        return 1
    },
    Hd: function(a) {
        if (62E3 != a)
            return U = 12296,
            0;
        nd = md = ld = 0;
        kd = !1;
        U = 12288;
        return 1
    },
    ub: function() {
        U = 12288;
        return 1
    },
    Fb: function() {
        U = 12288;
        return 1
    },
    Nf: function(a, b, c) {
        b = Td(b, c);
        return Ya[a].apply(null, b)
    },
    b: function(a, b, c) {
        b = Td(b, c);
        return Ya[a].apply(null, b)
    },
    o: function() {
        return Date.now()
    },
    Ba: function() {
        if (!ie())
            return -1;
        ce(Fe);
        var a = xe[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    },
    Ga: function() {
        ce(Ge);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else
            return -1;
        return 0
    },
    g: function() {
        return "number" == typeof devicePixelRatio && devicePixelRatio || 1
    },
    e: function(a, b, c) {
        a = Y(a);
        if (!a)
            return -4;
        a = Ee(a);
        Da[b >> 3] = a.width;
        Da[c >> 3] = a.height;
        return 0
    },
    Q: function(a, b) {
        if (0 > a || a >= ke.length)
            return -5;
        if (!ke[a])
            return -7;
        He(b, ke[a]);
        return 0
    },
    n: wc,
    hf: function() {
        return ke.length
    },
    La: function(a, b) {
        z[a >> 2] = screen.width;
        z[b >> 2] = screen.height
    },
    fa: function(a) {
        T.activeTexture(a)
    },
    ea: function(a, b) {
        T.attachShader(V[a], Ad[b])
    },
    Wc: function(a, b) {
        T.beginQuery(a, W[b])
    },
    xa: function(a, b) {
        T.ng.beginQueryEXT(a, W[b])
    },
    xc: function(a) {
        T.beginTransformFeedback(a)
    },
    da: function(a, b, c) {
        T.bindAttribLocation(V[a], b, q(c))
    },
    ca: function(a, b) {
        34962 == a ? T.$g = b : 34963 == a && (T.Hg = b);
        35051 == a ? T.zh = b : 35052 == a && (T.yg = b);
        T.bindBuffer(a, vd[b])
    },
    tc: function(a, b, c) {
        T.bindBufferBase(a, b, vd[c])
    },
    uc: function(a, b, c, d, e) {
        T.bindBufferRange(a, b, vd[c], d, e)
    },
    ba: function(a, b) {
        T.bindFramebuffer(a, xd[b])
    },
    $: function(a, b) {
        T.bindRenderbuffer(a, yd[b])
    },
    xb: function(a, b) {
        T.bindSampler(a, Cd[b])
    },
    _: function(a, b) {
        T.bindTexture(a, zd[b])
    },
    ob: function(a, b) {
        T.bindTransformFeedback(a, Dd[b])
    },
    Cc: function(a) {
        T.bindVertexArray(Bd[a]);
        a = T.getParameter(34965);
        T.Hg = a ? a.name | 0 : 0
    },
    oa: function(a) {
        T.bindVertexArray(Bd[a]);
        a = T.getParameter(34965);
        T.Hg = a ? a.name | 0 : 0
    },
    Z: function(a, b, c, d) {
        T.blendColor(a, b, c, d)
    },
    Y: function(a) {
        T.blendEquation(a)
    },
    X: function(a, b) {
        T.blendEquationSeparate(a, b)
    },
    W: function(a, b) {
        T.blendFunc(a, b)
    },
    V: function(a, b, c, d) {
        T.blendFuncSeparate(a, b, c, d)
    },
    Ic: function(a, b, c, d, e, f, g, m, n, p) {
        T.blitFramebuffer(a, b, c, d, e, f, g, m, n, p)
    },
    U: function(a, b, c, d) {
        2 <= S.version ? c && b ? T.bufferData(a, v, d, c, b) : T.bufferData(a, b, d) : T.bufferData(a, c ? v.subarray(c, c + b) : b, d)
    },
    T: function(a, b, c, d) {
        2 <= S.version ? c && T.bufferSubData(a, b, v, d, c) : T.bufferSubData(a, b, v.subarray(d, d + c))
    },
    S: function(a) {
        return T.checkFramebufferStatus(a)
    },
    Mf: function(a) {
        T.clear(a)
    },
    Wb: function(a, b, c, d) {
        T.clearBufferfi(a, b, c, d)
    },
    Xb: function(a, b, c) {
        T.clearBufferfv(a, b, C, c >> 2)
    },
    Zb: function(a, b, c) {
        T.clearBufferiv(a, b, z, c >> 2)
    },
    Yb: function(a, b, c) {
        T.clearBufferuiv(a, b, B, c >> 2)
    },
    Lf: function(a, b, c, d) {
        T.clearColor(a, b, c, d)
    },
    Kf: function(a) {
        T.clearDepth(a)
    },
    Jf: function(a) {
        T.clearStencil(a)
    },
    Hb: function(a, b, c, d) {
        return T.clientWaitSync(Ed[a], b, (c >>> 0) + 4294967296 * d)
    },
    If: function(a, b, c, d) {
        T.colorMask(!!a, !!b, !!c, !!d)
    },
    Hf: function(a) {
        T.compileShader(Ad[a])
    },
    Gf: function(a, b, c, d, e, f, g, m) {
        2 <= S.version ? T.yg || !g ? T.compressedTexImage2D(a, b, c, d, e, f, g, m) : T.compressedTexImage2D(a, b, c, d, e, f, v, m, g) : T.compressedTexImage2D(a, b, c, d, e, f, m ? v.subarray(m, m + g) : null)
    },
    $c: function(a, b, c, d, e, f, g, m, n) {
        T.yg ? T.compressedTexImage3D(a, b, c, d, e, f, g, m, n) : T.compressedTexImage3D(a, b, c, d, e, f, g, v, n, m)
    },
    Ff: function(a, b, c, d, e, f, g, m, n) {
        2 <= S.version ? T.yg || !m ? T.compressedTexSubImage2D(a, b, c, d, e, f, g, m, n) : T.compressedTexSubImage2D(a, b, c, d, e, f, g, v, n, m) : T.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? v.subarray(n, n + m) : null)
    },
    _c: function(a, b, c, d, e, f, g, m, n, p, r) {
        T.yg ? T.compressedTexSubImage3D(a, b, c, d, e, f, g, m, n, p, r) : T.compressedTexSubImage3D(a, b, c, d, e, f, g, m, n, v, r, p)
    },
    Ub: function(a, b, c, d, e) {
        T.copyBufferSubData(a, b, c, d, e)
    },
    Ef: function(a, b, c, d, e, f, g, m) {
        T.copyTexImage2D(a, b, c, d, e, f, g, m)
    },
    Df: function(a, b, c, d, e, f, g, m) {
        T.copyTexSubImage2D(a, b, c, d, e, f, g, m)
    },
    bd: function(a, b, c, d, e, f, g, m, n) {
        T.copyTexSubImage3D(a, b, c, d, e, f, g, m, n)
    },
    Cf: function() {
        var a = Kd(V)
          , b = T.createProgram();
        b.name = a;
        b.qh = b.oh = b.ph = 0;
        b.Kh = 1;
        V[a] = b;
        return a
    },
    Bf: function(a) {
        var b = Kd(Ad);
        Ad[b] = T.createShader(a);
        return b
    },
    Af: function(a) {
        T.cullFace(a)
    },
    zf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = vd[d];
            e && (T.deleteBuffer(e),
            e.name = 0,
            vd[d] = null,
            d == T.$g && (T.$g = 0),
            d == T.Hg && (T.Hg = 0),
            d == T.zh && (T.zh = 0),
            d == T.yg && (T.yg = 0))
        }
    },
    yf: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = z[b + 4 * c >> 2]
              , e = xd[d];
            e && (T.deleteFramebuffer(e),
            e.name = 0,
            xd[d] = null)
        }
    },
    xf: function(a) {
        if (a) {
            var b = V[a];
            b ? (T.deleteProgram(b),
            b.name = 0,
            V[a] = null) : X(1281)
        }
    },
    Yc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = W[d];
            e && (T.deleteQuery(e),
            W[d] = null)
        }
    },
    za: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = W[d];
            e && (T.ng.deleteQueryEXT(e),
            W[d] = null)
        }
    },
    wf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = yd[d];
            e && (T.deleteRenderbuffer(e),
            e.name = 0,
            yd[d] = null)
        }
    },
    zb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = Cd[d];
            e && (T.deleteSampler(e),
            e.name = 0,
            Cd[d] = null)
        }
    },
    vf: function(a) {
        if (a) {
            var b = Ad[a];
            b ? (T.deleteShader(b),
            Ad[a] = null) : X(1281)
        }
    },
    Ib: function(a) {
        if (a) {
            var b = Ed[a];
            b ? (T.deleteSync(b),
            b.name = 0,
            Ed[a] = null) : X(1281)
        }
    },
    uf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = zd[d];
            e && (T.deleteTexture(e),
            e.name = 0,
            zd[d] = null)
        }
    },
    nb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = Dd[d];
            e && (T.deleteTransformFeedback(e),
            e.name = 0,
            Dd[d] = null)
        }
    },
    Bc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2];
            T.deleteVertexArray(Bd[d]);
            Bd[d] = null
        }
    },
    na: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2];
            T.deleteVertexArray(Bd[d]);
            Bd[d] = null
        }
    },
    tf: function(a) {
        T.depthFunc(a)
    },
    sf: function(a) {
        T.depthMask(!!a)
    },
    rf: function(a, b) {
        T.depthRange(a, b)
    },
    qf: function(a, b) {
        T.detachShader(V[a], Ad[b])
    },
    pf: function(a) {
        T.disable(a)
    },
    of: function(a) {
        S.Gg[a].enabled = !1;
        T.disableVertexAttribArray(a)
    },
    nf: function(a, b, c) {
        Md(b + c);
        T.drawArrays(a, b, c);
        Od()
    },
    Mb: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    ia: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    kd: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    md: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Za: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Pc: function(a, b) {
        for (var c = Ie[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    gd: function(a, b) {
        for (var c = Ie[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    ja: function(a, b) {
        for (var c = Ie[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    mf: function(a, b, c, d) {
        if (!T.Hg) {
            var e = 1 * Fd[c - 5120] * b;
            var f = Ld(e);
            T.bindBuffer(34963, f);
            T.bufferSubData(34963, 0, v.subarray(d, d + e));
            d = 0
        }
        Md(b);
        T.drawElements(a, b, c, d);
        Od();
        T.Hg || T.bindBuffer(34963, null)
    },
    Lb: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    ha: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    hd: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    id: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    jd: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    ed: function(a, b, c, d, e, f) {
        b = f;
        T.Hg || (f = 1 * Fd[e - 5120] * d,
        c = Ld(f),
        T.bindBuffer(34963, c),
        T.bufferSubData(34963, 0, v.subarray(b, b + f)),
        b = 0);
        Md(d);
        T.drawElements(a, d, e, b);
        Od();
        T.Hg || T.bindBuffer(34963, null)
    },
    lf: function(a) {
        T.enable(a)
    },
    kf: function(a) {
        S.Gg[a].enabled = !0;
        T.enableVertexAttribArray(a)
    },
    Vc: function(a) {
        T.endQuery(a)
    },
    va: function(a) {
        T.ng.endQueryEXT(a)
    },
    wc: function() {
        T.endTransformFeedback()
    },
    Kb: function(a, b) {
        return (a = T.fenceSync(a, b)) ? (b = Kd(Ed),
        a.name = b,
        Ed[b] = a,
        b) : 0
    },
    jf: function() {
        T.finish()
    },
    gf: function() {
        T.flush()
    },
    Dc: function(a, b, c) {
        if (Ke(a)) {
            var d = wd[Je(a)];
            d ? d.Mh & 16 ? 0 > b || 0 > c || b + c > d.length ? (X(1281),
            k("invalid range in glFlushMappedBufferRange")) : T.bufferSubData(a, d.offset, v.subarray(d.Og + b, d.Og + b + c)) : (X(1282),
            k("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange")) : (X(1282),
            k("buffer was never mapped in glFlushMappedBufferRange"))
        } else
            X(1280),
            k("GL_INVALID_ENUM in glFlushMappedBufferRange")
    },
    ff: function(a, b, c, d) {
        T.framebufferRenderbuffer(a, b, c, yd[d])
    },
    ef: function(a, b, c, d, e) {
        T.framebufferTexture2D(a, b, c, zd[d], e)
    },
    Fc: function(a, b, c, d, e) {
        T.framebufferTextureLayer(a, b, zd[c], d, e)
    },
    df: function(a) {
        T.frontFace(a)
    },
    cf: function(a, b) {
        Me(a, b, "createBuffer", vd)
    },
    af: function(a, b) {
        Me(a, b, "createFramebuffer", xd)
    },
    Zc: function(a, b) {
        Me(a, b, "createQuery", W)
    },
    Aa: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = T.ng.createQueryEXT();
            if (!d) {
                for (X(1282); c < a; )
                    z[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = Kd(W);
            d.name = e;
            W[e] = d;
            z[b + 4 * c >> 2] = e
        }
    },
    $e: function(a, b) {
        Me(a, b, "createRenderbuffer", yd)
    },
    Ab: function(a, b) {
        Me(a, b, "createSampler", Cd)
    },
    _e: function(a, b) {
        Me(a, b, "createTexture", zd)
    },
    mb: function(a, b) {
        Me(a, b, "createTransformFeedback", Dd)
    },
    Ac: function(a, b) {
        Me(a, b, "createVertexArray", Bd)
    },
    ma: function(a, b) {
        Me(a, b, "createVertexArray", Bd)
    },
    bf: function(a) {
        T.generateMipmap(a)
    },
    Ze: function(a, b, c, d, e, f, g) {
        Ne("getActiveAttrib", a, b, c, d, e, f, g)
    },
    Ye: function(a, b, c, d, e, f, g) {
        Ne("getActiveUniform", a, b, c, d, e, f, g)
    },
    Ob: function(a, b, c, d, e) {
        a = V[a];
        if (a = T.getActiveUniformBlockName(a, b))
            e && 0 < c ? (c = w(a, e, c),
            d && (z[d >> 2] = c)) : d && (z[d >> 2] = 0)
    },
    Pb: function(a, b, c, d) {
        if (d)
            if (a = V[a],
            35393 == c)
                c = T.getActiveUniformBlockName(a, b),
                z[d >> 2] = c.length + 1;
            else {
                if (a = T.getActiveUniformBlockParameter(a, b, c),
                null !== a)
                    if (35395 == c)
                        for (c = 0; c < a.length; c++)
                            z[d + 4 * c >> 2] = a[c];
                    else
                        z[d >> 2] = a
            }
        else
            X(1281)
    },
    Sb: function(a, b, c, d, e) {
        if (e)
            if (0 < b && 0 == c)
                X(1281);
            else {
                a = V[a];
                for (var f = [], g = 0; g < b; g++)
                    f.push(z[c + 4 * g >> 2]);
                if (a = T.getActiveUniforms(a, f, d))
                    for (b = a.length,
                    g = 0; g < b; g++)
                        z[e + 4 * g >> 2] = a[g]
            }
        else
            X(1281)
    },
    Xe: function(a, b, c, d) {
        a = T.getAttachedShaders(V[a]);
        var e = a.length;
        e > b && (e = b);
        z[c >> 2] = e;
        for (b = 0; b < e; ++b)
            z[d + 4 * b >> 2] = Ad.indexOf(a[b])
    },
    We: function(a, b) {
        return T.getAttribLocation(V[a], q(b))
    },
    Ve: function(a, b) {
        Pe(a, b, 4)
    },
    Bb: function(a, b, c) {
        c ? Oe(c, T.getBufferParameter(a, b)) : X(1281)
    },
    Ue: function(a, b, c) {
        c ? z[c >> 2] = T.getBufferParameter(a, b) : X(1281)
    },
    Qc: function(a, b, c) {
        if (35005 == b) {
            b = 0;
            if (a = wd[Je(a)])
                b = a.Og;
            z[c >> 2] = b
        } else
            X(1280),
            k("GL_INVALID_ENUM in glGetBufferPointerv")
    },
    Te: function() {
        var a = T.getError() || Jd;
        Jd = 0;
        return a
    },
    Se: function(a, b) {
        Pe(a, b, 2)
    },
    hc: function(a, b) {
        return T.getFragDataLocation(V[a], q(b))
    },
    Re: function(a, b, c, d) {
        a = T.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        z[d >> 2] = a
    },
    Cb: function(a, b, c) {
        Qe(a, b, c, 1)
    },
    Eb: function(a, b) {
        Pe(a, b, 1)
    },
    yc: function(a, b, c) {
        Qe(a, b, c, 0)
    },
    Qe: function(a, b) {
        Pe(a, b, 0)
    },
    ab: function(a, b, c, d, e) {
        if (0 > d)
            X(1281);
        else if (e) {
            if (a = T.getInternalformatParameter(a, b, c),
            null !== a)
                for (b = 0; b < a.length && b < d; ++b)
                    z[e + 4 * b >> 2] = a[b]
        } else
            X(1281)
    },
    hb: function() {
        X(1282)
    },
    Oe: function(a, b, c, d) {
        a = T.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? w(a, d, b) : 0;
        c && (z[c >> 2] = b)
    },
    Pe: function(a, b, c) {
        if (c)
            if (a >= ud)
                X(1281);
            else if (a = V[a],
            35716 == b)
                a = T.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                z[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.qh)
                    for (b = 0; b < T.getProgramParameter(a, 35718); ++b)
                        a.qh = Math.max(a.qh, T.getActiveUniform(a, b).name.length + 1);
                z[c >> 2] = a.qh
            } else if (35722 == b) {
                if (!a.oh)
                    for (b = 0; b < T.getProgramParameter(a, 35721); ++b)
                        a.oh = Math.max(a.oh, T.getActiveAttrib(a, b).name.length + 1);
                z[c >> 2] = a.oh
            } else if (35381 == b) {
                if (!a.ph)
                    for (b = 0; b < T.getProgramParameter(a, 35382); ++b)
                        a.ph = Math.max(a.ph, T.getActiveUniformBlockName(a, b).length + 1);
                z[c >> 2] = a.ph
            } else
                z[c >> 2] = T.getProgramParameter(a, b);
        else
            X(1281)
    },
    qa: function(a, b, c) {
        if (c) {
            a = W[a];
            b = 2 > S.version ? T.ng.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            Oe(c, d)
        } else
            X(1281)
    },
    sa: function(a, b, c) {
        if (c) {
            a = T.ng.getQueryObjectEXT(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    pa: function(a, b, c) {
        if (c) {
            a = W[a];
            b = 2 > S.version ? T.ng.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            Oe(c, d)
        } else
            X(1281)
    },
    Tc: function(a, b, c) {
        if (c) {
            a = T.getQueryParameter(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    ra: function(a, b, c) {
        if (c) {
            a = T.ng.getQueryObjectEXT(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    Uc: function(a, b, c) {
        c ? z[c >> 2] = T.getQuery(a, b) : X(1281)
    },
    ta: function(a, b, c) {
        c ? z[c >> 2] = T.ng.getQueryEXT(a, b) : X(1281)
    },
    Ne: function(a, b, c) {
        c ? z[c >> 2] = T.getRenderbufferParameter(a, b) : X(1281)
    },
    qb: function(a, b, c) {
        c ? C[c >> 2] = T.getSamplerParameter(Cd[a], b) : X(1281)
    },
    rb: function(a, b, c) {
        c ? z[c >> 2] = T.getSamplerParameter(Cd[a], b) : X(1281)
    },
    Le: function(a, b, c, d) {
        a = T.getShaderInfoLog(Ad[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? w(a, d, b) : 0;
        c && (z[c >> 2] = b)
    },
    Ke: function(a, b, c, d) {
        a = T.getShaderPrecisionFormat(a, b);
        z[c >> 2] = a.rangeMin;
        z[c + 4 >> 2] = a.rangeMax;
        z[d >> 2] = a.precision
    },
    Je: function(a, b, c, d) {
        if (a = T.getShaderSource(Ad[a]))
            b = 0 < b && d ? w(a, d, b) : 0,
            c && (z[c >> 2] = b)
    },
    Me: function(a, b, c) {
        c ? 35716 == b ? (a = T.getShaderInfoLog(Ad[a]),
        null === a && (a = "(unknown error)"),
        z[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = T.getShaderSource(Ad[a]),
        z[c >> 2] = a ? a.length + 1 : 0) : z[c >> 2] = T.getShaderParameter(Ad[a], b) : X(1281)
    },
    Ie: function(a) {
        var b = Gd[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = T.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = Re(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = T.getParameter(a)) || X(1280);
                b = b && Re(b);
                break;
            case 7938:
                b = T.getParameter(7938);
                b = 2 <= S.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                b = Re(b);
                break;
            case 35724:
                b = T.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = Re(b);
                break;
            default:
                X(1280)
            }
            Gd[a] = b
        }
        return b
    },
    Vb: function(a, b) {
        if (2 > S.version)
            return X(1282),
            0;
        var c = Hd[a];
        if (c)
            return 0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        switch (a) {
        case 7939:
            return c = T.getSupportedExtensions() || [],
            c = c.concat(c.map(function(d) {
                return "GL_" + d
            })),
            c = c.map(function(d) {
                return Re(d)
            }),
            c = Hd[a] = c,
            0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        default:
            return X(1280),
            0
        }
    },
    Db: function(a, b, c, d, e) {
        0 > c ? X(1281) : e ? (a = T.getSyncParameter(Ed[a], b),
        null !== a && (z[e >> 2] = a,
        d && (z[d >> 2] = 1))) : X(1281)
    },
    He: function(a, b, c) {
        c ? C[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    Ge: function(a, b, c) {
        c ? z[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    rc: function(a, b, c, d, e, f, g) {
        a = V[a];
        if (a = T.getTransformFeedbackVarying(a, b))
            g && 0 < c ? (c = w(a.name, g, c),
            d && (z[d >> 2] = c)) : d && (z[d >> 2] = 0),
            e && (z[e >> 2] = a.size),
            f && (z[f >> 2] = a.type)
    },
    Rb: function(a, b) {
        return T.getUniformBlockIndex(V[a], q(b))
    },
    Tb: function(a, b, c, d) {
        if (d)
            if (0 < b && (0 == c || 0 == d))
                X(1281);
            else {
                a = V[a];
                for (var e = [], f = 0; f < b; f++)
                    e.push(q(z[c + 4 * f >> 2]));
                if (a = T.getUniformIndices(a, e))
                    for (b = a.length,
                    f = 0; f < b; f++)
                        z[d + 4 * f >> 2] = a[f]
            }
        else
            X(1281)
    },
    De: function(a, b) {
        b = q(b);
        if (a = V[a]) {
            Te(a);
            var c = a.jh
              , d = 0
              , e = b
              , f = Se(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.ji[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || T.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    Fe: function(a, b, c) {
        Ue(a, b, c, 2)
    },
    Ee: function(a, b, c) {
        Ue(a, b, c, 0)
    },
    ic: function(a, b, c) {
        Ue(a, b, c, 0)
    },
    pc: function(a, b, c) {
        Ve(a, b, c, 0)
    },
    oc: function(a, b, c) {
        Ve(a, b, c, 0)
    },
    Ae: function(a, b, c) {
        c ? (S.Gg[a].enabled && k("glGetVertexAttribPointer on client-side array: not supported, bad data returned"),
        z[c >> 2] = T.getVertexAttribOffset(a, b)) : X(1281)
    },
    Ce: function(a, b, c) {
        Ve(a, b, c, 2)
    },
    Be: function(a, b, c) {
        Ve(a, b, c, 5)
    },
    ze: function(a, b) {
        T.hint(a, b)
    },
    eb: function(a, b, c) {
        for (var d = Ie[b], e = 0; e < b; e++)
            d[e] = z[c + 4 * e >> 2];
        T.invalidateFramebuffer(a, d)
    },
    db: function(a, b, c, d, e, f, g) {
        for (var m = Ie[b], n = 0; n < b; n++)
            m[n] = z[c + 4 * n >> 2];
        T.invalidateSubFramebuffer(a, m, d, e, f, g)
    },
    ye: function(a) {
        return (a = vd[a]) ? T.isBuffer(a) : 0
    },
    xe: function(a) {
        return T.isEnabled(a)
    },
    we: function(a) {
        return (a = xd[a]) ? T.isFramebuffer(a) : 0
    },
    ve: function(a) {
        return (a = V[a]) ? T.isProgram(a) : 0
    },
    Xc: function(a) {
        return (a = W[a]) ? T.isQuery(a) : 0
    },
    ya: function(a) {
        return (a = W[a]) ? T.ng.isQueryEXT(a) : 0
    },
    ue: function(a) {
        return (a = yd[a]) ? T.isRenderbuffer(a) : 0
    },
    yb: function(a) {
        return (a = Cd[a]) ? T.isSampler(a) : 0
    },
    te: function(a) {
        return (a = Ad[a]) ? T.isShader(a) : 0
    },
    Jb: function(a) {
        return T.isSync(Ed[a])
    },
    se: function(a) {
        return (a = zd[a]) ? T.isTexture(a) : 0
    },
    lb: function(a) {
        return T.isTransformFeedback(Dd[a])
    },
    zc: function(a) {
        return (a = Bd[a]) ? T.isVertexArray(a) : 0
    },
    ka: function(a) {
        return (a = Bd[a]) ? T.isVertexArray(a) : 0
    },
    re: function(a) {
        T.lineWidth(a)
    },
    qe: function(a) {
        a = V[a];
        T.linkProgram(a);
        a.jh = 0;
        a.ji = {}
    },
    Ec: function(a, b, c, d) {
        if (26 != d && 10 != d)
            return k("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER"),
            0;
        if (!Ke(a))
            return X(1280),
            k("GL_INVALID_ENUM in glMapBufferRange"),
            0;
        var e = M(c);
        if (!e)
            return 0;
        wd[Je(a)] = {
            offset: b,
            length: c,
            Og: e,
            Mh: d
        };
        return e
    },
    kb: function() {
        T.pauseTransformFeedback()
    },
    pe: function(a, b) {
        3317 == a && (Id = b);
        T.pixelStorei(a, b)
    },
    oe: function(a, b) {
        T.polygonOffset(a, b)
    },
    gb: function() {
        X(1280)
    },
    fb: function() {
        X(1280)
    },
    ua: function(a, b) {
        T.ng.queryCounterEXT(W[a], b)
    },
    fd: function(a) {
        T.readBuffer(a)
    },
    ne: function(a, b, c, d, e, f, g) {
        if (2 <= S.version)
            if (T.zh)
                T.readPixels(a, b, c, d, e, f, g);
            else {
                var m = We(f);
                T.readPixels(a, b, c, d, e, f, m, g >> Xe(m))
            }
        else
            (g = Ye(f, e, c, d, g)) ? T.readPixels(a, b, c, d, e, f, g) : X(1280)
    },
    me: function() {},
    le: function(a, b, c, d) {
        T.renderbufferStorage(a, b, c, d)
    },
    Hc: function(a, b, c, d, e) {
        T.renderbufferStorageMultisample(a, b, c, d, e)
    },
    ib: function() {
        T.resumeTransformFeedback()
    },
    ke: function(a, b) {
        T.sampleCoverage(a, !!b)
    },
    tb: function(a, b, c) {
        T.samplerParameterf(Cd[a], b, c)
    },
    sb: function(a, b, c) {
        T.samplerParameterf(Cd[a], b, C[c >> 2])
    },
    wb: function(a, b, c) {
        T.samplerParameteri(Cd[a], b, c)
    },
    vb: function(a, b, c) {
        T.samplerParameteri(Cd[a], b, z[c >> 2])
    },
    je: function(a, b, c, d) {
        T.scissor(a, b, c, d)
    },
    ie: function() {
        X(1280)
    },
    he: function(a, b, c, d) {
        for (var e = "", f = 0; f < b; ++f) {
            var g = d ? z[d + 4 * f >> 2] : -1;
            e += q(z[c + 4 * f >> 2], 0 > g ? void 0 : g)
        }
        T.shaderSource(Ad[a], e)
    },
    ge: function(a, b, c) {
        T.stencilFunc(a, b, c)
    },
    fe: function(a, b, c, d) {
        T.stencilFuncSeparate(a, b, c, d)
    },
    ee: function(a) {
        T.stencilMask(a)
    },
    de: function(a, b) {
        T.stencilMaskSeparate(a, b)
    },
    ce: function(a, b, c) {
        T.stencilOp(a, b, c)
    },
    be: function(a, b, c, d) {
        T.stencilOpSeparate(a, b, c, d)
    },
    ae: function(a, b, c, d, e, f, g, m, n) {
        if (2 <= S.version)
            if (T.yg)
                T.texImage2D(a, b, c, d, e, f, g, m, n);
            else if (n) {
                var p = We(m);
                T.texImage2D(a, b, c, d, e, f, g, m, p, n >> Xe(p))
            } else
                T.texImage2D(a, b, c, d, e, f, g, m, null);
        else
            T.texImage2D(a, b, c, d, e, f, g, m, n ? Ye(m, g, d, e, n) : null)
    },
    dd: function(a, b, c, d, e, f, g, m, n, p) {
        if (T.yg)
            T.texImage3D(a, b, c, d, e, f, g, m, n, p);
        else if (p) {
            var r = We(n);
            T.texImage3D(a, b, c, d, e, f, g, m, n, r, p >> Xe(r))
        } else
            T.texImage3D(a, b, c, d, e, f, g, m, n, null)
    },
    $d: function(a, b, c) {
        T.texParameterf(a, b, c)
    },
    _d: function(a, b, c) {
        T.texParameterf(a, b, C[c >> 2])
    },
    Zd: function(a, b, c) {
        T.texParameteri(a, b, c)
    },
    Yd: function(a, b, c) {
        T.texParameteri(a, b, z[c >> 2])
    },
    cb: function(a, b, c, d, e) {
        T.texStorage2D(a, b, c, d, e)
    },
    bb: function(a, b, c, d, e, f) {
        T.texStorage3D(a, b, c, d, e, f)
    },
    Xd: function(a, b, c, d, e, f, g, m, n) {
        if (2 <= S.version)
            if (T.yg)
                T.texSubImage2D(a, b, c, d, e, f, g, m, n);
            else if (n) {
                var p = We(m);
                T.texSubImage2D(a, b, c, d, e, f, g, m, p, n >> Xe(p))
            } else
                T.texSubImage2D(a, b, c, d, e, f, g, m, null);
        else
            p = null,
            n && (p = Ye(m, g, e, f, n)),
            T.texSubImage2D(a, b, c, d, e, f, g, m, p)
    },
    cd: function(a, b, c, d, e, f, g, m, n, p, r) {
        if (T.yg)
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, r);
        else if (r) {
            var t = We(p);
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, t, r >> Xe(t))
        } else
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, null)
    },
    sc: function(a, b, c, d) {
        a = V[a];
        for (var e = [], f = 0; f < b; f++)
            e.push(q(z[c + 4 * f >> 2]));
        T.transformFeedbackVaryings(a, e, d)
    },
    Wd: function(a, b) {
        T.uniform1f(Z(a), b)
    },
    Vd: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform1fv(Z(a), C, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = Ze[b - 1], e = 0; e < b; ++e)
                    d[e] = C[c + 4 * e >> 2];
            else
                d = C.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1fv(Z(a), d)
        }
    },
    Ud: function(a, b) {
        T.uniform1i(Z(a), b)
    },
    Td: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform1iv(Z(a), z, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = $e[b - 1], e = 0; e < b; ++e)
                    d[e] = z[c + 4 * e >> 2];
            else
                d = z.subarray(c >> 2, c + 4 * b >> 2);
            T.uniform1iv(Z(a), d)
        }
    },
    gc: function(a, b) {
        T.uniform1ui(Z(a), b)
    },
    cc: function(a, b, c) {
        b && T.uniform1uiv(Z(a), B, c >> 2, b)
    },
    Rd: function(a, b, c) {
        T.uniform2f(Z(a), b, c)
    },
    Qd: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform2fv(Z(a), C, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = Ze[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = C[c + 4 * e >> 2],
                    d[e + 1] = C[c + (4 * e + 4) >> 2];
            else
                d = C.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2fv(Z(a), d)
        }
    },
    Pd: function(a, b, c) {
        T.uniform2i(Z(a), b, c)
    },
    Od: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform2iv(Z(a), z, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = $e[2 * b - 1], e = 0; e < 2 * b; e += 2)
                    d[e] = z[c + 4 * e >> 2],
                    d[e + 1] = z[c + (4 * e + 4) >> 2];
            else
                d = z.subarray(c >> 2, c + 8 * b >> 2);
            T.uniform2iv(Z(a), d)
        }
    },
    fc: function(a, b, c) {
        T.uniform2ui(Z(a), b, c)
    },
    bc: function(a, b, c) {
        b && T.uniform2uiv(Z(a), B, c >> 2, 2 * b)
    },
    Nd: function(a, b, c, d) {
        T.uniform3f(Z(a), b, c, d)
    },
    Md: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform3fv(Z(a), C, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = Ze[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = C[c + 4 * e >> 2],
                    d[e + 1] = C[c + (4 * e + 4) >> 2],
                    d[e + 2] = C[c + (4 * e + 8) >> 2];
            else
                d = C.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3fv(Z(a), d)
        }
    },
    Ld: function(a, b, c, d) {
        T.uniform3i(Z(a), b, c, d)
    },
    Kd: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform3iv(Z(a), z, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = $e[3 * b - 1], e = 0; e < 3 * b; e += 3)
                    d[e] = z[c + 4 * e >> 2],
                    d[e + 1] = z[c + (4 * e + 4) >> 2],
                    d[e + 2] = z[c + (4 * e + 8) >> 2];
            else
                d = z.subarray(c >> 2, c + 12 * b >> 2);
            T.uniform3iv(Z(a), d)
        }
    },
    ec: function(a, b, c, d) {
        T.uniform3ui(Z(a), b, c, d)
    },
    ac: function(a, b, c) {
        b && T.uniform3uiv(Z(a), B, c >> 2, 3 * b)
    },
    Jd: function(a, b, c, d, e) {
        T.uniform4f(Z(a), b, c, d, e)
    },
    Id: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform4fv(Z(a), C, c >> 2, 4 * b);
        else {
            if (72 >= b) {
                var d = Ze[4 * b - 1]
                  , e = C;
                c >>= 2;
                for (var f = 0; f < 4 * b; f += 4) {
                    var g = c + f;
                    d[f] = e[g];
                    d[f + 1] = e[g + 1];
                    d[f + 2] = e[g + 2];
                    d[f + 3] = e[g + 3]
                }
            } else
                d = C.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4fv(Z(a), d)
        }
    },
    Gd: function(a, b, c, d, e) {
        T.uniform4i(Z(a), b, c, d, e)
    },
    Fd: function(a, b, c) {
        if (2 <= S.version)
            b && T.uniform4iv(Z(a), z, c >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var d = $e[4 * b - 1], e = 0; e < 4 * b; e += 4)
                    d[e] = z[c + 4 * e >> 2],
                    d[e + 1] = z[c + (4 * e + 4) >> 2],
                    d[e + 2] = z[c + (4 * e + 8) >> 2],
                    d[e + 3] = z[c + (4 * e + 12) >> 2];
            else
                d = z.subarray(c >> 2, c + 16 * b >> 2);
            T.uniform4iv(Z(a), d)
        }
    },
    dc: function(a, b, c, d, e) {
        T.uniform4ui(Z(a), b, c, d, e)
    },
    _b: function(a, b, c) {
        b && T.uniform4uiv(Z(a), B, c >> 2, 4 * b)
    },
    Nb: function(a, b, c) {
        a = V[a];
        T.uniformBlockBinding(a, b, c)
    },
    Ed: function(a, b, c, d) {
        if (2 <= S.version)
            b && T.uniformMatrix2fv(Z(a), !!c, C, d >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var e = Ze[4 * b - 1], f = 0; f < 4 * b; f += 4)
                    e[f] = C[d + 4 * f >> 2],
                    e[f + 1] = C[d + (4 * f + 4) >> 2],
                    e[f + 2] = C[d + (4 * f + 8) >> 2],
                    e[f + 3] = C[d + (4 * f + 12) >> 2];
            else
                e = C.subarray(d >> 2, d + 16 * b >> 2);
            T.uniformMatrix2fv(Z(a), !!c, e)
        }
    },
    Oc: function(a, b, c, d) {
        b && T.uniformMatrix2x3fv(Z(a), !!c, C, d >> 2, 6 * b)
    },
    Mc: function(a, b, c, d) {
        b && T.uniformMatrix2x4fv(Z(a), !!c, C, d >> 2, 8 * b)
    },
    Dd: function(a, b, c, d) {
        if (2 <= S.version)
            b && T.uniformMatrix3fv(Z(a), !!c, C, d >> 2, 9 * b);
        else {
            if (32 >= b)
                for (var e = Ze[9 * b - 1], f = 0; f < 9 * b; f += 9)
                    e[f] = C[d + 4 * f >> 2],
                    e[f + 1] = C[d + (4 * f + 4) >> 2],
                    e[f + 2] = C[d + (4 * f + 8) >> 2],
                    e[f + 3] = C[d + (4 * f + 12) >> 2],
                    e[f + 4] = C[d + (4 * f + 16) >> 2],
                    e[f + 5] = C[d + (4 * f + 20) >> 2],
                    e[f + 6] = C[d + (4 * f + 24) >> 2],
                    e[f + 7] = C[d + (4 * f + 28) >> 2],
                    e[f + 8] = C[d + (4 * f + 32) >> 2];
            else
                e = C.subarray(d >> 2, d + 36 * b >> 2);
            T.uniformMatrix3fv(Z(a), !!c, e)
        }
    },
    Nc: function(a, b, c, d) {
        b && T.uniformMatrix3x2fv(Z(a), !!c, C, d >> 2, 6 * b)
    },
    Kc: function(a, b, c, d) {
        b && T.uniformMatrix3x4fv(Z(a), !!c, C, d >> 2, 12 * b)
    },
    Cd: function(a, b, c, d) {
        if (2 <= S.version)
            b && T.uniformMatrix4fv(Z(a), !!c, C, d >> 2, 16 * b);
        else {
            if (18 >= b) {
                var e = Ze[16 * b - 1]
                  , f = C;
                d >>= 2;
                for (var g = 0; g < 16 * b; g += 16) {
                    var m = d + g;
                    e[g] = f[m];
                    e[g + 1] = f[m + 1];
                    e[g + 2] = f[m + 2];
                    e[g + 3] = f[m + 3];
                    e[g + 4] = f[m + 4];
                    e[g + 5] = f[m + 5];
                    e[g + 6] = f[m + 6];
                    e[g + 7] = f[m + 7];
                    e[g + 8] = f[m + 8];
                    e[g + 9] = f[m + 9];
                    e[g + 10] = f[m + 10];
                    e[g + 11] = f[m + 11];
                    e[g + 12] = f[m + 12];
                    e[g + 13] = f[m + 13];
                    e[g + 14] = f[m + 14];
                    e[g + 15] = f[m + 15]
                }
            } else
                e = C.subarray(d >> 2, d + 64 * b >> 2);
            T.uniformMatrix4fv(Z(a), !!c, e)
        }
    },
    Lc: function(a, b, c, d) {
        b && T.uniformMatrix4x2fv(Z(a), !!c, C, d >> 2, 8 * b)
    },
    Jc: function(a, b, c, d) {
        b && T.uniformMatrix4x3fv(Z(a), !!c, C, d >> 2, 12 * b)
    },
    Sc: function(a) {
        if (!Ke(a))
            return X(1280),
            k("GL_INVALID_ENUM in glUnmapBuffer"),
            0;
        var b = Je(a)
          , c = wd[b];
        if (!c)
            return X(1282),
            k("buffer was never mapped in glUnmapBuffer"),
            0;
        wd[b] = null;
        c.Mh & 16 || (2 <= S.version ? T.bufferSubData(a, c.offset, v, c.Og, c.length) : T.bufferSubData(a, c.offset, v.subarray(c.Og, c.Og + c.length)));
        Ef(c.Og);
        return 1
    },
    Bd: function(a) {
        a = V[a];
        T.useProgram(a);
        T.pi = a
    },
    Ad: function(a) {
        T.validateProgram(V[a])
    },
    zd: function(a, b) {
        T.vertexAttrib1f(a, b)
    },
    yd: function(a, b) {
        T.vertexAttrib1f(a, C[b >> 2])
    },
    xd: function(a, b, c) {
        T.vertexAttrib2f(a, b, c)
    },
    vd: function(a, b) {
        T.vertexAttrib2f(a, C[b >> 2], C[b + 4 >> 2])
    },
    ud: function(a, b, c, d) {
        T.vertexAttrib3f(a, b, c, d)
    },
    td: function(a, b) {
        T.vertexAttrib3f(a, C[b >> 2], C[b + 4 >> 2], C[b + 8 >> 2])
    },
    sd: function(a, b, c, d, e) {
        T.vertexAttrib4f(a, b, c, d, e)
    },
    rd: function(a, b) {
        T.vertexAttrib4f(a, C[b >> 2], C[b + 4 >> 2], C[b + 8 >> 2], C[b + 12 >> 2])
    },
    pb: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    ga: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    nd: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    od: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    $a: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    nc: function(a, b, c, d, e) {
        T.vertexAttribI4i(a, b, c, d, e)
    },
    lc: function(a, b) {
        T.vertexAttribI4i(a, z[b >> 2], z[b + 4 >> 2], z[b + 8 >> 2], z[b + 12 >> 2])
    },
    mc: function(a, b, c, d, e) {
        T.vertexAttribI4ui(a, b, c, d, e)
    },
    jc: function(a, b) {
        T.vertexAttribI4ui(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2], B[b + 12 >> 2])
    },
    qc: function(a, b, c, d, e) {
        var f = S.Gg[a];
        T.$g ? (f.Zg = !1,
        T.vertexAttribIPointer(a, b, c, d, e)) : (f.size = b,
        f.type = c,
        f.Eh = !1,
        f.uh = d,
        f.pg = e,
        f.Zg = !0,
        f.Lh = function(g, m, n, p, r, t) {
            this.vertexAttribIPointer(g, m, n, r, t)
        }
        )
    },
    qd: function(a, b, c, d, e, f) {
        var g = S.Gg[a];
        T.$g ? (g.Zg = !1,
        T.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b,
        g.type = c,
        g.Eh = d,
        g.uh = e,
        g.pg = f,
        g.Zg = !0,
        g.Lh = function(m, n, p, r, t, u) {
            this.vertexAttribPointer(m, n, p, r, t, u)
        }
        )
    },
    pd: function(a, b, c, d) {
        T.viewport(a, b, c, d)
    },
    Gb: function(a, b, c, d) {
        T.waitSync(Ed[a], b, (c >>> 0) + 4294967296 * d)
    },
    q: function() {
        return 0
    },
    Ya: function(a, b, c) {
        v.copyWithin(a, b, b + c)
    },
    Ca: function(a, b, c) {
        return af(a, {
            Ih: z[c >> 2],
            xh: z[c + 4 >> 2],
            yi: z[c + 8 >> 2],
            ui: b,
            kh: z[c + 12 >> 2],
            Rh: z[c + 16 >> 2]
        })
    },
    L: function(a, b) {
        a = Y(a);
        return a ? a.requestPointerLock ? Xd && ee.Kg ? Ge(a) : b ? (be(Ge, 2, [a]),
        1) : -2 : -1 : -4
    },
    Na: function() {
        l("OOM")
    },
    R: function() {
        return (ke = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
    },
    r: function(a, b, c) {
        if ("undefined" == typeof onbeforeunload)
            return -1;
        if (1 !== c)
            return -5;
        bf(a, b);
        return 0
    },
    D: function(a, b, c, d) {
        cf(a, b, c, d, 12, "blur");
        return 0
    },
    f: Ae,
    k: function(a, b, c) {
        a = Y(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    },
    E: function(a, b, c, d) {
        cf(a, b, c, d, 13, "focus");
        return 0
    },
    u: function(a, b, c, d) {
        if (!ie())
            return -1;
        a = Y(a);
        if (!a)
            return -4;
        df(a, b, c, d, "fullscreenchange");
        df(a, b, c, d, "webkitfullscreenchange");
        return 0
    },
    j: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        ef(a, b, c, 26, "gamepadconnected");
        return 0
    },
    i: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        ef(a, b, c, 27, "gamepaddisconnected");
        return 0
    },
    x: function(a, b, c, d) {
        ff(a, b, c, d, 2, "keydown");
        return 0
    },
    v: function(a, b, c, d) {
        ff(a, b, c, d, 1, "keypress");
        return 0
    },
    w: function(a, b, c, d) {
        ff(a, b, c, d, 3, "keyup");
        return 0
    },
    Fa: function(a, b, c) {
        a = L(a);
        Bc(a, b, c)
    },
    J: function(a, b, c, d) {
        hf(a, b, c, d, 5, "mousedown");
        return 0
    },
    H: function(a, b, c, d) {
        hf(a, b, c, d, 33, "mouseenter");
        return 0
    },
    G: function(a, b, c, d) {
        hf(a, b, c, d, 34, "mouseleave");
        return 0
    },
    K: function(a, b, c, d) {
        hf(a, b, c, d, 8, "mousemove");
        return 0
    },
    I: function(a, b, c, d) {
        hf(a, b, c, d, 6, "mouseup");
        return 0
    },
    y: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.fg || document.body.ah || document.body.Lg))
            return -1;
        a = Y(a);
        if (!a)
            return -4;
        jf(a, b, c, d, "pointerlockchange");
        jf(a, b, c, d, "mozpointerlockchange");
        jf(a, b, c, d, "webkitpointerlockchange");
        jf(a, b, c, d, "mspointerlockchange");
        return 0
    },
    t: function(a, b, c, d) {
        kf(a, b, c, d);
        return 0
    },
    z: function(a, b, c, d) {
        lf(a, b, c, d, 25, "touchcancel");
        return 0
    },
    B: function(a, b, c, d) {
        lf(a, b, c, d, 23, "touchend");
        return 0
    },
    A: function(a, b, c, d) {
        lf(a, b, c, d, 24, "touchmove");
        return 0
    },
    C: function(a, b, c, d) {
        lf(a, b, c, d, 22, "touchstart");
        return 0
    },
    s: function(a, b, c) {
        if (!xe[1])
            return -4;
        mf(a, b, c);
        return 0
    },
    F: function(a, b, c, d) {
        a = Y(a);
        return "undefined" != typeof a.onwheel ? (nf(a, b, c, d),
        0) : -1
    },
    Da: function(a) {
        ma(q(a))
    },
    p: function() {
        throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
    },
    Sa: function(a, b) {
        var c = 0;
        pf().forEach(function(d, e) {
            var f = b + c;
            e = B[a + 4 * e >> 2] = f;
            for (f = 0; f < d.length; ++f)
                x[e++ >> 0] = d.charCodeAt(f);
            x[e >> 0] = 0;
            c += d.length + 1
        });
        return 0
    },
    Ta: function(a, b) {
        var c = pf();
        B[a >> 2] = c.length;
        var d = 0;
        c.forEach(function(e) {
            d += e.length + 1
        });
        B[b >> 2] = d;
        return 0
    },
    h: function(a) {
        try {
            var b = lc(a);
            Xb(b);
            return 0
        } catch (c) {
            if ("undefined" == typeof P || !(c instanceof N))
                throw c;
            return c.jg
        }
    },
    N: function(a, b, c, d) {
        try {
            a: {
                var e = lc(a);
                a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = B[a >> 2]
                      , m = B[a + 4 >> 2];
                    a += 8;
                    var n = e
                      , p = g
                      , r = m
                      , t = void 0
                      , u = x;
                    if (0 > r || 0 > t)
                        throw new N(28);
                    if (null === n.fd)
                        throw new N(8);
                    if (1 === (n.flags & 2097155))
                        throw new N(8);
                    if (16384 === (n.node.mode & 61440))
                        throw new N(31);
                    if (!n.cg.read)
                        throw new N(28);
                    var y = "undefined" != typeof t;
                    if (!y)
                        t = n.position;
                    else if (!n.seekable)
                        throw new N(70);
                    var G = n.cg.read(n, u, p, r, t);
                    y || (n.position += G);
                    var A = G;
                    if (0 > A) {
                        var J = -1;
                        break a
                    }
                    b += A;
                    if (A < m)
                        break
                }
                J = b
            }
            B[d >> 2] = J;
            return 0
        } catch (I) {
            if ("undefined" == typeof P || !(I instanceof N))
                throw I;
            return I.jg
        }
    },
    Ra: function(a, b, c, d) {
        try {
            b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
            if (isNaN(b))
                return 61;
            var e = lc(a);
            Yb(e, b, c);
            F = [e.position >>> 0, (E = e.position,
            1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            z[d >> 2] = F[0];
            z[d + 4 >> 2] = F[1];
            e.Mg && 0 === b && 0 === c && (e.Mg = null);
            return 0
        } catch (f) {
            if ("undefined" == typeof P || !(f instanceof N))
                throw f;
            return f.jg
        }
    },
    M: function(a, b, c, d) {
        try {
            a: {
                var e = lc(a);
                a = b;
                for (var f = b = 0; f < c; f++) {
                    var g = B[a >> 2]
                      , m = B[a + 4 >> 2];
                    a += 8;
                    var n = Zb(e, x, g, m);
                    if (0 > n) {
                        var p = -1;
                        break a
                    }
                    b += n
                }
                p = b
            }
            B[d >> 2] = p;
            return 0
        } catch (r) {
            if ("undefined" == typeof P || !(r instanceof N))
                throw r;
            return r.jg
        }
    },
    Ea: function(a, b, c, d) {
        function e(t, u, y, G, A, J) {
            var I = 10 === t ? 28 : 16;
            if (10 === t)
                a: {
                    var K = "";
                    var D, H = 0, Ta = 0, ta = 0, Ba = 0;
                    A = [A[0] & 65535, A[0] >> 16, A[1] & 65535, A[1] >> 16, A[2] & 65535, A[2] >> 16, A[3] & 65535, A[3] >> 16];
                    var Le = !0;
                    for (D = 0; 5 > D; D++)
                        if (0 !== A[D]) {
                            Le = !1;
                            break
                        }
                    if (Le) {
                        D = xf(A[6] | A[7] << 16);
                        if (-1 === A[5]) {
                            K = "::ffff:" + D;
                            break a
                        }
                        if (0 === A[5]) {
                            "0.0.0.0" === D && (D = "");
                            "0.0.0.1" === D && (D = "1");
                            K = "::" + D;
                            break a
                        }
                    }
                    for (D = 0; 8 > D; D++)
                        0 === A[D] && (1 < D - Ta && (Ba = 0),
                        Ta = D,
                        Ba++),
                        Ba > H && (H = Ba,
                        ta = D - H + 1);
                    for (D = 0; 8 > D; D++)
                        1 < H && 0 === A[D] && D >= ta && D < ta + H ? D === ta && (K += ":",
                        0 === ta && (K += ":")) : (K += Number(Ff(A[D] & 65535)).toString(16),
                        K += 7 > D ? ":" : "")
                }
            else
                K = xf(A);
            A = K;
            I = M(I);
            a: {
                K = A;
                switch (t) {
                case 2:
                    K = rf(K);
                    v.fill(0, I, I + 16);
                    za[I >> 1] = t;
                    z[I + 4 >> 2] = K;
                    za[I + 2 >> 1] = tf(J);
                    break;
                case 10:
                    K = sf(K);
                    v.fill(0, I, I + 28);
                    z[I >> 2] = t;
                    z[I + 8 >> 2] = K[0];
                    z[I + 12 >> 2] = K[1];
                    z[I + 16 >> 2] = K[2];
                    z[I + 20 >> 2] = K[3];
                    za[I + 2 >> 1] = tf(J);
                    break;
                default:
                    J = 5;
                    break a
                }
                J = 0
            }
            !J || l();
            J = M(32);
            z[J + 4 >> 2] = t;
            z[J + 8 >> 2] = u;
            z[J + 12 >> 2] = y;
            z[J + 24 >> 2] = G;
            B[J + 20 >> 2] = I;
            z[J + 16 >> 2] = 10 === t ? 28 : 16;
            z[J + 28 >> 2] = 0;
            return J
        }
        var f = 0
          , g = 0
          , m = 0
          , n = 0
          , p = 0
          , r = 0;
        c && (m = z[c >> 2],
        n = z[c + 4 >> 2],
        p = z[c + 8 >> 2],
        r = z[c + 12 >> 2]);
        p && !r && (r = 2 === p ? 17 : 6);
        !p && r && (p = 17 === r ? 2 : 1);
        0 === r && (r = 6);
        0 === p && (p = 1);
        if (!a && !b)
            return -2;
        if (m & -1088 || 0 !== c && z[c >> 2] & 2 && !a)
            return -1;
        if (m & 32)
            return -2;
        if (0 !== p && 1 !== p && 2 !== p)
            return -7;
        if (0 !== n && 2 !== n && 10 !== n)
            return -6;
        if (b && (b = q(b),
        g = parseInt(b, 10),
        isNaN(g)))
            return m & 1024 ? -2 : -8;
        if (!a)
            return 0 === n && (n = 2),
            0 === (m & 1) && (2 === n ? f = Gf(2130706433) : f = [0, 0, 0, 1]),
            a = e(n, p, r, null, f, g),
            B[d >> 2] = a,
            0;
        a = q(a);
        f = rf(a);
        if (null !== f)
            if (0 === n || 2 === n)
                n = 2;
            else if (10 === n && m & 8)
                f = [0, 0, Gf(65535), f],
                n = 10;
            else
                return -2;
        else if (f = sf(a),
        null !== f)
            if (0 === n || 10 === n)
                n = 10;
            else
                return -2;
        if (null != f)
            return a = e(n, p, r, a, f, g),
            B[d >> 2] = a,
            0;
        if (m & 4)
            return -2;
        a = wf(a);
        f = rf(a);
        0 === n ? n = 2 : 10 === n && (f = [0, 0, Gf(65535), f]);
        a = e(n, p, r, null, f, g);
        B[d >> 2] = a;
        return 0
    },
    wa: function(a, b) {
        Me(a, b, "createBuffer", vd)
    },
    la: function(a, b) {
        Pe(a, b, 2)
    },
    Of: function(a) {
        if (!yf[a]) {
            var b = zf(a);
            b || (b = "Unknown error",
            a = 8);
            yf[a] = Rd(b)
        }
        return yf[a]
    },
    Pf: function() {
        return 0
    }
};
(function() {
    function a(e) {
        h.asm = e.exports;
        ra = h.asm.Qf;
        ya = e = ra.buffer;
        h.HEAP8 = x = new Int8Array(e);
        h.HEAP16 = za = new Int16Array(e);
        h.HEAP32 = z = new Int32Array(e);
        h.HEAPU8 = v = new Uint8Array(e);
        h.HEAPU16 = Aa = new Uint16Array(e);
        h.HEAPU32 = B = new Uint32Array(e);
        h.HEAPF32 = C = new Float32Array(e);
        h.HEAPF64 = Da = new Float64Array(e);
        h.HEAP64 = Ca = new BigInt64Array(e);
        h.HEAPU64 = new BigUint64Array(e);
        Ea = h.asm.Wf;
        Ga.unshift(h.asm.Rf);
        Pa("wasm-instantiate")
    }
    function b(e) {
        a(e.instance)
    }
    function c(e) {
        return Va().then(function(f) {
            return WebAssembly.instantiate(f, d)
        }).then(function(f) {
            return f
        }).then(e, function(f) {
            k("failed to asynchronously prepare wasm: " + f);
            l(f)
        })
    }
    var d = {
        a: Hf
    };
    Oa("wasm-instantiate");
    if (h.instantiateWasm)
        try {
            return h.instantiateWasm(d, a)
        } catch (e) {
            return k("Module.instantiateWasm callback failed with error: " + e),
            !1
        }
    (function() {
        return qa || "function" != typeof WebAssembly.instantiateStreaming || Qa() || Ra.startsWith("file://") || ha || "function" != typeof fetch ? c(b) : fetch(Ra, {
            credentials: "same-origin"
        }).then(function(e) {
            return WebAssembly.instantiateStreaming(e, d).then(b, function(f) {
                k("wasm streaming compile failed: " + f);
                k("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    }
    )();
    return {}
}
)();
h.___wasm_call_ctors = function() {
    return (h.___wasm_call_ctors = h.asm.Rf).apply(null, arguments)
}
;
var M = h._malloc = function() {
    return (M = h._malloc = h.asm.Sf).apply(null, arguments)
}
  , Ef = h._free = function() {
    return (Ef = h._free = h.asm.Tf).apply(null, arguments)
}
;
h._main = function() {
    return (h._main = h.asm.Uf).apply(null, arguments)
}
;
var Df = h.___errno_location = function() {
    return (Df = h.___errno_location = h.asm.Vf).apply(null, arguments)
}
  , Gf = h._htonl = function() {
    return (Gf = h._htonl = h.asm.Xf).apply(null, arguments)
}
  , tf = h._htons = function() {
    return (tf = h._htons = h.asm.Yf).apply(null, arguments)
}
  , Ff = h._ntohs = function() {
    return (Ff = h._ntohs = h.asm.Zf).apply(null, arguments)
}
  , Vd = h.stackSave = function() {
    return (Vd = h.stackSave = h.asm._f).apply(null, arguments)
}
  , Wd = h.stackRestore = function() {
    return (Wd = h.stackRestore = h.asm.$f).apply(null, arguments)
}
  , ze = h.stackAlloc = function() {
    return (ze = h.stackAlloc = h.asm.ag).apply(null, arguments)
}
;
h.___cxa_is_pointer_type = function() {
    return (h.___cxa_is_pointer_type = h.asm.bg).apply(null, arguments)
}
;
h.___emscripten_embedded_file_data = 111960;
h.addRunDependency = Oa;
h.removeRunDependency = Pa;
h.FS_createPath = cc;
h.FS_createDataFile = ec;
h.FS_createPreloadedFile = jc;
h.FS_createLazyFile = hc;
h.FS_createDevice = fc;
h.FS_unlink = Rb;
var If;
Na = function Jf() {
    If || Kf();
    If || (Na = Jf)
}
;
function Lf(a) {
    var b = h._main;
    a = a || [];
    a.unshift(ca);
    var c = a.length
      , d = ze(4 * (c + 1))
      , e = d >> 2;
    a.forEach(g=>{
        var m = z
          , n = e++
          , p = xa(g) + 1
          , r = ze(p);
        wa(g, x, r, p);
        m[n] = r
    }
    );
    z[e] = 0;
    try {
        var f = b(c, d);
        zc(f)
    } catch (g) {
        Ac(g)
    }
}
function Kf() {
    function a() {
        if (!If && (If = !0,
        h.calledRun = !0,
        !sa)) {
            h.noFSInit || ac || (ac = !0,
            $b(),
            h.stdin = h.stdin,
            h.stdout = h.stdout,
            h.stderr = h.stderr,
            h.stdin ? fc("/dev", "stdin", h.stdin) : Qb("/dev/tty", "/dev/stdin"),
            h.stdout ? fc("/dev", "stdout", null, h.stdout) : Qb("/dev/tty", "/dev/stdout"),
            h.stderr ? fc("/dev", "stderr", null, h.stderr) : Qb("/dev/tty1", "/dev/stderr"),
            Wb("/dev/stdin", 0),
            Wb("/dev/stdout", 1),
            Wb("/dev/stderr", 1));
            Ab = !1;
            Q.root = Nb(Q, null);
            R.root = Nb(R, null);
            $a(Ga);
            $a(Ha);
            if (h.onRuntimeInitialized)
                h.onRuntimeInitialized();
            Mf && Lf(b);
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; ) {
                    var c = h.postRun.shift();
                    Ja.unshift(c)
                }
            $a(Ja)
        }
    }
    var b = b || ba;
    if (!(0 < La)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; )
                Ka();
        $a(Fa);
        0 < La || (h.setStatus ? (h.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                h.setStatus("")
            }, 1);
            a()
        }, 1)) : a())
    }
}
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
        h.preInit.pop()();
var Mf = !0;
h.noInitialRun && (Mf = !1);
Kf();
