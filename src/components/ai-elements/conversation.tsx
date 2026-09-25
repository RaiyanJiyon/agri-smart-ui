'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDownIcon } from 'lucide-react';

export type ConversationProps = React.ComponentProps<'div'>;

export const Conversation = React.forwardRef<HTMLDivElement, ConversationProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="log"
        className={cn('relative flex-1 overflow-y-auto', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Conversation.displayName = 'Conversation';

export type ConversationContentProps = React.ComponentProps<'div'>;

export const ConversationContent = React.forwardRef<
  HTMLDivElement,
  ConversationContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-6 p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
});
ConversationContent.displayName = 'ConversationContent';

export type ConversationScrollButtonProps = React.ComponentProps<typeof Button>;

export const ConversationScrollButton = ({
  className,
  onClick,
  ...props
}: ConversationScrollButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon-sm"
      className={cn(
        'absolute bottom-4 right-4 z-10 size-8 rounded-full shadow-md',
        className
      )}
      onClick={(e) => {
        const scrollContainer = e.currentTarget.closest('[role="log"]');
        if (scrollContainer) {
          scrollContainer.scrollTo({
            top: scrollContainer.scrollHeight,
            behavior: 'smooth',
          });
        }
        onClick?.(e);
      }}
      aria-label="Scroll to bottom"
      {...props}
    >
      <ArrowDownIcon className="size-4" />
    </Button>
  );
};
ConversationScrollButton.displayName = 'ConversationScrollButton';
