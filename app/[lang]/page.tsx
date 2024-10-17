
export default async function Home({ params }: { params: { lang: string } }) {
  const locale = params.lang || 'en-US';
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/sample-data-en?locale=${locale}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log('the data==>', data)
  return (
    <main>
      
    </main>
  );
}
