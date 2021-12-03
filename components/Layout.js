import Notify from "./Notify";
import { Toolbar } from "./toolbar";

export default function Layout({ children }) {
  return (
    <div className="page-container">
      <Toolbar />
      <Notify />
      {children}
    </div>
  );
}
