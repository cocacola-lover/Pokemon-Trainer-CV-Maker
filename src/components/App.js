//import './App.css';
import Badges from './Badges';
import MyForm from './MyForm';
import Switch from './Switch';

import {useState} from 'react';

function App (props) {

  const [badges, setBadges] = useState([false, false, false, false, false, false, false, false,]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [year, setYear] = useState('');
  const [edit, setEdit] = useState(true);

  const switchEdit = () => setEdit(!edit);
  const toggleBadge = (i) => setBadges(badges.map((e, ind) => ind === i ? !e : e));

  return (
    <div className="App">

      <Switch option1="Edit" option2="Result" switchValue={edit} switchFunction={switchEdit}/>

      <fieldset>

        {edit ?
          <legend>Fill in the fields for your pokemon trainer license</legend> : 
          <legend>My pokemon trainer license</legend>}

        <MyForm
        id='name' 
        label='Your name : '
        result={name !== '' ? `My name is ${name}` : ''}
        updateParentValue={setName}
        edit={edit}
        />
        <MyForm
        id='specialty' 
        label='Your specialty :'
        result={specialty !== '' ? `My specialty is ${specialty}` : ''}
        updateParentValue={setSpecialty}
        edit={edit}
        />
        <MyForm
        id='yearsOfExperience' 
        label='How many years of experience do you have : ' 
        result={year !== '' ? `I have ${year} years of experience` : ''}
        updateParentValue={setYear}
        edit={edit}
        />

        {edit ? 
          <div>
            <div>About you : </div>
            <textarea 
            placeholder="Talk about yourself for a bit"
            maxLength={300}
            onChange={(e) => (setAbout)(e.target.value)}/>
          </div>
        : <div>
          {about !== '' ? `About me : \n${about}` : ''}
        </div> }
        

        {!edit && badges.filter((e) => e).length === 0 ? <div></div> : <div> Your Badges</div>}

        <Badges toggleBadge={toggleBadge} whichActive={badges} edit={edit}/>

      </fieldset>
    </div>
  );


}

export default App;