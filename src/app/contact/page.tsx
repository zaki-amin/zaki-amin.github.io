import { ContactIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Subsection from '@/myComponents/Subsection'
import HoverLink from '@/myComponents/navigation/HoverLink'
import EmailForm from '@/myComponents/contact/EmailForm'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export const metadata = {
  title: 'Zaki Amin - Contact',
  description: 'The contact page of Zaki Amin',
}

export default function About() {
  const ICON_SIZE = 14

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
              icon={<LinkedinIcon size={ICON_SIZE} />}
            />
          </li>
          <li>
            <HoverLink
              href='https://github.com/zaki-amin'
              text='GitHub'
              icon={<GithubIcon size={ICON_SIZE} />}
            />
          </li>
          <li>
            <HoverLink
              href='mailto:zaki.s.amin.17@gmail.com'
              text='Email'
              icon={<MailIcon size={ICON_SIZE} />}
            />
            <p className='ml-6 text-sm text-gray-300'>
              Prefer a direct note? I typically reply within 24 hours.
            </p>
          </li>
        </ul>
      </Subsection>

      <Subsection title='Get In Touch!'>
        <EmailForm />
      </Subsection>
    </>
  )
}
