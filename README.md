# Syncfusion React Grid Column Resize Example

This repository demonstrates how to use Syncfusion React Grid to control and manage the resizing of grid columns, specifically handling minimum and maximum widths dynamically.

## What this Example Does:

- **Grid Column Resizing**: It uses the Syncfusion React Grid (`GridComponent`) to create a data grid with resizable columns.

- **Min/Max Width Enforcement**:
  - Columns have defined minimum widths (`minWidth`).
  - The resizing logic ensures columns respect these minimum widths.

- **Visual Feedback and Reset Feature**:
  - As columns are resized, the example dynamically displays a "reset" button if the current width exceeds the minimum width.
  - Clicking the "reset" button automatically resizes the column back to its defined minimum width and hides the reset button afterward.

## Technical Highlights:

- **React Hooks (`useEffect`, `useRef`)**:
  - Manages references to the grid component to manipulate resizing events directly.

- **Syncfusion Grid Events**:
  - Utilizes Syncfusion's `resizing` event to handle dynamic adjustments in real-time as the user resizes columns.

- **Custom Header Templates**:
  - Custom headers with integrated "reset" buttons are defined using a React component (`HeaderWithReset`). This component conditionally renders a reset button, enhancing user interaction.

## Running the Example

To run this example:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

Your Syncfusion grid application will be accessible at `http://localhost:3000`.

## Prerequisites

- Node.js
- npm
- Syncfusion EJ2 React Components

## Syncfusion Resources

- [Syncfusion React Grids Documentation](https://ej2.syncfusion.com/react/documentation/grid/)

---

This example is ideal for developers looking to implement sophisticated resizing logic in their React applications using Syncfusion components.
