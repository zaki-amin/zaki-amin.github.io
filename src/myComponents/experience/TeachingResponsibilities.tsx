import { FC } from 'react'
import HoverLink from '@/myComponents/navigation/HoverLink'
import { PaintbrushIcon, School2Icon } from 'lucide-react'

const TeachingResponsibilities: FC = () => {
  return (
    <div className='space-y-2'>
      <ul className='list-disc pl-8'>
        <li>
          I support and assess development operations (DevOps) via laboratories
          and code reviews respectively.
        </li>
        <li>
          I supervise human-centred design (HCD) projects at the intersection of
          software engineering and design, in collaboration with the{' '}
          <HoverLink
            href='https://www.rca.ac.uk/'
            text='Royal College of Art'
            icon={<PaintbrushIcon size='12' />}
          />
          .
        </li>
        <li>
          I help deliver the Software Systems Engineering module, teaching the
          principles and architecture which underpin creating larger software
          systems. Topics include databases, application programming interfaces
          (APIs), containerisation and microservices.
        </li>
        <li>
          I supervise research projects in the area of learning analytics.
        </li>
        <li>
          I am an Associate Fellow of the{' '}
          <HoverLink
            href='https://www.advance-he.ac.uk/'
            text='Higher Education Academy'
            icon={<School2Icon size='12' />}
          />
          .
        </li>
      </ul>
    </div>
  )
}

export default TeachingResponsibilities
