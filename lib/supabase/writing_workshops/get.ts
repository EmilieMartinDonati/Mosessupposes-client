import { supabase } from "../client";

export async function getWritingWorkshops() {
    try {
        const { data: writingWorkshops, error } = await supabase
            .from("writing_workshops")
            .select("*");

        if (error) {
            console.error("Error fetching writing workshops:", error);
            throw error;
        }

        return writingWorkshops;
    }
    catch (error) {
        console.error("Unexpected error fetching writing workshops:", error);
        throw error;
    }
}

export async function getUpcomingWritingWorkshops({ onlyPublic = false }) {
    try {
        let query = supabase
            .from("writing_workshops")
            .select("*")
            .eq("status", "published")
            .gt("start_time", new Date().toISOString())
            .order("start_time", { ascending: true });

        if (onlyPublic) {
            query = query.eq("is_public", true);
        }

        const { data: writingWorkshops, error } = await query;

        if (error) {
            console.error("Error fetching upcoming writing workshops:", error);
            throw error;
        }

        return writingWorkshops;
    }
    catch (error) {
        console.error("Unexpected error fetching upcoming writing workshops:", error);
        throw error;
    }
}

export async function getLiveWritingWorkshops({ onlyPublic = false }) {

    let query = supabase
        .from("writing_workshops")
        .select("*")
        .eq("status", "published")
        .lt("start_time", new Date().toISOString())
        .gt("end_time", new Date().toISOString())
        .order("start_time", { ascending: true })

    if (onlyPublic) {
        query = query.eq("is_public", true);
    }

    const { data: writingWorkshops, error } = await query;


    if (error) {
        console.error("Error fetching upcoming writing workshops:", error);
        throw error;
    }

    return writingWorkshops;
}
