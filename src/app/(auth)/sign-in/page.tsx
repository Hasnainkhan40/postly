"use client"
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth-client'
import { Chrome, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const signInPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 dark:bg-transparent">
      <div className="min-w-full max-w-sm rounded-md border bg-card shadow-md">
        <div className="p-8">
          <div className="space-y-1">
            <Link href="/">
              <h1 className="text-2xl font-semibold">Postman</h1>
            </Link>
            <h2 className="pt-3 text-xl font-semibold">Sign in to Postman</h2>
            <p className="text-sm text-muted-foreground">
              Welcome back! Sign in to continue
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                signIn.social({ provider: "github", callbackURL: "/" })
              }
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                signIn.social({ provider: "google", callbackURL: "/" })
              }
            >
              <Chrome className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default signInPage
