import React from "react"
import GitHubCalendar from "react-github-calendar"

const Stats = () => {
  return (
    <section id="stats__container" className="section">
      <h2 className="text-2xl text-center m-10">Stats</h2>
      <span className="section__subtitle">My Github Stats</span>

      <div className="container__content container">
        <div id="calender-div" className="react-activity-calendar">
          <GitHubCalendar
            username="dev-subhadeep"
            colorScheme="dark"
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
          />
        </div>
        <div id="stats-div">
          <a href="https://git.io/streak-stats" target="_blank">
            <img
              id="github-streak-stats"
              className="stats__img"
              src="https://github-readme-streak-stats.herokuapp.com?user=dev-subhadeep&theme=dark&hide_border=true"
              alt="GitHub Streak"
            />
          </a>

          <a
            href="https://github.com/anuraghazra/github-readme-stats"
            target="_blank"
          >
            <img
              id="github-stats-card"
              className="stats__img"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=dev-subhadeep&theme=dark&show_icons=true"
            />
          </a>
        </div>

        <div id="github-lang-div">
          <a href="https://github.com/anuraghazra/convoychat" target="_blank">
            <img
              id="github-top-langs"
              className="stats__img"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=dev-subhadeep&theme=dark&langs_count=8&layout=compact"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Stats
