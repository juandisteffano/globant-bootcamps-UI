import React from 'react';

export default class ListMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          movies: [{
                    key: 1,
                    name: "Pel1",
                    duration: 168,
                    year: 1999,
                },
                { 
                    key: 2,
                    name: "Pel2",
                    duration: 168,
                    year: 1999,
                },
            ],
        };
      }


    render(){
        const mov = this.state.movies.map((movie, num) => {
            return (
                <li key={num}>
                    {movie.name} , {movie.duration} , {movie.year}
                </li>
            );
        });


        return (
            <div className="listMovie">
                <header>Movies:</header>
                <section>
                    <ol>{mov}</ol> 
                </section>
            </div>
        )
    }




}

