import { FC, ReactNode } from 'react'

interface SubsectionProps {
  title: string
  children: ReactNode
}

const Subsection: FC<SubsectionProps> = ({ title, children }) => {
  return (
    <div className='px-4 md:px-16'>
      <h2 className='text-2xl font-semibold py-2 text-secondary-300'>
        {title}
      </h2>
      <div className='ml-2'>{children}</div>
    </div>
  )
}

export default Subsection
