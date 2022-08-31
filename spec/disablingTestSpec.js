describe("Desabilitando teste", function(){
    var contadorExterno = 0;

    beforeEach(function(){
        contadorExterno++;
    })
    
    xit("Deve conter 1 para o contadorExterno", function(){
        expect(contadorExterno).toEqual(1);
    });

    it("Somente uma descrição");
    
    it("Deve incrementar o contador para 2", function(){
        expect(contadorExterno).toEqual(1);
        pending("Implementar")
    });

    

})