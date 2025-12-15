/*//import { getVersion } from '@/lib/queries';
import { getQuiz } from "@/lib/quiz";

export default async function Home() {
  //const version = await getVersion();
  const quiz = await getQuiz();
  
  return (
    <div className="p-8">
      <h3 className="text-center">Question Here</h3>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="h-32 p-4 border-4 border-gray-500 bg-red-100">
          Option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-green-100">
          Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-blue-100">
          Option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-yellow-100">
          Option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
    //<>{version}</>
    <div>
      {quiz.map(q => (
        <div key={q.id}>
          <h2 className="text-center font-bold">
            {q.question}
          </h2>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  );*/

import { getQuiz } from '@/lib/quiz';

export default async function Page() {
  const quiz = await getQuiz();

  return (
    <div className="p-6">
      {quiz.map(q => (
        <div key={q.id} className="mb-4 p-4 border rounded">
          <div>
            <h2 className="font-bold text-center">{q.question}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="h-32 p-4 border-4 border-gray-500 bg-red-100">
              <p>{q.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
