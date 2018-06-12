import React from 'react';

//#region Components
import StoriesList from './Admin/Stories/StoriesList';
import CategoriesList from './Admin/Categories/CategoriesList';
import ProductsList from './Admin/Products/ProductsList';
//#endregion

const App = () =>
    (
        <div className="app grid ">
            <StoriesList getUrl="admin/GetStories" postUrl="admin/AddHistory"/>
            <CategoriesList />
            <ProductsList />
        </div>
    );

export default App;