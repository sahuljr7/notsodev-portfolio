import About from './About'
import './App.css'
import Contact from './Contact'
import Experience from './Experience'
import Header from './Header'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Work from './Work'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import Loading from './Loading'
import { useEffect, useState } from 'react'

function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false)
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className='app'>
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Sidebar />
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
          <div className='app__footer'>
            <a href=''>
              <span>Built by NotSoDev</span>
              <div className='app__githubStats'>
                <div className='app__githubStat'>
                  <StarBorderRoundedIcon />
                  2,435
                </div>
                <div className='app__githubStat'>
                  <GitHubIcon />
                  1,150
                </div>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default App
