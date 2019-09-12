import React from 'react';
import './App.css';
import Child from './Child/Child'

class App extends React.Component {
  state = {
    component_name: 'App'
  }

  constructor() {
    super();
    console.log('---------------------------------------------------')
    this.state.component_name += ' Component'
    console.log(`${this.state.component_name} constructor`)
    console.log('---------------------------------------------------')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('---------------------------------------------------')
    console.log(`App Get derived State from props`)
    console.log('props', props)
    console.log('state', state)
    console.log('---------------------------------------------------')
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Should Component Update`)
    console.log('nextProps', nextProps)
    console.log('nextState', nextState)
    console.log('---------------------------------------------------')
    return (JSON.stringify(this.props) === JSON.stringify(nextProps))
            && (JSON.stringify(this.state) === JSON.stringify(nextState))
            ? false : true;
  }

  render() {
    console.log('---------------------------------------------------')
    const { component_name } = this.state;
    console.log(`${component_name} Render Method`);
    console.log('---------------------------------------------------')
    return (
      <div className="App">
        <div style={{margin: '10px'}}>
          {component_name}
        </div>
        <Child/>
      </div>
    );
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Get SnapShot before update`)
    console.log('prevProps', prevProps)
    console.log('prevProps', prevState)
    console.log('---------------------------------------------------')
    return `Snapshot from ${this.state.component_name} Get SnapShot before update`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Component Did Update`)
    console.log('prevProps', prevProps)
    console.log('prevProps', prevState)
    console.log('snapshot', snapshot)
    console.log('---------------------------------------------------')
  }

  componentDidMount() {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Component Did Mount`)
    console.log('---------------------------------------------------')
  }

  componentWillUnmount() {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Component Will Unmount`)
    console.log('---------------------------------------------------')
  }

  componentDidCatch(error, info) {
    console.log('---------------------------------------------------')
    console.log(`${this.state.component_name} Component Did Catch`)
    console.log('error', error);
    console.log('info', info);
    console.log('---------------------------------------------------')
  }
}

export default App;
