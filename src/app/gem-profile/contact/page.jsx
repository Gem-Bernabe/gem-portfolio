"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Thank you for your message! We'll get back to you soon.")

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white p-8 shadow-xl transition-all hover:shadow-purple-500/10">
      {/* Subtle decorative elements */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl"></div>

      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
        <p className="text-gray-600 mb-6">I'd love to hear from you. Fill out the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                <User className="h-5 w-5" />
              </div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-400 transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-400 transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] pl-10 bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-400 transition-all"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Or reach me directly at <span className="text-purple-600 font-medium">contact@example.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}
