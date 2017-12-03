$(document).ready(function () {

    $('#form1').on('submit', function (e) {
        e.preventDefault();
        var details = $('#form1').serialize();

        $.post('form1.php', details, function (data) {
            $('#form1').html(data);
        });
    });

});