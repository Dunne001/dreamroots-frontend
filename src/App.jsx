import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-blue-900 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              DreamRoots Kenya
            </h1>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App