'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'model'
  text: string
}

interface ApiMessage {
  role: 'user' | 'model'
  parts: { text: string }[]
}

const DEFAULT_OPTIONS = [
  "What is RDIO AI?",
  "Show me your programs",
  "How can I collaborate?",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState<string[]>(DEFAULT_OPTIONS)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hi! I'm the RDIO AI assistant. How can I help you today? You can select an option below or type a question.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = { role: 'user', text }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Format history for Gemini API. 
      // Skip the initial greeting message because Gemini requires history to start with a 'user' message.
      const apiHistoryMessages = messages.filter((msg, index) => !(index === 0 && msg.role === 'model'))
      
      const history: ApiMessage[] = apiHistoryMessages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history,
          message: text,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        let text = data.text
        if (text.includes('OPTIONS:')) {
          const parts = text.split('OPTIONS:')
          text = parts[0].trim()
          const newOptions = parts[1]
            .split('|')
            .map((o: string) => o.trim())
            .filter(Boolean)
          
          if (newOptions.length > 0) {
            setOptions(newOptions)
          }
        }
        
        setMessages((prev) => [...prev, { role: 'model', text }])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'Sorry, I am having trouble connecting right now. Please try again later or reach out via our [Contact Page](/contact).',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-navy/90 transition-colors border-2 border-gold/50"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-border flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy p-4 text-white flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">RDIO AI Assistant</h3>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-soft-bg flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                    msg.role === 'user' ? "bg-navy/10 text-navy" : "bg-gold/20 text-gold"
                  )}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm prose prose-sm max-w-none prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-800",
                      msg.role === 'user'
                        ? "bg-navy text-white rounded-tr-none"
                        : "bg-white border border-border text-navy rounded-tl-none shadow-sm"
                    )}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white border border-border rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gold" />
                    <span className="text-xs text-text-gray">Typing...</span>
                  </div>
                </div>
              )}

              {/* Quick Options at the end of the chat stream */}
              {!isLoading && options.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSend(option)}
                      className="text-[11px] font-medium bg-white hover:bg-gold/10 text-navy px-3 py-2 rounded-full border border-border transition-all shadow-sm hover:shadow text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>



            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t border-border flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 focus-visible:ring-navy rounded-full border-border bg-soft-bg"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="rounded-full bg-gold hover:bg-gold/90 text-navy shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
