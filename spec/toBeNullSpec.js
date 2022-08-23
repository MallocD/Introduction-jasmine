describe("Suíte de testes toBeNull", function(){
	var n1 = null;
    var n2 = undefined;
    var n3;
    var n4 = NaN;
    var n5 = "teste";

	it("deve validar o uso do matcher 'toBeNull'", function(){
			expect(n1).toBeNull();

            expect(n2).not.toBeNull();
            expect(n3).not.toBeNull();
            expect(n4).not.toBeNull();
			expect(n5).not.toBeNull();	
        }
      )
    }
)