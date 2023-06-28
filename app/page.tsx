import { Analytics } from "@vercel/analytics/react";

import "array.prototype.at";

import { Home } from "./components/home";
import { Entry } from "./components/login";

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Entry />
      <Analytics />
    </>
  );
}
