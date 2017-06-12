import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import Page & SubPage

class Routes extends React.Component {
  render() {
    <Router history={browserHistory}>
      <Route path="page" component={Page}>
        <Route path="sub-page" component={SubPage}></Route>
      </Route>
    </Router>
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.cloneChildren = this.cloneChildren.bind(this);
  }

  cloneChildren() {
    // do something
    if (this.props.children) {
      return React.cloneElement(this.props.children, { /* options */ });
    }
  }

  render() {
    return (
      <div>
        {this.cloneChildren()}
      </div>
    );
  }
}

class SubPage extends React.Component {
  render() {
    <div clasName="page">
      // other dom
    </div>
  }
}

/ *
.pageSlider-leave {
  transform: translate3d(0, 0, 0);
}

.pageSlider-leave.pageSlider-leave-active {
  transform: translate3d(100%, 0, 0);
  transition: all 600ms;
}

.pageSlider-enter {
  transform: translate3d(100%, 0, 0);
}

.pageSlider-enter.pageSlider-enter-active {
  transform: translate3d(0, 0, 0);
  transition: all 600ms;
}

.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  background: #f9f8f4;
}
* /
