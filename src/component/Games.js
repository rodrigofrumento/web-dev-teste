import React, { Component } from 'react'
import { Container, Media } from 'react-bootstrap'
import api from './Api'


class Games extends Component {
    state = {
        games: [],
    }

    async componentDidMount() {
        const API_KEY = "394d7175ec914ebeaca8c78075e008cf"
        const res = await api.get(`games?key=${API_KEY}&ordering=-rating&page_size=10`)
        this.setState({ games: res.data.results })
    }
    render(){
        const { games } = this.state;
        return(
            <Container>
                {games.map(game => (
                    <>
                    <Media>
                        <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src={game.background_image}
                        alt={game.name}
                        />
                        <Media.Body key={game.id}>
                        <h5>{game.name}</h5>
                        <p>Rating: {game.rating}</p>
                        </Media.Body>
                    </Media>
                    <br />
                    </>
                ))}
            </Container>
        )
    }
}

export default Games;