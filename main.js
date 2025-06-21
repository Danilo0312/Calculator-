function insrt(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}

function eql() {
    let result = eval($('.calc-display').val());
    if (result === Infinity || result === -Infinity) {
        $('.calc-display').val('Error');
    } else {
        $('.calc-display').val(result);
    }
}

function c() {
    $('.calc-display').val('');
}

function del() {
    let value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length - 1));
}
