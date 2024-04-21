import productimg1 from "../../../assets/images/1000_F_343877993_9Od0iow5UMBwbzcR3uiNUJVpUxPUe2Id.jpg";
import { Col, Row } from "antd";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Status.css";
import Headers from "../headers/Headers";
import Footer from "../footer/Footer";

function Status() {
  return (
    <>
      <Headers />
      <div className='t-container'>
        <div className='t-children-status'>
          <h2 className='Color-Red-t text-center'>
            Một số bài viết về máy in UV
          </h2>
          <div className='card-status'>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant='top' src={productimg1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Status;
