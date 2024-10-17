import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

interface IBaseProps<T> extends HTMLAttributes<T> {}

export interface IButtonProps extends IBaseProps<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ITextProps extends IBaseProps<HTMLParagraphElement>, ButtonHTMLAttributes<HTMLParagraphElement> {}

export interface IBoxProps extends IBaseProps<HTMLDivElement>, ButtonHTMLAttributes<HTMLDivElement> {}
