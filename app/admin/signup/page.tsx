'use client'

import React, { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { UserPlus, CheckCircle2, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      toast.success('Account created! Please check your email for verification.')
      router.push('/admin/login')
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Hero Section (Same as Login) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-luxury-black p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Qatar Real Estate"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <Link href="/" className="text-white font-heading text-2xl tracking-tighter">
            PEARL <span className="text-gold">ELITE</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-12">
          <h1 className="text-5xl font-heading text-white leading-tight max-w-md">
            Join Qatar&apos;s Most Exclusive <br /> Real Estate Network
          </h1>

          <div className="space-y-6">
            {[
              "Join 10,000+ Elite Members",
              "Direct Connection with Top Agents",
              "Exclusive Pre-market Property Access"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4 text-white/90">
                <div className="bg-white/10 p-1 rounded-full">
                  <CheckCircle2 className="text-white" size={18} />
                </div>
                <span className="text-lg font-light tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center space-x-8 border-t border-white/10 pt-8">
           <div className="flex border-r border-white/20 pr-8">
              <div className="text-white text-[10px] leading-tight flex flex-col justify-center">
                <span className="font-bold text-sm tracking-tighter">ARABIAN</span>
                <span className="font-bold text-sm tracking-tighter">PROPERTY</span>
                <span className="font-light tracking-[0.2em]">AWARDS</span>
              </div>
           </div>
           <div className="text-white/60 text-[10px] space-y-1">
             <div className="flex text-gold">★★★★★</div>
             <p className="uppercase tracking-widest font-bold">Best Real Estate</p>
             <p className="uppercase tracking-widest">Agency Website</p>
             <p className="uppercase tracking-widest text-[#888]">Qatar 2024-2025</p>
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
            <h2 className="text-4xl font-heading text-luxury-black">Create your account</h2>
            <p className="text-gray-400 text-sm">Fill in the details below to get started</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-gray-100 border-none p-4 rounded-md text-sm outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

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
                placeholder="Create Password"
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

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-luxury-black text-white font-bold py-4 rounded-md hover:bg-gold transition-all disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Sign up'}
              </button>
            </div>
          </form>

          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link href="/admin/login" className="text-luxury-black font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage