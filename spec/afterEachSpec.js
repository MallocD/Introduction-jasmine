describe("Teste do afterEach",function(){

    var contador = 0;

    beforeEach(function(){
        contador++;
    })

    afterEach(function(){
        contador = 0;
    })
    
    it("Deve incrementar o contador para 1", function(){
        expect(contador).toEqual(1);
    });

    it("Deve ainda o contador ser 1", function(){
        expect(contador).toEqual(1);
    });


})