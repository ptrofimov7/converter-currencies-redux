import React from 'react';
import Content from './components/Content';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Content />
      </MainLayout>
    </div>
  );
}

export default App;
