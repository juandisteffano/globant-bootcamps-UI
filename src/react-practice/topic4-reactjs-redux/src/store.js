import { createStore } from 'redux';
import Movie from './Movie';


const initialState = {
    movie: new Movie('','','',0),
    /*
    movies: [new Movie("Pel1",168,199,1),
            new Movie("Pel1",168,199,2)
        ],
    */
    movies: [],
    disabledCreateButton: true,
    idCount: 0,
    showEditForm: [],
    disabledSaveButton: false,
    showCreateForm: true,

}

const reducer = (state=initialState, action)=>{
    let showEdit = state.showEditForm;

    switch(action.type){
        case 'EDIT_MOVIE_SAVE':
            showEdit[action.movieFL.id-1] = false;
            return {
                ...state,
                movie: new Movie('','','',state.idCount),
                showEditForm: showEdit,
                movies: state.movies.map((element) => {
                    if(element.id === action.movieFL.id){
                        return state.movie
                    }else{
                        return element;
                    }
                }),
                showCreateForm: true
                
            }

        case 'EDIT_MOVIE_CANCEL':
            showEdit[action.movieFL.id-1] = false;
            return {
                ...state,
                movie: new Movie('','','',state.idCount),
                showEditForm: showEdit,
                showCreateForm: true
            }

        case 'EDIT_MOVIE':
            return {
                ...state,
                movie: action.movieFL,
                //showEditForm: showEdit,
                showEditForm: state.showEditForm.map((element, index) => {
                    if(index === action.movieFL.id-1)
                        return true
                    return false
                }),
                showCreateForm: false
            }
            
        case 'CHANGE_INPUT':
            return {
                ...state,
                movie: action.movie, 
                disabledCreateButton: action.disabledCreateButton,
                disabledSaveButton: action.disabledCreateButton,
            }
        
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: state.movies.concat(new Movie(state.movie.name,state.movie.duration,state.movie.year,state.idCount+1)),
                movie: new Movie('','','',state.idCount+1), 
                disabledCreateButton: true, 
                idCount: state.idCount+1,
                showEditForm: state.showEditForm.concat(false)
            }
          
        case 'DELETE_MOVIE':
            return {
                ...state, 
                movies:state.movies.filter(movie => movie.id!==action.movie.id)
            }
        default:
            return state;
    }
};


const store = createStore(reducer, initialState);


export default store;
