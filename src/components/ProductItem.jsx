import {
    useState,
    useEffect
} from "react";
import {
    withRouter,
    useHistory
} from "react-router-dom";
import freeShiping from "../assets/ic_shipping.png"
import {
    Col,
    Row,
    Container,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import "./productitem.sass";

const ProductItem = (props) => {
    let history = useHistory();
    const productList = props.items;
    const [productsToRender, setProductsToRender] = useState([]);
    const [productDetailId, setProductDetailId] = useState("");

    const goToProduct = (e) => {
        console.log("goToProduct");
        console.log(e.target.id);
        setProductDetailId(e.target.id);
        history.push("/items/" + e.target.id);
    }

    useEffect(() => {
        if (productList.items) {
            setProductsToRender(productList.items.map(
                product => {
                    return (
                        <ListGroupItem key={product.title} style={{ padding: 0, border: "1px solid rgba(0,0,0,.125)", cursor: "pointer" }}>
                            <Container id={product.id} className="product-item">
                                <Row>
                                    <Col id={product.id} onClick={goToProduct} className="col-padds-left-sixteen" xs="12" md="auto">
                                        <center>
                                            <div id={product.id} className="image-container">
                                                <img id={product.id} onClick={goToProduct} className="image-wrapper" src={product.picture} alt={"Foto de: " + product.title} />
                                            </div>
                                        </center>
                                    </Col>
                                    <Col id={product.id} xs="12" md="8" className="col-padds-left-sixteen">
                                        <Row>
                                            <Col id={product.id} xs="12" sm="9">
                                                <p id={product.id} onClick={goToProduct} className="item-price">$ {new Intl.NumberFormat('es-AR').format(product.price.amount)},{product.price.decimals}
                                                    {' '}{product.free_shipping ? <img id={product.id} src={freeShiping} alt={"Icono: envio gratis"}></img> : null}
                                                </p>
                                                <p id={product.id} onClick={goToProduct} className="item-title">{product.title}</p>
                                            </Col>
                                            <Col id={product.id} xs="12" sm="3">
                                                <p className="item-address">{product.address}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>
                    );
                }
            ))
        }
    }, [productList]);

    return (
        <>
            <ListGroup>
                {productsToRender}
            </ListGroup>
        </>
    );
}

export default withRouter(ProductItem);