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
    <div className="home-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
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
          </div>
        </div>
      </div>
    </div>
  );
}
