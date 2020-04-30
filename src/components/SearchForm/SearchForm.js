import React, { useState } from "react";
import { Input, Col, Row, Button } from "antd";
import { Redirect } from "react-router-dom";
import "./SearchForm.css";

export const SearchForm = () => {
  const [value, setValue] = useState("");
  const [fireRedirect, setfireRedirect] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setfireRedirect(true);
  };

  return (
    <Row>
      <Col span={14} offset={5}>
        <form onSubmit={handleSubmit}>
          <Input
            className="input"
            placeholder="Find a movie..."
            onChange={handleChange}
          />
          <Button type="primary" icon="search" onClick={handleSubmit}>
            Search
          </Button>
        </form>
      </Col>
      {fireRedirect && value && <Redirect to={`/search/${value}`} push />}
    </Row>
  );
};
