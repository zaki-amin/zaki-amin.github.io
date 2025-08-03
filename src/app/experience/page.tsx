import Subsection from '@/myComponents/Subsection'
import SkillsBadges from '@/myComponents/experience/SkillsBadges'
import { ExperienceIcon } from '@/myComponents/IconWithText'
import BreadcrumbWithIcon from '@/myComponents/navigation/BreadcrumbWithIcon'
import PageHeader from '@/myComponents/layout/PageHeader'
import CurrentRoleSummary from '@/myComponents/experience/CurrentRoleSummary'
import PreviousRole from '@/myComponents/experience/PreviousRole'

export const metadata = {
  title: 'Zaki Amin - Experience',
  description: 'The experience page of Zaki Amin',
}

export default function Experience() {
  return (
    <>
      <BreadcrumbWithIcon icon={<ExperienceIcon />} />
      <PageHeader title='Experience' />

      <Subsection title='Current role'>
        <div className='space-y-6 px-2'>
          <CurrentRoleSummary />
        </div>
      </Subsection>

      <Subsection title='Skills'>
        <SkillsBadges />
      </Subsection>

      <Subsection title='Previous roles'>
        <div className='space-y-4 px-2'>
          <PreviousRole
            company='BidFX (now SGX FX)'
            timespan='Apr - Aug 2023'
            description='Software engineer intern at a foreign exchange fintech, focusing on distributed systems and continuous integration (CI) pipelines using Java. I worked on architecting microservices, implemented a reporting tool to collect and analyse test results, and refactored regression test suites including UI automation tests.'
          />
          <PreviousRole
            company='BP'
            timespan='Jun - Sep 2022'
            description='Software engineer intern at an energy company, working on autonomous robotics for electric vehicles. In a small team, I designed and simulated an autonomous robotic arm to charge electric vehicles using Python and NVIDIA&#39;s Isaac Sim.'
          />
        </div>
      </Subsection>
    </>
  )
}
