"use client";

import { useRouter } from "next/navigation";
import { AdminPageLayout } from "@/components/AdminPageLayout";
import WritingWorkshopForm from "@/features/writingWorkshops/WritingWorkshopForm";

import { createWritingWorkshop } from "@/lib/supabase/writing_workshops/create";

export default function WritingWorkshopNew() {

    const router = useRouter();

    const handleSubmit = (data) => {
        createWritingWorkshop(data)
        router.push("/admin/sessions");
    }

    return (
        <AdminPageLayout
            title="Nouvel atelier"
            actions={[
                {
                    id: "cancel",
                    label: "Annuler",
                    onClick: () => router.back(),
                    variant: "secondary",
                },
                {
                    id: "save",
                    label: "Créer",
                    onClick: () => handleSubmit({}),
                    variant: "primary",
                    form: "session-form",
                },
            ]}
            children={<WritingWorkshopForm onSubmit={handleSubmit} />}>
        </AdminPageLayout>
    );
}