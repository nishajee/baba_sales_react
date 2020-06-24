import React from 'react'
import { shallow,configure } from 'enzyme';
import LoginPage from './../components/Login'
import Adopter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({adopter:new Adopter() });
describe('<LoginPage/>',()=>{
  it('renders the login from',()=>{
      const wrapper= shallow(<LoginPage/>);
      expect (wrapper.find('.Login-page')).to.have.length(1);
  });
  it('clicking on checkbox changes state',()=>{

    const wrapper= shallow(<LoginPage/>);
  wrapper.find('#remember').simulate('change',{target:{checked:true}});
  expect(wrapper.state('Ischecked').to.equals(true));
  });
//   it('clicking on checkbox changes state',()=>{

//     const wrapper= shallow(<LoginPage/>);
//   wrapper.find('#remember').simulate('change',{target:{checked:true}});
//   expect(wrapper.state('Ischecked').to.equals(true));
//   });
});