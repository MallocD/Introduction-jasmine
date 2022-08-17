describe("Comparador toBe", function(){
    it("Deve validar o uso do toBe",function(){
        var obj1= {valor : true};
        var obj2= {valor : true};
        // expect(obj1).toBe(obj2)
        expect(obj1).not.toBe(obj2)
        expect(true).toBe(true);
        expect("Teste").toBe("Teste")
    })
})