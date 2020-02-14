$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    // get user input
    let objectToSend = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    }
    console.log( 'sending:', objectToSend);
    // send to server via AJAX POST
    $.ajax({
        type: 'POST',
        url: '/items',
        data: objectToSend
    }).then( function( response ){
        // update DOM
        console.log( 'back from POST:', response );
        getItems();
    }).catch( function ( err ){
        // catch and errors 
        alert( 'unable to add item' );
        console.log( err )
    })
} // end addItem

function getItems(){
    console.log( 'in getItems' );
} //end getItems

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady
