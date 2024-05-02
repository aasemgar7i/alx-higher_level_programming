$(document).ready(function() {
    $('#btn_translate').click(fetchTranslation);

    $('#language_code').keypress(function(event) {
        if (event.which === 13) {
            fetchTranslation();
        }
    });

    function fetchTranslation() {
        const languageCode = $('#language_code').val();
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
            if (data.hasOwnProperty('hello')) {
                $('#hello').text(data.hello);
            } else {
                $('#hello').text('Translation not found');
            }
        }).fail(function() {
            $('#hello').text('Error: Failed to fetch translation.');
        });
    }
});
