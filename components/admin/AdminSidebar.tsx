'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Home, 
  Inbox, 
  Users, 
  MapPin, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'

const AdminSidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const links = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Properties', href: '/admin/properties', icon: <Home size={20} /> },
    { name: 'Inquiries', href: '/admin/inquiries', icon: <Inbox size={20} />, badge: 3 },
    { name: 'Agents', href: '/admin/agents', icon: <Users size={20} /> },
    { name: 'Locations', href: '/admin/locations', icon: <MapPin size={20} /> },
    { name: 'Testimonials', href: '/admin/testimonials', icon: <MessageSquare size={20} /> },
    { name: 'Settings', href: '/admin/settings', icon: <Settings size={20} /> },
  ]

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-luxury-black text-white flex flex-col fixed h-full z-10">
      <div className="p-8">
        <Link href="/" className="inline-block">
          <span className="font-heading text-xl font-bold">PEARL</span>
          <span className="font-light text-gold ml-1 text-xl">ELITE</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 text-sm font-medium transition-all group",
                isActive 
                  ? "bg-gold/10 text-gold border-l-2 border-gold" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <div className="flex items-center space-x-3">
                {link.icon}
                <span className="uppercase tracking-[0.1em]">{link.name}</span>
              </div>
              {link.badge && (
                <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5">
                  {link.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full text-sm text-gray-500 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span className="uppercase tracking-widest text-xs font-bold">Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default AdminSidebar
