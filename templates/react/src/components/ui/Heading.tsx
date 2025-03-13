import { cn } from '@aiqiabr/aiqia-ui';
import { cva } from 'class-variance-authority';
import React from 'react';

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
};

const headingVariants = cva('font-bold items-center gap-2', {
  variants: {
    variant: {
      h1: 'scroll-m-20 mb-7 text-2xl tracking-tight sm:text-2xl lg:text-3xl',
      h2: 'scroll-m-20 mb-7 text-lg tracking-tight sm:text-xl lg:text-2xl',
      h3: 'scroll-m-20 mb-5 font-semibold text-lg tracking-tight',
      h4: 'scroll-m-20 text-xs font-bold uppercase text-foreground/60',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export const Heading = ({ variant, className, children }: Props) => {
  const Comp = variant || 'h1';
  return (
    <Comp
      className={cn(
        'font-bold items-center gap-2',
        headingVariants({ variant }),
        className,
      )}
    >
      {children}
    </Comp>
  );
};
