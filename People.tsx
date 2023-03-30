import * as React from 'react';
import './index.scss';
import Form from './Form';

const name = 'Lubega :D';
const App1 = <p>Hello {name}!</p>;

//using ES6 const keyword
const App2 = () => <p> Hey there!</p>;

//using class component
class App3 extends React.Component {
  render() {
    return <p>This method is deprecated</p>;
  }
}

const person1 = {
  first_name: 'John',
  last_name: 'Doe',
  age: 27,
  address: 'Cyberjaya',
};

const person2 = {
  first_name: 'Jane',
  last_name: 'Wilson',
  age: 44,
  address: 'Subang Jaya',
};

const Person = ({ person, children }) => {
  return (
    <div className="person">
      <h3 className="person-name">
        name: {person.first_name} {person.last_name}
      </h3>
      <h3 className="person-age">age: {person.age}</h3>
      <h3 className="person-address">address: {person.address}</h3>
      {children}
    </div>
  );
};

const App = () => {
  const name = 'John';
  const name1 = 'Jane';
  var gender = 'Male';
  const is_male = gender === 'Male';

  const handleClick = (person) => {
    console.log(person);
  };

  return (
    <div>
      {/* Something something weewoo{App1}
    <App2/>
    <App3/> */}

      <h2 className={is_male ? 'text-blue' : 'text-pink'}>
        Hey {is_male ? 'Mr. ' : 'Mrs. '}
        {is_male ? name : name1}!{' '}
        {is_male ? 'How are you?' : 'Good day to you!'}
      </h2>

      <Person person={is_male ? person1 : person2}>
        <button className="input" onClick={() => handleClick(person1)}>
          Click me!
        </button>
      </Person>
      <Form />
    </div>
  );
};

export default App;
