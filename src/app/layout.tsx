"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isLoginString: any = localStorage.getItem('isLogin');
  const isLogin: boolean = isLoginString ? JSON.parse(isLoginString) : false;
  console.log(isLogin , 'issLogin');
  
 useEffect(() => {
 router.push(isLogin ? '/' : '/authentication/login')
 },[isLogin, pathname])
  
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
