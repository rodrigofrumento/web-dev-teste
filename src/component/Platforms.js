import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import api from './Api'

class Platforms extends Component {
    state = {
        platforms: [],
    }

    async componentDidMount() {
        const API_KEY = "394d7175ec914ebeaca8c78075e008cf"
        const res = await api.get(`platforms?key=${API_KEY}`)
        this.setState({ platforms: res.data.results })
    }
    render(){
        const { platforms } = this.state;
        return(
            <Container>
                <Col>
                    {platforms.map(platform => (
                        <>
                        <Row>{platform.id} - {platform.name}</Row>
                        </>
                    ))}
                </Col>
            </Container>
        )
    }
}
export default Platforms;