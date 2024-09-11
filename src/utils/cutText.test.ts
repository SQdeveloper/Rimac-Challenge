import { expect, test } from 'vitest'
import { cutSecondText, cutText } from './cutText.js'

test('cut text', ()=>{
    expect(cutText('Prueba número uno con texto')).toBe('Prueba número uno')
    expect(cutText('Prueba número 2 con texto')).toBe('Prueba número 2')
    expect(cutText('Esperando texto')).toBe('Esperando texto')
    expect(cutText('')).toBe('')
})

test('cut second test', ()=>{
    expect(cutSecondText('El sol brilla en el cielo.')).toBe('en el cielo.')
    expect(cutSecondText('Las flores en el jardín son hermosas hoy.')).toBe('el jardín son hermosas hoy.')
    expect(cutSecondText('texto de')).toBe('')
    expect(cutSecondText('')).toBe('')
})