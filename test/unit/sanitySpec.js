/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe("Sanity", function() {
    it("succeeds", function() {
        expect(true).toEqual(true);
    });
});

describe('2 Demo test suite', function() {
    it('should assert true', function() {
        expect(true).toBeTruthy();
    });

    describe('ignored', function() {
        it('should be skipped', function() {
            expect(true).toBeTruthy();
        });
    });

    it('should assert true 1', function() {
        expect(true).toBeTruthy();
    });
});

xdescribe('Fail demo test suite', function() {
    it('should assert true', function() {
        expect(true).toBeFalsy();
    });

    it('should assert true 1', function() {
        expect(true).toBeFalsy();
    });
});