import Image from "next/image";
import Text from "../Atoms/text";
import Button from "../Atoms/button";
import HumButton from "../Atoms/humberger";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-primary_blue h-[60px] relative">
            <Image
                src="/logo.png"
                alt="logo"
                width={114}
                height={21}
                priority
                unoptimized
            />
            <div className="nav_links flex gap-[60px]">
                <Text>Text</Text>
                <Text>Text</Text>
            </div>
            <Button>Button</Button>
            <HumButton />
        </nav>
    )
}