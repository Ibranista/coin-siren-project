import Text from "../Atoms/text";

export default function Middlegrid2() {
    return (
        <section className="middle_section mt-[60px] px-4 max-w-[1201.5px] mx-auto md:flex md:gap-x-[42px]">

            <article className="logo_phone_email_wrapper flex flex-col gap-y-[5px] max-w-[306px] w-full">
                <div className="name_detail_wrapper flex justify-between">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"md_dark"}>상호명</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"md_dark"}>대표 CEO</Text>
                </div>

                <div className="name_detail_wrapper flex justify-between">
                    <Text className="leading-[150%] text-[13px] font-black" variant={"lightest_dark"}>하이퍼하이어</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>김주현</Text>
                </div>

                <div className="name_detail_wrapper flex justify-between">
                    <Text className="leading-[150%] text-[13px] font-black" variant={"lightest_dark"}>Hyperhire India Private Limited</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>Juhyun Kim</Text>
                </div>
            </article>

            <article className="grid-container grid grid-cols-1 md:flex md:gap-x-[42px] gap-4 max-md:mt-[36px] max-md:gap-y-[0]">

                <div className="name_detail_wrapper flex flex-col gap-y-[10px]">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"lightest_dark"}>사업자등록번호 CIN</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>427-86-01187</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>U74110DL2016PTC290812 </Text>
                </div>

                <div className="address_wrapper flex flex-col gap-y-[10px] max-md:mt-[36px]">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"lightest_dark"}>주소 ADDRESS</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>서울특별시 강남대로 479, 지하 1층 238호 </Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>
                        D-138, Street number 11, Jagjeet Nagar, North <br /> East Delhi, New Delhi,<br />110053 India
                    </Text>
                </div>
            </article>

        </section>
    )

}