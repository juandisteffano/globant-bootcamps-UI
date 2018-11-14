import React from 'react';
import FormMovie from './FormMovie';
import Movie from './Movie';

import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureStore from 'redux-mock-store';


const mockStore = configureStore();

describe('Test FormMovie Component', () => {
    it('Render FormMovie', () => {
        const mov = new Movie("nameMovie","yearMovie","durationMovie","idMovie");
        const store = mockStore({movie : mov });
        const formMovie = mount(<FormMovie
                                        store={store}
                                        id = "editForm"
                                        formType = "Edit"
                                    />);

        const form = formMovie.find("FormMovie");
        expect(form).to.have.length(1);
        expect(form.props().id).to.equal("editForm");
        expect(form.props().formType).to.equal("Edit");

    });

    it('Render CustomInputs from FormMovie', () => {
        const mov = new Movie("nameMovie","yearMovie","durationMovie","idMovie");
        const store = mockStore({movie : mov });
        const formMovie = mount(<FormMovie
                                        store={store}
                                        id = "editForm"
                                        formType = "Edit"
                                    />);

        const inputs = formMovie.find("CustomInput");
        expect(inputs).to.have.length(3);
        expect(inputs.at(0).props().id).to.equal("nameEditidMovie");
        expect(inputs.at(1).props().id).to.equal("durationEditidMovie");
        expect(inputs.at(2).props().id).to.equal("yearEditidMovie");
    });

    it('Render CustomInputs from FormMovie without Movie', () => {
        const store = mockStore({movie: {}});
        const formMovie = mount(<FormMovie
                                        store={store}
                                        id = "createForm"
                                        formType = "Create"
                                    />);

        const inputs = formMovie.find("CustomInput");
        expect(inputs).to.have.length(3);
        expect(inputs.at(0).props().id).to.equal("nameCreate");
        expect(inputs.at(1).props().id).to.equal("durationCreate");
        expect(inputs.at(2).props().id).to.equal("yearCreate");
    });
})
