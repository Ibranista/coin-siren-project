"use client";
import Image from "next/image";
import Text from "../Atoms/text";
import Button from "../Atoms/button";
import HumButton from "../Atoms/humberger";
import { useState } from "react";
import NavDropdown from "../Molecules/navDropdown";
import NavLink from "../Molecules/navLink";
import AccordionContent from "../Molecules/accordionContent";
import LocaleSwitch from "@/app/util/localSwitch";

export default function Navbar() {
    const [toggled, setToggled] = useState(false);

    return (
        <section>
            <nav className="flex justify-between items-center h-[60px] relative box-border px-4 max-w-[1201.5px] w-full mx-auto">
                <div className="logo_image_wrapper relative w-[114px] height-[21px]">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={114}
                        height={21}
                        priority
                        unoptimized
                    />
                    <LocaleSwitch />
                </div>
                <ul className={`nav_links flex gap-[60px] 
           sidebar transition-left
            ${toggled ? " left-0" : "-left-full"}
            `}>
                    <NavLink className='max-md:hidden'>
                        <Text>채용</Text>
                        <span className="material-symbols-outlined text-white">
                            keyboard_arrow_down
                        </span>
                        <NavDropdown />
                    </NavLink>
                    <AccordionContent />
                    <NavLink>
                        <Text>해외 개발자 활용 서비스</Text>
                    </NavLink>
                    <NavLink>
                        <Button className="md:hidden">문의하기</Button>
                    </NavLink>
                </ul>
                <Button className="max-md:hidden font-black">문의하기</Button>
                <HumButton toggled={toggled} setToggled={setToggled} />

            </nav>
        </section>
    )
}
