import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import axios from 'axios';
import './App.css'

function App() {
  
  const [activities, setActivities] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities')
         .then(res =>{
          console.log(res);
          setActivities(res.data);
         });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="reactivities"/>
      <List>
        {activities.map((ele: any) =>(
          <List.Item key={ele.id}>
            {ele.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
