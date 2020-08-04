import React from 'react';
import './App.css';
import Searchbox from './components/Searchbox';
import ResultTile from './components/ResultTile';
import { key, searchEndpoint, searchEngineId } from './api/config';
import throttle from './utils/throttle';

class App extends React.Component{
  constructor(){
    super();

    this.throttledSearch = throttle(this.load, 1000);
    this.state = {
      searchText: '',
    };
  }

  onSearchTextChange = ({target}) => {
    this.setState({searchText: target.value}, () => {
      console.log(target.value)
      if(target.value) this.throttledSearch();
    });
  }

  load = () => {
    console.log('throttling')
    fetch(searchEndpoint + '?key=' + key + '&cx=' + searchEngineId + '&q=' + this.state.searchText)
      .then(res => res.json())
      .then(data => this.setState({searchResult: data}))
  }

  paginateTo = (pageNo) => {

  }

  render(){
    const { searchText, searchResult } = this.state;

    return <div class="App">
      <Searchbox
        value={searchText}
        onChange={this.onSearchTextChange}
      />
      <div>
        {searchResult && searchResult.items && searchResult.items.map(item => (
          <ResultTile
            imgUrl={item.pagemap.cse_image && item.pagemap.cse_image['0'] && item.pagemap.cse_image['0'].src}
            link={item.link}
            title={item.title}
            description={item.snippet}
          />
        ))}
      </div>
    </div>
  }
}

export default App;
