"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"

const privacySections = [
  {
    title: "Information Collection",
    content:
      "AJ STUDIOZ collects data to improve your AI chatbot experience, including conversation patterns, usage analytics, and user preferences to enhance our machine learning algorithms.",
  },
  {
    title: "Use of Data",
    content:
      "Your data helps us provide better AI responses, personalized chatbot recommendations, and improve our natural language processing capabilities for all users.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We do not sell your personal information. We may share anonymized conversation data with AI research partners to improve chatbot technology while protecting your privacy.",
  },
  {
    title: "AI Training & Analytics",
    content:
      "Conversation data may be used to train and improve our AI models. All data is anonymized and encrypted before being used for machine learning purposes.",
  },
  {
    title: "Security Measures",
    content:
      "We protect your data using enterprise-grade encryption, secure cloud storage, and regular security audits to ensure your conversations remain private and secure.",
  },
  {
    title: "User Rights",
    content:
      "You can request access, correction, or deletion of your personal data and conversation history anytime through our support channels or account settings.",
  },
  {
    title: "Policy Updates",
    content:
      "Changes to this privacy policy will be communicated via email and website notifications. Continued use of AJ STUDIOZ services implies consent to updated terms.",
  },
]

export default function PrivacyPolicyModal() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const content = contentRef.current
    if (!content) return
    const progress = Math.min(
      1,
      content.scrollTop / (content.scrollHeight - content.clientHeight)
    )
    setScrollProgress(progress)
  }

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">View Privacy Policy</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col p-0 sm:max-h-[80vh] sm:max-w-md gap-0 !rounded-2xl">
          <DialogHeader className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <DialogTitle className="text-lg font-medium text-gray-900 dark:text-white">AJ STUDIOZ Privacy Policy</DialogTitle>
          </DialogHeader>

          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto p-4 flex-1 space-y-4"
            style={{ maxHeight: "60vh" }}
          >
            {privacySections.map((section, idx) => (
              <div key={idx}>
                <p className="font-medium">{section.title}</p>
                <p className="text-sm text-gray-500">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Scroll progress bar */}
          <div
            className="h-1 bg-blue-500 transition-all duration-200 rounded-3xl"
            style={{ width: `${scrollProgress * 100}%` }}
          />

          <DialogFooter className="p-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="rounded-2xl">Decline</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button disabled={scrollProgress < 1} className="rounded-2xl">Accept</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}
