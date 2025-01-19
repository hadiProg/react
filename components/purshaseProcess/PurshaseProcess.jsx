import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PurshaseProcess.css";

export default function PurshaseProcess() {
  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Row className="mb-4">
            <Col>
              <h2 className="text-primary">Process Name</h2>
              <h6 className="text-muted">12/1/2022 PM 4:43:44</h6>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="bg-light">
                <Card.Body>
                  <p className="text-secondary">
                    <span className="font-weight-bold">
                      State of the process :
                    </span>{" "}
                    Delivered
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <button className="btn btn-danger">Delete From archive </button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
