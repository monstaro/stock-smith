import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import SearchBar from './components/SearchBar/SearchBar';
import OpenClosePrices from './components/OpenClosePrices/OpenClosePrices';
import Logo from './components/Logo/Logo';
import DailyLow from './components/DailyLow/DailyLow';
import DailyHigh from './components/DailyHigh/DailyHigh';
import CurrentPrice from './components/CurrentPrice/CurrentPrice';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <SearchBar />
        <OpenClosePrices />
        <CurrentPrice />
        <DailyLow />
        <DailyHigh />
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary"> b u t t o n </Button>
      </header>
    </div>
  );
}

export default App;
