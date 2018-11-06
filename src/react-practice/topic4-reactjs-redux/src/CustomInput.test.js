import React from 'react';
import CustomInput from './CustomInput';
import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test CustomInput Component', () => {
    it('Render CustomInput', () => {
        const customButton = shallow(<CustomInput 
                                        className="customInput"
                                        placeholder="Name"
                                        id="idMovie"
                                        type="text"
                                        value="MovieName"
                                        //onChange={this.onChange}
                                    />);
        const input = customButton.find('input');

        expect(input).to.have.length(1);
        expect(input.props().className).to.equal("customInput");
        expect(input.props().placeholder).to.equal("Name");
        expect(input.props().id).to.equal("idMovie");
        expect(input.props().type).to.equal("text");
        expect(input.props().value).to.equal("MovieName");
    });

    it('Test Change Input', () => {
        const onChangeMock = jest.fn();
        const customButton = shallow(<CustomInput 
                                        className="customInput"
                                        placeholder="Name"
                                        id="idMovie"
                                        type="text"
                                        value="MovieName"
                                        onChange={onChangeMock}
                                    />);
        const input = customButton.find('input');

        input.simulate('change');
        expect(onChangeMock.mock.calls.length).to.equal(1);
    });
})
