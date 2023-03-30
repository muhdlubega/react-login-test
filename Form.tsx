import React from 'react';
import ShowDetail from './ShowDetails';

const Form = () => {
  const [email, setEmail] = React.useState('123@gmail.com');
  const [password, setPassword] = React.useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(email);
  console.log(password);

  const clear = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="grandpa">
      <form onSubmit={handleSubmit}>
        <div className="p-1">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="p-1">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="p-1 button">
          <button className="boy" type="submit" onClick={ShowDetail}>
            Login
          </button>
          <button className="boy" type="submit" onClick={clear}>
            Clear
          </button>
        </div>
        <div className="grandpa">
          <ShowDetail email={email} password={password} />
        </div>
      </form>
    </div>
  );
};

export default Form;
