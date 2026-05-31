'use client'

import React, { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { LogIn, CheckCircle2, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      toast.success('Logged in successfully')
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-luxury-black p-12 flex-col items-center justify-center overflow-hidden text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578891589054-998fb3380026?q=80&w=2070&auto=format&fit=crop"
            alt="Qatar Real Estate"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-12 max-w-md">
          <div>
            <Link href="/" className="text-white font-heading text-2xl tracking-tighter">
              PEARL <span className="text-gold">ELITE</span>
            </Link>
          </div>

          <div className="space-y-12">
            <h1 className="text-5xl font-heading text-white leading-tight">
              Your gateway to Qatar&apos;s Finest <br /> Properties
            </h1>

            <div className="space-y-6">
              {[
                "100% Verified Listings",
                "Priority Access & Community Insights",
                "Personalized Property Experience"
              ].map((feature, i) => (
                <div key={i} className="flex items-center justify-center space-x-4 text-white/90">
                  <div className="bg-white/10 p-1 rounded-full shrink-0">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="text-lg font-light tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8 border-t border-white/10 pt-8 w-full">
             <div className="flex flex-col items-center space-x-0 space-y-4">
                <div className="text-white text-[10px] leading-tight flex flex-col items-center justify-center">
                  <span className="font-bold text-sm tracking-tighter">ARABIAN</span>
                  <span className="font-bold text-sm tracking-tighter">PROPERTY</span>
                  <span className="font-light tracking-[0.2em]">AWARDS</span>
                </div>
             </div>
             <div className="text-white/60 text-[10px] space-y-1 text-center">
               <div className="flex justify-center text-gold">★★★★★</div>
               <p className="uppercase tracking-widest font-bold">Best Real Estate</p>
               <p className="uppercase tracking-widest">Agency Website</p>
               <p className="uppercase tracking-widest text-[#888]">Qatar 2024-2025</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col p-8 lg:p-24 justify-center relative">
        <Link 
          href="/" 
          className="absolute top-8 left-8 lg:top-12 lg:left-12 flex items-center space-x-2 text-gray-500 hover:text-luxury-black transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to homepage</span>
        </Link>
        
        <div className="max-w-md w-full mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-heading text-luxury-black">Sign in to your account</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-gray-100 border-none p-4 rounded-md text-sm outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full bg-gray-100 border-none p-4 rounded-md text-sm outline-none focus:ring-1 focus:ring-gold/30 transition-all pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#BFBFBF] text-white font-bold py-4 rounded-md hover:bg-luxury-black transition-all disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="text-center space-y-4">
            <Link href="/admin/forgot-password" className="text-xs text-gray-500 hover:underline block">
              Forgot your password?
            </Link>
            
            <p className="text-gray-500 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/admin/signup" className="text-luxury-black font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
