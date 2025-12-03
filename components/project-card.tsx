'use client'

import { useState } from 'react'
import { ExternalLink, Github, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  category: string
  title: string
  description: string
  link: string
  tags: string[]
  image?: string
}

const ProjectCard = ({ category, title, description, link, tags, image }: ProjectCardProps) => {
  const [liked, setLiked] = useState<boolean>(false)

  const getCategoryGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      'Education': 'from-blue-500 to-cyan-400',
      'Geolocation': 'from-green-500 to-emerald-400', 
      'Business': 'from-purple-500 to-violet-400',
      'Entertainment': 'from-pink-500 to-rose-400',
      'Web Tool': 'from-orange-500 to-amber-400',
      'AI Tool': 'from-indigo-500 to-blue-400',
      'Development Tool': 'from-slate-500 to-gray-400',
      'default': 'from-neutral-600 to-violet-300'
    }
    return gradients[category] || gradients['default']
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Education': '🎓',
      'Geolocation': '📍',
      'Business': '💼', 
      'Entertainment': '🎵',
      'Web Tool': '🛠️',
      'AI Tool': '🤖',
      'Development Tool': '💻'
    }
    return icons[category] || '🚀'
  }

  return (
    <div className={`relative max-w-md rounded-xl bg-gradient-to-r ${getCategoryGradient(category)} pt-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <div className='flex h-48 items-center justify-center p-6'>
        {image ? (
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        ) : (
          <div className='flex flex-col items-center justify-center text-white'>
            <div className='text-6xl mb-4'>{getCategoryIcon(category)}</div>
            <Badge variant='secondary' className='bg-white/20 text-white border-white/30'>
              {category}
            </Badge>
          </div>
        )}
      </div>
      
      <Button
        size='icon'
        onClick={() => setLiked(!liked)}
        className='bg-white/10 hover:bg-white/20 absolute top-4 right-4 rounded-full border border-white/30'
      >
        <Heart className={cn(
          'w-4 h-4 transition-colors',
          liked ? 'fill-red-500 stroke-red-500' : 'stroke-white'
        )} />
        <span className='sr-only'>Like</span>
      </Button>
      
      <Card className='border-none rounded-t-none'>
        <CardHeader>
          <CardTitle className='text-lg'>{title}</CardTitle>
          <CardDescription className='flex items-center gap-2 flex-wrap'>
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant='outline' className='rounded-sm text-xs'>
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant='outline' className='rounded-sm text-xs'>
                +{tags.length - 3}
              </Badge>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground line-clamp-3'>
            {description}
          </p>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='text-xs font-medium uppercase text-muted-foreground'>Category</span>
            <span className='text-sm font-semibold'>{category}</span>
          </div>
          <div className='flex gap-2 max-sm:w-full'>
            <Button 
              size='sm' 
              variant='outline' 
              className='max-sm:flex-1'
              onClick={() => window.open(`${link}`, '_blank')}
            >
              <ExternalLink className='w-4 h-4 mr-1' />
              View
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard