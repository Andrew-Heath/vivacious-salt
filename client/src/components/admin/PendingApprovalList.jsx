import React from 'react';
import PendingApprovalListEntry from './PendingApprovalListEntry.jsx';

const PendingApprovalList = ({ players, handleClick, entities, challengeId}) => (
  <div>
    <h4>Current Challengers:</h4>
    {(()=> {
      if(players) {
        players.map(player => {
          return <PendingApprovalListEntry challengeId={challengeId} player={player} key={player.id} handleClick={handleClick.bind(null, player.id)} entities={entities} />
        });
      } else {
        console.log('no players', players);
      }
    })()}
      </div>
      );

      PendingApprovalList.propTypes = {
      handleClick: React.PropTypes.func.isRequired
      };

      export default PendingApprovalList;
