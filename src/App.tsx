import Landing from "./components/Landing/Landing"
import MouseFollower from "./components/Mouse/ MouseFollower"
import Navbar from "./components/navbar/navbar"



const App = () => {
  return (<>
      <MouseFollower/>
      <Navbar></Navbar>
      <Landing/>
  </>

  )
}

export default App