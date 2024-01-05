import React from 'react'
import Card from '@/components/Card'

const NewsStories: React.FC = () => {
  return (
    <main className="flex items-center justify-center">
        <section className="container w-10/12">
        <Card apiUrl={process.env.NEXT_PUBLIC_POSTS_API} />
        </section>
    </main>
  )
}

export default NewsStories