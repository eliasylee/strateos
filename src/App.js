import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQPCRData } from './actions/qpcr-actions'
import {
  toggleWell,
  toggleRow,
  toggleColumn,
  toggleAll
} from './actions/well-actions'
import {
  updateThreshold,
  createThreshold,
  changeCurrentThreshold
} from './actions/threshold-actions'

import Grid from './components/Grid'
import Interface from './components/Interface'

import './App.scss'

const mapStateToProps = ({
  wells,
  selectedWells,
  allWellsSelected,
  threshold,
  thresholds,
  currentThreshold
}) => ({
  wells,
  selectedWells,
  allWellsSelected,
  threshold,
  thresholds,
  currentThreshold
})

const mapDispatchToProps = dispatch => ({
  fetchQPCRData: () => dispatch(fetchQPCRData),
  generateToggleWell: (rowIndex, columnIndex) => () => dispatch(toggleWell(rowIndex, columnIndex)),
  generateToggleRow: rowIndex => () => dispatch(toggleRow(rowIndex)),
  generateToggleColumn: columnIndex => () => dispatch(toggleColumn(columnIndex)),
  toggleAll: () => dispatch(toggleAll),
  updateThreshold: e => dispatch(updateThreshold(e)),
  createThreshold: () => dispatch(createThreshold),
  generateOnClickThreshold: index => () => dispatch(changeCurrentThreshold(index))
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
      toggleAll,
      threshold,
      thresholds,
      currentThreshold,
      updateThreshold,
      createThreshold,
      generateOnClickThreshold
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
      <Interface
        wells={wells}
        selectedWells={selectedWells}
        threshold={threshold}
        thresholds={thresholds}
        currentThreshold={currentThreshold}
        updateThreshold={updateThreshold}
        createThreshold={createThreshold}
        generateOnClickThreshold={generateOnClickThreshold} />
    </div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
