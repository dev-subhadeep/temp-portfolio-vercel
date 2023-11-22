import React from "react"

const Home = () => {
  return (
    <div id="home" className="flex">
      <div>
        <img
          src="/portfolio_image.jpg"
          alt="Subhadeep"
          className="home-img w-40"
        />
      </div>
      <div className="mx-20">
        <h1 id="user-detail-name" className="text-3xl font-bold">
          Subhadeep
        </h1>
        <h2 className="text-2xl" id="user-detail-intro">
          Hi, I am a fullstack deveoper
        </h2>
      </div>
    </div>
  )
}

export default Home
