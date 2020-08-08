import React, {Component} from "react";
import { connect } from "react-redux";
import {getSingleGif} from "../../store/actions/gif";
import { Spinner } from "reactstrap";

class  DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        const gifId = this.props.match.params.id;
        this.props.getSingleGif(gifId)
       
    }
    
    render() {
        const {isLoading, gif} = this.props;
    return(
        <>
        {!gif ? (<p>Gifs</p>) :(
        <div className="detail">
            {isLoading ? (<div className="spinner"><Spinner/></div>) : (
                <>
                    <div >
                    <div className="card">
                    <img src={gif.data.images.original.url} alt={gif.title}/>
                    </div>
                        <p><strong>Title:</strong> {gif.data.title}</p>
                         <p><strong>Source:</strong> {gif.data.source_tld}</p>
                         <p><strong>Trending Date:</strong> {gif.data.trending_datetime}</p>
                         <p><strong>Username:</strong> {gif.data.username}</p>
                         <p><strong>Rating:</strong> {gif.data.rating}</p>
                    </div>
                </>)}
        </div>)
    }
        </>
    )
    }
}

const mapStateToProps = state => ({
	gif: state.gif.gif,
	isLoading: state.gif.isLoading,
});



export default connect( mapStateToProps,{getSingleGif }) (DetailPage);