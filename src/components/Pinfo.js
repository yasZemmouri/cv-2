
export const Pinfo = ({person, editing, setEditing}) => {
  return (
    <div className="container">
        <button onClick={()=>{
            setEditing(true)
        }}>Edit</button>
        <h2>{person.fName} {person.lName}</h2>
        <h3>{person.title}</h3>
        <ul>
            <li>{person.city} {person.zip}</li>
            <li>{person.email}</li>
            <li>{person.tel}</li>
        </ul>
        <p>{person.summary}</p>
    </div>
  )
}
