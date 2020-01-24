class Calculator {
    constructor(selectorName) {
         this.name = selectorName;
         this.$calculatorDOMElement = $(selectorName);

         this.firstNumberArray = [];
         this.secondNumberArray = [];
         this.resultNumberArray = [0,0,0,0,0,0,0,0,0];
         this.initEvents();
   }
   getName() {
       return `Hello I am ${this.name}`;
   }
   checkNumber() {
       let root =  this.$calculatorDOMElement;
       let $firstNumber = root.children(".group-number").children("label:first-child");
       let $secondNumber = root.children(".group-number").children("label:nth-child(2)");
       let $resultNumber = root.children(".group-number").children(".result-bit");

       for(let i = $firstNumber.length-1, j = 0; i >= 0 ; i--, j++) {
           this.firstNumberArray[i] = parseInt( $firstNumber.eq(j).find('.active').text() );
           this.secondNumberArray[i] = parseInt( $secondNumber.eq(j).find('.active').text() );
           this.resultNumberArray[i] = parseInt( $resultNumber.eq(j).find('.active').text() );
       }
       this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
   }
}

export { Calculator };
