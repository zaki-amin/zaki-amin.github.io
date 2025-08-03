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
    <NavigationMenu className='p-4 mt-8'>
      <NavigationMenuList className='gap-8'>
        <NavigationItem href='/experience' content={<ExperienceIcon />} />
        <NavigationItem href='/about' content={<AboutIcon />} />
        <NavigationItem href='/contact' content={<ContactIcon />} />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default AllLinks
