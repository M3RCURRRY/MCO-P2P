import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";

import mapRouteImg from "./../../resources/images/map.png";
import marketRouteImg from "./../../resources/images/market.png";
import tradeRouteImg from "./../../resources/images/trade.png";
import calcRouteImg from "./../../resources/images/calculator.png";

import "./IndexRoute.scss";

import RouteCard from "../../components/RouteCard/RouteCard";
import { Container, Row, Col } from "react-bootstrap";

const firstRouteRow: React.ReactNode = (
  <>
    <RouteCard title="Market" src={marketRouteImg} alt="Market Route" />
    <RouteCard title="Trades" src={tradeRouteImg} alt="Trade Route" />
    <RouteCard title="Server Map" src={mapRouteImg} alt="Map Route" />
  </>
);

const secondRouteRow: React.ReactNode = (
  <>
    <RouteCard title="Calculator" src={calcRouteImg} alt="Calc Route" />
  </>
)

export default function IndexRoute() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 1000);
  }, []);

  return (
    <div style={{marginTop: "35px"}}>
      <Container>
        <Row>
          <Col sm={2} md={3}></Col>
          <Col xs={12} sm={8} md={6}>
            <Transition in={isVisible} timeout={500} mountOnEnter unmountOnExit>
              {(state) => (
                <div className={`routeList ${state}`}>{firstRouteRow}</div>
              )}
            </Transition>
          </Col>
          <Col sm={2} md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
