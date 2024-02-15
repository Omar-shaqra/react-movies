import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./images/logo.png";

const NavBar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <img className="logo" src={Logo} alt="dfs" />
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="sraech 2-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="search"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
