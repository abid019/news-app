import './App.css';
import {Route,Routes} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import TopHeadlines from './component/TopHeadlines';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />   
        <Routes>
          
          <Route exact path='/business' element={<TopHeadlines key="business" pageSize={9} category={"business"} country={"in"}/>}/>
          <Route exact path='/entertainment' element={<TopHeadlines key="entertainment" pageSize={9} category={"entertainment"} country={"in"}/>}/>
          <Route exact path='/general' element={<TopHeadlines key="general" pageSize={9} category={"general"} country={"in"}/>}/>
          <Route exact path='/health' element={<TopHeadlines key="health" pageSize={9} category={"health"} country={"in"}/>}/>
          <Route exact path='/science' element={<TopHeadlines key="science" pageSize={9} category={"science"} country={"in"}/>}/>
          <Route exact path='/sports' element={<TopHeadlines key="sports" pageSize={9} category={"sports"} country={"in"}/>}/>
          <Route exact path='/technology' element={<TopHeadlines key="technology" pageSize={9} category={"technology"} country={"in"}/>}/>
           
        </Routes>
      </div>
    )
  }
}

