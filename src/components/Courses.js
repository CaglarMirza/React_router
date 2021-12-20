import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  // const {data} = props -> if take props as a param instead of ({data})
  // console.log('data :>> ', data);
  return (
    <Container className="text-center mt-4 height:500px">
      <Row className="d-flex justify-content-center">
        {data.map((course) => {
          return (
            <Col
              key={course.id}
              className="mb-3 d-flex justify-content-center"
              xs={12}
              md={6}
              lg={4}
            >
              <MyCard course={course} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Courses;
