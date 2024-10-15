"use client";
import Image from "next/image";
import Text from "../Atoms/text";
import Button from "../Atoms/button";
import HumButton from "../Atoms/humberger";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function Navbar() {
    const [toggled, setToggled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        { title: 'Section 1', content: 'Text' },
    ];

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
            <ul className={`nav_links flex gap-[60px] 
           sidebar transition-left
            ${!toggled ? " left-0" : "-left-full"}
            `}>
                <li className="list-none flex gap-2 items-center relative group cursor-pointer">
                    <Text>Text</Text>
                    <span className="material-symbols-outlined text-white">
                        keyboard_arrow_down
                    </span>

                    <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white rounded-md shadow-md w-60 px-4">
                        <Link href={"#"} className="py-[10px]"><Text variant={"secondary"} size={"sm"}>Hello</Text></Link>
                        <Link href={"#"} className="py-[10px]"><Text variant={"secondary"} size={"sm"}>Hello</Text></Link>
                    </div>
                </li>
                <div className="accordion md:hidden">
                    {accordionData.map((item, index) => (
                        <li className="list-none items-center relative group cursor-pointer accordion-item" key={index}>
                            <article className="flex gap-2" onClick={() => toggleAccordion(index)}>
                                <Text
                                    className="accordion-header cursor-pointer"
                                >
                                    {item.title}
                                </Text>

                                <span className="material-symbols-outlined text-white">
                                    {activeIndex === index ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                                </span>
                            </article>
                            <div
                                className={`bg-white rounded-md shadow-md w-60 accordion-content px-6 py-4 ${activeIndex === index ? 'open' : 'hidden'}`}
                            >
                                <Text variant={"secondary"}>{item.content}</Text>
                            </div>
                        </li>
                    ))}
                </div>
                <li className="list-none">
                    <Text>Text</Text>
                </li>
                <li className="list-none">
                    <Button className="md:hidden">Button</Button>
                </li>
            </ul>
            <Button className="max-md:hidden">Button</Button>
            <HumButton toggled={toggled} setToggled={setToggled} />

        </nav>
    )
}
