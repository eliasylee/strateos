import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQPCRData } from './actions/qpcr-actions'
import {
  toggleWell,
  toggleRow,
  toggleColumn,
  toggleAll
} from './actions/well-actions'

import Grid from './components/Grid'
import Table from './components/Table'

import './App.scss'

const mapStateToProps = ({
  wells,
  selectedWells,
  allWellsSelected
}) => ({
  wells,
  selectedWells,
  allWellsSelected
})

const mapDispatchToProps = dispatch => ({
  fetchQPCRData: () => dispatch(fetchQPCRData),
  generateToggleWell: (rowIndex, columnIndex) => () => dispatch(toggleWell(rowIndex, columnIndex)),
  generateToggleRow: rowIndex => () => dispatch(toggleRow(rowIndex)),
  generateToggleColumn: columnIndex => () => dispatch(toggleColumn(columnIndex)),
  toggleAll: () => dispatch(toggleAll)
})

class App extends Component {
  componentDidMount() {
    this.props.fetchQPCRData()
  }

  render() {
    const {
      wells,
      selectedWells,
      allWellsSelected,
      generateToggleWell,
      generateToggleRow,
      generateToggleColumn,
      toggleAll
    } = this.props

    return <div className='App'>
      <Grid
        wells={wells}
        selectedWells={selectedWells}
        allWellsSelected={allWellsSelected}
        generateToggleWell={generateToggleWell}
        generateToggleRow={generateToggleRow}
        generateToggleColumn={generateToggleColumn}
        toggleAll={toggleAll} />
      <Table
        wells={wells}
        selectedWells={selectedWells} />
    </div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
