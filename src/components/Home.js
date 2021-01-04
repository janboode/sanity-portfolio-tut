import React from "react"

import toy from "../assets/img/toy2.png"

const Home = () => {
  return (
    <main className="relative">
      <img src={toy} alt="toy" className="absolute object-cover w-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Lik me toges.
        </h1>
      </section>
    </main>
  )
}

export default Home
