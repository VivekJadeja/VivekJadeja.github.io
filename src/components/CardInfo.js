import React from 'react';
import { useSpring, animated } from 'react-spring';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from "react-bootstrap/Nav";


function CardInfo(props) {
    /* This useSpring method takes in an object that
    can help you change the style. It can take in a different
    number of objects at the same time*/
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });


    return (
        <animated.div className="v-card-info" style={style}>
            <p className="v-card-title">{props.title}</p>
            {props.isPage ?
                <LinkContainer className="v-card-subTitle" to={props.link} target="_blank" rel="noopnener noreferrer">
                    <Nav.Link>
                        {props.subTitle}
                    </Nav.Link>
                </LinkContainer> :
                <a className="v-card-subTitle" href={props.link} target="_blank" rel="noopnener noreferrer">{props.subTitle}</a>
            }
            {/*this <a></a> above is an anchor tag for a link*/}
        </animated.div>
    );
}

export default CardInfo;