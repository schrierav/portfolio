import breadshot from "../assets/bread.jpg";

function Beyond() {
  return (
    <section>
      <header className="page-header">
        <h1>Beyond Code</h1>
        <p className="text-muted">
          In which I ramble about my love of baking
        </p>
      </header>

      <div className="content-stack"> 
    <p>
      Outside of work, I've been on a long-running quest to make the perfect sourdough loaf.
      Baking is a huge passion for me, and I get very nerdy about it. I'm the kind of baker who can spend days iterating and reiterating on my hydration levels,
      proof times, and baking setups to chase the right balance of crust, texture, and flavor.
    </p>
    <p>
      Some attempts are abject failures, like kneading in cheddar powder or tuning my protein level so high that the bread won't rise. Other times, there are surprise success stories--
      who would've thought that a teaspoon of MSG in the dough would turn out to be delicious? The process is always fun. I love getting to try something, seeing what changes, and slowly getting closer to something that feels perfect.
    </p>
      <img
            src={breadshot}
            alt="my beautiful beautiful bread-son"
            style={{
              width: "800px",
              height: "700px",
              objectFit: "cover"
            }}
          />
    <p>
      It's a nice counterpoint to software, It's still iterative and creative, but slower, more tactile, and far more delicious.
    </p>
      </div>
    </section>
  )
}

export default Beyond