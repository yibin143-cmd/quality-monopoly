import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "质量大富翁·事故快报版", description: "SHE & Q Day 单人质量培训游戏" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
