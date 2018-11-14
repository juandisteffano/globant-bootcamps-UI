import React from 'react';
import CreateMovie from './CreateMovie';

import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('Test CreateMovie Component', () => {
    it('Render CreateMovie show', () => {
        const store = mockStore({showCreateForm: true,
                                movie: {}});
        const creteMovie = mount(<Provider store={store}>
                                        <CreateMovie />
                                    </Provider>);
        const create = creteMovie.find(".createMovie");

        expect(create).to.have.length(1);

        expect(create.find("header")).to.have.length(1);
        expect(create.find("header").text()).to.be.equal("Create New");

        
        expect(create.find("FormMovie")).to.have.length(1);
        expect(create.find("FormMovie").props().id).to.be.equal("createForm");
        expect(create.find("FormMovie").props().formType).to.be.equal("Create");

        expect(create.find("CustomButton")).to.have.length(1);
        expect(create.find("CustomButton").props().content).to.be.equal("Create");

    })

    it('Render CreateMovie not show', () => {
        const store = mockStore({showCreateForm: false,
                                movie: {}});
        const creteMovie = mount(<Provider store={store}>
                                        <CreateMovie />
                                    </Provider>);
        const create = creteMovie.find(".createMovie");

        expect(create).to.have.length(0);
        expect(create.find("header")).to.have.length(0);
        expect(create.find("FormMovie")).to.have.length(0);
        expect(create.find("CustomButton")).to.have.length(0);
    })

});
