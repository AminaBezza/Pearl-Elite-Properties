import React from 'react'
import PropertyForm from '@/components/admin/PropertyForm'

const NewPropertyPage = () => {
  return (
    <div className="space-y-10 pl-64">
      <div className="space-y-2 border-b border-gray-100 pb-8">
        <p className="text-xs text-gold uppercase tracking-[0.3em] font-bold">Inventory / Properties</p>
        <h1 className="text-4xl font-heading">Add New Property</h1>
      </div>

      <div className="max-w-4xl">
        <PropertyForm />
      </div>
    </div>
  )
}

export default NewPropertyPage
