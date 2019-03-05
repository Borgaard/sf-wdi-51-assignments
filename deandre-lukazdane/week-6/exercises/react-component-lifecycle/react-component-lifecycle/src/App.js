import React, { Component } from 'react'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js: In constructor()')
    this.state = {
      page: 'home'
    }
  }

  componentDidMount(){
    console.log('App.js In componentDidMount()');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`App.js: In componentDidUpdate(). prevState: ${JSON.stringify(prevState)}`);
  }

  setPageToHome(e) {
    e.preventDefault()
    this.setState({
      page: 'home',
    })
  }

  setPageToAbout(e) {
    e.preventDefault()
    this.setState({
      page: 'about',
    })
  }

  render() {
    console.log('App.js: In render()')
    let Page
    let pageTitle

    switch (this.state.page) {
      case 'home':
        Page = HomePage
        pageTitle = "Home"
        break;
      case 'about':
        Page = AboutPage
        pageTitle = "About"
        break;
      default:
        Page = ErrorPage
        pageTitle = "Error"
        break;
    }
    
    return (
      <div className="page-container">
        <header>
          <h1>Component Lifecycle</h1>
          <nav>
            <a href="/" onClick={this.setPageToHome.bind(this)}>Home</a>
            <a href="/about" onClick={this.setPageToAbout.bind(this)}>About</a>
          </nav>
        </header>
        <main>
          <Page message={pageTitle}></Page>
        </main>
      </div>
    )
  }
}

export default App;