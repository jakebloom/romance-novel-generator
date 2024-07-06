
interface GenerateResult {
  blurb: string;
  image: string;
}

export async function generate(data: Record<string, string>): Promise<GenerateResult> {
  await new Promise(res => setTimeout(res, 5000));
  return {
    blurb: "",
    image: "",
  }
}