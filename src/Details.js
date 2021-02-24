import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import api from './component/Api'


class Details extends Component {
    state = {
        games: [],
    }

    async componentDidMount() {
        const API_KEY = "394d7175ec914ebeaca8c78075e008cf"
        const res = await api.get(`games/4040/key=${API_KEY}`)
        this.setState({ games: res.data })
    }
    render(){
        const { games } = this.state;
        return(
            <Container>
                {games.map(game => (
                    <>
                    {game.name} - {game.id}
                    <br />
                    </>
                ))}
            </Container>
        )
    }
}

export default Details;