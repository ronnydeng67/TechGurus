import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems, getItems } from "../../store/items";



const Department = () => {

    const items = useSelector(getItems)
    const dispatch = useDispatch()
    const { department } = useParams();

    useEffect(() => {
        dispatch(fetchItems())
    },[])

    if (items) {
        return (
            <div className="department-container">
                
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
 
export default Department;