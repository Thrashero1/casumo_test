describe('Various tests for the devowelizer', () =>{
    let alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    let noVowelAlphabet = ': b c d  f g h  j k l m n  p q r s t  v w x y z'

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

    it('Alphabet test', () => {
        cy.devowelizer(alphabet, noVowelAlphabet, 200)
    })
})