"use client"
import { signIn } from '@/lib/auth-client'
import { Github, Shield } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Outfit', sans-serif; }

        @keyframes gradientShift {
          0%   { background-position: 0% 0%; }
          25%  { background-position: 100% 0%; }
          50%  { background-position: 100% 100%; }
          75%  { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px); }
          33%  { transform: translate(20px, -30px); }
          66%  { transform: translate(-15px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px); }
          33%  { transform: translate(-25px, 20px); }
          66%  { transform: translate(15px, -25px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px); }
          50%  { transform: translate(15px, 15px); }
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: scale(0.97) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .bg-animated {
          background: linear-gradient(135deg, #050505, #0a0a0a, #080808, #060606, #0c0c0c, #040404);
          background-size: 300% 300%;
          animation: gradientShift 20s ease infinite;
        }

        .blob1 { animation: float1 16s ease-in-out infinite; }
        .blob2 { animation: float2 20s ease-in-out infinite; }
        .blob3 { animation: float3 13s ease-in-out infinite; }

        .card-reveal { animation: cardReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .frosted {
          background: linear-gradient(160deg,
            rgba(255,255,255,0.055) 0%,
            rgba(255,255,255,0.025) 50%,
            rgba(255,255,255,0.018) 100%
          );
          backdrop-filter: blur(60px) saturate(150%);
          -webkit-backdrop-filter: blur(60px) saturate(150%);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 40px 80px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* GitHub button - dark clay */
        .clay-gh {
          background: linear-gradient(170deg, #1f1f1f 0%, #161616 60%, #111111 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.09),
            inset 0 -1px 0 rgba(0,0,0,0.6),
            0 5px 0 #050505,
            0 8px 18px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.05);
          transition: all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: white;
        }
        .clay-gh:hover {
          background: linear-gradient(170deg, #272727 0%, #1d1d1d 60%, #171717 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.11),
            inset 0 -1px 0 rgba(0,0,0,0.6),
            0 5px 0 #050505,
            0 14px 28px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.07);
          transform: translateY(-2px);
        }
        .clay-gh:active {
          transform: translateY(5px);
          box-shadow:
            inset 0 2px 6px rgba(0,0,0,0.5),
            0 0 0 #050505,
            0 2px 6px rgba(0,0,0,0.5);
        }

        /* Google button - lighter dark clay with a white tint */
        .clay-light {
          background: linear-gradient(170deg, #242424 0%, #1a1a1a 60%, #141414 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.5),
            0 5px 0 #080808,
            0 8px 20px rgba(0,0,0,0.65),
            0 0 0 1px rgba(255,255,255,0.07);
          transition: all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: white;
        }
        .clay-light:hover {
          background: linear-gradient(170deg, #2d2d2d 0%, #222222 60%, #1c1c1c 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.14),
            inset 0 -1px 0 rgba(0,0,0,0.5),
            0 5px 0 #080808,
            0 16px 32px rgba(0,0,0,0.55),
            0 0 0 1px rgba(255,255,255,0.09);
          transform: translateY(-2px);
        }
        .clay-light:active {
          transform: translateY(5px);
          box-shadow:
            inset 0 2px 6px rgba(0,0,0,0.4),
            0 0 0 #080808,
            0 2px 6px rgba(0,0,0,0.4);
        }

        .feature-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(10px);
        }

        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }
      `}</style>

      {/* Deep dark animated background */}
      <div className="bg-animated absolute inset-0" />

      {/* Very subtle dark blobs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob1 absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[120px]" />
        <div className="blob2 absolute -bottom-32 -right-32 h-[600px] w-[500px] rounded-full bg-white/[0.012] blur-[140px]" />
        <div className="blob3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-white/[0.008] blur-[80px]" />
      </div>

      {/* Fine dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Card */}
      <div className="card-reveal relative z-10 w-full max-w-[420px]">
        <div className="frosted rounded-[28px] p-10">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full feature-pill px-3 py-1.5">
            <Shield className="h-3 w-3 text-zinc-400" />
            <span className="text-[11px] font-medium text-zinc-500 tracking-wide">Secure sign-in</span>
          </div>

          {/* Logo */}
          <Link href="/" className="mb-7 flex items-center gap-3 group">
            <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 p-px shadow-xl shadow-black/60 border border-white/10">
              <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-zinc-900">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14.5 5V11L8 15L1.5 11V5L8 1Z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="rgba(255,255,255,0.8)"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-tight leading-tight">Postman</div>
              <div className="text-[11px] text-zinc-600">API Workspace</div>
            </div>
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[28px] font-bold leading-[1.2] text-white tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Sign in to continue to your workspace.
            </p>
          </div>

          {/* Auth buttons */}
          <div className="space-y-3.5">
            <button
              onClick={() => signIn.social({ provider: "github", callbackURL: "/" })}
              className="clay-gh w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] border border-white/[0.06]">
                <Github className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-white leading-tight">GitHub</div>
                <div className="text-xs text-zinc-600 mt-0.5">For developers</div>
              </div>
              <svg className="ml-auto h-4 w-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <button
              onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
              className="clay-light w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] border border-white/[0.06]">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-white leading-tight">Google</div>
                <div className="text-xs text-zinc-600 mt-0.5">Quick & easy</div>
              </div>
              <svg className="ml-auto h-4 w-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="my-7 h-px divider-line" />

          {/* Footer */}
          <p className="text-center text-xs text-zinc-700">
            By signing in you accept our{' '}
            <Link href="/terms" className="text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2">Terms</Link>
            {' & '}
            <Link href="/privacy" className="text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2">Privacy Policy</Link>
          </p>
        </div>

        {/* Subtle card glow — white instead of purple */}
        <div className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-24 w-2/3 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>
    </section>
  )
}

export default SignInPage