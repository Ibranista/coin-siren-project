import Link from "next/link";
import CardBox from "../Atoms/cardBox";
import Text from "../Atoms/text";
import { ISubLink } from "@/app/interface/interface";

export default function NavDropdown({ sublinks }: { sublinks?: ISubLink[] }) {
    return (
        <CardBox className="absolute top-full left-0 hidden group-hover:flex flex-col shadow-md">
            {sublinks?.map(link => (
                <Link href={"#"} className="py-[10px]">
                    <Text variant={"secondary"} size={"sm"} className="font-bold">
                        {link?.title}
                    </Text>
                </Link>
            ))
            }
        </CardBox>
    )
}