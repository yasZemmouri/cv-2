import { useState } from 'react'
import { FmPinfo } from "../components/FmPinfo"
import {Pinfo} from "../components/Pinfo"
export const Editor = ({person, setPerson}) => {
    const [editing, setEditing]= useState(()=>{
        if(person) {
            return true;
        }
        else return false;
    })

  return (
      <div className="page" id="editor">
        <section>
            <h2>Personal Info</h2>
            {editing ? 
                <FmPinfo person={person} setPerson=      {setPerson} setEditing={setEditing} editing={editing}/>:
                <Pinfo person={person} setEditing={setEditing}/>
            } 
        </section>
        <section>
            <h2>Work Experience</h2>

        </section>
    </div>
  )
}
