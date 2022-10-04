import { Link } from 'react-router-dom';
function article_category_button(props) {
    let array = Object.values(props);
    return (
        <div>
            {array.map((e, k) => {
                let id = e[1];
                let path = '/cat/' + id;
  
                return (
                    <Link key={k} to={{
                        pathname: path,
                        query: {id}
                    }}>
                        <button className="articleCategoryButton" >{e[0]}</button>
                    </Link>);
            }
            )}

        </div>
    );
}

export default article_category_button