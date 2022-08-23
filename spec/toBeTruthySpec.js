describe("Suíte de testes toBeTruthy", function(){
    var n0 = 10;
	var n1 = null;
    var n2 = undefined;
    var n3 = 0;
    var n4 = NaN;
    var n5 = false;
    var n7 = '';
    var n6;

	it("deve validar o uso do matcher 'toBeTruthy'", function(){
			expect(n0).toBeTruthy();
			expect(true).toBeTruthy();
			expect('n1').toBeTruthy();

            expect(n1).not.toBeTruthy();
            expect(n2).not.toBeTruthy();
            expect(n3).not.toBeTruthy();
            expect(n4).not.toBeTruthy();
			expect(n5).not.toBeTruthy();	
			expect(n6).not.toBeTruthy();	
			expect(n7).not.toBeTruthy();	
        }
      )
    }
)