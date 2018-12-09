import React from 'react';
import ReactDOM from 'react-dom';
import App, {inc, dec, Value} from './App';

import { mount, render, shallow, configure } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

// global.mount = mount;
// global.render = render;
// global.shallow = shallow;



configure( { adapter: new Adapter() } );

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

*/



describe("Custom functions test" , () => {
  
  // mock functions
  it('decrement, state value decrement -1', () => {
    const state = { value : 0 };
    const newState = dec(state);
  
    expect( newState.value ).toEqual(-1);
  });
  
  it('increment, state value increment +1', () => {
    const state = { value : 0 };
    const newState = inc(state);
  
    expect( newState.value ).toEqual(1);
  });
})

describe("App Component Test, Enzyme", () => {
  it("Renders Value", () => {
    const Container = shallow(<App/>);

    expect( Container.find(Value)).toHaveLength(1);
  })

  it( "Value component  Props Check", () => {
    const Container = shallow(<App/>);
    let ValueComponent = Container.find(Value);

    expect( ValueComponent.props().value ).toEqual(0);

    Container.setState({value:7});
    ValueComponent = Container.find(Value);
    expect( ValueComponent.props().value ).toEqual(7);
  })

  it('Tests Increment Button +', () => {
    const Container = shallow(<App/>);
    Container.setState({ value: 0 });
    Container.find('button').at(0).simulate('click');
    expect( Container.state().value ).toEqual(1);
  })

  it('Tests Decrement Button -', () => {
    const Container = shallow(<App/>);
  })

})
