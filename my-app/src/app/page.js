"use client";

import { useState } from "react";

export default function Home() {
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: ""
  });

  const [isCorrect, setIsCorrect] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false,
    answer7: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
    setIsCorrect((prevIsCorrect) => ({
      ...prevIsCorrect,
      [name]: checkAnswer(name, value)
    }));
  };

  const checkAnswer = (name, value) => {
    const correctAnswers = {
      answer1: "Vitae",
      answer2: "40",
      answer3: "Growth",
      answer4: "Respond",
      answer5: "Devour",
      answer6: "Safer",
      answer7: "Anomaly"
    };
    return correctAnswers[name] === value;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img src="https://cdn.discordapp.com/attachments/1296851878692524057/1304839096329437194/RNI-Films-IMG-466F0B1B-8A99-427B-8E05-BAA00D0CD34B.png?ex=67b7fb5b&is=67b6a9db&hm=484fa02bf2bbe97fb68dedd12670565cfa5276a9edbb0db21454e5a6134d95e4&" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">Wellcome to Madison Story.</h2>
            <p className="sm:text-lg text-base text-center text-gray-200">This website create for answer the qusetion.</p>
            <button
              type="button"
              className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
              Thank for join my game.
            </button>
          </div>
          กูให้มาเล่นตอบคำถามในสตอรี่กู ยังจะมาหาวิธีโกงเดี๋ยวกูตี ส่วนใครที่เจอข้อความนี้ คำตอบแรกคือนี้เลยน้อง https://www.youtube.com/watch?v=xvFZjo5PgG0 
        </div>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7"].map((answer, index) => (
          <div key={answer} className="mt-8">
            <label htmlFor={answer} className="block text-lg font-medium text-white">
              Puzzle {index + 1} ?
            </label>
            <input
              type="text"
              id={answer}
              name={answer}
              placeholder={`Answer for puzzle ${index + 1}`}
              value={answers[answer]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-blue-600"
            />
            {answers[answer] && (
              isCorrect[answer] ? (
                <p className="mt-2 text-green-600">Correct!</p>
              ) : (
                <p className="mt-2 text-red-600">Incorrect!</p>
              )
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
