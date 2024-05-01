var expect = function(val) {
  return {
      toBe: function(val2) {
          if (val === val2) {
              return true;
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: function(val2) {
          if (val !== val2) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  };
};

expect(5).toBe(5);
expect(5).toBe(null);
expect(5).notToBe(null);

