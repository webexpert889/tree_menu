import { data } from './data.js';
import $ from 'jquery';
import './App.css'


function App() {

  $(document).ready(()=>{
    $('.child').hide();
  })

  const nestedObjects = (obj) => {
    return obj.nodes.map((data, key) => {
      if (typeof (data) == "object") {
        const temp = data.title.replace(/ /g, "")
        return <>
          <div id={`${temp}`} className='bg temp' onClick={(e) => toggleCollapse(e)}> &gt; {data.title} </div>
          <div id={`${temp}-child`} className="child">{nestedObjects(data)}</div>
        </>
      }

      else {
        return <div className='bg'>{data}</div>
      }
    })
  }

  const toggleCollapse = (e) => {
    const elem = e.target.id;
    $(`#${elem}`).siblings('.child').not(`#${elem}-child`).hide(500);
    $(`#${elem}-child`).toggle(500);
  }
  
  return (
    
    <div className="App" >

      {
        nestedObjects(data)
      }

    </div >
  );
}

export default App;
