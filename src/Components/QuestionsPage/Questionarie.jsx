import React, { useState } from 'react';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';


export default function Questionarie() {
  const navigate = useNavigate();
  const questionarisArr = [
    {
      question: 'What is your gender identity?',
      answer: [
        { ans: 'Male', score: 1 },
        { ans: 'Female', score: 2 },
        { ans: 'Prefer not to say', score: 3 },
      ],
      isAnswered: false
    },
    {
      question: 'How old are you?',
      answer: [
        { ans: '20-22', score: 1 },
        { ans: '23-25', score: 2 },
        { ans: 'Above 25', score: 3 },
      ],
      isAnswered: false
    },
    {
      question: 'What is your relationship status?',
      answer: [
        { ans: 'In a relationship', score: 1 },
        { ans: 'Married', score: 2 },
        { ans: 'Single', score: 3 },
        { ans: 'Complicated', score: 4 },
      ],
      isAnswered: false
    },
    {
      question: 'How would you rate your current financial status?',
      answer: [
        { ans: 'Good', score: 1 },
        { ans: 'Fair', score: 2 },
        { ans: 'Poor', score: 3 },
      ],
      isAnswered: false
    },
    
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionarisArr.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
     
      const totalScore = answers.reduce((total, score) => total + score, 0);
      let route = '/songs'; 

      if (totalScore >= 0 && totalScore <= 5) {
        route = '/music'; 
      } else if (totalScore > 5 && totalScore <= 7) {
        route = '/videos'; 
      } else if (totalScore > 7 && totalScore <= 10) {
        route = '/meditation'; 
      } else {
        route = '/contact'; 
      }

      navigate(route);
    }
  };

  const currentQuestion = questionarisArr[currentQuestionIndex];

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="p-8 bg-white rounded-lg shadow-md ">
          <h2 className="mb-4 mb-5 text-2xl font-semibold text-center">Ready to Change the Way You Feel?</h2>
          <p className="text-lg text-center ">We all face daily challenges. But no matter what you're going through, there are skills you can learn that can profoundly improve mental state.</p>
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
