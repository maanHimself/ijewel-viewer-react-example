import { useEffect, useRef, useState, FC, useCallback } from "react";
import { loadModelById, Viewer } from "@ijewel3d/mini-viewer";
import { ViewerApp } from "webgi";

interface IJewelViewerProps {
  modelId: string;
}

const IjewelViewer: FC<IJewelViewerProps> = ({ modelId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewerInstance, setViewerInstance] = useState<Viewer | undefined>();
  const [webgiViewer, setWebgiViewer] = useState<ViewerApp | undefined>();

  const loadModel = useCallback(async () => {
    const containerElement = containerRef.current;
    if (!containerElement) {
      console.error("Container element not found.");
      return;
    }

    const baseName = "drive"; 

    try {
      const newViewer = await loadModelById(modelId, baseName, containerElement, {
        showCard: true, 
        // add other options as needed
        viewer: viewerInstance, // The first time this will be undefined, so a new viewer will be created,
        // but on subsequent renders it will use the existing viewer instance.
      });

      if (!viewerInstance) {
        setViewerInstance(newViewer);
      }
    } catch (error) {
      console.error("Error loading model:", error);
    }
  }, [modelId, viewerInstance]);

  useEffect(() => {

    loadModel();

  }, [modelId]);

  useEffect(() => {
    //optional : if you want to use webgi viewer for further customization
    window.addEventListener("ijewel-viewer-ready", (ev: CustomEvent<{ viewer: ViewerApp }>) => {
      const viewer = ev.detail.viewer;
      setWebgiViewer(viewer);
    });

    // Clean up the viewer instance when the component unmounts
    return () => {
      window.removeEventListener("ijewel-viewer-ready", () => {});
      if (webgiViewer) {
        webgiViewer.dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {/* The Viewer constructor will manage the canvas inside this div */}
    </div>
  );
};

export default IjewelViewer;
