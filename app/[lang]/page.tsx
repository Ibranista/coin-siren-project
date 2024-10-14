export default async function Home({ params }: { params: { lang: string } }) {
  const locale = params.lang || 'en-US'; // Ensure locale is from dynamic params
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/sample-data-en?locale=${locale}`; // Remove lang prefix from URL

  const response = await fetch(url);
  const data = await response.json();
  console.log('the data==>', data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>hello</h1>
    </div>
  );
}
