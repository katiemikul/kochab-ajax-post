console.log("Javascript is loaded");

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    recordCollection();
}

function recordCollection(){
    console.log('pulling record collect');
    $.ajax({
        type: 'GET',
        url: '/recordCollection'
    })
    .then(function(response){
        // for (let i=0; i<response.length; i++){
        //     $('#recordList').append(`<li> ${response[i].title} by ${response[i].artist} total ${response[i].cost}</li>`);
        // }
        console.log(response);
        response.forEach(function(record){
            $('#recordList').append(`<tr>
            <td>${record.title}</td>
            <td>${record.artist}</td>
            <td>${record.year}</td>
            <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
        </tr>`);
        })
    });
}