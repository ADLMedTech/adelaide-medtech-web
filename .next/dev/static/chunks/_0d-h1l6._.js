(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const links = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Timeline",
        href: "#timeline"
    },
    {
        title: "Themes",
        href: "#themes"
    },
    {
        title: "Team",
        href: "#team"
    },
    {
        title: "FAQs",
        href: "#faq"
    }
];
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "f55095b81f97fcfaa46cce9e91ded8064db79ba53043a0f6e0ea5fa67fc1b6cc") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f55095b81f97fcfaa46cce9e91ded8064db79ba53043a0f6e0ea5fa67fc1b6cc";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== isOpen) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                if (isOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "unset";
                }
                return _temp;
            }
        })["Navbar[useEffect()]"];
        t1 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-4 lg:-ml-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logos/logo-dark.png",
                alt: "Adelaide MedTech Hackathon",
                width: 150,
                height: 80,
                priority: true,
                className: "h-auto w-[120px] object-contain sm:w-[150px]"
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 58,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden items-center gap-8 lg:flex",
            children: links.map(_NavbarLinksMap)
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform",
                target: "_blank",
                className: "inline-flex h-10 min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,.45)] transition hover:scale-105",
                children: "Register Now →"
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 72,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== isOpen) {
        t5 = ({
            "Navbar[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["Navbar[<button>.onClick]"];
        $[7] = isOpen;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = isOpen ? "close" : "open";
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            rotate: -90
        };
        t8 = {
            opacity: 1,
            rotate: 0
        };
        t9 = {
            opacity: 0,
            rotate: 90
        };
        t10 = {
            duration: 0.15
        };
        $[9] = t10;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t10 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t11;
    if ($[13] !== isOpen) {
        t11 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 120,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 120,
            columnNumber: 38
        }, this);
        $[13] = isOpen;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t7,
                animate: t8,
                exit: t9,
                transition: t10,
                children: t11
            }, t6, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 128,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t6;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "glass flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-5 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:h-20 sm:px-8",
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t5,
                    className: "rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden",
                    "aria-label": "Toggle Menu",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 137,
                    columnNumber: 213
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t5;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== isOpen) {
        t14 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -20,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: -10,
                scale: 0.95
            },
            transition: {
                duration: 0.2,
                ease: "easeOut"
            },
            className: "glass absolute left-4 right-4 top-24 z-40 flex flex-col gap-2 rounded-2xl border border-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,.6)] backdrop-blur-3xl sm:left-6 sm:right-6 sm:top-28 sm:p-8 lg:hidden",
            children: [
                links.map({
                    "Navbar[links.map()]": (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link_0.href,
                            onClick: {
                                "Navbar[links.map() > <Link>.onClick]": ()=>setIsOpen(false)
                            }["Navbar[links.map() > <Link>.onClick]"],
                            className: "flex items-center rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-emerald-400",
                            children: link_0.title
                        }, link_0.title, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 162,
                            columnNumber: 42
                        }, this)
                }["Navbar[links.map()]"]),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform",
                    target: "_blank",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setIsOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    className: "mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,.3)] transition-transform active:scale-95",
                    children: "Register Now"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 165,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 146,
            columnNumber: 21
        }, this);
        $[21] = isOpen;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4 sm:top-6 sm:px-6 lg:px-8",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_s(Navbar, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = Navbar;
function _NavbarLinksMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link.href,
        className: "text-[15px] font-medium text-white/70 transition hover:text-white",
        children: link.title
    }, link.title, false, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 193,
        columnNumber: 10
    }, this);
}
function _temp() {
    document.body.style.overflow = "unset";
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/HeroBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function HeroBackground() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "59f2d16d4ab13bd7a8743fe3832300480cf484fa548561371f2a9c634ce65507") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59f2d16d4ab13bd7a8743fe3832300480cf484fa548561371f2a9c634ce65507";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 grid-bg opacity-40"
        }, void 0, false, {
            fileName: "[project]/components/hero/HeroBackground.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                x: [
                    0,
                    40,
                    0
                ],
                y: [
                    0,
                    30,
                    0
                ]
            },
            transition: {
                duration: 14,
                repeat: Infinity
            },
            className: "absolute -left-[20%] -top-32 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[100px] md:-left-20 md:-top-52 md:h-[700px] md:w-[700px] md:blur-[140px]"
        }, void 0, false, {
            fileName: "[project]/components/hero/HeroBackground.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            0,
                            -50,
                            0
                        ],
                        y: [
                            0,
                            40,
                            0
                        ]
                    },
                    transition: {
                        duration: 18,
                        repeat: Infinity
                    },
                    className: "absolute -right-[20%] top-40 h-[300px] w-[300px] rounded-full bg-teal-600/20 blur-[80px] md:-right-20 md:top-60 md:h-[500px] md:w-[500px] md:blur-[120px]"
                }, void 0, false, {
                    fileName: "[project]/components/hero/HeroBackground.tsx",
                    lineNumber: 35,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/HeroBackground.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = HeroBackground;
var _c;
__turbopack_context__.k.register(_c, "HeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/HeroStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const stats = [
    {
        number: "350+",
        label: "Past Participants"
    },
    {
        number: "4+",
        label: "Days"
    },
    {
        number: "$1K+",
        label: "Prizes"
    },
    {
        number: "4+",
        label: "Years Running"
    }
];
function HeroStats() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1ac8a880bd0f59a8eb709c7e0775c198ed50d468a06845a24bac3fb8b889d614") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ac8a880bd0f59a8eb709c7e0775c198ed50d468a06845a24bac3fb8b889d614";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4",
            children: stats.map(_HeroStatsStatsMap)
        }, void 0, false, {
            fileName: "[project]/components/hero/HeroStats.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = HeroStats;
function _HeroStatsStatsMap(stat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-3xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-4xl font-bold",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroStats.tsx",
                lineNumber: 35,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroStats.tsx",
                lineNumber: 35,
                columnNumber: 119
            }, this)
        ]
    }, stat.label, true, {
        fileName: "[project]/components/hero/HeroStats.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HeroStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/PhotoCollage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoCollage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function PhotoCollage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "72dc46aff115aaf2fec8f05e6c923811b7e9256bc17cb0b921e6ba0b14218a59") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "72dc46aff115aaf2fec8f05e6c923811b7e9256bc17cb0b921e6ba0b14218a59";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            x: 80
        };
        t1 = {
            opacity: 1,
            x: 0
        };
        t2 = {
            duration: 1
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            scale: 1.03
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t3,
            className: "absolute left-0 top-0 overflow-hidden rounded-[36px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/hero/hero1.jpg",
                width: 520,
                height: 650,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/components/hero/PhotoCollage.tsx",
                lineNumber: 48,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/hero/PhotoCollage.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            scale: 1.04
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t5,
            className: "glass absolute bottom-0 right-0 overflow-hidden rounded-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/hero/hero2.jpg",
                width: 290,
                height: 250,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/components/hero/PhotoCollage.tsx",
                lineNumber: 64,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/hero/PhotoCollage.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            scale: 1.04
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            animate: t1,
            transition: t2,
            className: "relative hidden h-[720px] lg:block",
            children: [
                t4,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: t7,
                    className: "glass absolute left-24 bottom-32 overflow-hidden rounded-[30px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/hero/hero4.jpg",
                        width: 260,
                        height: 180,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/hero/PhotoCollage.tsx",
                        lineNumber: 80,
                        columnNumber: 223
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero/PhotoCollage.tsx",
                    lineNumber: 80,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/PhotoCollage.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
} /*

      <motion.div
        whileHover={{ scale: 1.04 }}
        className="glass absolute right-10 top-10 overflow-hidden rounded-[28px]"
      >
        <Image
          src="/images/hero/hero3.jpg"
          width={220}
          height={260}
          alt=""
        />
      </motion.div>

*/ 
_c = PhotoCollage;
var _c;
__turbopack_context__.k.register(_c, "PhotoCollage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/HeroBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/HeroStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$PhotoCollage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/PhotoCollage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const pills = [
    {
        text: "No Coding Required",
        style: "border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
    },
    {
        text: "Industry Mentors",
        style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
    },
    {
        text: "High School + Uni",
        style: "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
    },
    {
        text: "Startup Opportunities",
        style: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};
const pillVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 15
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    }
};
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "0c55c43167276257e2bbf3bc74771b5900fc68ff75e043c3701db476e1e18894") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c55c43167276257e2bbf3bc74771b5900fc68ff75e043c3701db476e1e18894";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 40
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            duration: 0.8
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-violet-300",
                children: "14 – 17 August 2026 • Adelaide, SA"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 91,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "max-w-3xl text-5xl font-bold leading-[1.05] lg:text-7xl",
            children: [
                "Innovating the",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gradient",
                    children: "Future"
                }, void 0, false, {
                    fileName: "[project]/components/hero/Hero.tsx",
                    lineNumber: 99,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/hero/Hero.tsx",
                    lineNumber: 99,
                    columnNumber: 146
                }, this),
                "of Healthcare."
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-xl text-lg leading-8 text-slate-300",
            children: "Adelaide MedTech Hackathon brings together students, clinicians, engineers, designers and entrepreneurs to solve real healthcare challenges through innovation."
        }, void 0, false, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "show",
            className: "mt-6 inline-grid grid-cols-2 gap-3",
            children: pills.map(_HeroPillsMap)
        }, void 0, false, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform",
                    target: "_blank",
                    className: "rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-7 py-4 text-lg font-semibold transition hover:scale-105 hover:shadow-[0_0_45px_rgba(124,92,255,.45)]",
                    children: "Register Now →"
                }, void 0, false, {
                    fileName: "[project]/components/hero/Hero.tsx",
                    lineNumber: 116,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "#about",
                    className: "glass flex items-center rounded-full px-7 py-4 text-lg font-medium transition hover:bg-white/10",
                    children: "Explore ↓"
                }, void 0, false, {
                    fileName: "[project]/components/hero/Hero.tsx",
                    lineNumber: 116,
                    columnNumber: 369
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-12",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container relative z-10 flex w-full items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full items-center gap-10 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: t1,
                                animate: t2,
                                transition: t3,
                                children: [
                                    t4,
                                    t5,
                                    t6,
                                    t7,
                                    t8,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "-mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 123,
                                            columnNumber: 349
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.tsx",
                                        lineNumber: 123,
                                        columnNumber: 326
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 123,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$PhotoCollage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 123,
                                columnNumber: 381
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 123,
                        columnNumber: 188
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/hero/Hero.tsx",
                    lineNumber: 123,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/Hero.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c = Hero;
function _HeroPillsMap(pill) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: pillVariants,
        whileHover: {
            scale: 1.05,
            y: -2
        },
        className: `flex cursor-default items-center justify-center rounded-full border px-4 py-2 text-center text-sm font-medium backdrop-blur-xl transition-colors duration-300 ${pill.style}`,
        children: pill.text
    }, pill.text, false, {
        fileName: "[project]/components/hero/Hero.tsx",
        lineNumber: 131,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Sponsors.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sponsors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const anchorPartners = [
    {
        name: "Evolution Surgical",
        logo: "/sponsors/evosurgical.png",
        role: "Gold Sponsor"
    },
    {
        name: "Commission on Excellence and Innovation in Health",
        logo: "/sponsors/healthtranslation.png",
        role: "Gold Sponsor"
    }
];
const allSponsors = [
    {
        name: "University of Adelaide",
        logo: "/sponsors/uoa.png"
    },
    {
        name: "Beyond India",
        logo: "/sponsors/beyondIndia.png"
    },
    {
        name: "ThincLab",
        logo: "/sponsors/thinclab.png"
    },
    {
        name: "SA Health",
        logo: "/sponsors/sahealth.png"
    },
    {
        name: "Adelaide Medical Technology",
        logo: "/sponsors/amt.png"
    },
    {
        name: "Health Translation SA",
        logo: "/sponsors/healthtranslation.png"
    },
    {
        name: "Evolution Surgical",
        logo: "/sponsors/evosurgical.png"
    }
];
function Sponsors() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2e2f93f6017aa2233737bf0e0d4ab507648b4861a0ed7a1a95282e55744a6c2e") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2f93f6017aa2233737bf0e0d4ab507648b4861a0ed7a1a95282e55744a6c2e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-400 sm:text-sm sm:tracking-[0.4em]",
            children: "Our Partners"
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl text-center",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
                    children: [
                        "Backed by Leaders in",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden sm:block"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Sponsors.tsx",
                            lineNumber: 53,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: " "
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Sponsors.tsx",
                            lineNumber: 53,
                            columnNumber: 188
                        }, this),
                        "Health & Innovation"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Sponsors.tsx",
                    lineNumber: 53,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg",
                    children: "Made possible by organisations committed to shaping the future of healthcare."
                }, void 0, false, {
                    fileName: "[project]/components/sections/Sponsors.tsx",
                    lineNumber: 53,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-9 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:gap-6 md:gap-10",
            children: anchorPartners.map(_SponsorsAnchorPartnersMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-xs sm:tracking-[0.4em]",
            children: "Supported By"
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-16 lg:w-24"
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-16 lg:w-24"
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-14 sm:mt-20",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-6 w-full max-w-full overflow-x-clip sm:mt-8 [contain:layout_paint]",
                    children: [
                        t4,
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-marquee flex w-max min-w-max will-change-transform",
                            children: [
                                0,
                                1
                            ].map(_SponsorsAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Sponsors.tsx",
                            lineNumber: 85,
                            columnNumber: 150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Sponsors.tsx",
                    lineNumber: 85,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold sm:text-2xl lg:text-3xl",
            children: "Interested in Sponsoring 2026?"
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base",
            children: "Support the next generation of healthcare innovators, with packages available from Bronze to Gold."
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "sponsors",
            className: "relative isolate w-full max-w-full overflow-x-clip py-16 sm:py-24 lg:py-32 [contain:layout_paint]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
                children: [
                    t1,
                    t2,
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-14 max-w-2xl rounded-[24px] border border-violet-500/30 bg-gradient-to-r from-violet-600/15 via-transparent to-purple-600/15 px-5 py-8 text-center shadow-[0_0_40px_rgba(139,92,246,0.1)] sm:mt-20 sm:rounded-[32px] sm:p-10",
                        children: [
                            t7,
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:adlmedtechhackathon.sponsorships@gmail.com",
                                className: "mt-5 inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-6 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(139,92,246,0.6)] sm:mt-6 sm:h-11 sm:px-8",
                                children: [
                                    "Get in Touch",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "ml-2",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Sponsors.tsx",
                                        lineNumber: 103,
                                        columnNumber: 875
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Sponsors.tsx",
                                lineNumber: 103,
                                columnNumber: 475
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Sponsors.tsx",
                        lineNumber: 103,
                        columnNumber: 218
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Sponsors.tsx",
                lineNumber: 103,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/Sponsors.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c = Sponsors;
function _SponsorsAnonymous(copyIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": copyIndex === 1,
        className: "flex shrink-0 gap-2.5 pr-2.5 sm:gap-4 sm:pr-4 lg:gap-6 lg:pr-6",
        children: allSponsors.map({
            "Sponsors[(anonymous)() > allSponsors.map()]": (sponsor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group relative flex h-[62px] w-[112px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-[1.03] sm:h-20 sm:w-40 sm:rounded-2xl lg:h-24 lg:w-48",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: sponsor.logo,
                        alt: copyIndex === 0 ? `${sponsor.name} logo` : "",
                        fill: true,
                        sizes: "(max-width: 639px) 112px, (max-width: 1023px) 160px, 192px",
                        className: "object-contain p-2.5 transition-transform duration-300 group-hover:scale-105 sm:p-3"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Sponsors.tsx",
                        lineNumber: 112,
                        columnNumber: 335
                    }, this)
                }, `${copyIndex}-${sponsor.name}`, false, {
                    fileName: "[project]/components/sections/Sponsors.tsx",
                    lineNumber: 112,
                    columnNumber: 65
                }, this)
        }["Sponsors[(anonymous)() > allSponsors.map()]"])
    }, copyIndex, false, {
        fileName: "[project]/components/sections/Sponsors.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
function _SponsorsAnchorPartnersMap(partner) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex min-w-0 flex-col items-center justify-center rounded-[20px] bg-white px-2 py-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/20 sm:rounded-[28px] sm:px-6 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 w-full items-center justify-center overflow-visible sm:h-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: partner.logo,
                    width: 300,
                    height: 130,
                    alt: partner.name,
                    sizes: "(max-width: 639px) 140px, 280px",
                    className: "h-auto w-[140px] max-w-none object-contain transition-transform duration-500 group-hover:scale-105 sm:w-[280px]"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Sponsors.tsx",
                    lineNumber: 116,
                    columnNumber: 372
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Sponsors.tsx",
                lineNumber: 116,
                columnNumber: 285
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[8px] font-bold uppercase tracking-[0.18em] text-amber-500 sm:mt-7 sm:text-xs sm:tracking-[0.3em]",
                children: partner.role
            }, void 0, false, {
                fileName: "[project]/components/sections/Sponsors.tsx",
                lineNumber: 116,
                columnNumber: 614
            }, this)
        ]
    }, partner.name, true, {
        fileName: "[project]/components/sections/Sponsors.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Sponsors");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/FadeIn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function FadeIn(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "4d3d90def4daf9f4cb455b4d4edb7dc4ed198e0f73da33f76e7fd3105b347aaa") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d3d90def4daf9f4cb455b4d4edb7dc4ed198e0f73da33f76e7fd3105b347aaa";
    }
    const { children, delay: t1 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 40
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true,
            amount: 0.2
        };
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== delay) {
        t5 = {
            duration: 0.7,
            delay,
            ease: "easeOut"
        };
        $[4] = delay;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== children || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            viewport: t4,
            transition: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/FadeIn.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/FadeIn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
"use client";
;
;
;
;
;
const stats = [
    {
        value: "Free",
        label: "Entry"
    },
    {
        value: "15+",
        label: "Industry Mentors"
    },
    {
        value: "$1K+",
        label: "Prize Pool"
    },
    {
        value: "4 Days",
        label: "In Person"
    }
];
const cards = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        title: "100% Free & No Coding Required",
        summary: "Open to everyone from Year 10 school students to university students.",
        details: "Some of the best ideas come from curious people, not programmers, so we will pair you with mentors and teammates who fill in the gaps.",
        styles: {
            border: "border-l-emerald-400",
            iconBg: "bg-emerald-500/10",
            iconText: "text-emerald-400",
            summaryText: "text-emerald-300/80"
        }
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        title: "The Format",
        summary: "Over four in-person days, teams of 4 move from idea generation to pitch.",
        details: "Receive continuous mentorship from academics and industry professionals the whole way. You will learn what IP is, how to prototype, develop a startup, and how to pitch.",
        styles: {
            border: "border-l-teal-400",
            iconBg: "bg-teal-500/10",
            iconText: "text-teal-400",
            summaryText: "text-teal-300/80"
        }
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Who's Behind It & Our Legacy",
        summary: "Organised by a team of 14 students from different backgrounds and backed by ThincLab.",
        details: "Running for over 4 years, we have hosted a variety of speakers, including experts in medical technology and veterans of hackathon competitions.",
        styles: {
            border: "border-l-cyan-400",
            iconBg: "bg-cyan-500/10",
            iconText: "text-cyan-400",
            summaryText: "text-cyan-300/80"
        }
    }
];
function About() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4a106b1c2c67b99fc56faaf55e01ded7eec75d20a80cff9b36fef84a4c80bb42") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4a106b1c2c67b99fc56faaf55e01ded7eec75d20a80cff9b36fef84a4c80bb42";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mb-12 max-w-3xl text-center lg:mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400",
                        children: "About the Hackathon"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 71,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-4xl font-bold leading-tight lg:text-5xl",
                        children: "A 4-Day Hackathon Where Students Build Real Healthcare Solutions."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 71,
                        columnNumber: 184
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-base leading-7 text-slate-400 lg:text-lg",
                        children: "Students from medicine, engineering, business, design and technology team up to tackle real healthcare challenges across Sustainability, Medical Technology, Accessibility, and Mental Health."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 71,
                        columnNumber: 320
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 71,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/about/about.jpg",
            alt: "Students collaborating",
            fill: true,
            className: "object-cover transition-transform duration-700 hover:scale-[1.03]"
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-[300px] flex-1 w-full overflow-hidden rounded-[28px] border border-white/10 shadow-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 h-full w-full",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-6 left-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-[0.25em] text-emerald-300",
                                children: "Adelaide · Late 2025"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 89,
                                columnNumber: 240
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/About.tsx",
                            lineNumber: 89,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/About.tsx",
                    lineNumber: 89,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 89,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col gap-4 lg:col-span-6",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass grid grid-cols-2 gap-4 rounded-2xl p-5 sm:grid-cols-4 lg:gap-x-4",
                        children: stats.map(_AboutStatsMap)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 96,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/About.tsx",
                    lineNumber: 96,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "relative flex w-full flex-col justify-center px-6 py-16 sm:py-24 lg:px-12",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full flex-col gap-4 lg:col-span-6",
                            children: cards.map(_AboutCardsMap)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/About.tsx",
                            lineNumber: 103,
                            columnNumber: 218
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/About.tsx",
                    lineNumber: 103,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = About;
function _AboutCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.1 * (index + 1),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `group relative flex h-full flex-col justify-center overflow-hidden rounded-[28px] border-l-4 ${card.styles.border} glass p-6 transition-all duration-500 hover:bg-white/[0.04] sm:p-8`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${card.styles.iconBg} ${card.styles.iconText} transition-transform duration-500 group-hover:scale-110`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 111,
                                    columnNumber: 518
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 111,
                                columnNumber: 327
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white lg:text-2xl",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 111,
                                columnNumber: 547
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 111,
                        columnNumber: 286
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 text-sm font-medium ${card.styles.summaryText}`,
                        children: card.summary
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 111,
                        columnNumber: 627
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed text-slate-300 lg:text-base",
                                children: card.details
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 111,
                                columnNumber: 904
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/About.tsx",
                            lineNumber: 111,
                            columnNumber: 871
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 111,
                        columnNumber: 714
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 111,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/About.tsx",
            lineNumber: 111,
            columnNumber: 51
        }, this)
    }, card.title, false, {
        fileName: "[project]/components/sections/About.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
function _AboutStatsMap(stat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-bold text-white lg:text-2xl",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 114,
                columnNumber: 85
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] text-slate-400 lg:text-xs",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 114,
                columnNumber: 157
            }, this)
        ]
    }, stat.label, true, {
        fileName: "[project]/components/sections/About.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const colours = {
    violet: "from-violet-600/20 to-fuchsia-500/10",
    blue: "from-cyan-500/20 to-indigo-500/10",
    emerald: "from-emerald-500/20 to-green-500/10",
    gold: "from-amber-400/20 to-yellow-300/10",
    rose: "from-rose-500/20 to-pink-500/10"
};
const positions = {
    top: "-top-52",
    center: "top-1/2 -translate-y-1/2",
    bottom: "-bottom-52"
};
function BackgroundGlow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "40a7a1b4965c99135cf1314b5deec95b8c61d1676fc301456df6be066f91885f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40a7a1b4965c99135cf1314b5deec95b8c61d1676fc301456df6be066f91885f";
    }
    const { colour: t1, position: t2 } = t0;
    const colour = t1 === undefined ? "violet" : t1;
    const position = t2 === undefined ? "center" : t2;
    const t3 = `
          absolute
          left-1/2
          ${positions[position]}
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-gradient-to-br
          ${colours[colour]}
          blur-[180px]
          animate-glow
        `;
    let t4;
    if ($[1] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t3
            }, void 0, false, {
                fileName: "[project]/components/ui/BackgroundGlow.tsx",
                lineNumber: 49,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/BackgroundGlow.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    return t4;
}
_c = BackgroundGlow;
var _c;
__turbopack_context__.k.register(_c, "BackgroundGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Themes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.mjs [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/accessibility.mjs [app-client] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const themes = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        title: "Sustainability",
        description: "Reduce waste, improve efficiency and create environmentally sustainable healthcare systems.",
        iconHover: "group-hover:text-emerald-400",
        badgeHover: "group-hover:bg-emerald-500/15",
        boxHover: "hover:bg-emerald-500/[0.06]"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
        title: "Medical Technology",
        description: "Develop cutting-edge medical devices and digital tools to enhance patient care and clinical outcomes.",
        iconHover: "group-hover:text-blue-400",
        badgeHover: "group-hover:bg-blue-500/15",
        boxHover: "hover:bg-blue-500/[0.06]"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"],
        title: "Accessibility",
        description: "Design solutions that make healthcare more inclusive, equitable and accessible for every community.",
        iconHover: "group-hover:text-amber-400",
        badgeHover: "group-hover:bg-amber-500/15",
        boxHover: "hover:bg-amber-500/[0.06]"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "Mental Health & Lifestyle",
        description: "Create tools and platforms that support psychological well-being and promote healthier lifestyle choices.",
        iconHover: "group-hover:text-rose-400",
        badgeHover: "group-hover:bg-rose-500/15",
        boxHover: "hover:bg-rose-500/[0.06]"
    }
];
function Themes() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "20e26d928bcc93304281b8327f30aed1773bc344349689f679a9b00551f26313") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "20e26d928bcc93304281b8327f30aed1773bc344349689f679a9b00551f26313";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            colour: "violet",
            position: "center"
        }, void 0, false, {
            fileName: "[project]/components/sections/Themes.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold uppercase tracking-[0.4em] text-violet-400",
                    children: "2026 Challenge Themes"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 52,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-4xl font-bold leading-tight lg:text-5xl",
                    children: "Choose Where You'll Make an Impact"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 52,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 lg:text-lg",
                    children: "Every team will align with one of our themes, tackling real healthcare challenges through technology, creativity and collaboration."
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 52,
                    columnNumber: 257
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Themes.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto my-12 flex items-center justify-center gap-4 lg:my-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-px w-16 bg-gradient-to-r from-transparent to-violet-500/60"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 59,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-1.5 w-1.5 rotate-45 bg-violet-400"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 59,
                    columnNumber: 170
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-px w-16 bg-gradient-to-l from-transparent to-violet-500/60"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 59,
                    columnNumber: 226
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Themes.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-violet-600/15 via-transparent to-indigo-500/10 blur-2xl"
        }, void 0, false, {
            fileName: "[project]/components/sections/Themes.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "streams",
            className: "relative flex w-full flex-col py-16 sm:py-24",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                t3,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass grid grid-cols-1 divide-y divide-white/10 rounded-[32px] border border-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 lg:divide-x",
                                    children: themes.map(_ThemesThemesMap)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Themes.tsx",
                                    lineNumber: 73,
                                    columnNumber: 171
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Themes.tsx",
                            lineNumber: 73,
                            columnNumber: 141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 73,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Themes.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = Themes;
function _ThemesThemesMap(theme) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group flex flex-col items-center px-8 py-10 text-center transition duration-500 ${theme.boxHover}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 transition duration-500 group-hover:scale-110 ${theme.badgeHover}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(theme.icon, {
                    size: 30,
                    className: `text-violet-400 transition duration-500 ${theme.iconHover}`
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 81,
                    columnNumber: 302
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Themes.tsx",
                lineNumber: 81,
                columnNumber: 145
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex min-h-[4rem] items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold leading-tight lg:text-2xl",
                    children: theme.title
                }, void 0, false, {
                    fileName: "[project]/components/sections/Themes.tsx",
                    lineNumber: 81,
                    columnNumber: 473
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Themes.tsx",
                lineNumber: 81,
                columnNumber: 405
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm leading-6 text-slate-400",
                children: theme.description
            }, void 0, false, {
                fileName: "[project]/components/sections/Themes.tsx",
                lineNumber: 81,
                columnNumber: 557
            }, this)
        ]
    }, theme.title, true, {
        fileName: "[project]/components/sections/Themes.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Themes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-plus.mjs [app-client] (ecmascript) <export default as CalendarPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const scheduleData = [
    {
        day: "Day 1",
        title: "Idea Generation",
        date: "Wed, 19 Aug 2026",
        time: "5:00pm - 8:00pm",
        location: "AHMS",
        locationDetails: "Adelaide Health and Medical Sciences Building",
        isFinal: false
    },
    {
        day: "Day 2",
        title: "Pitching and Intellectual Property Workshop",
        date: "Thurs, 20 Aug 2026",
        time: "5:00pm - 8:00pm",
        location: "AHMS",
        locationDetails: "Adelaide Health and Medical Sciences Building",
        isFinal: false
    },
    {
        day: "Day 3",
        title: "Prototyping & Logo Designing",
        date: "Mon, 24 Aug 2026",
        time: "5:00pm - 8:00pm",
        location: "AHMS",
        locationDetails: "Adelaide Health and Medical Sciences Building",
        isFinal: false
    },
    {
        day: "Day 4",
        title: "Pitching & Awards Ceremony",
        date: "Wed, 26 Aug 2026",
        time: "3:00pm - 8:00pm",
        location: "ThincLab",
        locationDetails: "North Terrace",
        isFinal: true
    }
];
function Timeline() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "302b00afdb2a64d82e1cdd50e98a1dd03727446bf343777397621bb6456d1aba") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "302b00afdb2a64d82e1cdd50e98a1dd03727446bf343777397621bb6456d1aba";
    }
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Timeline[useEffect()]": ()=>{
                setMounted(true);
                const targetDate = new Date("August 19, 2026 17:00:00").getTime();
                const interval = setInterval({
                    "Timeline[useEffect() > setInterval()]": ()=>{
                        const now = new Date().getTime();
                        const distance = targetDate - now;
                        if (distance < 0) {
                            clearInterval(interval);
                        } else {
                            setTimeLeft({
                                days: Math.floor(distance / 86400000),
                                hours: Math.floor(distance % 86400000 / 3600000),
                                minutes: Math.floor(distance % 3600000 / 60000),
                                seconds: Math.floor(distance % 60000 / 1000)
                            });
                        }
                    }
                }["Timeline[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(interval);
            }
        })["Timeline[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            colour: "violet",
            position: "center"
        }, void 0, false, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-violet-400",
            children: "YOUR JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-white sm:text-5xl lg:text-6xl",
            children: [
                "From Registration",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 113,
                    columnNumber: 97
                }, this),
                "to Awards Night"
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400",
            children: "Here's what your experience at Adelaide MedTech Hackathon looks like."
        }, void 0, false, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== mounted || $[9] !== timeLeft) {
        t7 = mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 flex w-full flex-col items-center gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-4 gap-3 sm:flex sm:justify-center sm:gap-6",
                    children: [
                        {
                            label: "Days",
                            value: timeLeft.days
                        },
                        {
                            label: "Hours",
                            value: timeLeft.hours
                        },
                        {
                            label: "Mins",
                            value: timeLeft.minutes
                        },
                        {
                            label: "Secs",
                            value: timeLeft.seconds
                        }
                    ].map(_TimelineAnonymous)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 123,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/calendar/hackathon-2026.ics",
                    className: "group relative flex flex-col items-center overflow-hidden rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 backdrop-blur-sm transition-all duration-300 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__["CalendarPlus"], {
                                    className: "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 135,
                                    columnNumber: 443
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save to Calendar"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 135,
                                    columnNumber: 542
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Timeline.tsx",
                            lineNumber: 135,
                            columnNumber: 402
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n                    grid\n                    transition-all\n                    duration-300\n                    ease-out\n                    grid-rows-[0fr]\n                    opacity-0\n                    group-hover:grid-rows-[1fr]\n                    group-hover:opacity-100\n                  ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs font-medium text-violet-100",
                                    children: "Save all 4 days to your calendar"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 135,
                                    columnNumber: 938
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 135,
                                columnNumber: 905
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Timeline.tsx",
                            lineNumber: 135,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 135,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 123,
            columnNumber: 21
        }, this);
        $[8] = mounted;
        $[9] = timeLeft;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-3xl text-center",
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-6 top-0 w-[2px] bg-gradient-to-b from-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2"
        }, void 0, false, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-5xl",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-12 md:gap-0",
                    children: scheduleData.map(_TimelineScheduleDataMap)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 159,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "timeline",
            className: "relative flex w-full flex-col overflow-hidden py-16 sm:py-24",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container relative z-10 mx-auto flex flex-col gap-16 px-6",
                    children: [
                        t8,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 166,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Timeline.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[15] = t8;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    return t11;
}
_s(Timeline, "eQx+TYr/ZLaVd6jn4yUqDHSGhBk=");
_c = Timeline;
function _TimelineScheduleDataMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex w-full flex-col items-start md:flex-row md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${index > 0 ? "md:-mt-24" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-6 top-9 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] md:left-1/2 md:top-1/2"
            }, void 0, false, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 175,
                columnNumber: 195
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full pl-16 md:w-1/2 ${index % 2 === 0 ? "md:pl-0 md:pr-12 lg:pr-16" : "md:pl-12 md:pr-0 lg:pl-16"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `glass w-full rounded-[32px] border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${item.isFinal ? "border-violet-500 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.15)]" : "border-white/10 hover:border-violet-500/40"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-semibold sm:text-xs text-violet-300",
                                    children: item.day
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 175,
                                    columnNumber: 822
                                }, this),
                                item.isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-violet-500 px-3 py-1 text-[10px] font-semibold sm:text-xs text-white",
                                    children: "Final Day"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 175,
                                    columnNumber: 967
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Timeline.tsx",
                            lineNumber: 175,
                            columnNumber: 766
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-6 text-xl font-bold text-white sm:text-2xl",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Timeline.tsx",
                            lineNumber: 175,
                            columnNumber: 1093
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4 shrink-0 text-violet-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1263
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.date
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1320
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 175,
                                    columnNumber: 1222
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "h-4 w-4 shrink-0 text-violet-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1391
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.time
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1445
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 175,
                                    columnNumber: 1350
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1515
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-slate-200",
                                                    children: item.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 1582
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 1649
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: item.locationDetails
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 1655
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Timeline.tsx",
                                            lineNumber: 175,
                                            columnNumber: 1577
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 175,
                                    columnNumber: 1475
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Timeline.tsx",
                            lineNumber: 175,
                            columnNumber: 1172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Timeline.tsx",
                    lineNumber: 175,
                    columnNumber: 514
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 175,
                columnNumber: 394
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/sections/Timeline.tsx",
        lineNumber: 175,
        columnNumber: 10
    }, this);
}
function _TimelineAnonymous(unit) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 py-4 shadow-lg sm:min-w-[100px] sm:px-4 sm:py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-2xl font-bold text-white sm:text-4xl",
                children: unit.value.toString().padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 178,
                columnNumber: 182
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-violet-400 sm:mt-2 sm:text-xs",
                children: unit.label
            }, void 0, false, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 178,
                columnNumber: 299
            }, this)
        ]
    }, unit.label, true, {
        fileName: "[project]/components/sections/Timeline.tsx",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const row1 = Array.from({
    length: 37
}, (_, index)=>`/images/gallery/gallery${index + 1}.jpg`);
const row2 = Array.from({
    length: 37
}, (_, index)=>`/images/gallery/gallery${index + 38}.jpg`);
function GalleryRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "5057a7447a1d8055c8dd32953fc38bb8db3be22b65e50d07de3e99b7f1dd9fd0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5057a7447a1d8055c8dd32953fc38bb8db3be22b65e50d07de3e99b7f1dd9fd0";
    }
    const { images, reverse: t1 } = t0;
    const reverse = t1 === undefined ? false : t1;
    const t2 = `flex w-max min-w-max will-change-transform [animation-duration:220s] sm:[animation-duration:280s] lg:[animation-duration:350s] ${reverse ? "[animation-direction:reverse]" : ""} motion-reduce:animate-none`;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            animationName: "marquee",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite"
        };
        t4 = [
            0,
            1
        ];
        $[1] = t3;
        $[2] = t4;
    } else {
        t3 = $[1];
        t4 = $[2];
    }
    let t5;
    if ($[3] !== images) {
        t5 = t4.map({
            "GalleryRow[(anonymous)()]": (copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": copyIndex === 1,
                    className: "flex shrink-0 gap-2.5 pr-2.5 sm:gap-4 sm:pr-4 lg:gap-8 lg:pr-8",
                    children: images.map({
                        "GalleryRow[(anonymous)() > images.map()]": (image, imageIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative h-[130px] w-[195px] shrink-0 overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.03] shadow-lg shadow-black/10 sm:h-[190px] sm:w-[285px] sm:rounded-[24px] lg:h-[280px] lg:w-[420px] lg:rounded-[34px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: image,
                                        alt: copyIndex === 0 ? `Adelaide MedTech Hackathon gallery image ${imageIndex + 1}` : "",
                                        fill: true,
                                        sizes: "(max-width: 639px) 195px, (max-width: 1023px) 285px, 420px",
                                        quality: 75,
                                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Gallery.tsx",
                                        lineNumber: 48,
                                        columnNumber: 357
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Gallery.tsx",
                                        lineNumber: 48,
                                        columnNumber: 641
                                    }, this)
                                ]
                            }, `${copyIndex}-${image}`, true, {
                                fileName: "[project]/components/sections/Gallery.tsx",
                                lineNumber: 48,
                                columnNumber: 78
                            }, this)
                    }["GalleryRow[(anonymous)() > images.map()]"])
                }, copyIndex, false, {
                    fileName: "[project]/components/sections/Gallery.tsx",
                    lineNumber: 47,
                    columnNumber: 49
                }, this)
        }["GalleryRow[(anonymous)()]"]);
        $[3] = images;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== t2 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-full overflow-x-clip [contain:layout_paint]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                style: t3,
                children: t5
            }, void 0, false, {
                fileName: "[project]/components/sections/Gallery.tsx",
                lineNumber: 58,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = GalleryRow;
function Gallery() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "5057a7447a1d8055c8dd32953fc38bb8db3be22b65e50d07de3e99b7f1dd9fd0") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5057a7447a1d8055c8dd32953fc38bb8db3be22b65e50d07de3e99b7f1dd9fd0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-400 sm:mb-4 sm:text-sm sm:tracking-[0.45em]",
            children: "Inside the Experience"
        }, void 0, false, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto mb-10 px-6 text-center sm:mb-14 lg:mb-16",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl",
                    children: [
                        "This is",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent",
                            children: [
                                "Adelaide",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Gallery.tsx",
                                    lineNumber: 84,
                                    columnNumber: 290
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm:hidden",
                                    children: " "
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Gallery.tsx",
                                    lineNumber: 84,
                                    columnNumber: 324
                                }, this),
                                "MedTech Hackathon."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Gallery.tsx",
                            lineNumber: 84,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Gallery.tsx",
                    lineNumber: 84,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0f1322] to-transparent sm:w-20 lg:w-48"
        }, void 0, false, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0f1322] to-transparent sm:w-20 lg:w-48"
        }, void 0, false, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "gallery",
            className: "relative isolate w-full max-w-full overflow-x-clip py-16 sm:py-20 lg:py-24 [contain:layout_paint]",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-full overflow-x-clip [contain:layout_paint]",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full max-w-full flex-col gap-2.5 overflow-x-clip sm:gap-4 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryRow, {
                                    images: row1
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Gallery.tsx",
                                    lineNumber: 102,
                                    columnNumber: 328
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryRow, {
                                    images: row2,
                                    reverse: true
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Gallery.tsx",
                                    lineNumber: 102,
                                    columnNumber: 356
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Gallery.tsx",
                            lineNumber: 102,
                            columnNumber: 237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Gallery.tsx",
                    lineNumber: 102,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c1 = Gallery;
var _c, _c1;
__turbopack_context__.k.register(_c, "GalleryRow");
__turbopack_context__.k.register(_c1, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Winners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Winners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const winnersData = [
    {
        year: "2025",
        award: "Champion",
        project: "Medilink",
        description: "An AI-powered clinical decision support platform helping healthcare professionals identify high-risk patients earlier.",
        image: "/images/winners/2025-2.jpg",
        team: [
            "Vedant Puri",
            "Angelina Rajic",
            "Magdalina Rajic",
            "Kelvin Ang",
            "Arunya Movva"
        ]
    },
    {
        year: "2025",
        award: "Runner-Up",
        project: "Visionary",
        description: "Improving healthcare accessibility through an optical device paired with an intuitive digital platform allowing patients to self-monitor their eye health and connect with healthcare professionals remotely.",
        image: "/images/winners/2025-1.jpg",
        team: [
            "Noel Modi",
            "Adi Polara"
        ]
    }
];
function Winners() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "74598b3b477e4ce8f3cfa273f42af2a98f495ecb148019c7e9a9ea4e4a6c5c67") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74598b3b477e4ce8f3cfa273f42af2a98f495ecb148019c7e9a9ea4e4a6c5c67";
    }
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const active = winnersData[activeIndex];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            colour: "emerald",
            position: "center"
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl flex-shrink-0 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400",
                    children: "Past Winners"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 41,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-bold leading-tight lg:text-5xl",
                    children: "Built Here. Now Making An Impact."
                }, void 0, false, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 41,
                    columnNumber: 173
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-base leading-7 text-slate-400 lg:text-lg",
                    children: "Every year teams build ideas with the potential to improve healthcare. Here are the top projects from 2025."
                }, void 0, false, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 41,
                    columnNumber: 272
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activeIndex) {
        t2 = winnersData.map({
            "Winners[winnersData.map()]": (winner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Winners[winnersData.map() > <button>.onClick]": ()=>setActiveIndex(index)
                    }["Winners[winnersData.map() > <button>.onClick]"],
                    className: `rounded-full border px-8 py-3 text-sm font-semibold transition-all duration-300 ${index === activeIndex ? "border-emerald-500/50 bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,.4)]" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"}`,
                    children: winner.award
                }, winner.award, false, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 49,
                    columnNumber: 56
                }, this)
        }["Winners[winnersData.map()]"]);
        $[3] = activeIndex;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-10 flex flex-shrink-0 flex-wrap justify-center gap-4",
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-emerald-600/15 via-transparent to-teal-500/10 blur-2xl"
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== active.image || $[9] !== active.project) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: active.image,
            alt: active.project,
            fill: true,
            className: "object-cover transition-transform duration-700 hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[8] = active.image;
        $[9] = active.project;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== active.award || $[13] !== active.year) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute bottom-6 left-6 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg",
            children: [
                active.year,
                " ",
                active.award
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[12] = active.award;
        $[13] = active.year;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t5 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-[300px] w-full overflow-hidden rounded-[28px] lg:min-h-[400px]",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== active.project) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-bold lg:text-4xl",
            children: active.project
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[18] = active.project;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== active.description) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 text-base leading-relaxed text-slate-400 lg:text-lg",
            children: active.description
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[20] = active.description;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400",
            children: "Team Members"
        }, void 0, false, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== active.team) {
        t12 = active.team.map(_WinnersActiveTeamMap);
        $[23] = active.team;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex flex-wrap gap-3",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 140,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t10 || $[28] !== t13 || $[29] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center",
            children: [
                t9,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t13;
        $[29] = t9;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t14 || $[32] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-12 w-full",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass grid gap-8 overflow-hidden rounded-[40px] border border-white/10 p-6 lg:grid-cols-2 lg:p-10",
                    children: [
                        t8,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 158,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t8;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t15 || $[35] !== t3) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "winners",
            className: "relative flex w-full flex-col justify-center px-6 py-16 sm:py-24 lg:px-12",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex w-full max-w-7xl flex-col justify-center",
                    children: [
                        t1,
                        t3,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Winners.tsx",
                    lineNumber: 167,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Winners.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t3;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    return t16;
}
_s(Winners, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c = Winners;
function _WinnersActiveTeamMap(member) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300",
        children: member
    }, member, false, {
        fileName: "[project]/components/sections/Winners.tsx",
        lineNumber: 177,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Winners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/team.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "team",
    ()=>team
]);
const team = [
    {
        name: "Namalu Abeysundara",
        role: "President",
        department: "Executive",
        image: "/images/team/namalu.jpg",
        linkedin: "#"
    },
    {
        name: "Benjamin Yuen",
        role: "Vice President",
        department: "Executive",
        image: "/images/team/benjamin.jpg",
        linkedin: "#"
    },
    {
        name: "Jerel Chua",
        role: "Secretary",
        department: "Executive",
        image: "/images/team/jerel.jpg",
        linkedin: "#"
    },
    {
        name: "Xiaoran Han",
        role: "Treasurer",
        department: "Executive",
        image: "/images/team/xiaoran.jpg",
        linkedin: "#"
    },
    {
        name: "Mirra Kannen",
        role: "Sponsorship Director",
        department: "Sponsorship",
        image: "/images/team/mirra.jpg",
        linkedin: "#"
    },
    {
        name: "Mah Rukh Fatima",
        role: "Sponsorship Officer",
        department: "Sponsorship",
        image: "/images/team/mahrukh.jpg",
        linkedin: "#"
    },
    {
        name: "Amnaa Masood",
        role: "Sponsorship Officer",
        department: "Sponsorship",
        image: "/images/team/amnaa.jpg",
        linkedin: "#"
    },
    {
        name: "Muhammad Ahmad",
        role: "Media Officer",
        department: "Media",
        image: "/images/team/muhammad.jpg",
        linkedin: "#"
    },
    {
        name: "Lirri Das",
        role: "Media Officer",
        department: "Media",
        image: "/images/team/lirri.jpg",
        linkedin: "#"
    },
    {
        name: "Noel Modi",
        role: "Logistics Director",
        department: "Logistics",
        image: "/images/team/noel.jpg",
        linkedin: "#"
    },
    {
        name: "Anam Ahsan",
        role: "Logistics Officer",
        department: "Logistics",
        image: "/images/team/anam.jpg",
        linkedin: "#"
    },
    {
        name: "Himaan Patel",
        role: "Events Director",
        department: "Events",
        image: "/images/team/himaan.jpg",
        linkedin: "#"
    },
    {
        name: "Aarya Patel",
        role: "Events Officer",
        department: "Events",
        image: "/images/team/aarya.jpg",
        linkedin: "#"
    },
    {
        name: "Husan Ara",
        role: "Events Officer",
        department: "Events",
        image: "/images/team/husan.jpg",
        linkedin: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/team.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const groups = [
    "Executive",
    "Sponsorship",
    "Media",
    "Logistics",
    "Events"
];
const themeMap = {
    Executive: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        glow: "hover:shadow-purple-500/20"
    },
    Sponsorship: {
        text: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        glow: "hover:shadow-amber-500/20"
    },
    Media: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        glow: "hover:shadow-emerald-500/20"
    },
    Logistics: {
        text: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        glow: "hover:shadow-rose-500/20"
    },
    Events: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        glow: "hover:shadow-blue-500/20"
    }
};
function Team() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "d7da7284345023772948038b76ba32ffe565bd895d90ef07ab4d2e9f75fab075") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7da7284345023772948038b76ba32ffe565bd895d90ef07ab4d2e9f75fab075";
    }
    const [activeGroup, setActiveGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Executive");
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== activeGroup) {
        const activeMembers = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["team"].filter({
            "Team[team.filter()]": (member)=>member.department === activeGroup
        }["Team[team.filter()]"]);
        const activeTheme = themeMap[activeGroup];
        t6 = "team";
        t7 = "relative isolate flex w-full max-w-full flex-col items-center overflow-x-clip py-16 sm:py-24 [contain:layout_paint]";
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                colour: "rose",
                position: "center"
            }, void 0, false, {
                fileName: "[project]/components/sections/Team.tsx",
                lineNumber: 72,
                columnNumber: 12
            }, this);
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        t3 = "relative z-10 mx-auto flex w-full max-w-[85rem] flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16";
        let t9;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-300 sm:mb-4 sm:text-sm sm:tracking-[0.35em]",
                children: "Meet the Dream Team"
            }, void 0, false, {
                fileName: "[project]/components/sections/Team.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[12] = t9;
        } else {
            t9 = $[12];
        }
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-3xl flex-col items-center justify-center text-center",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
                        children: [
                            "14 students.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/sections/Team.tsx",
                                lineNumber: 86,
                                columnNumber: 220
                            }, this),
                            "One shared mission."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Team.tsx",
                        lineNumber: 86,
                        columnNumber: 104
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-8 sm:text-lg sm:leading-relaxed lg:text-xl",
                        children: "Adelaide MedTech Hackathon is entirely student-led. Every sponsor, workshop, mentor and experience is organised by a passionate committee committed to advancing healthcare innovation."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Team.tsx",
                        lineNumber: 86,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Team.tsx",
                lineNumber: 86,
                columnNumber: 12
            }, this);
            $[13] = t4;
        } else {
            t4 = $[13];
        }
        const t10 = groups.map({
            "Team[groups.map()]": (group)=>{
                const isActive = activeGroup === group;
                const theme = themeMap[group];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "tab",
                    "aria-selected": isActive,
                    onClick: {
                        "Team[groups.map() > <button>.onClick]": ()=>setActiveGroup(group)
                    }["Team[groups.map() > <button>.onClick]"],
                    className: `relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm lg:px-8 lg:py-3 lg:text-base ${isActive ? `${theme.border} ${theme.bg} text-white shadow-lg` : `border-white/10 bg-white/5 ${theme.text} hover:border-white/20 hover:bg-white/10 hover:text-white`}`,
                    children: group
                }, group, false, {
                    fileName: "[project]/components/sections/Team.tsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, this);
            }
        }["Team[groups.map()]"]);
        if ($[14] !== t10) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-8 w-full sm:my-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "tablist",
                    "aria-label": "Team departments",
                    className: "mx-auto flex w-full max-w-full gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/components/sections/Team.tsx",
                    lineNumber: 101,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Team.tsx",
                lineNumber: 101,
                columnNumber: 12
            }, this);
            $[14] = t10;
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        t2 = "w-full";
        t0 = "grid w-full grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8";
        let t11;
        if ($[16] !== activeTheme) {
            t11 = ({
                "Team[activeMembers.map()]": (member_0)=>{
                    const isDirector = member_0.role.toLowerCase().includes("director");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `glass group flex min-w-0 flex-col items-center rounded-[18px] border border-white/10 p-2.5 transition-all duration-500 sm:rounded-3xl sm:p-5 lg:p-6 lg:hover:-translate-y-2 lg:hover:border-white/20 lg:hover:shadow-xl ${isDirector ? "bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]" : ""} ${activeTheme.glow}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-white/5 shadow-md sm:mb-5 sm:rounded-2xl",
                                children: [
                                    isDirector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-1.5 top-1.5 z-10 rounded-full border border-white/20 bg-black/50 px-2 py-1 backdrop-blur-md sm:right-3 sm:top-3 sm:px-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[7px] font-bold uppercase tracking-[0.12em] text-white sm:text-[10px] sm:tracking-widest",
                                            children: "Director"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Team.tsx",
                                            lineNumber: 114,
                                            columnNumber: 666
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Team.tsx",
                                        lineNumber: 114,
                                        columnNumber: 514
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: member_0.image,
                                        alt: member_0.name,
                                        fill: true,
                                        sizes: "(max-width: 639px) 45vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw",
                                        className: "object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Team.tsx",
                                        lineNumber: 114,
                                        columnNumber: 800
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:from-black/50 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Team.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1044
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Team.tsx",
                                lineNumber: 114,
                                columnNumber: 373
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "line-clamp-2 min-h-[2.5rem] text-center text-sm font-bold leading-5 tracking-tight text-white sm:mb-2 sm:min-h-0 sm:text-lg lg:text-xl",
                                children: member_0.name
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Team.tsx",
                                lineNumber: 114,
                                columnNumber: 1263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 line-clamp-2 min-h-[2rem] text-center text-[8px] font-semibold uppercase leading-4 tracking-[0.12em] sm:mt-0 sm:min-h-0 sm:text-xs sm:tracking-widest ${activeTheme.text}`,
                                children: member_0.role
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Team.tsx",
                                lineNumber: 114,
                                columnNumber: 1434
                            }, this)
                        ]
                    }, member_0.name, true, {
                        fileName: "[project]/components/sections/Team.tsx",
                        lineNumber: 114,
                        columnNumber: 18
                    }, this);
                }
            })["Team[activeMembers.map()]"];
            $[16] = activeTheme;
            $[17] = t11;
        } else {
            t11 = $[17];
        }
        t1 = activeMembers.map(t11);
        $[1] = activeGroup;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[18] !== t0 || $[19] !== t1) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/sections/Team.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[18] = t0;
        $[19] = t1;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t2 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/sections/Team.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[21] = t2;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t3 || $[26] !== t4 || $[27] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Team.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t3;
        $[26] = t4;
        $[27] = t5;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11 || $[30] !== t6 || $[31] !== t7 || $[32] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t6,
            className: t7,
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Team.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t6;
        $[31] = t7;
        $[32] = t8;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    return t12;
}
_s(Team, "nahz55A1Cf9WmuxeZE4vE4JISi8=");
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/faq.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faq",
    ()=>faq
]);
const faq = [
    {
        question: "Do I need coding experience?",
        answer: "Absolutely not. Many successful teams include students from medicine, engineering, business, design and science. If you're curious, willing to learn and excited to collaborate, you'll fit right in."
    },
    {
        question: "Can I register without a team?",
        answer: "Yes! During our opening session we'll run a dedicated team formation activity to help you meet people from different disciplines and build a balanced team."
    },
    {
        question: "Who can participate?",
        answer: "The Adelaide MedTech Hackathon is open to South Australian university students and senior high school students (Years 10–12). Whether you're studying medicine, engineering, business, science, design or something completely different, you're welcome."
    },
    {
        question: "Is food provided?",
        answer: "Yes! Meals, snacks and refreshments are provided throughout the event so you can stay focused on building something incredible."
    },
    {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, student ID, water bottle and plenty of enthusiasm. We'll provide everything else you need."
    },
    {
        question: "What if I've never built anything before?",
        answer: "That's exactly why Adelaide MedTech Hackathon exists. Our workshops, mentors and teammates will help you learn throughout the weekend. Everyone starts somewhere."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faq.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const colorThemes = [
    {
        activeBorder: "border-violet-500/50",
        activeBg: "from-violet-500/10",
        activeShadow: "shadow-[0_4px_30px_rgba(139,92,246,0.1)]",
        activeText: "text-violet-300",
        iconBgActive: "bg-violet-500/20",
        iconTextActive: "text-violet-400",
        hoverBorder: "hover:border-violet-500/30"
    },
    {
        activeBorder: "border-emerald-500/50",
        activeBg: "from-emerald-500/10",
        activeShadow: "shadow-[0_4px_30px_rgba(16,185,129,0.1)]",
        activeText: "text-emerald-300",
        iconBgActive: "bg-emerald-500/20",
        iconTextActive: "text-emerald-400",
        hoverBorder: "hover:border-emerald-500/30"
    },
    {
        activeBorder: "border-blue-500/50",
        activeBg: "from-blue-500/10",
        activeShadow: "shadow-[0_4px_30px_rgba(59,130,246,0.1)]",
        activeText: "text-blue-300",
        iconBgActive: "bg-blue-500/20",
        iconTextActive: "text-blue-400",
        hoverBorder: "hover:border-blue-500/30"
    },
    {
        activeBorder: "border-rose-500/50",
        activeBg: "from-rose-500/10",
        activeShadow: "shadow-[0_4px_30px_rgba(244,63,94,0.1)]",
        activeText: "text-rose-300",
        iconBgActive: "bg-rose-500/20",
        iconTextActive: "text-rose-400",
        hoverBorder: "hover:border-rose-500/30"
    },
    {
        activeBorder: "border-amber-500/50",
        activeBg: "from-amber-500/10",
        activeShadow: "shadow-[0_4px_30px_rgba(245,158,11,0.1)]",
        activeText: "text-amber-300",
        iconBgActive: "bg-amber-500/20",
        iconTextActive: "text-amber-400",
        hoverBorder: "hover:border-amber-500/30"
    }
];
function FAQ() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4fd327ad2d52322c913202d655bf2010d52a3e7e5ec6873689fce64a9ca3bcd6") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fd327ad2d52322c913202d655bf2010d52a3e7e5ec6873689fce64a9ca3bcd6";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            colour: "blue",
            position: "center"
        }, void 0, false, {
            fileName: "[project]/components/sections/FAQ.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4 text-sm uppercase tracking-[0.45em] text-violet-400",
            children: "FAQ"
        }, void 0, false, {
            fileName: "[project]/components/sections/FAQ.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mb-16 max-w-3xl text-center",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl font-bold lg:text-6xl",
                    children: [
                        "Questions?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/sections/FAQ.tsx",
                            lineNumber: 74,
                            columnNumber: 124
                        }, this),
                        "We've got you covered."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/FAQ.tsx",
                    lineNumber: 74,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-8 text-lg leading-8 text-slate-400",
                    children: "Everything you need to know before joining Adelaide MedTech Hackathon."
                }, void 0, false, {
                    fileName: "[project]/components/sections/FAQ.tsx",
                    lineNumber: 74,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/FAQ.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== open) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faq"].map({
            "FAQ[faq.map()]": (item, index)=>{
                const isOpen = open === index;
                const theme = colorThemes[index % colorThemes.length];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `group overflow-hidden rounded-[28px] border backdrop-blur-xl transition-all duration-300 ${isOpen ? `${theme.activeBorder} bg-gradient-to-br ${theme.activeBg} to-transparent ${theme.activeShadow}` : `border-white/10 bg-white/[0.03] ${theme.hoverBorder}`}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "FAQ[faq.map() > <button>.onClick]": ()=>setOpen(isOpen ? -1 : index)
                            }["FAQ[faq.map() > <button>.onClick]"],
                            className: "flex w-full items-center justify-between px-8 py-7 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xl font-semibold transition-colors duration-300 ${isOpen ? theme.activeText : "text-slate-200 group-hover:text-white"}`,
                                    children: item.question
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQ.tsx",
                                    lineNumber: 87,
                                    columnNumber: 124
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? `rotate-45 ${theme.iconBgActive} ${theme.iconTextActive}` : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/FAQ.tsx",
                                        lineNumber: 87,
                                        columnNumber: 549
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQ.tsx",
                                    lineNumber: 87,
                                    columnNumber: 290
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/FAQ.tsx",
                            lineNumber: 85,
                            columnNumber: 310
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `px-8 pb-8 leading-8 text-slate-400 transition-all duration-500 delay-100 ${isOpen ? "translate-y-0" : "-translate-y-4"}`,
                                    children: item.answer
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQ.tsx",
                                    lineNumber: 87,
                                    columnNumber: 751
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FAQ.tsx",
                                lineNumber: 87,
                                columnNumber: 718
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FAQ.tsx",
                            lineNumber: 87,
                            columnNumber: 582
                        }, this)
                    ]
                }, item.question, true, {
                    fileName: "[project]/components/sections/FAQ.tsx",
                    lineNumber: 85,
                    columnNumber: 16
                }, this);
            }
        }["FAQ[faq.map()]"]);
        $[4] = open;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "relative py-16 sm:py-24",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-5xl px-6",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: t3
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FAQ.tsx",
                            lineNumber: 97,
                            columnNumber: 122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/FAQ.tsx",
                    lineNumber: 97,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/FAQ.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s(FAQ, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/CTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackgroundGlow.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function CTA() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "08c924d7d4cfb1df0dad26831425229154286a83eb672c0b3e0eb180e97447d6") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "08c924d7d4cfb1df0dad26831425229154286a83eb672c0b3e0eb180e97447d6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackgroundGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            colour: "violet",
            position: "center"
        }, void 0, false, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]"
        }, void 0, false, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300",
            children: "Registration Open"
        }, void 0, false, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl",
            children: [
                "Ready to build the ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                    className: "hidden lg:block"
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 38,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent",
                    children: "future of healthcare?"
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 38,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 lg:mx-0",
            children: "Join students from medicine, engineering, business, design, science and technology for an unforgettable weekend of innovation, collaboration and impact."
        }, void 0, false, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex-1 text-center lg:text-left",
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://docs.google.com/forms/d/e/1FAIpQLSfzuxnYnfdkLhnjFOCKnJlDzZ1v4SgjJFXPof3jKiJ0IE3-Mw/viewform",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "w-full rounded-full bg-violet-500 px-8 py-4 font-bold tracking-wide text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:bg-violet-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] sm:w-auto",
                            children: "Register Now"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 48,
                            columnNumber: 179
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            className: "w-full rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all hover:border-violet-400/50 hover:bg-white/5 sm:w-auto",
                            children: "Learn More"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 48,
                            columnNumber: 558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 48,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "register",
            className: "relative py-16 sm:py-24 overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-2xl sm:p-12 lg:flex lg:flex-row lg:items-center lg:gap-20 lg:p-16",
                        children: [
                            t1,
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 mt-12 flex w-full flex-col gap-4 lg:mt-0 lg:w-[400px]",
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        stat: "350+",
                                        label: "Students Inspired"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                                        stat: "$1K+",
                                        label: "Prize Pool + Startup Incubation"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
                                        stat: "15+",
                                        label: "Industry Mentors"
                                    }
                                ].map(_CTAAnonymous)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CTA.tsx",
                                lineNumber: 55,
                                columnNumber: 312
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/CTA.tsx",
                        lineNumber: 55,
                        columnNumber: 139
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 55,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/CTA.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = CTA;
function _CTAAnonymous(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-violet-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 75,
                    columnNumber: 304
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 75,
                columnNumber: 170
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: item.stat
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CTA.tsx",
                        lineNumber: 75,
                        columnNumber: 348
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-400",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CTA.tsx",
                        lineNumber: 75,
                        columnNumber: 412
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 75,
                columnNumber: 343
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/sections/CTA.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
"use client";
;
;
;
;
;
// --- Custom Brand Logo Components ---
const WhatsAppLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: className,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = WhatsAppLogo;
const InstagramLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c1 = InstagramLogo;
const LinkedInLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: className,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c2 = LinkedInLogo;
const YouTubeLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: className,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c3 = YouTubeLogo;
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e70ed5dfdfc4e9a10991272a08fde048d61cccfd65678ba3c8874dc3ac56653";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logos/logo-dark.png",
                            alt: "Adelaide MedTech Hackathon",
                            width: 160,
                            height: 80
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 139,
                            columnNumber: 56
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white",
                                    children: "Adelaide MedTech"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 139,
                                    columnNumber: 154
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400",
                                    children: "Hackathon"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 139,
                                    columnNumber: 220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 139,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 leading-7 text-slate-400",
                    children: "South Australia's premier student healthcare innovation hackathon, bringing together students from medicine, engineering, business, design and technology to solve real healthcare challenges."
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 139,
                    columnNumber: 275
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "mb-6 text-lg font-semibold text-white",
            children: "Explore"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:pl-8",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#about",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#streams",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "Challenge Themes"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#timeline",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "Timeline"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 265
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#gallery",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "Gallery"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 364
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#team",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "Team"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 461
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#faq",
                            className: "block text-slate-400 transition hover:text-white",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 154,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "mb-8 text-lg font-semibold text-white",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-xl text-violet-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "h-5 w-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "4",
                        width: "20",
                        height: "16",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 164,
                        columnNumber: 276
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m2 4 10 8 10-8"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 164,
                        columnNumber: 326
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 164,
                columnNumber: 136
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:adelaide.medtechhackathon@gmail.com",
            className: "flex w-full items-center gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:bg-violet-500/20",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "font-semibold text-white",
                            children: "Email Us"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 171,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "break-words text-sm leading-5 text-violet-300",
                            children: "adelaide.medtechhackathon@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 171,
                            columnNumber: 343
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 171,
                    columnNumber: 265
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/70",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "h-5 w-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 178,
                        columnNumber: 261
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "10",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 178,
                        columnNumber: 320
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 178,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "font-semibold text-white",
            children: "Event Location"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 185,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 192,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        t7,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-5 text-slate-400",
                                            children: [
                                                "AHMS Building",
                                                t8,
                                                "North Terrace",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 258
                                                }, this),
                                                "Adelaide SA 5000"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 200,
                                            columnNumber: 180
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 200,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 200,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "mb-6 text-lg font-semibold text-white",
            children: "Connect"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://chat.whatsapp.com/ChWjapkz1gX1TkyPuTzexO",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppLogo, {
                                    className: "h-5 w-5 text-emerald-400 transition-transform group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 466
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-semibold text-white",
                                    children: "WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 562
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 210,
                            columnNumber: 425
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18,
                            className: "text-emerald-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 210,
                            columnNumber: 622
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 210,
                    columnNumber: 369
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-emerald-300/80",
                    children: "Team Formation \u2022 Q&A"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 210,
                    columnNumber: 786
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://instagram.com/adl.medtechhackathon",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex flex-col justify-between rounded-2xl border border-pink-500/20 bg-pink-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/20 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramLogo, {
                                    className: "h-5 w-5 text-pink-400 transition-transform group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 217,
                                    columnNumber: 448
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-semibold text-white",
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 217,
                                    columnNumber: 542
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 217,
                            columnNumber: 407
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18,
                            className: "text-pink-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 217,
                            columnNumber: 603
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 217,
                    columnNumber: 351
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-pink-300/80",
                    children: "Photos • Event News"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 217,
                    columnNumber: 764
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/company/adelaide-medtech-hackathon",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500/20 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInLogo, {
                                    className: "h-5 w-5 text-sky-400 transition-transform group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 224,
                                    columnNumber: 461
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-semibold text-white",
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 224,
                                    columnNumber: 553
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 224,
                            columnNumber: 420
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18,
                            className: "text-sky-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 224,
                            columnNumber: 613
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 224,
                    columnNumber: 364
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-sky-300/80",
                    children: "Industry • Careers"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 224,
                    columnNumber: 773
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-12 lg:grid-cols-[1.1fr_0.8fr_1.0fr_1.5fr]",
            children: [
                t0,
                t2,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                t11,
                                t12,
                                t13,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.youtube.com/@adlmedtechhackathon7691/videos",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group flex flex-col justify-between rounded-2xl border border-red-500/20 bg-red-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_8px_30px_rgba(239,68,68,0.15)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YouTubeLogo, {
                                                            className: "h-5 w-5 text-red-500 transition-transform group-hover:scale-110"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 604
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-semibold text-white",
                                                            children: "YouTube"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 695
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 563
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 18,
                                                    className: "text-red-500 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 754
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 231,
                                            columnNumber: 507
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-300/80",
                                            children: "Ideas • Info"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 231,
                                            columnNumber: 914
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 231,
                                    columnNumber: 159
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 231,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 231,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "border-t border-white/10 bg-[#09090b]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-16",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-slate-500 lg:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2026 Adelaide MedTech Hackathon. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 238,
                                columnNumber: 257
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Hosted by AUSA Club, Adelaide MedTech Hackathon"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 238,
                                columnNumber: 319
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 238,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 238,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    return t15;
}
_c4 = Footer;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "WhatsAppLogo");
__turbopack_context__.k.register(_c1, "InstagramLogo");
__turbopack_context__.k.register(_c2, "LinkedInLogo");
__turbopack_context__.k.register(_c3, "YouTubeLogo");
__turbopack_context__.k.register(_c4, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0d-h1l6._.js.map