import { describe, expect, it } from 'vitest';
import { buttonVariants, cn, navigationMenuTriggerStyle } from './utils';

describe('cn', () => {
  it('joins plain class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('drops falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b');
  });

  it('flattens arrays and objects the way clsx does', () => {
    expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c');
  });

  it('lets a later tailwind class win over an earlier conflicting one', () => {
    // This is the whole reason cn exists rather than plain clsx.
    expect(cn('px-2', 'px-4')).toBe('px-4');
    expect(cn('text-sm text-red-500', 'text-lg')).toBe('text-red-500 text-lg');
  });

  it('returns an empty string with no input', () => {
    expect(cn()).toBe('');
  });
});

describe('buttonVariants', () => {
  it('applies the default variant and size when called bare', () => {
    const result = buttonVariants();
    expect(result).toContain('bg-msc-navy');
    expect(result).toContain('h-10');
  });

  it.each([
    ['default', 'bg-msc-navy'],
    ['mustard', 'bg-msc-mustard'],
    ['outline', 'border-msc-navy'],
    ['outline-mustard', 'border-msc-mustard'],
    ['destructive', 'bg-destructive'],
    ['secondary', 'bg-secondary'],
    ['ghost', 'hover:bg-accent'],
    ['link', 'underline-offset-4'],
  ] as const)('variant %s yields %s', (variant, expected) => {
    expect(buttonVariants({ variant })).toContain(expected);
  });

  it.each([
    ['default', 'h-10'],
    ['sm', 'h-8'],
    ['lg', 'h-12'],
    ['icon', 'h-9'],
  ] as const)('size %s yields %s', (size, expected) => {
    expect(buttonVariants({ size })).toContain(expected);
  });

  it('merges an extra className through', () => {
    expect(buttonVariants({ className: 'rounded-full' })).toContain('rounded-full');
  });
});

describe('navigationMenuTriggerStyle', () => {
  it('produces the trigger base classes', () => {
    const result = navigationMenuTriggerStyle();
    expect(result).toContain('inline-flex');
    expect(result).toContain('bg-background');
  });
});
