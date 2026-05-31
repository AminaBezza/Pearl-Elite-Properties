'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitInquiry(formData: any) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('inquiries')
    .insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        property_id: formData.propertyId, // Optional
      }
    ])
    .select()

  if (error) {
    console.error('Error submitting inquiry:', error)
    return { error: error.message }
  }

  revalidatePath('/admin/inquiries')
  
  return { success: true, data }
}
