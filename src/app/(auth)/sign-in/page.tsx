"use client"
import { signIn } from '@/lib/auth-client'
import { Github, Shield } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Inter', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .card-reveal { animation: fadeUp 0.5s ease forwards; }

        .page-bg {
          background: #0f0f10;
        }

        /* Subtle grid lines like the app */
        .grid-overlay {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .frosted {
          background: #1a1a1d;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 24px 60px rgba(0,0,0,0.7);
        }

        /* Purple accent glow — matches the sidebar icon highlight */
        .logo-icon {
          background: linear-gradient(135deg, #6d5acd 0%, #4f3db5 100%);
          box-shadow: 0 0 0 1px rgba(109,90,205,0.3), 0 4px 20px rgba(79,61,181,0.4);
        }

        /* GitHub button */
        .btn-gh {
          background: #141416;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.15s ease;
          color: white;
        }
        .btn-gh:hover {
          background: #1e1e21;
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .btn-gh:active {
          transform: translateY(0px);
          background: #111113;
        }

        /* Google button */
        .btn-google {
          background: #141416;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.15s ease;
          color: white;
        }
        .btn-google:hover {
          background: #1e1e21;
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .btn-google:active {
          transform: translateY(0px);
          background: #111113;
        }

        .badge {
          background: rgba(109,90,205,0.12);
          border: 1px solid rgba(109,90,205,0.25);
        }

        .badge-text {
          color: #8b75e8;
        }

        .badge-icon {
          color: #6d5acd;
        }

        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }

        .method-icon-wrap {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Purple glow accent under card */
        .card-glow {
          background: radial-gradient(ellipse at center, rgba(109,90,205,0.15) 0%, transparent 70%);
        }
      `}</style>

      {/* Dark background */}
      <div className="page-bg absolute inset-0" />

      {/* Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-100" />

      {/* Subtle purple radial ambient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 50% 40%, rgba(79,61,181,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Card */}
      <div className="card-reveal relative z-10 w-full max-w-[400px]">

        {/* Purple glow beneath card */}
        <div className="card-glow pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-32 w-3/4 -z-10 blur-3xl" />

        <div className="frosted rounded-2xl p-8">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full badge px-3 py-1">
            <Shield className="h-3 w-3 badge-icon" />
            <span className="text-[11px] font-medium badge-text tracking-wide">Secure sign-in</span>
          </div>

          {/* Logo */}
          <Link href="/" className="mb-6 flex items-center gap-3 group">
            <div className="logo-icon flex h-10 w-10 items-center justify-center rounded-xl">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14.5 5V11L8 15L1.5 11V5L8 1Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="rgba(255,255,255,0.9)"/>
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-semibold text-white tracking-tight leading-tight">Postboy</div>
              <div className="text-[11px] text-zinc-500">API Workspace</div>
            </div>
          </Link>

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold leading-tight text-white tracking-tight">
              Welcome back
            </h1>
            <p className="mt-1.5 text-sm text-zinc-500">
              Sign in to continue to your workspace.
            </p>
          </div>

          {/* Auth buttons */}
          <div className="space-y-3">
            <button
              onClick={() => signIn.social({ provider: "github", callbackURL: "/" })}
              className="btn-gh w-full flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left"
            >
              <div className="method-icon-wrap flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <Github className="h-4 w-4 text-zinc-300" />
              </div>
              <div>
                <div className="text-[14px] font-medium text-white leading-tight">Continue with GitHub</div>
                <div className="text-[11px] text-zinc-600 mt-0.5">For developers</div>
              </div>
              <svg className="ml-auto h-4 w-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <button
              onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
              className="btn-google w-full flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left"
            >
              <div className="method-icon-wrap flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-medium text-white leading-tight">Continue with Google</div>
                <div className="text-[11px] text-zinc-600 mt-0.5">Quick & easy</div>
              </div>
              <svg className="ml-auto h-4 w-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 h-px divider-line" />

          {/* Footer */}
          <p className="text-center text-[11px] text-zinc-600">
            By signing in you accept our{' '}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2">Terms</Link>
            {' & '}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignInPage