'use client'
import { useRef, useState, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'
type Field = 'name' | 'email' | 'message'

const ENDPOINT = 'https://formspree.io/f/xwpnzjkl'

const inputClass =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-fg placeholder:text-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-500'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' })
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const statusRef = useRef<HTMLDivElement>(null)

  function validate() {
    const next: Partial<Record<Field, string>> = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Please write at least 10 characters.'
    setErrors(next)
    return next
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage('')
    const errs = validate()
    const first = (['name', 'email', 'message'] as const).find((k) => errs[k])
    if (first) {
      document.getElementById(first)?.focus()
      return
    }
    setStatus('loading')
    try {
      if (!values.company) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
        })
        if (!res.ok) throw new Error('Could not send the message. Please email me directly.')
      }
      setStatus('success')
      setMessage('Thanks! Your message has been sent.')
      setValues({ name: '', email: '', message: '', company: '' })
      setErrors({})
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again later.')
    }
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  const field = (id: Field, label: string, props: Record<string, unknown> = {}) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {id === 'message' ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={values[id]}
          onChange={(e) => setValues((v) => ({ ...v, [id]: e.target.value }))}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          className={`${inputClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          value={values[id]}
          onChange={(e) => setValues((v) => ({ ...v, [id]: e.target.value }))}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          className={inputClass}
          {...props}
        />
      )}
      {errors[id] ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
          {errors[id]}
        </p>
      ) : null}
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === 'loading'} className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
        />
      </div>
      {field('name', 'Name', { autoComplete: 'name' })}
      {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
      {field('message', 'Message')}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:text-black"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === 'success' ? <span className="text-accent">{message}</span> : null}
        {status === 'error' ? <span className="text-red-500">{message}</span> : null}
      </div>
    </form>
  )
}
