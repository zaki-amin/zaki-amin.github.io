import { FC, ReactNode } from 'react'

interface PageFrameProps {
  children: ReactNode
}

const PageFrame: FC<PageFrameProps> = ({ children }) => {
  return <div className='min-h-screen flex flex-col py-16 gap-8'>{children}</div>
}

export default PageFrame
