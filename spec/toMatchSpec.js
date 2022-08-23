describe("Suíte de testes", function(){
	var textoComparar = "Curso de testes com Jasmine";

	it("deve validar o uso do matcher 'toMatch'", function(){
			expect(textoComparar).toMatch(/jasmine/i);
			expect(textoComparar).toMatch("Jasmine");	
			// expect(textoComparar).toMatch(/Javascript/);
            expect("12345-456").toMatch(/^\d{5}-\d{3}$/);// ExpR seja um dígito, tenha 5 digitos, haja um traço e após isso mais 3 dídgitos
			expect("14/12/2022").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);	
        }
      )
    }
)