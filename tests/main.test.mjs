import {jest} from '@jest/globals'

describe('Main', () => {
    test('Deve imprimir "New Project', async () => {
               
         const consoleSpy = jest.spyOn(console, 'log');
         await import('../src/main.mjs')
         expect(consoleSpy).toHaveBeenCalledWith('New Project');
                
    })
    
})
