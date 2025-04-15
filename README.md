# iJewel3D Viewer React Example

This repository demonstrates how to embed and display 3D models hosted on [iJewel Drive](https://drive.ijewel3d.com/) within a React application using the `@ijewel3d/mini-viewer` library.


`src/components/IjewelViewer.tsx` - The main component that implements the integration with the @ijewel3d/mini-viewer library. This component handles:
- Loading 3D models from iJewel Drive using the model ID
- Setting up the viewer container
- Managing the viewer lifecycle
- Providing a container for the 3D model display


for more information check our [documentation](https://developer.ijewel3d.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <repo-name>
    ```

2.  **Install dependencies:**
    The necessary iJewel3D/WebGi packages are referenced directly via URL in `package.json`.
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Example

```bash
npm run dev
