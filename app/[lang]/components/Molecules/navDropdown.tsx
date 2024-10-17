import Link from "next/link";
import CardBox from "../Atoms/cardBox";
import Text from "../Atoms/text";

export default function NavDropdown() {
    return (
        <CardBox className="absolute top-full left-0 hidden group-hover:flex flex-col shadow-md">
            <Link href={"#"} className="py-[10px]">
                <Text variant={"secondary"} size={"sm"} className="font-bold">
                    채용
                </Text>
            </Link>
            <Link href={"#"} className="py-[10px]">
                <Text variant={"secondary"} size={"sm"}>
                    해외 개발자 원격 채용
                </Text>
            </Link>
            <Link href={"#"} className="py-[10px]">
                <Text variant={"secondary"} size={"sm"}>
                    해외 개발자 원격 채용
                </Text>
            </Link>
            <Link href={"#"} className="py-[10px]">
                <Text variant={"secondary"} size={"sm"}>한국어 가능 외국인 채용
                </Text>
            </Link>
        </CardBox>
    )
}