import { FC } from 'react'
import HoverLink from '@/myComponents/navigation/HoverLink'
import { NewspaperIcon } from 'lucide-react'

interface ResearchPaperProps {
  title: string
  link: string
}

const ResearchPaper: FC<ResearchPaperProps> = ({ title, link }) => {
  return (
    <p>
      <HoverLink href={link} text={title} icon={<NewspaperIcon size={14} />} />
    </p>
  )
}

const Research: FC = () => {
  return (
    <div className='space-y-4'>
      <p>
        My ORCID is{' '}
        <HoverLink
          href='https://orcid.org/0009-0000-9003-2185'
          text='0009-0000-9003-2185'
        />
        .<br />
        Co-author of 3 papers on software engineering education with fellow
        members of the Department of Computing&#39;s Educational Technology lab
        at Imperial College London.
      </p>

      <div className='space-y-2'>
        <ul className='list-disc pl-8'>
          <li>
            <ResearchPaper
              title='Creating a Student-Friendly PaaS Platform: Experiences with Tsuru in Software Engineering Education'
              link='https://conf.researchr.org/details/fse-2025/fse-2025-software-engineering-education/12/Creating-a-Student-Friendly-PaaS-Platform-Experiences-with-Tsuru-in-Software-Enginee'
            />
          </li>
          <li>
            <ResearchPaper
              title='Creating an Open-Source Ecosystem for Contextualized Learning in Software Engineering'
              link='https://ocs.editorial.upv.es/index.php/HEAD/HEAd25/paper/view/20104'
            />
          </li>
          <li>
            <ResearchPaper
              title='Beyond Coding: Lean Learning for Real-World Software Engineering'
              link='https://epc.ac.uk/event/uk-and-ireland-engineering-education-research-network-annual-symposium-2/'
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Research
