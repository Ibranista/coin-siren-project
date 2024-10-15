import Button from "./components/Atoms/button";
import Text from "./components/Atoms/text";
import CardSlider from "./components/Molecules/slider";

export default async function Home({ params }: { params: { lang: string } }) {
  const locale = params.lang || 'en-US';
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/sample-data-en?locale=${locale}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log('the data==>', data)
  return (
    <main className="bg-slate-500">
      <article className="hero_jumbotron_wrapper
      max-w-[1201.5px] w-full mx-auto
      // large_screen
      grid grid-cols-2
      // small screen
      max-lg:grid-cols-1
      ">
        <section className="">
          <section className="left_top_container px-4 max-w-[579px] flex flex-col gap-4">
            {/* top-title */}
            <article className="min-w-[150px] py-[6px] mt-9">
              <div className="relative inline-block bg-light_green text-black text-lg font-semibold px-4 py-2 rounded-lg box-content">
                <Text className="text-lg"> 풀타임, 파트타임 </Text>
                <div className="absolute w-3 h-3 bg-light_green rotate-45 top-[38px] left-[13px]"></div>
              </div>
            </article>
            {/* sub-title */}
            <article className="">
              <Text size={"lg"} className="leading-[130%]">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</Text>
            </article>
            {/* second-subtitle */}
            <article className="">
              <Text size="mdx">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</Text>
            </article>
            {/* third subtitle */}
            <article className="max-md:hidden mt-2">
              <Text className="text-lg underline">개발자가 필요하신가요?</Text>
            </article>
          </section>
        </section>

        {/* slider section */}
        <CardSlider />
      </article>
    </main>
  );
}
