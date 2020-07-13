import React from 'react';
import { Card, CardImg,  CardBody, CardTitle,Button,CardSubtitle,CardText } from 'reactstrap';
import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse';
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
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <div>
                        <Button color="link" id="toggler" size="sm" style={{ marginBottom: '0rem' }}>
                        Show Details
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                        </UncontrolledCollapse>
                    </div>
                    <Link to={`/Courses/${item._id}`} > <Button color="primary">Go To Course</Button></Link>
                    </CardBody>
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
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <div>
                        <Button color="link" id="toggler1" size="sm" style={{ marginBottom: '0rem' }}>
                        Show Details
                        </Button>
                        <UncontrolledCollapse toggler="#toggler1">
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                        </UncontrolledCollapse>
                    </div>
                    <Link to={`/Courses/`} > <Button color="primary">Go To Course</Button></Link>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}
function RenderCard2({item, isLoading, errMess}) {
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
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <div>
                        <Button color="link" id="toggler2" size="sm" style={{ marginBottom: '0rem' }}>
                        Show Details
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                        </UncontrolledCollapse>
                    </div>
                    <Link to={`/Courses/`} > <Button color="primary">Go To Course</Button></Link>
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
                    <RenderCard2 item={props.leader} 
                        isLoading={props.leaderLoading} 
                        errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
        
    );
}

export default Home;