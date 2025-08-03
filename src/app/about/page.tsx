import Subsection from '@/myComponents/Subsection'
import { AboutIcon } from '@/myComponents/IconWithText'
import Education from '@/myComponents/about/Education'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import Hobbies from '@/myComponents/about/Hobbies'

export const metadata = {
  title: 'Zaki Amin - About',
  description: 'The about page of Zaki Amin',
}

export default function About() {
  return (
    <>
      <BreadcrumbWithIcon icon={<AboutIcon />} />
      <PageHeader title='About' />

      <Subsection title='Education'>
        <Education />
      </Subsection>

      <Subsection title='Hobbies'>
        <Hobbies />
      </Subsection>
    </>
  )
}
