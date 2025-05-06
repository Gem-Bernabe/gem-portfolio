"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Code, Camera, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main
      className={`h-screen flex items-center justify-center relative overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 -z-10"></div>

      <div className="fixed top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE3IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTE5IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMCAxN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTAgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wIDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnpNMiAxN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTAgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wIDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMCAxN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTM2IDUxYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] -z-10"></div>

      <div className="absolute top-6 right-6 flex gap-4">
        <Link href="https://github.com" className="group">
          <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
          </div>
        </Link>
        <Link href="https://linkedin.com" className="group">
          <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
          </div>
        </Link>
        <Link href="mailto:email@example.com" className="group">
          <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-6">
        <div className="relative mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 relative">
            <Image
              src="/images/initial-logo.png"
              alt="Mark Gem Bernabe"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
            <Camera className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">Mark Gem Bernabe</h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-blue-400 font-medium">Web Developer</span>
          <span className="text-white/50">•</span>
          <span className="text-purple-400 font-medium">Photographer</span>
          <span className="text-white/50">•</span>
          <span className="text-blue-400 font-medium">Creative Designer</span>
        </div>

        <p className="text-lg text-white/80 mb-8 max-w-lg">
          Blending design, code, and photography to create meaningful digital stories.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/gem-profile/work"
            className="px-6 py-2 bg-white text-slate-900 rounded-md hover:bg-white/90 transition-colors"
          >
            My Work
          </Link>
          <Link
            href="/gem-profile/contact"
            className="px-6 py-2 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  )
}
