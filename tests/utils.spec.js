import {get_decoded_uri, get_unique_expandable_id} from '../src/utils'


describe('getDecodedUri', () => {
    it('Should decode uri', () => {
        expect(get_decoded_uri('This%20is%20the%20%40%20great%20test')).toBe('This is the @ great test')
    })

    it('Should not modify plain text', () => {
        expect(get_decoded_uri('This is the @ great test')).toBe('This is the @ great test')
    })

    it('Should return error message', () => {
        expect(get_decoded_uri('%E0%A4%A')).toBe('URIError: URI malformed')
    })
})

describe('getUniqueExpandableId', () => {
    it('Should return a uuid', () => {
        const minimal_panel = {
            _uuid: '123-456-789',
            message: 'My message'
        }
        expect(get_unique_expandable_id(minimal_panel)).toBe('123-456-78910')
    })

    it('Should return a uuid if message is empty', () => {
        const minimal_panel = {
            _uuid: '123-456-789',
            message: ''
        }
        expect(get_unique_expandable_id(minimal_panel)).toBe('123-456-7890')
    })

    it('Should fail if _uuid is empty', () => {
        const minimal_panel = {
            _uuid: '',
            message: 'My message'
        }
        expect(() => {
            get_unique_expandable_id(minimal_panel)
        }).toThrow('_uuid should not be empty');
    })
})