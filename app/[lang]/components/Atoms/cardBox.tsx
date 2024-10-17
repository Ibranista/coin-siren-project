import { IBoxProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";
import { poppins } from "@/app/util/fonts";

export default function CardBox({ children, className, variant, size, ...props }: IBoxProps & VariantProps<typeof boxVariants>) {
    return (
        <div className={`${cn(boxVariants({ variant, size, className }))} ${poppins.className}`} {...props}>
            {children}
        </div>
    )
}

const boxVariants = cva("box-primary", {
    variants: {
        variant: {
            primary: "bg-white rounded-md",
            secondary: "text-lighter_black",
            tertiary: "text-primary_black",
            md_dark: "text-[#343741]",
            lightest_dark: "text-lightest_black"
        },
        size: {
            sm: "text-sm",
            md: "w-60 px-4",
            lg: "text-5xl max-md:text-4xl",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})