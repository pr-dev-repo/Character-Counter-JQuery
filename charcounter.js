   $('textarea, input').focus(function (e) {
            var maxLength = $(this).attr('data-val-length-max');
            $(this).keyup(function () {
                var length = $(this).val().length;
                var length = length++;
                //get closest div and not afect others
                $(this).parent().next("div").text(length + ' / ' + maxLength);
            });

        });
        //clear input after exit
        $('textarea, input').focusout(function (e) {
            $(this).parent().next("div").text("");
        });
