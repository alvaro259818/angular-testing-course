import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let calculator: CalculatorService, 
    loggerSpy: any 

    beforeEach(()=>{
        console.log("Calling beforeEach")

        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"])

        TestBed.configureTestingModule({
            providers: [
                CalculatorService, 
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })

        calculator = TestBed.get(CalculatorService)
    })

    xit('should add two numbers', () => {
        
        console.log("add test")

        const result = calculator.add(2,2)

        expect(result).toBe(4)

        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    });

    //fit('should subtract two numbers', () => { --> f is for focus in only one test
    it('should subtract two numbers', () => {

        console.log("subtracts test")

        const result = calculator.subtract(2,2)

        expect(result).toBe(0, "unexpected subtraction result")

        expect(loggerSpy.log).toHaveBeenCalledTimes(1)

    });
})