import React from 'react';
import IndexPage from './IndexPage';

import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import CreateMovie from './CreateMovie';
import ListMovie from './ListMovie';


describe('Test IndexPage Component', () => {
    it('Render IndexPage', () => {
        const indexPage = shallow(<IndexPage />);
        const index = indexPage.find("#indexPage");

        expect(index).to.have.length(1);
        expect(index.find(ListMovie)).to.have.length(1);
        expect(index.find(CreateMovie)).to.have.length(1);

    })
});
