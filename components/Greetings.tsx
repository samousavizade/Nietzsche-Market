import React from 'react'
import Link from 'next/link'
import { Chip } from '@mui/material'
import Image from 'next/image'
import MainImage from 'public/main_image.jpeg'
const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r mt-5 from-red-700 to-gray-700 bg-clip-text text-4xl font-extrabold text-transparent">
        Welcome to <b>Nietzsche Market</b> website,
      </h1>
      <div className="relative w-full h-[1000px]">
        <Image
          src={MainImage}
          alt={'main'}
          layout="fill"
          objectFit="contain" // Use 'cover' if you want to fill the height and crop the image instead
          quality={100}
        />
      </div>
      <div className="prose dark:prose-dark lg:prose-lg mt-4 mx-auto">
        <p>
          Friedrich Nietzsche was a German philosopher, cultural critic, composer, poet, and
          philologist whose work has exerted a profound influence on modern intellectual history.
          Born on October 15, 1844, in Röcken, Prussia, Nietzsche's body of work touched a wide
          variety of topics, including art, philology, history, religion, tragedy, culture, and
          science. His most famous works include "Thus Spoke Zarathustra" (1883–85), "Beyond Good
          and Evil" (1886), and "The Genealogy of Morals" (1887).
        </p>
        <p>
          Central to Nietzsche's philosophy is the idea of <b>life-affirmation</b>, which involves
          an honest questioning of all doctrines that drain life's expansive energies, however
          socially prevalent those views might be. Often associated with existentialism, his
          philosophy is marked by radical critiques of traditional European morality and religion,
          as well as of conventional philosophical ideas and social and political pieties associated
          with modernity.
        </p>
        <p>
          Nietzsche's concept of the <b>Übermensch</b>, or "Overman", is one of his most significant
          contributions to philosophy. This concept describes a being who has overcome the human
          condition and reached a higher state of existence, beyond established morality and
          conventional understanding of good and evil.
        </p>
        <p>
          Regarding knowledge and truth, Nietzsche was critical of the concept of objective reality,
          arguing that knowledge is often an expression of power dynamics. He introduced the concept
          of <b>perspectivism</b>, which suggests that there are many different interpretations and
          perspectives of the world, none of which can claim to be the final or absolute truth.
        </p>
        <p>
          Nietzsche's thoughts on <b>morality</b> are profoundly influential, especially his
          critique of Christian morality. He believed that the traditional moral values of society
          were not natural or universal but were instead a product of a particular historical
          context.
        </p>
        <p>
          In <b>art and aesthetics</b>, Nietzsche saw the potential for art to serve as a
          counterforce to the decline of culture and society. He believed that through art,
          individuals could affirm their existence and assert their will to power.
        </p>
        <p>
          Nietzsche's influence remains pervasive within and beyond philosophy, notably in
          existentialism and postmodernism. His ideas continue to be debated and discussed, with his
          writings challenging readers to question the foundations of their beliefs and values.
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <p>
            Friedrich Nietzsche selected quotes also written in
            <Link href="https://t.me/my_fav_quote">
              <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                label="Website"
                className={'bg-gray-500 text-white dark:text-dark '}
                variant={'filled'}
              />
            </Link>{' '}
            Telegram channel and
            <Link href="https://twitter.com/niche_market">
              <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                className={'bg-gray-500 text-white dark:text-dark '}
                label="Twitter"
                variant={'filled'}
              />
            </Link>
            Twitter.
          </p>
        </div>
        <h2>Todos:</h2>
        <ol>
          <li>Podcasts, Voices, ...</li>
          <li>Books to download in persian and english.</li>
        </ol>
      </div>
    </div>
  )
}

export default Greetings
