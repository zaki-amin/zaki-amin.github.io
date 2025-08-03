import { FC } from 'react'
import { Badge } from '@/components/ui/badge'

interface SkillCategoryProps {
  title: string
  items: { name: string; color: string }[]
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, items }) => (
  <div>
    <h3 className='text-sm font-bold mb-2'>{title}</h3>
    <div className='flex flex-wrap gap-2'>
      {items.map((item) => (
        <Badge
          key={item.name}
          variant='secondary'
          className={`${item.color} text-white hover:${item.color}`}
        >
          {item.name}
        </Badge>
      ))}
    </div>
  </div>
)

const SkillsDisplay: FC = () => {
  const skills = {
    languages: [
      { name: 'Python', color: 'bg-sky-600' },
      { name: 'Java', color: 'bg-orange-500' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-600' },
      { name: 'C', color: 'bg-gray-500' },
      { name: 'Kotlin', color: 'bg-purple-500' },
      { name: 'Scala', color: 'bg-red-500' },
      { name: 'Elixir', color: 'bg-purple-700' },
    ],
    frameworks: [
      { name: 'React', color: 'bg-cyan-500' },
      { name: 'Node.js', color: 'bg-green-700' },
      { name: 'Next.js', color: 'bg-black' },
      { name: 'FastAPI', color: 'bg-teal-600' },
      { name: 'Flask', color: 'bg-blue-600' },
      { name: 'SQLAlchemy', color: 'bg-gray-600' },
      { name: 'PyTorch', color: 'bg-red-700' },
    ],
    general: [
      { name: 'Organisation', color: 'bg-indigo-500' },
      { name: 'Planning', color: 'bg-pink-500' },
      { name: 'Communication', color: 'bg-green-700' },
      { name: 'Presentations', color: 'bg-orange-800' },
      { name: 'Teaching', color: 'bg-pink-700' },
      { name: 'Mentoring', color: 'bg-orange-700' },
    ],
  }

  return (
    <div>
      <div className='space-y-4'>
        <SkillCategory title='Programming Languages' items={skills.languages} />
        <SkillCategory
          title='Frameworks & Libraries'
          items={skills.frameworks}
        />
        <SkillCategory title='General' items={skills.general} />
      </div>
    </div>
  )
}

export default SkillsDisplay
