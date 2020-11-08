import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {

    beforeAll(()=> {
        cleanup()
    })

    test('should be disabled when the disabled prop is true', () => {
        render(<Button disabled={true}>Test Button</Button>);
        expect(screen.getByRole('button', { name: /Test Button/ })).toBeDisabled()
    })
    test('should be enabled when the disabled prop is false', () => {
        render(<Button disabled={false}>Test Button</Button>);
        expect(screen.getByRole('button', { name: /Test Button/ })).not.toBeDisabled()
    })

    test('should have the default class', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByRole('button', { name: /Test Button/ }).classList.contains('Default')).toBeTruthy()
    })

    test('it should call the function passed when clicked', () => {
        const mockFn = jest.fn()
        render(<Button onClick={mockFn}>Test Button</Button>);
        const button = screen.getByRole('button', {name: /Test Button/})
        fireEvent.click(button)
        expect(mockFn).toBeCalledTimes(1)
    })
})
