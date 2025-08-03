import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { FC, ReactNode } from 'react'

interface NavigationItemProps {
  href: string
  content: ReactNode
}

const NavigationItem: FC<NavigationItemProps> = ({ href, content }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className='hover:text-blue-400'>
          {content}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default NavigationItem
