describe("Suíte de testes toContain", function(){
	var texto = "Meu nome é João";
    var frutas = ["goiaba", "bocaiuva", "pera"];

	it("deve validar o uso do matcher 'toContain'", function(){
			expect(texto).toContain("nome");
			expect(frutas).toContain("pera");

            expect(frutas).not.toContain(bocaiuva);

        }
      )
    }
)