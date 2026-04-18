import { ReactNode } from "react";

import AdminPageHeader from "@/components/AdminPageHeader";
import { useUI } from "@/store/UIStore";

export type Action = {
    id: string;
    label: string;
    onClick: () => void;
    icon?: ReactNode;
    variant?: "primary" | "secondary" | "danger";
    form?: string;
};

export function AdminPageLayout({
    title,
    actions,
    toolbar,
    children,
}: {
    title: string;
    actions?: Action[];
    toolbar?: ReactNode;
    children: ReactNode;
}) {

    const { isSidebarExpanded } = useUI();

    return (
        <div className={`admin-main ${isSidebarExpanded ? "admin-main--expanded" : "admin-main--collapsed"}`}>
            <AdminPageHeader
                title={title}
                actions={actions}
            />
            <div className="admin-content">
                {toolbar && (
                    <div>
                        {toolbar}
                    </div>
                )}
               {children}
            </div>
        </div>
    );
}