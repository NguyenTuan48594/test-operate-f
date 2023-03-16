import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import CreatePage from "./pages/CreatePage";
import Homepage from "./pages/Homepage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/create" element={<CreatePage></CreatePage>}></Route>
          <Route path="/edit/:id" element={<UpdatePage></UpdatePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
