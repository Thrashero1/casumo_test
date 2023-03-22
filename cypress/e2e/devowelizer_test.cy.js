describe('Various tests for the devowelizer', () =>{

    it('Basic string lowercase', () => {
        cy.devowelizer('abcdefg', ':bcdfg', 200)
    })

    it('Basic string uppercase', () => {
        cy.devowelizer('ABCDEFG', ':BCDFG', 200)
    })

    it('Basic int', () => {
        cy.devowelizer('12345', ':12345', 200)
    })

    it('Alphanumeric', () => {
        cy.devowelizer('twelve12', ':twlv12', 200)
    })

    it('Multi case test', () => {
        cy.devowelizer('TrEaTmEnT', ':TrTmnT', 200)
    })

    it('Multiple strings', () => {
        cy.devowelizer('This is a longer test', ':Ths s  lngr tst', 200)
    })
    
    it('Strings with symbols', () => {
        cy.devowelizer('Test @ symbols!$', ':Tst @ symbls!$', 200)
    })

    it('Accidental Parameter', () => {
        cy.devowelizer('This is an accident?!!', ':Ths s n ccdnt?!!', 200)
    })

    it('Only Vowels', () => {
        cy.devowelizer('aeiou', ':', 200)
    })
})