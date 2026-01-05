import { getQuiz } from '@/lib/quiz';

export default async function Page() {
  const quiz = await getQuiz();

  return (
    <div>
      <h1 className='mt-5 p-6'>Place holder</h1>
    </div>
  )
}
