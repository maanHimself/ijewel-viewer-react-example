import IjewelViewer from './components/IjewelViewer'

function App() {
  const modelId = "ThWX3yXbSqygIcRbS2ODGw" // Replace with your actual model ID

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <IjewelViewer
          modelId={modelId}
        />
    </div>
  )
}

export default App
