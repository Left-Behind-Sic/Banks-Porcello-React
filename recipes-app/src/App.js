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

import React, {useState} from 'react'
import colorData from './data/color-data.json'
import ColorList from './components/color/ColorList'

export default function App (){
    const [colors] = useState(colorData)
    return <ColorList colors={colors} />
}