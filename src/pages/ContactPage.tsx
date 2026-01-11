import { useState, useCallback } from 'react'
import { ContactEngagement } from '../components/contact'
import { contactPageContent, contactTypes, contactInfo } from '../data/contact-data'
import type { ContactFormData } from '../types'

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleFormSubmit = useCallback(async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    // Simulate API call (frontend-only MVP)
    console.log('Contact form submitted:', data)

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For MVP, always succeed
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }, [])

  const handleEmailClick = useCallback(() => {
    console.log('Email link clicked')
  }, [])

  const handleResetStatus = useCallback(() => {
    setSubmitSuccess(false)
    setSubmitError(null)
  }, [])

  return (
    <ContactEngagement
      pageContent={contactPageContent}
      contactTypes={contactTypes}
      contactInfo={contactInfo}
      isSubmitting={isSubmitting}
      submitSuccess={submitSuccess}
      submitError={submitError}
      onFormSubmit={handleFormSubmit}
      onEmailClick={handleEmailClick}
      onResetStatus={handleResetStatus}
    />
  )
}
