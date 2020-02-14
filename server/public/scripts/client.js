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
    $.ajax({
        type: 'GET',
        url: '/items'
    }).then( function( response ){
        console.log( 'back from Get:', response );
        let el = $( '#itemsOut' );
        el.empty();
        for( let i=0; i<response.length; i++){
            let item = response[ i ];
            el.append( `<li>${item.size} ${item.color} ${ item.description } 
            <button data-id="${ item.id }" class="sellItemButton">Sell</button></li>`)
        } //end for
    }).catch( function( err ){
        console.log( err );
        alert('problem getting items' );
    })
} //end getItems

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#itemsOut' ).on( 'click', '.sellItemButton', sellItem );
    getItems();
} // end onReady

function sellItem(){
    const myId = $( this ).data( 'id' );
    console.log( 'in sellItem:', myId );
    $.ajax({
        type: 'DELETE',
        url: '/items/' + myId,
    }).then( function( response ){
        console.log( 'back from DELETE with:', response );
        getItems();
    }).catch( function( err ){
        console.log( err );
        alert( 'problem deleting item' );
    }) // end ajax
} //end sellItem
