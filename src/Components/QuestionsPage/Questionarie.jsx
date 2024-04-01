import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';

export default function Questionarie() {
  const questionarisArr = [
    {
      question: 'How would you rate your current workload or academic demands?',
      answer: [
        { ans: 'Low workload', score: 1 },
        { ans: 'Moderate workload', score: 2 },
        { ans: 'High workload', score: 3 },
      ],
      isAnswered: false
    },
    // Add more questions...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questionarisArr[currentQuestionIndex];

  if (!currentQuestion) {
    // All questions answered, navigate to dashboard or any other route
    // You can replace '/dashboard' with your desired route
    return <Link to="/dashboard">Go to Dashboard</Link>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="p-8 bg-white rounded-lg shadow-md ">
          <h2 className="mb-4 text-2xl font-semibold text-center">Ready to Change the Way You Feel?</h2>
          <p className="text-lg text-center">We all face daily challenges. But no matter what you're going through, there are skills you can learn that can profoundly improve mental state.</p>
        </div>
        <div className="w-full max-w-lg mt-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="pb-2 text-lg font-semibold text-blue-700">{currentQuestion.question}</p>
            <ul>
              {currentQuestion.answer.map((ans, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(ans.score)}
                  className="flex items-center py-2 pl-4 my-1 text-sm transition duration-200 ease-in-out transform bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
                >
                  <span className="flex items-center justify-center w-6 h-6 mr-2 bg-white border border-gray-400 rounded-full">{index + 1}</span>
                  <span>{ans.ans}</span>
                </li>
              ))}
              {currentQuestion.isAnswered ? <p className="text-sm text-green-600">Answered</p> : <p className="text-sm text-gray-500">Not Answered</p>}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
