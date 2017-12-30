import React, { Component } from 'react';
import {
  BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList
} from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import _ from 'lodash';

const randomChangeArray = (array) => {

};

export function changeNumberOfData(data) {
  if (Array.isArray(data)) {
    return data.map(changeNumberOfData);
  }

  if (typeof data === 'object') {
    return _.mapValues(data, val => {
      if (typeof val === 'number') {
        return parseInt(val * Math.random() * 2, 10);
      }

      return changeNumberOfData(val);
    });
  }

  return data;
}


const data = [
  { name: 'Mo', hour: 10 },
  { name: 'Tu', hour: 5 },
  { name: 'We', hour: 6 },
  { name: 'Thu', hour: 4 },
  { name: 'Fr', hour: 2 },
  { name: 'Sa', hour: 3 },
  { name: 'Su', hour: 9 },
];

export default class extends React.Component {
  render() {
    return (
      <div>
        <BarChart width={300} height={400} data={data}>
          <Bar dataKey='hour' fill='#8884d8' />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </div>
    )
  }
}