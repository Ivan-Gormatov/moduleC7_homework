import { myJuice } from "../../utils/juice.js";

describe('my juice', () => {
    test('is sweet', () => {
      expect(myJuice.sweet).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myJuice.sour).toBeFalsy();
    });
  });

describe('my juice', () => {
    
    test('is sweet', () => {
      expect(myJuice.sweet).toBeFalsy();
    });
  
    test('is not sour', () => {
      expect(myJuice.sour).toBeFalsy();
    });
  });

xdescribe('my juice', () => {
    test('is sweet', () => {
      expect(myJuice.sweet).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myJuice.sour).toBeTruthy();
    });
  });