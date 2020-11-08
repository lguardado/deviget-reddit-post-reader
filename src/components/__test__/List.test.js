import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import List from '../List/List'

describe('<List />', () => {

    beforeAll(() => {
        cleanup()
    })

    test('It renders 2 items when there are items passed to it', () => {
        render(<List items={[{ data: { id: 1 } }, { data: { id: 2 } }]} />)
        expect(screen.queryAllByTestId('item')).toHaveLength(2)
    })

    test('It doesn\'t have items when there is no items prop', () => {
        render(<List />)
        expect(screen.queryAllByTestId('item')).toHaveLength(0)
    })

})