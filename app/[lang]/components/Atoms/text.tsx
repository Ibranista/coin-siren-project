import { ITextProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";
import { inter } from "@/app/util/fonts";

export default function Text({ children, className, variant, size, ...props }: ITextProps & VariantProps<typeof textVariants>) {
    return <p className={`${cn(textVariants({ variant, size, className }))} ${inter.className}`} {...props}>{children}</p>
}

const textVariants = cva("text-primary", {
    variants: {
        variant: {
            primary: "text-white",
            secondary: "text-lighter_black",
            tertiary: "text-primary_black"
        },
        size: {
            sm: "text-sm",
            md: "font-black text-base leading-[150%]",
            lg: "text-5xl lg:text-4xl",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})