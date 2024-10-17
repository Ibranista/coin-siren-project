import Image from "next/image";
import Text from "../Atoms/text";

export default function Middlegrid() {
    return (
        <section className="middle_section mt-[64px] px-4 max-w-[1201.5px] mx-auto md:flex md:gap-x-[98px]">
            <article className="logo_phone_email_wrapper flex flex-col gap-y-[18px] max-w-[306px]">
                <div className="logo_detail_wrapper flex flex-col gap-y-4">
                    <Image src="/logo_secondary.png" width={187} height={34} alt={"hyperhire logo"} />
                    <Text variant={"md_dark"} size={"sm"} className="font-black max-w-[247px] leading-[150%]">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</Text>
                </div>
                <div className="phone_email_wrapper flex flex-col gap-y-2">
                    <Text className="leading-[150%] font-black text-[13px] text-[#5e626f]">010-0000-0000</Text>
                    <Text className="leading-[150%] font-black text-[13px] text-[#5e626f]">aaaaa@naver.com</Text>
                </div>
            </article>

            <article className="grid-container max-md:mt-[18px]">
                <div className="grid grid-cols-2 md:grid-cols-2 max-[340px]:grid-cols-1 lg:grid-cols-4 gap-4 md:gap-x-[15px]">

                    <div className="bg-white min-w-[160px] md:w-[187px] rounded-lg p-4 flex flex-col items-start justify-between">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                        <Text size={"sm"} className="leading-[150%] font-black" variant={"md_dark"}>해외 개발자 원격 채용</Text>
                        <Text className="mt-4 flex items-center text-lightest_black">바로가기 <Image src="/arrow_right_square.png" className="ml-2" alt="arrow right icon" height={17} width={17} /></Text>
                    </div>

                    <div className="bg-white min-w-[160px] md:w-[187px] rounded-lg p-4 flex flex-col items-start justify-between">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                        <Text size={"sm"} className="leading-[150%] font-black" variant={"md_dark"}>외국인 원격 채용 (비거랄)</Text>
                        <Text className="mt-4 flex items-center text-lightest_black">바로가기 <Image src="/arrow_right_square.png" className="ml-2" alt="arrow right icon" height={17} width={17} /></Text>
                    </div>

                    <div className="bg-white min-w-[160px] md:w-[187px] rounded-lg p-4 flex flex-col items-start justify-between">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                        <Text size={"sm"} className="leading-[150%] font-black" variant={"md_dark"}>한국어 가능한 외국인 채용</Text>
                        <Text className="mt-4 flex items-center text-lightest_black">바로가기 <Image src="/arrow_right_square.png" className="ml-2" alt="arrow right icon" height={17} width={17} /></Text>
                    </div>

                    <div className="bg-white min-w-[160px] md:w-[187px] rounded-lg p-4 flex flex-col items-start justify-between">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                        <Text size={"sm"} className="leading-[150%] font-black" variant={"md_dark"}>해외 개발자 활용 서비스</Text>
                        <Text className="mt-4 flex items-center text-lightest_black">바로가기 <Image src="/arrow_right_square.png" className="ml-2" alt="arrow right icon" height={17} width={17} /></Text>
                    </div>
                </div>
            </article>

        </section>
    )
}