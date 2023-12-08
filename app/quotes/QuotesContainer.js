const QuotesContainer = ({ text, reference }) => {
  return (
    <div className="mx-auto mt-5 p-4 max-w-2xl bg-gray-400 dark:bg-gray-600 shadow-lg rounded-lg">
      <h3 className="text-lg md:text-xl text-gray-800 dark:text-blue-200 text-left">{text}</h3>
      {reference && (
        <p className="text-right text-blue-900 dark:text-blue-200 opacity-50 mt-4 text-sm italic">
          {reference}
        </p>
      )}
    </div>
  )
}

const quotes = [
  {
    text: 'He who has a why to live for can bear almost any how.',
    reference: 'Twilight of the Idols, "Maxims and Arrows," 1888',
  },
  {
    text: 'That which does not kill us makes us stronger.',
    reference: 'Twilight of the Idols, "Maxims and Arrows," 1888',
  },
  {
    text: 'God is dead. God remains dead. And we have killed him.',
    reference: 'The Gay Science, Section 125, "The Madman," 1882',
  },
  {
    text: 'Without music, life would be a mistake.',
    reference: 'Twilight of the Idols, "Maxims and Arrows," 1888',
  },
  {
    text: 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.',
    reference: '',
  },
  {
    text: 'In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.',
    reference: 'Beyond Good and Evil, Aphorism 156, 1886',
  },
  {
    text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
    reference: '',
  },
  {
    text: 'There are no facts, only interpretations.',
    reference: '',
  },
  {
    text: 'Whoever fights monsters should see to it that in the process he does not become a monster.',
    reference: 'Beyond Good and Evil, Aphorism 146, 1886',
  },
  {
    text: 'The man of knowledge must be able not only to love his enemies but also to hate his friends.',
    reference: 'Ecce Homo, "Why I Am So Wise," 1888',
  },
  {
    text: 'One must still have chaos in oneself to be able to give birth to a dancing star.',
    reference: 'Thus Spoke Zarathustra, "Prologue," 1883',
  },
  {
    text: 'You must have chaos within you to give birth to a dancing star.',
    reference: 'Thus Spoke Zarathustra, "Prologue," 1883',
  },
  {
    text: 'The higher we soar the smaller we appear to those who cannot fly.',
    reference: '',
  },
  {
    text: 'He who fights with monsters should look to it that he himself does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.',
    reference: 'Beyond Good and Evil, Aphorism 146, 1886',
  },
  {
    text: 'There is always some madness in love. But there is also always some reason in madness.',
    reference: 'Thus Spoke Zarathustra, "The Reading and Writing," 1883',
  },
  {
    text: 'What does not kill me, makes me stronger.',
    reference: 'Twilight of the Idols, "Maxims and Arrows," 1888',
  },
  {
    text: 'When you look into an abyss, the abyss also looks into you.',
    reference: 'Beyond Good and Evil, Aphorism 146, 1886',
  },
  {
    text: 'Art is the proper task of life.',
    reference: '',
  },
  {
    text: 'Do not forget that the laughter is not an evil.',
    reference: '',
  },
  {
    text: 'He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.',
    reference: '',
  },
  {
    text: 'The earth has a skin and that skin has diseases; one of its diseases is called man.',
    reference: 'Thus Spoke Zarathustra, "The Bestowing Virtue," 1883',
  },
  {
    text: 'All truly great thoughts are conceived while walking.',
    reference: 'Twilight of the Idols, "Maxims and Arrows," 1888',
  },
  {
    text: 'Everything in woman is a riddle, and everything in woman hath one solution — it is called pregnancy.',
    reference: 'Thus Spoke Zarathustra, "Of Old and Young Women," 1883',
  },
  // Continuing from the previous array...
  {
    text: 'The doer alone learneth.',
    reference: '',
  },
  {
    text: 'A good writer possesses not only his own spirit but also the spirit of his friends.',
    reference: '',
  },
  {
    text: 'All things are subject to interpretation whichever interpretation prevails at a given time is a function of power and not truth.',
    reference: '',
  },
  {
    text: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
    reference: '',
  },
  {
    text: 'We have art in order not to die of the truth.',
    reference: '',
  },
  {
    text: "I am not upset that you lied to me, I am upset that from now on I can't believe you.",
    reference: '',
  },
  {
    text: 'He who has a why to live can bear almost any how.',
    reference: '',
  },
  {
    text: 'The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.',
    reference: '',
  },
  {
    text: 'Man is the cruelest animal.',
    reference: 'Thus Spoke Zarathustra, "The Flies in the Market-Place," 1883',
  },
  {
    text: 'In heaven, all the interesting people are missing.',
    reference: '',
  },
  {
    text: 'He who climbs upon the highest mountains laughs at all tragedies, real or imaginary.',
    reference: '',
  },
  {
    text: 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.',
    reference: '',
  },
  {
    text: 'The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.',
    reference: '',
  },
  {
    text: 'There is more wisdom in your body than in your deepest philosophy.',
    reference: '',
  },
  {
    text: 'What is good? All that heightens the feeling of power, the will to power, power itself in man. What is bad? All that proceeds from weakness.',
    reference: '',
  },
  {
    text: 'The visionary lies to himself, the liar only to others.',
    reference: '',
  },
  {
    text: 'I would believe only in a God that knows how to dance.',
    reference: 'Thus Spoke Zarathustra, "The Dancing Song," 1883',
  },
  {
    text: 'In every real man a child is hidden that wants to play.',
    reference: '',
  },
]

export const QuotesContainerComponent = () => {
  return (
    <div className="space-y-4">
      {quotes.map((quote, index) => (
        <QuotesContainer key={index} text={quote.text} reference={quote.reference} />
      ))}
    </div>
  )
}
