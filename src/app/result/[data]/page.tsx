import { generate } from "./generate";

interface Params {
  params: {
    data: string;
  }
}

export default async function Result({params: {data}}: Params): Promise<JSX.Element> {
  const strData = Buffer.from(decodeURIComponent(data), "base64").toString("utf8");
  const jsonData = JSON.parse(strData);
  const result = await generate(jsonData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4">
      {JSON.stringify(result)}
    </main>
  )
}