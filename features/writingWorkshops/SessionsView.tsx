'use client';

import { AdminPageLayout } from "@/components/AdminPageLayout";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import { useRouter } from "next/navigation";
import WritingWorkshopList from "./WritingWorkshopList";

export default function SessionsView() {

    const router = useRouter();

    return (
        <AdminPageLayout
            title="Ateliers"
            actions={[
                {
                    id: "add-session",
                    label: "Créer un atelier",
                    onClick: () => {
                       router.push("/admin/sessions/new");
                    },
                    icon: <PlusIcon className="w-4 h-4" />,
                    variant: "primary"
                }
            ]}
            toolbar={null}
            children={<WritingWorkshopList />} />
    )
}