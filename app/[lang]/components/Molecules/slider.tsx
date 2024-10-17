"use client";
import React, { useState } from "react";
import Text from "../Atoms/text";
import Image from "next/image";

const CardSlider = () => {
    const [currentIdx, setCurrentIdx] = useState(1);

    const items = [
        { id: 1, content: "Item 1 - Center" },
        { id: 2, content: "Item 2 - Right" },
        { id: 3, content: "Item 3 - Left" },
    ];

    const changeItem = (step: number) => {
        let newIdx = (currentIdx + step) % items.length;
        if (newIdx < 0) {
            newIdx = items.length - 1;
        }
        setCurrentIdx(newIdx);
    };

    return (
        <section className="bg-orange-200 w-full mx-auto carousel-container h-[500px] max-md:h-[350px] flex flex-col items-center relative">
            <article className="min-w-[150px] py-[6px] mt-2 animate-fadeInDelayed">
                <section className="relative inline-block bg-nephritis text-black text-lg font-semibold px-4 py-2 rounded-lg box-content">
                    <div className="flex gap-[0.5px]">
                        <Image src="/dollar_icon.png" width={26} height={26} alt="dollar icon" />
                        <Text className="text-lg mr-[0.5px] font-black text-primary_green" size={"mdx"}> 월 100만원 </Text>
                    </div>
                    <div className="absolute w-3 h-3 bg-nephritis rotate-45 top-[38px] left-[50%]"></div>
                </section>
            </article>
            <div className="carousel overflow-hidden mx-auto mt-5 max-md:mt-3 flex justify-center relative w-full max-w-[900px] h-full animate-fadeIn">
                {/* Sliding Items */}
                {items.map((item, index) => {
                    const isActive = index === currentIdx;
                    const isPrev = index === (currentIdx + items.length - 1) % items.length;
                    const isNext = index === (currentIdx + 1) % items.length;

                    return (
                        <div
                            key={item.id}
                            className={`carousel-item absolute max-w-[292px] max-md:max-w-full max-md:w-[234px] w-1/2 max-h-[408px] h-full max-md:h-[311px] transition-transform duration-500 ease-in-out ${isActive
                                ? "transform translate-x-0 z-10"
                                : isPrev
                                    ? "transform -translate-x-2/4 max-md:-translate-x-[18%] scale-[0.9]"
                                    : isNext
                                        ? "transform translate-x-2/4 max-md:translate-x-[18%] scale-[0.9]"
                                        : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <div className="item-content h-full flex justify-center items-center bg-gray-200 p-6 rounded-lg shadow-lg">
                                {item.content}
                            </div>
                        </div>
                    );
                })}

                {/* Navigation Arrows */}
                <span className="material-symbols-outlined -left-4 max-lg:left-20 max-md:left-0 max-md:top-[30%] absolute top-[40%] cursor-pointer z-20 text-white" style={{ fontSize: '50px' }} onClick={() => changeItem(-1)}>
                    chevron_left
                </span>
                <span
                    className="right absolute top-[40%] -right-4 max-lg:right-20 max-md:right-0 max-md:top-[30%] cursor-pointer z-20 material-symbols-outlined text-white text-4xl"
                    style={{ fontSize: '50px' }}
                    onClick={() => changeItem(1)}
                >
                    chevron_right
                </span>
            </div>
        </section>
    );
};

export default CardSlider;
