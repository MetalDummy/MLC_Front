import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import SearchBar from "../components/Commons/searchBar"
import ProductList from "./ProductList"
import ProductDetail from "./ItemPage"
import * as QueryString from "query-string"
import { useEffect } from 'react';
import useState from "react-usestateref";


const Home = () => {
    let location = useLocation();
    const [inputText, setInputText] = useState("");
    const [productDetailId, setProductDetailId] = useState("");
    
    useEffect(() => {
        setInputText(QueryString.parse(location.search).search);
    },[location, setInputText]);

    let changeSearchText =  (inputTextRef)  =>  {
        setInputText(inputTextRef);
    }

    return (
        <>
        <Router>
        <SearchBar searchText={inputText} onChange={changeSearchText}/>
            <Switch>
                <Route exact path="/items">
                    <ProductList searchQuery={inputText}/>
                </Route>
                <Route exact path="/items/:id">
                    <ProductDetail productId={productDetailId}/>
                </Route>
            </Switch>
        </Router>
        </>
    );
    
}

export default Home;