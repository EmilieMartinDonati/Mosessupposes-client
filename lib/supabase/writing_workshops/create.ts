import { supabase } from "../client";

type createWritingWorkshopInput = {
  title: string;
  prompt: string;
  max_participants: number;
};

export async function createWritingWorkshop(data: createWritingWorkshopInput) {
  const payload = {
    title: data.title,
    prompt: data.prompt,
    max_participants: Number(data.max_participants),
    status: "draft",
  };

  console.log("Creating writing workshop with payload:", payload);

  const { data: writingWorkshop, error } = await supabase
    .from("writing_workshops")
    .insert([payload])
    .select()
    .single();

  if (error) {
    console.error("Error Creating writing workshop:", error);
    throw error;
  }

  return writingWorkshop;
}