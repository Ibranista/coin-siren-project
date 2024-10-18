import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

interface IBaseProps<T> extends HTMLAttributes<T> {}

export interface IButtonProps extends IBaseProps<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ITextProps extends IBaseProps<HTMLParagraphElement>, ButtonHTMLAttributes<HTMLParagraphElement> {}

export interface IBoxProps extends IBaseProps<HTMLDivElement>, ButtonHTMLAttributes<HTMLDivElement> {}

export interface IFuncLangParams {
  params: {
    lang: string;
  };
}

export interface ISubLink {
  title: string;
  link: string;
}

interface INavbarItem {
  logo?: string;
  title?: string;
  link: string;
  icon?: string;
  subLinks?: ISubLink[];
  isButton?: boolean;
}

export interface INavbar {
  navbar: INavbarItem[];
}
