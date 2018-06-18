import React, {Component} from 'react';

//#region Components
import Menu from './Admin/Menu/Menu';
import StoriesList from './Admin/Stories/StoriesList';
import CategoriesList from './Admin/Categories/CategoriesList';
import ProductsList from './Admin/Products/ProductsList';
//#endregion


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { activeList: 'stories'  };
    }

    ActiveToggle = e =>{
        this.setState({
            activeList: e.target.name
        })
        console.log(this.state.activeList);
    }

    render() {
        const {activeList} = this.state;
        return (
            <div className="app grid ">
                <Menu  toggle={this.ActiveToggle}/>
                {
                    activeList === 'stories'? <StoriesList getUrl="admin/GetStories" postUrl="admin/AddHistory" deleteUrl="admin/DeleteHistory"/> :
                    activeList === 'categories'? <CategoriesList getUrl="admin/GetCategories" postUrl="admin/AddCategory" deleteUrl="admin/DeleteCategory"/>:
                    activeList === 'products'? <ProductsList  getUrl="admin/GetProducts" postUrl="admin/AddProduct" deleteUrl="admin/DeleteProduct" getCategoriesUrl="admin/GetCategories"/> : 
                    <div className="def">
                        <h1>Error</h1>
                    </div>
                }
                
                
                
            </div>
        );
    }
}