import {} from '../../src/components/Login'


describe('Login Componet Test Suite', ()=>{

    let container:HTMLDivElement ;

    beforeEach(()=>{
        // console.log('before each')
        container = document.createElement('div');
        document.appendChild(container);
        jest.mock('react-dom', () => ({
            render: jest.fn(),
       }));
    })
    afterEach(()=>{
        console.log('after each')
    })
    test('initial test', ()=>{
        expect(true).toBeTruthy()
    })
})