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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.WalletMultiButton = void 0;
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = __importStar(require("react"));
const useWalletDialog_1 = require("./useWalletDialog");
const WalletConnectButton_1 = require("./WalletConnectButton");
const WalletDialogButton_1 = require("./WalletDialogButton");
const WalletIcon_1 = require("./WalletIcon");
// const useStyles = makeStyles((theme: Theme) => ({
//     root: {},
//     menu: {
//         '& .MuiList-root': {
//             padding: 0,
//         },
//         '& .MuiMenuItem-root': {
//             padding: theme.spacing(1, 2),
//             boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)',
//             '&:not(.MuiButtonBase-root)': {
//                 padding: 0,
//                 '& .MuiButton-root': {
//                     borderRadius: 0,
//                 },
//             },
//             '&:hover': {
//                 boxShadow:
//                     'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)' + ', 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.05)',
//             },
//         },
//         '& .MuiListItemIcon-root': {
//             marginRight: theme.spacing(),
//             minWidth: 'unset',
//             '& .MuiSvgIcon-root': {
//                 width: 20,
//                 height: 20,
//             },
//         },
//     },
// }));
const WalletMultiButton = (_a) => {
    var { color = 'primary', variant = 'contained', type = 'button', children } = _a, props = __rest(_a, ["color", "variant", "type", "children"]);
    // const styles = useStyles();
    const { publicKey, wallet, disconnect } = (0, wallet_adapter_react_1.useWallet)();
    const { setOpen } = (0, useWalletDialog_1.useWalletDialog)();
    const [anchor, setAnchor] = (0, react_1.useState)();
    const base58 = (0, react_1.useMemo)(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
    const content = (0, react_1.useMemo)(() => {
        if (children)
            return children;
        if (!wallet || !base58)
            return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);
    if (!wallet) {
        return (react_1.default.createElement(WalletDialogButton_1.WalletDialogButton, Object.assign({ color: color, variant: variant, type: type }, props), children));
    }
    if (!base58) {
        return (react_1.default.createElement(WalletConnectButton_1.WalletConnectButton, Object.assign({ color: color, variant: variant, type: type }, props), children));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, Object.assign({ color: color, variant: variant, type: type, startIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, { wallet: wallet }), onClick: (event) => setAnchor(event.currentTarget), "aria-controls": "wallet-menu", "aria-haspopup": "true" }, props), content),
        react_1.default.createElement(material_1.Menu, { id: "wallet-menu", anchorEl: anchor, open: !!anchor, onClose: () => setAnchor(undefined), 
            // className={styles.menu}
            marginThreshold: 0, TransitionComponent: material_1.Fade, transitionDuration: 250, keepMounted: true },
            react_1.default.createElement(material_1.MenuItem, { onClick: () => setAnchor(undefined) },
                react_1.default.createElement(material_1.Button, Object.assign({ color: color, variant: variant, type: type, startIcon: react_1.default.createElement(WalletIcon_1.WalletIcon, { wallet: wallet }), 
                    // className={styles.root}
                    onClick: (event) => setAnchor(undefined), fullWidth: true }, props), wallet.name)),
            react_1.default.createElement(material_1.Collapse, { in: !!anchor },
                react_1.default.createElement(material_1.MenuItem, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                        setAnchor(undefined);
                        yield navigator.clipboard.writeText(base58);
                    }) },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(icons_material_1.ContentCopy, null)),
                    "Copy address"),
                react_1.default.createElement(material_1.MenuItem, { onClick: () => {
                        setAnchor(undefined);
                        setOpen(true);
                    } },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(icons_material_1.CompareArrows, null)),
                    "Connect a different wallet"),
                react_1.default.createElement(material_1.MenuItem, { onClick: () => {
                        setAnchor(undefined);
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        disconnect().catch(() => {
                            // Silently catch because any errors are caught by the context `onError` handler
                        });
                    } },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(icons_material_1.LinkOff, null)),
                    "Disconnect")))));
};
exports.WalletMultiButton = WalletMultiButton;
