import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY })
const MODEL = "llama3-70b-8192"

const SYSTEM_PROMPT = "You are an expert copywriter that produces blurbs for romance novels."

function getUserPrompt(data: Record<string, string>): string {
  delete data["cover"]
  return `
Write a funny, witty and engaging blurb for a romance novel with the following details:
${JSON.stringify(data)}

The blurb should be formatted into a few paragraphs. Return the blurb as a valid JSON in the following format:
{'blurb': [paragraph1, paragraph2, ...]}
  `;
}

interface GenerateResult {
  blurb: string[];
  image: string;
}

export async function generate(data: Record<string, string>): Promise<GenerateResult> {
  const groqRes = await client.chat.completions.create({
    model: MODEL,
    max_tokens: 512,
    response_format: {type: 'json_object'},
    messages: [
      {role: "system", content: SYSTEM_PROMPT},
      {role: "user", content: getUserPrompt(data)},
    ],
  });

  const content = groqRes.choices[0].message.content

  return {
    blurb: JSON.parse(content || "{}").blurb || "",
    image: "",
  }
}

const MOCK_BLURB = [
  "In the small town of Oakdale, where everyone knows everyone and gossip spreads like wildfire, Dr. Sophia Thompson has made a name for herself as the most cynical and unromantic doctor in the county. She's got a reputation for being immune to the charms of the local ladies' men, and her no-nonsense attitude has earned her a few enemies along the way.",
  "One of those enemies is none other than Ryder Flynn, the star quarterback of the Oakdale Falcons, who's as chiseled as he is charming. Their families have been at odds for decades, and Sophia and Ryder have grown up on opposite sides of a bitter family feud. The last thing they need is to be forced together, but fate has other plans.",
  "When Sophia's medical expertise is required to treat Ryder's injured shoulder, their constant bickering and sarcastic banter can't hide the undeniable spark between them. As they work together to uncover the secrets of their families' long-standing feud, Sophia's icy exterior begins to thaw, and Ryder's protective instincts go into overdrive. Can these sworn enemies turn their animosity into something more? Or will their families' past tear them apart once and for all?",
]

export async function generateMock(data: any): Promise<GenerateResult> {
  return {
    blurb: MOCK_BLURB,
    image: "https://loremflickr.com/1024/1024",
  }
}