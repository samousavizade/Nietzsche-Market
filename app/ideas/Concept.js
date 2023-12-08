const concepts = [
  {
    id: 1,
    title: 'Will to Power',
    content:
      'Nietzsche proposed the "will to power" as the main driving force in humans: our intrinsic desire to reach the utmost potential and assert power over ourselves and our environment.',
  },
  {
    id: 2,
    title: 'Eternal Recurrence',
    content:
      'A central theme in Nietzsche’s philosophy, the concept of eternal recurrence is the idea that the universe and all existence and energy has been recurring, and will continue to recur, in a self-similar form an infinite number of times across infinite time or space.',
  },
  {
    id: 3,
    title: 'Master-Slave Morality',
    content:
      'Nietzsche distinguished between two types of morality: master morality, which springs actively from the "noble man", and slave morality, which develops reactively within the weak man. These two moralities are not simple inversions of one another; they are separate and intricate.',
  },
  {
    id: 4,
    title: 'Übermensch',
    content:
      'The Übermensch, often translated as "Superman" or "Overman", is a concept in Nietzsche’s philosophy that represents a being who has transcended the limitations of society, conventional morality, and religion.',
  },
  {
    id: 5,
    title: 'God is Dead',
    content:
      'Nietzsche’s assertion "God is dead" signifies the end of Christianity as the central source of moral authority. It reflects his belief in the decline of traditional religious faith and metaphysical foundations.',
  },
  {
    id: 6,
    title: 'Nihilism',
    content:
      'Nietzsche discusses nihilism extensively, which he describes as the devaluation of the highest values posited by the ascetic ideal. He sees nihilism as an outcome of repeated frustrations in the search for meaning.',
  },
  {
    id: 7,
    title: 'Aesthetics',
    content:
      'Nietzsche believed that art is the highest form of human activity and that it justifies existence. He considered the aesthetic experience as a means of countering the nihilistic consequences of the death of God.',
  },
  {
    id: 8,
    title: 'Perspectivism',
    content:
      'Nietzsche introduced the idea of perspectivism, which posits that knowledge is always from a particular perspective and that there are no objective truths, only interpretations conditioned by various factors.',
  },
  // Add more Nietzschean concepts here if needed
]

import { useState } from 'react'

const Concept = ({ title, content, onToggle, isActive }) => {
  // Animation classes for the flash effect
  const activeClasses = 'border-0 bg-gray-300 dark:bg-gray-700'
  const inactiveClasses = 'border-transparent'
  const flashEffect = 'transition-all duration-300 ease-in-out transform hover:scale-105'

  return (
    <div
      className={`${
        isActive ? activeClasses : inactiveClasses
      } ${flashEffect} overflow-hidden rounded-2xl`}
    >
      <button
        className={`w-full text-left py-3 px-5 focus:outline-none ${
          isActive ? 'font-semibold' : ''
        }`}
        onClick={onToggle}
      >
        {title}
      </button>
      <div
        className={`px-5 py-1 transition-height duration-400 ease-in-out ${
          isActive ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

const ConceptsAccordion = () => {
  const [activeId, setActiveId] = useState(null)

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="space-y-2">
      {concepts.map((concept) => (
        <Concept
          key={concept.id}
          title={concept.title}
          content={concept.content}
          isActive={activeId === concept.id}
          onToggle={() => toggleItem(concept.id)}
        />
      ))}
    </div>
  )
}

export default ConceptsAccordion
