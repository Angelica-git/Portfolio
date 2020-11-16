//Lägger till sysslan när man trycker på lägg till knappen.
let myList = $('#button');
myList.on('click', todoList); 

function todoList() {

	var activity = $('#addactivity').val();

	var newListItem = $('<li></li>');

	var newInput = $('<input>');	

	var liInput = newInput.appendTo(newListItem);

	liInput.val(activity);

	liInput.attr('readOnly', true); //Gör den tillagda inputen fryst.

	$('#mylist').append(newListItem);
    

    //Gör så att inputen töms varje gång man lagt till en syssla.
    $('#addactivity').val(''); 

    // Skapar knapparna
    var buttonChange = $('<button></button>');
    buttonChange.text('Ändra');
    buttonChange.appendTo(newListItem).effect('bounce', 'slow');

    var buttonDone = $('<button></button>');
    buttonDone.text('Färdig');
    buttonDone.appendTo(newListItem).effect('bounce', 'slow');
    
    var buttonDelete = $('<button></button>');
    buttonDelete.text('Radera');
    buttonDelete.appendTo(newListItem).effect('bounce', 'slow');

    
    // Gör så att texten går att redigera när man trycker på ändra-knappen.
    let functionChange = buttonChange;
    functionChange.on('click', changeContent);
     
    function changeContent(){

        if (liInput.attr('readOnly')) {
            liInput.removeAttr('readOnly');
        } else {
            liInput.attr('readOnly', true);
        };

        // Denna meddelar att inputfieldet inte får vara tomt.
        if (liInput.val() == '') {
            alert('Denna får inte vara tom');
        };
     };


    // Lägger till i färdiglistan när man trycker på färdig.
    let functionDone = buttonDone;
    functionDone.on('click', doneList);

    function doneList() {

        if (liInput.val() == '') {
            alert('Denna får inte vara tom');
        } else {
            $('#donelist').append(newListItem);
            buttonDone.remove();
        };

    };

    // Gör det möjligt att radera ett list-element.
    let functionDelete = buttonDelete;
    functionDelete.on('click', deleteActivity);

    function deleteActivity() {
        newListItem.fadeOut(500);

    };

    // Gör så att man ej kan skicka in en tom syssla.
    if (activity == '') {
        alert('Du måste skriva in en syssla');
        newListItem.remove();
    };

};
