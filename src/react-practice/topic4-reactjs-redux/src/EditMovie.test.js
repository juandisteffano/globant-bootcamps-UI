import React from 'react';
import EditMovie from './EditMovie';
import Movie from './Movie';

import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';


const mockStore = configureStore();

describe('Test EditMovie Component', () => {
    it('Render EditMovie not show', () => {
        const mov = new Movie("nameMovie","yearMovie","durationMovie",1); 
        const store = mockStore({movies : [mov],
                                movie: {},
                                showEditForm: [false],
                                });
        const editMovie = mount(<Provider store={store}>
                                    <EditMovie
                                        movieFromList={mov}
                                    />
                                </Provider>
                                );

        const edit = editMovie.find("EditMovie");
        expect(edit).to.have.length(1);

        expect(edit.find("CustomButton")).to.have.length(1);

    });

    it('Render EditMovie show', () => {
        const mov = new Movie("nameMovie","yearMovie","durationMovie",1); 
        const store = mockStore({movies : [mov],
                                movie: {},
                                showEditForm: [true],
                                });
        const editMovie = mount(<Provider store={store}>
                                    <EditMovie
                                        movieFromList={mov}
                                    />
                                </Provider>
                                );

        const edit = editMovie.find("EditMovie");
        expect(edit).to.have.length(1);

        expect(edit.find("CustomButton")).to.have.length(2);
        expect(edit.find("FormMovie")).to.have.length(1);

    });
})
