import React, { FC } from 'react';

import './App.css';

const App: FC = () => {
  return (
    <div className="root">
      <iframe 
        title="Item1"
        src="http://localhost:3000/d-solo/LtEIfyBGz/mini-view?orgId=1&refresh=5s&panelId=2" 
        width="50%" 
        height="50%" 
        frameBorder="0"
      />
      <iframe 
        title="Item2"
        src="http://localhost:3000/d-solo/LtEIfyBGz/mini-view?orgId=1&refresh=5s&panelId=5" 
        width="50%" 
        height="50%" 
        frameBorder="0"
      />
      <iframe 
        title="Item3"
        src="http://localhost:3000/d-solo/LtEIfyBGz/mini-view?orgId=1&refresh=5s&panelId=4" 
        width="50%" 
        height="50%" 
        frameBorder="0"
      />
      <iframe
        title="Item4" 
        src="http://localhost:3000/d-solo/LtEIfyBGz/mini-view?orgId=1&refresh=5s&panelId=6" 
        width="50%" 
        height="50%" 
        frameBorder="0"
      />
    </div>
  )
}

export default App;
