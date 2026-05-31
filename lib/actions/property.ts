'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createProperty(formData: any) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('properties')
    .insert([
      {
        title: formData.title,
        price: formData.price,
        location_id: formData.locationId,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        area: formData.area,
        type: formData.type,
        status: formData.status,
        description: formData.description,
        features: formData.features,
        images: formData.images,
        agent_id: formData.agentId,
      }
    ])
    .select()

  if (error) {
    console.error('Error creating property:', error)
    return { error: error.message }
  }

  revalidatePath('/properties')
  revalidatePath('/admin/properties')
  
  return { success: true, data }
}

export async function deleteProperty(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('properties')
    .delete()
    .match({ id })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/properties')
  revalidatePath('/admin/properties')
  
  return { success: true }
}
