import React from 'react';

function HomePage() {
  return (
    <div>
      <form method="POST" action="/api/products">
        <button>send</button>
      </form>
    </div>
  )
}

export default HomePage;
