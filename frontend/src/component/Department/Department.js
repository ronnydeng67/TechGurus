import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems, getItems } from "../../store/items";
import FilterItem from "./FilterItem";
import './Department.css';



const Department = () => {

    const items = useSelector(getItems)
    const dispatch = useDispatch()
    const { department } = useParams();

    useEffect(() => {
        dispatch(fetchItems())
    },[])

    let filterList = []
    if (Object.values(items).length > 0) {
        filterList = Object.values(items).filter(item => 
            item.department === department    
        ).map(filterItem => <FilterItem key={filterItem.id} filterItem={filterItem}/>)

    }

    console.log(filterList)
    if (items) {
        return (
            <div className="department-container">
                <div className="department-title">
                    {department.toUpperCase()}
                </div>
                <div className="department-page">
                    {filterList}
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
 
export default Department;