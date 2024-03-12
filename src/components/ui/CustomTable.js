import React from "react";
import { Table } from "antd";

export default function CustomTable({ columns, data }) {
  return <Table columns={columns} dataSource={data} />;
}
