//button back
$('.btn-back').click(function(e){
    e.preventDefault();
    window.history.back();
});

/*Answers branching*/
$('.nps-btn').on('change', function () {
    let val = $(this).val() * 1;
    $('.submit-wrapper').fadeIn();
    $('.hidden-labels').hide();
    if(val == 0) {
        $('.point_0').fadeIn();
    }
    if(val == 1) {
        $('.point_1').fadeIn();
    }
    if(val == 2) {
        $('.point_2').fadeIn();
    }
    if(val == 3) {
        $('.point_3').fadeIn();
    }
    if(val == 4) {
        $('.point_4').fadeIn();
    }
    if (val < 2){
        $('.point_0-6').fadeIn();
        $('.point_9-10').hide();
        $('.point_7-8').hide();
        $('.point_9-10 .radio__option').prop('checked', false);
        $('.point_7-8 .radio__option').prop('checked', false);
        $('.q-7-8').removeAttr('data-reqired','');
        $('.q-9-10').removeAttr('data-reqired','');
        $('.q-0-6').attr('data-reqired','');
        $('.q-7-8-comment').removeClass('req-comment');
        let commentsGood = document.querySelectorAll('.point_9-10 .comment-field');
        let commentsNormal = document.querySelectorAll('.point_7-8 .comment-field');
        for(let i = 0; i < $(commentsGood).length; i++){
            commentsGood[i].value = '';
            $(commentsGood[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsGood[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for (let i = 0; i < $(commentsNormal).length; i++){
            commentsNormal[i].value = '';
            $(commentsNormal[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsNormal[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        if ($('.main-radio-option').is(":checked") === false) {
            $('.main-radio-option').parents().find($('.question-main-container .comment-main-container')).hide();
        }
    } else if (val === 2){
        $('.point_0-6').hide();
        $('.point_9-10').hide();
        $('.sub-answer-wrapper').hide();
        $('.sub-answer-comment-container').hide();
        $('.main-comment-error').hide();
        $('.sub-comment-error').hide();
        $('.sub-answer-wrapper .error').hide();
        $('.point_7-8').fadeIn();
        $('.point_9-10 .radio__option').prop('checked', false);
        $('.point_0-6 .radio__option').prop('checked', false);
        $('.q-0-6').removeAttr('data-reqired','');
        $('.q-9-10').removeAttr('data-reqired','');
        $('.q-7-8').attr('data-reqired','');
        $('.q-7-8-comment').addClass('req-comment');
        $('.main-comment').removeClass('required-main-comment');
        $('.sub-comment').removeClass('required-comment');
        $('.sub-radio-option').removeClass('required-sub-radio');
        let commentsGood = document.querySelectorAll('.point_9-10 .comment-field');
        let commentsBad = document.querySelectorAll('.point_0-6 .comment-field');
        for(let i = 0; i < $(commentsGood).length; i++){
            commentsGood[i].value = '';
            $(commentsGood[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsGood[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for(let i = 0; i < $(commentsBad).length; i++){
            commentsBad[i].value = '';
            $(commentsBad[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsBad[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    } else if (val > 2){
        $('.point_0-6').hide();
        $('.point_9-10').fadeIn();
        $('.point_7-8').hide();
        $('.main-comment-error').hide();
        $('.sub-answer-wrapper').hide();
        $('.sub-comment-error').hide();
        $('.sub-answer-wrapper .error').hide();
        $('.point_7-8 .radio__option').prop('checked', false);
        $('.point_0-6 .radio__option').prop('checked', false);
        $('.q-0-6').removeAttr('data-reqired','');
        $('.q-7-8').removeAttr('data-reqired','');
        $('.q-9-10').attr('data-reqired','');
        $('.q-7-8-comment').removeClass('req-comment');
        $('.main-comment').removeClass('required-main-comment');
        $('.sub-comment').removeClass('required-comment');
        $('.sub-radio-option').removeClass('required-sub-radio');
        let commentsNormal = document.querySelectorAll('.point_7-8 .comment-field');
        let commentsBad = document.querySelectorAll('.point_0-6 .comment-field');
        for(let i = 0; i < $(commentsNormal).length; i++){
            commentsNormal[i].value = '';
            $(commentsNormal[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsNormal[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for (let i = 0; i < $(commentsBad).length; i++){
            commentsBad[i].value = '';
            $(commentsBad[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsBad[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    }
});

/* Show branch if radio was already checked*/
$(document).ready(function (){
    let valNps = $('.nps-btn:checked').val() * 1;
    let comments = document.querySelectorAll('.comment-field');
    for(let i = 0; i < comments.length; i++){
        let commentsVal = comments[i].value;
        if (commentsVal.length > 0){
            $(comments[i]).parent().find('.label-txt').css({"top": "-25px"});
            $(comments[i]).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
        } else {
            $(comments[i]).parent().find('.label-txt').css({"top": "0px"});
            $(comments[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    }
    if ($('.nps-btn:checked').length > 0){
        $('.submit-wrapper').show();
        if(valNps == 0) {
            $('.point_0-6').fadeIn();
            $('.point_9-10').hide();
            $('.point_7-8').hide();
            $('.q-7-8').removeAttr('data-reqired','');
            $('.q-9-10').removeAttr('data-reqired','');
            $('.q-0-6').attr('data-reqired','');
        }
        if(valNps == 1) {
            $('.point_0-6').fadeIn();
            $('.point_9-10').hide();
            $('.point_7-8').hide();
            $('.q-7-8').removeAttr('data-reqired','');
            $('.q-9-10').removeAttr('data-reqired','');
            $('.q-0-6').attr('data-reqired','');
        }
        if(valNps == 2) {
            $('.point_0-6').hide();
            $('.point_9-10').hide();
            $('.point_7-8').fadeIn();
            $('.q-0-6').removeAttr('data-reqired','');
            $('.q-9-10').removeAttr('data-reqired','');
            $('.q-7-8').attr('data-reqired','');
        }
        if(valNps == 3) {
            $('.point_0-6').hide();
            $('.point_9-10').hide();
            $('.point_7-8').fadeIn();
            $('.q-0-6').removeAttr('data-reqired','');
            $('.q-9-10').removeAttr('data-reqired','');
            $('.q-7-8').attr('data-reqired','');
        }
        if(valNps == 4) {
            $('.point_0-6').hide();
            $('.point_9-10').fadeIn();
            $('.point_7-8').hide();
            $('.q-0-6').removeAttr('data-reqired','');
            $('.q-7-8').removeAttr('data-reqired','');
            $('.q-9-10').attr('data-reqired','');
        }
        if(valNps == 5) {
            $('.point_0-6').hide();
            $('.point_9-10').fadeIn();
            $('.point_7-8').hide();
            $('.q-0-6').removeAttr('data-reqired','');
            $('.q-7-8').removeAttr('data-reqired','');
            $('.q-9-10').attr('data-reqired','');
        }
        else if (isNaN(valNps)){
            return false;
        }
    }
    /* Show sab-questions if radio was checked */
    if($('.main-radio-option').is(":checked") == true){
        $('.main-radio-option:checked').parents('.answer-array').find('.sub-answer-wrapper').show();
    } else {
        $('.main-radio-option:checked').parents('.answer-array').find('.sub-answer-wrapper').hide();
    }

    /* Show/hide comment if radio was checked */
    if ($('.main-radio-option').is(":checked") && $('.main-radio-option:checked').val() == 'Другое') {
        $('.main-radio-option:checked').parents().find($('.comment-main-container')).show();
    } else {
        $('.main-radio-option:checked').parents().find($('.comment-main-container')).hide();
    }
    /* Show/hide comment if sub-question was checked */
    if ($('.sub-radio-option').is(":checked") == true){
        $('.sub-radio-option:checked').parents('.answer-array').find('.sub-answer-comment-container').show();
    }else {
        $('.sub-radio-option:checked').parents('.answer-array').find('.sub-answer-wrapper').hide();
    }
});

/*Show comments*/
$('.main-radio-option').on('change', function (){
    let val = $(this).val();
    if (val === 'Другое' || $(this).attr('show-comment')){
        $(this).parents().find('.comment-main-container').slideDown();
        if(val === 'Другое'){
            $('.main-comment').addClass('required-main-comment');
        }
        else {
            $('.main-comment').removeClass('required-main-comment');
        }
    } else {
        $('.comment-label-wrapper .comment-field').val('');
        $('.main-comment').removeClass('required-main-comment');
        $('.main-comment-error').hide();
        $(this).parents().find('.comment-main-container').fadeOut();
    }
    $('.sub-answer-comment-container').hide();
    /*Show and hide sub-questions*/
    if ($(this).is(":checked") === true){
        if($(this).hasClass('radio-show-comment')){
            $('.sub-answer-wrapper').hide();
            $('.sub-radio-option').prop('checked', false);
            $(this).parents('.answer-array').find('.sub-answer-comment-container').fadeIn();
            $('.sub-radio-option').removeClass('required-sub-radio');
            $(this).parents('.answer-array').find('.sub-answer-wrapper .sub-radio-option').addClass('required-sub-radio');
            $(this).parents('.answer-array').find('.sub-answer-comment-container .comment-field').addClass("required-comment");
        }
        else {
            $('.sub-answer-wrapper').hide();
            $('.sub-radio-option').prop('checked', false);
            $(this).parents('.answer-array').find('.sub-answer-wrapper').fadeIn();
            $('.sub-radio-option').removeClass('required-sub-radio');
            $(this).parents('.answer-array').find('.sub-answer-wrapper .sub-radio-option').addClass('required-sub-radio');
        }
    }
    else {
        if($(this).hasClass('radio-show-comment')){
            $(this).parents('.answer-array').find('.sub-answer-comment-container .comment-field').removeClass("required-comment");
        }
    }
});

/* Show comments for sub-questions*/
$('.sub-radio-option').on('change', function (){
   let val = $(this).val();

    if(val.length > 0){
        $(this).parents('.answer-array').find('.sub-answer-comment-container').slideDown();
        if(val == 'Другое' || val == 'Что было не так?'){
            $('.sub-comment').removeClass('required-comment');
            $(this).parents('.answer-array').find('.sub-answer-comment-container .comment-field').addClass("required-comment");
        } else {
            $('.sub-comment').removeClass('required-comment');
            $(this).parents('.answer-array').find('.sub-answer-comment-container .comment-field').removeClass("required-comment");
            $('.sub-comment-error').hide();
        }
   } else {
        $(this).parents('.answer-array').find('.sub-answer-comment-container').slideUp();
   }
});

/*Textarea label settings*/
$('.comment-field').on("focus", function (){
    $(this).parent().find('.label-txt').css({"top": "-25px"});
    $(this).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
});
$('.comment-field').focusout(function (){
    $(this).parent().find('.label-txt').css({"top": "0px"});
    $(this).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
    if($(this).val().length > 0){
        $(this).parent().find('.label-txt').css({"top": "-25px"});
        $(this).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
    }
});



