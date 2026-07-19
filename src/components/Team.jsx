import React from 'react'

export default function Team() {
  return (
    <section className="py-24 bg-[#010122] text-white">
      

      {/* Top Row  */}
      <div className="container-custom grid md:grid-cols-2 gap-12 mb-16">
        {/* CEO */}
        <div className="flex items-center gap-6">
          <img
            src="/tumelo.jpg"
            alt="Tumelo Mokoena - CEO"
            className="w-40 h-40 rounded-2xl object-cover shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-xl font-semibold">Tumelo Mokoena</h3>
            <p className="text-gray-400">Chief Executive Officer</p>
          </div>
        </div>

        {/* alex */}
        <div className="flex items-center gap-6">
          <img
            src="/alexander.jpg"
            alt="Alexander Warrington"
            className="w-40 h-40 rounded-2xl object-cover shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-xl font-semibold">Alexander Warrington</h3>
            <p className="text-gray-400">Systems & Mechanical Developer</p>
          </div>
        </div>
      </div>

      {/* Bottom Row – Team */}
      <div className="container-custom grid md:grid-cols-3 gap-12">
        {/* EEsa */}
        <div className="flex items-center gap-6">
          <img
            src="/eesa.jpg"
            alt="Eesa Sulaiman - CTO"
            className="w-40 h-40 rounded-2xl object-cover shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Eesa Sulaiman</h3>
            <p className="text-gray-400">Chief Technology Officer</p>
          </div>
        </div>

        {/* zinzi */}
        <div className="flex items-center gap-6">
          <img
            src="/zinzi.jpg"
            alt="Zinzi Mdhluli"
            className="w-40 h-40 rounded-2xl object-cover shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Zinzi Mdhluli</h3>
            <p className="text-gray-400">Software & Backend Developer</p>
          </div>
        </div>

        {/* hangaa */}
        <div className="flex items-center gap-6">
          <img
            src="/hangandiiwe.jpg"
            alt="Hangandiiwe Mamphaga"
            className="w-40 h-40 rounded-2xl object-cover shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Hangandiiwe Mamphaga</h3>
            <p className="text-gray-400">Finance & Operations Lead</p>
          </div>
        </div>
      </div>
    </section>
  )
}
