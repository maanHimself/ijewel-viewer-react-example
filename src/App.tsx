import { ViewerComponent } from "@ijewel3d/mini-viewer";
import { useEffect, useState } from "react";
import { Color, ViewerApp } from "webgi";

function App() {
  const [modelId,] = useState("Ep9bWZIlTSG6_8DH7QDc1w"); // Replace with your actual model ID
  const [viewer , setViewer] = useState<ViewerApp | null>(null);
  
  useEffect(() => {
    //optionally, you can use the viewer for further customization
    if (viewer) {
      // Example: Set background color
      viewer.scene.backgroundColor = new Color("#232721");
    }
  }, [viewer]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      <ViewerComponent
        modelId={modelId}
        onViewerReady={(v : ViewerApp) => setViewer(v)}
        viewerOptions={{
          showCard: false,
          //add other viewer options here
        }}
      />

    </div>
  );
}

export default App;
