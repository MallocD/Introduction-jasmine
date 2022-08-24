describe("Suíte de testes toBeGreaterThan", function(){
	
    var PI = 3.1415;

	it("deve validar o uso do matcher 'toBeGreaterThan'", function(){
			expect(4).toBeGreaterThan(PI);
			expect("5").toBeGreaterThan(PI);

            expect(3).not.toBeGreaterThan(PI);
        }
      )
    }
)