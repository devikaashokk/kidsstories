import {Col,Container,Row,Form} from 'react-bootstrap';

function RegForm(){
    return(
        <>
        <Container>
            <Row className="justify-content-center">
                <Col lg={13} xs={12} className="border shadow rounded p-4">
                <Form>
                    <Form.Group className="mt-5">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="fname"
                        placeholder="enter your first name"
                        ></Form.Control>
                         <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="fname"
                        placeholder="enter your first name"
                        ></Form.Control>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
            </Container>
        </>
    )
}
export default RegForm;