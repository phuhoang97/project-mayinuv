import productimg1 from "../../../assets/images/1000_F_343877993_9Od0iow5UMBwbzcR3uiNUJVpUxPUe2Id.jpg";
import { Col, Row } from "antd";
import Card from "react-bootstrap/Card";

function ChildrenStatus({data}) {
  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card style={{ width: "100%", height:"100%" }}>
          <Card.Img   style={{ width: "100%", height:" 321.02px" }} variant="top" src={data.images[0]} />
          <Card.Body>
          <Card.Text style={{fontWeight:"700"}}>
              {data.name}
            </Card.Text>
            <Card.Text>
              {data.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ChildrenStatus;
