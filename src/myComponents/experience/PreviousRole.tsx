import { FC } from 'react'

interface PreviousRoleProps {
  company: string
  timespan: string
  description: string
}

const PreviousRole: FC<PreviousRoleProps> = ({
  company,
  timespan,
  description,
}) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h3 className='font-extrabold'>{company}</h3>
        <p className='text-gray-400 font-semibold'>{timespan}</p>
      </div>
      <p className='text-slate-350 font-light'>{description}</p>
    </div>
  )
}

export default PreviousRole
