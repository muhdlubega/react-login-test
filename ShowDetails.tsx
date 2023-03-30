import React from 'react';

const ShowDetail = ({ email, password }) => {
  return (
    <div>
      <p>email:{email}</p>
      <p>password:{password}</p>
    </div>
  );
};

export default ShowDetail;
