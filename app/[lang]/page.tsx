import { IFuncLangParams } from "../interface/interface";
import Middlegrid from "./components/Molecules/middlegrid";
import Middlegrid2 from "./components/Molecules/middlegrid2";

export default async function Home({ params }: IFuncLangParams) {
  const locale = params.lang || 'en-US';
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/content-data?locale=${locale}`;

  const response = await fetch(url);
  const data = await response.json();
  const { main_content } = data ?? {};

  const firstContent = main_content?.[0];
  const secondContent = main_content?.[1];

  return (
    <main>
      <Middlegrid company_prime_data={firstContent} />

      <Middlegrid2 secondContent={secondContent} />
    </main>
  );
}
