import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./commponents/Header/Header";
import Sidebar from "./commponents/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-full">
        <Sidebar />
        <Header />

        <div className="bg-mid-gray">
          <Routes>
            <Route />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
