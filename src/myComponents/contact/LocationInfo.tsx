'use client'

import { FC, useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

const LocationInfo: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const londonTime = new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setCurrentTime(londonTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-start gap-3'>
      <Globe className='mt-1 text-blue-400' size={20} />
      <div>
        <p className='text-base'>
          <span className='font-semibold'>Location:</span> London, United
          Kingdom
        </p>
        <p className='text-base'>
          <span className='font-semibold'>Timezone:</span> Europe/London (GMT/BST)
        </p>
        <p className='text-base'>
          <span className='font-semibold'>Current Time:</span>{' '}
          {currentTime || 'Loading...'}
        </p>
      </div>
    </div>
  )
}

export default LocationInfo
