const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    //console.log ("hi")
    console.log (charactersAPI.getFullList ()) 
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('one').value;
    //console.log("id: " , id)
    console.log (charactersAPI.getOneRegister(id))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let charIdToDelete = document.getElementById("delete").value;
    console.log (charIdToDelete)
    charactersAPI.deleteOneRegister(charIdToDelete)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('edit-name').value
    const occupation = document.getElementById('edit-occupation').value
    const weapon = document.getElementById('edit-weapon').value
    const cartoon = document.getElementById('edit-checkbox').checked

    const char = {name,occupation,weapon,cartoon}

    const charId = document.getElementById('edit-id').value

    //alert(charId)  
    charactersAPI.updateOneRegister(charId, char)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById(`new-name`).value
    const occupation = document.getElementById(`new-occupation`).value
    const weapon = document.getElementById(`new-weapon`).value
    const cartoon = document.getElementById('new-cartoon').checked;
    const char = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(char)
  });
});
