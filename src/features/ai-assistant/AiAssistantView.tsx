'use client';

import { Bot, Leaf, Menu, MessageCircle, Plus, Search } from 'lucide-react';
import { useState } from 'react';

import { AppShell } from '@/features/shared/AppShell';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Message,
  MessageContent,
  MessageResponse,
} from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input';

// TODO: Move to a separate `features/ai-assistant/constants.ts` or fetch from DB
const conversations = [
  { title: 'Tomato fertilizer advice', time: '10 min ago', active: true },
  { title: 'Rice planting schedule', time: 'Yesterday', active: false },
  { title: 'Leaf yellowing causes', time: 'Sep 14', active: false },
  { title: 'Preparing soil for maize', time: 'Sep 09', active: false },
  { title: 'Natural pest control', time: 'Aug 28', active: false },
];

function ConversationList() {
  return (
    <div className="flex h-full flex-col bg-[#F2F4EA]">
      <div className="border-b border-[#D4DAC8] p-4">
        <Button
          type="button"
          className="h-11 w-full rounded-full bg-[#132A1D] text-[#FDFDF8] hover:bg-[#1F3527]"
        >
          <Plus className="size-4" /> New Conversation
        </Button>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#68756B]" />
          <input
            placeholder="Search conversations"
            className="h-10 w-full rounded-full border border-[#D4DAC8] bg-[#FDFDF8] pl-9 pr-4 text-xs text-[#132A1D] outline-none placeholder:text-[#68756B]/65 focus:border-[#132A1D]"
          />
        </div>
      </div>
      <div className="flex-1 space-y-1 overflow-y-auto p-3">
        {conversations.map((conversation) => (
          <Button
            key={conversation.title}
            type="button"
            variant="ghost"
            className={`h-auto w-full flex-col items-start gap-0 rounded-2xl p-3 text-left whitespace-normal ${
              conversation.active
                ? 'bg-[#FDFDF8] text-[#132A1D] shadow-sm hover:bg-[#FDFDF8] hover:text-[#132A1D]'
                : 'text-[#68756B] hover:bg-[#FDFDF8]/70 hover:text-[#132A1D]'
            }`}
          >
            <span className="block w-full truncate text-sm font-semibold">
              {conversation.title}
            </span>
            <span className="mt-1 block text-[11px] font-normal opacity-70">
              {conversation.time}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}

// TODO: Move to a separate `features/ai-assistant/constants.ts` or fetch from DB
const messages = [
  {
    role: 'user' as const,
    text: 'What fertilizer is best for tomatoes during flowering?',
  },
  {
    role: 'assistant' as const,
    text: 'During flowering, tomatoes benefit from a fertilizer that is lower in nitrogen and higher in phosphorus and potassium. A balanced choice such as **5-10-10** can support stronger blooms and fruit development without pushing too much leafy growth.',
  },
  { role: 'user' as const, text: 'How often should I apply it?' },
  {
    role: 'assistant' as const,
    text: 'For most granular fertilizers, apply every **3–4 weeks** according to the product label. Water the soil first, keep fertilizer a few inches from the stem, and watch for leaf-edge browning, which can signal overfeeding. If you share your soil pH and current fertilizer, I can help narrow it down.',
  },
];

export function AiAssistantView() {
  const [input, setInput] = useState('');

  return (
    <AppShell title="AI Assistant">
      <div className="mx-auto flex h-[calc(100svh-7.5rem)] min-h-[600px] max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-[#D4DAC8] bg-[#FDFDF8] shadow-sm">
        <aside className="hidden w-[290px] shrink-0 border-r border-[#D4DAC8] md:block">
          <ConversationList />
        </aside>
        <section className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-17 items-center justify-between border-b border-[#D4DAC8] px-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Open conversations"
                      className="size-9 rounded-full text-[#132A1D] hover:bg-[#E7EBDA] md:hidden"
                    >
                      <Menu className="size-4" />
                    </Button>
                  }
                />
                <SheetContent
                  side="left"
                  className="w-[88vw] max-w-[310px] border-r-0 bg-[#F2F4EA] p-0 [&>button]:text-[#132A1D]"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Conversations</SheetTitle>
                  </SheetHeader>
                  <ConversationList />
                </SheetContent>
              </Sheet>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#132A1D] text-[#FDFDF8]">
                <Leaf className="size-5" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-semibold text-[#132A1D]">
                  AgriSmart Assistant
                </h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#68756B]">
                  <span className="size-1.5 rounded-full bg-[#4F8A5B]" /> Ready
                  to help
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Conversation details"
              className="size-9 rounded-full text-[#68756B] hover:bg-[#E7EBDA] hover:text-[#132A1D]"
            >
              <MessageCircle className="size-4" />
            </Button>
          </div>

          <Conversation className="bg-[#FDFDF8]">
            <ConversationContent className="mx-auto w-full max-w-3xl gap-6 px-4 py-6 sm:px-6">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === 'assistant' ? 'flex items-start gap-3' : ''
                  }
                >
                  {message.role === 'assistant' && (
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E7EBDA] text-[#132A1D]">
                      <Bot className="size-4" />
                    </span>
                  )}
                  <Message from={message.role}>
                    <MessageContent
                      className={
                        message.role === 'user'
                          ? 'rounded-2xl rounded-br-md bg-[#132A1D] px-4 py-3 text-[#FDFDF8]'
                          : 'bg-transparent px-0 py-1 text-[#1F3527]'
                      }
                    >
                      <MessageResponse>{message.text}</MessageResponse>
                    </MessageContent>
                  </Message>
                </div>
              ))}
            </ConversationContent>
            <ConversationScrollButton className="border-[#D4DAC8] bg-[#FDFDF8] text-[#132A1D] hover:bg-[#E7EBDA]" />
          </Conversation>

          <div className="border-t border-[#D4DAC8] bg-[#FDFDF8] p-3 sm:p-4">
            <PromptInput
              onSubmit={() => undefined}
              className="mx-auto max-w-3xl rounded-[1.25rem] border-[#D4DAC8] bg-[#F2F4EA] shadow-none focus-within:border-[#132A1D] focus-within:ring-4 focus-within:ring-[#132A1D]/10"
            >
              <PromptInputTextarea
                value={input}
                onChange={(event) => setInput(event.currentTarget.value)}
                placeholder="Ask about crops, soil, pests, or weather…"
                className="min-h-14 text-sm text-[#132A1D] placeholder:text-[#68756B]/70"
              />
              <PromptInputFooter className="justify-end px-2 pb-2">
                <PromptInputSubmit
                  status="ready"
                  disabled={!input.trim()}
                  className="size-9 rounded-full bg-[#132A1D] text-[#FDFDF8] hover:bg-[#1F3527]"
                />
              </PromptInputFooter>
            </PromptInput>
            <p className="mt-2 text-center text-[10px] text-[#68756B]">
              Static preview — responses are not connected.
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
