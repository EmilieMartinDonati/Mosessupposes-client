'use client';

import { ReactNode, useState } from "react";
import Link from "next/link";

type HeaderProps = {
    title: string;
    logo: string;
    onRegister?: () => void;
    onLogin?: () => void;
    onLogout?: () => void;
    navItems: ReactNode[];
    isAuthenticated?: boolean;
}

export default function Header({ title, logo, onRegister, onLogin, onLogout, navItems, isAuthenticated = false }: HeaderProps) {

    return (
        <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    {logo && <img className="w-24 h-24" src={logo} alt={`${title} logo`} />}
                </Link>
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
        </header>
    )
}