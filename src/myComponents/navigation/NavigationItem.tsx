'use client'

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
      <NavigationMenuLink asChild>
        <Link href={href} className='hover:text-blue-400'>
          {content}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default NavigationItem
