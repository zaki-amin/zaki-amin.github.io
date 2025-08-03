import { ContactIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Subsection from '@/myComponents/Subsection'
import HoverLink from '@/myComponents/navigation/HoverLink'
import EmailForm from '@/myComponents/contact/EmailForm'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

export const metadata = {
  title: 'Zaki Amin - Contact',
  description: 'The contact page of Zaki Amin',
}

export default function About() {
  return (
    <>
      <BreadcrumbWithIcon icon={<ContactIcon />} />
      <PageHeader title='Contact' />

      <Subsection title='Profiles'>
        <ul className='list-disc pl-8'>
          <li>
            <HoverLink
              href='https://www.linkedin.com/in/zaki-amin/'
              text='LinkedIn'
              icon={<LinkedinIcon size={14} />}
            />
          </li>
          <li>
            <HoverLink
              href='https://github.com/zaki-amin'
              text='GitHub'
              icon={<GithubIcon size={14} />}
            />
          </li>
        </ul>
      </Subsection>

      <Subsection title='Get In Touch!'>
        <EmailForm />
      </Subsection>
    </>
  )
}
