describe("Suíte de testes toBeUndefined", function(){
	var n1;
    var n2 = undefined;
    var n3 = false;

	it("deve validar o uso do matcher 'toBeUndefined'", function(){
			expect(n1).toBeUndefined();
			expect(n2).toBeUndefined();

            expect(n3).not.toBeUndefined();
			expect(null).not.toBeUndefined();	

        }
      )
    }
)