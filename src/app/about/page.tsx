import { Coffee } from "@/components/coffee";
import Image from "next/image";
import Link from "next/link";

export default function About(): JSX.Element {
  return  <main className="flex min-h-screen flex-col items-center justify-between py-4 mb-4">
    <div className="md:w-1/2 sm:w-full px-4 sm:px-12 md:px-0 w-full flex flex-col justify-center">
      <div className="flex justify-between items-center w-full flex-col md:flex-row mb-8">
        <Link href="/"><h1 className="font-bold text-2xl text-blue">Romance Novel Generator</h1></Link>
        <Link href="/about" className="text-blue">About</Link>
      </div>

      <div className="mb-8">
        <h1 className="text-blue font-bold text-lg">Dedication</h1>
        <div className="w-full text-center italic">
          To Zoe, whose strength, resillience and kindness inspires me.
        </div>
      </div>
      
      <div>
        <h1 className="text-blue font-bold text-lg">Acknowledgements</h1>
        <div className="mb-4">
          As they say, it takes a village to raise a webapp.
          I&apos;d like to thank React, Nextjs, Vercel and Tailwindcss for hosting this website.
          Thanks also to Sarit, Michael and the whole team at Groq for building the most impressive AI platform out there.
          There is some OpenAI in here as well, so thank you to the team there as well.
        </div>
        <div className="mb-4">
          This project is completely open source, and you can see the code <Link target="_blank" className="text-blue font-bold underline" href="https://github.com/jakebloom/romance-novel-generator">on my GitHub.</Link>
        </div>
        <div className="mb-4">
          I got the idea for this project over some wines on a warm summer night in San Francisco with Franny, Haley, Emma and Zoe.
          Thank you for being your amazing hilarious selves and amazing friends.
        </div>
        <div className="mb-4">
          This would not have happened without all the folks who have taught me how to code over my whole life.
          To Daniel Judd, who taught me &quot;hello world&quot; almost twenty years ago,
          Stephanie Schwarz who taught me everything I know about computers,
          Henrik Berggren who taught me everything I know about product,
          and of course my current cofounders, Tanmay and Pip, who are absolute legends that I love working with every day.
        </div>
        <div className="mb-4">
          Saving the best for last, I have to thank my wife, Zoe.
          There are not enough superlatives in the world to describe her. Zoe makes me a better person and I am so lucky to have her.
        </div>
      </div>

      <div>
        <h1 className="text-blue font-bold text-lg">About The Author</h1>
        <div className="mb-4">
          Jake Bloom is a software engineer, founder, reader and writer, who lives in San Francisco, California.
        </div>
        <div className="mb-4">
          He is the author of <Link target="_blank" className="text-blue font-bold underline" href="https://absolutelymint.substack.com/">Absolutely Mint</Link>, a newsletter about personal finance and the stock market.
        </div>
        <div className="mb-4">
          He is also the cofounder of <Link target="_blank" className="text-blue font-bold underline" href="https://galah.lol">Galah</Link>, building the optimization loop for video ads.
        </div>
        <div className="w-full flex justify-center">
          <Image src="https://avatars.githubusercontent.com/u/5188779" alt="An image of Jake Bloom"  width={150} height={150} className="rounded-full border border-blue my-2"/>
        </div>
      </div>
    </div>
    <Coffee />
  </main>
}