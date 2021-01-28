import { React, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';
import Async from 'react-async';

import config from '../config.js'

const Post = (props) => {
    let [name, setName] = useState("");
    let [post, setPost] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangePost = (event) => {
        setPost(event.target.value);
    }

    const makePost = () => {
        console.log(name);
        console.log(post);
        return Axios.post(
            config.address + '/api/Posts',
            {
                name: name,
                post: post
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error)
            return error;
        })
    }

    const loadPosts = () => {
        return Axios.get(
            config.address + '/api/Posts'
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error)
            return error;
        })
    }

    return (
        <div>
            <div className="spacer" > &nbsp; </div>
            <div style={{textAlign: "center", fontSize: "300%"}}>Post</div>
            <Container>
                <Row>
                    <Col>
                    <form onSubmit={makePost}>
                        <label>
                            Name:
                        <input type="text" value={name} onChange={handleChangeName}/>
                            Post:
                        <input type="text" value={post} onChange={handleChangePost}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </Col>
                    <Col>
                        <ListGroup>
                            <Async promiseFn={loadPosts}>
                                {({data, error, isLoading}) => {
                                        if (isLoading)
                                            return "Loading...";
                                        if (error) {
                                            console.log(error);
                                            return "Oops, something went wrong";
                                        }
                                        if (data && Array.isArray(data)) {
                                            return data.reverse().map(entry => {
                                                return <div>
                                                    <ListGroup.Item variant="dark">{entry.name}</ListGroup.Item>
                                                    <ListGroup.Item>{entry.post}</ListGroup.Item>
                                                </div>
                                            })
                                        }
                                    }
                                }
                            </Async>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
        );
}

export default Post;
