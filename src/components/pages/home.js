import React, { useState,useEffect} from 'react';
import { getGifs } from "../../store/actions/gif";
import Gifcard from "./gifCards";
import { Spinner } from "reactstrap";
import Pagination from "react-js-pagination";
import 'animate.css';

import { useDispatch, useSelector } from "react-redux";
const Home = () => {
    let [hide, setH] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gifsPerPage, setGifsPerPage] = useState(30);
    const [numPage] = useState(gifsPerPage);
    let [searchItem, setSearchItem] = useState("");
    const dispatch = useDispatch();

    function submit() {
        dispatch(getGifs((searchItem)))
        setH(hide = true)
    }

    const gifs = useSelector(state => state.gif.gifs);
    const isLoading = useSelector(state => state.gif.isLoading);

    // Get current gifs
    const indexOfLastGif = currentPage * gifsPerPage;
    const indexOfFirstGif = indexOfLastGif - gifsPerPage;

    useEffect(() => {
        setGifsPerPage(numPage);
      }, [numPage]);
    
      const paginate = pn => {
        setCurrentPage(pn);
      };
    return (
        <div>
            <div className="search">
                <div className="search-box">
                    <input type="text" name="item" onChange={(e) => setSearchItem(searchItem = e.target.value)} placeholder="Search for gifs" />
                    <button onClick={submit}>Search</button>
                </div>
            </div>
           {hide ? 
           <>
            {!isLoading ? (
                <>
                    {gifs.data === undefined && gifs.pagination === undefined ? "" : 
                    (
                    <>
                    {gifs.data.length === 0 ? <div className="spinner">Gif not found</div> : 
                    (
                        <>
                    <Gifcard gifs={gifs.data.slice(indexOfFirstGif, indexOfLastGif)} isLoading={isLoading} />
                    <div className="mt-5 pagination">
                        <Pagination
                        hideFirstLastPages
                        pageRangeDisplayed={10}
                        activePage={currentPage}
                        itemsCountPerPage={gifsPerPage}
                        totalItemsCount={200}
                        onChange={paginate}
                        prevPageText="<"
                        nextPageText=">"
                        itemClass="page-item"
                        linkClass="page-link"
                        />
                     </div>
                    </>
                    )}
            </>
            )}
            </>) : <div className="spinner"><Spinner /></div>}
            </>
            : (<><div  className="animate__animated animate__heartBeat animate__infinite">
                <h1 >GIPHY</h1>
                <p>Home of Gifs</p>
                </div></>)
        }

        </div>
    )
}

export default Home;