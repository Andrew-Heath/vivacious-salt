import React from 'react';
import ChallengeList from './ChallengeList.jsx';
import Navigation from './Navigation.jsx';
import dummyData from './dummyData.js';
import classNames from 'classnames';

const Main = (props) => ( 
  <div>
    <div class="row">
      <div className="about">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <p>
              New Challenger is a fun new social web app for challenging your friends to new activities and creating rewards for completion. Sign up to take other people's challenges and earn rewards!
              Image uploads and smart image verification technology are used to prove if someone completed a challenge. Automated payment to users or charities can be set up with PayPal & Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ChallengeList challenges={props.challengeList.items} entities={props.entities} currentUser={dummyData.currentUser} />
  </div>
)

export default Main;

// const exampleStyle = {
//   'padding':'20px',
//   'fontFamily':'futura',
//   'backgroundColor': 'pink',
//   'width': '200px'
// };
    
    // <div style={exampleStyle}>
    //   Example of Redux
    //   {/*bind so that on page load the props.increment wont run*/}
    //   <button onClick={props.increment.bind(null, props.index)}>Increment Using Actions</button>
    //   <div>Index: {props.index}</div>
    // </div>  
