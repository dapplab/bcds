import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="layout">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
