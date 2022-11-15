import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems, getItems } from "../../store/items";
import SearchResults from "./SearchResults";
import Fuse from 'fuse.js';
import './Search.css'

const Search = () => {

    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)
    const { keyWord } = useParams()
    const allItems = useSelector(getItems)

    useEffect(() => {
        dispatch(fetchItems()).then(res => {
            setLoaded(true)
        })
    },[dispatch])

    const options = {
        shouldSort: true,
        threshold: 0.4,
        keys: ['name', 'description']
    }

    const filter = new Fuse(allItems, options)

    const resultItems = filter.search(keyWord);


    if(!loaded) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="search-page">
                <div className="search-result-text">
                    Results for "{keyWord}".
                </div>
                <div className="search-container">
                    {resultItems.length ? resultItems.map(resultItem => (
                        <SearchResults resultItem={resultItem}/> 
                    )) :
                        <div className="no-results">
                            Hmmmm, we didn't find anything for "{keyWord}".<br />
                            Try a different search term.
                        </div>
                    }
                </div>
            </div>
        );
    }
}
 
export default Search;