"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type MessageRole = "user" | "assistant" | "system";

export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
  from: MessageRole;
};

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, from, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group flex w-full max-w-[95%] flex-col gap-2",
        from === "user" ? "is-user ml-auto justify-end items-end" : "is-assistant",
        className
      )}
      {...props}
    />
  )
);
Message.displayName = "Message";

export type MessageContentProps = React.HTMLAttributes<HTMLDivElement>;

export const MessageContent = React.forwardRef<HTMLDivElement, MessageContentProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-fit min-w-0 max-w-full flex-col gap-2 overflow-hidden text-sm leading-relaxed",
        "group-[.is-user]:ml-auto group-[.is-user]:rounded-2xl group-[.is-user]:bg-primary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-primary-foreground",
        "group-[.is-assistant]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
MessageContent.displayName = "MessageContent";

export type MessageResponseProps = React.HTMLAttributes<HTMLDivElement>;

export const MessageResponse = React.forwardRef<HTMLDivElement, MessageResponseProps>(
  ({ children, className, ...props }, ref) => {
    if (typeof children === "string") {
      const parts = children.split(/(\*\*.*?\*\*)/g);
      return (
        <div ref={ref} className={cn("text-sm leading-relaxed", className)} {...props}>
          {parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={index} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <React.Fragment key={index}>{part}</React.Fragment>;
          })}
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("text-sm leading-relaxed", className)} {...props}>
        {children}
      </div>
    );
  }
);
MessageResponse.displayName = "MessageResponse";
