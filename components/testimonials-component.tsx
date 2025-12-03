'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
  project: string
  category: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Solutions',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'AJ STUDIOZ transformed our business with an incredible AI chatbot that increased our customer satisfaction by 85%. The team\'s expertise in conversational AI is unmatched.',
    rating: 5,
    project: 'AI Customer Service Bot',
    category: 'AI Development',
    featured: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Global Dynamics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'The web application built by AJ STUDIOZ exceeded all our expectations. Lightning-fast performance, beautiful design, and scalable architecture. Absolutely phenomenal work!',
    rating: 5,
    project: 'Enterprise Web Platform',
    category: 'Web Development'
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Marketing Director',
    company: 'Creative Minds Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'Working with AJ STUDIOZ was a game-changer. They delivered a stunning website that perfectly captured our brand essence and increased our lead generation by 150%.',
    rating: 5,
    project: 'Brand Website Redesign',
    category: 'Design & Development'
  },
  {
    id: '4',
    name: 'David Rodriguez',
    role: 'Operations Manager',
    company: 'LogiFlow Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'The mobile app developed by AJ STUDIOZ streamlined our entire operation. Intuitive design, robust functionality, and exceptional support throughout the project.',
    rating: 5,
    project: 'Operations Mobile App',
    category: 'Mobile Development'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Founder',
    company: 'EcoTech Innovations',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'AJ STUDIOZ built us a comprehensive e-commerce platform that doubled our online sales in just 3 months. Their attention to detail and technical expertise is remarkable.',
    rating: 5,
    project: 'E-commerce Platform',
    category: 'E-commerce'
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'VP of Technology',
    company: 'DataSync Corp',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format&q=80',
    content: 'The machine learning integration AJ STUDIOZ implemented revolutionized our data processing. Smart, efficient, and incredibly powerful solutions.',
    rating: 5,
    project: 'ML Data Processing System',
    category: 'Machine Learning'
  }
]

const stats = [
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Award, label: 'Projects Completed', value: '750+' },
  { icon: TrendingUp, label: 'Success Rate', value: '98%' }
]

export default function TestimonialsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'h-4 w-4',
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        )}
      />
    ))
  }

  const featuredTestimonial = testimonials.find(t => t.featured)
  const regularTestimonials = testimonials.filter(t => !t.featured)

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Client Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovative companies 
            have to say about working with AJ STUDIOZ.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Success Story</h2>
            <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-12 w-12 text-primary/30 mb-4 mx-auto md:mx-0" />
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                      "{featuredTestimonial.content}"
                    </blockquote>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div>
                        <div className="font-bold text-lg">{featuredTestimonial.name}</div>
                        <div className="text-muted-foreground">
                          {featuredTestimonial.role} at {featuredTestimonial.company}
                        </div>
                      </div>
                      <div className="md:ml-auto">
                        <div className="flex justify-center md:justify-start mb-2">
                          {renderStars(featuredTestimonial.rating)}
                        </div>
                        <Badge variant="secondary">{featuredTestimonial.project}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">More Success Stories</h2>
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{regularTestimonials[currentIndex]?.content}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <img
                      src={regularTestimonials[currentIndex]?.image}
                      alt={regularTestimonials[currentIndex]?.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div>
                      <div className="font-bold text-lg">{regularTestimonials[currentIndex]?.name}</div>
                      <div className="text-muted-foreground">
                        {regularTestimonials[currentIndex]?.role} at {regularTestimonials[currentIndex]?.company}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(regularTestimonials[currentIndex]?.rating || 5)}
                    </div>
                    <Badge variant="secondary">{regularTestimonials[currentIndex]?.project}</Badge>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={prevTestimonial}
                      onMouseEnter={() => setAutoPlay(false)}
                      onMouseLeave={() => setAutoPlay(true)}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    
                    <div className="flex gap-2">
                      {regularTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={cn(
                            'w-3 h-3 rounded-full transition-colors',
                            index === currentIndex ? 'bg-primary' : 'bg-muted'
                          )}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextTestimonial}
                      onMouseEnter={() => setAutoPlay(false)}
                      onMouseLeave={() => setAutoPlay(true)}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">All Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-sm mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black dark:bg-white rounded-2xl p-8 md:p-12 text-white dark:text-black border-2 border-border">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl mb-8 text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Let's create something amazing together. Start your project with AJ STUDIOZ and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-gray-200 dark:border-gray-700">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-white dark:border-black text-white dark:text-black rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}