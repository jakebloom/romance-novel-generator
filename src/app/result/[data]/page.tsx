import Link from "next/link";
import { generate } from "./generate";
import Image from "next/image";

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
      <div className="md:w-1/2 sm:w-full sm:px-12 md:px-0 w-full flex flex-col justify-center">
        <div className="flex justify-between items-center w-full flex-col md:flex-row mb-8">
          <Link href="/"><h1 className="font-bold text-2xl text-blue">Romance Novel Generator</h1></Link>
          <Link href="/about" className="text-blue">About</Link>
        </div>

        <div className="grid xl:grid-cols-2 gap-4 mb-4">
          <div className="place-self-center">
            <Image
              src={result.image}
              className="px-8 sm:px-0 rounded"
              width={1024}
              height={1024}
              alt="The cover illustration for the book" />
          </div>
          <div className="px-8 sm:px-0 flex flex-col gap-4">
            {result.blurb.map((a, idx) => <div key={idx}>{a}</div>)}
          </div>
        </div>
      </div>
    </main>
  )
}