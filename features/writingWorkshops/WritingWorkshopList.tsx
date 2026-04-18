"use client";
import { useEffect, useState } from "react";
import { getLiveWritingWorkshops, getUpcomingWritingWorkshops } from "@/lib/supabase/writing_workshops/get";
import WritingsWorkshopsCarousel from "./WritingsWorkshopsCarousel";

export default function WritingWorkshopList() {

    const [liveWorkshops, setLiveWorkshops] = useState([]);
    const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWorkshops() {
            const [currentWorkshops, toComeWorkshops] = await Promise.all([
                getLiveWritingWorkshops({}),
                getUpcomingWritingWorkshops({})
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
                status="live"
            />
            <WritingsWorkshopsCarousel
                title="⏳ À venir"
                workshops={upcomingWorkshops}
                loading={loading}
                status="upcoming"
            />
        </div>
    );
}