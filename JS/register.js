$(document).ready(function () {
   
});

function helloWorld() {
    alert('hello World')
    //do ajax request to helloWorld route
    var frm = $('#registerForm');

    var asyncCallToSOmeBackEndCode;

    asyncCallToSOmeBackEndCode = $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (data) {
            console.log('Submission was successful.');
            console.log(data);
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
        }
    });

    $asyncCallToSOmeBackEndCode.done((data) => {
        //call db
        return dbCall().then(() => {
            return data;
        });
    });
    
}  