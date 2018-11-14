import React from 'react';
import CustomButton from './CustomButton';
import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test CustomButtom Component', () => {
    it('Render CustomButton', () => {
        const customButton = shallow(<CustomButton 
                                className = "button-large create"
                                content = "Create"
                                //onClick = {this.props.handleSaveClick}
                                disabled = {true}
                            /> );
        const button = customButton.find('button');

        expect(button).to.have.length(1);
        expect(button.props().disabled).to.equal(true);
        expect(button.props().className).to.equal("button-large create");
        expect(button.render().text()).to.equal("Create");
    });

    it('Test Click', () => {
        const mockCallBack = jest.fn();
        const customButton = shallow(<CustomButton 
                                className = "button-large create"
                                content = "Create"
                                onClick = {mockCallBack}
                                disabled = {false}
                            /> );
        const button = customButton.find('button');

        button.simulate('click');
        expect(mockCallBack.mock.calls.length).to.equal(1);
    });
})
