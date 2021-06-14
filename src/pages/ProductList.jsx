import React, { useEffect } from "react";
import useState from "react-usestateref";
import {
    withRouter
} from "react-router-dom";
import axios from "axios";
import {
    Container,
    Row,
    Col
} from "reactstrap"
import {
    URL_BACKEND,
    BACKEND_ROOT,
    BE_PATH_ITEMS,
    QUERY_PARAM,
    BE_QP_Q
} from "../constants/globalConstants.jsx";
import Breadcrumb from "../components/Commons/Breadcrumb";
import ProductItem from "../components/ProductItem";


const ProductList = (props) => {
    const [productList, setProductList] = useState({});
    const [categories, setCategories] = useState([]);
    const searchQuery = props.searchQuery;

    useEffect(() => {
        async function loadProducts() {
            axios.get(
                URL_BACKEND + BACKEND_ROOT + BE_PATH_ITEMS + QUERY_PARAM + BE_QP_Q + searchQuery
            ).then((data) => {
                setProductList(data.data);
            });
        }
        loadProducts();
    }, [searchQuery]);

    useEffect(() => {
        if (productList)
            setCategories(productList.categories)
    }, [productList]);

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Breadcrumb items={categories} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <ProductItem items={productList}></ProductItem>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default withRouter(ProductList);