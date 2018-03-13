(function($){
    $(function(){
        $('.maket-question').tooltip();

        //Калькулятор
        var results = $('#tshirt-calculator-result');
        var total = '';
        var tirazh,
            numberOfSides = $('input[name="sidesRadioOptions"]').val(),
            firstSideColorNumber = 1,
            secondSideColorNumber = 1,
            vendor = 1,
            material = 1,
            collar,
            color = "white",
            maket = false,
            resultsForSend = [];

        function calculateTotal() {
            total = 0;

            if(tirazh === undefined || tirazh === "" ){
                total = "<b class='error'>Введите тираж!</b>";
            }else{
                if(tirazh > 999){
                    total = '<p><b>От 1000 штук цена расчитывается индивидуально</b></p>'
                }else {
                    if(vendor == "1"){ //ФУТБОЛКИ ЗАКАЗЧИКА

                        if(numberOfSides == "1"){// ОДНА СТОРОНА

                            if(tirazh > 0 && tirazh < 6){ total = tirazh * 950 }
                            if(tirazh > 5 && tirazh < 11){ total = tirazh * 750 }
                            if(tirazh > 10 && tirazh < 20){ total = tirazh * 600 }
                            if(tirazh > 19){
                                if(tirazh < 1000){
                                    total = (tirazh * 8.26 + 2714) * firstSideColorNumber;
                                }
                            }
                        } else { // ДВЕ СТОРОНЫ

                            if(tirazh > 0 && tirazh < 6){ total = tirazh * 1250 }
                            if(tirazh > 5 && tirazh < 11){ total = tirazh * 1050 }
                            if(tirazh > 10 && tirazh < 20){ total = tirazh * 900 }
                            if(tirazh > 19){
                                if(tirazh < 1000){
                                    total = (tirazh * 8.26 + 2714) * (firstSideColorNumber + secondSideColorNumber);
                                }
                            }
                        }
                    }else{ // футболки Eprint`a

                        if(numberOfSides == "1") {// ОДНА СТОРОНА

                            if(material == "4" && collar !== "4"){ tshirtPrice = 450 }

                            if(tirazh > 0 && tirazh < 6){ total = tirazh * 1200 }
                            if(tirazh > 5 && tirazh < 11){ total = tirazh * 1000 }
                            if(tirazh > 10 && tirazh < 20){ total = tirazh * 850 }
                            if(tirazh > 19){
                                if(tirazh < 100){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 250 }
                                        if(material == "2"){ tshirtPrice = 350 }
                                        if(material == "3"){ tshirtPrice = 470 }
                                    }else {
                                        if(material == "1"){ tshirtPrice = 150 }
                                        if(material == "2"){ tshirtPrice = 180 }
                                        if(material == "3"){ tshirtPrice = 300 }
                                    }
                                }
                                if(tirazh > 99 && tirazh < 500){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 250 }
                                        if(material == "2"){ tshirtPrice = 350 }
                                        if(material == "3"){ tshirtPrice = 470 }
                                    }else{
                                        if(material == "1"){ tshirtPrice = 120 }
                                        if(material == "2"){ tshirtPrice = 170 }
                                        if(material == "3"){ tshirtPrice = 280 }
                                    }
                                }
                                if(tirazh > 499 && tirazh < 1000){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 240 }
                                        if(material == "2"){ tshirtPrice = 330 }
                                        if(material == "3"){ tshirtPrice = 450 }
                                    }else {
                                        if(material == "1"){ tshirtPrice = 100 }
                                        if(material == "2"){ tshirtPrice = 160 }
                                        if(material == "3"){ tshirtPrice = 260 }
                                    }
                                }
                                total = (tirazh * 8.26 + 2714) * firstSideColorNumber + tshirtPrice * tirazh;
                            }

                        }else { // ДВЕ СТОРОНЫ
                            if(material == "4" && collar !== "4"){ tshirtPrice = 450 }

                            if(tirazh > 0 && tirazh < 6){ total = tirazh * 1500 }
                            if(tirazh > 5 && tirazh < 11){ total = tirazh * 1300 }
                            if(tirazh > 10 && tirazh < 20){ total = tirazh * 1150 }
                            if(tirazh > 19){
                                if(tirazh < 100){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 250 }
                                        if(material == "2"){ tshirtPrice = 350 }
                                        if(material == "3"){ tshirtPrice = 470 }
                                    }else {
                                        if(material == "1"){ tshirtPrice = 150 }
                                        if(material == "2"){ tshirtPrice = 180 }
                                        if(material == "3"){ tshirtPrice = 300 }
                                    }
                                }
                                if(tirazh > 100 && tirazh < 500){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 250 }
                                        if(material == "2"){ tshirtPrice = 350 }
                                        if(material == "3"){ tshirtPrice = 470 }
                                    }else{
                                        if(material == "1"){ tshirtPrice = 120 }
                                        if(material == "2"){ tshirtPrice = 170 }
                                        if(material == "3"){ tshirtPrice = 280 }
                                    }
                                }
                                if(tirazh > 500 && tirazh < 1000){
                                    if(collar == "4"){
                                        if(material == "1"){ tshirtPrice = 240 }
                                        if(material == "2"){ tshirtPrice = 330 }
                                        if(material == "3"){ tshirtPrice = 450 }
                                    }else {
                                        if(material == "1"){ tshirtPrice = 100 }
                                        if(material == "2"){ tshirtPrice = 160 }
                                        if(material == "3"){ tshirtPrice = 260 }
                                    }
                                }
                                total = (tirazh * 8.26 + 2714) * (firstSideColorNumber + secondSideColorNumber) + tshirtPrice * tirazh;
                            }
                        }
                    }
                }

                if(maket){ total += 2000 }
            }


            if(typeof(total) === "number"){
                results.html(Math.ceil(total)  + " рублей*");
            }else{
                results.html(total);
            }

            sendResults = "&tshirts=1&tirazh=" + tirazh + "&number_of_sides=" + numberOfSides + "&first_side=" + firstSideColorNumber + "&second_side=" + secondSideColorNumber + "&vendor=" + vendor + "&material=" + material + "&color=" + color + "&collar=" + collar +"&maket=" + maket + "&total=" + Math.ceil(total);

            return sendResults;
        }

        // Тираж
        $('#tshirt-calculator-quantity').focusout(function(){
            tirazh = parseInt($(this).val());
            if(tirazh === undefined || tirazh === "" ){
                $('#sendOrderModalButton').addClass('disabled').prop('disabled', true);
            }else{

                $('#sendOrderModalButton').removeClass('disabled').prop('disabled', false);
                if(tirazh < 20) {
                    $('#tshirt-calculator-colors-one').prop('disabled', true);
                    $('#tshirt-calculator-colors-two').prop('disabled', true);
                }else{
                    $('#tshirt-calculator-colors-one').prop('disabled', false);
                    if(numberOfSides == 2){
                        $('#tshirt-calculator-colors-two').prop('disabled', false);
                    }else{
                        $('#tshirt-calculator-colors-two').prop('disabled', true);
                    }
                }
            }

            calculateTotal();
        });

        // Количество сторон
        $('input[name="sidesRadioOptions"]').change(function(){
            numberOfSides = parseInt($(this).val());
            if(tirazh > 19){
                if(numberOfSides == "1"){
                    $('#tshirt-calculator-colors-two').prop('disabled', true);
                }else{
                    $('#tshirt-calculator-colors-two').prop('disabled', false);
                }
            }
            calculateTotal();
        });

        // Количество цветов на 1-й сторона
        $('#tshirt-calculator-colors-one').change(function(){
            firstSideColorNumber = parseInt($(this).val());
            calculateTotal();
        });

        // Количествао цветов на 2-й стороне
        $('#tshirt-calculator-colors-two').change(function(){
            secondSideColorNumber = parseInt($(this).val());
            calculateTotal();
        });

        // Чьи футболки
        // 1 - футболки заказчика
        // 2 - футболки поставщика
        $('#tshirt-calculator-vedor').change(function(){
            vendor = parseInt($(this).val());
            if(vendor == "1"){
                $('#tshirt-calculator-material').prop('disabled', true);
                $('input[name="collarRadioOptions"]').prop('disabled', true);
                $('input[name="colorRadioOptions"]').prop('disabled', true);
            }else {
                $('#tshirt-calculator-material').prop('disabled', false);
                $('input[name="collarRadioOptions"]').prop('disabled', false);
                $('input[name="colorRadioOptions"]').prop('disabled', false);
            }
            calculateTotal();
        });

        // Материал
        // 1 - Промо
        // 2 - Премиум
        // 3 - Люкс
        // 4 - Стрейч
        $('#tshirt-calculator-material').change(function () {
            material = parseInt($(this).val());
            calculateTotal();
        });

        // Ворот
        // 1 - V-образный
        // 2 - узкий
        // 3 - широкий
        // 4 - поло
        $('input[name="collarRadioOptions"]').change(function(){
            collar = parseInt($(this).val());
            calculateTotal();
        });

        // Цвет
        //
        $('input[name="colorRadioOptions"]').change(function(){
            color = parseInt($(this).val());
            calculateTotal();
        });


        //Макет
        $('#maket-enable-checkbox').change(function () {
            maket = $(this).prop("checked");
            calculateTotal();
        });

        // Отправка данных калькулятора
        $('.calculator-form').submit(function(e){
            e.preventDefault();
            var m_method=$(this).attr('method');
            var m_action=$(this).attr('action');
            var m_data=$(this).serialize() + sendResults;
            console.log(m_data);
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                success: function(result){
                    $('.modal-title').css("visibility", "hidden");
                    $('.calculator-form').css("display", "none");
                    $('.form-result').css("display", "block");
                }
            });
        });

    });
})(jQuery);