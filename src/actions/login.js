'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/prisma'

export async function login(formData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData) {
  const supabase = await createClient()
  const email = formData.get('email')
  const password = formData.get('password')
  const role = 'admin'

  const { error } = await supabase.auth.signUp({email, password})

  if (error) {
    redirect('/error')
  }

  try {
    await prisma.user.create({
      data: {
        email,
        password,
        role,
        createdAt: new Date()
      }
    })
  } catch (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}