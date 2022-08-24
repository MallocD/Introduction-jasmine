describe("Suíte de testes toThrow", function(){

	it("deve validar o uso do 'toThrow'", function(){
			
            function multiplicar(){
                numero * 10;
            }

            function somar(n1,n2){
               return n1+n2;
            }

            expect(multiplicar).toThrow();
            expect(somar).not.toThrow();

        }
      )
    }
)