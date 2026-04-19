"use client";
import { useEffect, useState } from "react";
import { getWritingWorkshopsByVisibility } from "@/lib/supabase/writing_workshops/get";
import WritingsWorkshopsCarousel from "./WritingsWorkshopsCarousel";

type WritingWorkshop = {
    id: number;
    title: string;
    prompt: string;
    start_date: string;
    end_date: string;
    status: "draft" | "published";
};

export default function WritingWorkshopList() {
    const [liveWorkshops, setLiveWorkshops] = useState<WritingWorkshop[]>([]);
    const [upcomingWorkshops, setUpcomingWorkshops] = useState<WritingWorkshop[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadWorkshops() {
            const [currentWorkshops, toComeWorkshops] = await Promise.all([
                getWritingWorkshopsByVisibility({ onlyPublic: false, visibility: "live" }),
                getWritingWorkshopsByVisibility({ onlyPublic: false, visibility: "upcoming" })
            ]);
            setLiveWorkshops(currentWorkshops);
            setUpcomingWorkshops(toComeWorkshops);
            setLoading(false);
        }

        loadWorkshops();
    }, []);

    return (
        <div className="flex flex-col gap-12 px-24">
            <WritingsWorkshopsCarousel
                title="🔥 En cours"
                workshops={liveWorkshops}
                loading={loading}
                visibility="live"
            />
            <WritingsWorkshopsCarousel
                title="⏳ À venir"
                workshops={upcomingWorkshops}
                loading={loading}
                visibility="upcoming"
            />
        </div>
    );
}