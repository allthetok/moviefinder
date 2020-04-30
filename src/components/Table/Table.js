import React, { useState, useEffect } from "react";
import { Table, Col, Row } from "antd";
import uuidv4 from "uuidv4";
import API from "../../services/dataService";
import Utils from "../../services/utilsService";
import "./Table.css";

export const ListTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getMostVoted().then((info) => {
      setData(
        info.results.map((movie) => ({
          title: movie.title,
          popularity: movie.popularity,
          // genres: movie.genre_ids.reduce(
          //   (acc, id) => ((acc += Utils.getGenres(id) + " "), "")
          // ),
        }))
      );
    });
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      sorter: (a, b) => b.popularity - a.popularity,
    },
    {
      title: "Genres",
      dataIndex: "genres",
      filters: Utils.getFilter(),
      filterMultiple: true,
      onFilter: (value, record) => record.genres.indexOf(value) === 0,
      sorter: (a, b) => a.genres.length - b.genres.length,
    },
  ];

  return (
    <Row>
      <Col span={13} offset={5}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};
