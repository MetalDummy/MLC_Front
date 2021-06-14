import React, { useState } from "react";
import "./searchBar.sass";
import logo from "../../assets/Logo_ML.png";
import {
    withRouter,
    useHistory,
} from "react-router-dom";
import searchIcon from "../../assets/ic_Search.png";

import {
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    Container,
    Form,
    Row,
    Col
} from "reactstrap"
import { useEffect } from "react";

const SearchBar = (props) => {
    let history = useHistory();
    const [searchText, setSearchText] = useState(props.searchText || "");
    const [searchTextRef, setSearchTextRef] = useState("");
    const callBack = props.onChange;

    useEffect(() => {
        if (searchTextRef.length >= 4) {
            callBack(searchTextRef);
            history.push("/items?search=" + searchTextRef);
        }
    }, [searchTextRef]);

    const submitChange = (e) => {
        e.preventDefault();
        setSearchTextRef(searchText);
    }

    return (
        <header className="search-bar">
            <Container>
                <Row form>
                    <Col md={{ size: 1, offset: 1 }}>
                        <center>
                            <img className="logo-button" style={{ cursor: "pointer" }} src={logo} alt={"MeLi Logo"} />
                        </center>
                    </Col>
                    <Col md={9}>
                        <Form onSubmit={submitChange}>
                            <InputGroup className="mb-2">
                                <Input className="text-box-search-bar form-control-sm"
                                    placeholder="Nunca dejes de buscar" value={searchText}
                                    onChange={e => setSearchText(e.target.value)} onSubmit={submitChange} />
                                <InputGroupAddon addonType="append">
                                    <Button style={{backgroundColor:"#d3d3d3"}}  className="search-button" onClick={submitChange}>
                                        <img src={searchIcon} alt={"Search button"} />
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default withRouter(SearchBar);