import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems, getItems } from "../../store/items";
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

    const filter = new Fuse(allItems, {
        keys: ['name']
    })

    const searchResults = filter.search(keyWord);

    console.log(searchResults)

    return (
        <div className="search-container">
            dsadsadsadas
        </div>
    );
}
 
export default Search;