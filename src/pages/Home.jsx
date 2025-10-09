import React from 'react'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container-custom py-20">
        <h2 className="text-3xl font-semibold mb-6">Overview</h2>
        <p className="text-sgts-soft max-w-2xl">SafeGuard Technologies provides an autonomous drone response system designed to increase situational awareness and reduce response times for security teams.</p>
      </section>
    </div>
  )
}
