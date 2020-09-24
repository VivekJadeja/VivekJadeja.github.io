import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';


import Card from '../components/Card';

import ResumeSS from '../assets/ResumeSS.png'
import ghubPic from '../assets/ghubPic.png'
import FoodPic from '../assets/FoodPic.JPEG'
import { Col } from 'react-bootstrap'
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0, /*key to indicate which card it is*/
                    title: 'My Resume',
                    subTitle: 'Check Out The Things I\'ve Done',
                    imgSrc: ResumeSS,
                    link: 'https://drive.google.com/file/d/1g2BljiclQTPYgcfRSAHuYae_8pL-cKpF/view?usp=sharing',
                    selected: false,
                    isPage: false
                },
                {
                    id: 1, /*key to indicate which card it is*/
                    title: 'My GitHub',
                    subTitle: 'Check Out Some Code I\'ve Written',
                    imgSrc: ghubPic,
                    link: 'https://github.com/vivekjadeja',
                    selected: false,
                    isPage: false
                },
                {
                    id: 2, /*key to indicate which card it is*/
                    title: 'My Recipes',
                    subTitle: 'Check Out The Food I\'ve Made',
                    imgSrc: FoodPic,
                    link: '/gallery',
                    selected: false,
                    isPage: true
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
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
        return (
            /*<Container fluid={true}>
                <Row md={4}>
                    <Col xs={6} md={4}>
                    {this.makeItems(this.state.items)}
                    </Col>
                </Row>
            </Container>*/<Container>
                <Row>

                    {this.makeItems(this.state.items)}


                </Row>
            </Container>
        );
    }

}
// https://css-tricks.com/perfect-full-page-background-image/
export default Carousel;