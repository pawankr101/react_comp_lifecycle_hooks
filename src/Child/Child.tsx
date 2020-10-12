import React from 'react';
import './Child.css';
import { SubChild } from '../SubChild/SubChild'

export class Child extends React.Component {
    state = {
        component_name: 'Child',
        counter: 0
    }

    constructor(props) {
      super(props);
      console.log('---------------------------------------------------')
      this.state.component_name += ' Component';
      this.increment_count = this.increment_count.bind(this);
      this.decrement_count = this.decrement_count.bind(this);
      console.log(`${this.state.component_name} constructor`);
      console.log('---------------------------------------------------')
    }

    increment_count(val) {
        val = val || 1;
        this.setState({
            counter: this.state.counter + val,
        });
    }

    decrement_count(val) {
        val = val || 1;
        this.setState({
            counter: this.state.counter - val,
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('---------------------------------------------------')
        console.log(`Child Get derived State from props`)
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
        const { component_name, counter } = this.state;
        console.log(`${component_name} Render Method`);
        console.log('---------------------------------------------------')
        return (
            <div className="Child">
                <div style={{margin: '10px'}}>
                    {component_name} | Counter: {counter}
                </div>
                <div style={{margin: '10px'}}>
                    <button style={{marginRight: '10px'}} onClick={() => this.increment_count(2)}>Increment</button>
                    <button onClick={() => this.decrement_count(2)}>Decrement</button>
                </div>
                <SubChild {...{parent_counter:counter}}/>
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