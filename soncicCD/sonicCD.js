var f;
f || (f = typeof Module !== 'undefined' ? Module : {});
f.Sg || (f.Sg = 0);
f.Sg++;
f.ENVIRONMENT_IS_PTHREAD || function(a) {
    function b(n, q, p, t) {
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node)
            require("fs").readFile(n, function(x, C) {
                x ? t(x) : p(C.buffer)
            });
        else {
            var u = new XMLHttpRequest;
            u.open("GET", n, !0);
            u.responseType = "arraybuffer";
            u.onprogress = function(x) {
                var C = q;
                x.total && (C = x.total);
                if (x.loaded) {
                    u.Tf ? f.sg[n].loaded = x.loaded : (u.Tf = !0,
                    f.sg || (f.sg = {}),
                    f.sg[n] = {
                        loaded: x.loaded,
                        total: C
                    });
                    var F = C = x = 0, U;
                    for (U in f.sg) {
                        var V = f.sg[U];
                        x += V.total;
                        C += V.loaded;
                        F++
                    }
                    x = Math.ceil(x * f.Sg / F);
                    f.setStatus && f.setStatus("Downloading data... (" + C + "/" + x + ")")
                } else
                    !f.sg && f.setStatus && f.setStatus("Downloading data...")
            }
            ;
            u.onerror = function() {
                throw Error("NetworkError for: " + n);
            }
            ;
            u.onload = function() {
                if (200 == u.status || 304 == u.status || 206 == u.status || 0 == u.status && u.response)
                    p(u.response);
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
        function n(u, x, C) {
            this.start = u;
            this.end = x;
            this.audio = C
        }
        function q(u) {
            if (!u)
                throw "Loading data file failed." + Error().stack;
            if (u.constructor.name !== ArrayBuffer.name)
                throw "bad input to processPackageData" + Error().stack;
            u = new Uint8Array(u);
            n.prototype.Dg = u;
            u = a.files;
            for (var x = 0; x < u.length; ++x)
                n.prototype.Tf[u[x].filename].onload();
            f.removeRunDependency("datafile_bin/RSDKv3.data")
        }
        n.prototype = {
            Tf: {},
            open: function(u, x) {
                this.name = x;
                this.Tf[x] = this;
                f.addRunDependency("fp " + this.name)
            },
            send: function() {},
            onload: function() {
                this.ng(this.Dg.subarray(this.start, this.end))
            },
            ng: function(u) {
                f.FS_createDataFile(this.name, null, u, !0, !0, !0);
                f.removeRunDependency("fp " + this.name);
                this.Tf[this.name] = null
            }
        };
        for (var p = a.files, t = 0; t < p.length; ++t)
            (new n(p[t].start,p[t].end,p[t].audio || 0)).open("GET", p[t].filename);
        f.addRunDependency("datafile_bin/RSDKv3.data");
        f.wh || (f.wh = {});
        f.wh["bin/RSDKv3.data"] = {
            ji: !1
        };
        m ? (q(m),
        m = null) : g = q
    }
    "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    "function" !== typeof f.locateFilePackage || f.locateFile || (f.locateFile = f.locateFilePackage,
    k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
    var e = f.locateFile ? f.locateFile("RSDKv3.data", "") : "RSDKv3.data"
      , h = a.remote_package_size
      , g = null
      , m = f.getPreloadedPackage ? f.getPreloadedPackage(e, h) : null;
    m || b(e, h, function(n) {
        g ? (g(n),
        g = null) : m = n
    }, c);
    f.calledRun ? d() : (f.preRun || (f.preRun = []),
    f.preRun.push(d))
}({
    files: [{
        filename: "/Data.rsdk",
        start: 0,
        end: 78711043
    }, {
        filename: "/settings.ini",
        start: 78711043,
        end: 78713919
    }],
    remote_package_size: 78713919
});
var aa = Object.assign({}, f), ba = [], ca = "./this.program", da = (a,b)=>{
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
    "undefined" != typeof module && (module.exports = f);
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
    f.inspect = function() {
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
var qa = f.print || console.log.bind(console)
  , k = f.printErr || console.warn.bind(console);
Object.assign(f, aa);
aa = null;
f.arguments && (ba = f.arguments);
f.thisProgram && (ca = f.thisProgram);
f.quit && (da = f.quit);
var ra;
f.wasmBinary && (ra = f.wasmBinary);
var noExitRuntime = f.noExitRuntime || !0;
"object" != typeof WebAssembly && l("no native wasm support detected");
var sa, ta = !1, ua = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function va(a, b, c) {
    var d = b + c;
    for (c = b; a[c] && !(c >= d); )
        ++c;
    if (16 < c - b && a.buffer && ua)
        return ua.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
            var h = a[b++] & 63;
            if (192 == (e & 224))
                d += String.fromCharCode((e & 31) << 6 | h);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | h << 6 | g : (e & 7) << 18 | h << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else
            d += String.fromCharCode(e)
    }
    return d
}
function r(a, b) {
    return a ? va(v, a, b) : ""
}
function wa(a, b, c, d) {
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var h = 0; h < a.length; ++h) {
        var g = a.charCodeAt(h);
        if (55296 <= g && 57343 >= g) {
            var m = a.charCodeAt(++h);
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
var ya, y, v, za, Aa, z, A, B, D, Ba, Ca = [], Da = [], Ea = [], Fa = [], Ga = [];
function Ha() {
    var a = f.preRun.shift();
    Ca.unshift(a)
}
var Ia = 0
  , Ja = null
  , Ka = null;
function La() {
    Ia++;
    f.monitorRunDependencies && f.monitorRunDependencies(Ia)
}
function Ma() {
    Ia--;
    f.monitorRunDependencies && f.monitorRunDependencies(Ia);
    if (0 == Ia && (null !== Ja && (clearInterval(Ja),
    Ja = null),
    Ka)) {
        var a = Ka;
        Ka = null;
        a()
    }
}
function l(a) {
    if (f.onAbort)
        f.onAbort(a);
    a = "Aborted(" + a + ")";
    k(a);
    ta = !0;
    throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
}
function Na() {
    return E.startsWith("data:application/octet-stream;base64,")
}
var E;
E = "RSDKv3.wasm";
if (!Na()) {
    var Oa = E;
    E = f.locateFile ? f.locateFile(Oa, ia) : ia + Oa
}
function Pa() {
    var a = E;
    try {
        if (a == E && ra)
            return new Uint8Array(ra);
        if (la)
            return la(a);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        l(b)
    }
}
function Qa() {
    if (!ra && (ea || fa)) {
        if ("function" == typeof fetch && !E.startsWith("file://"))
            return fetch(E, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok)
                    throw "failed to load wasm binary file at '" + E + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return Pa()
            });
        if (ka)
            return new Promise(function(a, b) {
                ka(E, function(c) {
                    a(new Uint8Array(c))
                }, b)
            }
            )
    }
    return Promise.resolve().then(function() {
        return Pa()
    })
}
var G, H, Ua = {
    223184: ()=>"undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1,
    223331: ()=>"undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
    223565: a=>{
        "undefined" === typeof f.SDL2 && (f.SDL2 = {});
        var b = f.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.Vf || ("undefined" !== typeof AudioContext ? b.Vf = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.Vf = new webkitAudioContext),
        b.Vf && Ra(b.Vf));
        return void 0 === b.Vf ? -1 : 0
    }
    ,
    224058: ()=>f.SDL2.Vf.sampleRate,
    224126: (a,b,c,d)=>{
        function e() {}
        function h(m) {
            void 0 !== g.capture.Ag && (clearTimeout(g.capture.Ag),
            g.capture.Ag = void 0);
            g.capture.Jg = g.Vf.createMediaStreamSource(m);
            g.capture.Zf = g.Vf.createScriptProcessor(b, a, 1);
            g.capture.Zf.onaudioprocess = function(n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                g.capture.Qg = n.inputBuffer,
                Sa(c, [d]))
            }
            ;
            g.capture.Jg.connect(g.capture.Zf);
            g.capture.Zf.connect(g.Vf.destination);
            g.capture.stream = m
        }
        var g = f.SDL2;
        g.capture.Mg = g.Vf.createBuffer(a, b, g.Vf.sampleRate);
        g.capture.Mg.getChannelData(0).fill(0);
        g.capture.Ag = setTimeout(function() {
            g.capture.Qg = g.capture.Mg;
            Sa(c, [d])
        }, b / g.Vf.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(h).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, h, e)
    }
    ,
    225778: (a,b,c,d)=>{
        var e = f.SDL2;
        e.audio.Zf = e.Vf.createScriptProcessor(b, 0, a);
        e.audio.Zf.onaudioprocess = function(h) {
            void 0 !== e && void 0 !== e.audio && (e.audio.hh = h.outputBuffer,
            Sa(c, [d]))
        }
        ;
        e.audio.Zf.connect(e.Vf.destination)
    }
    ,
    226188: (a,b)=>{
        for (var c = f.SDL2, d = c.capture.Qg.numberOfChannels, e = 0; e < d; ++e) {
            var h = c.capture.Qg.getChannelData(e);
            if (h.length != b)
                throw "Web Audio capture buffer length mismatch! Destination size: " + h.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g)
                    Ta(a + 4 * g, h[g]);
            else
                for (g = 0; g < b; ++g)
                    Ta(a + 4 * (g * d + e), h[g])
        }
    }
    ,
    226793: (a,b)=>{
        for (var c = f.SDL2, d = c.audio.hh.numberOfChannels, e = 0; e < d; ++e) {
            var h = c.audio.hh.getChannelData(e);
            if (h.length != b)
                throw "Web Audio output buffer length mismatch! Destination size: " + h.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g)
                h[g] = B[a + (g * d + e << 2) >> 2]
        }
    }
    ,
    227273: a=>{
        var b = f.SDL2;
        if (a) {
            void 0 !== b.capture.Ag && clearTimeout(b.capture.Ag);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++)
                    b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.Zf && (b.capture.Zf.onaudioprocess = function() {}
            ,
            b.capture.Zf.disconnect(),
            b.capture.Zf = void 0);
            void 0 !== b.capture.Jg && (b.capture.Jg.disconnect(),
            b.capture.Jg = void 0);
            void 0 !== b.capture.Mg && (b.capture.Mg = void 0);
            b.capture = void 0
        } else
            void 0 != b.audio.Zf && (b.audio.Zf.disconnect(),
            b.audio.Zf = void 0),
            b.audio = void 0;
        void 0 !== b.Vf && void 0 === b.audio && void 0 === b.capture && (b.Vf.close(),
        b.Vf = void 0)
    }
    ,
    228445: (a,b,c)=>{
        f.SDL2 || (f.SDL2 = {});
        var d = f.SDL2;
        d.Gh !== f.canvas && (d.eg = f.createContext(f.canvas, !1, !0),
        d.Gh = f.canvas);
        if (d.w !== a || d.Ph !== b || d.Rh !== d.eg)
            d.image = d.eg.createImageData(a, b),
            d.w = a,
            d.Ph = b,
            d.Rh = d.eg;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c; ) {
                var h = z[b];
                a[e] = h & 255;
                a[e + 1] = h >> 8 & 255;
                a[e + 2] = h >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            }
        else if (d.Jh !== a && (d.Ih = new Int32Array(a.buffer),
        d.Kh = new Uint8Array(a.buffer),
        d.Jh = a),
        a = d.Ih,
        c = a.length,
        a.set(z.subarray(b, b + c)),
        a = d.Kh,
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
        d.eg.putImageData(d.image, 0, 0)
    }
    ,
    229914: (a,b,c,d,e)=>{
        var h = document.createElement("canvas");
        h.width = a;
        h.height = b;
        var g = h.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var m = 0, n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; m < n; ) {
                var q = z[e];
                b[m] = q & 255;
                b[m + 1] = q >> 8 & 255;
                b[m + 2] = q >> 16 & 255;
                b[m + 3] = q >> 24 & 255;
                e++;
                m += 4
            }
        else
            b = new Int32Array(b.buffer),
            n = b.length,
            b.set(z.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c && 0 === d ? "url(" + h.toDataURL() + "), auto" : "url(" + h.toDataURL() + ") " + c + " " + d + ", auto";
        d = I(c.length + 1);
        w(c, d, c.length + 1);
        return d
    }
    ,
    230903: a=>{
        f.canvas && (f.canvas.style.cursor = r(a))
    }
    ,
    230986: ()=>{
        f.canvas && (f.canvas.style.cursor = "none")
    }
    ,
    231055: ()=>window.innerWidth,
    231085: ()=>window.innerHeight
};
function oa(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
function Va(a, b, c) {
    a.addEventListener(b, c, {
        once: !0
    })
}
function Ra(a) {
    var b;
    b || (b = [document, document.getElementById("canvas")]);
    ["keydown", "mousedown", "touchstart"].forEach(function(c) {
        b.forEach(function(d) {
            d && Va(d, c, ()=>{
                "suspended" === a.state && a.resume()
            }
            )
        })
    })
}
function Wa(a) {
    for (; 0 < a.length; )
        a.shift()(f)
}
var Xa = [];
function J(a) {
    var b = Xa[a];
    b || (a >= Xa.length && (Xa.length = a + 1),
    Xa[a] = b = Ba.get(a));
    return b
}
function Sa(a, b) {
    if ("vi".includes("j")) {
        var c = f.dynCall_vi;
        b && b.length ? c.apply(null, [a].concat(b)) : c.call(null, a)
    } else
        J(a).apply(null, b)
}
function Ta(a, b) {
    var c = "float";
    c.endsWith("*") && (c = "*");
    switch (c) {
    case "i1":
        y[a >> 0] = b;
        break;
    case "i8":
        y[a >> 0] = b;
        break;
    case "i16":
        za[a >> 1] = b;
        break;
    case "i32":
        z[a >> 2] = b;
        break;
    case "i64":
        H = [b >>> 0, (G = b,
        1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
        z[a >> 2] = H[0];
        z[a + 4 >> 2] = H[1];
        break;
    case "float":
        B[a >> 2] = b;
        break;
    case "double":
        D[a >> 3] = b;
        break;
    case "*":
        A[a >> 2] = b;
        break;
    default:
        l("invalid type for setValue: " + c)
    }
}
function Ya(a) {
    this.dg = a - 24;
    this.Ch = function(b) {
        A[this.dg + 4 >> 2] = b
    }
    ;
    this.ah = function(b) {
        A[this.dg + 8 >> 2] = b
    }
    ;
    this.Ah = function() {
        z[this.dg >> 2] = 0
    }
    ;
    this.Dg = function() {
        y[this.dg + 12 >> 0] = 0
    }
    ;
    this.Bh = function() {
        y[this.dg + 13 >> 0] = 0
    }
    ;
    this.Tf = function(b, c) {
        this.ng();
        this.Ch(b);
        this.ah(c);
        this.Ah();
        this.Dg();
        this.Bh()
    }
    ;
    this.ng = function() {
        A[this.dg + 16 >> 2] = 0
    }
}
var Za = 0
  , $a = (a,b)=>{
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
  , ab = a=>{
    var b = "/" === a.charAt(0)
      , c = "/" === a.substr(-1);
    (a = $a(a.split("/").filter(d=>!!d), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
  , bb = a=>{
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b && (b = b.substr(0, b.length - 1));
    return a + b
}
  , cb = a=>{
    if ("/" === a)
        return "/";
    a = ab(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
;
function db() {
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
function eb() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!b)
            return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = $a(a.split("/").filter(d=>!!d), !b).join("/");
    return (b ? "/" : "") + a || "."
}
function fb(a) {
    var b = Array(xa(a) + 1);
    a = wa(a, b, 0, b.length);
    b.length = a;
    return b
}
var gb = [];
function hb(a, b) {
    gb[a] = {
        input: [],
        output: [],
        ug: b
    };
    ib(a, jb)
}
var jb = {
    open: function(a) {
        var b = gb[a.node.rdev];
        if (!b)
            throw new K(43);
        a.tty = b;
        a.seekable = !1
    },
    close: function(a) {
        a.tty.ug.fsync(a.tty)
    },
    fsync: function(a) {
        a.tty.ug.fsync(a.tty)
    },
    read: function(a, b, c, d) {
        if (!a.tty || !a.tty.ug.kh)
            throw new K(60);
        for (var e = 0, h = 0; h < d; h++) {
            try {
                var g = a.tty.ug.kh(a.tty)
            } catch (m) {
                throw new K(29);
            }
            if (void 0 === g && 0 === e)
                throw new K(6);
            if (null === g || void 0 === g)
                break;
            e++;
            b[c + h] = g
        }
        e && (a.node.timestamp = Date.now());
        return e
    },
    write: function(a, b, c, d) {
        if (!a.tty || !a.tty.ug.Vg)
            throw new K(60);
        try {
            for (var e = 0; e < d; e++)
                a.tty.ug.Vg(a.tty, b[c + e])
        } catch (h) {
            throw new K(29);
        }
        d && (a.node.timestamp = Date.now());
        return e
    }
}
  , kb = {
    kh: function(a) {
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
            a.input = fb(b)
        }
        return a.input.shift()
    },
    Vg: function(a, b) {
        null === b || 10 === b ? (qa(va(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    fsync: function(a) {
        a.output && 0 < a.output.length && (qa(va(a.output, 0)),
        a.output = [])
    }
}
  , lb = {
    Vg: function(a, b) {
        null === b || 10 === b ? (k(va(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    fsync: function(a) {
        a.output && 0 < a.output.length && (k(va(a.output, 0)),
        a.output = [])
    }
}
  , L = {
    hg: null,
    jg: function() {
        return L.createNode(null, "/", 16895, 0)
    },
    createNode: function(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440))
            throw new K(63);
        L.hg || (L.hg = {
            dir: {
                node: {
                    gg: L.Qf.gg,
                    $f: L.Qf.$f,
                    lookup: L.Qf.lookup,
                    Kg: L.Qf.Kg,
                    rename: L.Qf.rename,
                    unlink: L.Qf.unlink,
                    rmdir: L.Qf.rmdir,
                    readdir: L.Qf.readdir,
                    symlink: L.Qf.symlink
                },
                stream: {
                    rg: L.Sf.rg
                }
            },
            file: {
                node: {
                    gg: L.Qf.gg,
                    $f: L.Qf.$f
                },
                stream: {
                    rg: L.Sf.rg,
                    read: L.Sf.read,
                    write: L.Sf.write,
                    bh: L.Sf.bh,
                    Ug: L.Sf.Ug,
                    rh: L.Sf.rh
                }
            },
            link: {
                node: {
                    gg: L.Qf.gg,
                    $f: L.Qf.$f,
                    readlink: L.Qf.readlink
                },
                stream: {}
            },
            gh: {
                node: {
                    gg: L.Qf.gg,
                    $f: L.Qf.$f
                },
                stream: mb
            }
        });
        c = nb(a, b, c, d);
        16384 === (c.mode & 61440) ? (c.Qf = L.hg.dir.node,
        c.Sf = L.hg.dir.stream,
        c.Rf = {}) : 32768 === (c.mode & 61440) ? (c.Qf = L.hg.file.node,
        c.Sf = L.hg.file.stream,
        c.Uf = 0,
        c.Rf = null) : 40960 === (c.mode & 61440) ? (c.Qf = L.hg.link.node,
        c.Sf = L.hg.link.stream) : 8192 === (c.mode & 61440) && (c.Qf = L.hg.gh.node,
        c.Sf = L.hg.gh.stream);
        c.timestamp = Date.now();
        a && (a.Rf[b] = c,
        a.timestamp = c.timestamp);
        return c
    },
    li: function(a) {
        return a.Rf ? a.Rf.subarray ? a.Rf.subarray(0, a.Uf) : new Uint8Array(a.Rf) : new Uint8Array(0)
    },
    ih: function(a, b) {
        var c = a.Rf ? a.Rf.length : 0;
        c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
        0 != c && (b = Math.max(b, 256)),
        c = a.Rf,
        a.Rf = new Uint8Array(b),
        0 < a.Uf && a.Rf.set(c.subarray(0, a.Uf), 0))
    },
    Yh: function(a, b) {
        if (a.Uf != b)
            if (0 == b)
                a.Rf = null,
                a.Uf = 0;
            else {
                var c = a.Rf;
                a.Rf = new Uint8Array(b);
                c && a.Rf.set(c.subarray(0, Math.min(b, a.Uf)));
                a.Uf = b
            }
    },
    Qf: {
        gg: function(a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Uf : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.Fh = 4096;
            b.blocks = Math.ceil(b.size / b.Fh);
            return b
        },
        $f: function(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            void 0 !== b.size && L.Yh(a, b.size)
        },
        lookup: function() {
            throw ob[44];
        },
        Kg: function(a, b, c, d) {
            return L.createNode(a, b, c, d)
        },
        rename: function(a, b, c) {
            if (16384 === (a.mode & 61440)) {
                try {
                    var d = pb(b, c)
                } catch (h) {}
                if (d)
                    for (var e in d.Rf)
                        throw new K(55);
            }
            delete a.parent.Rf[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Rf[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b
        },
        unlink: function(a, b) {
            delete a.Rf[b];
            a.timestamp = Date.now()
        },
        rmdir: function(a, b) {
            var c = pb(a, b), d;
            for (d in c.Rf)
                throw new K(55);
            delete a.Rf[b];
            a.timestamp = Date.now()
        },
        readdir: function(a) {
            var b = [".", ".."], c;
            for (c in a.Rf)
                a.Rf.hasOwnProperty(c) && b.push(c);
            return b
        },
        symlink: function(a, b, c) {
            a = L.createNode(a, b, 41471, 0);
            a.link = c;
            return a
        },
        readlink: function(a) {
            if (40960 !== (a.mode & 61440))
                throw new K(28);
            return a.link
        }
    },
    Sf: {
        read: function(a, b, c, d, e) {
            var h = a.node.Rf;
            if (e >= a.node.Uf)
                return 0;
            a = Math.min(a.node.Uf - e, d);
            if (8 < a && h.subarray)
                b.set(h.subarray(e, e + a), c);
            else
                for (d = 0; d < a; d++)
                    b[c + d] = h[e + d];
            return a
        },
        write: function(a, b, c, d, e, h) {
            if (!d)
                return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.Rf || a.Rf.subarray)) {
                if (h)
                    return a.Rf = b.subarray(c, c + d),
                    a.Uf = d;
                if (0 === a.Uf && 0 === e)
                    return a.Rf = b.slice(c, c + d),
                    a.Uf = d;
                if (e + d <= a.Uf)
                    return a.Rf.set(b.subarray(c, c + d), e),
                    d
            }
            L.ih(a, e + d);
            if (a.Rf.subarray && b.subarray)
                a.Rf.set(b.subarray(c, c + d), e);
            else
                for (h = 0; h < d; h++)
                    a.Rf[e + h] = b[c + h];
            a.Uf = Math.max(a.Uf, e + d);
            return d
        },
        rg: function(a, b, c) {
            1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Uf);
            if (0 > b)
                throw new K(28);
            return b
        },
        bh: function(a, b, c) {
            L.ih(a.node, b + c);
            a.node.Uf = Math.max(a.node.Uf, b + c)
        },
        Ug: function(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440))
                throw new K(43);
            a = a.node.Rf;
            if (e & 2 || a.buffer !== ya) {
                if (0 < c || c + b < a.length)
                    a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                c = !0;
                l();
                b = void 0;
                if (!b)
                    throw new K(48);
                y.set(a, b)
            } else
                c = !1,
                b = a.byteOffset;
            return {
                dg: b,
                di: c
            }
        },
        rh: function(a, b, c, d) {
            L.Sf.write(a, b, 0, d, c, !1);
            return 0
        }
    }
};
function qb(a, b, c) {
    var d = "al " + a;
    ka(a, e=>{
        e || l('Loading data file "' + a + '" failed (no arrayBuffer).');
        b(new Uint8Array(e));
        d && Ma(d)
    }
    , ()=>{
        if (c)
            c();
        else
            throw 'Loading data file "' + a + '" failed.';
    }
    );
    d && La(d)
}
var rb = null, sb = {}, tb = [], ub = 1, vb = null, wb = !0, K = null, ob = {}, yb = (a,b={})=>{
    a = eb("/", a);
    if (!a)
        return {
            path: "",
            node: null
        };
    b = Object.assign({
        jh: !0,
        Wg: 0
    }, b);
    if (8 < b.Wg)
        throw new K(32);
    a = $a(a.split("/").filter(g=>!!g), !1);
    for (var c = rb, d = "/", e = 0; e < a.length; e++) {
        var h = e === a.length - 1;
        if (h && b.parent)
            break;
        c = pb(c, a[e]);
        d = ab(d + "/" + a[e]);
        c.zg && (!h || h && b.jh) && (c = c.zg.root);
        if (!h || b.yg)
            for (h = 0; 40960 === (c.mode & 61440); )
                if (c = xb(d),
                d = eb(bb(d), c),
                c = yb(d, {
                    Wg: b.Wg + 1
                }).node,
                40 < h++)
                    throw new K(32);
    }
    return {
        path: d,
        node: c
    }
}
, zb = a=>{
    for (var b; ; ) {
        if (a === a.parent)
            return a = a.jg.qh,
            b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent
    }
}
, Ab = (a,b)=>{
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % vb.length
}
, pb = (a,b)=>{
    var c;
    if (c = (c = Bb(a, "x")) ? c : a.Qf.lookup ? 0 : 2)
        throw new K(c,a);
    for (c = vb[Ab(a.id, b)]; c; c = c.tg) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.Qf.lookup(a, b)
}
, nb = (a,b,c,d)=>{
    a = new Cb(a,b,c,d);
    b = Ab(a.parent.id, a.name);
    a.tg = vb[b];
    return vb[b] = a
}
, Db = {
    r: 0,
    "r+": 2,
    w: 577,
    "w+": 578,
    a: 1089,
    "a+": 1090
}, Eb = a=>{
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
, Bb = (a,b)=>{
    if (wb)
        return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
, Fb = (a,b)=>{
    try {
        return pb(a, b),
        20
    } catch (c) {}
    return Bb(a, "wx")
}
, Gb = (a=0)=>{
    for (; 4096 >= a; a++)
        if (!tb[a])
            return a;
    throw new K(33);
}
, Ib = (a,b)=>{
    Hb || (Hb = function() {
        this.Tf = {}
    }
    ,
    Hb.prototype = {},
    Object.defineProperties(Hb.prototype, {
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
                return this.Tf.flags
            },
            set: function(c) {
                this.Tf.flags = c
            }
        },
        position: {
            get: function() {
                return this.Tf.position
            },
            set: function(c) {
                this.Tf.position = c
            }
        }
    }));
    a = Object.assign(new Hb, a);
    b = Gb(b);
    a.fd = b;
    return tb[b] = a
}
, mb = {
    open: a=>{
        a.Sf = sb[a.node.rdev].Sf;
        a.Sf.open && a.Sf.open(a)
    }
    ,
    rg: ()=>{
        throw new K(70);
    }
}, ib = (a,b)=>{
    sb[a] = {
        Sf: b
    }
}
, Jb = (a,b)=>{
    var c = "/" === b
      , d = !b;
    if (c && rb)
        throw new K(10);
    if (!c && !d) {
        var e = yb(b, {
            jh: !1
        });
        b = e.path;
        e = e.node;
        if (e.zg)
            throw new K(10);
        if (16384 !== (e.mode & 61440))
            throw new K(54);
    }
    b = {
        type: a,
        ti: {},
        qh: b,
        Wh: []
    };
    a = a.jg(b);
    a.jg = b;
    b.root = a;
    c ? rb = a : e && (e.zg = b,
    e.jg && e.jg.Wh.push(b))
}
, M = (a,b,c)=>{
    var d = yb(a, {
        parent: !0
    }).node;
    a = cb(a);
    if (!a || "." === a || ".." === a)
        throw new K(28);
    var e = Fb(d, a);
    if (e)
        throw new K(e);
    if (!d.Qf.Kg)
        throw new K(63);
    return d.Qf.Kg(d, a, b, c)
}
, Kb = (a,b,c)=>{
    "undefined" == typeof c && (c = b,
    b = 438);
    return M(a, b | 8192, c)
}
, Lb = (a,b)=>{
    if (!eb(a))
        throw new K(44);
    var c = yb(b, {
        parent: !0
    }).node;
    if (!c)
        throw new K(44);
    b = cb(b);
    var d = Fb(c, b);
    if (d)
        throw new K(d);
    if (!c.Qf.symlink)
        throw new K(63);
    c.Qf.symlink(c, b, a)
}
, Mb = a=>{
    var b = yb(a, {
        parent: !0
    }).node;
    if (!b)
        throw new K(44);
    var c = cb(a);
    a = pb(b, c);
    a: {
        try {
            var d = pb(b, c)
        } catch (h) {
            d = h.Yf;
            break a
        }
        var e = Bb(b, "wx");
        d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0
    }
    if (d)
        throw new K(d);
    if (!b.Qf.unlink)
        throw new K(63);
    if (a.zg)
        throw new K(10);
    b.Qf.unlink(b, c);
    b = Ab(a.parent.id, a.name);
    if (vb[b] === a)
        vb[b] = a.tg;
    else
        for (b = vb[b]; b; ) {
            if (b.tg === a) {
                b.tg = a.tg;
                break
            }
            b = b.tg
        }
}
, xb = a=>{
    a = yb(a).node;
    if (!a)
        throw new K(44);
    if (!a.Qf.readlink)
        throw new K(28);
    return eb(zb(a.parent), a.Qf.readlink(a))
}
, Nb = (a,b)=>{
    a = yb(a, {
        yg: !b
    }).node;
    if (!a)
        throw new K(44);
    if (!a.Qf.gg)
        throw new K(63);
    return a.Qf.gg(a)
}
, Ob = a=>Nb(a, !0), Pb = (a,b)=>{
    a = "string" == typeof a ? yb(a, {
        yg: !0
    }).node : a;
    if (!a.Qf.$f)
        throw new K(63);
    a.Qf.$f(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}
, Rb = (a,b,c)=>{
    if ("" === a)
        throw new K(44);
    if ("string" == typeof b) {
        var d = Db[b];
        if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
        b = d
    }
    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" == typeof a)
        var e = a;
    else {
        a = ab(a);
        try {
            e = yb(a, {
                yg: !(b & 131072)
            }).node
        } catch (h) {}
    }
    d = !1;
    if (b & 64)
        if (e) {
            if (b & 128)
                throw new K(20);
        } else
            e = M(a, c, 0),
            d = !0;
    if (!e)
        throw new K(44);
    8192 === (e.mode & 61440) && (b &= -513);
    if (b & 65536 && 16384 !== (e.mode & 61440))
        throw new K(54);
    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Eb(b) || b & 512) ? 31 : Bb(e, Eb(b)) : 44))
        throw new K(c);
    if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? yb(c, {
            yg: !0
        }).node : c;
        if (!c.Qf.$f)
            throw new K(63);
        if (16384 === (c.mode & 61440))
            throw new K(31);
        if (32768 !== (c.mode & 61440))
            throw new K(28);
        if (d = Bb(c, "w"))
            throw new K(d);
        c.Qf.$f(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    e = Ib({
        node: e,
        path: zb(e),
        flags: b,
        seekable: !0,
        position: 0,
        Sf: e.Sf,
        ai: [],
        error: !1
    });
    e.Sf.open && e.Sf.open(e);
    !f.logReadFiles || b & 1 || (Qb || (Qb = {}),
    a in Qb || (Qb[a] = 1));
    return e
}
, Sb = a=>{
    if (null === a.fd)
        throw new K(8);
    a.qg && (a.qg = null);
    try {
        a.Sf.close && a.Sf.close(a)
    } catch (b) {
        throw b;
    } finally {
        tb[a.fd] = null
    }
    a.fd = null
}
, Tb = (a,b,c)=>{
    if (null === a.fd)
        throw new K(8);
    if (!a.seekable || !a.Sf.rg)
        throw new K(70);
    if (0 != c && 1 != c && 2 != c)
        throw new K(28);
    a.position = a.Sf.rg(a, b, c);
    a.ai = [];
    return a.position
}
, Ub = (a,b,c,d,e,h)=>{
    if (0 > d || 0 > e)
        throw new K(28);
    if (null === a.fd)
        throw new K(8);
    if (0 === (a.flags & 2097155))
        throw new K(8);
    if (16384 === (a.node.mode & 61440))
        throw new K(31);
    if (!a.Sf.write)
        throw new K(28);
    a.seekable && a.flags & 1024 && Tb(a, 0, 2);
    var g = "undefined" != typeof e;
    if (!g)
        e = a.position;
    else if (!a.seekable)
        throw new K(70);
    b = a.Sf.write(a, b, c, d, e, h);
    g || (a.position += b);
    return b
}
, Vb = ()=>{
    K || (K = function(a, b) {
        this.node = b;
        this.Zh = function(c) {
            this.Yf = c
        }
        ;
        this.Zh(a);
        this.message = "FS error"
    }
    ,
    K.prototype = Error(),
    K.prototype.constructor = K,
    [44].forEach(a=>{
        ob[a] = new K(a);
        ob[a].stack = "<generic error, no stack>"
    }
    ))
}
, Wb, Xb = (a,b)=>{
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
, Yb = (a,b)=>{
    a = "string" == typeof a ? a : zb(a);
    for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
            var d = ab(a + "/" + c);
            try {
                M(d, 16895, 0)
            } catch (e) {}
            a = d
        }
    }
    return d
}
, Zb = (a,b,c,d)=>{
    a = ab(("string" == typeof a ? a : zb(a)) + "/" + b);
    c = Xb(c, d);
    return M(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}
, $b = (a,b,c,d,e,h)=>{
    var g = b;
    a && (a = "string" == typeof a ? a : zb(a),
    g = b ? ab(a + "/" + b) : a);
    a = Xb(d, e);
    g = M(g, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d)
                b[d] = c.charCodeAt(d);
            c = b
        }
        Pb(g, a | 146);
        b = Rb(g, 577);
        Ub(b, c, 0, c.length, 0, h);
        Sb(b);
        Pb(g, a)
    }
    return g
}
, ac = (a,b,c,d)=>{
    a = ab(("string" == typeof a ? a : zb(a)) + "/" + b);
    b = Xb(!!c, !!d);
    ac.nh || (ac.nh = 64);
    var e = ac.nh++ << 8 | 0;
    ib(e, {
        open: h=>{
            h.seekable = !1
        }
        ,
        close: ()=>{
            d && d.buffer && d.buffer.length && d(10)
        }
        ,
        read: (h,g,m,n)=>{
            for (var q = 0, p = 0; p < n; p++) {
                try {
                    var t = c()
                } catch (u) {
                    throw new K(29);
                }
                if (void 0 === t && 0 === q)
                    throw new K(6);
                if (null === t || void 0 === t)
                    break;
                q++;
                g[m + p] = t
            }
            q && (h.node.timestamp = Date.now());
            return q
        }
        ,
        write: (h,g,m,n)=>{
            for (var q = 0; q < n; q++)
                try {
                    d(g[m + q])
                } catch (p) {
                    throw new K(29);
                }
            n && (h.node.timestamp = Date.now());
            return q
        }
    });
    return Kb(a, b, e)
}
, bc = a=>{
    if (!(a.Uh || a.Vh || a.link || a.Rf)) {
        if ("undefined" != typeof XMLHttpRequest)
            throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (ja)
            try {
                a.Rf = fb(ja(a.url)),
                a.Uf = a.Rf.length
            } catch (b) {
                throw new K(29);
            }
        else
            throw Error("Cannot load without read() or XMLHttpRequest.");
    }
}
, cc = (a,b,c,d,e)=>{
    function h() {
        this.Tg = !1;
        this.Tf = []
    }
    h.prototype.get = function(p) {
        if (!(p > this.length - 1 || 0 > p)) {
            var t = p % this.chunkSize;
            return this.lh(p / this.chunkSize | 0)[t]
        }
    }
    ;
    h.prototype.ng = function(p) {
        this.lh = p
    }
    ;
    h.prototype.eh = function() {
        var p = new XMLHttpRequest;
        p.open("HEAD", c, !1);
        p.send(null);
        if (!(200 <= p.status && 300 > p.status || 304 === p.status))
            throw Error("Couldn't load " + c + ". Status: " + p.status);
        var t = Number(p.getResponseHeader("Content-length")), u, x = (u = p.getResponseHeader("Accept-Ranges")) && "bytes" === u;
        p = (u = p.getResponseHeader("Content-Encoding")) && "gzip" === u;
        var C = 1048576;
        x || (C = t);
        var F = this;
        F.ng(U=>{
            var V = U * C
              , pa = (U + 1) * C - 1;
            pa = Math.min(pa, t - 1);
            if ("undefined" == typeof F.Tf[U]) {
                var lc = F.Tf;
                if (V > pa)
                    throw Error("invalid range (" + V + ", " + pa + ") or no bytes requested!");
                if (pa > t - 1)
                    throw Error("only " + t + " bytes available! programmer error!");
                var R = new XMLHttpRequest;
                R.open("GET", c, !1);
                t !== C && R.setRequestHeader("Range", "bytes=" + V + "-" + pa);
                R.responseType = "arraybuffer";
                R.overrideMimeType && R.overrideMimeType("text/plain; charset=x-user-defined");
                R.send(null);
                if (!(200 <= R.status && 300 > R.status || 304 === R.status))
                    throw Error("Couldn't load " + c + ". Status: " + R.status);
                V = void 0 !== R.response ? new Uint8Array(R.response || []) : fb(R.responseText || "");
                lc[U] = V
            }
            if ("undefined" == typeof F.Tf[U])
                throw Error("doXHR failed!");
            return F.Tf[U]
        }
        );
        if (p || !t)
            C = t = 1,
            C = t = this.lh(0).length,
            qa("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.Eh = t;
        this.Dh = C;
        this.Tg = !0
    }
    ;
    if ("undefined" != typeof XMLHttpRequest) {
        if (!fa)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g = new h;
        Object.defineProperties(g, {
            length: {
                get: function() {
                    this.Tg || this.eh();
                    return this.Eh
                }
            },
            chunkSize: {
                get: function() {
                    this.Tg || this.eh();
                    return this.Dh
                }
            }
        });
        var m = void 0
    } else
        m = c,
        g = void 0;
    var n = Zb(a, b, d, e);
    g ? n.Rf = g : m && (n.Rf = null,
    n.url = m);
    Object.defineProperties(n, {
        Uf: {
            get: function() {
                return this.Rf.length
            }
        }
    });
    var q = {};
    Object.keys(n.Sf).forEach(p=>{
        var t = n.Sf[p];
        q[p] = function() {
            bc(n);
            return t.apply(null, arguments)
        }
    }
    );
    q.read = (p,t,u,x,C)=>{
        bc(n);
        p = p.node.Rf;
        if (C >= p.length)
            t = 0;
        else {
            x = Math.min(p.length - C, x);
            if (p.slice)
                for (var F = 0; F < x; F++)
                    t[u + F] = p[C + F];
            else
                for (F = 0; F < x; F++)
                    t[u + F] = p.get(C + F);
            t = x
        }
        return t
    }
    ;
    q.Ug = ()=>{
        bc(n);
        l();
        throw new K(48);
    }
    ;
    n.Sf = q;
    return n
}
, ec = (a,b,c,d,e,h,g,m,n,q)=>{
    function p(x) {
        function C(F) {
            q && q();
            m || $b(a, b, F, d, e, n);
            h && h();
            Ma(u)
        }
        dc(x, t, C, ()=>{
            g && g();
            Ma(u)
        }
        ) || C(x)
    }
    var t = b ? eb(ab(a + "/" + b)) : a
      , u = "cp " + t;
    La(u);
    "string" == typeof c ? qb(c, x=>p(x), g) : p(c)
}
, fc = {}, Hb, Qb;
function gc(a, b, c) {
    if ("/" === b.charAt(0))
        return b;
    a = -100 === a ? "/" : hc(a).path;
    if (0 == b.length) {
        if (!c)
            throw new K(44);
        return a
    }
    return ab(a + "/" + b)
}
function ic(a, b, c) {
    try {
        var d = a(b)
    } catch (e) {
        if (e && e.node && ab(b) !== ab(zb(e.node)))
            return -54;
        throw e;
    }
    z[c >> 2] = d.dev;
    z[c + 8 >> 2] = d.ino;
    z[c + 12 >> 2] = d.mode;
    A[c + 16 >> 2] = d.nlink;
    z[c + 20 >> 2] = d.uid;
    z[c + 24 >> 2] = d.gid;
    z[c + 28 >> 2] = d.rdev;
    H = [d.size >>> 0, (G = d.size,
    1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 40 >> 2] = H[0];
    z[c + 44 >> 2] = H[1];
    z[c + 48 >> 2] = 4096;
    z[c + 52 >> 2] = d.blocks;
    H = [Math.floor(d.atime.getTime() / 1E3) >>> 0, (G = Math.floor(d.atime.getTime() / 1E3),
    1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 56 >> 2] = H[0];
    z[c + 60 >> 2] = H[1];
    A[c + 64 >> 2] = 0;
    H = [Math.floor(d.mtime.getTime() / 1E3) >>> 0, (G = Math.floor(d.mtime.getTime() / 1E3),
    1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 72 >> 2] = H[0];
    z[c + 76 >> 2] = H[1];
    A[c + 80 >> 2] = 0;
    H = [Math.floor(d.ctime.getTime() / 1E3) >>> 0, (G = Math.floor(d.ctime.getTime() / 1E3),
    1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 88 >> 2] = H[0];
    z[c + 92 >> 2] = H[1];
    A[c + 96 >> 2] = 0;
    H = [d.ino >>> 0, (G = d.ino,
    1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
    z[c + 104 >> 2] = H[0];
    z[c + 108 >> 2] = H[1];
    return 0
}
var jc = void 0;
function kc() {
    jc += 4;
    return z[jc - 4 >> 2]
}
function hc(a) {
    a = tb[a];
    if (!a)
        throw new K(8);
    return a
}
function mc(a, b) {
    nc = a;
    oc = b;
    if (pc)
        if (qc || (qc = !0),
        0 == a)
            rc = function() {
                var d = Math.max(0, sc + b - tc()) | 0;
                setTimeout(uc, d)
            }
            ;
        else if (1 == a)
            rc = function() {
                vc(uc)
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
                    fa ? (void 0 === f.setImmediates && (f.setImmediates = []),
                    f.setImmediates.push(d),
                    postMessage({
                        target: "setimmediate"
                    })) : postMessage("setimmediate", "*")
                }
            }
            rc = function() {
                setImmediate(uc)
            }
        }
}
var tc;
tc = ha ? ()=>{
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
}
: ()=>performance.now();
function wc(a) {
    if (!noExitRuntime) {
        if (f.onExit)
            f.onExit(a);
        ta = !0
    }
    da(a, new oa(a))
}
function xc(a) {
    a instanceof oa || "unwind" == a || da(1, a)
}
function yc(a, b, c, d, e) {
    !pc || l("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    pc = a;
    zc = d;
    var h = Ac;
    qc = !1;
    uc = function() {
        if (!ta)
            if (0 < Bc.length) {
                var g = Date.now()
                  , m = Bc.shift();
                m.ki(m.ei);
                if (Cc) {
                    var n = Cc
                      , q = 0 == n % 1 ? n - 1 : Math.floor(n);
                    Cc = m.gi ? q : (8 * n + (q + .5)) / 9
                }
                qa('main loop blocker "' + m.name + '" took ' + (Date.now() - g) + " ms");
                f.setStatus && (g = f.statusMessage || "Please wait...",
                m = Cc,
                n = Dc.ii,
                m ? m < n ? f.setStatus(g + " (" + (n - m) + "/" + n + ")") : f.setStatus(g) : f.setStatus(""));
                h < Ac || setTimeout(uc, 0)
            } else if (!(h < Ac))
                if (Ec = Ec + 1 | 0,
                1 == nc && 1 < oc && 0 != Ec % oc)
                    rc();
                else {
                    0 == nc && (sc = tc());
                    if (N)
                        for (g = N.wg,
                        N.wg = N.Bg,
                        N.Bg = g,
                        g = N.mg,
                        N.mg = N.Ng,
                        N.Ng = g,
                        g = Fc(2097152),
                        m = 0; m <= g; ++m)
                            N.mg[m] = 0;
                    ta || f.preMainLoop && !1 === f.preMainLoop() || (Gc(a),
                    f.postMainLoop && f.postMainLoop());
                    h < Ac || ("object" == typeof SDL && SDL.audio && SDL.audio.Xh && SDL.audio.Xh(),
                    rc())
                }
    }
    ;
    e || (b && 0 < b ? mc(0, 1E3 / b) : mc(1, 1),
    rc());
    if (c)
        throw "unwind";
}
function Gc(a) {
    if (!ta)
        try {
            a()
        } catch (b) {
            xc(b)
        }
}
function Hc(a) {
    setTimeout(function() {
        Gc(a)
    }, 1E4)
}
function Ic(a) {
    Jc || (Jc = {});
    Jc[a] || (Jc[a] = 1,
    ha && (a = "warning: " + a),
    k(a))
}
var Jc, qc = !1, rc = null, Ac = 0, pc = null, zc = 0, nc = 0, oc = 0, Ec = 0, Bc = [], Dc = {}, sc, uc, Cc, Kc = !1, Lc = !1, Mc = [];
function Nc() {
    function a() {
        Lc = document.pointerLockElement === f.canvas || document.mozPointerLockElement === f.canvas || document.webkitPointerLockElement === f.canvas || document.msPointerLockElement === f.canvas
    }
    f.preloadPlugins || (f.preloadPlugins = []);
    if (!Oc) {
        Oc = !0;
        try {
            Pc = !0
        } catch (c) {
            Pc = !1,
            k("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Qc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Pc ? null : k("warning: no BlobBuilder");
        Rc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        f.sh || "undefined" != typeof Rc || (k("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
        f.sh = !0);
        f.preloadPlugins.push({
            canHandle: function(c) {
                return !f.sh && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, h) {
                var g = null;
                if (Pc)
                    try {
                        g = new Blob([c],{
                            type: Sc(d)
                        }),
                        g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer],{
                            type: Sc(d)
                        }))
                    } catch (q) {
                        Ic("Blob constructor present but fails: " + q + "; falling back to blob builder")
                    }
                g || (g = new Qc,
                g.append((new Uint8Array(c)).buffer),
                g = g.getBlob());
                var m = Rc.createObjectURL(g)
                  , n = new Image;
                n.onload = ()=>{
                    n.complete || l("Image " + d + " could not be decoded");
                    var q = document.createElement("canvas");
                    q.width = n.width;
                    q.height = n.height;
                    q.getContext("2d").drawImage(n, 0, 0);
                    Rc.revokeObjectURL(m);
                    e && e(c)
                }
                ;
                n.onerror = ()=>{
                    qa("Image " + m + " could not be decoded");
                    h && h()
                }
                ;
                n.src = m
            }
        });
        f.preloadPlugins.push({
            canHandle: function(c) {
                return !f.si && c.substr(-4)in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function(c, d, e, h) {
                function g() {
                    n || (n = !0,
                    e && e(c))
                }
                function m() {
                    n || (n = !0,
                    new Audio,
                    h && h())
                }
                var n = !1;
                if (Pc) {
                    try {
                        var q = new Blob([c],{
                            type: Sc(d)
                        })
                    } catch (t) {
                        return m()
                    }
                    q = Rc.createObjectURL(q);
                    var p = new Audio;
                    p.addEventListener("canplaythrough", ()=>g(p), !1);
                    p.onerror = function() {
                        if (!n) {
                            k("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                            for (var t = "", u = 0, x = 0, C = 0; C < c.length; C++)
                                for (u = u << 8 | c[C],
                                x += 8; 6 <= x; ) {
                                    var F = u >> x - 6 & 63;
                                    x -= 6;
                                    t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[F]
                                }
                            2 == x ? (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(u & 3) << 4],
                            t += "==") : 4 == x && (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(u & 15) << 2],
                            t += "=");
                            p.src = "data:audio/x-" + d.substr(-3) + ";base64," + t;
                            g(p)
                        }
                    }
                    ;
                    p.src = q;
                    Hc(function() {
                        g(p)
                    })
                } else
                    return m()
            }
        });
        var b = f.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (()=>{}
        ),
        b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (()=>{}
        ),
        b.exitPointerLock = b.exitPointerLock.bind(document),
        document.addEventListener("pointerlockchange", a, !1),
        document.addEventListener("mozpointerlockchange", a, !1),
        document.addEventListener("webkitpointerlockchange", a, !1),
        document.addEventListener("mspointerlockchange", a, !1),
        f.elementPointerLock && b.addEventListener("click", c=>{
            !Lc && f.canvas.requestPointerLock && (f.canvas.requestPointerLock(),
            c.preventDefault())
        }
        , !1))
    }
}
function dc(a, b, c, d) {
    Nc();
    var e = !1;
    f.preloadPlugins.forEach(function(h) {
        !e && h.canHandle(b) && (h.handle(a, b, c, d),
        e = !0)
    });
    return e
}
function Tc(a, b, c, d) {
    if (b && f.eg && a == f.canvas)
        return f.eg;
    var e;
    if (b) {
        var h = {
            antialias: !1,
            alpha: !1,
            oh: 2
        };
        if (d)
            for (var g in d)
                h[g] = d[g];
        if ("undefined" != typeof Uc && (e = Vc(a, h)))
            var m = Wc[e].ig
    } else
        m = a.getContext("2d");
    if (!m)
        return null;
    c && (b || "undefined" == typeof O || l("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
    f.eg = m,
    b && Xc(e),
    f.bi = b,
    Mc.forEach(function(n) {
        n()
    }),
    Nc());
    return m
}
var Yc = !1
  , Zc = void 0
  , $c = void 0;
function ad(a, b) {
    function c() {
        Kc = !1;
        var h = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === h ? (d.exitFullscreen = bd,
        Zc && d.requestPointerLock(),
        Kc = !0,
        $c ? ("undefined" != typeof SDL && (z[SDL.screen >> 2] = A[SDL.screen >> 2] | 8388608),
        cd(f.canvas),
        dd()) : cd(d)) : (h.parentNode.insertBefore(d, h),
        h.parentNode.removeChild(h),
        $c ? ("undefined" != typeof SDL && (z[SDL.screen >> 2] = A[SDL.screen >> 2] & -8388609),
        cd(f.canvas),
        dd()) : cd(d));
        if (f.onFullScreen)
            f.onFullScreen(Kc);
        if (f.onFullscreen)
            f.onFullscreen(Kc)
    }
    Zc = a;
    $c = b;
    "undefined" == typeof Zc && (Zc = !0);
    "undefined" == typeof $c && ($c = !1);
    var d = f.canvas;
    Yc || (Yc = !0,
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
function bd() {
    if (!Kc)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}
    ).apply(document, []);
    return !0
}
var ed = 0;
function vc(a) {
    if ("function" == typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === ed)
            ed = b + 1E3 / 60;
        else
            for (; b + 2 >= ed; )
                ed += 1E3 / 60;
        setTimeout(a, Math.max(ed - b, 0))
    }
}
function Sc(a) {
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
var fd = [];
function dd() {
    var a = f.canvas;
    fd.forEach(function(b) {
        b(a.width, a.height)
    })
}
function cd(a, b, c) {
    b && c ? (a.ci = b,
    a.Qh = c) : (b = a.ci,
    c = a.Qh);
    var d = b
      , e = c;
    f.forcedAspectRatio && 0 < f.forcedAspectRatio && (d / e < f.forcedAspectRatio ? d = Math.round(e * f.forcedAspectRatio) : e = Math.round(d / f.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var h = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * h);
        e = Math.round(e * h)
    }
    $c ? (a.width != d && (a.width = d),
    a.height != e && (a.height = e),
    "undefined" != typeof a.style && (a.style.removeProperty("width"),
    a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
    a.height != c && (a.height = c),
    "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
    a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
    a.style.removeProperty("height"))))
}
var Oc, Pc, Qc, Rc, P = 12288, gd = !1, hd = 0, jd = 0, kd = 0, Q = {
    alpha: !1,
    depth: !1,
    stencil: !1,
    antialias: !1
}, ld = {}, md, nd = 1, od = [], S = [], pd = [], qd = [], rd = [], T = [], sd = [], Wc = [], W = [], td = [], ud = [], vd = [], wd = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8], xd = {}, yd = {};
function X(a) {
    zd || (zd = a)
}
function Ad(a) {
    for (var b = nd++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
function Fc(a) {
    return 32 - Math.clz32(0 === a ? 0 : a - 1)
}
function Bd(a) {
    a = Fc(a);
    var b = N.vg[a];
    if (b)
        return b;
    b = O.getParameter(34965);
    N.vg[a] = O.createBuffer();
    O.bindBuffer(34963, N.vg[a]);
    O.bufferData(34963, 1 << a, 35048);
    O.bindBuffer(34963, b);
    return N.vg[a]
}
function Cd(a) {
    Dd = !1;
    for (var b = 0; b < N.ph; ++b) {
        var c = N.pg[b];
        if (c.Pg && c.enabled) {
            Dd = !0;
            var d = c.Yg;
            d = 0 < d ? a * d : c.size * wd[c.type - 5120] * a;
            var e = Fc(d);
            var h = N.wg[e]
              , g = N.mg[e];
            N.mg[e] = N.mg[e] + 1 & 63;
            var m = h[g];
            m ? e = m : (m = O.getParameter(34964),
            h[g] = O.createBuffer(),
            O.bindBuffer(34962, h[g]),
            O.bufferData(34962, 1 << e, 35048),
            O.bindBuffer(34962, m),
            e = h[g]);
            O.bindBuffer(34962, e);
            O.bufferSubData(34962, 0, v.subarray(c.dg, c.dg + d));
            c.zh.call(O, b, c.size, c.type, c.th, c.Yg, 0)
        }
    }
}
function Ed() {
    Dd && O.bindBuffer(34962, od[O.Fg])
}
function Vc(a, b) {
    a.Tf || (a.Tf = a.getContext,
    a.getContext = function(d, e) {
        e = a.Tf(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    }
    );
    var c = a.getContext("webgl2", b);
    return c ? Fd(c, b) : 0
}
function Fd(a, b) {
    var c = Ad(Wc)
      , d = {
        mi: c,
        attributes: b,
        version: b.oh,
        ig: a
    };
    a.canvas && (a.canvas.xg = d);
    Wc[c] = d;
    ("undefined" == typeof b.Mh || b.Mh) && Gd(d);
    d.ph = d.ig.getParameter(34921);
    d.pg = [];
    for (a = 0; a < d.ph; a++)
        d.pg[a] = {
            enabled: !1,
            Pg: !1,
            size: 0,
            type: 0,
            th: 0,
            Yg: 0,
            dg: 0,
            zh: null
        };
    a = Fc(2097152);
    d.mg = [];
    d.Ng = [];
    d.mg.length = d.Ng.length = a + 1;
    d.wg = [];
    d.Bg = [];
    d.wg.length = d.Bg.length = a + 1;
    d.vg = [];
    d.vg.length = a + 1;
    for (b = 0; b <= a; ++b) {
        d.vg[b] = null;
        d.mg[b] = d.Ng[b] = 0;
        d.wg[b] = [];
        d.Bg[b] = [];
        var e = d.wg[b]
          , h = d.Bg[b];
        e.length = h.length = 64;
        for (var g = 0; 64 > g; ++g)
            e[g] = h[g] = null
    }
    return c
}
function Xc(a) {
    N = Wc[a];
    f.eg = O = N && N.ig
}
function Gd(a) {
    a || (a = N);
    if (!a.Sh) {
        a.Sh = !0;
        var b = a.ig;
        b.hi = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
        b.oi = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
        2 <= a.version && (b.Xf = b.getExtension("EXT_disjoint_timer_query_webgl2"));
        if (2 > a.version || !b.Xf)
            b.Xf = b.getExtension("EXT_disjoint_timer_query");
        b.ri = b.getExtension("WEBGL_multi_draw");
        (b.getSupportedExtensions() || []).forEach(function(c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        })
    }
}
var Uc = {}, zd, N, Dd;
function Hd(a) {
    var b = xa(a) + 1
      , c = I(b);
    c && wa(a, y, c, b);
    return c
}
var Id = [];
function Jd(a, b) {
    Id.length = 0;
    var c;
    for (b >>= 2; c = v[a++]; )
        b += 105 != c & b,
        Id.push(105 == c ? z[b] : D[b++ >> 1]),
        ++b;
    return Id
}
function Kd(a) {
    var b = Ld();
    a = a();
    Md(b);
    return a
}
var Nd = 0;
function Od() {
    for (var a = Pd.length - 1; 0 <= a; --a)
        Qd(a);
    Pd = [];
    Rd = []
}
var Rd = [];
function Sd(a, b, c) {
    function d(g, m) {
        if (g.length != m.length)
            return !1;
        for (var n in g)
            if (g[n] != m[n])
                return !1;
        return !0
    }
    for (var e in Rd) {
        var h = Rd[e];
        if (h.Zg == a && d(h.dh, c))
            return
    }
    Rd.push({
        Zg: a,
        vh: b,
        dh: c
    });
    Rd.sort(function(g, m) {
        return g.vh < m.vh
    })
}
function Td(a) {
    for (var b = 0; b < Rd.length; ++b)
        Rd[b].Zg == a && (Rd.splice(b, 1),
        --b)
}
function Ud() {
    if (Nd && Vd.og)
        for (var a = 0; a < Rd.length; ++a) {
            var b = Rd[a];
            Rd.splice(a, 1);
            --a;
            b.Zg.apply(null, b.dh)
        }
}
var Pd = [];
function Qd(a) {
    var b = Pd[a];
    b.target.removeEventListener(b.Wf, b.Nh, b.ag);
    Pd.splice(a, 1)
}
function Wd(a) {
    function b(d) {
        ++Nd;
        Vd = a;
        Ud();
        a.cg(d);
        Ud();
        --Nd
    }
    if (a.bg)
        a.Nh = b,
        a.target.addEventListener(a.Wf, b, a.ag),
        Pd.push(a),
        Xd || (Fa.push(Od),
        Xd = !0);
    else
        for (var c = 0; c < Pd.length; ++c)
            Pd[c].target == a.target && Pd[c].Wf == a.Wf && Qd(c--)
}
function Yd(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}
function Zd() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var $d = {}, Xd, Vd, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me = {}, ne = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];
function Y(a) {
    a = 2 < a ? r(a) : a;
    return ne[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0)
}
function oe(a) {
    return Kd(function() {
        var b = pe(8)
          , c = b + 4
          , d = pe(a.id.length + 1);
        w(a.id, d, a.id.length + 1);
        if (d = Y(d))
            z[b >> 2] = d.width,
            z[c >> 2] = d.height;
        return [z[b >> 2], z[c >> 2]]
    })
}
function qe(a, b, c) {
    a = Y(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
function re(a, b, c) {
    a.fi ? Kd(function() {
        var d = pe(a.id.length + 1);
        w(a.id, d, a.id.length + 1);
        qe(d, b, c)
    }) : (a.width = b,
    a.height = c)
}
function se(a) {
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b),
        document.removeEventListener("webkitfullscreenchange", b),
        re(a, d, e),
        a.style.width = h,
        a.style.height = g,
        a.style.backgroundColor = m,
        n || (document.body.style.backgroundColor = "white"),
        document.body.style.backgroundColor = n,
        a.style.paddingLeft = q,
        a.style.paddingRight = p,
        a.style.paddingTop = t,
        a.style.paddingBottom = u,
        a.style.marginLeft = x,
        a.style.marginRight = C,
        a.style.marginTop = F,
        a.style.marginBottom = U,
        document.body.style.margin = V,
        document.documentElement.style.overflow = pa,
        document.body.scroll = lc,
        a.style.lg = R,
        a.xg && a.xg.ig.viewport(0, 0, d, e),
        me.Eg && J(me.Eg)(37, 0, me.fh))
    }
    var c = oe(a)
      , d = c[0]
      , e = c[1]
      , h = a.style.width
      , g = a.style.height
      , m = a.style.backgroundColor
      , n = document.body.style.backgroundColor
      , q = a.style.paddingLeft
      , p = a.style.paddingRight
      , t = a.style.paddingTop
      , u = a.style.paddingBottom
      , x = a.style.marginLeft
      , C = a.style.marginRight
      , F = a.style.marginTop
      , U = a.style.marginBottom
      , V = document.body.style.margin
      , pa = document.documentElement.style.overflow
      , lc = document.body.scroll
      , R = a.style.lg;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
function te(a, b, c) {
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
function ue(a) {
    return 0 > ne.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}
function ve(a, b) {
    if (0 != b.Xg || 0 != b.Og) {
        se(a);
        var c = b.$h ? innerWidth : screen.width
          , d = b.$h ? innerHeight : screen.height
          , e = ue(a)
          , h = e.width;
        e = e.height;
        var g = oe(a)
          , m = g[0];
        g = g[1];
        3 == b.Xg ? (te(a, (d - e) / 2, (c - h) / 2),
        c = h,
        d = e) : 2 == b.Xg && (c * g < m * d ? (h = g * c / m,
        te(a, (d - h) / 2, 0),
        d = h) : (h = m * d / g,
        te(a, 0, (c - h) / 2),
        c = h));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.Oh && (a.style.lg = "optimizeSpeed",
        a.style.lg = "-moz-crisp-edges",
        a.style.lg = "-o-crisp-edges",
        a.style.lg = "-webkit-optimize-contrast",
        a.style.lg = "optimize-contrast",
        a.style.lg = "crisp-edges",
        a.style.lg = "pixelated");
        h = 2 == b.Og ? devicePixelRatio : 1;
        0 != b.Og && (c = c * h | 0,
        d = d * h | 0,
        re(a, c, d),
        a.xg && a.xg.ig.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return Zd() ? -3 : -1;
    me = b;
    b.Eg && J(b.Eg)(37, 0, b.fh);
    return 0
}
function we(a) {
    if (a.requestPointerLock)
        a.requestPointerLock();
    else if (a.Lg)
        a.Lg();
    else
        return document.body.requestPointerLock || document.body.Lg ? -3 : -1;
    return 0
}
function xe(a, b) {
    D[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        D[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        D[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        z[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    z[a + 1296 >> 2] = b.connected;
    z[a + 1300 >> 2] = b.index;
    z[a + 8 >> 2] = b.axes.length;
    z[a + 12 >> 2] = b.buttons.length;
    w(b.id, a + 1304, 64);
    w(b.mapping, a + 1368, 64)
}
var ye = [];
function ze(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var h = O[c]()
          , g = h && Ad(d);
        h ? (h.name = g,
        d[g] = h) : X(1282);
        z[b + 4 * e >> 2] = g
    }
}
function Ae(a, b, c, d, e, h, g, m) {
    b = S[b];
    if (a = O[a](b, c))
        d = m && w(a.name, m, d),
        e && (z[e >> 2] = d),
        h && (z[h >> 2] = a.size),
        g && (z[g >> 2] = a.type)
}
function Be(a, b) {
    A[a >> 2] = b;
    A[a + 4 >> 2] = (b - A[a >> 2]) / 4294967296
}
function Ce(a, b, c) {
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
            var e = O.getParameter(34467);
            d = e ? e.length : 0;
            break;
        case 33309:
            if (2 > N.version) {
                X(1282);
                return
            }
            d = 2 * (O.getSupportedExtensions() || []).length;
            break;
        case 33307:
        case 33308:
            if (2 > N.version) {
                X(1280);
                return
            }
            d = 33307 == a ? 3 : 0
        }
        if (void 0 === d)
            switch (e = O.getParameter(a),
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
                                B[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                y[b + a >> 0] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (h) {
                        X(1280);
                        k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + h + ")");
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
            Be(b, d);
            break;
        case 0:
            z[b >> 2] = d;
            break;
        case 2:
            B[b >> 2] = d;
            break;
        case 4:
            y[b >> 0] = d ? 1 : 0
        }
    } else
        X(1281)
}
function De(a, b, c, d) {
    if (c) {
        b = O.getIndexedParameter(a, b);
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
            Be(c, a);
            break;
        case 0:
            z[c >> 2] = a;
            break;
        case 2:
            B[c >> 2] = a;
            break;
        case 4:
            y[c >> 0] = a ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
        }
    } else
        X(1281)
}
function Ee(a) {
    var b = xa(a) + 1
      , c = I(b);
    w(a, c, b);
    return c
}
function Fe(a) {
    return "]" == a.slice(-1) && a.lastIndexOf("[")
}
function Ge(a) {
    var b = a.Cg, c = a.yh, d;
    if (!b)
        for (a.Cg = b = {},
        a.xh = {},
        d = 0; d < O.getProgramParameter(a, 35718); ++d) {
            var e = O.getActiveUniform(a, d);
            var h = e.name;
            e = e.size;
            var g = Fe(h);
            g = 0 < g ? h.slice(0, g) : h;
            var m = a.$g;
            a.$g += e;
            c[g] = [e, m];
            for (h = 0; h < e; ++h)
                b[m] = h,
                a.xh[m++] = g
        }
}
function Z(a) {
    var b = O.Hh;
    if (b) {
        var c = b.Cg[a];
        "number" == typeof c && (b.Cg[a] = c = O.getUniformLocation(b, b.xh[a] + (0 < c ? "[" + c + "]" : "")));
        return c
    }
    X(1282)
}
function He(a, b, c, d) {
    if (c)
        if (a = S[a],
        Ge(a),
        a = O.getUniform(a, Z(b)),
        "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                z[c >> 2] = a;
                break;
            case 2:
                B[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    z[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    B[c + 4 * b >> 2] = a[b]
                }
    else
        X(1281)
}
function Ie(a, b, c, d) {
    if (c)
        if (N.pg[a].enabled && k("glGetVertexAttrib*v on client-side array: not supported, bad data returned"),
        a = O.getVertexAttrib(a, b),
        34975 == b)
            z[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                z[c >> 2] = a;
                break;
            case 2:
                B[c >> 2] = a;
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
                    B[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    z[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        X(1281)
}
function Je(a) {
    a -= 5120;
    return 0 == a ? y : 1 == a ? v : 2 == a ? za : 4 == a ? z : 6 == a ? B : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? A : Aa
}
function Ke(a) {
    return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
}
function Le(a, b) {
    if (!Zd())
        return -1;
    a = Y(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? Nd && Vd.og ? ve(a, b) : b.Lh ? (Sd(ve, 1, [a, b]),
    1) : -2 : -3 : -4
}
function Me(a, b) {
    var c = {
        target: Y(2),
        Wf: "beforeunload",
        bg: b,
        cg: function(d) {
            d = d || event;
            var e = J(b)(28, 0, a);
            e && (e = r(e));
            if (e)
                return d.preventDefault(),
                d.returnValue = e
        },
        ag: !0
    };
    Wd(c)
}
function Ne(a, b, c, d, e, h) {
    be || (be = I(256));
    a = {
        target: Y(a),
        Wf: h,
        bg: d,
        cg: function(g) {
            g = g || event;
            var m = g.target.id ? g.target.id : ""
              , n = be;
            w(Yd(g.target), n + 0, 128);
            w(m, n + 128, 128);
            J(d)(e, n, b) && g.preventDefault()
        },
        ag: c
    };
    Wd(a)
}
function Oe(a, b, c, d, e) {
    de || (de = I(280));
    Wd({
        target: a,
        Wf: e,
        bg: d,
        cg: function(h) {
            h = h || event;
            var g = de
              , m = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              , n = !!m;
            z[g >> 2] = n;
            z[g + 4 >> 2] = Zd();
            var q = n ? m : ce
              , p = q && q.id ? q.id : "";
            w(Yd(q), g + 8, 128);
            w(p, g + 136, 128);
            z[g + 264 >> 2] = q ? q.clientWidth : 0;
            z[g + 268 >> 2] = q ? q.clientHeight : 0;
            z[g + 272 >> 2] = screen.width;
            z[g + 276 >> 2] = screen.height;
            n && (ce = m);
            J(d)(19, g, b) && h.preventDefault()
        },
        ag: c
    })
}
function Pe(a, b, c, d, e) {
    ee || (ee = I(1432));
    b = {
        target: Y(2),
        og: !0,
        Wf: e,
        bg: c,
        cg: function(h) {
            h = h || event;
            var g = ee;
            xe(g, h.gamepad);
            J(c)(d, g, a) && h.preventDefault()
        },
        ag: b
    };
    Wd(b)
}
function Qe(a, b, c, d, e, h) {
    fe || (fe = I(176));
    a = {
        target: Y(a),
        og: !0,
        Wf: h,
        bg: d,
        cg: function(g) {
            var m = fe;
            D[m >> 3] = g.timeStamp;
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
            J(d)(e, m, b) && g.preventDefault()
        },
        ag: c
    };
    Wd(a)
}
function Re(a, b, c) {
    D[a >> 3] = b.timeStamp;
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
    c = ue(c);
    z[a + 13] = b.clientX - c.left;
    z[a + 14] = b.clientY - c.top
}
function Se(a, b, c, d, e, h) {
    ge || (ge = I(72));
    a = Y(a);
    Wd({
        target: a,
        og: "mousemove" != h && "mouseenter" != h && "mouseleave" != h,
        Wf: h,
        bg: d,
        cg: function(g) {
            g = g || event;
            Re(ge, g, a);
            J(d)(e, ge, b) && g.preventDefault()
        },
        ag: c
    })
}
function Te(a, b, c, d, e) {
    he || (he = I(260));
    Wd({
        target: a,
        Wf: e,
        bg: d,
        cg: function(h) {
            h = h || event;
            var g = he
              , m = document.pointerLockElement || document.ng || document.ah || document.Dg;
            z[g >> 2] = !!m;
            var n = m && m.id ? m.id : "";
            w(Yd(m), g + 4, 128);
            w(n, g + 132, 128);
            J(d)(20, g, b) && h.preventDefault()
        },
        ag: c
    })
}
function Ue(a, b, c, d) {
    ie || (ie = I(36));
    a = Y(a);
    Wd({
        target: a,
        Wf: "resize",
        bg: d,
        cg: function(e) {
            e = e || event;
            if (e.target == a) {
                var h = document.body;
                if (h) {
                    var g = ie;
                    z[g >> 2] = e.detail;
                    z[g + 4 >> 2] = h.clientWidth;
                    z[g + 8 >> 2] = h.clientHeight;
                    z[g + 12 >> 2] = innerWidth;
                    z[g + 16 >> 2] = innerHeight;
                    z[g + 20 >> 2] = outerWidth;
                    z[g + 24 >> 2] = outerHeight;
                    z[g + 28 >> 2] = pageXOffset;
                    z[g + 32 >> 2] = pageYOffset;
                    J(d)(10, g, b) && e.preventDefault()
                }
            }
        },
        ag: c
    })
}
function Ve(a, b, c, d, e, h) {
    je || (je = I(1696));
    a = Y(a);
    Wd({
        target: a,
        og: "touchstart" == h || "touchend" == h,
        Wf: h,
        bg: d,
        cg: function(g) {
            for (var m, n = {}, q = g.touches, p = 0; p < q.length; ++p)
                m = q[p],
                m.mh = m.uh = 0,
                n[m.identifier] = m;
            for (p = 0; p < g.changedTouches.length; ++p)
                m = g.changedTouches[p],
                m.mh = 1,
                n[m.identifier] = m;
            for (p = 0; p < g.targetTouches.length; ++p)
                n[g.targetTouches[p].identifier].uh = 1;
            q = je;
            D[q >> 3] = g.timeStamp;
            var t = q >> 2;
            z[t + 3] = g.ctrlKey;
            z[t + 4] = g.shiftKey;
            z[t + 5] = g.altKey;
            z[t + 6] = g.metaKey;
            t += 7;
            var u = ue(a)
              , x = 0;
            for (p in n)
                if (m = n[p],
                z[t] = m.identifier,
                z[t + 1] = m.screenX,
                z[t + 2] = m.screenY,
                z[t + 3] = m.clientX,
                z[t + 4] = m.clientY,
                z[t + 5] = m.pageX,
                z[t + 6] = m.pageY,
                z[t + 7] = m.mh,
                z[t + 8] = m.uh,
                z[t + 9] = m.clientX - u.left,
                z[t + 10] = m.clientY - u.top,
                t += 13,
                31 < ++x)
                    break;
            z[q + 8 >> 2] = x;
            J(d)(e, q, b) && g.preventDefault()
        },
        ag: c
    })
}
function We(a, b, c) {
    var d = ne[1];
    ke || (ke = I(8));
    Wd({
        target: d,
        Wf: "visibilitychange",
        bg: c,
        cg: function(e) {
            e = e || event;
            var h = ke
              , g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            z[h >> 2] = document.hidden;
            z[h + 4 >> 2] = g;
            J(c)(21, h, a) && e.preventDefault()
        },
        ag: b
    })
}
function Xe(a, b, c, d) {
    le || (le = I(104));
    Wd({
        target: a,
        og: !0,
        Wf: "wheel",
        bg: d,
        cg: function(e) {
            e = e || event;
            var h = le;
            Re(h, e, a);
            D[h + 72 >> 3] = e.deltaX;
            D[h + 80 >> 3] = e.deltaY;
            D[h + 88 >> 3] = e.deltaZ;
            z[h + 96 >> 2] = e.deltaMode;
            J(d)(9, h, b) && e.preventDefault()
        },
        ag: c
    })
}
var Ye = {
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
function Ze(a) {
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
function Cb(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.jg = a.jg;
    this.zg = null;
    this.id = ub++;
    this.name = b;
    this.mode = c;
    this.Qf = {};
    this.Sf = {};
    this.rdev = d
}
Object.defineProperties(Cb.prototype, {
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
    Vh: {
        get: function() {
            return 16384 === (this.mode & 61440)
        }
    },
    Uh: {
        get: function() {
            return 8192 === (this.mode & 61440)
        }
    }
});
Vb();
vb = Array(4096);
Jb(L, "/");
M("/tmp", 16895, 0);
M("/home", 16895, 0);
M("/home/web_user", 16895, 0);
(()=>{
    M("/dev", 16895, 0);
    ib(259, {
        read: ()=>0,
        write: (b,c,d,e)=>e
    });
    Kb("/dev/null", 259);
    hb(1280, kb);
    hb(1536, lb);
    Kb("/dev/tty", 1280);
    Kb("/dev/tty1", 1536);
    var a = db();
    ac("/dev", "random", a);
    ac("/dev", "urandom", a);
    M("/dev/shm", 16895, 0);
    M("/dev/shm/tmp", 16895, 0)
}
)();
(()=>{
    M("/proc", 16895, 0);
    var a = M("/proc/self", 16895, 0);
    M("/proc/self/fd", 16895, 0);
    Jb({
        jg: ()=>{
            var b = nb(a, "fd", 16895, 73);
            b.Qf = {
                lookup: (c,d)=>{
                    var e = tb[+d];
                    if (!e)
                        throw new K(8);
                    c = {
                        parent: null,
                        jg: {
                            qh: "fake"
                        },
                        Qf: {
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
f.FS_createPath = Yb;
f.FS_createDataFile = $b;
f.FS_createPreloadedFile = ec;
f.FS_unlink = Mb;
f.FS_createLazyFile = cc;
f.FS_createDevice = ac;
f.requestFullscreen = function(a, b) {
    ad(a, b)
}
;
f.requestAnimationFrame = function(a) {
    vc(a)
}
;
f.setCanvasSize = function(a, b, c) {
    cd(f.canvas, a, b);
    c || dd()
}
;
f.pauseMainLoop = function() {
    rc = null;
    Ac++
}
;
f.resumeMainLoop = function() {
    Ac++;
    var a = nc
      , b = oc
      , c = pc;
    pc = null;
    yc(c, 0, !1, zc, !0);
    mc(a, b);
    rc()
}
;
f.getUserMedia = function() {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
}
;
f.createContext = function(a, b, c, d) {
    return Tc(a, b, c, d)
}
;
for (var O, $e = 0; 32 > $e; ++$e)
    ye.push(Array($e));
var bf = {
    h: function(a, b, c, d) {
        l("Assertion failed: " + r(a) + ", at: " + [b ? r(b) : "unknown filename", c, d ? r(d) : "unknown function"])
    },
    M: function(a) {
        return I(a + 24) + 24
    },
    H: function(a, b, c) {
        (new Ya(a)).Tf(b, c);
        Za++;
        throw a;
    },
    J: function(a, b, c) {
        jc = c;
        try {
            var d = hc(a);
            switch (b) {
            case 0:
                var e = kc();
                return 0 > e ? -28 : Ib(d, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = kc(),
                d.flags |= e,
                0;
            case 5:
                return e = kc(),
                za[e + 0 >> 1] = 2,
                0;
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return z[af() >> 2] = 28,
                -1;
            default:
                return -28
            }
        } catch (h) {
            if ("undefined" == typeof fc || !(h instanceof K))
                throw h;
            return -h.Yf
        }
    },
    Ma: function(a, b) {
        try {
            if (0 === b)
                return -28;
            var c = xa("/") + 1;
            if (b < c)
                return -68;
            w("/", a, b);
            return c
        } catch (d) {
            if ("undefined" == typeof fc || !(d instanceof K))
                throw d;
            return -d.Yf
        }
    },
    Ka: function(a, b, c) {
        try {
            var d = hc(a);
            if (!d.qg) {
                var e = yb(d.path, {
                    yg: !0
                }).node;
                if (!e.Qf.readdir)
                    throw new K(54);
                var h = e.Qf.readdir(e);
                d.qg = h
            }
            a = 0;
            for (var g = Tb(d, 0, 1), m = Math.floor(g / 280); m < d.qg.length && a + 280 <= c; ) {
                var n = d.qg[m];
                if ("." === n) {
                    var q = d.node.id;
                    var p = 4
                } else if (".." === n)
                    q = yb(d.path, {
                        parent: !0
                    }).node.id,
                    p = 4;
                else {
                    var t = pb(d.node, n);
                    q = t.id;
                    p = 8192 === (t.mode & 61440) ? 2 : 16384 === (t.mode & 61440) ? 4 : 40960 === (t.mode & 61440) ? 10 : 8
                }
                H = [q >>> 0, (G = q,
                1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                z[b + a >> 2] = H[0];
                z[b + a + 4 >> 2] = H[1];
                H = [280 * (m + 1) >>> 0, (G = 280 * (m + 1),
                1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                z[b + a + 8 >> 2] = H[0];
                z[b + a + 12 >> 2] = H[1];
                za[b + a + 16 >> 1] = 280;
                y[b + a + 18 >> 0] = p;
                w(n, b + a + 19, 256);
                a += 280;
                m += 1
            }
            Tb(d, 280 * m, 0);
            return a
        } catch (u) {
            if ("undefined" == typeof fc || !(u instanceof K))
                throw u;
            return -u.Yf
        }
    },
    Pa: function(a, b, c) {
        jc = c;
        try {
            var d = hc(a);
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
                var e = kc();
                return z[e >> 2] = 0;
            case 21520:
                return d.tty ? -28 : -59;
            case 21531:
                a = e = kc();
                if (!d.Sf.Th)
                    throw new K(59);
                return d.Sf.Th(d, b, a);
            case 21523:
                return d.tty ? 0 : -59;
            case 21524:
                return d.tty ? 0 : -59;
            default:
                return -28
            }
        } catch (h) {
            if ("undefined" == typeof fc || !(h instanceof K))
                throw h;
            return -h.Yf
        }
    },
    Ha: function(a, b) {
        try {
            return a = r(a),
            ic(Ob, a, b)
        } catch (c) {
            if ("undefined" == typeof fc || !(c instanceof K))
                throw c;
            return -c.Yf
        }
    },
    Ja: function(a, b, c, d) {
        try {
            b = r(b);
            var e = d & 256;
            b = gc(a, b, d & 4096);
            return ic(e ? Ob : Nb, b, c)
        } catch (h) {
            if ("undefined" == typeof fc || !(h instanceof K))
                throw h;
            return -h.Yf
        }
    },
    K: function(a, b, c, d) {
        jc = d;
        try {
            b = r(b);
            b = gc(a, b);
            var e = d ? kc() : 0;
            return Rb(b, c, e).fd
        } catch (h) {
            if ("undefined" == typeof fc || !(h instanceof K))
                throw h;
            return -h.Yf
        }
    },
    Ia: function(a, b) {
        try {
            return a = r(a),
            ic(Nb, a, b)
        } catch (c) {
            if ("undefined" == typeof fc || !(c instanceof K))
                throw c;
            return -c.Yf
        }
    },
    Ra: function() {
        return !0
    },
    j: function() {
        l("")
    },
    sb: function(a) {
        if (12448 == a)
            return P = 12288,
            1;
        P = 12300;
        return 0
    },
    Fd: function(a, b, c, d, e) {
        if (62E3 != a)
            P = 12296,
            c = 0;
        else {
            if (b)
                for (; ; ) {
                    a = z[b >> 2];
                    if (12321 == a)
                        Q.alpha = 0 < z[b + 4 >> 2];
                    else if (12325 == a)
                        Q.depth = 0 < z[b + 4 >> 2];
                    else if (12326 == a)
                        Q.stencil = 0 < z[b + 4 >> 2];
                    else if (12337 == a)
                        a = z[b + 4 >> 2],
                        Q.antialias = 0 < a;
                    else if (12338 == a)
                        a = z[b + 4 >> 2],
                        Q.antialias = 1 == a;
                    else if (12544 == a)
                        Q.ni = 12547 != z[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (z[e >> 2] = 1),
            c && 0 < d && (z[c >> 2] = 62002),
            P = 12288,
            c = 1) : (P = 12300,
            c = 0)
        }
        return c
    },
    jd: function(a, b, c, d) {
        if (62E3 != a)
            return P = 12296,
            0;
        for (a = 1; ; ) {
            b = z[d >> 2];
            if (12440 == b)
                a = z[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return P = 12292,
                0;
            d += 8
        }
        if (2 > a || 3 < a)
            return P = 12293,
            0;
        Q.oh = a - 1;
        Q.pi = 0;
        md = Vc(f.canvas, Q);
        if (0 != md)
            return P = 12288,
            Xc(md),
            f.bi = !0,
            Mc.forEach(function(e) {
                e()
            }),
            Xc(null),
            62004;
        P = 12297;
        return 0
    },
    Pc: function(a, b) {
        if (62E3 != a)
            return P = 12296,
            0;
        if (62002 != b)
            return P = 12293,
            0;
        P = 12288;
        return 62006
    },
    _c: function(a, b) {
        if (62E3 != a)
            return P = 12296,
            0;
        if (62004 != b)
            return P = 12294,
            0;
        a = md;
        N === Wc[a] && (N = null);
        if ("object" == typeof $d)
            for (var c = Wc[a].ig.canvas, d = 0; d < Pd.length; ++d)
                Pd[d].target != c || Qd(d--);
        Wc[a] && Wc[a].ig.canvas && (Wc[a].ig.canvas.xg = void 0);
        Wc[a] = null;
        P = 12288;
        hd == b && (hd = 0);
        return 1
    },
    Ec: function(a, b) {
        if (62E3 != a)
            return P = 12296,
            0;
        if (62006 != b)
            return P = 12301,
            1;
        jd == b && (jd = 0);
        kd == b && (kd = 0);
        P = 12288;
        return 1
    },
    ud: function(a, b, c, d) {
        if (62E3 != a)
            return P = 12296,
            0;
        if (62002 != b)
            return P = 12293,
            0;
        if (!d)
            return P = 12300,
            0;
        P = 12288;
        switch (c) {
        case 12320:
            return z[d >> 2] = Q.alpha ? 32 : 24,
            1;
        case 12321:
            return z[d >> 2] = Q.alpha ? 8 : 0,
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
            return z[d >> 2] = Q.depth ? 24 : 0,
            1;
        case 12326:
            return z[d >> 2] = Q.stencil ? 8 : 0,
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
            return z[d >> 2] = Q.antialias ? 4 : 0,
            1;
        case 12338:
            return z[d >> 2] = Q.antialias ? 1 : 0,
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
            return P = 12292,
            0
        }
    },
    N: function() {
        P = 12288;
        return 62E3
    },
    Ya: function() {
        return P
    },
    ae: function(a, b, c) {
        if (62E3 != a)
            return P = 12296,
            0;
        b && (z[b >> 2] = 1);
        c && (z[c >> 2] = 4);
        gd = !0;
        P = 12288;
        return 1
    },
    tc: function(a, b, c, d) {
        if (62E3 != a)
            return P = 12296,
            0;
        if (0 != d && 62004 != d)
            return P = 12294,
            0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return P = 12301,
            0;
        Xc(d ? md : null);
        hd = d;
        kd = b;
        jd = c;
        P = 12288;
        return 1
    },
    hb: function(a, b) {
        if (62E3 != a)
            return P = 12296,
            0;
        P = 12288;
        if (ld[b])
            return ld[b];
        switch (b) {
        case 12371:
            a = Hd("Emscripten");
            break;
        case 12372:
            a = Hd("1.4 Emscripten EGL");
            break;
        case 12373:
            a = Hd("");
            break;
        case 12429:
            a = Hd("OpenGL_ES");
            break;
        default:
            return P = 12300,
            0
        }
        return ld[b] = a
    },
    ic: function() {
        if (gd)
            if (f.eg)
                if (f.eg.isContextLost())
                    P = 12302;
                else
                    return P = 12288,
                    1;
            else
                P = 12290;
        else
            P = 12289;
        return 0
    },
    Zb: function(a, b) {
        if (62E3 != a)
            return P = 12296,
            0;
        0 == b ? mc(0, 0) : mc(1, b);
        P = 12288;
        return 1
    },
    Rd: function(a) {
        if (62E3 != a)
            return P = 12296,
            0;
        kd = jd = hd = 0;
        gd = !1;
        P = 12288;
        return 1
    },
    Db: function() {
        P = 12288;
        return 1
    },
    Ob: function() {
        P = 12288;
        return 1
    },
    ia: function(a, b, c) {
        b = Jd(b, c);
        return Ua[a].apply(null, b)
    },
    a: function(a, b, c) {
        b = Jd(b, c);
        return Ua[a].apply(null, b)
    },
    L: function() {
        return Date.now()
    },
    Aa: function() {
        if (!Zd())
            return -1;
        Td(ve);
        var a = ne[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    },
    Fa: function() {
        Td(we);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else if (document.Tf)
            document.Tf();
        else
            return -1;
        return 0
    },
    d: function() {
        return "number" == typeof devicePixelRatio && devicePixelRatio || 1
    },
    b: function(a, b, c) {
        a = Y(a);
        if (!a)
            return -4;
        a = ue(a);
        D[b >> 3] = a.width;
        D[c >> 3] = a.height;
        return 0
    },
    O: function(a, b) {
        if (0 > a || a >= ae.length)
            return -5;
        if (!ae[a])
            return -7;
        xe(b, ae[a]);
        return 0
    },
    k: tc,
    sf: function() {
        return ae.length
    },
    Qa: function(a, b) {
        z[a >> 2] = screen.width;
        z[b >> 2] = screen.height
    },
    ea: function(a) {
        O.activeTexture(a)
    },
    da: function(a, b) {
        O.attachShader(S[a], T[b])
    },
    Lc: function(a, b) {
        O.beginQuery(a, W[b])
    },
    wa: function(a, b) {
        O.Xf.beginQueryEXT(a, W[b])
    },
    qc: function(a) {
        O.beginTransformFeedback(a)
    },
    ca: function(a, b, c) {
        O.bindAttribLocation(S[a], b, r(c))
    },
    ba: function(a, b) {
        34962 == a ? O.Fg = b : 34963 == a && (O.kg = b);
        35051 == a ? O.Rg = b : 35052 == a && (O.fg = b);
        O.bindBuffer(a, od[b])
    },
    nc: function(a, b, c) {
        O.bindBufferBase(a, b, od[c])
    },
    oc: function(a, b, c, d, e) {
        O.bindBufferRange(a, b, od[c], d, e)
    },
    aa: function(a, b) {
        O.bindFramebuffer(a, pd[b])
    },
    $: function(a, b) {
        O.bindRenderbuffer(a, qd[b])
    },
    qb: function(a, b) {
        O.bindSampler(a, td[b])
    },
    _: function(a, b) {
        O.bindTexture(a, rd[b])
    },
    ib: function(a, b) {
        O.bindTransformFeedback(a, ud[b])
    },
    wc: function(a) {
        O.bindVertexArray(sd[a]);
        a = O.getParameter(34965);
        O.kg = a ? a.name | 0 : 0
    },
    na: function(a) {
        O.bindVertexArray(sd[a]);
        a = O.getParameter(34965);
        O.kg = a ? a.name | 0 : 0
    },
    Z: function(a, b, c, d) {
        O.blendColor(a, b, c, d)
    },
    Y: function(a) {
        O.blendEquation(a)
    },
    X: function(a, b) {
        O.blendEquationSeparate(a, b)
    },
    W: function(a, b) {
        O.blendFunc(a, b)
    },
    V: function(a, b, c, d) {
        O.blendFuncSeparate(a, b, c, d)
    },
    zc: function(a, b, c, d, e, h, g, m, n, q) {
        O.blitFramebuffer(a, b, c, d, e, h, g, m, n, q)
    },
    U: function(a, b, c, d) {
        c && b ? O.bufferData(a, v, d, c, b) : O.bufferData(a, b, d)
    },
    T: function(a, b, c, d) {
        c && O.bufferSubData(a, b, v, d, c)
    },
    S: function(a) {
        return O.checkFramebufferStatus(a)
    },
    R: function(a) {
        O.clear(a)
    },
    Qb: function(a, b, c, d) {
        O.clearBufferfi(a, b, c, d)
    },
    Rb: function(a, b, c) {
        O.clearBufferfv(a, b, B, c >> 2)
    },
    Tb: function(a, b, c) {
        O.clearBufferiv(a, b, z, c >> 2)
    },
    Sb: function(a, b, c) {
        O.clearBufferuiv(a, b, A, c >> 2)
    },
    Q: function(a, b, c, d) {
        O.clearColor(a, b, c, d)
    },
    Cf: function(a) {
        O.clearDepth(a)
    },
    Bf: function(a) {
        O.clearStencil(a)
    },
    Ab: function(a, b, c, d) {
        return O.clientWaitSync(vd[a], b, (c >>> 0) + 4294967296 * d)
    },
    Af: function(a, b, c, d) {
        O.colorMask(!!a, !!b, !!c, !!d)
    },
    zf: function(a) {
        O.compileShader(T[a])
    },
    yf: function(a, b, c, d, e, h, g, m) {
        O.fg || !g ? O.compressedTexImage2D(a, b, c, d, e, h, g, m) : O.compressedTexImage2D(a, b, c, d, e, h, v, m, g)
    },
    Rc: function(a, b, c, d, e, h, g, m, n) {
        O.fg ? O.compressedTexImage3D(a, b, c, d, e, h, g, m, n) : O.compressedTexImage3D(a, b, c, d, e, h, g, v, n, m)
    },
    xf: function(a, b, c, d, e, h, g, m, n) {
        O.fg || !m ? O.compressedTexSubImage2D(a, b, c, d, e, h, g, m, n) : O.compressedTexSubImage2D(a, b, c, d, e, h, g, v, n, m)
    },
    Qc: function(a, b, c, d, e, h, g, m, n, q, p) {
        O.fg ? O.compressedTexSubImage3D(a, b, c, d, e, h, g, m, n, q, p) : O.compressedTexSubImage3D(a, b, c, d, e, h, g, m, n, v, p, q)
    },
    Nb: function(a, b, c, d, e) {
        O.copyBufferSubData(a, b, c, d, e)
    },
    wf: function(a, b, c, d, e, h, g, m) {
        O.copyTexImage2D(a, b, c, d, e, h, g, m)
    },
    vf: function(a, b, c, d, e, h, g, m) {
        O.copyTexSubImage2D(a, b, c, d, e, h, g, m)
    },
    Sc: function(a, b, c, d, e, h, g, m, n) {
        O.copyTexSubImage3D(a, b, c, d, e, h, g, m, n)
    },
    uf: function() {
        var a = Ad(S)
          , b = O.createProgram();
        b.name = a;
        b.Ig = b.Gg = b.Hg = 0;
        b.$g = 1;
        S[a] = b;
        return a
    },
    tf: function(a) {
        var b = Ad(T);
        T[b] = O.createShader(a);
        return b
    },
    rf: function(a) {
        O.cullFace(a)
    },
    qf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = od[d];
            e && (O.deleteBuffer(e),
            e.name = 0,
            od[d] = null,
            d == O.Fg && (O.Fg = 0),
            d == O.kg && (O.kg = 0),
            d == O.Rg && (O.Rg = 0),
            d == O.fg && (O.fg = 0))
        }
    },
    pf: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = z[b + 4 * c >> 2]
              , e = pd[d];
            e && (O.deleteFramebuffer(e),
            e.name = 0,
            pd[d] = null)
        }
    },
    of: function(a) {
        if (a) {
            var b = S[a];
            b ? (O.deleteProgram(b),
            b.name = 0,
            S[a] = null) : X(1281)
        }
    },
    Nc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = W[d];
            e && (O.deleteQuery(e),
            W[d] = null)
        }
    },
    ya: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = W[d];
            e && (O.Xf.deleteQueryEXT(e),
            W[d] = null)
        }
    },
    nf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = qd[d];
            e && (O.deleteRenderbuffer(e),
            e.name = 0,
            qd[d] = null)
        }
    },
    tb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = td[d];
            e && (O.deleteSampler(e),
            e.name = 0,
            td[d] = null)
        }
    },
    mf: function(a) {
        if (a) {
            var b = T[a];
            b ? (O.deleteShader(b),
            T[a] = null) : X(1281)
        }
    },
    Bb: function(a) {
        if (a) {
            var b = vd[a];
            b ? (O.deleteSync(b),
            b.name = 0,
            vd[a] = null) : X(1281)
        }
    },
    lf: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = rd[d];
            e && (O.deleteTexture(e),
            e.name = 0,
            rd[d] = null)
        }
    },
    gb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2]
              , e = ud[d];
            e && (O.deleteTransformFeedback(e),
            e.name = 0,
            ud[d] = null)
        }
    },
    vc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2];
            O.deleteVertexArray(sd[d]);
            sd[d] = null
        }
    },
    ma: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = z[b + 4 * c >> 2];
            O.deleteVertexArray(sd[d]);
            sd[d] = null
        }
    },
    kf: function(a) {
        O.depthFunc(a)
    },
    jf: function(a) {
        O.depthMask(!!a)
    },
    hf: function(a, b) {
        O.depthRange(a, b)
    },
    gf: function(a, b) {
        O.detachShader(S[a], T[b])
    },
    ff: function(a) {
        O.disable(a)
    },
    ef: function(a) {
        N.pg[a].enabled = !1;
        O.disableVertexAttribArray(a)
    },
    df: function(a, b, c) {
        Cd(b + c);
        O.drawArrays(a, b, c);
        Ed()
    },
    Gb: function(a, b, c, d) {
        O.drawArraysInstanced(a, b, c, d)
    },
    ha: function(a, b, c, d) {
        O.drawArraysInstanced(a, b, c, d)
    },
    ad: function(a, b, c, d) {
        O.drawArraysInstanced(a, b, c, d)
    },
    bd: function(a, b, c, d) {
        O.drawArraysInstanced(a, b, c, d)
    },
    Ta: function(a, b, c, d) {
        O.drawArraysInstanced(a, b, c, d)
    },
    Hc: function(a, b) {
        for (var c = ye[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        O.drawBuffers(c)
    },
    Xc: function(a, b) {
        for (var c = ye[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        O.drawBuffers(c)
    },
    ja: function(a, b) {
        for (var c = ye[a], d = 0; d < a; d++)
            c[d] = z[b + 4 * d >> 2];
        O.drawBuffers(c)
    },
    cf: function(a, b, c, d) {
        if (!O.kg) {
            var e = 1 * wd[c - 5120] * b;
            var h = Bd(e);
            O.bindBuffer(34963, h);
            O.bufferSubData(34963, 0, v.subarray(d, d + e));
            d = 0
        }
        Cd(b);
        O.drawElements(a, b, c, d);
        Ed();
        O.kg || O.bindBuffer(34963, null)
    },
    Fb: function(a, b, c, d, e) {
        O.drawElementsInstanced(a, b, c, d, e)
    },
    ga: function(a, b, c, d, e) {
        O.drawElementsInstanced(a, b, c, d, e)
    },
    Yc: function(a, b, c, d, e) {
        O.drawElementsInstanced(a, b, c, d, e)
    },
    Zc: function(a, b, c, d, e) {
        O.drawElementsInstanced(a, b, c, d, e)
    },
    $c: function(a, b, c, d, e) {
        O.drawElementsInstanced(a, b, c, d, e)
    },
    Vc: function(a, b, c, d, e, h) {
        b = h;
        O.kg || (h = 1 * wd[e - 5120] * d,
        c = Bd(h),
        O.bindBuffer(34963, c),
        O.bufferSubData(34963, 0, v.subarray(b, b + h)),
        b = 0);
        Cd(d);
        O.drawElements(a, d, e, b);
        Ed();
        O.kg || O.bindBuffer(34963, null)
    },
    bf: function(a) {
        O.enable(a)
    },
    af: function(a) {
        N.pg[a].enabled = !0;
        O.enableVertexAttribArray(a)
    },
    Kc: function(a) {
        O.endQuery(a)
    },
    va: function(a) {
        O.Xf.endQueryEXT(a)
    },
    pc: function() {
        O.endTransformFeedback()
    },
    Eb: function(a, b) {
        return (a = O.fenceSync(a, b)) ? (b = Ad(vd),
        a.name = b,
        vd[b] = a,
        b) : 0
    },
    $e: function() {
        O.finish()
    },
    _e: function() {
        O.flush()
    },
    Ze: function(a, b, c, d) {
        O.framebufferRenderbuffer(a, b, c, qd[d])
    },
    Ye: function(a, b, c, d, e) {
        O.framebufferTexture2D(a, b, c, rd[d], e)
    },
    xc: function(a, b, c, d, e) {
        O.framebufferTextureLayer(a, b, rd[c], d, e)
    },
    Xe: function(a) {
        O.frontFace(a)
    },
    We: function(a, b) {
        ze(a, b, "createBuffer", od)
    },
    Ue: function(a, b) {
        ze(a, b, "createFramebuffer", pd)
    },
    Oc: function(a, b) {
        ze(a, b, "createQuery", W)
    },
    za: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = O.Xf.createQueryEXT();
            if (!d) {
                for (X(1282); c < a; )
                    z[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = Ad(W);
            d.name = e;
            W[e] = d;
            z[b + 4 * c >> 2] = e
        }
    },
    Te: function(a, b) {
        ze(a, b, "createRenderbuffer", qd)
    },
    ub: function(a, b) {
        ze(a, b, "createSampler", td)
    },
    Se: function(a, b) {
        ze(a, b, "createTexture", rd)
    },
    fb: function(a, b) {
        ze(a, b, "createTransformFeedback", ud)
    },
    uc: function(a, b) {
        ze(a, b, "createVertexArray", sd)
    },
    la: function(a, b) {
        ze(a, b, "createVertexArray", sd)
    },
    Ve: function(a) {
        O.generateMipmap(a)
    },
    Re: function(a, b, c, d, e, h, g) {
        Ae("getActiveAttrib", a, b, c, d, e, h, g)
    },
    Qe: function(a, b, c, d, e, h, g) {
        Ae("getActiveUniform", a, b, c, d, e, h, g)
    },
    Ib: function(a, b, c, d, e) {
        a = S[a];
        if (a = O.getActiveUniformBlockName(a, b))
            e && 0 < c ? (c = w(a, e, c),
            d && (z[d >> 2] = c)) : d && (z[d >> 2] = 0)
    },
    Jb: function(a, b, c, d) {
        if (d)
            if (a = S[a],
            35393 == c)
                c = O.getActiveUniformBlockName(a, b),
                z[d >> 2] = c.length + 1;
            else {
                if (a = O.getActiveUniformBlockParameter(a, b, c),
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
    Lb: function(a, b, c, d, e) {
        if (e)
            if (0 < b && 0 == c)
                X(1281);
            else {
                a = S[a];
                for (var h = [], g = 0; g < b; g++)
                    h.push(z[c + 4 * g >> 2]);
                if (a = O.getActiveUniforms(a, h, d))
                    for (b = a.length,
                    g = 0; g < b; g++)
                        z[e + 4 * g >> 2] = a[g]
            }
        else
            X(1281)
    },
    Pe: function(a, b, c, d) {
        a = O.getAttachedShaders(S[a]);
        var e = a.length;
        e > b && (e = b);
        z[c >> 2] = e;
        for (b = 0; b < e; ++b)
            z[d + 4 * b >> 2] = T.indexOf(a[b])
    },
    Oe: function(a, b) {
        return O.getAttribLocation(S[a], r(b))
    },
    Ne: function(a, b) {
        Ce(a, b, 4)
    },
    vb: function(a, b, c) {
        c ? Be(c, O.getBufferParameter(a, b)) : X(1281)
    },
    Me: function(a, b, c) {
        c ? z[c >> 2] = O.getBufferParameter(a, b) : X(1281)
    },
    Le: function() {
        var a = O.getError() || zd;
        zd = 0;
        return a
    },
    Ke: function(a, b) {
        Ce(a, b, 2)
    },
    bc: function(a, b) {
        return O.getFragDataLocation(S[a], r(b))
    },
    Je: function(a, b, c, d) {
        a = O.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        z[d >> 2] = a
    },
    wb: function(a, b, c) {
        De(a, b, c, 1)
    },
    yb: function(a, b) {
        Ce(a, b, 1)
    },
    rc: function(a, b, c) {
        De(a, b, c, 0)
    },
    Ie: function(a, b) {
        Ce(a, b, 0)
    },
    Va: function(a, b, c, d, e) {
        if (0 > d)
            X(1281);
        else if (e) {
            if (a = O.getInternalformatParameter(a, b, c),
            null !== a)
                for (b = 0; b < a.length && b < d; ++b)
                    z[e + 4 * b >> 2] = a[b]
        } else
            X(1281)
    },
    bb: function() {
        X(1282)
    },
    Ge: function(a, b, c, d) {
        a = O.getProgramInfoLog(S[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? w(a, d, b) : 0;
        c && (z[c >> 2] = b)
    },
    He: function(a, b, c) {
        if (c)
            if (a >= nd)
                X(1281);
            else if (a = S[a],
            35716 == b)
                a = O.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                z[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.Ig)
                    for (b = 0; b < O.getProgramParameter(a, 35718); ++b)
                        a.Ig = Math.max(a.Ig, O.getActiveUniform(a, b).name.length + 1);
                z[c >> 2] = a.Ig
            } else if (35722 == b) {
                if (!a.Gg)
                    for (b = 0; b < O.getProgramParameter(a, 35721); ++b)
                        a.Gg = Math.max(a.Gg, O.getActiveAttrib(a, b).name.length + 1);
                z[c >> 2] = a.Gg
            } else if (35381 == b) {
                if (!a.Hg)
                    for (b = 0; b < O.getProgramParameter(a, 35382); ++b)
                        a.Hg = Math.max(a.Hg, O.getActiveUniformBlockName(a, b).length + 1);
                z[c >> 2] = a.Hg
            } else
                z[c >> 2] = O.getProgramParameter(a, b);
        else
            X(1281)
    },
    pa: function(a, b, c) {
        if (c) {
            a = W[a];
            b = 2 > N.version ? O.Xf.getQueryObjectEXT(a, b) : O.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            Be(c, d)
        } else
            X(1281)
    },
    ra: function(a, b, c) {
        if (c) {
            a = O.Xf.getQueryObjectEXT(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    oa: function(a, b, c) {
        if (c) {
            a = W[a];
            b = 2 > N.version ? O.Xf.getQueryObjectEXT(a, b) : O.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            Be(c, d)
        } else
            X(1281)
    },
    Ic: function(a, b, c) {
        if (c) {
            a = O.getQueryParameter(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    qa: function(a, b, c) {
        if (c) {
            a = O.Xf.getQueryObjectEXT(W[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            z[c >> 2] = d
        } else
            X(1281)
    },
    Jc: function(a, b, c) {
        c ? z[c >> 2] = O.getQuery(a, b) : X(1281)
    },
    sa: function(a, b, c) {
        c ? z[c >> 2] = O.Xf.getQueryEXT(a, b) : X(1281)
    },
    Fe: function(a, b, c) {
        c ? z[c >> 2] = O.getRenderbufferParameter(a, b) : X(1281)
    },
    kb: function(a, b, c) {
        c ? B[c >> 2] = O.getSamplerParameter(td[a], b) : X(1281)
    },
    lb: function(a, b, c) {
        c ? z[c >> 2] = O.getSamplerParameter(td[a], b) : X(1281)
    },
    De: function(a, b, c, d) {
        a = O.getShaderInfoLog(T[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? w(a, d, b) : 0;
        c && (z[c >> 2] = b)
    },
    Ce: function(a, b, c, d) {
        a = O.getShaderPrecisionFormat(a, b);
        z[c >> 2] = a.rangeMin;
        z[c + 4 >> 2] = a.rangeMax;
        z[d >> 2] = a.precision
    },
    Be: function(a, b, c, d) {
        if (a = O.getShaderSource(T[a]))
            b = 0 < b && d ? w(a, d, b) : 0,
            c && (z[c >> 2] = b)
    },
    Ee: function(a, b, c) {
        c ? 35716 == b ? (a = O.getShaderInfoLog(T[a]),
        null === a && (a = "(unknown error)"),
        z[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = O.getShaderSource(T[a]),
        z[c >> 2] = a ? a.length + 1 : 0) : z[c >> 2] = O.getShaderParameter(T[a], b) : X(1281)
    },
    Ae: function(a) {
        var b = xd[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = O.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = Ee(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = O.getParameter(a)) || X(1280);
                b = b && Ee(b);
                break;
            case 7938:
                b = Ee("OpenGL ES 3.0 (" + O.getParameter(7938) + ")");
                break;
            case 35724:
                b = O.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = Ee(b);
                break;
            default:
                X(1280)
            }
            xd[a] = b
        }
        return b
    },
    Pb: function(a, b) {
        if (2 > N.version)
            return X(1282),
            0;
        var c = yd[a];
        if (c)
            return 0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        switch (a) {
        case 7939:
            return c = O.getSupportedExtensions() || [],
            c = c.concat(c.map(function(d) {
                return "GL_" + d
            })),
            c = c.map(function(d) {
                return Ee(d)
            }),
            c = yd[a] = c,
            0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        default:
            return X(1280),
            0
        }
    },
    xb: function(a, b, c, d, e) {
        0 > c ? X(1281) : e ? (a = O.getSyncParameter(vd[a], b),
        null !== a && (z[e >> 2] = a,
        d && (z[d >> 2] = 1))) : X(1281)
    },
    ze: function(a, b, c) {
        c ? B[c >> 2] = O.getTexParameter(a, b) : X(1281)
    },
    ye: function(a, b, c) {
        c ? z[c >> 2] = O.getTexParameter(a, b) : X(1281)
    },
    lc: function(a, b, c, d, e, h, g) {
        a = S[a];
        if (a = O.getTransformFeedbackVarying(a, b))
            g && 0 < c ? (c = w(a.name, g, c),
            d && (z[d >> 2] = c)) : d && (z[d >> 2] = 0),
            e && (z[e >> 2] = a.size),
            h && (z[h >> 2] = a.type)
    },
    Kb: function(a, b) {
        return O.getUniformBlockIndex(S[a], r(b))
    },
    Mb: function(a, b, c, d) {
        if (d)
            if (0 < b && (0 == c || 0 == d))
                X(1281);
            else {
                a = S[a];
                for (var e = [], h = 0; h < b; h++)
                    e.push(r(z[c + 4 * h >> 2]));
                if (a = O.getUniformIndices(a, e))
                    for (b = a.length,
                    h = 0; h < b; h++)
                        z[d + 4 * h >> 2] = a[h]
            }
        else
            X(1281)
    },
    ve: function(a, b) {
        b = r(b);
        if (a = S[a]) {
            Ge(a);
            var c = a.Cg
              , d = 0
              , e = b
              , h = Fe(b);
            0 < h && (d = parseInt(b.slice(h + 1)) >>> 0,
            e = b.slice(0, h));
            if ((e = a.yh[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || O.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    xe: function(a, b, c) {
        He(a, b, c, 2)
    },
    we: function(a, b, c) {
        He(a, b, c, 0)
    },
    cc: function(a, b, c) {
        He(a, b, c, 0)
    },
    jc: function(a, b, c) {
        Ie(a, b, c, 0)
    },
    hc: function(a, b, c) {
        Ie(a, b, c, 0)
    },
    se: function(a, b, c) {
        c ? (N.pg[a].enabled && k("glGetVertexAttribPointer on client-side array: not supported, bad data returned"),
        z[c >> 2] = O.getVertexAttribOffset(a, b)) : X(1281)
    },
    ue: function(a, b, c) {
        Ie(a, b, c, 2)
    },
    te: function(a, b, c) {
        Ie(a, b, c, 5)
    },
    re: function(a, b) {
        O.hint(a, b)
    },
    _a: function(a, b, c) {
        for (var d = ye[b], e = 0; e < b; e++)
            d[e] = z[c + 4 * e >> 2];
        O.invalidateFramebuffer(a, d)
    },
    Za: function(a, b, c, d, e, h, g) {
        for (var m = ye[b], n = 0; n < b; n++)
            m[n] = z[c + 4 * n >> 2];
        O.invalidateSubFramebuffer(a, m, d, e, h, g)
    },
    qe: function(a) {
        return (a = od[a]) ? O.isBuffer(a) : 0
    },
    pe: function(a) {
        return O.isEnabled(a)
    },
    oe: function(a) {
        return (a = pd[a]) ? O.isFramebuffer(a) : 0
    },
    ne: function(a) {
        return (a = S[a]) ? O.isProgram(a) : 0
    },
    Mc: function(a) {
        return (a = W[a]) ? O.isQuery(a) : 0
    },
    xa: function(a) {
        return (a = W[a]) ? O.Xf.isQueryEXT(a) : 0
    },
    me: function(a) {
        return (a = qd[a]) ? O.isRenderbuffer(a) : 0
    },
    rb: function(a) {
        return (a = td[a]) ? O.isSampler(a) : 0
    },
    le: function(a) {
        return (a = T[a]) ? O.isShader(a) : 0
    },
    Cb: function(a) {
        return O.isSync(vd[a])
    },
    ke: function(a) {
        return (a = rd[a]) ? O.isTexture(a) : 0
    },
    eb: function(a) {
        return O.isTransformFeedback(ud[a])
    },
    sc: function(a) {
        return (a = sd[a]) ? O.isVertexArray(a) : 0
    },
    ka: function(a) {
        return (a = sd[a]) ? O.isVertexArray(a) : 0
    },
    je: function(a) {
        O.lineWidth(a)
    },
    ie: function(a) {
        a = S[a];
        O.linkProgram(a);
        a.Cg = 0;
        a.yh = {}
    },
    db: function() {
        O.pauseTransformFeedback()
    },
    he: function(a, b) {
        O.pixelStorei(a, b)
    },
    ge: function(a, b) {
        O.polygonOffset(a, b)
    },
    ab: function() {
        X(1280)
    },
    $a: function() {
        X(1280)
    },
    ua: function(a, b) {
        O.Xf.queryCounterEXT(W[a], b)
    },
    Wc: function(a) {
        O.readBuffer(a)
    },
    fe: function(a, b, c, d, e, h, g) {
        if (O.Rg)
            O.readPixels(a, b, c, d, e, h, g);
        else {
            var m = Je(h);
            O.readPixels(a, b, c, d, e, h, m, g >> Ke(m))
        }
    },
    ee: function() {},
    de: function(a, b, c, d) {
        O.renderbufferStorage(a, b, c, d)
    },
    yc: function(a, b, c, d, e) {
        O.renderbufferStorageMultisample(a, b, c, d, e)
    },
    cb: function() {
        O.resumeTransformFeedback()
    },
    ce: function(a, b) {
        O.sampleCoverage(a, !!b)
    },
    nb: function(a, b, c) {
        O.samplerParameterf(td[a], b, c)
    },
    mb: function(a, b, c) {
        O.samplerParameterf(td[a], b, B[c >> 2])
    },
    pb: function(a, b, c) {
        O.samplerParameteri(td[a], b, c)
    },
    ob: function(a, b, c) {
        O.samplerParameteri(td[a], b, z[c >> 2])
    },
    be: function(a, b, c, d) {
        O.scissor(a, b, c, d)
    },
    $d: function() {
        X(1280)
    },
    _d: function(a, b, c, d) {
        for (var e = "", h = 0; h < b; ++h) {
            var g = d ? z[d + 4 * h >> 2] : -1;
            e += r(z[c + 4 * h >> 2], 0 > g ? void 0 : g)
        }
        O.shaderSource(T[a], e)
    },
    Zd: function(a, b, c) {
        O.stencilFunc(a, b, c)
    },
    Yd: function(a, b, c, d) {
        O.stencilFuncSeparate(a, b, c, d)
    },
    Xd: function(a) {
        O.stencilMask(a)
    },
    Wd: function(a, b) {
        O.stencilMaskSeparate(a, b)
    },
    Vd: function(a, b, c) {
        O.stencilOp(a, b, c)
    },
    Ud: function(a, b, c, d) {
        O.stencilOpSeparate(a, b, c, d)
    },
    Td: function(a, b, c, d, e, h, g, m, n) {
        if (O.fg)
            O.texImage2D(a, b, c, d, e, h, g, m, n);
        else if (n) {
            var q = Je(m);
            O.texImage2D(a, b, c, d, e, h, g, m, q, n >> Ke(q))
        } else
            O.texImage2D(a, b, c, d, e, h, g, m, null)
    },
    Uc: function(a, b, c, d, e, h, g, m, n, q) {
        if (O.fg)
            O.texImage3D(a, b, c, d, e, h, g, m, n, q);
        else if (q) {
            var p = Je(n);
            O.texImage3D(a, b, c, d, e, h, g, m, n, p, q >> Ke(p))
        } else
            O.texImage3D(a, b, c, d, e, h, g, m, n, null)
    },
    Sd: function(a, b, c) {
        O.texParameterf(a, b, c)
    },
    Qd: function(a, b, c) {
        O.texParameterf(a, b, B[c >> 2])
    },
    Pd: function(a, b, c) {
        O.texParameteri(a, b, c)
    },
    Od: function(a, b, c) {
        O.texParameteri(a, b, z[c >> 2])
    },
    Xa: function(a, b, c, d, e) {
        O.texStorage2D(a, b, c, d, e)
    },
    Wa: function(a, b, c, d, e, h) {
        O.texStorage3D(a, b, c, d, e, h)
    },
    Nd: function(a, b, c, d, e, h, g, m, n) {
        if (O.fg)
            O.texSubImage2D(a, b, c, d, e, h, g, m, n);
        else if (n) {
            var q = Je(m);
            O.texSubImage2D(a, b, c, d, e, h, g, m, q, n >> Ke(q))
        } else
            O.texSubImage2D(a, b, c, d, e, h, g, m, null)
    },
    Tc: function(a, b, c, d, e, h, g, m, n, q, p) {
        if (O.fg)
            O.texSubImage3D(a, b, c, d, e, h, g, m, n, q, p);
        else if (p) {
            var t = Je(q);
            O.texSubImage3D(a, b, c, d, e, h, g, m, n, q, t, p >> Ke(t))
        } else
            O.texSubImage3D(a, b, c, d, e, h, g, m, n, q, null)
    },
    mc: function(a, b, c, d) {
        a = S[a];
        for (var e = [], h = 0; h < b; h++)
            e.push(r(z[c + 4 * h >> 2]));
        O.transformFeedbackVaryings(a, e, d)
    },
    Md: function(a, b) {
        O.uniform1f(Z(a), b)
    },
    Ld: function(a, b, c) {
        b && O.uniform1fv(Z(a), B, c >> 2, b)
    },
    Kd: function(a, b) {
        O.uniform1i(Z(a), b)
    },
    Jd: function(a, b, c) {
        b && O.uniform1iv(Z(a), z, c >> 2, b)
    },
    ac: function(a, b) {
        O.uniform1ui(Z(a), b)
    },
    Xb: function(a, b, c) {
        b && O.uniform1uiv(Z(a), A, c >> 2, b)
    },
    Id: function(a, b, c) {
        O.uniform2f(Z(a), b, c)
    },
    Hd: function(a, b, c) {
        b && O.uniform2fv(Z(a), B, c >> 2, 2 * b)
    },
    Ed: function(a, b, c) {
        O.uniform2i(Z(a), b, c)
    },
    Dd: function(a, b, c) {
        b && O.uniform2iv(Z(a), z, c >> 2, 2 * b)
    },
    $b: function(a, b, c) {
        O.uniform2ui(Z(a), b, c)
    },
    Wb: function(a, b, c) {
        b && O.uniform2uiv(Z(a), A, c >> 2, 2 * b)
    },
    Cd: function(a, b, c, d) {
        O.uniform3f(Z(a), b, c, d)
    },
    Bd: function(a, b, c) {
        b && O.uniform3fv(Z(a), B, c >> 2, 3 * b)
    },
    Ad: function(a, b, c, d) {
        O.uniform3i(Z(a), b, c, d)
    },
    zd: function(a, b, c) {
        b && O.uniform3iv(Z(a), z, c >> 2, 3 * b)
    },
    _b: function(a, b, c, d) {
        O.uniform3ui(Z(a), b, c, d)
    },
    Vb: function(a, b, c) {
        b && O.uniform3uiv(Z(a), A, c >> 2, 3 * b)
    },
    yd: function(a, b, c, d, e) {
        O.uniform4f(Z(a), b, c, d, e)
    },
    xd: function(a, b, c) {
        b && O.uniform4fv(Z(a), B, c >> 2, 4 * b)
    },
    wd: function(a, b, c, d, e) {
        O.uniform4i(Z(a), b, c, d, e)
    },
    vd: function(a, b, c) {
        b && O.uniform4iv(Z(a), z, c >> 2, 4 * b)
    },
    Yb: function(a, b, c, d, e) {
        O.uniform4ui(Z(a), b, c, d, e)
    },
    Ub: function(a, b, c) {
        b && O.uniform4uiv(Z(a), A, c >> 2, 4 * b)
    },
    Hb: function(a, b, c) {
        a = S[a];
        O.uniformBlockBinding(a, b, c)
    },
    td: function(a, b, c, d) {
        b && O.uniformMatrix2fv(Z(a), !!c, B, d >> 2, 4 * b)
    },
    Gc: function(a, b, c, d) {
        b && O.uniformMatrix2x3fv(Z(a), !!c, B, d >> 2, 6 * b)
    },
    Dc: function(a, b, c, d) {
        b && O.uniformMatrix2x4fv(Z(a), !!c, B, d >> 2, 8 * b)
    },
    sd: function(a, b, c, d) {
        b && O.uniformMatrix3fv(Z(a), !!c, B, d >> 2, 9 * b)
    },
    Fc: function(a, b, c, d) {
        b && O.uniformMatrix3x2fv(Z(a), !!c, B, d >> 2, 6 * b)
    },
    Bc: function(a, b, c, d) {
        b && O.uniformMatrix3x4fv(Z(a), !!c, B, d >> 2, 12 * b)
    },
    rd: function(a, b, c, d) {
        b && O.uniformMatrix4fv(Z(a), !!c, B, d >> 2, 16 * b)
    },
    Cc: function(a, b, c, d) {
        b && O.uniformMatrix4x2fv(Z(a), !!c, B, d >> 2, 8 * b)
    },
    Ac: function(a, b, c, d) {
        b && O.uniformMatrix4x3fv(Z(a), !!c, B, d >> 2, 12 * b)
    },
    qd: function(a) {
        a = S[a];
        O.useProgram(a);
        O.Hh = a
    },
    pd: function(a) {
        O.validateProgram(S[a])
    },
    od: function(a, b) {
        O.vertexAttrib1f(a, b)
    },
    nd: function(a, b) {
        O.vertexAttrib1f(a, B[b >> 2])
    },
    md: function(a, b, c) {
        O.vertexAttrib2f(a, b, c)
    },
    ld: function(a, b) {
        O.vertexAttrib2f(a, B[b >> 2], B[b + 4 >> 2])
    },
    kd: function(a, b, c, d) {
        O.vertexAttrib3f(a, b, c, d)
    },
    id: function(a, b) {
        O.vertexAttrib3f(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2])
    },
    hd: function(a, b, c, d, e) {
        O.vertexAttrib4f(a, b, c, d, e)
    },
    gd: function(a, b) {
        O.vertexAttrib4f(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2], B[b + 12 >> 2])
    },
    jb: function(a, b) {
        O.vertexAttribDivisor(a, b)
    },
    fa: function(a, b) {
        O.vertexAttribDivisor(a, b)
    },
    cd: function(a, b) {
        O.vertexAttribDivisor(a, b)
    },
    dd: function(a, b) {
        O.vertexAttribDivisor(a, b)
    },
    Ua: function(a, b) {
        O.vertexAttribDivisor(a, b)
    },
    gc: function(a, b, c, d, e) {
        O.vertexAttribI4i(a, b, c, d, e)
    },
    ec: function(a, b) {
        O.vertexAttribI4i(a, z[b >> 2], z[b + 4 >> 2], z[b + 8 >> 2], z[b + 12 >> 2])
    },
    fc: function(a, b, c, d, e) {
        O.vertexAttribI4ui(a, b, c, d, e)
    },
    dc: function(a, b) {
        O.vertexAttribI4ui(a, A[b >> 2], A[b + 4 >> 2], A[b + 8 >> 2], A[b + 12 >> 2])
    },
    kc: function(a, b, c, d, e) {
        O.vertexAttribIPointer(a, b, c, d, e)
    },
    fd: function(a, b, c, d, e, h) {
        var g = N.pg[a];
        O.Fg ? (g.Pg = !1,
        O.vertexAttribPointer(a, b, c, !!d, e, h)) : (g.size = b,
        g.type = c,
        g.th = d,
        g.Yg = e,
        g.dg = h,
        g.Pg = !0,
        g.zh = function(m, n, q, p, t, u) {
            this.vertexAttribPointer(m, n, q, p, t, u)
        }
        )
    },
    ed: function(a, b, c, d) {
        O.viewport(a, b, c, d)
    },
    zb: function(a, b, c, d) {
        O.waitSync(vd[a], b, (c >>> 0) + 4294967296 * d)
    },
    m: function() {
        return 0
    },
    Sa: function(a, b, c) {
        v.copyWithin(a, b, b + c)
    },
    Ba: function(a, b, c) {
        return Le(a, {
            Xg: z[c >> 2],
            Og: z[c + 4 >> 2],
            Oh: z[c + 8 >> 2],
            Lh: b,
            Eg: z[c + 12 >> 2],
            fh: z[c + 16 >> 2]
        })
    },
    I: function(a, b) {
        a = Y(a);
        return a ? a.requestPointerLock || a.Lg ? Nd && Vd.og ? we(a) : b ? (Sd(we, 2, [a]),
        1) : -2 : -1 : -4
    },
    La: function() {
        l("OOM")
    },
    P: function() {
        return (ae = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
    },
    n: function(a, b, c) {
        if ("undefined" == typeof onbeforeunload)
            return -1;
        if (1 !== c)
            return -5;
        Me(a, b);
        return 0
    },
    z: function(a, b, c, d) {
        Ne(a, b, c, d, 12, "blur");
        return 0
    },
    c: qe,
    i: function(a, b, c) {
        a = Y(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    },
    A: function(a, b, c, d) {
        Ne(a, b, c, d, 13, "focus");
        return 0
    },
    q: function(a, b, c, d) {
        if (!Zd())
            return -1;
        a = Y(a);
        if (!a)
            return -4;
        Oe(a, b, c, d, "fullscreenchange");
        Oe(a, b, c, d, "webkitfullscreenchange");
        return 0
    },
    g: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        Pe(a, b, c, 26, "gamepadconnected");
        return 0
    },
    f: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        Pe(a, b, c, 27, "gamepaddisconnected");
        return 0
    },
    t: function(a, b, c, d) {
        Qe(a, b, c, d, 2, "keydown");
        return 0
    },
    r: function(a, b, c, d) {
        Qe(a, b, c, d, 1, "keypress");
        return 0
    },
    s: function(a, b, c, d) {
        Qe(a, b, c, d, 3, "keyup");
        return 0
    },
    Ea: function(a, b, c) {
        a = J(a);
        yc(a, b, c)
    },
    F: function(a, b, c, d) {
        Se(a, b, c, d, 5, "mousedown");
        return 0
    },
    D: function(a, b, c, d) {
        Se(a, b, c, d, 33, "mouseenter");
        return 0
    },
    C: function(a, b, c, d) {
        Se(a, b, c, d, 34, "mouseleave");
        return 0
    },
    G: function(a, b, c, d) {
        Se(a, b, c, d, 8, "mousemove");
        return 0
    },
    E: function(a, b, c, d) {
        Se(a, b, c, d, 6, "mouseup");
        return 0
    },
    u: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.Tf || document.body.ng || document.body.Lg))
            return -1;
        a = Y(a);
        if (!a)
            return -4;
        Te(a, b, c, d, "pointerlockchange");
        Te(a, b, c, d, "mozpointerlockchange");
        Te(a, b, c, d, "webkitpointerlockchange");
        Te(a, b, c, d, "mspointerlockchange");
        return 0
    },
    p: function(a, b, c, d) {
        Ue(a, b, c, d);
        return 0
    },
    v: function(a, b, c, d) {
        Ve(a, b, c, d, 25, "touchcancel");
        return 0
    },
    x: function(a, b, c, d) {
        Ve(a, b, c, d, 23, "touchend");
        return 0
    },
    w: function(a, b, c, d) {
        Ve(a, b, c, d, 24, "touchmove");
        return 0
    },
    y: function(a, b, c, d) {
        Ve(a, b, c, d, 22, "touchstart");
        return 0
    },
    o: function(a, b, c) {
        if (!ne[1])
            return -4;
        We(a, b, c);
        return 0
    },
    B: function(a, b, c, d) {
        a = Y(a);
        return "undefined" != typeof a.onwheel ? (Xe(a, b, c, d),
        0) : -1
    },
    Ca: function(a) {
        ma(r(a))
    },
    l: function() {
        throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
    },
    e: function(a) {
        try {
            var b = hc(a);
            Sb(b);
            return 0
        } catch (c) {
            if ("undefined" == typeof fc || !(c instanceof K))
                throw c;
            return c.Yf
        }
    },
    Oa: function(a, b, c, d) {
        try {
            a: {
                var e = hc(a);
                a = b;
                for (var h = b = 0; h < c; h++) {
                    var g = A[a >> 2]
                      , m = A[a + 4 >> 2];
                    a += 8;
                    var n = e
                      , q = g
                      , p = m
                      , t = void 0
                      , u = y;
                    if (0 > p || 0 > t)
                        throw new K(28);
                    if (null === n.fd)
                        throw new K(8);
                    if (1 === (n.flags & 2097155))
                        throw new K(8);
                    if (16384 === (n.node.mode & 61440))
                        throw new K(31);
                    if (!n.Sf.read)
                        throw new K(28);
                    var x = "undefined" != typeof t;
                    if (!x)
                        t = n.position;
                    else if (!n.seekable)
                        throw new K(70);
                    var C = n.Sf.read(n, u, q, p, t);
                    x || (n.position += C);
                    var F = C;
                    if (0 > F) {
                        var U = -1;
                        break a
                    }
                    b += F;
                    if (F < m)
                        break
                }
                U = b
            }
            A[d >> 2] = U;
            return 0
        } catch (V) {
            if ("undefined" == typeof fc || !(V instanceof K))
                throw V;
            return V.Yf
        }
    },
    Ga: function(a, b, c, d, e) {
        try {
            b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
            if (isNaN(b))
                return 61;
            var h = hc(a);
            Tb(h, b, d);
            H = [h.position >>> 0, (G = h.position,
            1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
            z[e >> 2] = H[0];
            z[e + 4 >> 2] = H[1];
            h.qg && 0 === b && 0 === d && (h.qg = null);
            return 0
        } catch (g) {
            if ("undefined" == typeof fc || !(g instanceof K))
                throw g;
            return g.Yf
        }
    },
    Na: function(a, b, c, d) {
        try {
            a: {
                var e = hc(a);
                a = b;
                for (var h = b = 0; h < c; h++) {
                    var g = A[a >> 2]
                      , m = A[a + 4 >> 2];
                    a += 8;
                    var n = Ub(e, y, g, m);
                    if (0 > n) {
                        var q = -1;
                        break a
                    }
                    b += n
                }
                q = b
            }
            A[d >> 2] = q;
            return 0
        } catch (p) {
            if ("undefined" == typeof fc || !(p instanceof K))
                throw p;
            return p.Yf
        }
    },
    Da: function(a, b) {
        ze(a, b, "createBuffer", od)
    },
    ta: function(a, b) {
        Ce(a, b, 2)
    },
    Gd: function(a) {
        if (!Ye[a]) {
            var b = Ze(a);
            b || (b = "Unknown error",
            a = 8);
            Ye[a] = Hd(b)
        }
        return Ye[a]
    },
    Df: function() {
        return 0
    }
};
(function() {
    function a(e) {
        f.asm = e.exports;
        sa = f.asm.Ef;
        ya = e = sa.buffer;
        f.HEAP8 = y = new Int8Array(e);
        f.HEAP16 = za = new Int16Array(e);
        f.HEAP32 = z = new Int32Array(e);
        f.HEAPU8 = v = new Uint8Array(e);
        f.HEAPU16 = Aa = new Uint16Array(e);
        f.HEAPU32 = A = new Uint32Array(e);
        f.HEAPF32 = B = new Float32Array(e);
        f.HEAPF64 = D = new Float64Array(e);
        Ba = f.asm.Hf;
        Ma("wasm-instantiate")
    }
    function b(e) {
        a(e.instance)
    }
    function c(e) {
        return Qa().then(function(h) {
            return WebAssembly.instantiate(h, d)
        }).then(function(h) {
            return h
        }).then(e, function(h) {
            k("failed to asynchronously prepare wasm: " + h);
            l(h)
        })
    }
    var d = {
        a: bf
    };
    La("wasm-instantiate");
    if (f.instantiateWasm)
        try {
            return f.instantiateWasm(d, a)
        } catch (e) {
            return k("Module.instantiateWasm callback failed with error: " + e),
            !1
        }
    (function() {
        return ra || "function" != typeof WebAssembly.instantiateStreaming || Na() || E.startsWith("file://") || ha || "function" != typeof fetch ? c(b) : fetch(E, {
            credentials: "same-origin"
        }).then(function(e) {
            return WebAssembly.instantiateStreaming(e, d).then(b, function(h) {
                k("wasm streaming compile failed: " + h);
                k("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    }
    )();
    return {}
}
)();
var I = f._malloc = function() {
    return (I = f._malloc = f.asm.Ff).apply(null, arguments)
}
;
f._main = function() {
    return (f._main = f.asm.Gf).apply(null, arguments)
}
;
var af = f.___errno_location = function() {
    return (af = f.___errno_location = f.asm.If).apply(null, arguments)
}
  , Ld = f.stackSave = function() {
    return (Ld = f.stackSave = f.asm.Jf).apply(null, arguments)
}
  , Md = f.stackRestore = function() {
    return (Md = f.stackRestore = f.asm.Kf).apply(null, arguments)
}
  , pe = f.stackAlloc = function() {
    return (pe = f.stackAlloc = f.asm.Lf).apply(null, arguments)
}
;
f.___cxa_is_pointer_type = function() {
    return (f.___cxa_is_pointer_type = f.asm.Mf).apply(null, arguments)
}
;
f.dynCall_jiji = function() {
    return (f.dynCall_jiji = f.asm.Nf).apply(null, arguments)
}
;
f.dynCall_ji = function() {
    return (f.dynCall_ji = f.asm.Of).apply(null, arguments)
}
;
f.dynCall_iiji = function() {
    return (f.dynCall_iiji = f.asm.Pf).apply(null, arguments)
}
;
f.addRunDependency = La;
f.removeRunDependency = Ma;
f.FS_createPath = Yb;
f.FS_createDataFile = $b;
f.FS_createPreloadedFile = ec;
f.FS_createLazyFile = cc;
f.FS_createDevice = ac;
f.FS_unlink = Mb;
var cf;
Ka = function df() {
    cf || ef();
    cf || (Ka = df)
}
;
function ff(a) {
    var b = f._main;
    a = a || [];
    a.unshift(ca);
    var c = a.length
      , d = pe(4 * (c + 1))
      , e = d >> 2;
    a.forEach(g=>{
        var m = z
          , n = e++
          , q = xa(g) + 1
          , p = pe(q);
        wa(g, y, p, q);
        m[n] = p
    }
    );
    z[e] = 0;
    try {
        var h = b(c, d);
        wc(h)
    } catch (g) {
        xc(g)
    }
}
function ef() {
    function a() {
        if (!cf && (cf = !0,
        f.calledRun = !0,
        !ta)) {
            f.noFSInit || Wb || (Wb = !0,
            Vb(),
            f.stdin = f.stdin,
            f.stdout = f.stdout,
            f.stderr = f.stderr,
            f.stdin ? ac("/dev", "stdin", f.stdin) : Lb("/dev/tty", "/dev/stdin"),
            f.stdout ? ac("/dev", "stdout", null, f.stdout) : Lb("/dev/tty", "/dev/stdout"),
            f.stderr ? ac("/dev", "stderr", null, f.stderr) : Lb("/dev/tty1", "/dev/stderr"),
            Rb("/dev/stdin", 0),
            Rb("/dev/stdout", 1),
            Rb("/dev/stderr", 1));
            wb = !1;
            Wa(Da);
            Wa(Ea);
            if (f.onRuntimeInitialized)
                f.onRuntimeInitialized();
            gf && ff(b);
            if (f.postRun)
                for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; ) {
                    var c = f.postRun.shift();
                    Ga.unshift(c)
                }
            Wa(Ga)
        }
    }
    var b = b || ba;
    if (!(0 < Ia)) {
        if (f.preRun)
            for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; )
                Ha();
        Wa(Ca);
        0 < Ia || (f.setStatus ? (f.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                f.setStatus("")
            }, 1);
            a()
        }, 1)) : a())
    }
}
if (f.preInit)
    for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length; )
        f.preInit.pop()();
var gf = !0;
f.noInitialRun && (gf = !1);
ef();
