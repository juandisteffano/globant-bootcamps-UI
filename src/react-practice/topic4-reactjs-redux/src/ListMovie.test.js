import React from 'react';
import ListMovie from './ListMovie';
import Movie from './Movie';

import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('Test ListMovie Component', () => {
    it('Render ListMovie with movies', () => {
        const mov = new Movie("nameMovie","yearMovie","durationMovie","idMovie");
        const store = mockStore({movies : [mov],
                                movie: {},
                                showEditForm: [],
                                });
        const listMovie = mount(
                                <Provider store={store}>
                                    <ListMovie />
                                </Provider>
                                );

        const list = listMovie.find("ListMovie");

        expect(list).to.have.length(1);

        expect(list.find("header")).to.have.length(1);
        expect(list.find("header").text()).to.equal("Favorites Movies");
        
        expect(list.find("li")).to.have.length(1);
        expect(list.find("CustomButton").at(0).props().content).to.equal("Delete");
        expect(list.find("EditMovie")).to.have.length(1);

    });

    it('Render ListMovie without movies', () => {
        const store = mockStore({movies : [] });
        const listMovie = mount(<ListMovie
                                    store={store}
                                />);

        const list = listMovie.find("ListMovie");

        expect(list).to.have.length(1);

        expect(list.find("header")).to.have.length(1);
        expect(list.find("header").text()).to.equal("Favorites Movies");
        
        expect(list.find("ol").text()).to.equal("Not Movies");

        expect(list.find("li")).to.have.length(0);
    });

})
