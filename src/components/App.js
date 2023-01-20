//import './App.css';
import Badges from './Badges';
import MyForm from './MyForm';
import Switch from './Switch';

import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      badges : [false, false, false, false, false, false, false, false,],
      name : '',
      about : '',
      specialty : '',
      year : '',
      edit : true
    }

    this.toggleBadge = this.toggleBadge.bind(this);
    this.updateStateValue = this.updateStateValue.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
  }

  updateStateValue(field) {

    return (function updateStateField (value) {
      const ans = {};
      ans[field] = value;
      this.setState(ans);
    }).bind(this);

  }

  switchEdit() {
    this.setState({edit : !this.state.edit});
  }

  toggleBadge(i) {
    this.setState({
      badges : this.state.badges.map((badge, ind) => {
        return ind === i ? !badge : badge;
      })
    });
  };



  render () {
    const {edit, name, specialty, about, year, badges} = this.state;
    return(
      <div className="App">

        <Switch option1="Edit" option2="Result" switchValue={edit} switchFunction={this.switchEdit}/>

        <fieldset>

          {edit ?
            <legend>Fill in the fields for your pokemon trainer license</legend> : 
            <legend>My pokemon trainer license</legend>}

          <MyForm
          id='name' 
          label='Your name : '
          result={name !== '' ? `My name is ${name}` : ''}
          updateParentValue={this.updateStateValue("name")}
          edit={edit}
          />
          <MyForm
          id='specialty' 
          label='Your specialty :'
          result={specialty !== '' ? `My specialty is ${specialty}` : ''}
          updateParentValue={this.updateStateValue("specialty")}
          edit={edit}
          />
          <MyForm
          id='yearsOfExperience' 
          label='How many years of experience do you have : ' 
          result={year !== '' ? `I have ${year} years of experience` : ''}
          updateParentValue={this.updateStateValue("year")}
          edit={edit}
          />

          {edit ? 
            <div>
              <div>About you : </div>
              <textarea 
              placeholder="Talk about yourself for a bit"
              maxLength={300}
              onChange={(e) => (this.updateStateValue("about"))(e.target.value)}/>
            </div>
          : <div>
            {about !== '' ? `About me : \n${about}` : ''}
          </div> }
          

          {!edit && badges.filter((e) => e).length === 0 ? <div></div> : <div> Your Badges</div>}

          <Badges toggleBadge={this.toggleBadge} whichActive={badges} edit={edit}/>

        </fieldset>
      </div>
    );
  }
}

export default App;