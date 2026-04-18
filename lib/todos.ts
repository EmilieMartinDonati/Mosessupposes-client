import { supabase } from './supabase/client';

export async function getTodos() {
  const { data, error } = await supabase
    .from('Todo')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}