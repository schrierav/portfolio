import { useState } from "react";
import breadshot from "../assets/bread.jpg";

const tabs = ["Baking", "Board Games", "Books", "Music"] as const;
type BeyondTab = (typeof tabs)[number];

function Beyond() {
  const [activeTab, setActiveTab] = useState<BeyondTab>("Baking");

  return (
    <section>
      <header className="page-header">
        <h1>Beyond Code</h1>
        <p className="text-muted">
          In which I ramble about my hobbies
        </p>
      </header>

      <ul className="nav nav-tabs" role="tablist" aria-label="Beyond interests">
        {tabs.map((tab) => (
          <li key={tab} className="nav-item" role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`nav-link${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {activeTab === "Baking" && (
        <div className="content-stack beyond-panel" role="tabpanel">
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
      )}

      {activeTab === "Board Games" && (
        <div className="content-stack beyond-panel" role="tabpanel">
          <p>
            I am a board game fanatic. I've put hundreds of hours into everything from lightweight party games like Codenames and Wavelength to day-long monstrosities like Titan and Millennium Blades. There are few things I love more than taking a few hours to sit down with friends and lose ourselves in strategy and fun.
          </p>
          <h3>What's Been On My Table Lately</h3>
          <ul>
            <li><strong>Millennium Blades</strong>: A card game about playing card games that's simultaneously a parody of card games. It's as weird as it sounds. I've been playing since 2015, and learn something new every time I play. It's almost twenty pounds of cardboard, but it's worth every ounce.</li>
            <li><strong>Exceed</strong>: Back in college I was pretty intense about fighting games. Exceed has somehow managed to bring the fighting game experience onto a tabletop and I love it for it. I won a prerelease tournament for the latest season and will never let any of my friends forget it.</li>
            <li><strong>Clank!</strong>: A deckbuilding game, but with a board! Excellent theming meets surprisingly intuitive gameplay for an awesome castle-pillaging experience.</li>
            <li><strong>Fellowships of Fate</strong>: A neat little microgame I picked up on my last trip to Japan. The theming is great, the gameplay is tense, and it's actually pretty easy to pick up. It somehow manages to squeeze deckbuilding and metagaming into a tiny package.</li>
            <li><strong>Magic the Gathering</strong>: My perennial addiction. I've been playing since middle school, and every time I think I'm done something manages to pull me back in. These days I've mostly been focused on Cube and Pauper.</li>
          </ul>

        </div>
      )}

      {activeTab === "Books" && (
        <div className="content-stack beyond-panel" role="tabpanel">
          <p>
            I love to read, and usually have several books going at once. I tend to trade off between doofy sci-fi and more literary fare.
          </p>
          <h3>A Smattering Of My Favorite Reads</h3>
          <ul>
            <li><strong>Gargantua and Pantagruel</strong>: A comedy written by a French monk in the 16th century. It's a series of novels about the adventures of two giants. The language is dated but the humor is timeless. I never knew I could laugh so hard at liveries.</li>
            <li><strong>The Vlad Taltosh Novels</strong>: A series of swashbuckling adventure novels by Steven Brust. They're fun, breezy, and what I always turn to when I need a literary palate cleanser.</li>
            <li><strong>The Book of the New Sun</strong>: Brilliant use of language and world-building in a far-future Earth that has circled around to reading more like an alternate past. It's an unforgettable masterpiece of Science Fiction.</li>
            <li><strong>Riddley Walker</strong>: I'm a sucker for anything that's doing something unique and interesting with English, and Riddley has that in spades. 1ce yu pikkitup yew wont puttitdown.</li>
            <li><strong>Botchan</strong>: I have never identified more with a literary hero than I have with the narrator of Botchan. I was teaching in Japan 120 years after the novel was published, but my students got up to the same shenanigans that the narrator complains about.</li>
            <li><strong>Astra & Flondrix</strong>: This book is bad. Very bad. Words cannot state how absolutely horrible of a read it is. But, it's so bad that it somehow circles around to being fascinating (and a ton of fun to read in a group).</li>
          </ul>
        </div>
      )}

      {activeTab === "Music" && (
        <div className="content-stack beyond-panel" role="tabpanel">
          <p>
            Music is a huge part of my life, both playing and listening. I play the English concertina, and am slowly teaching myself to play the accordion in my free time. When I play, I mostly focus on Irish, English, and Jewish folk music. When I'm listening, I have a pretty wide range of tastes. I'm crazy about 70's prog rock, but I also enjoy jazz-fusion, 'dad rock', and have a weird love of Gilbert and Sullivan operas. For a couple recent obsessions, I've been nuts about Geordie Greep, Thundercat, and Masayoshi Takanaka.
          </p>
        </div>
      )}
    </section>
  )
}

export default Beyond