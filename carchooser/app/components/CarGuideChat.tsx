"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Suggestion = {
  brand: string;
  model: string;
  year: number;
  summary: string;
  priceUsed: string;
  path: string;
};

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
  suggestions?: Suggestion[];
};

export default function CarGuideChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi! Tell me what kind of car you need (brand, year, budget, style) and I'll suggest something from our catalog.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const userMessage: ChatMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Unable to process your request");
      }

      const data = (await response.json()) as {
        reply: string;
        suggestions: Suggestion[];
      };

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
          suggestions: data.suggestions,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I couldn't understand that. Could you try rephrasing?",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <section className="mt-10 rounded-3xl border border-border bg-section p-6 text-text shadow-2xl">
      <div className="flex flex-col gap-4">
        <div className="space-y-4 max-h-[24rem] overflow-y-auto pr-1">
          {messages.map((message, index) => (
            <div
              key={`message-${index}`}
              className={`rounded-2xl px-4 py-3 text-sm ${message.sender === "bot" ? "bg-white/5 text-text" : "bg-emerald-500/20 text-emerald-100"}`}
            >
              <p>{message.text}</p>
              {message.suggestions ? (
                <div className="mt-3 grid gap-3">
                  {message.suggestions.map((suggestion) => (
                    <Link
                      key={suggestion.path}
                      href={suggestion.path}
                      className="block rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm transition hover:border-emerald-400 hover:bg-white/10"
                    >
                      <p className="font-semibold text-text">
                        {suggestion.brand} {suggestion.model} {suggestion.year}
                      </p>
                      <p className="text-muted">{suggestion.summary}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
                        {suggestion.priceUsed}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Example: Looking for a BMW coupe from 2008 around 15k"
            className="flex-1 rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-emerald-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700/60"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>
        {error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : null}
      </div>
    </section>
  );
}
