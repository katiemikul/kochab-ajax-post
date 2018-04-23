console.log("Javascript is loaded");

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    getAllSongs();
}

function recordCollection(){
    console.log('pulling record collect');
    $('#addNewSong').on('click', addNew);
    $.ajax({
        type: 'GET',
        url: '/record'
    })
    .then(function(response){
        console.log(response);
        $('#recordList').empty();
        response.forEach(function(record){
            $('#recordList').append(`<tr>
            <td>${record.title}</td>
            <td>${record.artist}</td>
            <td>${record.year}</td>
            <td>${record.cost}</td>
        </tr>`);
        })
    });
}

function getAllSongs(){
$.ajax({
    type: 'GET',
    url: '/record'
})
.then(function(response){
    console.log(response);
    response.forEach(function(record){
        $('#recordList').append(`<tr>
        <td>${record.title}</td>
        <td>${record.artist}</td>
        <td>${record.year}</td>
        <td>${record.cost}</td>
    </tr>`);
    })
});
}

function addNew(){
    const newRecord = {
        title: $('#newSongTitle').val(),
        artist: $('#newSongArtist').val(),
        year: $('#newSongYear').val(),
        cost: $('#newSongCost').val(),
        
    };
    console.log('new song object', newRecord);
    $.ajax({
        type: 'POST',
        url: '/record',
        data: newRecord
    })
    .then(function(response){
        console.log(response);
        getAllSongs();
    });
}
