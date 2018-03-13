;var vm = new Vue({
    el: '.tshirt-calculator-section',
    data: {
        tirazh: '',
        numberOfSides: 1,
        firstSideColorNumber: 1,
        secondSideColorNumber: 1,
        vendor: 1,
        material: 1,
        collar: '',
        color: "white",
        maket: false

    }, /* data */
    computed: {
        total: function(){

            var total = 0;

            if( this.tirazh === undefined || this.tirazh === "" ){
                total = "Введите тираж!";
            }else{
                if(this.tirazh > 999){
                    total = 'От 1000 штук цена расчитывается индивидуально'
                }else{
                    if( this.vendor === 1 ){ //ФУТБОЛКИ ЗАКАЗЧИКА
                        if( this.numberOfSides === 1 ){// ОДНА СТОРОНА

                            if(this.tirazh > 0 && this.tirazh < 6){ total = this.tirazh * 950 }
                            if(this.tirazh > 5 && this.tirazh < 11){ total = this.tirazh * 750 }
                            if(this.tirazh > 10 && this.tirazh < 20){ total = this.tirazh * 600 }
                            if(this.tirazh > 19){
                                if(this.tirazh < 1000){
                                    total = (this.tirazh * 8.26 + 2714) * this.firstSideColorNumber;
                                }
                            }
                        } else { // ДВЕ СТОРОНЫ

                            if(this.tirazh > 0 && this.tirazh < 6){ total = this.tirazh * 1250 }
                            if(this.tirazh > 5 && this.tirazh < 11){ total = this.tirazh * 1050 }
                            if(this.tirazh > 10 && this.tirazh < 20){ total = this.tirazh * 900 }
                            if(this.tirazh > 19){
                                if(this.tirazh < 1000){
                                    total = (this.tirazh * 8.26 + 2714) * (this.firstSideColorNumber + this.secondSideColorNumber);
                                }
                            }
                        }
                    } else { // футболки Eprint`a
                        if(this.numberOfSides === 1) { // ОДНА СТОРОНА
                          if(this.material === 4 && this.collar !== 4){ tshirtPrice = 450 }

                          if(this.tirazh > 0 && this.tirazh < 6){ total = this.tirazh * 1200 }
                          if(this.tirazh > 5 && this.tirazh < 11){ total = this.tirazh * 1000 }
                          if(this.tirazh > 10 && this.tirazh < 20){ total = this.tirazh * 850 }
                          if(this.tirazh > 19){
                            if(this.tirazh < 100){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 250 }
                                if(this.material === 2){ tshirtPrice = 350 }
                                if(this.material === 3){ tshirtPrice = 470 }
                              }else {
                                if(this.material === 1){ tshirtPrice = 150 }
                                if(this.material === 2){ tshirtPrice = 180 }
                                if(this.material === 3){ tshirtPrice = 300 }
                              }
                            }
                            if(this.tirazh > 99 && this.tirazh < 500){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 250 }
                                if(this.material === 2){ tshirtPrice = 350 }
                                if(this.material === 3){ tshirtPrice = 470 }
                              }else{
                                if(this.material === 1){ tshirtPrice = 120 }
                                if(this.material === 2){ tshirtPrice = 170 }
                                if(this.material === 3){ tshirtPrice = 280 }
                              }
                            }
                            if(this.tirazh > 499 && this.tirazh < 1000){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 240 }
                                if(this.material === 2){ tshirtPrice = 330 }
                                if(this.material === 3){ tshirtPrice = 450 }
                              }else {
                                if(this.material === 1){ tshirtPrice = 100 }
                                if(this.material === 2){ tshirtPrice = 160 }
                                if(this.material === 3){ tshirtPrice = 260 }
                              }
                            }
                            total = (this.tirazh * 8.26 + 2714) * this.firstSideColorNumber + this.tshirtPrice * this.tirazh;
                          }
                        } else { // Две стороны
                          if(this.material === 4 && this.collar !== 4){ tshirtPrice = 450 }

                          if(this.tirazh > 0 && this.tirazh < 6){ total = this.tirazh * 1500 }
                          if(this.tirazh > 5 && this.tirazh < 11){ total = this.tirazh * 1300 }
                          if(this.tirazh > 10 && this.tirazh < 20){ total = this.tirazh * 1150 }
                          if(this.tirazh > 19){
                            if(this.tirazh < 100){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 250 }
                                if(this.material === 2){ tshirtPrice = 350 }
                                if(this.material === 3){ tshirtPrice = 470 }
                              }else {
                                if(this.material === 1){ tshirtPrice = 150 }
                                if(this.material === 2){ tshirtPrice = 180 }
                                if(this.material === 3){ tshirtPrice = 300 }
                              }
                            }
                            if(this.tirazh > 100 && this.tirazh < 500){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 250 }
                                if(this.material === 2){ tshirtPrice = 350 }
                                if(this.material === 3){ tshirtPrice = 470 }
                              }else{
                                if(this.material === 1){ tshirtPrice = 120 }
                                if(this.material === 2){ tshirtPrice = 170 }
                                if(this.material === 3){ tshirtPrice = 280 }
                              }
                            }
                            if(this.tirazh > 500 && this.tirazh < 1000){
                              if(this.collar === 4){
                                if(this.material === 1){ tshirtPrice = 240 }
                                if(this.material === 2){ tshirtPrice = 330 }
                                if(this.material === 3){ tshirtPrice = 450 }
                              }else {
                                if(this.material === 1){ tshirtPrice = 100 }
                                if(this.material === 2){ tshirtPrice = 160 }
                                if(this.material === 3){ tshirtPrice = 260 }
                              }
                            }
                            total = (this.tirazh * 8.26 + 2714) * (this.firstSideColorNumber + this.secondSideColorNumber) + tshirtPrice * this.tirazh;
                          }
                        }
                    }
                }
            }
            return total;
        }

    } /* computed */
});

(function($){
    $(function(){
        $('.maket-question').tooltip();
    });
})(jQuery);