import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


const imems = [{
  name: 'item1'
}, {
  name: 'item2'
}, {
  name: 'item3'
}]

class Item2 extends React.Component {


  constructor(props) {
    super(props);

    // Set up initial state
    this.state = {
      value: ''
    };

    // Functions must be bound manually with ES6 classes
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange(a, b, c) {
    console.log(this, a, b, c);
  }

  handleChange2(e) {
    console.log(this);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    console.log('Item2 render', this);
    return (
      <div>
        {this.props.item.name}
        <input ref='input' value={this.state.value} type='text' onChange={this.handleChange.bind(this, 'a', 'b')} />
        <input ref='input' value={this.state.value} type='text' onChange={this.handleChange.bind(null, 'a', 'b')} />
      </div>
    );
  }
}


const Item = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  componentWillMount() {
    console.log('Component WILL MOUNT!')
  },

  componentDidMount() {
    console.log('Component DID MOUNT!')
  },

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
    this.setState({
      value: '123'
    });
  },

  shouldComponentUpdate(newProps, newState) {
    if (newState.value == '123') return false;
    return true;
  },

  componentWillUpdate(nextProps, nextState) {

    console.log('Component WILL UPDATE!');
    console.log(this.refs.input);
    console.log(ReactDOM.findDOMNode(this.refs.input));
  },

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  },

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  },

  handleChange(a, b, c) {
    console.log(this, a, b, c);
    // this.setState({
    //   value: e.target.value
    // });
  },

  render() {
    console.log('Item render', this);
    return (
      <div>
        {this.props.item.name}
        <input ref='input' value={this.state.value} type='text' onChange={this.handleChange.bind(this, 'a', 'b')} />
        <input ref='input' value={this.state.value} type='text' onChange={this.handleChange.bind(null, 'a', 'b')} />
      </div>
    )
  }
});


class MyInput extends React.Component {
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  componentWillReceiveProps(nextProps) {
    console.log('MyInput', nextProps);
  }
  render() {
    var value = String(this.props.value).replace(/[a-zA-Z]/g, '1');
    return (
      <input type='text' value={value} onChange={this.props.onChange} />
    );
  }
}

export default React.createClass({
  getInitialState() {
    return {
      text: 'abc',
      param: '1'
    };
  },
  handleClick() {
    this.setState({
      param: ++this.state.param
    });
  },
  handleClick2() {
    this.setState({
      param: this.state.param
    });
  },
  render() {
    return (
      <div>

        <h1>Hellosdasd!!!</h1>
        <Aa text='ahaha' />
        <Link to='/' activeClassName='active'>

        <h1>Hello!!!</h1>
        <MyInput value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
        {/*imems.map((item, index) => {
          return (
            <Item key={index} param={this.state.param} item={item} />
          );
        })}

        <br/>class<br/>

        {imems.map((item, index) => {
          return (
            <Item2 key={index} param={this.state.param} item={item} />
          );
        })*/}

        <MyInput key={this.state.param} value={this.state.param} onChange={e => {}} />



        <button onClick={this.handleClick}>change param handleClick</button>
        <button onClick={this.handleClick2}>change param tot ge</button>

        <Link className='link' to='/' activeClassName='active'>
        
          <i className='mi material-icons mi-48'>favorite_border</i>
          <div className='link__text'>index</div>
        </Link>
        <Link className='link' to='/users' activeClassName='active'>
          <i className='mi material-icons mi-48'>face</i>
          <div className='link__text'>users</div>
        </Link>
        <i className='mi material-icons mi-48'>flight_takeoff</i>
        <i className='mi material-icons mi-48'>call_made</i>
        <i className='mi material-icons mi-48'>account_circle</i>
        <i className='mi material-icons mi-48'>call_made</i>
      </div>
    );
  }
});
