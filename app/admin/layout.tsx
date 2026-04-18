
'use client';

import { Sidebar } from "@/components/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="app-screen">
            <Sidebar />
            {children}
        </div>
    );
}