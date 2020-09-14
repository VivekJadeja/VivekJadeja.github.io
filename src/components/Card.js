import React from 'react';
import CardInfo from '../components/CardInfo';
import { Image, Col, Card as BCard } from 'react-bootstrap';

function Card(props) {
    return (
        <Col xs={12} md={4}>
            <div className="d-inline-block v-card" onClick={(e) => props.click(props.item)}>

                <BCard>

                    <BCard.Img src={props.item.imgSrc} alt={props.item.imgSrc}  />
                </BCard>


                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
            </div>
        </Col>
    );
}
// https://stackoverflow.com/questions/14507224/prevent-or-disable-automatic-image-resize-in-a-div-with-css-using-bootstrap
export default Card;            