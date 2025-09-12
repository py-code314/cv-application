import './App.css'
import CVBuilder from './components/CVBuilder'
import CVPreview from './components/CVPreview'

function App() {
  return (
    <main className="main">
      <h1 className="title">NextStep</h1>
      <div className="container">
        <CVBuilder />
        <CVPreview />
      </div>
    </main>
  )
}

export default App
