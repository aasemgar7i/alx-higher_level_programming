$(document).ready(function() {
    $('#btn_translate').click(function() {
        console.log('Button clicked');
        const languageCode = $('#language_code').val();
        console.log('Language code:', languageCode);

        // Make a GET request to the API endpoint
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
            console.log('Response data:', data);
            // Check if the response contains the 'hello' property
            if (data.hasOwnProperty('hello')) {
                $('#hello').text(data.hello);
            } else {
                $('#hello').text('Translation not found');
            }
        }).fail(function() {
            $('#hello').text('Error: Failed to fetch translation.');
        });
    });
});
