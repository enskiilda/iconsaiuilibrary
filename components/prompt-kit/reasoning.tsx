"use client"

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ReasoningContextType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const ReasoningContext = createContext<ReasoningContextType | undefined>(
  undefined
);

function useReasoningContext() {
  const context = useContext(ReasoningContext);
  if (!context) {
    throw new Error(
      "useReasoningContext must be used within a Reasoning provider"
    );
  }
  return context;
}

export type ReasoningProps = {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isStreaming?: boolean;
};

export function Reasoning({
  children,
  className,
  open,
  onOpenChange,
  isStreaming,
}: ReasoningProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [wasAutoOpened, setWasAutoOpened] = useState(false);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    if (isStreaming && !wasAutoOpened) {
      if (!isControlled) setInternalOpen(true);
      setWasAutoOpened(true);
    }

    if (!isStreaming && wasAutoOpened) {
      if (!isControlled) setInternalOpen(false);
      setWasAutoOpened(false);
    }
  }, [isStreaming, wasAutoOpened, isControlled]);

  return (
    <ReasoningContext.Provider
      value={{
        isOpen,
        onOpenChange: handleOpenChange,
      }}
    >
      <div className={className}>{children}</div>
    </ReasoningContext.Provider>
  );
}

export type ReasoningTriggerProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export function ReasoningTrigger({
  children,
  className,
  ...props
}: ReasoningTriggerProps) {
  const { isOpen, onOpenChange } = useReasoningContext();

  return (
    <button
      type="button"
      className={cn("flex cursor-pointer items-center gap-2 !mb-0 !pb-0", className)}
      onClick={() => onOpenChange(!isOpen)}
      data-testid="button-reasoning-trigger"
      {...props}
    >
      <span className="text-muted-foreground text-sm">{children || "Reasoning"}</span>
      <div
        className={cn(
          "transform transition-transform duration-200",
          isOpen ? "rotate-180" : ""
        )}
      >
        <ChevronDown className="size-4 text-muted-foreground" />
      </div>
    </button>
  );
}

export type ReasoningContentProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ReasoningContent({
  children,
  className,
  contentClassName,
  ...props
}: ReasoningContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useReasoningContext();

  useEffect(() => {
    if (!contentRef.current || !innerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (contentRef.current && innerRef.current && isOpen) {
        contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
      }
    });

    observer.observe(innerRef.current);

    if (isOpen) {
      contentRef.current.style.maxHeight = `${innerRef.current.scrollHeight}px`;
    }

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      className={cn(
        "overflow-hidden transition-[max-height] duration-150 ease-out",
        className
      )}
      style={{
        maxHeight: isOpen ? contentRef.current?.scrollHeight : "0px",
      }}
      {...props}
    >
      <div
        ref={innerRef}
        className={cn(
          "text-muted-foreground text-sm",
          contentClassName
        )}
      >
        <pre className="whitespace-pre-wrap font-sans !m-0 !p-0 !mt-0 !mb-0">{children}</pre>
      </div>
    </div>
  );
}
