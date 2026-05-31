import React from 'react'
import PropertyForm from '@/components/admin/PropertyForm'

const AddPropertyPage = () => {
  return (
    <div className="space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-3xl font-heading mb-2">List New Property</h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Entry of luxury assets into the market</p>
        </div>
      </div>

      <div className="max-w-5xl">
        <PropertyForm />
      </div>
    </div>
  )
}

export default AddPropertyPage
