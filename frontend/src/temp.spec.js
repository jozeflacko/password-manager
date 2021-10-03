import myDivide from './temp'

describe('blalbla',()=>{
    
    const myTestData = [
        {first: 10,second: 5,expectedResult: 2 }, // testCase #1
        {first: 10,second: 2,expectedResult: 5 }, // testCase #2
        {first: 0,second: 1,expectedResult: 0 },  // testCase #3
    ]
    
    myTestData.forEach(({first,expectedResult,  second, }) => {
        test(`testing devide function with ${first} and ${second} and result should be ${expectedResult}`, () => {
            expect(myDivide(first,second)).toEqual(expectedResult);
        });
    })
})

describe('blalbla 2',()=>{

    const myTestData = [
        [10,2,5],
        [10,5,2],
        [0,1,0],
    ]

    myTestData.forEach(([first, second, expectedResult]) => {
        test(`testing devide function with ${first} and ${second} and result should be ${expectedResult}`, () => {
            expect(myDivide(first,second)).toEqual(expectedResult);
        });
    })
})