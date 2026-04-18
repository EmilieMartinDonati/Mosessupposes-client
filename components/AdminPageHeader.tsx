type Action = {
    id: string;
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    form?: string;
};

type AdminPageHeaderProps = {
    title: string;
    actions: Action[];
}

import { Button } from "@/components/Button";

export default function AdminPageHeader({ title, actions }: AdminPageHeaderProps) {

    return (
        <main className="admin-header">
            <span className="admin-header-title">{title}</span>
            <div className="admin-header-actions">
                {actions.map(({ label, id, onClick, variant, icon, form }) => (
                    <Button
                        key={id}
                        onClick={onClick}
                        variant={variant || "secondary"}
                        className="ml-2"
                        form={form}
                    >
                        {icon && <span className="mr-1">{icon}</span>}
                        {label}
                    </Button>
                ))}
            </div>
        </main>
    )
}