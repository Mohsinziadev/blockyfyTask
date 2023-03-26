import { useEffect, useState } from "react";
import SplashScreen from "./@components/SplashScreen";
import { Outlet } from "react-router-dom";
import Header from "./@components/Header";

function App() {
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadingApp(false), 5000);
  }, []);

  return (
    <div className="App w-full overflow-hidden">
      <div className="shadow-md">
        <Header />
      </div>
      {loadingApp && <SplashScreen />}

      <div className="flex w-full font-tt-firs-neue justify-center">
        <div className="max-w-[1080px] w-full">
          <Outlet />
        </div>
      </div>

      <div className="shadow-sm">
        <div>
          <div className="flex mt-5 md:mt-10 bg-[#006BB3] p-2 justify-center items-center">
            <div className="text-xs font-[100]  text-white">
              © Designed and Developed by Mohsin zia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
