// import './App.css';
// import Menu from './components/Menu'
// import data from './data/recipes.json'


// function App() {
//   return (
//     <div className="App">

//       <Menu recipes={data}/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import colorData from './data/color-data.json'
import ColorList from './components/color/ColorList'

export default function App() {
  const [colors, setColors] = useState(colorData)
  return <ColorList
    colors={colors}
    onRemoveColor={id => {
      const newColors = colors.filter(color => color.id !== id)
      setColors(newColors)
    }}
    onRateColor={(id, rating) => {
      const newColors = colors.map(color =>
        color.id === id ? { ...color, rating } : color)
      setColors(newColors)
    }}
  />
}