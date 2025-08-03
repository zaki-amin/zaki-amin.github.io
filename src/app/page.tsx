import Image from 'next/image'
import AllLinks from '@/myComponents/navigation/AllLinks'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4'>
        <AllLinks />

        <h1 className='text-4xl font-bold text-primary-300'>Zaki Amin</h1>
        <h3 className='text-2xl text-teal-200'>(zah - key ah - mean)</h3>

        <Image
          src='/zaki.jpg'
          alt='Zaki Amin'
          width={300}
          height={300}
          className='rounded-full'
        />
      </div>
    </>
  )
}
