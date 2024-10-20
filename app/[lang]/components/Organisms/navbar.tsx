"use client";
import Image from "next/image";
import Text from "../Atoms/text";
import Button from "../Atoms/button";
import HumButton from "../Atoms/humberger";
import { useEffect, useState } from "react";
import NavDropdown from "../Molecules/navDropdown";
import NavLink from "../Molecules/navLink";
import AccordionContent from "../Molecules/accordionContent";
import LocaleSwitch from "@/app/util/localSwitch";
import { INavbar } from "@/app/interface/interface";

export default function Navbar({ navContent }: { navContent: INavbar }) {
    const [toggled, setToggled] = useState(false);
    const { navbar } = navContent ?? {};

    const logoData = navbar?.[0];
    const logoSubLinkedData = navbar?.[1];
    const { title, subLinks } = logoSubLinkedData ?? {};

    useEffect(() => {
        document.body.style.overflow = toggled ? "hidden" : "auto";
    }, [toggled]);

    return (
        <section>
            <nav className="flex justify-between items-center h-[60px] relative box-border px-4 max-w-[1201.5px] w-full mx-auto">
                <div className="logo_image_wrapper relative w-[114px] height-[21px]">
                    <Image
                        src={logoData?.icon || ''}
                        alt={logoData?.logo || ''}
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
                        <Text>{title}</Text>
                        <span className="material-symbols-outlined text-white">
                            keyboard_arrow_down
                        </span>
                        <NavDropdown sublinks={subLinks} />
                    </NavLink>
                    <AccordionContent />
                    <NavLink>
                        <Text>{navbar?.[2]?.title}</Text>
                    </NavLink>
                    <NavLink>
                        <Button className="md:hidden">{navbar?.[3]?.title}</Button>
                    </NavLink>
                </ul>
                <Button className="max-md:hidden font-black">{navbar?.[3]?.title}</Button>
                <HumButton toggled={toggled} setToggled={setToggled} />

            </nav>
        </section>
    )
}
