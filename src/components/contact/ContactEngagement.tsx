import { useState, useEffect } from 'react'
import type {
  ContactEngagementProps,
  ContactType,
  ContactFormData
} from '../../types'

// Icon components for contact types
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12M3 21h18M5 21v-6a2 2 0 012-2h10a2 2 0 012 2v6" />
    </svg>
  )
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

const iconMap = {
  users: UsersIcon,
  handshake: HandshakeIcon,
  'trending-up': TrendingUpIcon
}

interface ContactTypeCardProps {
  contactType: ContactType
  isSelected: boolean
  onSelect: () => void
}

function ContactTypeCard({ contactType, isSelected, onSelect }: ContactTypeCardProps) {
  const Icon = iconMap[contactType.icon]

  return (
    <button
      onClick={onSelect}
      className={`
        group relative w-full text-left p-6 rounded-2xl border-2 transition-all duration-200
        ${isSelected
          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30'
          : 'border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700 bg-white dark:bg-slate-800/50'
        }
      `}
    >
      {/* Selection indicator */}
      <div className={`
        absolute top-4 right-4 w-5 h-5 rounded-full border-2 transition-all duration-200
        ${isSelected
          ? 'border-cyan-500 bg-cyan-500'
          : 'border-slate-300 dark:border-slate-600'
        }
      `}>
        {isSelected && (
          <svg className="w-full h-full text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200
        ${isSelected
          ? 'bg-cyan-500 text-white'
          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
        }
      `}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {contactType.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {contactType.description}
      </p>
    </button>
  )
}

export function ContactEngagement({
  pageContent,
  contactTypes,
  contactInfo,
  isSubmitting = false,
  submitSuccess = false,
  submitError = null,
  onEmailClick,
  onFormSubmit,
  onResetStatus
}: ContactEngagementProps) {
  const [selectedType, setSelectedType] = useState<string | undefined>()
  const [formData, setFormData] = useState<Omit<ContactFormData, 'contactType'>>({
    name: '',
    email: '',
    message: ''
  })

  // Reset form on successful submission
  useEffect(() => {
    if (submitSuccess) {
      setFormData({ name: '', email: '', message: '' })
      setSelectedType(undefined)
    }
  }, [submitSuccess])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Clear any previous status when starting a new submission
    onResetStatus?.()
    onFormSubmit?.({
      ...formData,
      contactType: selectedType
    })
  }

  const emailHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.emailSubject)}`

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {pageContent.headline}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {pageContent.intro}
          </p>
        </header>

        {/* Contact Type Cards */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            Як би ви хотіли взаємодіяти?
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {contactTypes.map((type) => (
              <ContactTypeCard
                key={type.id}
                contactType={type}
                isSelected={selectedType === type.id}
                onSelect={() => setSelectedType(type.id)}
              />
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Надішліть нам повідомлення
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Введіть ваше ім'я"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Електронна адреса
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="ваша@адреса.укр"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Повідомлення
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-shadow resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Розкажіть нам про ваш інтерес до проєкту..."
                required
              />
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Дякуємо! Ваше повідомлення надіслано. Ми зв'яжемося з вами найближчим часом.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  {submitError}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-600"
              >
                {isSubmitting ? 'Відправка...' : 'Надіслати повідомлення'}
                {!isSubmitting && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

              {selectedType && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Тип запиту: <span className="font-medium text-cyan-600 dark:text-cyan-400">{contactTypes.find(t => t.id === selectedType)?.title}</span>
                </p>
              )}
            </div>
          </form>
        </section>

        {/* Direct Email Section */}
        <section className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-3">
            Або зв'яжіться з нами безпосередньо за адресою
          </p>
          <a
            href={emailHref}
            onClick={() => onEmailClick?.()}
            className="inline-flex items-center gap-3 text-lg font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            <MailIcon className="w-5 h-5" />
            {contactInfo.email}
          </a>
        </section>
      </div>
    </div>
  )
}
