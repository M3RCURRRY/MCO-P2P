import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";

import "./IndexRoute.scss";

export default function IndexRoute() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 1000);
  }, []);

  return (
    <div>
      <Transition in={isVisible} timeout={500} mountOnEnter unmountOnExit>
        {(state) => <div className={`routeList ${state}`}>Index</div>}
      </Transition>
    </div>
  );
}
