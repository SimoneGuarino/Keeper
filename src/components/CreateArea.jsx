import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [loads, setLoads] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleText(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const createPost = (event) => {
    setLoads(true);
    event.preventDefault();
    console.log(loads);
      fetch("/add", {
        method: "POST",
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify({
          id: note.title,
          title: note.title,
          content: note.content
        }) 
      }).then(response => {
        if (!response.ok) {
            throw new Error(response);
        }else{
          setLoads(false)
        }
        return response.json();
    })
    .then(data => {console.log(data)})
    .finally(
        props.click,        
        setNote({
          title:"",
          content:""
        })
      )
  }

  return (
    <div>
      <form>
        <input onChange={handleText} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleText} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <LoadingButton onClick={createPost} loading={ loads === true ? true : false}><AddIcon /></LoadingButton>
      </form>
    </div>
  );
}

export default CreateArea;
