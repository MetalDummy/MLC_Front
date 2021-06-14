import React, { useEffect } from "react";
import {
    useParams,
    withRouter
} from "react-router-dom";
import useState from "react-usestateref";
import axios from "axios";
import {
    Col,
    Row,
    Container,
    Button
} from "reactstrap";
import {
    URL_BACKEND,
    BACKEND_ROOT,
    BE_PATH_ITEMS,
    RESOURCE_DEL
} from "../constants/globalConstants.jsx";
import "./itempage.sass";
import Breadcrumb from "../components/Commons/Breadcrumb.jsx";

const ItemPage = (props) => {
    let { id } = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        console.log(props)
        async function loadProduct() {
            axios.get(
                URL_BACKEND + BACKEND_ROOT + BE_PATH_ITEMS + RESOURCE_DEL + id
            ).then((data) => {
                setProductDetail(data.data);
            });
        }
        loadProduct();
    }, [id]);

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <Breadcrumb isDetail={true} items={productDetail.categories}/>
                </Col>
            </Row>
            <Row>
                <Col  xs="12">
                    <Container className="item-description">
                        <Row>
                            <Col xs={12} md={8}>
                                <center>
                                    <div className="image-container">
                                        <img className="image-wrapper" src={productDetail.picture} alt={productDetail.title} />
                                    </div>
                                </center>
                            </Col>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col xs={12}>
                                        <p className="item-condition">{productDetail.condition === "new" ? "Nuevo" : "Usado"} - {productDetail.sold_quantity}</p>
                                        <p className="item-name">{productDetail.title}</p>
                                        <p className="item-price">{productDetail.price ? (new Intl.NumberFormat('es-AR').format(productDetail.price.amount)):""},{productDetail.price?productDetail.price.decimals:""}</p>
                                        <Button style={{ width: "100%" }} color="primary">Comprar</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={8}>
                                <div className="descripcion-producto">
                                    <p className="item-desc-header">Descripción del producto</p>
                                    <p className="item-desc-body">{productDetail.description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}


// class ItemPage extends Component {
//     render() {
//         return(
//         <div className="item-description">
//             <Row>
//                 <Col item xs="12" md="8">
//                     <center>
//                         <div className="image-container">
//                             <img className="image-wrapper" src={this.props.imgUrl} alt={this.props.title} />
//                         </div>
//                     </center>
//                 </Col>
//                 <Col item xs="12" md="4">
//                     <Row>
//                         <Col item xs="12">
//                             <p className="item-condition">{this.props.condition === "new" ? "Nuevo" : "Usado"} - {this.props.soldQuantity} vendidos</p>
//                             <p className="item-name">{this.props.title}</p>
//                             <p className="item-price">{this.props.currency} ${this.props.price}</p>
//                             <Button style={{ width: "100%" }} color="primary">Comprar</Button>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col item xs="12" md="8" >
//                     <div className="col-margin-top-thirty-two">
//                         <p className="item-desc-header">Descripción del producto</p>
//                         <p className="item-desc-body">{this.props.description}</p>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//         )
//     }
// }

export default withRouter(ItemPage);