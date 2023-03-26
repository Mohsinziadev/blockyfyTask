import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../@store/index";
import App from "../App";
import CreateAJob from "../@modules/CreateAJob";
import Jobs from "../@modules/JobsScreen/Jobs";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Jobs />} />
            <Route path="CreateAJob" element = {<CreateAJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
