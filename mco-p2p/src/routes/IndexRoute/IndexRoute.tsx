import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";

import mapRouteImg from "./../../resources/images/map.png";
import marketRouteImg from "./../../resources/images/market.png";
import tradeRouteImg from "./../../resources/images/trade.png";
import calcRouteImg from "./../../resources/images/calculator.png";

import "./IndexRoute.scss";

import RouteCard from "../../components/RouteCard/RouteCard";
import { Container, Row, Col } from "react-bootstrap";

export default function IndexRoute() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 1000);
  }, []);

  return (
    <div style={{ marginTop: "35px" }}>
      <Transition in={isVisible} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <Container className={`routeList ${state}`}>
            <Row style={{marginBottom: "25px"}}>
              <Col lg={3}></Col>
              <Col xs={4} sm={4} md={4} lg={2} className="alignRoute">
                <RouteCard
                  title="Market"
                  src={marketRouteImg}
                  alt="Market Route"
                />
              </Col>
              <Col xs={4} sm={4} md={4} lg={2} className="alignRoute">
                <RouteCard
                  title="Trades"
                  src={tradeRouteImg}
                  alt="Trade Route"
                />
              </Col>
              <Col xs={4} sm={4} md={4} lg={2} className="alignRoute">
                <RouteCard
                  title="Server Map"
                  src={mapRouteImg}
                  alt="Map Route"
                />
              </Col>
              <Col lg={3}></Col>
            </Row>

            <Row>
              <Col lg={3}></Col>
              <Col xs={4} sm={4} md={4} lg={2}></Col>
              <Col xs={4} sm={4} md={4} lg={2} className="alignRoute">
                <RouteCard
                  title="Calculator"
                  src={calcRouteImg}
                  alt="Calc Route"
                />
              </Col>
              <Col xs={4} sm={4} md={4} lg={2}></Col>
              <Col lg={3}></Col>
            </Row>
          </Container>
        )}
      </Transition>
    </div>
  );
}

/*

<RouteCard title="Calculator" src={calcRouteImg} alt="Calc Route" />

*/
