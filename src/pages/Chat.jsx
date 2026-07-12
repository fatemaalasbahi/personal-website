import { useState } from 'react'
import './Chat.css'

function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const trimmed = message.trim()
    if (!trimmed || loading) return

    setLoading(true)
    setError('')
    setReply('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setReply(data.reply)
    } catch (err) {
      setError(err.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-section chat-page">
      <header className="page-header">
        <p className="eyebrow">Chat</p>
        <h1>Ask about me</h1>
        <p className="lead">
          A simple Gemini-powered chat that answers using my portfolio background.
        </p>
      </header>

      <form className="chat-form card" onSubmit={handleSubmit}>
        <label htmlFor="chat-input">Your message</label>
        <textarea
          id="chat-input"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask about my education, skills, projects, or experience…"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !message.trim()}>
          {loading ? 'Sending…' : 'Send'}
        </button>
      </form>

      <section className="chat-reply card" aria-live="polite">
        <h2>Reply</h2>
        {error && <p className="chat-error">{error}</p>}
        {!error && !reply && !loading && (
          <p className="chat-placeholder">Your reply will appear here.</p>
        )}
        {loading && <p className="chat-placeholder">Thinking…</p>}
        {reply && <p className="chat-text">{reply}</p>}
      </section>
    </section>
  )
}

export default Chat
