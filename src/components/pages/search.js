import React, { Component } from 'react';
import { connect } from "react-redux";
import {getGifs} from "../../store/actions/gif";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
         searchItem: "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submit = this.submit.bind(this);
      }
      
    onChangeHandler = (e) => {
        this.setState({
          searchItem: e.target.value
        })
      }
    submit(){
        this.props.getGifs((this.state.searchItem))
        this.setState({
            search: true
        })
    }
    render(){
        return(
            <div >
            <div className="search">
                <div className="search-box">
                <input type="text" name="item" onChange={this.onChangeHandler} value={this.state.searchItem} placeholder="Search for gifs"/>
                <button onClick={this.submit}>Search</button>
                </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
	gifs: state.gif.gifs,
	isLoading: state.gif.isLoading,
});


export default connect(mapStateToProps,
	{getGifs}) (Search);