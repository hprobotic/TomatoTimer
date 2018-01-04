import React, { Component } from 'react'
import {
  BarChart,
  Bar,
  Brush,
  Cell,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ErrorBar,
  LabelList
} from 'recharts'
import { scaleOrdinal, schemeCategory10 } from 'd3-scale'
import _ from 'lodash'
import { Button, Label, Grid, Icon } from 'semantic-ui-react'
import './Chart.css'
import ringsvg from './ring.svg'
import clocksvg from './clock.svg'
import heartsvg from './heart.svg'

const randomChangeArray = array => {}

export function changeNumberOfData(data) {
  if (Array.isArray(data)) {
    return data.map(changeNumberOfData)
  }

  if (typeof data === 'object') {
    return _.mapValues(data, val => {
      if (typeof val === 'number') {
        return parseInt(val * Math.random() * 2, 10)
      }

      return changeNumberOfData(val)
    })
  }

  return data
}

const data = [
  { name: 'Mo', hour: 10 },
  { name: 'Tu', hour: 5 },
  { name: 'Wed', hour: 6 },
  { name: 'Thu', hour: 4 },
  { name: 'Fr', hour: 2 },
  { name: 'Sa', hour: 3 },
  { name: 'Su', hour: 9 }
]

export default class extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <Grid centered>
          <Grid.Row>
            <h2 className="focus-count">99</h2>
            <div className="focus-dot" />
          </Grid.Row>
          <Grid.Row>
            <div className="focus-label">
              <h3>Focus Today</h3>
              <p>04/01/2018</p>
            </div>
          </Grid.Row>
        </Grid>
        <div className="chart-content">
          <Grid columns={3} divided textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <img src={ringsvg} className="summary-icon" />
                <p>Focus Count</p>
                <h2>99</h2>
              </Grid.Column>
              <Grid.Column>
                <img src={clocksvg} className="summary-icon" />
                <p>Focus Hour</p>
                <h2>0</h2>
              </Grid.Column>
              <Grid.Column>
                <img src={heartsvg} className="summary-icon" />
                <p>Concentration</p>
                <h2>86%</h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
