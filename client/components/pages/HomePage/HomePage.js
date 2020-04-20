import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';

export default function HomePage() {
  const dispatch = useDispatch();
  const { contributors } = useSelector(R.pick(['contributors']));
  const { user } = useSelector(R.pick(['user']));
  console.log(contributors);


  return (
    <div className="home-page">
      <div className="section">
        <div className="container">
          <div className="child">
            <header className="title is-1">
              <h1 style={{'fontWeight': '900'}}>
                Learn to think
              </h1>
              <h2>
                Build your math, science and computer science skills by doing challenging problems and taking courses taught by Ethiopian professionals 
              </h2>
            </header>
            <div className="puzzles">
              <div className="img puzzle video" style={{'width': '40%', 'float': 'left', 'border': '3px solid #000'}}>
                <h5 style={{'fontWeight': '900'}}> Solve Classic Puzzles </h5>
                <video preload="auto" autoPlay="autoplay" muted="muted" playsInline="" loop="loop" data-v-7208175a="">
                  <source src="https://ds055uzetaobb.cloudfront.net/chapter/CS_Essentials_-_Koningsburg_-_Animated_1-WGFEHM.mp4" type="video/mp4" data-v-7208175a="">
                  </source>
                </video>
              </div>
            </div>
            <div className="algorithms" align="right">
              <div className="img algorithm video" style={{'width': '40%', 'float': 'right', 'border': '3px solid #000'}}>
                <h5 align="center" style={{'fontWeight': '900'}}> Write algorithms to look up phone numbers </h5>
                <video preload="auto" autoPlay="autoplay" muted="muted" playsInline="" loop="loop" data-v-7208175a="">
                  <source src="https://ds055uzetaobb.cloudfront.net/chapter/Algorithm_Fundamentals_-_Parsons_-_Animated_1-mk4I1L.mp4" type="video/mp4" data-v-7208175a="">
                  </source>
                </video>
              </div>
            </div>
          </div>          
          {/* <h1 className="title is-1">
            Contributors
          </h1>
          <div>
            {Object.keys(contributors).map((key, value) => 
                  <div key={key} style={{'display': 'flex'}}>
                     <div style={{'width': '30%'}} className='image-bar'>
                         <img style={{'height': '100px', 'width': '100px'}} src={contributors[key].profile_pic} ></img>   
                      </div> 
                      <div style={{'width': '70%'}} className='text-area'>
                            <h3>{contributors[key].username}</h3>
                            <p>{contributors[key].bio}</p>
                      </div>   
                </div>                               
                )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
