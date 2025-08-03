import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { LinkIcon } from 'lucide-react'

interface HoverLinkProps {
  href: string
  text: string
  icon?: ReactNode
}

const HoverLink: FC<HoverLinkProps> = ({ href, text, icon }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='inline-flex items-center gap-1 text-blue-400 hover:text-green-400'
    >
      {icon ? icon : <LinkIcon size={14} />}
      {text}
    </Link>
  )
}

export default HoverLink