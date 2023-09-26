import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component{

    state = {
        series : [],
        seriesName :'',
        isFetching : false
    } 
    
    onSeriesInputChanges = e => {

        this.setState({ seriesName : e.target.value, isFetching : true });

        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then( (response) => response.json())
            .then( json => this.setState({ series:json, isFetching : false }) );

        console.log(e.target.value);
    }

    render()
    {
        const { series, seriesName, isFetching } = this.state;

        return(

            <div>The length of the series array : { this.state.series.length }
            <div>
                <Intro message = "Here you can find all your loved movies" />
                <input value ={seriesName} 
                       type="text" 
                       onChange={ this.onSeriesInputChanges } />
            </div>
            <div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter any TV series name </p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series found for this name </p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} /> 
                }
            </div>
            
            </div>
        )
    }
}

export default Series;