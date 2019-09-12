import React from 'react';
import './SubChild.css';
import SubSubChild from '../SubSubChild/SubSubChild'

class SubChild extends React.Component {
    state = {
        component_name: 'SubChild',
        mount: true,
        counter: 1
    }

    constructor(props) {
      super(props);
      console.log('---------------------------------------------------')
      this.multiply_count = this.multiply_count.bind(this);
      this.divide_count = this.divide_count.bind(this);
      this.state.component_name += ' Component';
      this.state.parent_counter = props.parent_counter || 0;
      console.log(`${this.state.component_name} constructor`);
      console.log('---------------------------------------------------')
    }
    
    multiply_count(val) {
        val = val || 2;
        this.setState({
            counter: this.state.counter * val,
        });
    }

    divide_count(val) {
        val = val || 2;
        this.setState({
            counter: this.state.counter / val,
        });
    }
    
    mount_sub_sub_child() {
        if(!this.state.mount) {
            this.setState({
                mount: true
            });
        }
    }

    un_mount_sub_sub_child() {
        if(this.state.mount) {
            this.setState({
                mount: false
            });
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('---------------------------------------------------')
        console.log(`SubChild Get derived State from props`)
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
        const { component_name, counter, parent_counter, mount } = this.state;
        console.log(`${component_name} Render Method`);
        console.log('---------------------------------------------------')
        return (
            <div className="SubChild">
                <div style={{margin: '10px'}}>
                    {component_name} | Parent Counter : {parent_counter} | Counter: {counter}
                </div>
                <div style={{margin: '10px'}}>
                    <button style={{marginRight: '10px'}} onClick={() => this.multiply_count(2)}>Multiply</button>
                    <button style={{marginRight: '10px'}} onClick={() => this.divide_count(2)}>Divide</button>
                    <button style={{marginRight: '10px'}} onClick={() => this.mount_sub_sub_child()}>Mount</button>
                    <button style={{marginRight: '10px'}} onClick={() => this.un_mount_sub_sub_child()}>Un Mount</button>
                </div>
                {mount ? <SubSubChild parent_counter={counter}/> : null}
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

export default SubChild;