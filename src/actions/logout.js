'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOut () {
    const supabase = await createClient();
    const {error} = await supabase.auth.signOut()

    if(error) {
        console.error('Sign out error:', error);
        redirect('/error');
        
    }

    redirect('/login')
}