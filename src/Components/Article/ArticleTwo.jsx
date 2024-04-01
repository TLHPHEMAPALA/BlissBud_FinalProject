import React from 'react';

// Card component
const Card = ({ title, description }) => (
  <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// FAQItem component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 overflow-hidden border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 cursor-pointer" onClick={toggleAnswer}>
        <h3 className="text-lg font-semibold text-gray-900">
          {question}
        </h3>
        <span className="text-gray-600">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Content() {
  return (
    <div className="mx-auto max- 4xl sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
        Calm Your Mind. Change Your Life.
      </h2>
      <p className="mb-8 text-lg leading-relaxed text-gray-700">
        Mental health is challenging. However, finding support doesn't have to be. Our app equips you with the tools to feel better, offering personalized content to manage stress and anxiety, improve sleep quality, and foster a greater sense of presence in your life. Relax your mind, and wake up as the person you aspire to be.
      </p>
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
        Here Are Some Proven Ways to Look After Your Mental Health
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Nutrition"
          description="Eat a well-balanced diet rich in fruits, vegetables, and whole grains."
        />
        <Card
          title="Exercise"
          description="Stay active by incorporating regular exercise into your routine."
        />
        <Card
          title="Talk"
          description="Openly communicate with someone you trust about your feelings and experiences."
        />
        <Card
          title="Stay Happy"
          description="Engage in activities that bring you joy and fulfillment on a regular basis."
        />
      </div>

      <div className="mt-12">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions 
        </h2>
        <FAQItem
          question="What is meditation?"
          answer="Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits including decreased anxiety and depression symptoms, chronic pain management, lower stress levels, and improved sleep quality."
        />
        <FAQItem
          question="What causes stress and anxiety?"
          answer="Stress and anxiety can have various causes and can differ greatly from person to person. Here are a few common factors that contribute to stress and anxiety: Major life changes, work or school pressure, financial challenges, relationships, health concerns, traumatic experiences, uncertainty and change. It's important to note that not everyone experiences stress and anxiety in the same way. If you're dealing with stress and anxiety, it's recommended to seek support from a mental health professional who can provide personalized guidance."
        />
      </div>
    </div>
  );
}
