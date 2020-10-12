import React from 'react';
import './SubSubChild.css';
import { Utility } from '../utility';

export class SubSubChild extends React.Component {
    state: any = {
      component_name: 'SubSubChild'
    }

    constructor(props) {
      super(props);
      console.log('---------------------------------------------------')
      this.state.component_name += ' Component';
      this.state.parent_counter = props.parent_counter || 1;
      console.log(`${this.state.component_name} constructor`);
      console.log('---------------------------------------------------')
      console.log(Utility.getValue({a: {b: 'csjk'}}, 'a.b', 'nahi mila'));
    }

    static getDerivedStateFromProps(props, state) {
        console.log('---------------------------------------------------')
        console.log(`SubSubChild Get derived State from props`)
        console.log('props', props)
        console.log('state', state)
        state.parent_counter = props.parent_counter;
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
        const { component_name, parent_counter } = this.state;
        console.log(`${component_name} Render Method`);
        console.log('---------------------------------------------------')
        return (
            <div className="SubSubChild">
                <div style={{margin: '10px'}}>
                    {component_name} | Parent Counter : {parent_counter}
                </div>
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
