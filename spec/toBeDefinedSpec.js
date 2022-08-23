describe("Suíte de testes toBeDefined", function(){
	var numero = 10;
    var texto;
    var objt = {'valor':10};

	it("deve validar o uso do matcher 'toBeDefined'", function(){
			expect(numero).toBeDefined();
			expect(texto).toBeDefined();
            expect(objt.valor).toBeDefined();
			expect(objt.mensagem).toBeDefined();	
			expect(null).toBeDefined();	
			expect(NaN).toBeDefined();	

            expect(texto).not.toBeDefined();
        }
      )
    }
)