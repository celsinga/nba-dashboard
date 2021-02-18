import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

export default function PlayerNews(props) {

  

  const theme = createMuiTheme({
    typography: {
      fontSize: 12
    }})

  return(
    <div className="player-stats">
      <h1>Player News</h1>
    </div>
  )
}