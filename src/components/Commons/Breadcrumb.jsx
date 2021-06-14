import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
    Row
} from "reactstrap";
import "./breadcrumb.sass";

const Breadcrumb = (props) => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (props.items)
            setCategories(props.items.map((category, index) => (
            index + 1 === props.items.length ?
                <span key={category}><strong>{category}</strong></span>
                :
                <span key={category}>{category} {" > "}</span>
            )));
    },[props.items])

    return (
        <Row>
            <div className="bread-padds">
                <span>
                    {categories}
                </span>
            </div>
        </Row>
    );
}

export default withRouter(Breadcrumb);