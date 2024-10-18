import Image from "next/image";
import Text from "../Atoms/text";
import { IPrime_company_data } from "@/app/interface/interface";

export default function Middlegrid({ company_prime_data }: { company_prime_data: IPrime_company_data }) {
    console.log('the primary data==>', company_prime_data)
    const { company_primary_data_, services } = company_prime_data ?? {};
    const { logo, description, contact } = company_primary_data_ ?? {};
    return (
        <section className="middle_section mt-[64px] px-4 max-w-[1201.5px] mx-auto md:flex md:gap-x-[98px]">
            <article className="logo_phone_email_wrapper flex flex-col gap-y-[18px] max-w-[306px]">
                <div className="logo_detail_wrapper flex flex-col gap-y-4">
                    <Image src={logo?.src ?? '/logo_secondary.png'} width={187} height={34} alt={"hyperhire logo"} />
                    <Text variant={"md_dark"} size={"sm"} className="font-black max-w-[247px] leading-[150%]">{description}</Text>
                </div>
                <div className="phone_email_wrapper flex flex-col gap-y-2">
                    <Text className="leading-[150%] font-black text-[13px] text-[#5e626f]">{contact?.phone}</Text>
                    <Text className="leading-[150%] font-black text-[13px] text-[#5e626f]">{contact?.email}</Text>
                </div>
            </article>

            <article className="grid-container max-md:mt-[18px]">
                <div className="grid grid-cols-2 md:grid-cols-2 max-[340px]:grid-cols-1 lg:grid-cols-4 gap-4 md:gap-x-[15px]">
                    {services?.map((service, index) => (
                        <div className="bg-white min-w-[160px] md:w-[187px] rounded-lg p-4 flex flex-col items-start justify-between" key={index}>
                            <Image src={service?.icon?.src ?? "/codeicon.png"} width={40} height={40} alt="code tag icon" className="mb-3" />
                            <Text size={"sm"} className="leading-[150%] font-black" variant={"md_dark"}>{service?.title}</Text>
                            <Text className="mt-4 flex items-center text-lightest_black">{service?.link_text} <Image src={service.link_icon.src ?? "/arrow_right_square.png"} className="ml-2" alt="arrow right icon" height={17} width={17} /></Text>
                        </div>
                    ))
                    }
                </div>
            </article>

        </section>
    )
}