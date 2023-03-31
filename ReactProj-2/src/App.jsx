import { useState } from 'react'
import './App.css'
import Videos from './videos'

function App() {

  const [videos, setVideos] = useState([
    { title: 'Steve Jobs Vision of the World', embedId: 'elKxCaStPh8' },
    { title: 'Steve Jobs on Microsoft', embedId: 'upzKj-1HaKw' },
    { title: 'Steve Jobs on Programming', embedId: 'AwXFQuL-Ot4' }
  ])

  return (
    <div className="App">
      <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
      <br />
      <img src="steve1.jpeg" />
      <br />
      <p>
        Steve Jobs was the co-founder and CEO of Apple Inc. He is widely
        considered to be a brilliant businessman, as well as one of the greatest
        tech visionaries in our time.
      </p>
      <p>
        story of his life is nothing short of fascinating. After dropping out of
        college, he started Apple with his friend
        <a href="https://en.wikipedia.org/wiki/Steve_Wozniak"> Steve Wozniak</a>
        in 197g at the age of 21. The duo gained wealth and fame a year later for
        the <a href="https://en.wikipedia.org/wiki/Apple_II"> Apple II</a>, one of
        the first highly successful mass-produced personal computers. This was
        followed by the very successful Macintosh in 1984, the first mass-produced
        computer with a GUI (graphical user interface). After being ousted of
        Apple in 1985, he went on to oversee the creation of two new companies:
        NeXT computer and
        <a href="https://en.wikipedia.org/wiki/Pixar"> Pixar.</a> With the success
        of the movie Toy Story, Steve became a billionaire.
      </p>
      <p>
        In 1997, Steve returned to Apple. Bill Gates and Microsoft dominated the
        computer industry, and Apple was on the brink of extinction.
        Nonetheless,<a
          href="https://en.wikipedia.org/wiki/Reality_distortion_field"
        >
          Steve was a fantastic salesman,</a>
        and used his business acumen to slowly bring the company back to
        profitability.
      </p>
      <hr />

      <h2>Steve Jobs Resources</h2>
      <p>Apple's tribute to Steve Jobs:</p>
      <a href="https://www.apple.com/stevejobs/"> Remembering Steve</a>
      <p>The Steve Jobs Biography</p>
      <a href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537">
        Steve Jobs</a>
      <p>The Steve Jobs Movie</p>
      <a href="https://www.imdb.com/title/tt2080374/">Steve Jobs on IMDB</a>
      <hr />
      <h2>Check out these Steve Job's Videos</h2>
      <Videos videos={videos} />
    </div>
  )
}

export default App
