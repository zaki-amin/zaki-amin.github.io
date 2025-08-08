import { icons } from 'lucide-react'
import { FC, ReactNode } from 'react'

interface IconWithTextProps {
  icon: ReactNode
  text: string
}

const IconWithText: FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <span className='flex items-center gap-2'>
      <p className='text-lg'>{text}</p>
      <span>{icon}</span>
    </span>
  )
}

const ICON_SIZE = '16'

export const HomeIcon: FC = () => {
  return <IconWithText icon={<icons.House size={ICON_SIZE} />} text='Home' />
}

export const ExperienceIcon: FC = () => {
  return (
    <IconWithText
      icon={<icons.BriefcaseBusiness size={ICON_SIZE} />}
      text='Experience'
    />
  )
}

export const AboutIcon: FC = () => {
  return (
    <IconWithText
      icon={<icons.CircleUserRound size={ICON_SIZE} />}
      text='About'
    />
  )
}

export const ContactIcon: FC = () => {
  return (
    <IconWithText icon={<icons.Mailbox size={ICON_SIZE} />} text='Contact' />
  )
}
