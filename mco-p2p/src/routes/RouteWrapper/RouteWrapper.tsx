import { Outlet } from "react-router-dom";

import Header from "../../layout/Header/Header";

export default function RouteWrapper() {
  return(
    <>      
      <Header/>
      <Outlet/>
    </>
  )
}