import {useNavigate} from 'react-router-dom';
function CategorySelect(props) {
    let format = Object.values(props);
    let navigate = useNavigate();
    function handleChange(value){
        navigate(`/cat/${value}`);
    }
    return (
        <div>
            <select onChange={event => {
                return( handleChange(event.target.value));}}  
                defaultValue={"Categorías"}  className="categorySelect">
                <option >Categorías</option>
                {format.map((a, k) => {
                    let id = a.id;
                    return (
                        <option value={id} key={k}>
                              {a.name}
                        </option>
                         );
                 })}
            </select>
        </div>)
        ;

}
export default CategorySelect;