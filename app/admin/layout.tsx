'use client'

import React from 'react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { usePathname } from 'next/navigation'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) return <>{children}</>

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
