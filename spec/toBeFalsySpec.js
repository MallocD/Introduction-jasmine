describe("Suíte de testes toBeFalsy", function(){
    var n0 = 10;
	var n1 = null;
    var n2 = undefined;
    var n3 = 0;
    var n4 = NaN;
    var n5 = false;
    var n7 = '';
    var n6;

	it("deve validar o uso do matcher 'toBeFalsy'", function(){
			expect(n0).not.toBeFalsy();
			expect(true).not.toBeFalsy();
			expect('n1').not.toBeFalsy();

            expect(n1).toBeFalsy();
            expect(n2).toBeFalsy();
            expect(n2).toBeFalsy();
            expect(n3).toBeFalsy();
            expect(n4).toBeFalsy();
			expect(n5).toBeFalsy();	
			expect(n6).toBeFalsy();	
            expect(n7).toBeFalsy();	
    }
      )
    }
)