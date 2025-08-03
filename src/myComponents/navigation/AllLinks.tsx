import { FC } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import NavigationItem from '@/myComponents/navigation/NavigationItem'
import {
  AboutIcon,
  ContactIcon,
  ExperienceIcon,
} from '@/myComponents/IconWithText'

const AllLinks: FC = () => {
  return (
    <NavigationMenu className='p-2 sm:p-4 mt-4 sm:mt-8 w-full'>
      <NavigationMenuList className='flex-nowrap gap-2 sm:gap-4 justify-center w-full text-sm sm:text-base'>
        <NavigationItem href='/experience' content={<ExperienceIcon />} />
        <NavigationItem href='/about' content={<AboutIcon />} />
        <NavigationItem href='/contact' content={<ContactIcon />} />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default AllLinks
