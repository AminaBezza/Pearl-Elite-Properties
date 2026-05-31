import React from 'react'
import { Home, Inbox, Users, Eye, TrendingUp } from 'lucide-react'
import StatCard from '@/components/admin/StatCard'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Properties', value: '248', icon: <Home size={24} />, delta: '+12' },
    { label: 'Active Inquiries', value: '34', icon: <Inbox size={24} />, delta: '+5', positive: true },
    { label: 'Website Views', value: '1,204', icon: <Eye size={24} />, delta: '+18%', positive: true },
    { label: 'Active Agents', value: '12', icon: <Users size={24} />, delta: '0' },
  ]

  return (
    <div className="space-y-12 pl-64"> {/* Offset for sidebar */}
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <p className="text-xs text-gold uppercase tracking-[0.3em] font-bold">Overview</p>
          <h1 className="text-4xl font-heading">Dashboard</h1>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-400">May 31, 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries */}
        <div className="bg-white p-8 lg:p-10 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-heading mb-6 flex justify-between items-center">
            Recent Inquiries
            <span className="text-[10px] text-gold border border-gold px-2 py-1">View All</span>
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-luxury-gray">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center font-bold">JS</div>
                  <div>
                    <p className="text-sm font-bold">John Smith</p>
                    <p className="text-xs text-gray-400">Inquired about Royal Penthouse</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        {/* Property Performance */}
        <div className="bg-white p-8 lg:p-10 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-heading mb-6">Property Performance</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Sales vs Target</span>
              <span className="text-sm font-bold">85%</span>
            </div>
            <div className="w-full bg-gray-100 h-1">
              <div className="bg-gold w-[85%] h-full"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-4">
                <TrendingUp size={32} className="text-green-500" />
                <div>
                  <p className="text-sm font-bold text-luxury-black">Monthly Growth</p>
                  <p className="text-xs text-gray-400">Up by 15% from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
