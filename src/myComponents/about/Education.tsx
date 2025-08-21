import { Card, CardContent } from '@/components/ui/card'
import { Award, Flag, Newspaper, School, Scroll } from 'lucide-react'
import { FC } from 'react'

const EducationContent: FC = () => (
  <div className='space-y-6'>
    {/* Imperial */}
    <div className='flex items-start gap-4'>
      <div className='bg-blue-100 p-2 rounded-full mt-1'>
        <School className='h-6 w-6 text-gray-600' />
      </div>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold'>Imperial College London</h3>
        <p className='text-base text-slate-300'>
          Master&#39;s of Engineering (MEng) in Computing
        </p>

        <div className='mt-4 space-y-4'>
          <div className='flex items-start gap-2 md:gap-3'>
            <Scroll className='h-7 w-7 md:h-5 md:w-5 text-blue-400 mt-0.5' />
            <p className='text-slate-400'>
              Achieved first-class honours (1:1) and graduated on the Dean&#39;s
              List as part of the the top 10% of students.
            </p>
          </div>

          <div className='flex items-start gap-2 md:gap-3'>
            <Newspaper className='h-7 w-7 md:h-5 md:w-5 text-green-600 mt-0.5' />
            <p className='text-slate-400'>
              Member of the Choir, Wind Band and Ultimate Frisbee societies.
              Academic representative for 2 years and member of the Engineering
              committee, organizing faculty-level events.
            </p>
          </div>

          <div className='flex items-start gap-2 md:gap-3'>
            <Award className='h-7 w-7 md:h-5 md:w-5 text-amber-500 mt-0.5' />
            <p className='text-slate-400'>
              Winner of 4 awards: Old Centralians&#39; Trust: Student Activity
              Award, Outstanding Service Award, CGCA John Elliott Award, CGCU
              Half Colours
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-start gap-4'>
      <div className='bg-red-100 p-2 rounded-full mt-1'>
        <Flag className='h-8 w-8 md:h-6 md:w-6 text-red-600' />
      </div>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold'>
          Universidad Politécnica de Madrid
        </h3>
        <p className='text-base text-slate-300'>
          Research project in the biomedical group on machine translation for
          clinical texts and ontologies / Un proyecto de investigación en el
          grupo de informática biomédica sobre la traducción automática de
          textos clínicos y ontologías.
        </p>
      </div>
    </div>
  </div>
)

const Education: FC = () => {
  return (
    <>
      {/* Card only on medium and up */}
      <Card className='hidden md:block w-full shadow-md border-2 border-red-200'>
        <CardContent>
          <EducationContent />
        </CardContent>
      </Card>

      {/* Visible only on mobile */}
      <div className='block md:hidden'>
        <EducationContent />
      </div>
    </>
  )
}

export default Education
