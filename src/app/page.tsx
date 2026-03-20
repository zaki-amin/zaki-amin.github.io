import Image from 'next/image'
import AllLinks from '@/myComponents/navigation/AllLinks'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 px-2'>
      <AllLinks />

      <h1 className='text-4xl font-bold text-primary-300'>Zaki Amin</h1>

      <div className='relative aspect-square w-40 sm:w-52 md:w-64 lg:w-72'>
        <Image
          src='/zaki.jpg'
          alt='Zaki Amin'
          fill
          sizes='(min-width: 1024px) 18rem, (min-width: 768px) 16rem, (min-width: 640px) 13rem, 10rem'
          className='rounded-full object-cover'
          priority
        />
      </div>
    </div>
  )
}
