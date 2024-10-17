"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Text from "../Atoms/text";
import Image from "next/image";

export default function InfiniteSlider() {
    const settings2 = {
        className: "slider variable-width",
        dots: false,
        autoplay: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div className="max-w-[1201.5px] px-4 mx-auto mt-2">
            <div className="slider-container">
                <Slider {...settings2}>
                    <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }}>
                        <article className="slider_card flex box-border gap-x-[10px] p-4 items-center">
                            <Image src="/frame1.png" width={36} height={56} alt="frame for slide" className="rounded-sm" />
                            <Text size={"mdx"}>해외 마케팅</Text>
                        </article>
                    </div>
                    <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }}>
                        <article className="slider_card flex box-border gap-x-[10px] p-4 items-center">
                            <Image src="/frame1.png" width={36} height={56} alt="frame for slide" className="rounded-sm" />
                            <Text size={"mdx"}>해외 마케팅</Text>
                        </article>
                    </div>
                    <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }}>
                        <article className="slider_card flex box-border gap-x-[10px] p-4 items-center">
                            <Image src="/frame1.png" width={36} height={56} alt="frame for slide" className="rounded-sm" />
                            <Text size={"mdx"}>해외 마케팅</Text>
                        </article>
                    </div>
                    <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }}>
                        <article className="slider_card flex box-border gap-x-[10px] p-4 items-center">
                            <Image src="/frame1.png" width={36} height={56} alt="frame for slide" className="rounded-sm" />
                            <Text size={"mdx"}>해외 마케팅</Text>
                        </article>
                    </div>
                    <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }}>
                        <article className="slider_card flex box-border gap-x-[10px] p-4 items-center">
                            <Image src="/frame1.png" width={36} height={56} alt="frame for slide" className="rounded-sm" />
                            <Text size={"mdx"}>해외 마케팅</Text>
                        </article>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
