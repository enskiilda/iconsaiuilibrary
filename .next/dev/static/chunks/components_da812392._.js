(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/prompt-kit/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "CodeBlockCode",
    ()=>CodeBlockCode,
    "CodeBlockCopyButton",
    ()=>CodeBlockCopyButton,
    "CodeBlockHeader",
    ()=>CodeBlockHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CodeBlock({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-lg bg-fd-secondary/50 overflow-hidden ${className || ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/code-block.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = CodeBlock;
function CodeBlockCode({ code, language = "plaintext", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        className: `overflow-x-auto p-4 text-sm m-0 ${className || ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-fd-secondary-foreground",
            "data-language": language,
            children: code
        }, void 0, false, {
            fileName: "[project]/components/prompt-kit/code-block.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/code-block.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = CodeBlockCode;
function CodeBlockHeader({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between px-4 py-2 border-b border-fd-border bg-fd-muted/30 ${className || ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/code-block.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c2 = CodeBlockHeader;
function CodeBlockCopyButton({ code, className }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleCopy,
        className: `p-1.5 rounded-md text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/50 transition-colors ${className || ""}`,
        title: copied ? "Copied!" : "Copy Code",
        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 6L9 17l-5-5"
            }, void 0, false, {
                fileName: "[project]/components/prompt-kit/code-block.tsx",
                lineNumber: 73,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/prompt-kit/code-block.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "9",
                    y: "9",
                    width: "13",
                    height: "13",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/components/prompt-kit/code-block.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                }, void 0, false, {
                    fileName: "[project]/components/prompt-kit/code-block.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/prompt-kit/code-block.tsx",
            lineNumber: 76,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/code-block.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(CodeBlockCopyButton, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c3 = CodeBlockCopyButton;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CodeBlock");
__turbopack_context__.k.register(_c1, "CodeBlockCode");
__turbopack_context__.k.register(_c2, "CodeBlockHeader");
__turbopack_context__.k.register(_c3, "CodeBlockCopyButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CodePreviewTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodePreviewTabs",
    ()=>CodePreviewTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/prompt-kit/code-block.tsx [app-client] (ecmascript)");
'use client';
;
;
function CodePreviewTabs({ code, language = "typescript", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-fd-border overflow-hidden bg-fd-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 flex items-center justify-center min-h-[200px] bg-fd-background",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-fd-border overflow-hidden bg-fd-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2 border-b border-fd-border bg-fd-muted/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-fd-muted-foreground",
                                children: "Code"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockCopyButton"], {
                                code: code
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockCode"], {
                            code: code,
                            language: language,
                            className: "max-h-[500px]"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CodePreviewTabs.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/CodePreviewTabs.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CodePreviewTabs;
var _c;
__turbopack_context__.k.register(_c, "CodePreviewTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/prompt-kit/reasoning.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reasoning",
    ()=>Reasoning,
    "ReasoningContent",
    ()=>ReasoningContent,
    "ReasoningTrigger",
    ()=>ReasoningTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ReasoningContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useReasoningContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ReasoningContext);
    if (!context) {
        throw new Error("useReasoningContext must be used within a Reasoning provider");
    }
    return context;
}
_s(useReasoningContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Reasoning({ children, className, open, onOpenChange, isStreaming }) {
    _s1();
    const [internalOpen, setInternalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wasAutoOpened, setWasAutoOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : internalOpen;
    const handleOpenChange = (newOpen)=>{
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reasoning.useEffect": ()=>{
            if (isStreaming && !wasAutoOpened) {
                if (!isControlled) setInternalOpen(true);
                setWasAutoOpened(true);
            }
            if (!isStreaming && wasAutoOpened) {
                if (!isControlled) setInternalOpen(false);
                setWasAutoOpened(false);
            }
        }
    }["Reasoning.useEffect"], [
        isStreaming,
        wasAutoOpened,
        isControlled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReasoningContext.Provider, {
        value: {
            isOpen,
            onOpenChange: handleOpenChange
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/prompt-kit/reasoning.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/reasoning.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s1(Reasoning, "Wqr4l6fw4A9zRN9KbpZc1oWZkng=");
_c = Reasoning;
function ReasoningTrigger({ children, className, ...props }) {
    _s2();
    const { isOpen, onOpenChange } = useReasoningContext();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer items-center gap-2 !mb-0 !pb-0", className),
        onClick: ()=>onOpenChange(!isOpen),
        "data-testid": "button-reasoning-trigger",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-muted-foreground text-sm",
                children: children || "Reasoning"
            }, void 0, false, {
                fileName: "[project]/components/prompt-kit/reasoning.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transform transition-transform duration-200", isOpen ? "rotate-180" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/components/prompt-kit/reasoning.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/prompt-kit/reasoning.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/prompt-kit/reasoning.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s2(ReasoningTrigger, "tnHaamkGcg2A6ChrRa16Vbno840=", false, function() {
    return [
        useReasoningContext
    ];
});
_c1 = ReasoningTrigger;
function ReasoningContent({ children, className, contentClassName, ...props }) {
    _s3();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isOpen } = useReasoningContext();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReasoningContent.useEffect": ()=>{
            if (!contentRef.current || !innerRef.current) return;
            const observer = new ResizeObserver({
                "ReasoningContent.useEffect": ()=>{
                    if (contentRef.current && innerRef.current && isOpen) {
                        contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
                    }
                }
            }["ReasoningContent.useEffect"]);
            observer.observe(innerRef.current);
            if (isOpen) {
                contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
            }
            return ({
                "ReasoningContent.useEffect": ()=>observer.disconnect()
            })["ReasoningContent.useEffect"];
        }
    }["ReasoningContent.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: contentRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-[max-height] duration-150 ease-out", className),
        style: {
            maxHeight: isOpen ? contentRef.current?.scrollHeight : "0px"
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: innerRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", contentClassName),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "whitespace-pre-wrap font-sans !m-0 !p-0 !mt-0 !mb-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/prompt-kit/reasoning.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/prompt-kit/reasoning.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/reasoning.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s3(ReasoningContent, "O6aZ+X/Vu66aYThxts8szRFbkEA=", false, function() {
    return [
        useReasoningContext
    ];
});
_c2 = ReasoningContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Reasoning");
__turbopack_context__.k.register(_c1, "ReasoningTrigger");
__turbopack_context__.k.register(_c2, "ReasoningContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReasoningPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReasoningPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/prompt-kit/reasoning.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const simulateMarkdownStream = async (setText, setIsStreaming)=>{
    const reasoning = `# Solving: Square Root of 144

## Step 1: Problem Analysis
I need to find a number that, when **multiplied by itself**, equals 144.

## Step 2: Testing Values
- \`10² = 100\` ❌ (too small)
- \`13² = 169\` ❌ (too large) 
- \`12² = 144\` ✅ (perfect!)

## Step 3: Verification
\`\`\`
12 × 12 = 144 ✓
\`\`\`

> **Answer:** The square root of 144 is **12**.`;
    setIsStreaming(true);
    setText("");
    for(let i = 0; i <= reasoning.length; i++){
        setText(reasoning.slice(0, i));
        await new Promise((resolve)=>setTimeout(resolve, 20));
    }
    setIsStreaming(false);
};
function ReasoningPreview() {
    _s();
    const [reasoningText, setReasoningText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isStreaming, setIsStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGenerateReasoning = ()=>{
        simulateMarkdownStream(setReasoningText, setIsStreaming);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col items-start gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleGenerateReasoning,
                disabled: isStreaming,
                className: "px-4 py-2 text-sm font-medium rounded-md border border-fd-border bg-fd-background hover:bg-fd-muted transition-colors disabled:opacity-50",
                children: isStreaming ? "Thinking..." : "Generate Reasoning"
            }, void 0, false, {
                fileName: "[project]/components/ReasoningPreview.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reasoning"], {
                isStreaming: isStreaming,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReasoningTrigger"], {
                        children: "Show AI reasoning"
                    }, void 0, false, {
                        fileName: "[project]/components/ReasoningPreview.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReasoningContent"], {
                        className: "ml-2 border-l-2 border-l-slate-200 px-2 pb-1 dark:border-l-slate-700",
                        children: reasoningText
                    }, void 0, false, {
                        fileName: "[project]/components/ReasoningPreview.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ReasoningPreview.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ReasoningPreview.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ReasoningPreview, "tbIgJYn+SEzQyjZxUNBQ94NJX/M=");
_c = ReasoningPreview;
var _c;
__turbopack_context__.k.register(_c, "ReasoningPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReasoningSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReasoningSection",
    ()=>ReasoningSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CodePreviewTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReasoningPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ReasoningPreview.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const code = `import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"
import { useState } from "react"

const simulateMarkdownStream = async (
  setText: (text: string) => void,
  setIsStreaming: (streaming: boolean) => void
) => {
  const reasoning = \`# Solving: Square Root of 144

## Step 1: Problem Analysis
I need to find a number that, when **multiplied by itself**, equals 144.

## Step 2: Testing Values
- \\\`10² = 100\\\` ❌ (too small)
- \\\`13² = 169\\\` ❌ (too large) 
- \\\`12² = 144\\\` ✅ (perfect!)

## Step 3: Verification
\\\`\\\`\\\`
12 × 12 = 144 ✓
\\\`\\\`\\\`

> **Answer:** The square root of 144 is **12**.\`

  setIsStreaming(true)
  setText("")

  for (let i = 0; i <= reasoning.length; i++) {
    setText(reasoning.slice(0, i))
    await new Promise((resolve) => setTimeout(resolve, 20))
  }

  setIsStreaming(false)
}

export function ReasoningMarkdown() {
  const [reasoningText, setReasoningText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const handleGenerateReasoning = () => {
    simulateMarkdownStream(setReasoningText, setIsStreaming)
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <button
        onClick={handleGenerateReasoning}
        disabled={isStreaming}
        className="px-4 py-2 text-sm font-medium rounded-md border"
      >
        {isStreaming ? "Thinking..." : "Generate Reasoning"}
      </button>

      <Reasoning isStreaming={isStreaming}>
        <ReasoningTrigger>Show AI reasoning</ReasoningTrigger>
        <ReasoningContent
          className="ml-2 border-l-2 border-l-slate-200 px-2 pb-1 dark:border-l-slate-700"
        >
          {reasoningText}
        </ReasoningContent>
      </Reasoning>
    </div>
  )
}`;
function ReasoningSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreviewTabs"], {
        code: code,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReasoningPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/ReasoningSection.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ReasoningSection.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c = ReasoningSection;
var _c;
__turbopack_context__.k.register(_c, "ReasoningSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PromptInputPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
function ChatInput() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (message.trim()) {
            setIsGenerating(true);
            setMessage("");
            setIsExpanded(false);
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
            setTimeout(()=>{
                setIsGenerating(false);
            }, 3000);
        }
    };
    const handleTextareaChange = (e)=>{
        setMessage(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        setIsExpanded(e.target.value.length > 100 || e.target.value.includes("\n"));
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "group/composer w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: cn("w-full max-w-2xl mx-auto bg-transparent dark:bg-muted/50 cursor-text overflow-clip bg-clip-padding p-2.5 shadow-lg border border-border transition-all duration-200", isExpanded ? "rounded-3xl grid grid-cols-1 grid-rows-[auto_1fr_auto]" : "rounded-[28px] grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]"),
            style: {
                gridTemplateAreas: isExpanded ? "'header' 'primary' 'footer'" : "'header header header' 'leading primary trailing' '. footer .'"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cn("flex min-h-14 items-center overflow-x-hidden px-1.5", isExpanded ? "px-2 py-1 mb-0" : "-my-2.5"),
                    style: {
                        gridArea: "primary"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto max-h-52",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            ref: textareaRef,
                            value: message,
                            onChange: handleTextareaChange,
                            onKeyDown: handleKeyDown,
                            placeholder: "Ask anything",
                            className: "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full bg-transparent text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-0 resize-none rounded-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-thin dark:bg-transparent",
                            rows: 1
                        }, void 0, false, {
                            fileName: "[project]/components/PromptInputPreview.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptInputPreview.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PromptInputPreview.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cn("flex", isExpanded && "hidden"),
                    style: {
                        gridArea: "leading"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{},
                        className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-9 w-9 rounded-full hover:bg-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                            className: "size-6 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/PromptInputPreview.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptInputPreview.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PromptInputPreview.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    style: {
                        gridArea: isExpanded ? "footer" : "trailing"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ms-auto flex items-center gap-1.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 size-9 h-9 w-9 rounded-full",
                            children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8.7587 3H15.2413C16.0463 2.99999 16.7106 2.99998 17.2518 3.0442C17.8139 3.09012 18.3306 3.18868 18.816 3.43598C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66938 20.9099 6.18608 20.9558 6.74818C21 7.28937 21 7.95372 21 8.75868V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H8.75868C7.95372 21 7.28937 21 6.74818 20.9558C6.18608 20.9099 5.66938 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43598 18.816C3.18868 18.3306 3.09012 17.8139 3.0442 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413V8.75868C2.99999 7.95373 2.99998 7.28936 3.0442 6.74818C3.09012 6.18608 3.18868 5.66938 3.43598 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43598C5.66938 3.18868 6.18608 3.09012 6.74818 3.0442C7.28936 2.99998 7.95375 2.99999 8.7587 3Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/components/PromptInputPreview.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PromptInputPreview.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "lucide lucide-arrow-up-icon lucide-arrow-up size-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m5 12 7-7 7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptInputPreview.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 19V5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptInputPreview.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptInputPreview.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PromptInputPreview.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptInputPreview.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PromptInputPreview.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PromptInputPreview.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PromptInputPreview.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "L+HLM90RhHARPOQVZSUkAvCrKuA=");
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PromptInputSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromptInputSection",
    ()=>PromptInputSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CodePreviewTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptInputPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PromptInputPreview.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const code = `"use client"

import type React from "react"
import { IconPlus } from "@tabler/icons-react"
import { useRef, useState } from "react"

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ")
}

export default function ChatInput() {
  const [message, setMessage] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (message.trim()) {
      setIsGenerating(true)
      setMessage("")
      setIsExpanded(false)

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }

      setTimeout(() => {
        setIsGenerating(false)
      }, 3000)
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = \`\${textareaRef.current.scrollHeight}px\`
    }

    setIsExpanded(e.target.value.length > 100 || e.target.value.includes("\\n"))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="group/composer w-full">
      <div
        className={cn(
          "w-full max-w-2xl mx-auto bg-transparent dark:bg-muted/50 cursor-text overflow-clip bg-clip-padding p-2.5 shadow-lg border border-border transition-all duration-200",
          isExpanded
            ? "rounded-3xl grid grid-cols-1 grid-rows-[auto_1fr_auto]"
            : "rounded-[28px] grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]",
        )}
        style={{
          gridTemplateAreas: isExpanded
            ? "'header' 'primary' 'footer'"
            : "'header header header' 'leading primary trailing' '. footer .'",
        }}
      >
        <div
          className={cn(
            "flex min-h-14 items-center overflow-x-hidden px-1.5",
            isExpanded ? "px-2 py-1 mb-0" : "-my-2.5",
          )}
          style={{ gridArea: "primary" }}
        >
          <div className="flex-1 overflow-auto max-h-52">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything"
              className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full bg-transparent text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-0 resize-none rounded-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-thin dark:bg-transparent"
              rows={1}
            />
          </div>
        </div>

        <div className={cn("flex", isExpanded && "hidden")} style={{ gridArea: "leading" }}>
          <button
            type="button"
            onClick={() => {}}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-9 w-9 rounded-full hover:bg-accent"
          >
            <IconPlus className="size-6 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-center gap-2" style={{ gridArea: isExpanded ? "footer" : "trailing" }}>
          <div className="ms-auto flex items-center gap-1.5">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 size-9 h-9 w-9 rounded-full"
            >
              {isGenerating ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path
                    d="M8.7587 3H15.2413C16.0463 2.99999 16.7106 2.99998 17.2518 3.0442C17.8139 3.09012 18.3306 3.18868 18.816 3.43598C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66938 20.9099 6.18608 20.9558 6.74818C21 7.28937 21 7.95372 21 8.75868V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H8.75868C7.95372 21 7.28937 21 6.74818 20.9558C6.18608 20.9099 5.66938 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43598 18.816C3.18868 18.3306 3.09012 17.8139 3.0442 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413V8.75868C2.99999 7.95373 2.99998 7.28936 3.0442 6.74818C3.09012 6.18608 3.18868 5.66938 3.43598 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43598C5.66938 3.18868 6.18608 3.09012 6.74818 3.0442C7.28936 2.99998 7.95375 2.99999 8.7587 3Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-icon lucide-arrow-up size-6"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}`;
function PromptInputSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreviewTabs"], {
        code: code,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptInputPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/PromptInputSection.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PromptInputSection.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c = PromptInputSection;
var _c;
__turbopack_context__.k.register(_c, "PromptInputSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/prompt-kit/markdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Markdown",
    ()=>Markdown,
    "inlineCodeStyles",
    ()=>inlineCodeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/marked/lib/marked.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Markdown({ children, className }) {
    _s();
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Markdown.useMemo[html]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marked"].parse(children);
        }
    }["Markdown.useMemo[html]"], [
        children
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        dangerouslySetInnerHTML: {
            __html: html
        },
        style: {
            ['--inline-code-style']: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/components/prompt-kit/markdown.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Markdown, "OtathaP3BKVCXaZtVNvoS+3QIcY=");
_c = Markdown;
const inlineCodeStyles = `
  code:not(pre code) {
    background-color: transparent;
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    font-size: 0.875em;
    font-weight: 500;
    color: #1f2937;
  }
  
  .dark code:not(pre code) {
    background-color: transparent;
    border-color: #4b5563;
    color: #f3f4f6;
  }
`;
var _c;
__turbopack_context__.k.register(_c, "Markdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/messages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantMessage",
    ()=>AssistantMessage,
    "LoadingDot",
    ()=>LoadingDot,
    "ReasoningSection",
    ()=>ReasoningSection,
    "UserMessage",
    ()=>UserMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/prompt-kit/reasoning.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/prompt-kit/markdown.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const BUBBLE_CONFIG = {
    width: {
        min: 60,
        maxPercentOfContainer: 0.85
    },
    height: {
        min: 40,
        lineHeight: 24,
        paddingVertical: 20
    },
    padding: {
        horizontal: 20,
        vertical: 10
    },
    borderRadius: 24
};
function LoadingDot() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-2 w-2 rounded-full bg-foreground",
                style: {
                    animation: "scaleUpDown 1s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes scaleUpDown {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.8); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/messages.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = LoadingDot;
function ReasoningSection({ reasoning, isStreaming = false }) {
    if (!reasoning) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reasoning"], {
        isStreaming: isStreaming,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReasoningTrigger"], {}, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$reasoning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReasoningContent"], {
                children: reasoning
            }, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/messages.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c1 = ReasoningSection;
function AssistantMessage({ content, reasoning, isStreaming }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-w-0 flex-1 overflow-hidden",
        children: [
            reasoning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReasoningSection, {
                reasoning: reasoning,
                isStreaming: isStreaming
            }, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Markdown"], {
                className: "prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs dark:prose-invert max-w-none text-base font-medium text-black dark:text-white break-words overflow-hidden",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/messages.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/messages.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c2 = AssistantMessage;
function UserMessage({ content, imageUrl, index }) {
    const getBubbleStyle = (textLength)=>{
        const estimatedLines = Math.ceil(textLength / 40);
        const estimatedHeight = Math.max(BUBBLE_CONFIG.height.min, estimatedLines * BUBBLE_CONFIG.height.lineHeight + BUBBLE_CONFIG.height.paddingVertical);
        let maxWidth;
        if (textLength <= 20) {
            maxWidth = "fit-content";
        } else if (textLength <= 50) {
            maxWidth = "50%";
        } else if (textLength <= 100) {
            maxWidth = "65%";
        } else {
            maxWidth = `${BUBBLE_CONFIG.width.maxPercentOfContainer * 100}%`;
        }
        return {
            minWidth: `${BUBBLE_CONFIG.width.min}px`,
            maxWidth,
            minHeight: `${BUBBLE_CONFIG.height.min}px`,
            padding: `${BUBBLE_CONFIG.padding.vertical}px ${BUBBLE_CONFIG.padding.horizontal}px`,
            borderRadius: `${BUBBLE_CONFIG.borderRadius}px`
        };
    };
    const bubbleStyle = getBubbleStyle(content.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#ededed] dark:bg-[#2a2a2a] text-stone-900 dark:text-stone-100",
            style: bubbleStyle,
            children: [
                imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageUrl,
                    alt: "Attached",
                    className: "max-w-full max-h-48 rounded-lg mb-2 object-contain",
                    "data-testid": `message-image-${index}`
                }, void 0, false, {
                    fileName: "[project]/components/messages.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "whitespace-pre-wrap text-base font-medium",
                    children: content
                }, void 0, false, {
                    fileName: "[project]/components/messages.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/messages.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/messages.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c3 = UserMessage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LoadingDot");
__turbopack_context__.k.register(_c1, "ReasoningSection");
__turbopack_context__.k.register(_c2, "AssistantMessage");
__turbopack_context__.k.register(_c3, "UserMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MessagesPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/messages.tsx [app-client] (ecmascript)");
"use client";
;
;
const mockMessages = [
    {
        role: "user",
        content: "Cześć!"
    },
    {
        role: "assistant",
        content: "Witaj! W czym mogę Ci dzisiaj pomóc?"
    },
    {
        role: "user",
        content: "Napisz mi krótki tekst o pogodzie."
    },
    {
        role: "assistant",
        content: "Dziś na dworze panuje **piękna słoneczna pogoda**. Temperatura wynosi około 22°C, a niebo jest bezchmurne.\n\n## Prognoza na najbliższe dni:\n- Poniedziałek: słonecznie, 24°C\n- Wtorek: częściowe zachmurzenie, 21°C\n- Środa: deszczowo, 18°C\n\nPamiętaj o kremie z filtrem UV!"
    },
    {
        role: "user",
        content: "To jest bardzo długa wiadomość, która powinna rozciągnąć się na całą szerokość dostępną dla dymku wiadomości użytkownika. Chcę sprawdzić jak zachowa się komponent przy większej ilości tekstu i czy odpowiednio dostosuje margines."
    },
    {
        role: "user",
        content: "Średni tekst do sprawdzenia"
    },
    {
        role: "user",
        content: "OK"
    }
];
function MessagesPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4",
        children: [
            mockMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: msg.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMessage"], {
                        content: msg.content,
                        index: index
                    }, void 0, false, {
                        fileName: "[project]/components/MessagesPreview.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantMessage"], {
                        content: msg.content
                    }, void 0, false, {
                        fileName: "[project]/components/MessagesPreview.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/components/MessagesPreview.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-medium mb-4",
                        children: "Loading Dot Preview"
                    }, void 0, false, {
                        fileName: "[project]/components/MessagesPreview.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Ładowanie:"
                            }, void 0, false, {
                                fileName: "[project]/components/MessagesPreview.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingDot"], {}, void 0, false, {
                                fileName: "[project]/components/MessagesPreview.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MessagesPreview.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MessagesPreview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MessagesPreview.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = MessagesPreview;
var _c;
__turbopack_context__.k.register(_c, "MessagesPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MessagesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessagesSection",
    ()=>MessagesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CodePreviewTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessagesPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MessagesPreview.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const code = `import { UserMessage, AssistantMessage, LoadingDot } from "@/components/messages";

const messages = [
  { role: "user" as const, content: "Cześć!" },
  { role: "assistant" as const, content: "Witaj! W czym mogę Ci dzisiaj pomóc?" },
];

export default function Chat() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {messages.map((msg, index) => (
        <div key={index}>
          {msg.role === "user" ? (
            <UserMessage content={msg.content} index={index} />
          ) : (
            <AssistantMessage content={msg.content} />
          )}
        </div>
      ))}
    </div>
  );
}`;
function MessagesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreviewTabs"], {
        code: code,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessagesPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/MessagesSection.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MessagesSection.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = MessagesSection;
var _c;
__turbopack_context__.k.register(_c, "MessagesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MarkdownPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/prompt-kit/markdown.tsx [app-client] (ecmascript)");
"use client";
;
;
const markdownContent = `# Markdown Example

This is a **bold text** and this is an *italic text*.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Links and Images

[Visit Prompt Kit](https://prompt-kit.com)

## Code

Inline \`code\` example.

\`\`\`javascript
// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`;
function MarkdownPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$prompt$2d$kit$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Markdown"], {
            className: "prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs dark:prose-invert",
            children: markdownContent
        }, void 0, false, {
            fileName: "[project]/components/MarkdownPreview.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MarkdownPreview.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = MarkdownPreview;
var _c;
__turbopack_context__.k.register(_c, "MarkdownPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MarkdownSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownSection",
    ()=>MarkdownSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CodePreviewTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MarkdownPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MarkdownPreview.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const code = `import { Markdown } from "@/components/prompt-kit/markdown"

const markdownContent = \`
# Markdown Example

This is a **bold text** and this is an *italic text*.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Links and Images

[Visit Prompt Kit](https://prompt-kit.com)

## Code

Inline \\\`code\\\` example.

\\\`\\\`\\\`javascript
// Code block example
function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}
\\\`\\\`\\\`
\`

export function MarkdownBasic() {
  return (
    <div className="w-full max-w-3xl">
      <Markdown className="prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs dark:prose-invert">
        {markdownContent}
      </Markdown>
    </div>
  )
}`;
function MarkdownSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CodePreviewTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodePreviewTabs"], {
        code: code,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MarkdownPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/MarkdownSection.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MarkdownSection.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = MarkdownSection;
var _c;
__turbopack_context__.k.register(_c, "MarkdownSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/IconsGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconsGallery",
    ()=>IconsGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/icons-data.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function IconsGallery() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copiedIcon, setCopiedIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const icons = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2d$data$2e$json__$28$json$29$__["default"];
    const filteredIcons = icons.filter((icon)=>icon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleCopy = async (icon)=>{
        try {
            await navigator.clipboard.writeText(icon.svg);
            setCopiedIcon(icon.name);
            setTimeout(()=>setCopiedIcon(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 bg-fd-background pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search icons...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "w-full max-w-md px-4 py-2 rounded-lg border border-fd-border bg-fd-card text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/IconsGallery.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-fd-muted-foreground",
                        children: [
                            filteredIcons.length,
                            " icons found. Click to copy SVG code."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IconsGallery.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IconsGallery.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2",
                children: filteredIcons.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleCopy(icon),
                        className: "group relative flex flex-col items-center justify-center p-3 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent hover:border-fd-primary transition-colors cursor-pointer",
                        title: icon.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 text-fd-foreground",
                                dangerouslySetInnerHTML: {
                                    __html: icon.svg.replace(/width="1em" height="1em"/, 'width="100%" height="100%"')
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/IconsGallery.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            copiedIcon === icon.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-fd-primary/90 rounded-lg text-fd-primary-foreground text-xs font-medium",
                                children: "Copied!"
                            }, void 0, false, {
                                fileName: "[project]/components/IconsGallery.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: icon.name
                            }, void 0, false, {
                                fileName: "[project]/components/IconsGallery.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, icon.name, true, {
                        fileName: "[project]/components/IconsGallery.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/IconsGallery.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            filteredIcons.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-fd-muted-foreground py-8",
                children: [
                    'No icons found matching "',
                    searchTerm,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/components/IconsGallery.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IconsGallery.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(IconsGallery, "bUacRkSPC2hULXYBRC5L7Zdl8cI=");
_c = IconsGallery;
var _c;
__turbopack_context__.k.register(_c, "IconsGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_da812392._.js.map