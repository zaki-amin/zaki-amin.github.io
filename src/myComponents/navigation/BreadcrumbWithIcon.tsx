import { FC, ReactNode } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { HomeIcon } from '@/myComponents/IconWithText'

interface BreadcrumbWithIconProps {
  icon: ReactNode
}

const BreadcrumbWithIcon: FC<BreadcrumbWithIconProps> = ({ icon }) => {
  return (
    <Breadcrumb className='px-1 py-1 md:px-8 md:py-3'>
      <BreadcrumbList className="text-[10px] md:text-sm gap-2">
        <BreadcrumbItem>
          <BreadcrumbLink href='/' className="[&>svg]:w-3 [&>svg]:h-3 md:[&>svg]:w-5 md:[&>svg]:h-5">
            <HomeIcon />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:w-2.5 [&>svg]:h-2.5 md:[&>svg]:w-3.5 md:[&>svg]:h-3.5" />
        <BreadcrumbItem>
          <BreadcrumbPage className="whitespace-normal max-w-none text-gray-400">{icon}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbWithIcon
