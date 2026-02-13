import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Stars } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParticleField } from "@/components/particles"
import { TypewriterText, GlowingOrb } from "@/components/animated-text"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-border/50">
        <Link href="/public" className="flex items-center justify-center gap-2">
          <div className="relative">
            <Sparkles className="h-8 w-8 text-amber-500 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 bg-amber-500/20 blur-xl" />
          </div>
          <span className="text-gradient font-bold text-2xl">AI Studio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/sign-in"
            className="text-sm font-medium px-4 py-2 rounded-full hover:bg-amber-500/10 transition-all duration-300 hover:text-amber-500"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Sign Up
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
          {/* Particle Animation Background */}
          <ParticleField />

          {/* Glowing Orbs */}
          <GlowingOrb className="top-20 right-20" size="lg" color="amber" />
          <GlowingOrb className="bottom-40 left-10" size="md" color="purple" />
          <GlowingOrb className="top-1/2 right-1/3" size="sm" color="blue" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Badge */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    Powered by Advanced AI
                  </span>
                  <Stars className="h-4 w-4 text-amber-500" />
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4 animate-fade-in-up animation-delay-200">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block">The Ultimate</span>
                  <span className="block text-gradient">AI Toolkit</span>
                </h1>
              </div>

              {/* Typewriter Subtitle */}
              <div className="animate-fade-in-up animation-delay-400 max-w-[800px]">
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
                  Create stunning{" "}
                  <TypewriterText
                    words={["conversations", "code snippets", "images", "music", "videos"]}
                    className="text-amber-500 font-semibold"
                  />{" "}
                  with our state-of-the-art AI tools.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full transition-all duration-300 hover:scale-105 animate-glow"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-amber-500/50 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300 hover:scale-105"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up animation-delay-800">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">1M+</div>
                  <div className="text-sm text-muted-foreground">Generations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-amber-500/50 flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 rounded-full bg-amber-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Tools</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform offers five powerful AI tools to help you create amazing content.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Conversation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Chat with our advanced AI assistant to get answers, ideas, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Code</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Generate code snippets, debug issues, and get programming help.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Image</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create stunning images from text descriptions with our AI image generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Music</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Compose original music and audio with our AI music generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Video</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create videos from text prompts with our cutting-edge AI video generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Pricing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Free tier with 5 generations per day. Upgrade to Pro for unlimited access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400"> 2025 AI Studio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
