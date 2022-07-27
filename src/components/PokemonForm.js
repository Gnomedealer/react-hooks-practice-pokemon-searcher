import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [data, setData] = useState({
    name: '', hp:'',urlFront:'', urlBack: ''
  })

  function handleChange(event){
    setData({...data, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    
    
    const newPokemon = {
      name: data.name,
      hp: data.hp,
      sprites: 
      {front: data.urlFront,
        back: data.urlBack
      },
    }
  

  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
    .then((res) => res.json())
    .then(onAddPokemon);
}

return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={data.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={data.urlFront}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={data.urlBack}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
