import React, { useState } from "react";
import "./AdminProductItem.css";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { Modal } from "antd";
import { deleteProduct, updateProductData } from "../../firebase/firebaseData";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

export default function AdminProductItem({
  productId,
  productName,
  addedDate,
  productNumber,
  productPrice,
  sumOfBuyingOperation,
  rate,
  rateNumber,
  sumOfStars,
  commentNumber,
  productlastOfferDate,
  intialNumber,
  productOffer,
  productSomeInfo,
}) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loader, setLoader] = useState(false);
  const adminInfo = useSelector((state) => {
    return state.adminInfo;
  });
  const [initialValues, setInitialValues] = useState({
    productId: productId,
    productName: productName,
    addedDate: addedDate,
    productNumber: productNumber,
    productPrice: productPrice,
    sumOfBuyingOperation: sumOfBuyingOperation,
    rateNumber: rateNumber,
    sumOfStars: sumOfStars,
    rate: rate,
    commentNumber: commentNumber,
    productlastOfferDate: productlastOfferDate,
    intialNumber: intialNumber,
    productOffer: productOffer,
    productSomeInfo: productSomeInfo,
  });
  const [formData, setFormData] = useState({
    productId: productId,
    productName: productName,
    addedDate: addedDate,
    productNumber: productNumber,
    productPrice: productPrice,
    sumOfBuyingOperation: sumOfBuyingOperation,
    rateNumber: rateNumber,
    sumOfStars: sumOfStars,
    rate: rate,
    commentNumber: commentNumber,
    productlastOfferDate: productlastOfferDate,
    intialNumber: intialNumber,
    productOffer: productOffer,
    productSomeInfo: productSomeInfo,
  });
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const equal = (op1, op2) => {
    return JSON.stringify(op1) === JSON.stringify(op2);
  };
  const handleSubmit = async () => {
    setLoader(true);
    await updateProductData(productId, formData, adminInfo.Id);
    setLoader(false);
    window.location.reload();
    setOpen1(false);
    setOpen2(false);
  };
  const delteProductButtonClickd = async () => {
    setLoader(true);
    await deleteProduct(productId, adminInfo.Id);
    setLoader(false);
    document.location.reload();
  };
  return (
    <Container className="mt-5">
      {loader ? (
        <Loader />
      ) : (
        <Card className="shadow-lg">
          <Card.Body>
            <Row className="mb-4">
              <Col>
                <h2 className="text-primary">{productName}</h2>
                <h6 className="text-muted">Added at: {addedDate}</h6>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        Number of this product in store:
                      </span>{" "}
                      {productNumber}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        The cost of this product:
                      </span>
                      ${productPrice}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        Number of purchase operations for this product:
                      </span>{" "}
                      {sumOfBuyingOperation}
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">current offer:</span>{" "}
                      {productOffer.length > 0 ? productOffer : "no offer"}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        Sum of stars for this product:
                      </span>{" "}
                      {sumOfStars}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">Final rate:</span>{" "}
                      {rate}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        Number of comments:
                      </span>{" "}
                      {commentNumber}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">Last offer date:</span>{" "}
                      {productlastOfferDate.length > 0
                        ? productlastOfferDate
                        : "no offer yet"}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-light">
                  <Card.Body>
                    <p className="text-secondary">
                      <span className="font-weight-bold">
                        The initial number of this product:
                      </span>{" "}
                      {intialNumber}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3 d-flex justify-content-between myClass">
                <button
                  className="btn btn-primary"
                  onClick={delteProductButtonClickd}
                >
                  Delete this product
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setOpen1(true);
                  }}
                >
                  Edit this product
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setOpen2(true);
                  }}
                >
                  add offer
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      <Modal
        visible={open1}
        title="Edit Product"
        onCancel={() => {
          setOpen1(false);
        }}
        footer={[
          <Button
            key="back"
            size="large"
            onClick={() => {
              setOpen1(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={handleSubmit}
            className={equal(initialValues, formData) ? "disabled" : ""}
          >
            Submit
          </Button>,
        ]}
      >
        {loader ? (
          <Loader />
        ) : (
          <>
            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formproductNumber">
                <Form.Label>Number of Product</Form.Label>
                <Form.Control
                  type="number"
                  name="productNumber"
                  value={formData.productNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCoastOfProduct">
                <Form.Label>Cost of Product</Form.Label>
                <Form.Control
                  type="number"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </>
        )}
      </Modal>
      <Modal
        visible={open2}
        title="Edit Product"
        onCancel={() => {
          setOpen2(false);
        }}
        footer={[
          <Button
            key="back"
            size="large"
            onClick={() => {
              setOpen2(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={() => {
              setFormData((pre) => {
                return { ...pre, productlastOfferDate: getCurrentDateTime() };
              });
              handleSubmit();
            }}
            className={
              equal(initialValues, formData) ||
              formData.productOffer > formData.productPrice ||
              (formData.productOffer < 0.1 && formData.productOffer != "") ||
              formData.productNumber < 0
                ? "disabled"
                : ""
            }
          >
            Submit
          </Button>,
        ]}
      >
        {loader ? (
          <Loader />
        ) : (
          <>
            {formData.productOffer > formData.productPrice ? (
              <p className="alert alert-danger">
                The offer price is more than the normal price of this product
              </p>
            ) : null}
            {formData.productNumber < 0 ? (
              <p className="alert alert-danger">
                put a right number for number of this product input
              </p>
            ) : null}
            {formData.productOffer < 0.1 && formData.productOffer != "" ? (
              <p className="alert alert-danger">put a right price</p>
            ) : null}

            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>offer Price</Form.Label>
                <Form.Control
                  type="number"
                  name="productOffer"
                  min={0}
                  value={formData.productOffer}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formproductNumber">
                <Form.Label>Number of Product</Form.Label>
                <Form.Control
                  type="number"
                  name="productNumber"
                  value={formData.productNumber}
                  onChange={handleChange}
                  min={0}
                />
              </Form.Group>
            </Form>
          </>
        )}
      </Modal>
    </Container>
  );
}
