import {useNavigate} from 'react-router-dom';

function Article_category_button_detail (props) {
    let name = props[0];
    let id = props[1];
    let navigate = useNavigate();
    function handleChange(value){
        navigate(`/cat/${value}`);
    }

    return (
        <div>
         <button onClick={event => {
                return( handleChange(event.target.value));}} 
                value={id} className="articleCategoryButton" >{name}</button>
        </div>
    );
}

export default Article_category_button_detail;