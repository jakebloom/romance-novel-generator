"use client"

import Link from "next/link";
import { useCallback, useState } from "react";
import {QuestionBank} from '@/components/question-bank'
import { useRouter } from "next/navigation";

const QUESTIONS = [
  {
    key: "theme",
    name: "What should the theme of the novel be?",
    answers: [
      "Contemporary",
      "Historical",
      "Fantasy",
      "Paranormal",
      "Sci-Fi",
      "Regency",
    ]
  },
  {
    key: "conflict",
    name: "What type of conflict should the protagonists have?",
    answers: [
      "Forbidden Love",
      "Love Triangle",
      "Second Chance",
      "Enemies to Lovers",
      "Friends to Lovers",
      "Fake Relationship",
    ]
  },
  {
    key: "setting",
    name: "What setting should the novel take place in?",
    answers: [
      "Small Town",
      "Big City",
      "Exotic Location",
      "Medieval Kingdom",
      "Dystopian World",
      "Magical Realm",
    ]
  },
  {
    key: "protagonist_occupation",
    name: "What is the protagonist's occupation?",
    answers: [
      "Business Executive",
      "Artist",
      "Soldier",
      "Doctor",
      "Detective",
      "Royalty",
    ]
  },
  {
    key: "protagonist_personality",
    name: "What kind of personality does the protagonist have?",
    answers: [
      "Shy",
      "Outgoing",
      "Ambitious",
      "Cynical",
      "Optimistic",
      "Mysterious",
    ],
  },
  {
    key: "love_interest_occupation",
    name: "What is the love interest's occupation?",
    answers: [
      "CEO",
      "Adventurer",
      "Scientist",
      "Teacher",
      "Athlete",
      "Wizard",
    ],
  },
  {
    key: "love_interest_personality",
    name: "What kind of personality does the love interest have?",
    answers: [
      "Protective",
      "Charismatic",
      "Intelligent",
      "Kind",
      "Rebellious",
      "Brooding",
    ],
  },
  {
    key: "plot",
    name: "What should be the key plot device?",
    answers: [
      "Secret Identity",
      "Betrayal",
      "Road Trip",
      "Magical Quest",
      "Time Travel",
      "Family Feud",
    ],
  },
  {
    key: "cover",
    name: "What style cover should the book have?",
    answers: [
      "Illustrated",
      "Photorealistic",
      "Abstract",
      "Minimalist",
      "Vintage",
      "Fantasy Art",
    ],
  },
]

const answers: Record<string, string> = {}

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const router = useRouter();

  const onSelect = useCallback((questionKey: string, answer: string) => {
    answers[questionKey] = answer;
    if (questionNumber === (QUESTIONS.length - 1)) {
      const data = Buffer.from(JSON.stringify(answers)).toString("base64")
      router.push(`/result/${data}`);
    } else {
      setQuestionNumber(n => n + 1);
    }
  }, [setQuestionNumber, questionNumber, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4">
      <div className="md:w-1/2 sm:w-full sm:px-12 md:px-0 w-full flex flex-col justify-center">
        <div className="flex justify-between items-center w-full flex-col md:flex-row mb-8">
          <h1 className="font-bold text-2xl text-blue">Romance Novel Generator</h1>
          <Link href="/about" className="text-blue">About</Link>
        </div>
        {QUESTIONS.map((question, idx) => <QuestionBank {...question} key={question.key} questionKey={question.key} active={idx === questionNumber} onSelect={onSelect} />)}
      </div>
    </main>
  );
}
