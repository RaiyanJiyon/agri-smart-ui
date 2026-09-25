'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpIcon } from 'lucide-react';

export type PromptInputProps = React.ComponentProps<'form'>;

export const PromptInput = React.forwardRef<HTMLFormElement, PromptInputProps>(
  ({ className, onSubmit, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className={cn(
          'flex flex-col rounded-2xl border border-input bg-background p-2 transition-shadow',
          className
        )}
        {...props}
      >
        {children}
      </form>
    );
  }
);
PromptInput.displayName = 'PromptInput';

export type PromptInputTextareaProps = React.ComponentProps<'textarea'>;

export const PromptInputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  PromptInputTextareaProps
>(({ className, onKeyDown, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
    onKeyDown?.(e);
  };

  return (
    <textarea
      ref={ref}
      rows={1}
      onKeyDown={handleKeyDown}
      className={cn(
        'w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground',
        className
      )}
      {...props}
    />
  );
});
PromptInputTextarea.displayName = 'PromptInputTextarea';

export type PromptInputFooterProps = React.ComponentProps<'div'>;

export const PromptInputFooter = React.forwardRef<
  HTMLDivElement,
  PromptInputFooterProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between gap-2 pt-2', className)}
    {...props}
  >
    {children}
  </div>
));
PromptInputFooter.displayName = 'PromptInputFooter';

export type PromptInputSubmitProps = React.ComponentProps<typeof Button> & {
  status?: 'ready' | 'submitted' | 'streaming' | 'error';
};

export const PromptInputSubmit = React.forwardRef<
  HTMLButtonElement,
  PromptInputSubmitProps
>(({ className, status = 'ready', disabled, children, ...props }, ref) => (
  <Button
    ref={ref}
    type="submit"
    size="icon-sm"
    disabled={disabled || status === 'submitted' || status === 'streaming'}
    className={cn('size-8 rounded-full', className)}
    {...props}
  >
    {children ?? <ArrowUpIcon className="size-4" />}
  </Button>
));
PromptInputSubmit.displayName = 'PromptInputSubmit';
