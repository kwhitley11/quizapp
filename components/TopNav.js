  
export default function TopNav() {
    return (
      <nav className="w-full border-b p-4 flex gap-4">
        <a href="/" className="font-bold">QuizApp</a>
        <a href="/quiz">Quiz</a>
        <a href="/flashcard">Flashcard</a>
      </nav>
    );
  }