import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../../store/items';
import './ItemShowPage.css';

const ItemShowPage = () => {

    const { itemId } = useParams();
    // const item = useSelector(state => state.items[itemId])
    const dispatch = useDispatch();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchItem(itemId)).then((res) => {
            setItem(res)
        }).then(() => {
            setIsLoading(false)
        })
    },[itemId])

    // useEffect(() => {
    //     dispatch(fetchItem(itemId))
    // },[])


    console.log(item)

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="item-container">
                {item.name}
                {item.price}
                {item.desciption}
                {item.detail}
            </div>
        );
    }

}
 
export default ItemShowPage;