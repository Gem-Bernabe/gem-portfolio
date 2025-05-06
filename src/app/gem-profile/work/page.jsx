"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, ExternalLink, Github, Layers, Rocket, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

// Define FeatureCard component
const FeatureCard = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center justify-center p-4 text-center">
    {icon}
    <CardContent className="p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

// Define ProjectGallery component
const ProjectGallery = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Example images - replace with your actual gallery items */}
    <Image
      src="/placeholder.svg?height=300&width=500"
      alt="Project Screenshot 1"
      width={500}
      height={300}
      className="object-cover rounded-md"
    />
    <Image
      src="/placeholder.svg?height=300&width=500"
      alt="Project Screenshot 2"
      width={500}
      height={300}
      className="object-cover rounded-md"
    />
    <Image
      src="/placeholder.svg?height=300&width=500"
      alt="Project Screenshot 3"
      width={500}
      height={300}
      className="object-cover rounded-md"
    />
  </div>
)

// Define ContactForm component
const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
        Message
      </label>
      <textarea
        id="message"
        placeholder="Your Message"
        className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
    <Button>Submit</Button>
  </form>
)

export default function WorkPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`flex flex-col min-h-screen ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#tech" className="text-sm font-medium hover:underline underline-offset-4">
              Tech Stack
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="https://github.com/yourusername/projectname" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="#demo">
                Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-block" variant="secondary">
                    New Project
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Amazing Project
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A brief description of your project. Explain what problem it solves and why it's special.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted md:w-full lg:order-last">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Project Screenshot"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About The Project</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Provide a comprehensive overview of your project. Explain its purpose, how it came to be, and what
                  makes it unique. This is your chance to tell the story behind your project and connect with your
                  audience on a deeper level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover what makes this project special and how it can benefit you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <FeatureCard
                icon={<Rocket className="h-10 w-10" />}
                title="Feature One"
                description="Describe a key feature of your project and how it benefits users."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10" />}
                title="Feature Two"
                description="Highlight another important aspect of your project that sets it apart."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10" />}
                title="Feature Three"
                description="Explain one more significant capability that makes your project valuable."
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Stack</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The technologies and tools used to build this project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "GitHub", "Vercel"].map(
                (tech) => (
                  <Card key={tech} className="flex flex-col items-center justify-center p-4 text-center">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold">{tech}</h3>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Gallery</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the project in action with these screenshots and examples.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <ProjectGallery />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or feedback about the project? Reach out to us.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Project Name. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/yourusername" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://twitter.com/yourusername" target="_blank">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
