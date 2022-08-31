describe("Teste do objeto Spy", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        }
    };

    beforeAll(function(){
        spyOn(Calculadora,"somar");
    });

    it("Deve possuir o método somar como não definido", function(){
        expect(Calculadora.somar(1,2)).toBeUndefined();
    })

    it("Deve chamar o método ao menos uma vez", function(){
        expect(Calculadora.somar).toHaveBeenCalled();
    })


})