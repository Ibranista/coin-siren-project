import { IButtonProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";

export default function Button({ children, className, variant, size, ...props }: IButtonProps & VariantProps<typeof buttonVariants>) {
    return <button className={cn(buttonVariants({ variant, size, className }))} {...props}>{children}</button>
}

const buttonVariants = cva("rounded-md", {
    variants: {
        variant: {
            primary: "bg-white rounded-lg text-primary_blue",
            secondary: "bg-primary_green text-white",
        },
        size: {
            sm: "px-4 py-2 text-base font-black",
            md: "py-6 px-[6px]",
            lg: "px-8 py-4 text-lg",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})