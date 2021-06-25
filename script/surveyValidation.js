
const form = document.getElementById('main-form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    let el = document.querySelectorAll('[data-reqired]');
    let subRadio = document.querySelectorAll('.required-sub-radio');
    let subCommnts = document.querySelectorAll('.required-comment');
    let mainComment = document.querySelectorAll('.required-main-comment');
    let reqComment = document.querySelectorAll('.req-comment');
    let erroreArrayElements = [];
    let pageNext;
    for (let i = 0; i < el.length; i++) {
        if (el[i].tagName === 'INPUT') {
            let name = el[i].getAttribute('data-name');
            if (document.querySelectorAll('[data-name=' + name + ']:checked').length === 0) {
                erroreArrayElements.push(el[i]);
                $(el[i]).on('click', function () {
                    $('.error').hide();
                });
                $('.error').fadeIn();
                $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
            }
            else {
                if($('[data-name=' + name + ']:checked').attr('data-page')){
                    pageNext = $('[data-name=' + name + ']:checked').attr('data-page');
                }
            }
        }
    }

    for (let i = 0; i < mainComment.length; i++){
        let val = mainComment[i].value;
        if(val.length < 1){
            erroreArrayElements.push(mainComment[i]);
            $(mainComment[i]).on('click', function () {
                $(this).parents('.main-comment-box').find('.main-comment-error').hide();
            });
            $(mainComment[i]).parents('.main-comment-box').find('.main-comment-error').fadeIn();
        }
    }

    for (let i = 0; i < reqComment.length; i++){
        let val = reqComment[i].value;
        if(val.length < 1){
            erroreArrayElements.push(reqComment[i]);
            $(reqComment[i]).on('click', function () {
                $(this).parents('.q-7-8-comment-box').find('.req-field-error').hide();
            });
            $(reqComment[i]).parents('.q-7-8-comment-box').find('.req-field-error').fadeIn();
        }
    }

    if (erroreArrayElements.length == 0) {
        console.log(pageNext);
        if(pageNext) {
            $(location).attr('href', pageNext);
        }
        else {
            // form.submit();
        }
    }
});