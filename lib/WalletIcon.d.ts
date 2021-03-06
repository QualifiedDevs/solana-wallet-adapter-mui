import { Wallet } from '@solana/wallet-adapter-wallets';
import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';
export interface WalletIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    wallet: Wallet | null;
}
export declare const WalletIcon: FC<WalletIconProps>;
