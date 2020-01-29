import React from 'react';

const Team = props => {
    return (
        <div>
        {props.teammates.map(teammate => (
          <div key={teammate.id}>
            <h2>{teammate.name}</h2>
            <p>{teammate.email}</p>
            <p>{teammate.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Team;  
