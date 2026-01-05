import { getQuiz } from '@/lib/quiz';

export default async function Page() {
  const quiz = await getQuiz();

  return (
    <div className="p-6">
      {quiz.map(q => (
        <div key={q.id} className="mb-4 p-4 border rounded">
          <div>
            <h2 className="font-bold text-center mt-5 mb-12">{q.question}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <button className="h-32 p-4 border-4 border-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg">
              <p>{q.answer}</p>
            </button>
            <button className="h-32 p-4 border-4 border-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg">
              <p>{q.answer}</p>
            </button>
            <button className="h-32 p-4 border-4 border-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg">
              <p>{q.answer}</p>
            </button>
            <button className="h-32 p-4 border-4 border-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg">
              <p>{q.answer}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
