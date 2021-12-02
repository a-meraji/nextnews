import { Toolbar } from "./toolbar";

export default function Layout({ children }) {
  return (
    <div className="page-container">
      <Toolbar />
      {children}
    </div>
  );
}
