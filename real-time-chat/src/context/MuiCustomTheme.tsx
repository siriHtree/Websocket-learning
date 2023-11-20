"use client";

import { ThemeProvider,createTheme } from "@mui/material/styles";
import React from "react";

const theme=createTheme({
    palette:{
        primary:{
            main:"#F0823F"
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                  borderRadius:"2em"
                },
        },
      },}
})

export default function MUIThemeProvider({
    children,
}:{children:React.ReactNode}){
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}