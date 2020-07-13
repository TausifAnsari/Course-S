import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,Button } from 'reactstrap';
import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse.js';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                <Link to={`/Courses/${item._id}`} >
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    </Link>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                    <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
                </Card>
            </FadeTransform>
        );
}

function RenderCard1({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                <Link to={`/Courses/`} >
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    </Link>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start ">
                <div className="col-12 col-md m-1 ">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard1 item={props.promotion} 
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard1 item={props.leader} 
                        isLoading={props.leaderLoading} 
                        errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
        
    );
}

export default Home;