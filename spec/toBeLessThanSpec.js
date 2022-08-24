describe("Suíte de testes toBeLessThan", function(){
	
    var PI = 3.1415;

	it("deve validar o uso do matcher 'toBeLessThan'", function(){
			expect(3).toBeLessThan(PI);

            expect(3.5).not.toBeLessThan(PI);
        }
      )
    }
)