<div class="col-md-9">
<textarea asp-for="H2C_EmailNoteEn" name="H2C_EmailNoteEn" id="email-text-en" class="form-control" rows="5" maxlength="50"></textarea>
</div>
<div class="col-md-1"></div>

<script>
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
</script>
