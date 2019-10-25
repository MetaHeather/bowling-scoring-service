# Bowling Scoring Service Solution

## The two files that hold the solution can be found at:
| File           | Description                                              |
|----------------|----------------------------------------------------------|
| src/index.js       | contains `scoreCalc()` which is used for calculating score |
| src/index.spec.jst | holds testing of `scoreCalc()`                             |

## Usage
- `scoreCalc()` can be passed any number of bowling frames 
- The frames can be represented by an array of arrays of 2 integers 
- The integers can range from 1-10 and the total of each sub array must equal 10 or less
- An array of index 10 can be added to represent the bonus balls given if the 10th frame contains a Strike or Spare
- The function will correctly look for strikes and spares and adjust the score accordingly

## Testing Technologies
Mocha <br>
Chai 

