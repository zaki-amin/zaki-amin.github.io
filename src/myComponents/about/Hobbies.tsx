import { FC } from 'react'
import { HeadphonesIcon, icons } from 'lucide-react'
import HoverLink from '@/myComponents/navigation/HoverLink'

const Hobbies: FC = () => {
  return (
    <ul className='list-disc pl-4'>
      <li>
        <span className='flex gap-2'>
          Music <icons.Music />
        </span>
        <ul className='list-disc pl-4'>
          <li>I play the flute in a concert band</li>
          <li>
            I sing, write and produce pop + R&B music which you can check out on
            my{' '}
            <HoverLink
              href='https://open.spotify.com/artist/0RxI4VysFDQKWlBRzxbv5x?si=mIadSc6jRmq1cpeFqxd96A'
              text='Spotify'
              icon={<HeadphonesIcon size={14} />}
            />
          </li>
        </ul>
      </li>
      <li>
        I enjoy city exploration: photography, long walks, travelling and coffee
      </li>
    </ul>
  )
}

export default Hobbies
