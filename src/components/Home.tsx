import { useState } from 'react'
import ColorBar from './ColorBar'

function Home() {

    const [color, setColor] = useState("aquamarine");

  return (
    <div className="w-full duration-200 h-screen" style={{ backgroundColor:color }} >
        <ColorBar fxn={setColor} />
    </div>
  )
}

export default Home