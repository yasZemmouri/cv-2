import Header from '../components/cv-comp/Header'
import Aside from '../components/cv-comp/Aside';
import Main from '../components/cv-comp/Main';

export const Cv = ({person}) => {
  return (
    <div className="page">
        <Header fName={person.fName} lName={person.lName} title={person.title}/>
        <Aside tel={person.tel} email={person.email} city={person.city}/>
        <Main summary={person.summary}/>
    </div>
  )
}