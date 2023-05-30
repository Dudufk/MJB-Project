// eslint-disable-next-line no-unused-vars
import { FaCalculator, FaChartBar, FaUsers } from 'react-icons/fa'
import { GiLion } from 'react-icons/gi'

type Icons = 'FaCalculator' | 'FaChartBar' | 'FaUsers' | 'GiLion'

interface FlipCardProps {
  text: string
  subText: string
  verseText: string
  icon: Icons
}

export default function FlipCard(props: FlipCardProps) {
  return (
    <div className="group h-[215px] w-[280px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl bg-white text-black shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 px-8 py-12">
          <FaCalculator
            className={`mb-4 text-3xl text-primary ${
              props.icon !== 'FaCalculator' ? 'hidden' : ''
            }`}
          />
          <FaChartBar
            className={`mb-4 text-3xl text-primary ${
              props.icon !== 'FaChartBar' ? 'hidden' : ''
            }`}
          />
          <FaUsers
            className={`mb-4 text-3xl text-primary ${
              props.icon !== 'FaUsers' ? 'hidden' : ''
            }`}
          />
          <GiLion
            className={`mb-4 text-3xl text-primary ${
              props.icon !== 'GiLion' ? 'hidden' : ''
            }`}
          />
          <p className="text-2xl font-semibold">{props.text}</p>
          <p>{props.subText}</p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-primary px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p>{props.verseText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
