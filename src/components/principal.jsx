import React from 'react';
import axios from "axios";
import Article from './article';
import Column from './column';
import Header from './header';
import CategorySelect from './categorySelect';
import Footer from './footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBox from './searchGrid';
import loadingGif from '../loading.gif'
import url from "../backend";


class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: "",
      pages: [],
      articles: [],
      authors: [],
      columns: [],
      categories: [],
      call: 0,
      hasMore: true,
      searchResults: []
    }

    this.get_news();
  }

  async get_news() {
    const content =
      this.state.pages.length === 0
        ? await axios.get(url.principal)
        : await axios.get(`${url.principal}&page=${this.state.call}`)

    this.state.pages.push({
      articles: content.data.articles,
      columns: content.data.columns
    })
            
    this.setState({
      timer: content.data.timer,
      authors: content.data.authors,
      categories: content.data.categories
    });     

    this.setState({ call: Number(this.state.call) + 10 })

    if (this.state.pages[this.state.pages.length - 1].articles.length < 10) {
      this.setState({
        hasMore: false
      })
    }
  }
  
  render() {
    if (this.state.pages.length ===0) {
      return (<div className='flex justify-center'><img src={loadingGif} alt='now loading'  /></div>);
    } else {
      return (
        <div >
          <CategorySelect {...this.state.categories} ></CategorySelect>
          <SearchBox></SearchBox>
          <Header {...this.state.timer}></Header>
          <InfiniteScroll
            dataLength={this.state.pages.length}
            next={() => this.get_news()}
            hasMore={this.state.hasMore}
            loader={<p>    The End¿?</p>}
            endMessage={
              <p className="endGif">
                <img src="theEnd.gif" alt='There is no more!' />
              </p> }>
            <div>
            {
              this.state.pages.map((page, k) =>{ 
                return( <div key={k} className='content'>
                  { page.articles.map((a, k) => <div key={k} className="article" ><Article  {...a}></Article></div>) }
                  <div className='columnContainer'>
                  { page.columns.map((c, k) => <div key={k} ><Column   {...c}></Column></div>) }
                  </div>                
                </div>);
              })
            }
            </div>
          </InfiniteScroll>
          <Footer {...this.state.authors}></Footer>
        </div>);
    }
  }
}


export default Principal;    