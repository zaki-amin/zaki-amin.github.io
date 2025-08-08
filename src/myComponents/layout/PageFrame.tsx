import { FC, ReactNode } from 'react'

interface PageFrameProps {
  children: ReactNode
}

const PageFrame: FC<PageFrameProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col py-8 md:py-16 gap-6 md:gap-10 px-4 md:px-6 lg:px-8'>
      {children}
    </div>
  )
}
export default PageFrame
