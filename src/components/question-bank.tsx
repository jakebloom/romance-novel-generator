import { Transition } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";

interface QuestionBankProps {
  questionKey: string;
  name: string;
  answers: string[];
  active: boolean;
  onSelect: (key: string, val: string) => void;
}

export function QuestionBank({
  questionKey,
  name,
  active,
  answers,
  onSelect,
}: QuestionBankProps): JSX.Element | null {
  const [displaying, setDisplaying] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => setDisplaying(true), 200);
    } else {
      setDisplaying(false);
    }
  }, [active])

  const onClick = useCallback((val: string) => () => {
    onSelect(questionKey, val);
  }, [questionKey, onSelect])

  return <Transition show={displaying}>
    <div className="flex flex-col items-center transition duration-200 delay-400 ease-in data-[closed]:opacity-0"> 
      <h1 className="text-blue font-bold text-2xl mb-4 text-center">{name}</h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {answers.map((a, idx) =>
          <div
            onClick={onClick(a)}
            key={idx}
            className="px-4 sm:w-[180px] w-[150px] text-center aspect-[2] border border-blue/50 rounded-xl flex items-center justify-center backdrop-blur-3xl shadow-lg cursor-pointer">
            {a}
          </div>)
        }
      </div>
    </div>
  </Transition>
}
