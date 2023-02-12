import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';

function Note(props) {

  const [load, setLoad] = React.useState(false);
  const handleSubmit = (id) => {
    setLoad(true);
    console.log(id);
    fetch("/delete", {
        method: "POST",
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify({id}) 
    }).then(
        props.click
    )
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <LoadingButton onClick={() => {
        handleSubmit(props.id);
      }} loading={ load === true ? true : false} ><DeleteIcon /></LoadingButton>
    </div>
  );
}

export default Note;
