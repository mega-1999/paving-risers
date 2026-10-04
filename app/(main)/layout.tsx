import React from "react";
import FixedQuoteBtn from "./FixedQuoteBtn";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <FixedQuoteBtn />
            {children}
        </>
    );
}

