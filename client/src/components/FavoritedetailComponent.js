import React from 'react';
import {  Breadcrumb, BreadcrumbItem ,Label, FormGroup,Input,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform} from 'react-animation-components';

    function RenderDish({dish}) {
            return(
                <div className="col-12 col-md-5 m-1 container">
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            {/*itrating through array to render all the vedios associated to dish */}
                            {dish.links.map((link, index) => (
                                <div key={index}>
                                    <h4  className="text-white">Lecture {index +1}</h4>
                                    <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={ link.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myframe"></iframe>
                                    </div>
                                     <FormGroup check>
                                        <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p className="text-white">completed</p>
                                        </Label>
                                    </FormGroup>
                                     <br/>
                                </div>
                                ))}
                  
                    </FadeTransform>
                </div>
            );

    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null)        
            return (
                <div className="container">
                    <div className="row text-white">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/mycourses'>My Courses</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 text-white">
                            <h3>All Lecture's for {props.dish.name} Happy learning!!</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row ">
                        <RenderDish dish={props.dish} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;