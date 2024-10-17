import Image from "next/image";
import Text from "../Atoms/text";
import CardSlider from "../Molecules/slider";
import InfiniteSlider from "../Molecules/infiniteslide";

export default function HeroJumbotron() {
    return (
        <>
            <article className="hero_jumbotron_wrapper
      max-w-[1201.5px] w-full mx-auto
      // large_screen
      grid grid-cols-2
      // small screen
      max-lg:grid-cols-1
      ">
                <section className="">
                    <section className="left_top_container px-4 max-w-[579px] flex flex-col gap-4">
                        {/* top-tooltip */}
                        <article className="min-w-[150px] py-[6px] mt-9 animate-fadeInDelayed">
                            <div className="relative inline-block bg-nephritis text-black text-lg font-semibold px-4 py-2 rounded-lg box-content">
                                <Text className="text-lg text-lightest_green font-black" size={"mdx"}> 풀타임, 파트타임 </Text>
                                <div className="absolute w-3 h-3 bg-nephritis rotate-45 top-[38px] left-[13px]"></div>
                            </div>
                        </article>
                        {/* sub-title */}
                        <article className="animate-fadeInUp">
                            <Text size={"lg"} className="leading-[130%]">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</Text>
                        </article>
                        {/* second-subtitle */}
                        <article className="animate-fadeInUp">
                            <Text size="mdx">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</Text>
                        </article>
                        {/* third subtitle */}
                        <article className="max-md:hidden mt-2 animate-fadeInUp">
                            <Text className="text-lg underline">개발자가 필요하신가요?</Text>
                        </article>
                    </section>
                    {/* three rows that are hidden on mobile */}
                    <section className="three-rows grid grid-cols-3 gap-x-12 gap-y-2 pl-4 max-md:hidden mt-[60px] md:width-[579px] lg:flex-wrap animate-fadeIn">
                        <article className="row_card max-w[161px] relative flex flex-col gap-2">
                            <Text size={"mdx"} className="font-black custom_border pt-2">평균 월 120만원</Text>
                            <Text size={"md"} className="font-black">임금을 해당 국가를 기준으로 계산합니다.</Text>
                        </article>
                        <article className="row_card max-w[161px] relative flex flex-col gap-2">
                            <Text size={"mdx"} className="font-black custom_border pt-2">최대 3회 인력교체</Text>
                            <Text size={"md"} className="font-black">막상 채용해보니 맞지 않아도 걱정하지 마세요.</Text>
                        </article>
                        <article className="row_card max-w[161px] relative flex flex-col gap-2">
                            <Text size={"mdx"} className="font-black custom_border pt-2">평균 3일, 최대 10일</Text>
                            <Text size={"md"} className="font-black">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</Text>
                        </article>
                    </section>
                </section>


                {/* slider section */}
                <div className="card_slider_wrapper">
                    <CardSlider />
                </div>
                {/* checkbox section for small screens */}
                <section className="check_boxes_wrapper flex px-4 flex-wrap gap-x-2 gap-y-8 md:hidden">
                    <div className="flex gap-3 items-center min-w-[109px]">
                        <Image src="/checkbox.png" unoptimized width={20} height={20} alt="checkbox-icon" />
                        <Text>한국어 능력</Text>
                    </div>
                    <div className="flex gap-3 items-center min-w-[109px]">
                        <Image src="/checkbox.png" unoptimized width={20} height={20} alt="checkbox-icon" />
                        <Text>업무 수행 능력</Text>
                    </div>
                    <div className="flex gap-3 items-center min-w-[109px]">
                        <Image src="/checkbox.png" unoptimized width={20} height={20} alt="checkbox-icon" />
                        <Text>겸업 여부</Text>
                    </div>
                    <div className="flex gap-3 items-center min-w-[109px]">
                        <Image src="/checkbox.png" unoptimized width={20} height={20} alt="checkbox-icon" />
                        <Text>평판 조회</Text>
                    </div>
                </section>
                <article className="text_for_mobile mt-4 px-4 md:hidden">
                    <Text className="text-[#FBFF23] underline">개발자가 필요하신가요?</Text>
                </article>
            </article>
            {/* slider for larger screen only */}
            <div className="slider_container">
                <InfiniteSlider />
            </div>
        </>
    )
}