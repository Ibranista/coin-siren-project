import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface ITextProps extends ButtonHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
