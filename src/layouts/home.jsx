const Home = () => {
  return (
      <div id="home">
          <section id={"description"} >
              <h2>description</h2>
              <div id={"Parcours"} className={"grid-cols-3"}>
                  <article>
                      <h3>Parcours</h3>
                      <p></p>
                  </article>
                  <article>
                      <h3>Parcours</h3>
                  </article>
                  <article>
                      <h3>Parcours</h3>
                  </article>
              </div>
          </section>
          <section id={"skills"}>
              <h2>skills</h2>
          </section>
          <section id={"soft-skills"}>
              <h2>soft-skills</h2>
          </section>
      </div>
  )
}

export default Home;