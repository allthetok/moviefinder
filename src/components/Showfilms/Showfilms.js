import React, { Component } from "react";
import { CardTemplate } from "../CardTemplate/CardTemplate";
import API from "../../services/dataService";
import { Row, Col } from "antd";
import uuidv4 from "uuidv4";
import "./Showfilms.css";

export default class Showfilms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleAPICall(props) {
    if (props.match.params.query) {
      API.getSearch(props.match.params.query).then((data) => {
        this.setState({
          results: data.results,
        });
      });
    } else {
      API.getMovies(props.category).then((data) => {
        this.setState({
          results: data.results,
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handleAPICall(nextProps);
  }

  componentDidMount() {
    this.handleAPICall(this.props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className="title">{this.props.currentPage} </h1>
          </Col>
        </Row>
        <Row gutter={24}>
          {this.state.results.map((film) => {
            return (
              <Col className="gutter-row" span={5} offset={1}>
                <CardTemplate
                  name={film.title}
                  date={film.release_date}
                  vote={film.vote_average}
                  image={film.poster_path}
                  id={film.id}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
