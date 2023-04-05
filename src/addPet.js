import React, { useState } from 'react'
import { ADD_PET } from './mutations';
import { useMutation } from '@apollo/client';


export const AddPet = () => {
  const [petInput, setPetInput] = useState({
    petname: "",
    petphoto: "",
    petprice: 0,
    pettype: ""
  })

  const [addPet, result] = useMutation(ADD_PET, {
    variables: {
      input: {
        ...petInput
      }
    },
    errorPolicy: "all",
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <div>add a Pet</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(petInput);
          addPet()
          console.log(result);
        }}
      >
        <input
          name="petname"
          label="pet name"
          type="text"
          onChange={e => (setPetInput({ ...petInput, petname: e.target.value }))} />
        <input
          name="pettype"
          label="pet type"
          type="text"
          onChange={e => (setPetInput({ ...petInput, pettype: e.target.value }))} />
          <input
          name="petprice"
          label="pet price"
          type="text"
          onChange={e => (setPetInput({ ...petInput, petprice: e.target.value }))} />
        <input
          name="petphoto"
          label="pet image url"
          type="text"
          onChange={e => (setPetInput({ ...petInput, petphoto: e.target.value }))} />

        <input type="submit" />

      </form>
      <a href="/">Back to list of Pets!</a>
    </>
  )


}
