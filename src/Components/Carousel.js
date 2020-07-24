import React from 'react';

import Card from './Card';

import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

   state = {
            items: [
                {
                    id: 0,
                    title: 'You',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hi',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Ppl',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
            ]
        }
    


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;