"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConnectButton = void 0;
const material_1 = require("@mui/material");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = __importStar(require("react"));
const WalletIcon_1 = require("./WalletIcon");
const WalletConnectButton = (_a) => {
    var { color = 'primary', variant = 'contained', type = 'button', children, disabled, onClick } = _a, props = __rest(_a, ["color", "variant", "type", "children", "disabled", "onClick"]);
    const { wallet, connect, connecting, connected } = (0, wallet_adapter_react_1.useWallet)();
    const handleClick = (0, react_1.useCallback)((event) => {
        if (onClick)
            onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented)
            connect().catch(() => {
                // Silently catch because any errors are caught by the context `onError` handler
            });
    }, [onClick, connect]);
    const content = (0, react_1.useMemo)(() => {
        if (children)
            return children;
        if (connecting)
            return 'Connecting ...';
        if (connected)
            return 'Connected';
        if (wallet)
            return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);
    return (react_1.default.createElement(material_1.Button, Object.assign({ color: color, variant: variant, type: type, onClick: handleClick, disabled: disabled || !wallet || connecting || connected, startIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, { wallet: wallet }) }, props), content));
};
exports.WalletConnectButton = WalletConnectButton;
