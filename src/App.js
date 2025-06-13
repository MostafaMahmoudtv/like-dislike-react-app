import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Like & Dislike App</h1>

      <div style={{ margin: '20px' }}>
        <button onClick={handleLike} style={{ marginRight: '10px' }}>
          👍 Like ({likes})
        </button>

        <button onClick={handleDislike} style={{ marginRight: '10px' }}>
          👎 Dislike ({dislikes})
        </button>

        <button onClick={handleReset}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default App;
