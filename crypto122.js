const BigInteger = require('bigi')

function o(e, t) {
    const n = e ? e.byteLength : t || 65536;
    if (4095 & n || n <= 0)
        throw new Error("heap size must be a positive integer and a multiple of 4096");
    return e || new Uint8Array(new ArrayBuffer(n))
}

function i(e, t, n, r, a) {
    const o = e.length - t
      , i = o < a ? o : a;
    return e.set(n.subarray(r, r + i), t),
    i
}

class k {
    constructor() {
        this.pos = 0,
        this.len = 0
    }
    reset() {
        return this.result = null,
        this.pos = 0,
        this.len = 0,
        this.asm.reset(),
        this
    }
    process(e) {
        if (null !== this.result)
            throw new l("state must be reset before processing new data");
        let t = this.asm
          , n = this.heap
          , r = this.pos
          , a = this.len
          , o = 0
          , s = e.length
          , c = 0;
        for (; s > 0; )
            c = i(n, r + a, e, o, s),
            a += c,
            o += c,
            s -= c,
            c = t.process(r, a),
            r += c,
            a -= c,
            a || (r = 0);
        return this.pos = r,
        this.len = a,
        this
    }
    finish() {
        if (null !== this.result)
            throw new l("state must be reset before processing new data");
        return this.asm.finish(this.pos, this.len, 0),
        this.result = new Uint8Array(this.HASH_SIZE),
        this.result.set(this.heap.subarray(0, this.HASH_SIZE)),
        this.pos = 0,
        this.len = 0,
        this
    }
}

class M extends k {
    constructor() {
        super(),
        this.NAME = "sha512",
        this.BLOCK_SIZE = 128,
        this.HASH_SIZE = 64,
        this.heap = o(),
        this.asm = function(e, t, n) {
            "use asm";
            var r = 0
              , a = 0
              , o = 0
              , i = 0
              , s = 0
              , l = 0
              , c = 0
              , d = 0
              , u = 0
              , f = 0
              , p = 0
              , m = 0
              , _ = 0
              , h = 0
              , g = 0
              , y = 0
              , v = 0
              , b = 0
              , w = 0
              , x = 0
              , E = 0
              , k = 0
              , S = 0
              , M = 0
              , C = 0
              , L = 0
              , P = 0
              , T = 0
              , O = 0
              , A = 0
              , D = 0
              , Y = 0
              , j = 0
              , R = 0
              , I = 0
              , z = 0
              , N = 0
              , H = 0
              , B = 0
              , F = 0
              , V = 0
              , W = 0
              , U = 0
              , q = 0
              , K = 0
              , Z = 0
              , G = 0
              , J = 0
              , X = 0
              , Q = 0
              , $ = new e.Uint8Array(n);
            function ee(e, t, n, v, b, w, x, E, k, S, M, C, L, P, T, O, A, D, Y, j, R, I, z, N, H, B, F, V, W, U, q, K) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                v = v | 0;
                b = b | 0;
                w = w | 0;
                x = x | 0;
                E = E | 0;
                k = k | 0;
                S = S | 0;
                M = M | 0;
                C = C | 0;
                L = L | 0;
                P = P | 0;
                T = T | 0;
                O = O | 0;
                A = A | 0;
                D = D | 0;
                Y = Y | 0;
                j = j | 0;
                R = R | 0;
                I = I | 0;
                z = z | 0;
                N = N | 0;
                H = H | 0;
                B = B | 0;
                F = F | 0;
                V = V | 0;
                W = W | 0;
                U = U | 0;
                q = q | 0;
                K = K | 0;
                var Z = 0
                  , G = 0
                  , J = 0
                  , X = 0
                  , Q = 0
                  , $ = 0
                  , ee = 0
                  , te = 0
                  , ne = 0
                  , re = 0
                  , ae = 0
                  , oe = 0
                  , ie = 0
                  , se = 0
                  , le = 0
                  , ce = 0
                  , de = 0
                  , ue = 0
                  , fe = 0;
                Z = r;
                G = a;
                J = o;
                X = i;
                Q = s;
                $ = l;
                ee = c;
                te = d;
                ne = u;
                re = f;
                ae = p;
                oe = m;
                ie = _;
                se = h;
                le = g;
                ce = y;
                ue = 0xd728ae22 + t | 0;
                de = 0x428a2f98 + e + (ue >>> 0 < t >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x23ef65cd + v | 0;
                de = 0x71374491 + n + (ue >>> 0 < v >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xec4d3b2f + w | 0;
                de = 0xb5c0fbcf + b + (ue >>> 0 < w >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x8189dbbc + E | 0;
                de = 0xe9b5dba5 + x + (ue >>> 0 < E >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xf348b538 + S | 0;
                de = 0x3956c25b + k + (ue >>> 0 < S >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xb605d019 + C | 0;
                de = 0x59f111f1 + M + (ue >>> 0 < C >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xaf194f9b + P | 0;
                de = 0x923f82a4 + L + (ue >>> 0 < P >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xda6d8118 + O | 0;
                de = 0xab1c5ed5 + T + (ue >>> 0 < O >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xa3030242 + D | 0;
                de = 0xd807aa98 + A + (ue >>> 0 < D >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x45706fbe + j | 0;
                de = 0x12835b01 + Y + (ue >>> 0 < j >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x4ee4b28c + I | 0;
                de = 0x243185be + R + (ue >>> 0 < I >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xd5ffb4e2 + N | 0;
                de = 0x550c7dc3 + z + (ue >>> 0 < N >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xf27b896f + B | 0;
                de = 0x72be5d74 + H + (ue >>> 0 < B >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x3b1696b1 + V | 0;
                de = 0x80deb1fe + F + (ue >>> 0 < V >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x25c71235 + U | 0;
                de = 0x9bdc06a7 + W + (ue >>> 0 < U >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xcf692694 + K | 0;
                de = 0xc19bf174 + q + (ue >>> 0 < K >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                t = t + j | 0;
                e = e + Y + (t >>> 0 < j >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 1 | n << 31) ^ (v >>> 8 | n << 24) ^ (v >>> 7 | n << 25) | 0;
                t = t + fe | 0;
                e = e + ((n >>> 1 | v << 31) ^ (n >>> 8 | v << 24) ^ n >>> 7) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 19 | W << 13) ^ (U << 3 | W >>> 29) ^ (U >>> 6 | W << 26) | 0;
                t = t + fe | 0;
                e = e + ((W >>> 19 | U << 13) ^ (W << 3 | U >>> 29) ^ W >>> 6) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x9ef14ad2 + t | 0;
                de = 0xe49b69c1 + e + (ue >>> 0 < t >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                v = v + I | 0;
                n = n + R + (v >>> 0 < I >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 1 | b << 31) ^ (w >>> 8 | b << 24) ^ (w >>> 7 | b << 25) | 0;
                v = v + fe | 0;
                n = n + ((b >>> 1 | w << 31) ^ (b >>> 8 | w << 24) ^ b >>> 7) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 19 | q << 13) ^ (K << 3 | q >>> 29) ^ (K >>> 6 | q << 26) | 0;
                v = v + fe | 0;
                n = n + ((q >>> 19 | K << 13) ^ (q << 3 | K >>> 29) ^ q >>> 6) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x384f25e3 + v | 0;
                de = 0xefbe4786 + n + (ue >>> 0 < v >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                w = w + N | 0;
                b = b + z + (w >>> 0 < N >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 1 | x << 31) ^ (E >>> 8 | x << 24) ^ (E >>> 7 | x << 25) | 0;
                w = w + fe | 0;
                b = b + ((x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ x >>> 7) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 19 | e << 13) ^ (t << 3 | e >>> 29) ^ (t >>> 6 | e << 26) | 0;
                w = w + fe | 0;
                b = b + ((e >>> 19 | t << 13) ^ (e << 3 | t >>> 29) ^ e >>> 6) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x8b8cd5b5 + w | 0;
                de = 0xfc19dc6 + b + (ue >>> 0 < w >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                E = E + B | 0;
                x = x + H + (E >>> 0 < B >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 1 | k << 31) ^ (S >>> 8 | k << 24) ^ (S >>> 7 | k << 25) | 0;
                E = E + fe | 0;
                x = x + ((k >>> 1 | S << 31) ^ (k >>> 8 | S << 24) ^ k >>> 7) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 19 | n << 13) ^ (v << 3 | n >>> 29) ^ (v >>> 6 | n << 26) | 0;
                E = E + fe | 0;
                x = x + ((n >>> 19 | v << 13) ^ (n << 3 | v >>> 29) ^ n >>> 6) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x77ac9c65 + E | 0;
                de = 0x240ca1cc + x + (ue >>> 0 < E >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                S = S + V | 0;
                k = k + F + (S >>> 0 < V >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 1 | M << 31) ^ (C >>> 8 | M << 24) ^ (C >>> 7 | M << 25) | 0;
                S = S + fe | 0;
                k = k + ((M >>> 1 | C << 31) ^ (M >>> 8 | C << 24) ^ M >>> 7) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 19 | b << 13) ^ (w << 3 | b >>> 29) ^ (w >>> 6 | b << 26) | 0;
                S = S + fe | 0;
                k = k + ((b >>> 19 | w << 13) ^ (b << 3 | w >>> 29) ^ b >>> 6) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x592b0275 + S | 0;
                de = 0x2de92c6f + k + (ue >>> 0 < S >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                C = C + U | 0;
                M = M + W + (C >>> 0 < U >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 1 | L << 31) ^ (P >>> 8 | L << 24) ^ (P >>> 7 | L << 25) | 0;
                C = C + fe | 0;
                M = M + ((L >>> 1 | P << 31) ^ (L >>> 8 | P << 24) ^ L >>> 7) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 19 | x << 13) ^ (E << 3 | x >>> 29) ^ (E >>> 6 | x << 26) | 0;
                C = C + fe | 0;
                M = M + ((x >>> 19 | E << 13) ^ (x << 3 | E >>> 29) ^ x >>> 6) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x6ea6e483 + C | 0;
                de = 0x4a7484aa + M + (ue >>> 0 < C >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                P = P + K | 0;
                L = L + q + (P >>> 0 < K >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 1 | T << 31) ^ (O >>> 8 | T << 24) ^ (O >>> 7 | T << 25) | 0;
                P = P + fe | 0;
                L = L + ((T >>> 1 | O << 31) ^ (T >>> 8 | O << 24) ^ T >>> 7) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 19 | k << 13) ^ (S << 3 | k >>> 29) ^ (S >>> 6 | k << 26) | 0;
                P = P + fe | 0;
                L = L + ((k >>> 19 | S << 13) ^ (k << 3 | S >>> 29) ^ k >>> 6) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xbd41fbd4 + P | 0;
                de = 0x5cb0a9dc + L + (ue >>> 0 < P >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                O = O + t | 0;
                T = T + e + (O >>> 0 < t >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 1 | A << 31) ^ (D >>> 8 | A << 24) ^ (D >>> 7 | A << 25) | 0;
                O = O + fe | 0;
                T = T + ((A >>> 1 | D << 31) ^ (A >>> 8 | D << 24) ^ A >>> 7) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 19 | M << 13) ^ (C << 3 | M >>> 29) ^ (C >>> 6 | M << 26) | 0;
                O = O + fe | 0;
                T = T + ((M >>> 19 | C << 13) ^ (M << 3 | C >>> 29) ^ M >>> 6) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x831153b5 + O | 0;
                de = 0x76f988da + T + (ue >>> 0 < O >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                D = D + v | 0;
                A = A + n + (D >>> 0 < v >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 1 | Y << 31) ^ (j >>> 8 | Y << 24) ^ (j >>> 7 | Y << 25) | 0;
                D = D + fe | 0;
                A = A + ((Y >>> 1 | j << 31) ^ (Y >>> 8 | j << 24) ^ Y >>> 7) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 19 | L << 13) ^ (P << 3 | L >>> 29) ^ (P >>> 6 | L << 26) | 0;
                D = D + fe | 0;
                A = A + ((L >>> 19 | P << 13) ^ (L << 3 | P >>> 29) ^ L >>> 6) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xee66dfab + D | 0;
                de = 0x983e5152 + A + (ue >>> 0 < D >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                j = j + w | 0;
                Y = Y + b + (j >>> 0 < w >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 1 | R << 31) ^ (I >>> 8 | R << 24) ^ (I >>> 7 | R << 25) | 0;
                j = j + fe | 0;
                Y = Y + ((R >>> 1 | I << 31) ^ (R >>> 8 | I << 24) ^ R >>> 7) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 19 | T << 13) ^ (O << 3 | T >>> 29) ^ (O >>> 6 | T << 26) | 0;
                j = j + fe | 0;
                Y = Y + ((T >>> 19 | O << 13) ^ (T << 3 | O >>> 29) ^ T >>> 6) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x2db43210 + j | 0;
                de = 0xa831c66d + Y + (ue >>> 0 < j >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                I = I + E | 0;
                R = R + x + (I >>> 0 < E >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 1 | z << 31) ^ (N >>> 8 | z << 24) ^ (N >>> 7 | z << 25) | 0;
                I = I + fe | 0;
                R = R + ((z >>> 1 | N << 31) ^ (z >>> 8 | N << 24) ^ z >>> 7) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 19 | A << 13) ^ (D << 3 | A >>> 29) ^ (D >>> 6 | A << 26) | 0;
                I = I + fe | 0;
                R = R + ((A >>> 19 | D << 13) ^ (A << 3 | D >>> 29) ^ A >>> 6) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x98fb213f + I | 0;
                de = 0xb00327c8 + R + (ue >>> 0 < I >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                N = N + S | 0;
                z = z + k + (N >>> 0 < S >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 1 | H << 31) ^ (B >>> 8 | H << 24) ^ (B >>> 7 | H << 25) | 0;
                N = N + fe | 0;
                z = z + ((H >>> 1 | B << 31) ^ (H >>> 8 | B << 24) ^ H >>> 7) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 19 | Y << 13) ^ (j << 3 | Y >>> 29) ^ (j >>> 6 | Y << 26) | 0;
                N = N + fe | 0;
                z = z + ((Y >>> 19 | j << 13) ^ (Y << 3 | j >>> 29) ^ Y >>> 6) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xbeef0ee4 + N | 0;
                de = 0xbf597fc7 + z + (ue >>> 0 < N >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                B = B + C | 0;
                H = H + M + (B >>> 0 < C >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 1 | F << 31) ^ (V >>> 8 | F << 24) ^ (V >>> 7 | F << 25) | 0;
                B = B + fe | 0;
                H = H + ((F >>> 1 | V << 31) ^ (F >>> 8 | V << 24) ^ F >>> 7) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 19 | R << 13) ^ (I << 3 | R >>> 29) ^ (I >>> 6 | R << 26) | 0;
                B = B + fe | 0;
                H = H + ((R >>> 19 | I << 13) ^ (R << 3 | I >>> 29) ^ R >>> 6) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x3da88fc2 + B | 0;
                de = 0xc6e00bf3 + H + (ue >>> 0 < B >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                V = V + P | 0;
                F = F + L + (V >>> 0 < P >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 1 | W << 31) ^ (U >>> 8 | W << 24) ^ (U >>> 7 | W << 25) | 0;
                V = V + fe | 0;
                F = F + ((W >>> 1 | U << 31) ^ (W >>> 8 | U << 24) ^ W >>> 7) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 19 | z << 13) ^ (N << 3 | z >>> 29) ^ (N >>> 6 | z << 26) | 0;
                V = V + fe | 0;
                F = F + ((z >>> 19 | N << 13) ^ (z << 3 | N >>> 29) ^ z >>> 6) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x930aa725 + V | 0;
                de = 0xd5a79147 + F + (ue >>> 0 < V >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                U = U + O | 0;
                W = W + T + (U >>> 0 < O >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 1 | q << 31) ^ (K >>> 8 | q << 24) ^ (K >>> 7 | q << 25) | 0;
                U = U + fe | 0;
                W = W + ((q >>> 1 | K << 31) ^ (q >>> 8 | K << 24) ^ q >>> 7) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 19 | H << 13) ^ (B << 3 | H >>> 29) ^ (B >>> 6 | H << 26) | 0;
                U = U + fe | 0;
                W = W + ((H >>> 19 | B << 13) ^ (H << 3 | B >>> 29) ^ H >>> 6) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xe003826f + U | 0;
                de = 0x6ca6351 + W + (ue >>> 0 < U >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                K = K + D | 0;
                q = q + A + (K >>> 0 < D >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25) | 0;
                K = K + fe | 0;
                q = q + ((e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 19 | F << 13) ^ (V << 3 | F >>> 29) ^ (V >>> 6 | F << 26) | 0;
                K = K + fe | 0;
                q = q + ((F >>> 19 | V << 13) ^ (F << 3 | V >>> 29) ^ F >>> 6) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xa0e6e70 + K | 0;
                de = 0x14292967 + q + (ue >>> 0 < K >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                t = t + j | 0;
                e = e + Y + (t >>> 0 < j >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 1 | n << 31) ^ (v >>> 8 | n << 24) ^ (v >>> 7 | n << 25) | 0;
                t = t + fe | 0;
                e = e + ((n >>> 1 | v << 31) ^ (n >>> 8 | v << 24) ^ n >>> 7) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 19 | W << 13) ^ (U << 3 | W >>> 29) ^ (U >>> 6 | W << 26) | 0;
                t = t + fe | 0;
                e = e + ((W >>> 19 | U << 13) ^ (W << 3 | U >>> 29) ^ W >>> 6) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x46d22ffc + t | 0;
                de = 0x27b70a85 + e + (ue >>> 0 < t >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                v = v + I | 0;
                n = n + R + (v >>> 0 < I >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 1 | b << 31) ^ (w >>> 8 | b << 24) ^ (w >>> 7 | b << 25) | 0;
                v = v + fe | 0;
                n = n + ((b >>> 1 | w << 31) ^ (b >>> 8 | w << 24) ^ b >>> 7) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 19 | q << 13) ^ (K << 3 | q >>> 29) ^ (K >>> 6 | q << 26) | 0;
                v = v + fe | 0;
                n = n + ((q >>> 19 | K << 13) ^ (q << 3 | K >>> 29) ^ q >>> 6) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5c26c926 + v | 0;
                de = 0x2e1b2138 + n + (ue >>> 0 < v >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                w = w + N | 0;
                b = b + z + (w >>> 0 < N >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 1 | x << 31) ^ (E >>> 8 | x << 24) ^ (E >>> 7 | x << 25) | 0;
                w = w + fe | 0;
                b = b + ((x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ x >>> 7) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 19 | e << 13) ^ (t << 3 | e >>> 29) ^ (t >>> 6 | e << 26) | 0;
                w = w + fe | 0;
                b = b + ((e >>> 19 | t << 13) ^ (e << 3 | t >>> 29) ^ e >>> 6) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5ac42aed + w | 0;
                de = 0x4d2c6dfc + b + (ue >>> 0 < w >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                E = E + B | 0;
                x = x + H + (E >>> 0 < B >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 1 | k << 31) ^ (S >>> 8 | k << 24) ^ (S >>> 7 | k << 25) | 0;
                E = E + fe | 0;
                x = x + ((k >>> 1 | S << 31) ^ (k >>> 8 | S << 24) ^ k >>> 7) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 19 | n << 13) ^ (v << 3 | n >>> 29) ^ (v >>> 6 | n << 26) | 0;
                E = E + fe | 0;
                x = x + ((n >>> 19 | v << 13) ^ (n << 3 | v >>> 29) ^ n >>> 6) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x9d95b3df + E | 0;
                de = 0x53380d13 + x + (ue >>> 0 < E >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                S = S + V | 0;
                k = k + F + (S >>> 0 < V >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 1 | M << 31) ^ (C >>> 8 | M << 24) ^ (C >>> 7 | M << 25) | 0;
                S = S + fe | 0;
                k = k + ((M >>> 1 | C << 31) ^ (M >>> 8 | C << 24) ^ M >>> 7) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 19 | b << 13) ^ (w << 3 | b >>> 29) ^ (w >>> 6 | b << 26) | 0;
                S = S + fe | 0;
                k = k + ((b >>> 19 | w << 13) ^ (b << 3 | w >>> 29) ^ b >>> 6) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x8baf63de + S | 0;
                de = 0x650a7354 + k + (ue >>> 0 < S >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                C = C + U | 0;
                M = M + W + (C >>> 0 < U >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 1 | L << 31) ^ (P >>> 8 | L << 24) ^ (P >>> 7 | L << 25) | 0;
                C = C + fe | 0;
                M = M + ((L >>> 1 | P << 31) ^ (L >>> 8 | P << 24) ^ L >>> 7) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 19 | x << 13) ^ (E << 3 | x >>> 29) ^ (E >>> 6 | x << 26) | 0;
                C = C + fe | 0;
                M = M + ((x >>> 19 | E << 13) ^ (x << 3 | E >>> 29) ^ x >>> 6) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x3c77b2a8 + C | 0;
                de = 0x766a0abb + M + (ue >>> 0 < C >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                P = P + K | 0;
                L = L + q + (P >>> 0 < K >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 1 | T << 31) ^ (O >>> 8 | T << 24) ^ (O >>> 7 | T << 25) | 0;
                P = P + fe | 0;
                L = L + ((T >>> 1 | O << 31) ^ (T >>> 8 | O << 24) ^ T >>> 7) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 19 | k << 13) ^ (S << 3 | k >>> 29) ^ (S >>> 6 | k << 26) | 0;
                P = P + fe | 0;
                L = L + ((k >>> 19 | S << 13) ^ (k << 3 | S >>> 29) ^ k >>> 6) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x47edaee6 + P | 0;
                de = 0x81c2c92e + L + (ue >>> 0 < P >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                O = O + t | 0;
                T = T + e + (O >>> 0 < t >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 1 | A << 31) ^ (D >>> 8 | A << 24) ^ (D >>> 7 | A << 25) | 0;
                O = O + fe | 0;
                T = T + ((A >>> 1 | D << 31) ^ (A >>> 8 | D << 24) ^ A >>> 7) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 19 | M << 13) ^ (C << 3 | M >>> 29) ^ (C >>> 6 | M << 26) | 0;
                O = O + fe | 0;
                T = T + ((M >>> 19 | C << 13) ^ (M << 3 | C >>> 29) ^ M >>> 6) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x1482353b + O | 0;
                de = 0x92722c85 + T + (ue >>> 0 < O >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                D = D + v | 0;
                A = A + n + (D >>> 0 < v >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 1 | Y << 31) ^ (j >>> 8 | Y << 24) ^ (j >>> 7 | Y << 25) | 0;
                D = D + fe | 0;
                A = A + ((Y >>> 1 | j << 31) ^ (Y >>> 8 | j << 24) ^ Y >>> 7) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 19 | L << 13) ^ (P << 3 | L >>> 29) ^ (P >>> 6 | L << 26) | 0;
                D = D + fe | 0;
                A = A + ((L >>> 19 | P << 13) ^ (L << 3 | P >>> 29) ^ L >>> 6) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x4cf10364 + D | 0;
                de = 0xa2bfe8a1 + A + (ue >>> 0 < D >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                j = j + w | 0;
                Y = Y + b + (j >>> 0 < w >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 1 | R << 31) ^ (I >>> 8 | R << 24) ^ (I >>> 7 | R << 25) | 0;
                j = j + fe | 0;
                Y = Y + ((R >>> 1 | I << 31) ^ (R >>> 8 | I << 24) ^ R >>> 7) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 19 | T << 13) ^ (O << 3 | T >>> 29) ^ (O >>> 6 | T << 26) | 0;
                j = j + fe | 0;
                Y = Y + ((T >>> 19 | O << 13) ^ (T << 3 | O >>> 29) ^ T >>> 6) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xbc423001 + j | 0;
                de = 0xa81a664b + Y + (ue >>> 0 < j >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                I = I + E | 0;
                R = R + x + (I >>> 0 < E >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 1 | z << 31) ^ (N >>> 8 | z << 24) ^ (N >>> 7 | z << 25) | 0;
                I = I + fe | 0;
                R = R + ((z >>> 1 | N << 31) ^ (z >>> 8 | N << 24) ^ z >>> 7) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 19 | A << 13) ^ (D << 3 | A >>> 29) ^ (D >>> 6 | A << 26) | 0;
                I = I + fe | 0;
                R = R + ((A >>> 19 | D << 13) ^ (A << 3 | D >>> 29) ^ A >>> 6) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xd0f89791 + I | 0;
                de = 0xc24b8b70 + R + (ue >>> 0 < I >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                N = N + S | 0;
                z = z + k + (N >>> 0 < S >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 1 | H << 31) ^ (B >>> 8 | H << 24) ^ (B >>> 7 | H << 25) | 0;
                N = N + fe | 0;
                z = z + ((H >>> 1 | B << 31) ^ (H >>> 8 | B << 24) ^ H >>> 7) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 19 | Y << 13) ^ (j << 3 | Y >>> 29) ^ (j >>> 6 | Y << 26) | 0;
                N = N + fe | 0;
                z = z + ((Y >>> 19 | j << 13) ^ (Y << 3 | j >>> 29) ^ Y >>> 6) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x654be30 + N | 0;
                de = 0xc76c51a3 + z + (ue >>> 0 < N >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                B = B + C | 0;
                H = H + M + (B >>> 0 < C >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 1 | F << 31) ^ (V >>> 8 | F << 24) ^ (V >>> 7 | F << 25) | 0;
                B = B + fe | 0;
                H = H + ((F >>> 1 | V << 31) ^ (F >>> 8 | V << 24) ^ F >>> 7) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 19 | R << 13) ^ (I << 3 | R >>> 29) ^ (I >>> 6 | R << 26) | 0;
                B = B + fe | 0;
                H = H + ((R >>> 19 | I << 13) ^ (R << 3 | I >>> 29) ^ R >>> 6) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xd6ef5218 + B | 0;
                de = 0xd192e819 + H + (ue >>> 0 < B >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                V = V + P | 0;
                F = F + L + (V >>> 0 < P >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 1 | W << 31) ^ (U >>> 8 | W << 24) ^ (U >>> 7 | W << 25) | 0;
                V = V + fe | 0;
                F = F + ((W >>> 1 | U << 31) ^ (W >>> 8 | U << 24) ^ W >>> 7) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 19 | z << 13) ^ (N << 3 | z >>> 29) ^ (N >>> 6 | z << 26) | 0;
                V = V + fe | 0;
                F = F + ((z >>> 19 | N << 13) ^ (z << 3 | N >>> 29) ^ z >>> 6) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5565a910 + V | 0;
                de = 0xd6990624 + F + (ue >>> 0 < V >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                U = U + O | 0;
                W = W + T + (U >>> 0 < O >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 1 | q << 31) ^ (K >>> 8 | q << 24) ^ (K >>> 7 | q << 25) | 0;
                U = U + fe | 0;
                W = W + ((q >>> 1 | K << 31) ^ (q >>> 8 | K << 24) ^ q >>> 7) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 19 | H << 13) ^ (B << 3 | H >>> 29) ^ (B >>> 6 | H << 26) | 0;
                U = U + fe | 0;
                W = W + ((H >>> 19 | B << 13) ^ (H << 3 | B >>> 29) ^ H >>> 6) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5771202a + U | 0;
                de = 0xf40e3585 + W + (ue >>> 0 < U >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                K = K + D | 0;
                q = q + A + (K >>> 0 < D >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25) | 0;
                K = K + fe | 0;
                q = q + ((e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 19 | F << 13) ^ (V << 3 | F >>> 29) ^ (V >>> 6 | F << 26) | 0;
                K = K + fe | 0;
                q = q + ((F >>> 19 | V << 13) ^ (F << 3 | V >>> 29) ^ F >>> 6) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x32bbd1b8 + K | 0;
                de = 0x106aa070 + q + (ue >>> 0 < K >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                t = t + j | 0;
                e = e + Y + (t >>> 0 < j >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 1 | n << 31) ^ (v >>> 8 | n << 24) ^ (v >>> 7 | n << 25) | 0;
                t = t + fe | 0;
                e = e + ((n >>> 1 | v << 31) ^ (n >>> 8 | v << 24) ^ n >>> 7) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 19 | W << 13) ^ (U << 3 | W >>> 29) ^ (U >>> 6 | W << 26) | 0;
                t = t + fe | 0;
                e = e + ((W >>> 19 | U << 13) ^ (W << 3 | U >>> 29) ^ W >>> 6) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xb8d2d0c8 + t | 0;
                de = 0x19a4c116 + e + (ue >>> 0 < t >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                v = v + I | 0;
                n = n + R + (v >>> 0 < I >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 1 | b << 31) ^ (w >>> 8 | b << 24) ^ (w >>> 7 | b << 25) | 0;
                v = v + fe | 0;
                n = n + ((b >>> 1 | w << 31) ^ (b >>> 8 | w << 24) ^ b >>> 7) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 19 | q << 13) ^ (K << 3 | q >>> 29) ^ (K >>> 6 | q << 26) | 0;
                v = v + fe | 0;
                n = n + ((q >>> 19 | K << 13) ^ (q << 3 | K >>> 29) ^ q >>> 6) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5141ab53 + v | 0;
                de = 0x1e376c08 + n + (ue >>> 0 < v >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                w = w + N | 0;
                b = b + z + (w >>> 0 < N >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 1 | x << 31) ^ (E >>> 8 | x << 24) ^ (E >>> 7 | x << 25) | 0;
                w = w + fe | 0;
                b = b + ((x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ x >>> 7) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 19 | e << 13) ^ (t << 3 | e >>> 29) ^ (t >>> 6 | e << 26) | 0;
                w = w + fe | 0;
                b = b + ((e >>> 19 | t << 13) ^ (e << 3 | t >>> 29) ^ e >>> 6) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xdf8eeb99 + w | 0;
                de = 0x2748774c + b + (ue >>> 0 < w >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                E = E + B | 0;
                x = x + H + (E >>> 0 < B >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 1 | k << 31) ^ (S >>> 8 | k << 24) ^ (S >>> 7 | k << 25) | 0;
                E = E + fe | 0;
                x = x + ((k >>> 1 | S << 31) ^ (k >>> 8 | S << 24) ^ k >>> 7) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 19 | n << 13) ^ (v << 3 | n >>> 29) ^ (v >>> 6 | n << 26) | 0;
                E = E + fe | 0;
                x = x + ((n >>> 19 | v << 13) ^ (n << 3 | v >>> 29) ^ n >>> 6) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xe19b48a8 + E | 0;
                de = 0x34b0bcb5 + x + (ue >>> 0 < E >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                S = S + V | 0;
                k = k + F + (S >>> 0 < V >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 1 | M << 31) ^ (C >>> 8 | M << 24) ^ (C >>> 7 | M << 25) | 0;
                S = S + fe | 0;
                k = k + ((M >>> 1 | C << 31) ^ (M >>> 8 | C << 24) ^ M >>> 7) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 19 | b << 13) ^ (w << 3 | b >>> 29) ^ (w >>> 6 | b << 26) | 0;
                S = S + fe | 0;
                k = k + ((b >>> 19 | w << 13) ^ (b << 3 | w >>> 29) ^ b >>> 6) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xc5c95a63 + S | 0;
                de = 0x391c0cb3 + k + (ue >>> 0 < S >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                C = C + U | 0;
                M = M + W + (C >>> 0 < U >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 1 | L << 31) ^ (P >>> 8 | L << 24) ^ (P >>> 7 | L << 25) | 0;
                C = C + fe | 0;
                M = M + ((L >>> 1 | P << 31) ^ (L >>> 8 | P << 24) ^ L >>> 7) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 19 | x << 13) ^ (E << 3 | x >>> 29) ^ (E >>> 6 | x << 26) | 0;
                C = C + fe | 0;
                M = M + ((x >>> 19 | E << 13) ^ (x << 3 | E >>> 29) ^ x >>> 6) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xe3418acb + C | 0;
                de = 0x4ed8aa4a + M + (ue >>> 0 < C >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                P = P + K | 0;
                L = L + q + (P >>> 0 < K >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 1 | T << 31) ^ (O >>> 8 | T << 24) ^ (O >>> 7 | T << 25) | 0;
                P = P + fe | 0;
                L = L + ((T >>> 1 | O << 31) ^ (T >>> 8 | O << 24) ^ T >>> 7) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 19 | k << 13) ^ (S << 3 | k >>> 29) ^ (S >>> 6 | k << 26) | 0;
                P = P + fe | 0;
                L = L + ((k >>> 19 | S << 13) ^ (k << 3 | S >>> 29) ^ k >>> 6) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x7763e373 + P | 0;
                de = 0x5b9cca4f + L + (ue >>> 0 < P >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                O = O + t | 0;
                T = T + e + (O >>> 0 < t >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 1 | A << 31) ^ (D >>> 8 | A << 24) ^ (D >>> 7 | A << 25) | 0;
                O = O + fe | 0;
                T = T + ((A >>> 1 | D << 31) ^ (A >>> 8 | D << 24) ^ A >>> 7) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 19 | M << 13) ^ (C << 3 | M >>> 29) ^ (C >>> 6 | M << 26) | 0;
                O = O + fe | 0;
                T = T + ((M >>> 19 | C << 13) ^ (M << 3 | C >>> 29) ^ M >>> 6) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xd6b2b8a3 + O | 0;
                de = 0x682e6ff3 + T + (ue >>> 0 < O >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                D = D + v | 0;
                A = A + n + (D >>> 0 < v >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 1 | Y << 31) ^ (j >>> 8 | Y << 24) ^ (j >>> 7 | Y << 25) | 0;
                D = D + fe | 0;
                A = A + ((Y >>> 1 | j << 31) ^ (Y >>> 8 | j << 24) ^ Y >>> 7) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 19 | L << 13) ^ (P << 3 | L >>> 29) ^ (P >>> 6 | L << 26) | 0;
                D = D + fe | 0;
                A = A + ((L >>> 19 | P << 13) ^ (L << 3 | P >>> 29) ^ L >>> 6) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x5defb2fc + D | 0;
                de = 0x748f82ee + A + (ue >>> 0 < D >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                j = j + w | 0;
                Y = Y + b + (j >>> 0 < w >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 1 | R << 31) ^ (I >>> 8 | R << 24) ^ (I >>> 7 | R << 25) | 0;
                j = j + fe | 0;
                Y = Y + ((R >>> 1 | I << 31) ^ (R >>> 8 | I << 24) ^ R >>> 7) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 19 | T << 13) ^ (O << 3 | T >>> 29) ^ (O >>> 6 | T << 26) | 0;
                j = j + fe | 0;
                Y = Y + ((T >>> 19 | O << 13) ^ (T << 3 | O >>> 29) ^ T >>> 6) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x43172f60 + j | 0;
                de = 0x78a5636f + Y + (ue >>> 0 < j >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                I = I + E | 0;
                R = R + x + (I >>> 0 < E >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 1 | z << 31) ^ (N >>> 8 | z << 24) ^ (N >>> 7 | z << 25) | 0;
                I = I + fe | 0;
                R = R + ((z >>> 1 | N << 31) ^ (z >>> 8 | N << 24) ^ z >>> 7) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 19 | A << 13) ^ (D << 3 | A >>> 29) ^ (D >>> 6 | A << 26) | 0;
                I = I + fe | 0;
                R = R + ((A >>> 19 | D << 13) ^ (A << 3 | D >>> 29) ^ A >>> 6) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xa1f0ab72 + I | 0;
                de = 0x84c87814 + R + (ue >>> 0 < I >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                N = N + S | 0;
                z = z + k + (N >>> 0 < S >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 1 | H << 31) ^ (B >>> 8 | H << 24) ^ (B >>> 7 | H << 25) | 0;
                N = N + fe | 0;
                z = z + ((H >>> 1 | B << 31) ^ (H >>> 8 | B << 24) ^ H >>> 7) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 19 | Y << 13) ^ (j << 3 | Y >>> 29) ^ (j >>> 6 | Y << 26) | 0;
                N = N + fe | 0;
                z = z + ((Y >>> 19 | j << 13) ^ (Y << 3 | j >>> 29) ^ Y >>> 6) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x1a6439ec + N | 0;
                de = 0x8cc70208 + z + (ue >>> 0 < N >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                B = B + C | 0;
                H = H + M + (B >>> 0 < C >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 1 | F << 31) ^ (V >>> 8 | F << 24) ^ (V >>> 7 | F << 25) | 0;
                B = B + fe | 0;
                H = H + ((F >>> 1 | V << 31) ^ (F >>> 8 | V << 24) ^ F >>> 7) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 19 | R << 13) ^ (I << 3 | R >>> 29) ^ (I >>> 6 | R << 26) | 0;
                B = B + fe | 0;
                H = H + ((R >>> 19 | I << 13) ^ (R << 3 | I >>> 29) ^ R >>> 6) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x23631e28 + B | 0;
                de = 0x90befffa + H + (ue >>> 0 < B >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                V = V + P | 0;
                F = F + L + (V >>> 0 < P >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 1 | W << 31) ^ (U >>> 8 | W << 24) ^ (U >>> 7 | W << 25) | 0;
                V = V + fe | 0;
                F = F + ((W >>> 1 | U << 31) ^ (W >>> 8 | U << 24) ^ W >>> 7) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 19 | z << 13) ^ (N << 3 | z >>> 29) ^ (N >>> 6 | z << 26) | 0;
                V = V + fe | 0;
                F = F + ((z >>> 19 | N << 13) ^ (z << 3 | N >>> 29) ^ z >>> 6) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xde82bde9 + V | 0;
                de = 0xa4506ceb + F + (ue >>> 0 < V >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                U = U + O | 0;
                W = W + T + (U >>> 0 < O >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 1 | q << 31) ^ (K >>> 8 | q << 24) ^ (K >>> 7 | q << 25) | 0;
                U = U + fe | 0;
                W = W + ((q >>> 1 | K << 31) ^ (q >>> 8 | K << 24) ^ q >>> 7) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 19 | H << 13) ^ (B << 3 | H >>> 29) ^ (B >>> 6 | H << 26) | 0;
                U = U + fe | 0;
                W = W + ((H >>> 19 | B << 13) ^ (H << 3 | B >>> 29) ^ H >>> 6) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xb2c67915 + U | 0;
                de = 0xbef9a3f7 + W + (ue >>> 0 < U >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                K = K + D | 0;
                q = q + A + (K >>> 0 < D >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25) | 0;
                K = K + fe | 0;
                q = q + ((e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 19 | F << 13) ^ (V << 3 | F >>> 29) ^ (V >>> 6 | F << 26) | 0;
                K = K + fe | 0;
                q = q + ((F >>> 19 | V << 13) ^ (F << 3 | V >>> 29) ^ F >>> 6) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xe372532b + K | 0;
                de = 0xc67178f2 + q + (ue >>> 0 < K >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                t = t + j | 0;
                e = e + Y + (t >>> 0 < j >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 1 | n << 31) ^ (v >>> 8 | n << 24) ^ (v >>> 7 | n << 25) | 0;
                t = t + fe | 0;
                e = e + ((n >>> 1 | v << 31) ^ (n >>> 8 | v << 24) ^ n >>> 7) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 19 | W << 13) ^ (U << 3 | W >>> 29) ^ (U >>> 6 | W << 26) | 0;
                t = t + fe | 0;
                e = e + ((W >>> 19 | U << 13) ^ (W << 3 | U >>> 29) ^ W >>> 6) + (t >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xea26619c + t | 0;
                de = 0xca273ece + e + (ue >>> 0 < t >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                v = v + I | 0;
                n = n + R + (v >>> 0 < I >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 1 | b << 31) ^ (w >>> 8 | b << 24) ^ (w >>> 7 | b << 25) | 0;
                v = v + fe | 0;
                n = n + ((b >>> 1 | w << 31) ^ (b >>> 8 | w << 24) ^ b >>> 7) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 19 | q << 13) ^ (K << 3 | q >>> 29) ^ (K >>> 6 | q << 26) | 0;
                v = v + fe | 0;
                n = n + ((q >>> 19 | K << 13) ^ (q << 3 | K >>> 29) ^ q >>> 6) + (v >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x21c0c207 + v | 0;
                de = 0xd186b8c7 + n + (ue >>> 0 < v >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                w = w + N | 0;
                b = b + z + (w >>> 0 < N >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 1 | x << 31) ^ (E >>> 8 | x << 24) ^ (E >>> 7 | x << 25) | 0;
                w = w + fe | 0;
                b = b + ((x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ x >>> 7) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 19 | e << 13) ^ (t << 3 | e >>> 29) ^ (t >>> 6 | e << 26) | 0;
                w = w + fe | 0;
                b = b + ((e >>> 19 | t << 13) ^ (e << 3 | t >>> 29) ^ e >>> 6) + (w >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xcde0eb1e + w | 0;
                de = 0xeada7dd6 + b + (ue >>> 0 < w >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                E = E + B | 0;
                x = x + H + (E >>> 0 < B >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 1 | k << 31) ^ (S >>> 8 | k << 24) ^ (S >>> 7 | k << 25) | 0;
                E = E + fe | 0;
                x = x + ((k >>> 1 | S << 31) ^ (k >>> 8 | S << 24) ^ k >>> 7) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (v >>> 19 | n << 13) ^ (v << 3 | n >>> 29) ^ (v >>> 6 | n << 26) | 0;
                E = E + fe | 0;
                x = x + ((n >>> 19 | v << 13) ^ (n << 3 | v >>> 29) ^ n >>> 6) + (E >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xee6ed178 + E | 0;
                de = 0xf57d4f7f + x + (ue >>> 0 < E >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                S = S + V | 0;
                k = k + F + (S >>> 0 < V >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 1 | M << 31) ^ (C >>> 8 | M << 24) ^ (C >>> 7 | M << 25) | 0;
                S = S + fe | 0;
                k = k + ((M >>> 1 | C << 31) ^ (M >>> 8 | C << 24) ^ M >>> 7) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (w >>> 19 | b << 13) ^ (w << 3 | b >>> 29) ^ (w >>> 6 | b << 26) | 0;
                S = S + fe | 0;
                k = k + ((b >>> 19 | w << 13) ^ (b << 3 | w >>> 29) ^ b >>> 6) + (S >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x72176fba + S | 0;
                de = 0x6f067aa + k + (ue >>> 0 < S >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                C = C + U | 0;
                M = M + W + (C >>> 0 < U >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 1 | L << 31) ^ (P >>> 8 | L << 24) ^ (P >>> 7 | L << 25) | 0;
                C = C + fe | 0;
                M = M + ((L >>> 1 | P << 31) ^ (L >>> 8 | P << 24) ^ L >>> 7) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (E >>> 19 | x << 13) ^ (E << 3 | x >>> 29) ^ (E >>> 6 | x << 26) | 0;
                C = C + fe | 0;
                M = M + ((x >>> 19 | E << 13) ^ (x << 3 | E >>> 29) ^ x >>> 6) + (C >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xa2c898a6 + C | 0;
                de = 0xa637dc5 + M + (ue >>> 0 < C >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                P = P + K | 0;
                L = L + q + (P >>> 0 < K >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 1 | T << 31) ^ (O >>> 8 | T << 24) ^ (O >>> 7 | T << 25) | 0;
                P = P + fe | 0;
                L = L + ((T >>> 1 | O << 31) ^ (T >>> 8 | O << 24) ^ T >>> 7) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (S >>> 19 | k << 13) ^ (S << 3 | k >>> 29) ^ (S >>> 6 | k << 26) | 0;
                P = P + fe | 0;
                L = L + ((k >>> 19 | S << 13) ^ (k << 3 | S >>> 29) ^ k >>> 6) + (P >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xbef90dae + P | 0;
                de = 0x113f9804 + L + (ue >>> 0 < P >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                O = O + t | 0;
                T = T + e + (O >>> 0 < t >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 1 | A << 31) ^ (D >>> 8 | A << 24) ^ (D >>> 7 | A << 25) | 0;
                O = O + fe | 0;
                T = T + ((A >>> 1 | D << 31) ^ (A >>> 8 | D << 24) ^ A >>> 7) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (C >>> 19 | M << 13) ^ (C << 3 | M >>> 29) ^ (C >>> 6 | M << 26) | 0;
                O = O + fe | 0;
                T = T + ((M >>> 19 | C << 13) ^ (M << 3 | C >>> 29) ^ M >>> 6) + (O >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x131c471b + O | 0;
                de = 0x1b710b35 + T + (ue >>> 0 < O >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                D = D + v | 0;
                A = A + n + (D >>> 0 < v >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 1 | Y << 31) ^ (j >>> 8 | Y << 24) ^ (j >>> 7 | Y << 25) | 0;
                D = D + fe | 0;
                A = A + ((Y >>> 1 | j << 31) ^ (Y >>> 8 | j << 24) ^ Y >>> 7) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (P >>> 19 | L << 13) ^ (P << 3 | L >>> 29) ^ (P >>> 6 | L << 26) | 0;
                D = D + fe | 0;
                A = A + ((L >>> 19 | P << 13) ^ (L << 3 | P >>> 29) ^ L >>> 6) + (D >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x23047d84 + D | 0;
                de = 0x28db77f5 + A + (ue >>> 0 < D >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                j = j + w | 0;
                Y = Y + b + (j >>> 0 < w >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 1 | R << 31) ^ (I >>> 8 | R << 24) ^ (I >>> 7 | R << 25) | 0;
                j = j + fe | 0;
                Y = Y + ((R >>> 1 | I << 31) ^ (R >>> 8 | I << 24) ^ R >>> 7) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (O >>> 19 | T << 13) ^ (O << 3 | T >>> 29) ^ (O >>> 6 | T << 26) | 0;
                j = j + fe | 0;
                Y = Y + ((T >>> 19 | O << 13) ^ (T << 3 | O >>> 29) ^ T >>> 6) + (j >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x40c72493 + j | 0;
                de = 0x32caab7b + Y + (ue >>> 0 < j >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                I = I + E | 0;
                R = R + x + (I >>> 0 < E >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 1 | z << 31) ^ (N >>> 8 | z << 24) ^ (N >>> 7 | z << 25) | 0;
                I = I + fe | 0;
                R = R + ((z >>> 1 | N << 31) ^ (z >>> 8 | N << 24) ^ z >>> 7) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (D >>> 19 | A << 13) ^ (D << 3 | A >>> 29) ^ (D >>> 6 | A << 26) | 0;
                I = I + fe | 0;
                R = R + ((A >>> 19 | D << 13) ^ (A << 3 | D >>> 29) ^ A >>> 6) + (I >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x15c9bebc + I | 0;
                de = 0x3c9ebe0a + R + (ue >>> 0 < I >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                N = N + S | 0;
                z = z + k + (N >>> 0 < S >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 1 | H << 31) ^ (B >>> 8 | H << 24) ^ (B >>> 7 | H << 25) | 0;
                N = N + fe | 0;
                z = z + ((H >>> 1 | B << 31) ^ (H >>> 8 | B << 24) ^ H >>> 7) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (j >>> 19 | Y << 13) ^ (j << 3 | Y >>> 29) ^ (j >>> 6 | Y << 26) | 0;
                N = N + fe | 0;
                z = z + ((Y >>> 19 | j << 13) ^ (Y << 3 | j >>> 29) ^ Y >>> 6) + (N >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x9c100d4c + N | 0;
                de = 0x431d67c4 + z + (ue >>> 0 < N >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                B = B + C | 0;
                H = H + M + (B >>> 0 < C >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 1 | F << 31) ^ (V >>> 8 | F << 24) ^ (V >>> 7 | F << 25) | 0;
                B = B + fe | 0;
                H = H + ((F >>> 1 | V << 31) ^ (F >>> 8 | V << 24) ^ F >>> 7) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (I >>> 19 | R << 13) ^ (I << 3 | R >>> 29) ^ (I >>> 6 | R << 26) | 0;
                B = B + fe | 0;
                H = H + ((R >>> 19 | I << 13) ^ (R << 3 | I >>> 29) ^ R >>> 6) + (B >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xcb3e42b6 + B | 0;
                de = 0x4cc5d4be + H + (ue >>> 0 < B >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                V = V + P | 0;
                F = F + L + (V >>> 0 < P >>> 0 ? 1 : 0) | 0;
                fe = (U >>> 1 | W << 31) ^ (U >>> 8 | W << 24) ^ (U >>> 7 | W << 25) | 0;
                V = V + fe | 0;
                F = F + ((W >>> 1 | U << 31) ^ (W >>> 8 | U << 24) ^ W >>> 7) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (N >>> 19 | z << 13) ^ (N << 3 | z >>> 29) ^ (N >>> 6 | z << 26) | 0;
                V = V + fe | 0;
                F = F + ((z >>> 19 | N << 13) ^ (z << 3 | N >>> 29) ^ z >>> 6) + (V >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0xfc657e2a + V | 0;
                de = 0x597f299c + F + (ue >>> 0 < V >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                U = U + O | 0;
                W = W + T + (U >>> 0 < O >>> 0 ? 1 : 0) | 0;
                fe = (K >>> 1 | q << 31) ^ (K >>> 8 | q << 24) ^ (K >>> 7 | q << 25) | 0;
                U = U + fe | 0;
                W = W + ((q >>> 1 | K << 31) ^ (q >>> 8 | K << 24) ^ q >>> 7) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (B >>> 19 | H << 13) ^ (B << 3 | H >>> 29) ^ (B >>> 6 | H << 26) | 0;
                U = U + fe | 0;
                W = W + ((H >>> 19 | B << 13) ^ (H << 3 | B >>> 29) ^ H >>> 6) + (U >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x3ad6faec + U | 0;
                de = 0x5fcb6fab + W + (ue >>> 0 < U >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                K = K + D | 0;
                q = q + A + (K >>> 0 < D >>> 0 ? 1 : 0) | 0;
                fe = (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25) | 0;
                K = K + fe | 0;
                q = q + ((e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = (V >>> 19 | F << 13) ^ (V << 3 | F >>> 29) ^ (V >>> 6 | F << 26) | 0;
                K = K + fe | 0;
                q = q + ((F >>> 19 | V << 13) ^ (F << 3 | V >>> 29) ^ F >>> 6) + (K >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ue = 0x4a475817 + K | 0;
                de = 0x6c44198c + q + (ue >>> 0 < K >>> 0 ? 1 : 0) | 0;
                ue = ue + ce | 0;
                de = de + le + (ue >>> 0 < ce >>> 0 ? 1 : 0) | 0;
                fe = (re >>> 14 | ne << 18) ^ (re >>> 18 | ne << 14) ^ (re << 23 | ne >>> 9) | 0;
                ue = ue + fe | 0;
                de = de + ((ne >>> 14 | re << 18) ^ (ne >>> 18 | re << 14) ^ (ne << 23 | re >>> 9)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                fe = se ^ re & (oe ^ se) | 0;
                ue = ue + fe | 0;
                de = de + (ie ^ ne & (ae ^ ie)) + (ue >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                ce = se;
                le = ie;
                se = oe;
                ie = ae;
                oe = re;
                ae = ne;
                re = te + ue | 0;
                ne = ee + de + (re >>> 0 < te >>> 0 ? 1 : 0) | 0;
                te = $;
                ee = Q;
                $ = X;
                Q = J;
                X = G;
                J = Z;
                G = ue + (X & $ ^ te & (X ^ $)) | 0;
                Z = de + (J & Q ^ ee & (J ^ Q)) + (G >>> 0 < ue >>> 0 ? 1 : 0) | 0;
                fe = (X >>> 28 | J << 4) ^ (X << 30 | J >>> 2) ^ (X << 25 | J >>> 7) | 0;
                G = G + fe | 0;
                Z = Z + ((J >>> 28 | X << 4) ^ (J << 30 | X >>> 2) ^ (J << 25 | X >>> 7)) + (G >>> 0 < fe >>> 0 ? 1 : 0) | 0;
                a = a + G | 0;
                r = r + Z + (a >>> 0 < G >>> 0 ? 1 : 0) | 0;
                i = i + X | 0;
                o = o + J + (i >>> 0 < X >>> 0 ? 1 : 0) | 0;
                l = l + $ | 0;
                s = s + Q + (l >>> 0 < $ >>> 0 ? 1 : 0) | 0;
                d = d + te | 0;
                c = c + ee + (d >>> 0 < te >>> 0 ? 1 : 0) | 0;
                f = f + re | 0;
                u = u + ne + (f >>> 0 < re >>> 0 ? 1 : 0) | 0;
                m = m + oe | 0;
                p = p + ae + (m >>> 0 < oe >>> 0 ? 1 : 0) | 0;
                h = h + se | 0;
                _ = _ + ie + (h >>> 0 < se >>> 0 ? 1 : 0) | 0;
                y = y + ce | 0;
                g = g + le + (y >>> 0 < ce >>> 0 ? 1 : 0) | 0
            }
            function te(e) {
                e = e | 0;
                ee($[e | 0] << 24 | $[e | 1] << 16 | $[e | 2] << 8 | $[e | 3], $[e | 4] << 24 | $[e | 5] << 16 | $[e | 6] << 8 | $[e | 7], $[e | 8] << 24 | $[e | 9] << 16 | $[e | 10] << 8 | $[e | 11], $[e | 12] << 24 | $[e | 13] << 16 | $[e | 14] << 8 | $[e | 15], $[e | 16] << 24 | $[e | 17] << 16 | $[e | 18] << 8 | $[e | 19], $[e | 20] << 24 | $[e | 21] << 16 | $[e | 22] << 8 | $[e | 23], $[e | 24] << 24 | $[e | 25] << 16 | $[e | 26] << 8 | $[e | 27], $[e | 28] << 24 | $[e | 29] << 16 | $[e | 30] << 8 | $[e | 31], $[e | 32] << 24 | $[e | 33] << 16 | $[e | 34] << 8 | $[e | 35], $[e | 36] << 24 | $[e | 37] << 16 | $[e | 38] << 8 | $[e | 39], $[e | 40] << 24 | $[e | 41] << 16 | $[e | 42] << 8 | $[e | 43], $[e | 44] << 24 | $[e | 45] << 16 | $[e | 46] << 8 | $[e | 47], $[e | 48] << 24 | $[e | 49] << 16 | $[e | 50] << 8 | $[e | 51], $[e | 52] << 24 | $[e | 53] << 16 | $[e | 54] << 8 | $[e | 55], $[e | 56] << 24 | $[e | 57] << 16 | $[e | 58] << 8 | $[e | 59], $[e | 60] << 24 | $[e | 61] << 16 | $[e | 62] << 8 | $[e | 63], $[e | 64] << 24 | $[e | 65] << 16 | $[e | 66] << 8 | $[e | 67], $[e | 68] << 24 | $[e | 69] << 16 | $[e | 70] << 8 | $[e | 71], $[e | 72] << 24 | $[e | 73] << 16 | $[e | 74] << 8 | $[e | 75], $[e | 76] << 24 | $[e | 77] << 16 | $[e | 78] << 8 | $[e | 79], $[e | 80] << 24 | $[e | 81] << 16 | $[e | 82] << 8 | $[e | 83], $[e | 84] << 24 | $[e | 85] << 16 | $[e | 86] << 8 | $[e | 87], $[e | 88] << 24 | $[e | 89] << 16 | $[e | 90] << 8 | $[e | 91], $[e | 92] << 24 | $[e | 93] << 16 | $[e | 94] << 8 | $[e | 95], $[e | 96] << 24 | $[e | 97] << 16 | $[e | 98] << 8 | $[e | 99], $[e | 100] << 24 | $[e | 101] << 16 | $[e | 102] << 8 | $[e | 103], $[e | 104] << 24 | $[e | 105] << 16 | $[e | 106] << 8 | $[e | 107], $[e | 108] << 24 | $[e | 109] << 16 | $[e | 110] << 8 | $[e | 111], $[e | 112] << 24 | $[e | 113] << 16 | $[e | 114] << 8 | $[e | 115], $[e | 116] << 24 | $[e | 117] << 16 | $[e | 118] << 8 | $[e | 119], $[e | 120] << 24 | $[e | 121] << 16 | $[e | 122] << 8 | $[e | 123], $[e | 124] << 24 | $[e | 125] << 16 | $[e | 126] << 8 | $[e | 127])
            }
            function ne(e) {
                e = e | 0;
                $[e | 0] = r >>> 24;
                $[e | 1] = r >>> 16 & 255;
                $[e | 2] = r >>> 8 & 255;
                $[e | 3] = r & 255;
                $[e | 4] = a >>> 24;
                $[e | 5] = a >>> 16 & 255;
                $[e | 6] = a >>> 8 & 255;
                $[e | 7] = a & 255;
                $[e | 8] = o >>> 24;
                $[e | 9] = o >>> 16 & 255;
                $[e | 10] = o >>> 8 & 255;
                $[e | 11] = o & 255;
                $[e | 12] = i >>> 24;
                $[e | 13] = i >>> 16 & 255;
                $[e | 14] = i >>> 8 & 255;
                $[e | 15] = i & 255;
                $[e | 16] = s >>> 24;
                $[e | 17] = s >>> 16 & 255;
                $[e | 18] = s >>> 8 & 255;
                $[e | 19] = s & 255;
                $[e | 20] = l >>> 24;
                $[e | 21] = l >>> 16 & 255;
                $[e | 22] = l >>> 8 & 255;
                $[e | 23] = l & 255;
                $[e | 24] = c >>> 24;
                $[e | 25] = c >>> 16 & 255;
                $[e | 26] = c >>> 8 & 255;
                $[e | 27] = c & 255;
                $[e | 28] = d >>> 24;
                $[e | 29] = d >>> 16 & 255;
                $[e | 30] = d >>> 8 & 255;
                $[e | 31] = d & 255;
                $[e | 32] = u >>> 24;
                $[e | 33] = u >>> 16 & 255;
                $[e | 34] = u >>> 8 & 255;
                $[e | 35] = u & 255;
                $[e | 36] = f >>> 24;
                $[e | 37] = f >>> 16 & 255;
                $[e | 38] = f >>> 8 & 255;
                $[e | 39] = f & 255;
                $[e | 40] = p >>> 24;
                $[e | 41] = p >>> 16 & 255;
                $[e | 42] = p >>> 8 & 255;
                $[e | 43] = p & 255;
                $[e | 44] = m >>> 24;
                $[e | 45] = m >>> 16 & 255;
                $[e | 46] = m >>> 8 & 255;
                $[e | 47] = m & 255;
                $[e | 48] = _ >>> 24;
                $[e | 49] = _ >>> 16 & 255;
                $[e | 50] = _ >>> 8 & 255;
                $[e | 51] = _ & 255;
                $[e | 52] = h >>> 24;
                $[e | 53] = h >>> 16 & 255;
                $[e | 54] = h >>> 8 & 255;
                $[e | 55] = h & 255;
                $[e | 56] = g >>> 24;
                $[e | 57] = g >>> 16 & 255;
                $[e | 58] = g >>> 8 & 255;
                $[e | 59] = g & 255;
                $[e | 60] = y >>> 24;
                $[e | 61] = y >>> 16 & 255;
                $[e | 62] = y >>> 8 & 255;
                $[e | 63] = y & 255
            }
            function re() {
                r = 0x6a09e667;
                a = 0xf3bcc908;
                o = 0xbb67ae85;
                i = 0x84caa73b;
                s = 0x3c6ef372;
                l = 0xfe94f82b;
                c = 0xa54ff53a;
                d = 0x5f1d36f1;
                u = 0x510e527f;
                f = 0xade682d1;
                p = 0x9b05688c;
                m = 0x2b3e6c1f;
                _ = 0x1f83d9ab;
                h = 0xfb41bd6b;
                g = 0x5be0cd19;
                y = 0x137e2179;
                v = b = 0
            }
            function ae(e, t, n, w, x, E, k, S, M, C, L, P, T, O, A, D, Y, j) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                w = w | 0;
                x = x | 0;
                E = E | 0;
                k = k | 0;
                S = S | 0;
                M = M | 0;
                C = C | 0;
                L = L | 0;
                P = P | 0;
                T = T | 0;
                O = O | 0;
                A = A | 0;
                D = D | 0;
                Y = Y | 0;
                j = j | 0;
                r = e;
                a = t;
                o = n;
                i = w;
                s = x;
                l = E;
                c = k;
                d = S;
                u = M;
                f = C;
                p = L;
                m = P;
                _ = T;
                h = O;
                g = A;
                y = D;
                v = Y;
                b = j
            }
            function oe(e, t) {
                e = e | 0;
                t = t | 0;
                var n = 0;
                if (e & 127)
                    return -1;
                while ((t | 0) >= 128) {
                    te(e);
                    e = e + 128 | 0;
                    t = t - 128 | 0;
                    n = n + 128 | 0
                }
                v = v + n | 0;
                if (v >>> 0 < n >>> 0)
                    b = b + 1 | 0;
                return n | 0
            }
            function ie(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var r = 0
                  , a = 0;
                if (e & 127)
                    return -1;
                if (~n)
                    if (n & 63)
                        return -1;
                if ((t | 0) >= 128) {
                    r = oe(e, t) | 0;
                    if ((r | 0) == -1)
                        return -1;
                    e = e + r | 0;
                    t = t - r | 0
                }
                r = r + t | 0;
                v = v + t | 0;
                if (v >>> 0 < t >>> 0)
                    b = b + 1 | 0;
                $[e | t] = 0x80;
                if ((t | 0) >= 112) {
                    for (a = t + 1 | 0; (a | 0) < 128; a = a + 1 | 0)
                        $[e | a] = 0x00;
                    te(e);
                    t = 0;
                    $[e | 0] = 0
                }
                for (a = t + 1 | 0; (a | 0) < 123; a = a + 1 | 0)
                    $[e | a] = 0;
                $[e | 120] = b >>> 21 & 255;
                $[e | 121] = b >>> 13 & 255;
                $[e | 122] = b >>> 5 & 255;
                $[e | 123] = b << 3 & 255 | v >>> 29;
                $[e | 124] = v >>> 21 & 255;
                $[e | 125] = v >>> 13 & 255;
                $[e | 126] = v >>> 5 & 255;
                $[e | 127] = v << 3 & 255;
                te(e);
                if (~n)
                    ne(n);
                return r | 0
            }
            function se() {
                r = w;
                a = x;
                o = E;
                i = k;
                s = S;
                l = M;
                c = C;
                d = L;
                u = P;
                f = T;
                p = O;
                m = A;
                _ = D;
                h = Y;
                g = j;
                y = R;
                v = 128;
                b = 0
            }
            function le() {
                r = I;
                a = z;
                o = N;
                i = H;
                s = B;
                l = F;
                c = V;
                d = W;
                u = U;
                f = q;
                p = K;
                m = Z;
                _ = G;
                h = J;
                g = X;
                y = Q;
                v = 128;
                b = 0
            }
            function ce(e, t, n, $, te, ne, ae, oe, ie, se, le, ce, de, ue, fe, pe, me, _e, he, ge, ye, ve, be, we, xe, Ee, ke, Se, Me, Ce, Le, Pe) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                $ = $ | 0;
                te = te | 0;
                ne = ne | 0;
                ae = ae | 0;
                oe = oe | 0;
                ie = ie | 0;
                se = se | 0;
                le = le | 0;
                ce = ce | 0;
                de = de | 0;
                ue = ue | 0;
                fe = fe | 0;
                pe = pe | 0;
                me = me | 0;
                _e = _e | 0;
                he = he | 0;
                ge = ge | 0;
                ye = ye | 0;
                ve = ve | 0;
                be = be | 0;
                we = we | 0;
                xe = xe | 0;
                Ee = Ee | 0;
                ke = ke | 0;
                Se = Se | 0;
                Me = Me | 0;
                Ce = Ce | 0;
                Le = Le | 0;
                Pe = Pe | 0;
                re();
                ee(e ^ 0x5c5c5c5c, t ^ 0x5c5c5c5c, n ^ 0x5c5c5c5c, $ ^ 0x5c5c5c5c, te ^ 0x5c5c5c5c, ne ^ 0x5c5c5c5c, ae ^ 0x5c5c5c5c, oe ^ 0x5c5c5c5c, ie ^ 0x5c5c5c5c, se ^ 0x5c5c5c5c, le ^ 0x5c5c5c5c, ce ^ 0x5c5c5c5c, de ^ 0x5c5c5c5c, ue ^ 0x5c5c5c5c, fe ^ 0x5c5c5c5c, pe ^ 0x5c5c5c5c, me ^ 0x5c5c5c5c, _e ^ 0x5c5c5c5c, he ^ 0x5c5c5c5c, ge ^ 0x5c5c5c5c, ye ^ 0x5c5c5c5c, ve ^ 0x5c5c5c5c, be ^ 0x5c5c5c5c, we ^ 0x5c5c5c5c, xe ^ 0x5c5c5c5c, Ee ^ 0x5c5c5c5c, ke ^ 0x5c5c5c5c, Se ^ 0x5c5c5c5c, Me ^ 0x5c5c5c5c, Ce ^ 0x5c5c5c5c, Le ^ 0x5c5c5c5c, Pe ^ 0x5c5c5c5c);
                I = r;
                z = a;
                N = o;
                H = i;
                B = s;
                F = l;
                V = c;
                W = d;
                U = u;
                q = f;
                K = p;
                Z = m;
                G = _;
                J = h;
                X = g;
                Q = y;
                re();
                ee(e ^ 0x36363636, t ^ 0x36363636, n ^ 0x36363636, $ ^ 0x36363636, te ^ 0x36363636, ne ^ 0x36363636, ae ^ 0x36363636, oe ^ 0x36363636, ie ^ 0x36363636, se ^ 0x36363636, le ^ 0x36363636, ce ^ 0x36363636, de ^ 0x36363636, ue ^ 0x36363636, fe ^ 0x36363636, pe ^ 0x36363636, me ^ 0x36363636, _e ^ 0x36363636, he ^ 0x36363636, ge ^ 0x36363636, ye ^ 0x36363636, ve ^ 0x36363636, be ^ 0x36363636, we ^ 0x36363636, xe ^ 0x36363636, Ee ^ 0x36363636, ke ^ 0x36363636, Se ^ 0x36363636, Me ^ 0x36363636, Ce ^ 0x36363636, Le ^ 0x36363636, Pe ^ 0x36363636);
                w = r;
                x = a;
                E = o;
                k = i;
                S = s;
                M = l;
                C = c;
                L = d;
                P = u;
                T = f;
                O = p;
                A = m;
                D = _;
                Y = h;
                j = g;
                R = y;
                v = 128;
                b = 0
            }
            function de(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var v = 0
                  , b = 0
                  , w = 0
                  , x = 0
                  , E = 0
                  , k = 0
                  , S = 0
                  , M = 0
                  , C = 0
                  , L = 0
                  , P = 0
                  , T = 0
                  , O = 0
                  , A = 0
                  , D = 0
                  , Y = 0
                  , j = 0;
                if (e & 127)
                    return -1;
                if (~n)
                    if (n & 63)
                        return -1;
                j = ie(e, t, -1) | 0;
                v = r;
                b = a;
                w = o;
                x = i;
                E = s;
                k = l;
                S = c;
                M = d;
                C = u;
                L = f;
                P = p;
                T = m;
                O = _;
                A = h;
                D = g;
                Y = y;
                le();
                ee(v, b, w, x, E, k, S, M, C, L, P, T, O, A, D, Y, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
                if (~n)
                    ne(n);
                return j | 0
            }
            function ue(e, t, n, v, b) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                v = v | 0;
                b = b | 0;
                var w = 0
                  , x = 0
                  , E = 0
                  , k = 0
                  , S = 0
                  , M = 0
                  , C = 0
                  , L = 0
                  , P = 0
                  , T = 0
                  , O = 0
                  , A = 0
                  , D = 0
                  , Y = 0
                  , j = 0
                  , R = 0
                  , I = 0
                  , z = 0
                  , N = 0
                  , H = 0
                  , B = 0
                  , F = 0
                  , V = 0
                  , W = 0
                  , U = 0
                  , q = 0
                  , K = 0
                  , Z = 0
                  , G = 0
                  , J = 0
                  , X = 0
                  , Q = 0;
                if (e & 127)
                    return -1;
                if (~b)
                    if (b & 63)
                        return -1;
                $[e + t | 0] = n >>> 24;
                $[e + t + 1 | 0] = n >>> 16 & 255;
                $[e + t + 2 | 0] = n >>> 8 & 255;
                $[e + t + 3 | 0] = n & 255;
                de(e, t + 4 | 0, -1) | 0;
                w = I = r;
                x = z = a;
                E = N = o;
                k = H = i;
                S = B = s;
                M = F = l;
                C = V = c;
                L = W = d;
                P = U = u;
                T = q = f;
                O = K = p;
                A = Z = m;
                D = G = _;
                Y = J = h;
                j = X = g;
                R = Q = y;
                v = v - 1 | 0;
                while ((v | 0) > 0) {
                    se();
                    ee(I, z, N, H, B, F, V, W, U, q, K, Z, G, J, X, Q, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
                    I = r;
                    z = a;
                    N = o;
                    H = i;
                    B = s;
                    F = l;
                    V = c;
                    W = d;
                    U = u;
                    q = f;
                    K = p;
                    Z = m;
                    G = _;
                    J = h;
                    X = g;
                    Q = y;
                    le();
                    ee(I, z, N, H, B, F, V, W, U, q, K, Z, G, J, X, Q, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
                    I = r;
                    z = a;
                    N = o;
                    H = i;
                    B = s;
                    F = l;
                    V = c;
                    W = d;
                    U = u;
                    q = f;
                    K = p;
                    Z = m;
                    G = _;
                    J = h;
                    X = g;
                    Q = y;
                    w = w ^ r;
                    x = x ^ a;
                    E = E ^ o;
                    k = k ^ i;
                    S = S ^ s;
                    M = M ^ l;
                    C = C ^ c;
                    L = L ^ d;
                    P = P ^ u;
                    T = T ^ f;
                    O = O ^ p;
                    A = A ^ m;
                    D = D ^ _;
                    Y = Y ^ h;
                    j = j ^ g;
                    R = R ^ y;
                    v = v - 1 | 0
                }
                r = w;
                a = x;
                o = E;
                i = k;
                s = S;
                l = M;
                c = C;
                d = L;
                u = P;
                f = T;
                p = O;
                m = A;
                _ = D;
                h = Y;
                g = j;
                y = R;
                if (~b)
                    ne(b);
                return 0
            }
            return {
                reset: re,
                init: ae,
                process: oe,
                finish: ie,
                hmac_reset: se,
                hmac_init: ce,
                hmac_finish: de,
                pbkdf2_generate_block: ue
            }
        }({
            Uint8Array
        }, 0, this.heap.buffer),
        this.reset()
    }
}

class S extends k {
    constructor() {
        super(),
        this.NAME = "sha256",
        this.BLOCK_SIZE = 64,
        this.HASH_SIZE = 32,
        this.heap = o(),
        this.asm = function(e, t, n) {
            "use asm";
            var r = 0
              , a = 0
              , o = 0
              , i = 0
              , s = 0
              , l = 0
              , c = 0
              , d = 0
              , u = 0
              , f = 0
              , p = 0
              , m = 0
              , _ = 0
              , h = 0
              , g = 0
              , y = 0
              , v = 0
              , b = 0
              , w = 0
              , x = 0
              , E = 0
              , k = 0
              , S = 0
              , M = 0
              , C = 0
              , L = 0
              , P = new e.Uint8Array(n);
            function T(e, t, n, u, f, p, m, _, h, g, y, v, b, w, x, E) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                f = f | 0;
                p = p | 0;
                m = m | 0;
                _ = _ | 0;
                h = h | 0;
                g = g | 0;
                y = y | 0;
                v = v | 0;
                b = b | 0;
                w = w | 0;
                x = x | 0;
                E = E | 0;
                var k = 0
                  , S = 0
                  , M = 0
                  , C = 0
                  , L = 0
                  , P = 0
                  , T = 0
                  , O = 0;
                k = r;
                S = a;
                M = o;
                C = i;
                L = s;
                P = l;
                T = c;
                O = d;
                O = e + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0x428a2f98 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                T = t + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0x71374491 | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                P = n + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0xb5c0fbcf | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                L = u + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0xe9b5dba5 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                C = f + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x3956c25b | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                M = p + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0x59f111f1 | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                S = m + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x923f82a4 | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                k = _ + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0xab1c5ed5 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                O = h + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0xd807aa98 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                T = g + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0x12835b01 | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                P = y + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0x243185be | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                L = v + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0x550c7dc3 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                C = b + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x72be5d74 | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                M = w + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0x80deb1fe | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                S = x + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x9bdc06a7 | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                k = E + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0xc19bf174 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (x >>> 17 ^ x >>> 19 ^ x >>> 10 ^ x << 15 ^ x << 13) + e + g | 0;
                O = e + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0xe49b69c1 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                t = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (E >>> 17 ^ E >>> 19 ^ E >>> 10 ^ E << 15 ^ E << 13) + t + y | 0;
                T = t + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0xefbe4786 | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                n = (u >>> 7 ^ u >>> 18 ^ u >>> 3 ^ u << 25 ^ u << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + n + v | 0;
                P = n + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0x0fc19dc6 | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                u = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + u + b | 0;
                L = u + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0x240ca1cc | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                f = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (n >>> 17 ^ n >>> 19 ^ n >>> 10 ^ n << 15 ^ n << 13) + f + w | 0;
                C = f + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x2de92c6f | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                p = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (u >>> 17 ^ u >>> 19 ^ u >>> 10 ^ u << 15 ^ u << 13) + p + x | 0;
                M = p + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0x4a7484aa | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                m = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + m + E | 0;
                S = m + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x5cb0a9dc | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (h >>> 7 ^ h >>> 18 ^ h >>> 3 ^ h << 25 ^ h << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + _ + e | 0;
                k = _ + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0x76f988da | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                h = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + h + t | 0;
                O = h + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0x983e5152 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                g = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + g + n | 0;
                T = g + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0xa831c66d | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                y = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (h >>> 17 ^ h >>> 19 ^ h >>> 10 ^ h << 15 ^ h << 13) + y + u | 0;
                P = y + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0xb00327c8 | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                v = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + f | 0;
                L = v + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0xbf597fc7 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                b = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + b + p | 0;
                C = b + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0xc6e00bf3 | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                w = (x >>> 7 ^ x >>> 18 ^ x >>> 3 ^ x << 25 ^ x << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + w + m | 0;
                M = w + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0xd5a79147 | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                x = (E >>> 7 ^ E >>> 18 ^ E >>> 3 ^ E << 25 ^ E << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + x + _ | 0;
                S = x + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x06ca6351 | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                E = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + E + h | 0;
                k = E + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0x14292967 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (x >>> 17 ^ x >>> 19 ^ x >>> 10 ^ x << 15 ^ x << 13) + e + g | 0;
                O = e + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0x27b70a85 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                t = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (E >>> 17 ^ E >>> 19 ^ E >>> 10 ^ E << 15 ^ E << 13) + t + y | 0;
                T = t + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0x2e1b2138 | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                n = (u >>> 7 ^ u >>> 18 ^ u >>> 3 ^ u << 25 ^ u << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + n + v | 0;
                P = n + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0x4d2c6dfc | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                u = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + u + b | 0;
                L = u + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0x53380d13 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                f = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (n >>> 17 ^ n >>> 19 ^ n >>> 10 ^ n << 15 ^ n << 13) + f + w | 0;
                C = f + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x650a7354 | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                p = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (u >>> 17 ^ u >>> 19 ^ u >>> 10 ^ u << 15 ^ u << 13) + p + x | 0;
                M = p + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0x766a0abb | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                m = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + m + E | 0;
                S = m + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x81c2c92e | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (h >>> 7 ^ h >>> 18 ^ h >>> 3 ^ h << 25 ^ h << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + _ + e | 0;
                k = _ + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0x92722c85 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                h = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + h + t | 0;
                O = h + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0xa2bfe8a1 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                g = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + g + n | 0;
                T = g + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0xa81a664b | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                y = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (h >>> 17 ^ h >>> 19 ^ h >>> 10 ^ h << 15 ^ h << 13) + y + u | 0;
                P = y + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0xc24b8b70 | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                v = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + f | 0;
                L = v + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0xc76c51a3 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                b = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + b + p | 0;
                C = b + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0xd192e819 | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                w = (x >>> 7 ^ x >>> 18 ^ x >>> 3 ^ x << 25 ^ x << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + w + m | 0;
                M = w + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0xd6990624 | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                x = (E >>> 7 ^ E >>> 18 ^ E >>> 3 ^ E << 25 ^ E << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + x + _ | 0;
                S = x + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0xf40e3585 | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                E = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + E + h | 0;
                k = E + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0x106aa070 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (x >>> 17 ^ x >>> 19 ^ x >>> 10 ^ x << 15 ^ x << 13) + e + g | 0;
                O = e + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0x19a4c116 | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                t = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (E >>> 17 ^ E >>> 19 ^ E >>> 10 ^ E << 15 ^ E << 13) + t + y | 0;
                T = t + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0x1e376c08 | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                n = (u >>> 7 ^ u >>> 18 ^ u >>> 3 ^ u << 25 ^ u << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + n + v | 0;
                P = n + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0x2748774c | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                u = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + u + b | 0;
                L = u + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0x34b0bcb5 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                f = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (n >>> 17 ^ n >>> 19 ^ n >>> 10 ^ n << 15 ^ n << 13) + f + w | 0;
                C = f + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x391c0cb3 | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                p = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (u >>> 17 ^ u >>> 19 ^ u >>> 10 ^ u << 15 ^ u << 13) + p + x | 0;
                M = p + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0x4ed8aa4a | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                m = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + m + E | 0;
                S = m + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0x5b9cca4f | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (h >>> 7 ^ h >>> 18 ^ h >>> 3 ^ h << 25 ^ h << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + _ + e | 0;
                k = _ + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0x682e6ff3 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                h = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + h + t | 0;
                O = h + O + (L >>> 6 ^ L >>> 11 ^ L >>> 25 ^ L << 26 ^ L << 21 ^ L << 7) + (T ^ L & (P ^ T)) + 0x748f82ee | 0;
                C = C + O | 0;
                O = O + (k & S ^ M & (k ^ S)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
                g = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + g + n | 0;
                T = g + T + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (P ^ C & (L ^ P)) + 0x78a5636f | 0;
                M = M + T | 0;
                T = T + (O & k ^ S & (O ^ k)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0;
                y = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (h >>> 17 ^ h >>> 19 ^ h >>> 10 ^ h << 15 ^ h << 13) + y + u | 0;
                P = y + P + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (L ^ M & (C ^ L)) + 0x84c87814 | 0;
                S = S + P | 0;
                P = P + (T & O ^ k & (T ^ O)) + (T >>> 2 ^ T >>> 13 ^ T >>> 22 ^ T << 30 ^ T << 19 ^ T << 10) | 0;
                v = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + f | 0;
                L = v + L + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (C ^ S & (M ^ C)) + 0x8cc70208 | 0;
                k = k + L | 0;
                L = L + (P & T ^ O & (P ^ T)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                b = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + b + p | 0;
                C = b + C + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (M ^ k & (S ^ M)) + 0x90befffa | 0;
                O = O + C | 0;
                C = C + (L & P ^ T & (L ^ P)) + (L >>> 2 ^ L >>> 13 ^ L >>> 22 ^ L << 30 ^ L << 19 ^ L << 10) | 0;
                w = (x >>> 7 ^ x >>> 18 ^ x >>> 3 ^ x << 25 ^ x << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + w + m | 0;
                M = w + M + (O >>> 6 ^ O >>> 11 ^ O >>> 25 ^ O << 26 ^ O << 21 ^ O << 7) + (S ^ O & (k ^ S)) + 0xa4506ceb | 0;
                T = T + M | 0;
                M = M + (C & L ^ P & (C ^ L)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                x = (E >>> 7 ^ E >>> 18 ^ E >>> 3 ^ E << 25 ^ E << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + x + _ | 0;
                S = x + S + (T >>> 6 ^ T >>> 11 ^ T >>> 25 ^ T << 26 ^ T << 21 ^ T << 7) + (k ^ T & (O ^ k)) + 0xbef9a3f7 | 0;
                P = P + S | 0;
                S = S + (M & C ^ L & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                E = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + E + h | 0;
                k = E + k + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (O ^ P & (T ^ O)) + 0xc67178f2 | 0;
                L = L + k | 0;
                k = k + (S & M ^ C & (S ^ M)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                r = r + k | 0;
                a = a + S | 0;
                o = o + M | 0;
                i = i + C | 0;
                s = s + L | 0;
                l = l + P | 0;
                c = c + T | 0;
                d = d + O | 0
            }
            function O(e) {
                e = e | 0;
                T(P[e | 0] << 24 | P[e | 1] << 16 | P[e | 2] << 8 | P[e | 3], P[e | 4] << 24 | P[e | 5] << 16 | P[e | 6] << 8 | P[e | 7], P[e | 8] << 24 | P[e | 9] << 16 | P[e | 10] << 8 | P[e | 11], P[e | 12] << 24 | P[e | 13] << 16 | P[e | 14] << 8 | P[e | 15], P[e | 16] << 24 | P[e | 17] << 16 | P[e | 18] << 8 | P[e | 19], P[e | 20] << 24 | P[e | 21] << 16 | P[e | 22] << 8 | P[e | 23], P[e | 24] << 24 | P[e | 25] << 16 | P[e | 26] << 8 | P[e | 27], P[e | 28] << 24 | P[e | 29] << 16 | P[e | 30] << 8 | P[e | 31], P[e | 32] << 24 | P[e | 33] << 16 | P[e | 34] << 8 | P[e | 35], P[e | 36] << 24 | P[e | 37] << 16 | P[e | 38] << 8 | P[e | 39], P[e | 40] << 24 | P[e | 41] << 16 | P[e | 42] << 8 | P[e | 43], P[e | 44] << 24 | P[e | 45] << 16 | P[e | 46] << 8 | P[e | 47], P[e | 48] << 24 | P[e | 49] << 16 | P[e | 50] << 8 | P[e | 51], P[e | 52] << 24 | P[e | 53] << 16 | P[e | 54] << 8 | P[e | 55], P[e | 56] << 24 | P[e | 57] << 16 | P[e | 58] << 8 | P[e | 59], P[e | 60] << 24 | P[e | 61] << 16 | P[e | 62] << 8 | P[e | 63])
            }
            function A(e) {
                e = e | 0;
                P[e | 0] = r >>> 24;
                P[e | 1] = r >>> 16 & 255;
                P[e | 2] = r >>> 8 & 255;
                P[e | 3] = r & 255;
                P[e | 4] = a >>> 24;
                P[e | 5] = a >>> 16 & 255;
                P[e | 6] = a >>> 8 & 255;
                P[e | 7] = a & 255;
                P[e | 8] = o >>> 24;
                P[e | 9] = o >>> 16 & 255;
                P[e | 10] = o >>> 8 & 255;
                P[e | 11] = o & 255;
                P[e | 12] = i >>> 24;
                P[e | 13] = i >>> 16 & 255;
                P[e | 14] = i >>> 8 & 255;
                P[e | 15] = i & 255;
                P[e | 16] = s >>> 24;
                P[e | 17] = s >>> 16 & 255;
                P[e | 18] = s >>> 8 & 255;
                P[e | 19] = s & 255;
                P[e | 20] = l >>> 24;
                P[e | 21] = l >>> 16 & 255;
                P[e | 22] = l >>> 8 & 255;
                P[e | 23] = l & 255;
                P[e | 24] = c >>> 24;
                P[e | 25] = c >>> 16 & 255;
                P[e | 26] = c >>> 8 & 255;
                P[e | 27] = c & 255;
                P[e | 28] = d >>> 24;
                P[e | 29] = d >>> 16 & 255;
                P[e | 30] = d >>> 8 & 255;
                P[e | 31] = d & 255
            }
            function D() {
                r = 0x6a09e667;
                a = 0xbb67ae85;
                o = 0x3c6ef372;
                i = 0xa54ff53a;
                s = 0x510e527f;
                l = 0x9b05688c;
                c = 0x1f83d9ab;
                d = 0x5be0cd19;
                u = f = 0
            }
            function Y(e, t, n, p, m, _, h, g, y, v) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                p = p | 0;
                m = m | 0;
                _ = _ | 0;
                h = h | 0;
                g = g | 0;
                y = y | 0;
                v = v | 0;
                r = e;
                a = t;
                o = n;
                i = p;
                s = m;
                l = _;
                c = h;
                d = g;
                u = y;
                f = v
            }
            function j(e, t) {
                e = e | 0;
                t = t | 0;
                var n = 0;
                if (e & 63)
                    return -1;
                while ((t | 0) >= 64) {
                    O(e);
                    e = e + 64 | 0;
                    t = t - 64 | 0;
                    n = n + 64 | 0
                }
                u = u + n | 0;
                if (u >>> 0 < n >>> 0)
                    f = f + 1 | 0;
                return n | 0
            }
            function R(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var r = 0
                  , a = 0;
                if (e & 63)
                    return -1;
                if (~n)
                    if (n & 31)
                        return -1;
                if ((t | 0) >= 64) {
                    r = j(e, t) | 0;
                    if ((r | 0) == -1)
                        return -1;
                    e = e + r | 0;
                    t = t - r | 0
                }
                r = r + t | 0;
                u = u + t | 0;
                if (u >>> 0 < t >>> 0)
                    f = f + 1 | 0;
                P[e | t] = 0x80;
                if ((t | 0) >= 56) {
                    for (a = t + 1 | 0; (a | 0) < 64; a = a + 1 | 0)
                        P[e | a] = 0x00;
                    O(e);
                    t = 0;
                    P[e | 0] = 0
                }
                for (a = t + 1 | 0; (a | 0) < 59; a = a + 1 | 0)
                    P[e | a] = 0;
                P[e | 56] = f >>> 21 & 255;
                P[e | 57] = f >>> 13 & 255;
                P[e | 58] = f >>> 5 & 255;
                P[e | 59] = f << 3 & 255 | u >>> 29;
                P[e | 60] = u >>> 21 & 255;
                P[e | 61] = u >>> 13 & 255;
                P[e | 62] = u >>> 5 & 255;
                P[e | 63] = u << 3 & 255;
                O(e);
                if (~n)
                    A(n);
                return r | 0
            }
            function I() {
                r = p;
                a = m;
                o = _;
                i = h;
                s = g;
                l = y;
                c = v;
                d = b;
                u = 64;
                f = 0
            }
            function z() {
                r = w;
                a = x;
                o = E;
                i = k;
                s = S;
                l = M;
                c = C;
                d = L;
                u = 64;
                f = 0
            }
            function N(e, t, n, P, O, A, Y, j, R, I, z, N, H, B, F, V) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                P = P | 0;
                O = O | 0;
                A = A | 0;
                Y = Y | 0;
                j = j | 0;
                R = R | 0;
                I = I | 0;
                z = z | 0;
                N = N | 0;
                H = H | 0;
                B = B | 0;
                F = F | 0;
                V = V | 0;
                D();
                T(e ^ 0x5c5c5c5c, t ^ 0x5c5c5c5c, n ^ 0x5c5c5c5c, P ^ 0x5c5c5c5c, O ^ 0x5c5c5c5c, A ^ 0x5c5c5c5c, Y ^ 0x5c5c5c5c, j ^ 0x5c5c5c5c, R ^ 0x5c5c5c5c, I ^ 0x5c5c5c5c, z ^ 0x5c5c5c5c, N ^ 0x5c5c5c5c, H ^ 0x5c5c5c5c, B ^ 0x5c5c5c5c, F ^ 0x5c5c5c5c, V ^ 0x5c5c5c5c);
                w = r;
                x = a;
                E = o;
                k = i;
                S = s;
                M = l;
                C = c;
                L = d;
                D();
                T(e ^ 0x36363636, t ^ 0x36363636, n ^ 0x36363636, P ^ 0x36363636, O ^ 0x36363636, A ^ 0x36363636, Y ^ 0x36363636, j ^ 0x36363636, R ^ 0x36363636, I ^ 0x36363636, z ^ 0x36363636, N ^ 0x36363636, H ^ 0x36363636, B ^ 0x36363636, F ^ 0x36363636, V ^ 0x36363636);
                p = r;
                m = a;
                _ = o;
                h = i;
                g = s;
                y = l;
                v = c;
                b = d;
                u = 64;
                f = 0
            }
            function H(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var u = 0
                  , f = 0
                  , p = 0
                  , m = 0
                  , _ = 0
                  , h = 0
                  , g = 0
                  , y = 0
                  , v = 0;
                if (e & 63)
                    return -1;
                if (~n)
                    if (n & 31)
                        return -1;
                v = R(e, t, -1) | 0;
                u = r,
                f = a,
                p = o,
                m = i,
                _ = s,
                h = l,
                g = c,
                y = d;
                z();
                T(u, f, p, m, _, h, g, y, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                if (~n)
                    A(n);
                return v | 0
            }
            function B(e, t, n, u, f) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                f = f | 0;
                var p = 0
                  , m = 0
                  , _ = 0
                  , h = 0
                  , g = 0
                  , y = 0
                  , v = 0
                  , b = 0
                  , w = 0
                  , x = 0
                  , E = 0
                  , k = 0
                  , S = 0
                  , M = 0
                  , C = 0
                  , L = 0;
                if (e & 63)
                    return -1;
                if (~f)
                    if (f & 31)
                        return -1;
                P[e + t | 0] = n >>> 24;
                P[e + t + 1 | 0] = n >>> 16 & 255;
                P[e + t + 2 | 0] = n >>> 8 & 255;
                P[e + t + 3 | 0] = n & 255;
                H(e, t + 4 | 0, -1) | 0;
                p = w = r,
                m = x = a,
                _ = E = o,
                h = k = i,
                g = S = s,
                y = M = l,
                v = C = c,
                b = L = d;
                u = u - 1 | 0;
                while ((u | 0) > 0) {
                    I();
                    T(w, x, E, k, S, M, C, L, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                    w = r,
                    x = a,
                    E = o,
                    k = i,
                    S = s,
                    M = l,
                    C = c,
                    L = d;
                    z();
                    T(w, x, E, k, S, M, C, L, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                    w = r,
                    x = a,
                    E = o,
                    k = i,
                    S = s,
                    M = l,
                    C = c,
                    L = d;
                    p = p ^ r;
                    m = m ^ a;
                    _ = _ ^ o;
                    h = h ^ i;
                    g = g ^ s;
                    y = y ^ l;
                    v = v ^ c;
                    b = b ^ d;
                    u = u - 1 | 0
                }
                r = p;
                a = m;
                o = _;
                i = h;
                s = g;
                l = y;
                c = v;
                d = b;
                if (~f)
                    A(f);
                return 0
            }
            return {
                reset: D,
                init: Y,
                process: j,
                finish: R,
                hmac_reset: I,
                hmac_init: N,
                hmac_finish: H,
                pbkdf2_generate_block: B
            }
        }({
            Uint8Array
        }, 0, this.heap.buffer),
        this.reset()
    }
}

class C {
    constructor(e, t, n) {
        if (!e.HASH_SIZE)
            throw new SyntaxError("option 'hash' supplied doesn't seem to be a valid hash function");
        this.hash = e,
        this.BLOCK_SIZE = this.hash.BLOCK_SIZE,
        this.HMAC_SIZE = this.hash.HASH_SIZE,
        this.result = null,
        this.key = function(e, t) {
            const n = new Uint8Array(e.BLOCK_SIZE);
            return t.length > e.BLOCK_SIZE ? n.set(e.reset().process(t).finish().result) : n.set(t),
            n
        }(this.hash, t);
        const r = new Uint8Array(this.key);
        for (let e = 0; e < r.length; ++e)
            r[e] ^= 54;
        this.hash.reset().process(r),
        void 0 !== n ? this._hmac_init_verify(n) : this.verify = null
    }
    process(e) {
        if (null !== this.result)
            throw new l("state must be reset before processing new data");
        return this.hash.process(e),
        this
    }
    finish() {
        if (null !== this.result)
            throw new l("state must be reset before processing new data");
        const e = this.hash.finish().result
          , t = new Uint8Array(this.key);
        for (let e = 0; e < t.length; ++e)
            t[e] ^= 92;
        const n = this.verify
          , r = this.hash.reset().process(t).process(e).finish().result;
        if (n) {
            if (n.length !== r.length)
                throw new Error("HMAC verification failed, lengths doesn't match");
            {
                let e = 0;
                for (let t = 0; t < n.length; t++)
                    e |= n[t] ^ r[t];
                if (0 !== e)
                    throw new Error("HMAC verification failed, hash value doesn't match")
            }
        }
        return this.result = r,
        this
    }
    _hmac_init_verify(e) {
        if (e.length !== this.HMAC_SIZE)
            throw new c("illegal verification tag size");
        this.verify = e
    }
}

class P extends C {
    constructor(e, t) {
        return super(new M, e, t),
        this.reset(),
        void 0 !== t ? this._hmac_init_verify(t) : this.verify = null,
        this
    }
    reset() {
        const e = this.key;
        return this.hash.reset().asm.hmac_init(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11], e[12] << 24 | e[13] << 16 | e[14] << 8 | e[15], e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19], e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23], e[24] << 24 | e[25] << 16 | e[26] << 8 | e[27], e[28] << 24 | e[29] << 16 | e[30] << 8 | e[31], e[32] << 24 | e[33] << 16 | e[34] << 8 | e[35], e[36] << 24 | e[37] << 16 | e[38] << 8 | e[39], e[40] << 24 | e[41] << 16 | e[42] << 8 | e[43], e[44] << 24 | e[45] << 16 | e[46] << 8 | e[47], e[48] << 24 | e[49] << 16 | e[50] << 8 | e[51], e[52] << 24 | e[53] << 16 | e[54] << 8 | e[55], e[56] << 24 | e[57] << 16 | e[58] << 8 | e[59], e[60] << 24 | e[61] << 16 | e[62] << 8 | e[63], e[64] << 24 | e[65] << 16 | e[66] << 8 | e[67], e[68] << 24 | e[69] << 16 | e[70] << 8 | e[71], e[72] << 24 | e[73] << 16 | e[74] << 8 | e[75], e[76] << 24 | e[77] << 16 | e[78] << 8 | e[79], e[80] << 24 | e[81] << 16 | e[82] << 8 | e[83], e[84] << 24 | e[85] << 16 | e[86] << 8 | e[87], e[88] << 24 | e[89] << 16 | e[90] << 8 | e[91], e[92] << 24 | e[93] << 16 | e[94] << 8 | e[95], e[96] << 24 | e[97] << 16 | e[98] << 8 | e[99], e[100] << 24 | e[101] << 16 | e[102] << 8 | e[103], e[104] << 24 | e[105] << 16 | e[106] << 8 | e[107], e[108] << 24 | e[109] << 16 | e[110] << 8 | e[111], e[112] << 24 | e[113] << 16 | e[114] << 8 | e[115], e[116] << 24 | e[117] << 16 | e[118] << 8 | e[119], e[120] << 24 | e[121] << 16 | e[122] << 8 | e[123], e[124] << 24 | e[125] << 16 | e[126] << 8 | e[127]),
        this
    }
    finish() {
        if (null === this.key)
            throw new l("no key is associated with the instance");
        if (null !== this.result)
            throw new l("state must be reset before processing new data");
        const e = this.hash
          , t = this.hash.asm
          , n = this.hash.heap;
        t.hmac_finish(e.pos, e.len, 0);
        const r = this.verify
          , a = new Uint8Array(64);
        if (a.set(n.subarray(0, 64)),
        r) {
            if (r.length !== a.length)
                throw new Error("HMAC verification failed, lengths doesn't match");
            {
                let e = 0;
                for (let t = 0; t < r.length; t++)
                    e |= r[t] ^ a[t];
                if (0 !== e)
                    throw new Error("HMAC verification failed, hash value doesn't match")
            }
        } else
            this.result = a;
        return this
    }
}

var u = function() {
    var e, t, n = !1;
    function r(n, r) {
        var a = e[(t[n] + t[r]) % 255];
        return 0 !== n && 0 !== r || (a = 0),
        a
    }
    var a, o, i, s, l = !1, c = function(c, d) {
        l || function() {
            function c(n) {
                var r, a, o;
                for (a = o = function(n) {
                    var r = e[255 - t[n]];
                    return 0 === n && (r = 0),
                    r
                }(n),
                r = 0; r < 4; r++)
                    o ^= a = 255 & (a << 1 | a >>> 7);
                return 99 ^ o
            }
            n || function() {
                e = [],
                t = [];
                var r, a, o = 1;
                for (r = 0; r < 255; r++)
                    e[r] = o,
                    a = 128 & o,
                    o <<= 1,
                    o &= 255,
                    128 === a && (o ^= 27),
                    o ^= e[r],
                    t[e[r]] = r;
                e[255] = e[0],
                t[0] = 0,
                n = !0
            }(),
            a = [],
            o = [],
            i = [[], [], [], []],
            s = [[], [], [], []];
            for (var d = 0; d < 256; d++) {
                var u = c(d);
                a[d] = u,
                o[u] = d,
                i[0][d] = r(2, u) << 24 | u << 16 | u << 8 | r(3, u),
                s[0][u] = r(14, d) << 24 | r(9, d) << 16 | r(13, d) << 8 | r(11, d);
                for (var f = 1; f < 4; f++)
                    i[f][d] = i[f - 1][d] >>> 8 | i[f - 1][d] << 24,
                    s[f][u] = s[f - 1][u] >>> 8 | s[f - 1][u] << 24
            }
            l = !0
        }();
        var u = new Uint32Array(d);
        u.set(a, 512),
        u.set(o, 768);
        for (var f = 0; f < 4; f++)
            u.set(i[f], 4096 + 1024 * f >> 2),
            u.set(s[f], 8192 + 1024 * f >> 2);
        var p = function(e, t, n) {
            "use asm";
            var r = 0
              , a = 0
              , o = 0
              , i = 0
              , s = 0
              , l = 0
              , c = 0
              , d = 0
              , u = 0
              , f = 0
              , p = 0
              , m = 0
              , _ = 0
              , h = 0
              , g = 0
              , y = 0
              , v = 0
              , b = 0
              , w = 0
              , x = 0
              , E = 0;
            var k = new e.Uint32Array(n)
              , S = new e.Uint8Array(n);
            function M(e, t, n, s, l, c, d, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                s = s | 0;
                l = l | 0;
                c = c | 0;
                d = d | 0;
                u = u | 0;
                var f = 0
                  , p = 0
                  , m = 0
                  , _ = 0
                  , h = 0
                  , g = 0
                  , y = 0
                  , v = 0;
                f = n | 0x400,
                p = n | 0x800,
                m = n | 0xc00;
                l = l ^ k[(e | 0) >> 2],
                c = c ^ k[(e | 4) >> 2],
                d = d ^ k[(e | 8) >> 2],
                u = u ^ k[(e | 12) >> 2];
                for (v = 16; (v | 0) <= s << 4; v = v + 16 | 0) {
                    _ = k[(n | l >> 22 & 1020) >> 2] ^ k[(f | c >> 14 & 1020) >> 2] ^ k[(p | d >> 6 & 1020) >> 2] ^ k[(m | u << 2 & 1020) >> 2] ^ k[(e | v | 0) >> 2],
                    h = k[(n | c >> 22 & 1020) >> 2] ^ k[(f | d >> 14 & 1020) >> 2] ^ k[(p | u >> 6 & 1020) >> 2] ^ k[(m | l << 2 & 1020) >> 2] ^ k[(e | v | 4) >> 2],
                    g = k[(n | d >> 22 & 1020) >> 2] ^ k[(f | u >> 14 & 1020) >> 2] ^ k[(p | l >> 6 & 1020) >> 2] ^ k[(m | c << 2 & 1020) >> 2] ^ k[(e | v | 8) >> 2],
                    y = k[(n | u >> 22 & 1020) >> 2] ^ k[(f | l >> 14 & 1020) >> 2] ^ k[(p | c >> 6 & 1020) >> 2] ^ k[(m | d << 2 & 1020) >> 2] ^ k[(e | v | 12) >> 2];
                    l = _,
                    c = h,
                    d = g,
                    u = y
                }
                r = k[(t | l >> 22 & 1020) >> 2] << 24 ^ k[(t | c >> 14 & 1020) >> 2] << 16 ^ k[(t | d >> 6 & 1020) >> 2] << 8 ^ k[(t | u << 2 & 1020) >> 2] ^ k[(e | v | 0) >> 2],
                a = k[(t | c >> 22 & 1020) >> 2] << 24 ^ k[(t | d >> 14 & 1020) >> 2] << 16 ^ k[(t | u >> 6 & 1020) >> 2] << 8 ^ k[(t | l << 2 & 1020) >> 2] ^ k[(e | v | 4) >> 2],
                o = k[(t | d >> 22 & 1020) >> 2] << 24 ^ k[(t | u >> 14 & 1020) >> 2] << 16 ^ k[(t | l >> 6 & 1020) >> 2] << 8 ^ k[(t | c << 2 & 1020) >> 2] ^ k[(e | v | 8) >> 2],
                i = k[(t | u >> 22 & 1020) >> 2] << 24 ^ k[(t | l >> 14 & 1020) >> 2] << 16 ^ k[(t | c >> 6 & 1020) >> 2] << 8 ^ k[(t | d << 2 & 1020) >> 2] ^ k[(e | v | 12) >> 2]
            }
            function C(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                M(0x0000, 0x0800, 0x1000, E, e, t, n, r)
            }
            function L(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                var o = 0;
                M(0x0400, 0x0c00, 0x2000, E, e, r, n, t);
                o = a,
                a = i,
                i = o
            }
            function P(e, t, n, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                M(0x0000, 0x0800, 0x1000, E, s ^ e, l ^ t, c ^ n, d ^ u);
                s = r,
                l = a,
                c = o,
                d = i
            }
            function T(e, t, n, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                var f = 0;
                M(0x0400, 0x0c00, 0x2000, E, e, u, n, t);
                f = a,
                a = i,
                i = f;
                r = r ^ s,
                a = a ^ l,
                o = o ^ c,
                i = i ^ d;
                s = e,
                l = t,
                c = n,
                d = u
            }
            function O(e, t, n, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                M(0x0000, 0x0800, 0x1000, E, s, l, c, d);
                s = r = r ^ e,
                l = a = a ^ t,
                c = o = o ^ n,
                d = i = i ^ u
            }
            function A(e, t, n, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                M(0x0000, 0x0800, 0x1000, E, s, l, c, d);
                r = r ^ e,
                a = a ^ t,
                o = o ^ n,
                i = i ^ u;
                s = e,
                l = t,
                c = n,
                d = u
            }
            function D(e, t, n, u) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                u = u | 0;
                M(0x0000, 0x0800, 0x1000, E, s, l, c, d);
                s = r,
                l = a,
                c = o,
                d = i;
                r = r ^ e,
                a = a ^ t,
                o = o ^ n,
                i = i ^ u
            }
            function Y(e, t, n, s) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                s = s | 0;
                M(0x0000, 0x0800, 0x1000, E, u, f, p, m);
                m = ~y & m | y & m + 1;
                p = ~g & p | g & p + ((m | 0) == 0);
                f = ~h & f | h & f + ((p | 0) == 0);
                u = ~_ & u | _ & u + ((f | 0) == 0);
                r = r ^ e;
                a = a ^ t;
                o = o ^ n;
                i = i ^ s
            }
            function j(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                var a = 0
                  , o = 0
                  , i = 0
                  , u = 0
                  , f = 0
                  , p = 0
                  , m = 0
                  , _ = 0
                  , h = 0
                  , g = 0;
                e = e ^ s,
                t = t ^ l,
                n = n ^ c,
                r = r ^ d;
                a = v | 0,
                o = b | 0,
                i = w | 0,
                u = x | 0;
                for (; (h | 0) < 128; h = h + 1 | 0) {
                    if (a >>> 31) {
                        f = f ^ e,
                        p = p ^ t,
                        m = m ^ n,
                        _ = _ ^ r
                    }
                    a = a << 1 | o >>> 31,
                    o = o << 1 | i >>> 31,
                    i = i << 1 | u >>> 31,
                    u = u << 1;
                    g = r & 1;
                    r = r >>> 1 | n << 31,
                    n = n >>> 1 | t << 31,
                    t = t >>> 1 | e << 31,
                    e = e >>> 1;
                    if (g)
                        e = e ^ 0xe1000000
                }
                s = f,
                l = p,
                c = m,
                d = _
            }
            function R(e) {
                e = e | 0;
                E = e
            }
            function I(e, t, n, s) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                s = s | 0;
                r = e,
                a = t,
                o = n,
                i = s
            }
            function z(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                s = e,
                l = t,
                c = n,
                d = r
            }
            function N(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                u = e,
                f = t,
                p = n,
                m = r
            }
            function H(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                _ = e,
                h = t,
                g = n,
                y = r
            }
            function B(e, t, n, r) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                r = r | 0;
                m = ~y & m | y & r,
                p = ~g & p | g & n,
                f = ~h & f | h & t,
                u = ~_ & u | _ & e
            }
            function F(e) {
                e = e | 0;
                if (e & 15)
                    return -1;
                S[e | 0] = r >>> 24,
                S[e | 1] = r >>> 16 & 255,
                S[e | 2] = r >>> 8 & 255,
                S[e | 3] = r & 255,
                S[e | 4] = a >>> 24,
                S[e | 5] = a >>> 16 & 255,
                S[e | 6] = a >>> 8 & 255,
                S[e | 7] = a & 255,
                S[e | 8] = o >>> 24,
                S[e | 9] = o >>> 16 & 255,
                S[e | 10] = o >>> 8 & 255,
                S[e | 11] = o & 255,
                S[e | 12] = i >>> 24,
                S[e | 13] = i >>> 16 & 255,
                S[e | 14] = i >>> 8 & 255,
                S[e | 15] = i & 255;
                return 16
            }
            function V(e) {
                e = e | 0;
                if (e & 15)
                    return -1;
                S[e | 0] = s >>> 24,
                S[e | 1] = s >>> 16 & 255,
                S[e | 2] = s >>> 8 & 255,
                S[e | 3] = s & 255,
                S[e | 4] = l >>> 24,
                S[e | 5] = l >>> 16 & 255,
                S[e | 6] = l >>> 8 & 255,
                S[e | 7] = l & 255,
                S[e | 8] = c >>> 24,
                S[e | 9] = c >>> 16 & 255,
                S[e | 10] = c >>> 8 & 255,
                S[e | 11] = c & 255,
                S[e | 12] = d >>> 24,
                S[e | 13] = d >>> 16 & 255,
                S[e | 14] = d >>> 8 & 255,
                S[e | 15] = d & 255;
                return 16
            }
            function W() {
                C(0, 0, 0, 0);
                v = r,
                b = a,
                w = o,
                x = i
            }
            function U(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var s = 0;
                if (t & 15)
                    return -1;
                while ((n | 0) >= 16) {
                    K[e & 7](S[t | 0] << 24 | S[t | 1] << 16 | S[t | 2] << 8 | S[t | 3], S[t | 4] << 24 | S[t | 5] << 16 | S[t | 6] << 8 | S[t | 7], S[t | 8] << 24 | S[t | 9] << 16 | S[t | 10] << 8 | S[t | 11], S[t | 12] << 24 | S[t | 13] << 16 | S[t | 14] << 8 | S[t | 15]);
                    S[t | 0] = r >>> 24,
                    S[t | 1] = r >>> 16 & 255,
                    S[t | 2] = r >>> 8 & 255,
                    S[t | 3] = r & 255,
                    S[t | 4] = a >>> 24,
                    S[t | 5] = a >>> 16 & 255,
                    S[t | 6] = a >>> 8 & 255,
                    S[t | 7] = a & 255,
                    S[t | 8] = o >>> 24,
                    S[t | 9] = o >>> 16 & 255,
                    S[t | 10] = o >>> 8 & 255,
                    S[t | 11] = o & 255,
                    S[t | 12] = i >>> 24,
                    S[t | 13] = i >>> 16 & 255,
                    S[t | 14] = i >>> 8 & 255,
                    S[t | 15] = i & 255;
                    s = s + 16 | 0,
                    t = t + 16 | 0,
                    n = n - 16 | 0
                }
                return s | 0
            }
            function q(e, t, n) {
                e = e | 0;
                t = t | 0;
                n = n | 0;
                var r = 0;
                if (t & 15)
                    return -1;
                while ((n | 0) >= 16) {
                    Z[e & 1](S[t | 0] << 24 | S[t | 1] << 16 | S[t | 2] << 8 | S[t | 3], S[t | 4] << 24 | S[t | 5] << 16 | S[t | 6] << 8 | S[t | 7], S[t | 8] << 24 | S[t | 9] << 16 | S[t | 10] << 8 | S[t | 11], S[t | 12] << 24 | S[t | 13] << 16 | S[t | 14] << 8 | S[t | 15]);
                    r = r + 16 | 0,
                    t = t + 16 | 0,
                    n = n - 16 | 0
                }
                return r | 0
            }
            var K = [C, L, P, T, O, A, D, Y];
            var Z = [P, j];
            return {
                set_rounds: R,
                set_state: I,
                set_iv: z,
                set_nonce: N,
                set_mask: H,
                set_counter: B,
                get_state: F,
                get_iv: V,
                gcm_init: W,
                cipher: U,
                mac: q
            }
        }({
            Uint8Array,
            Uint32Array
        }, 0, d);
        return p.set_key = function(e, t, n, r, o, i, l, c, d) {
            var f = u.subarray(0, 60)
              , m = u.subarray(256, 316);
            f.set([t, n, r, o, i, l, c, d]);
            for (var _ = e, h = 1; _ < 4 * e + 28; _++) {
                var g = f[_ - 1];
                (_ % e == 0 || 8 === e && _ % e == 4) && (g = a[g >>> 24] << 24 ^ a[g >>> 16 & 255] << 16 ^ a[g >>> 8 & 255] << 8 ^ a[255 & g]),
                _ % e == 0 && (g = g << 8 ^ g >>> 24 ^ h << 24,
                h = h << 1 ^ (128 & h ? 27 : 0)),
                f[_] = f[_ - e] ^ g
            }
            for (var y = 0; y < _; y += 4)
                for (var v = 0; v < 4; v++)
                    g = f[_ - (4 + y) + (4 - v) % 4],
                    m[y + v] = y < 4 || y >= _ - 4 ? g : s[0][a[g >>> 24]] ^ s[1][a[g >>> 16 & 255]] ^ s[2][a[g >>> 8 & 255]] ^ s[3][a[255 & g]];
            p.set_rounds(e + 5)
        }
        ,
        p
    };
    return c.ENC = {
        ECB: 0,
        CBC: 2,
        CFB: 4,
        OFB: 6,
        CTR: 7
    },
    c.DEC = {
        ECB: 1,
        CBC: 3,
        CFB: 5,
        OFB: 6,
        CTR: 7
    },
    c.MAC = {
        CBC: 0,
        GCM: 1
    },
    c.HEAP_DATA = 16384,
    c
}();

class f {
    constructor(e, t, n=!0, r) {
        this.pos = 0,
        this.len = 0,
        this.mode = r,
        this.heap = o().subarray(u.HEAP_DATA),
        this.asm = new u(null,this.heap.buffer),
        this.pos = 0,
        this.len = 0;
        const a = e.length;
        if (16 !== a && 24 !== a && 32 !== a)
            throw new c("illegal key size");
        const i = new DataView(e.buffer,e.byteOffset,e.byteLength);
        if (this.asm.set_key(a >> 2, i.getUint32(0), i.getUint32(4), i.getUint32(8), i.getUint32(12), a > 16 ? i.getUint32(16) : 0, a > 16 ? i.getUint32(20) : 0, a > 24 ? i.getUint32(24) : 0, a > 24 ? i.getUint32(28) : 0),
        void 0 !== t) {
            if (16 !== t.length)
                throw new c("illegal iv size");
            let e = new DataView(t.buffer,t.byteOffset,t.byteLength);
            this.asm.set_iv(e.getUint32(0), e.getUint32(4), e.getUint32(8), e.getUint32(12))
        } else
            this.asm.set_iv(0, 0, 0, 0);
        this.padding = n
    }
    AES_Encrypt_process(e) {
        if (!n(e))
            throw new TypeError("data isn't of expected type");
        let t = this.asm
          , r = this.heap
          , a = u.ENC[this.mode]
          , o = u.HEAP_DATA
          , s = this.pos
          , l = this.len
          , c = 0
          , d = e.length || 0
          , f = 0
          , p = 0
          , m = new Uint8Array(l + d & -16);
        for (; d > 0; )
            p = i(r, s + l, e, c, d),
            l += p,
            c += p,
            d -= p,
            p = t.cipher(a, o + s, l),
            p && m.set(r.subarray(s, s + p), f),
            f += p,
            p < l ? (s += p,
            l -= p) : (s = 0,
            l = 0);
        return this.pos = s,
        this.len = l,
        m
    }
    AES_Encrypt_finish() {
        let e = this.asm
          , t = this.heap
          , n = u.ENC[this.mode]
          , r = u.HEAP_DATA
          , a = this.pos
          , o = this.len
          , i = 16 - o % 16
          , s = o;
        if (this.hasOwnProperty("padding")) {
            if (this.padding) {
                for (let e = 0; e < i; ++e)
                    t[a + o + e] = i;
                o += i,
                s = o
            } else if (o % 16)
                throw new c("data length must be a multiple of the block size")
        } else
            o += i;
        const l = new Uint8Array(s);
        return o && e.cipher(n, r + a, o),
        s && l.set(t.subarray(a, a + s)),
        this.pos = 0,
        this.len = 0,
        l
    }
    AES_Decrypt_process(e) {

        let t = this.asm
          , r = this.heap
          , a = u.DEC[this.mode]
          , o = u.HEAP_DATA
          , s = this.pos
          , l = this.len
          , c = 0
          , d = e.length || 0
          , f = 0
          , p = l + d & -16
          , m = 0
          , _ = 0;
        this.padding && (m = l + d - p || 16,
        p -= m);
        const h = new Uint8Array(p);
        for (; d > 0; )
            _ = i(r, s + l, e, c, d),
            l += _,
            c += _,
            d -= _,
            _ = t.cipher(a, o + s, l - (d ? 0 : m)),
            _ && h.set(r.subarray(s, s + _), f),
            f += _,
            _ < l ? (s += _,
            l -= _) : (s = 0,
            l = 0);
        return this.pos = s,
        this.len = l,
        h
    }
    AES_Decrypt_finish() {
        let e = this.asm
          , t = this.heap
          , n = u.DEC[this.mode]
          , r = u.HEAP_DATA
          , a = this.pos
          , o = this.len
          , i = o;
        if (o > 0) {
            if (o % 16) {
                if (this.hasOwnProperty("padding"))
                    throw new c("data length must be a multiple of the block size");
                o += 16 - o % 16
            }
            if (e.cipher(n, r + a, o),
            this.hasOwnProperty("padding") && this.padding) {
                let e = t[a + i - 1];
                if (e < 1 || e > 16 || e > i)
                    throw new d("bad padding");
                let n = 0;
                for (let r = e; r > 1; r--)
                    n |= e ^ t[a + i - r];
                if (n)
                    throw new d("bad padding");
                i -= e
            }
        }
        const s = new Uint8Array(i);
        return i > 0 && s.set(t.subarray(a, a + i)),
        this.pos = 0,
        this.len = 0,
        s
    }
}
class p extends f {
    static encrypt(e, t, n=!1) {
        return new p(t,n).encrypt(e)
    }
    static decrypt(e, t, n=!1) {
        return new p(t,n).decrypt(e)
    }
    constructor(e, t=!1) {
        super(e, void 0, t, "ECB")
    }
    encrypt(e) {
        return s(this.AES_Encrypt_process(e), this.AES_Encrypt_finish())
    }
    decrypt(e) {
        return s(this.AES_Decrypt_process(e), this.AES_Decrypt_finish())
    }
}

function s(...e) {
    const t = e.reduce(((e,t)=>e + t.length), 0)
      , n = new Uint8Array(t);
    let r = 0;
    for (let t = 0; t < e.length; t++)
        n.set(e[t], r),
        r += e[t].length;
    return n
}

function sign(e, t, n)
{
    var r = new S, 
    a = r.process(n).finish().result;
    r.reset();
    var o = t.buffer;
    (n = new Uint8Array(a.length + o.length)).set(a);
    n.set(o, a.length);
    for (var i = r.process(n).finish().result, s = e.n, l = 0; l < 20; ) {
        r.reset();
        i = r.process(i).finish().result;
        var c = BigInteger.fromBuffer(i);
        if (!(c.compareTo(s) >= 0)) {
            var d = e.G.multiply(c).affineX.mod(s);
            if (0 != d.compareTo(BigInteger.ZERO)) {
                var u = BigInteger.fromBuffer(a).add(d.multiply(t.bigint).mod(s)).mod(s).multiply(c.modInverse(s)).mod(s);
                if (0 != u.compareTo(BigInteger.ZERO)) {
                    l += 1;
                    break
                }
            }
        }
    }
    var f = e.pLength
    , p = Buffer.allocUnsafe(2 * f);
    return d.toBuffer(f).copy(p, 0),
    u.toBuffer(f).copy(p, f),
    p
}

function decrypt_private(e, t) {
    var n = generate_key_from_pass(e, 3e4, 32);
    return decryptPrivateAESECB(n, t)
}

function e(e, t=!1) {
    for (var n = e.length, r = new Uint8Array(t ? 4 * n : n), a = 0, o = 0; a < n; a++) {
        var i = e.charCodeAt(a);
        if (t && 55296 <= i && i <= 56319) {
            if (++a >= n)
                throw new Error("Malformed string, low surrogate expected at position " + a);
            i = (55296 ^ i) << 10 | 65536 | 56320 ^ e.charCodeAt(a)
        } else if (!t && i >>> 8)
            throw new Error("Wide characters are not allowed.");
        !t || i <= 127 ? r[o++] = i : i <= 2047 ? (r[o++] = 192 | i >> 6,
        r[o++] = 128 | 63 & i) : i <= 65535 ? (r[o++] = 224 | i >> 12,
        r[o++] = 128 | i >> 6 & 63,
        r[o++] = 128 | 63 & i) : (r[o++] = 240 | i >> 18,
        r[o++] = 128 | i >> 12 & 63,
        r[o++] = 128 | i >> 6 & 63,
        r[o++] = 128 | 63 & i)
    }
    return r.subarray(0, o)
}

function generate_key_from_pass(t, n, r) {
    var a = e("pPass Salt for PBKDF2")
    , o = function(e, t, n, r) {
        const a = new P(e)
          , o = new Uint8Array(r)
          , i = Math.ceil(r / a.HMAC_SIZE);
        for (let e = 1; e <= i; ++e) {
            const s = (e - 1) * a.HMAC_SIZE
              , l = (e < i ? 0 : r % a.HMAC_SIZE) || a.HMAC_SIZE;
            a.reset().process(t),
            a.hash.asm.pbkdf2_generate_block(a.hash.pos, a.hash.len, e, n, 0),
            o.set(a.hash.heap.subarray(0, l), s)
        }
        return o
    }(e(t, !0), a, n, r);
    return o
}

function decryptPrivateAESECB(e, t) {
    var n = p.decrypt(t.slice(0, 16), e)
      , r = p.decrypt(t.slice(16, 32), e)
      , a = new Uint8Array(n.length + r.length);
    return a.set(n),
    a.set(r, n.length),
    a
}

module.exports = {
    decrypt_private: decrypt_private,
    sign: sign
}