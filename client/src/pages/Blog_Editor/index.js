/* NEXT STEPS
- Database seeded with seed file ***DONE***
- Mongoose Schema setup ***DONE***
- GET ROUTE to display all post to page ***DONE***
- Get HTML parser ***DONE***
- User login and authentication ***DONE***
- ROUTES to display Individual Blog Pages ***DONE***
- Set up props for homepage feature component ***DONE***
- Set up and populate About page, hide other nav items outside of MVP ***DONE***
- Format Blog Listing Page (image) ***DONE***
- Social Feed (find quick way to embed Facebook) ***DONE***

- User Register/Login Page - Add basic UI functionality that makes sense
- Format Blog Editor Page (Reduce text and make 2 columns)
- Hide API keys and other sensitive info
- Add Facebook, Twitter and LinkedIn buttons to footer.

- ICE-BOX: Ability to do bulleted list items on Editor/Images, Pagination, Enewsletter signup?
*/

import React, { useRef, useEffect } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useStoreContext } from "../../utils/GlobalState";
import { STORE_RESULTS, ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Blog_Editor() {
  const titleRef = useRef();

  const [state, dispatch] = useStoreContext();

  useEffect(
    () => {
    // AUTOMATICALLY GRAB DB DATA AND STORE INTO STATE
    API.getDbPost()
      .then(results => {
        dispatch({
          type: STORE_RESULTS,
          postsDb: results.data
        })
        // console.log(results.data);  // Array of objects containing keys: id, author, title, post
      }).catch(err => console.log(err));
    },
    []
  );

  // EVENT: SUBMIT --> ADD SINGLE POST TO DATABASE AND APPEND TO POSTS ARRAY
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    var content = event.target[1].value;
    // console.log(content);

    API.savePost({
      title: titleRef.current.value,
      post: content
    })
    .then(result => {
      // console.log("result", result); // NOTE: res.json returns back the object that was created, not the entire table.
      dispatch({
        type: ADD_POST,
        post: result.data
      });
    })
    .catch(err => console.log(err));

  }

  // console.log(state);

  let html = function(){
    return state.posts.map((elem) => (
    <Col key={elem._id} className="result-div" sm={3}>
      <h4>{elem.title}</h4>
      <p>{ReactHtmlParser(elem.post.substring(0,200))} [...]</p> 
    </Col>
  ))
  }

  return (
      <main className="blog-editor page-padded">

      <form>
        
        <h1>Create a Blog Post</h1>
        <input className="title" name="title" placeholder="Title" ref={titleRef}></input>
        <Editor
         apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
         init={{
            height: 200,
            menubar: false
        }} 
        onSubmit={handleSubmit} />

        <br />
        <input className="bx" type="submit" value="Submit" />
      </form>

      <hr></hr>
      <h2>Current List of Posts:</h2>
      <Row>
      {html()}
      </Row>
      </main>
  )
}



export default Blog_Editor;