Lab: Exploratory and White Box Testing

Project Overview

This project focuses on exploratory testing and white box testing using a React counter application. The goal was to test the application's functionality, examine its source code, write automated tests using Jest and React Testing Library, and review code coverage.

The application allows users to increment, decrement, and reset a counter.


Step 1: Exploratory Testing

Testing Charter

The goal of this exploratory testing session was to investigate how the counter application responds to different user interactions. I tested the Increment, Decrement, and Reset buttons to check whether the counter updates correctly, handles negative values, and returns to its original state. I also tested combinations of actions to identify any unexpected behavior.

Exploratory Testing Results

Action

Expected Result

Actual Result

Pass or Fail

Click Increment once

Count increases to 1

Count changed to 1

Pass

Click Increment three times

Count increases to 3

Count changed to 3

Pass

Click Decrement once

Count decreases to -1

Count changed to -1

Pass

Increment twice, then decrement once

Count becomes 1

Count changed to 1

Pass

Increment several times, then click Reset

Count returns to 0

Count returned to 0

Pass

All five exploratory tests passed. The application behaved as expected during testing.

Step 2: Examine the Source Code

The counter application uses React's useState hook to manage the counter value.

Starting Value

The initial value of the counter is 0.

const [count, setCount] = useState(0);

Statements That Change Count

Statement

User Action

Result

setCount(count + 1)

Click Increment

Increases count by 1

setCount(count - 1)

Click Decrement

Decreases count by 1

setCount(0)

Click Reset

Returns count to 0

Branches and Loops

The component does not contain conditional statements such as if, else, or switch. It also does not contain loops such as for or while.

Branch coverage is not meaningfully applicable because there are no conditional branches to execute. Loop coverage does not apply because the component does not contain any loops.

Step 3: Create the Test File

I created the following test file:

src/App.test.tsx

I used React Testing Library to render the component and interact with its buttons.

The tests use:

render to display the React component.

screen to locate buttons and displayed text.

fireEvent to simulate button clicks.

Jest assertions to verify the expected counter values.

I organized the tests inside a describe block.

Step 4: Test the Starting State

I created a test to verify that the counter application displays the correct initial state.

The test checks that:

The application displays Count: 0.

The Increment button appears.

The Decrement button appears.

The Reset button appears.

The test passed successfully.

Step 5: Test Statement Coverage

I created tests to execute each statement that changes the counter.

The tests verified:

Increment changes the count from 0 to 1.

Decrement changes the count from 0 to -1.

Reset returns the count to 0 after it has been changed.

All three state-changing statements were successfully executed and tested.

Step 6: Test a Sequence of Actions

I created an additional test to verify that the application handles multiple actions in sequence.

The test performed the following actions:

Clicked Increment and verified the count was 1.

Clicked Increment again and verified the count was 2.

Clicked Decrement and verified the count was 1.

Clicked Reset and verified the count returned to 0.

Clicked Decrement again and verified the count was -1.

The test passed, confirming that the counter continues to work correctly after multiple interactions and resetting.

Step 7: Run the Tests

I ran the test suite using:

npm test

Test Results

All five tests passed successfully.

Test Suites: 1 passed

Tests: 5 passed

Failed Tests: 0

A screenshot of the completed Jest test run is included with my submission.

Step 8: Review Code Coverage

I ran Jest with code coverage enabled using:

npm test -- --coverage

Code Coverage Results

Coverage Type

Percentage

Statements

100%

Branches

100%

Functions

100%

Lines

100%

Coverage Explanation

The tests executed all the important parts of App.tsx, including the initial counter state and the Increment, Decrement, and Reset functions.

No statements or lines were left untested.

The component does not contain conditional branches or loops. Jest reported 100% branch coverage because there were no uncovered branches.

Code coverage is useful for identifying which parts of an application have been executed during testing. However, achieving 100% coverage does not automatically prove that an application is completely free of bugs. Tests still need to verify that the application behaves correctly under different situations.

A screenshot of the completed coverage report is included with my submission.

Step 9: Compare Exploratory and White Box Testing

Exploratory testing allowed me to interact with the application without looking at the source code. I tested the Increment, Decrement, and Reset buttons and tried different combinations of actions. One test idea I discovered was checking whether the counter could display negative numbers.

White box testing allowed me to examine the source code and understand how the application works internally. By looking at App.tsx, I identified the statements responsible for incrementing, decrementing, and resetting the counter.

Viewing the code helped me create more specific tests to make sure every statement was executed. Exploratory testing focused on the application's behavior from a user's perspective, while white box testing focused on the internal code.

One limitation of exploratory testing is that it may not cover every part of the code. One limitation of white box testing is that it can focus too much on the implementation instead of how users actually experience the application.

Both approaches were useful because they helped me understand the importance of testing an application from different perspectives.

Conclusion

This lab helped me understand the differences between exploratory testing and white box testing. I learned how to examine React source code, identify statements that change application state, and create automated tests using Jest and React Testing Library.

All five automated tests passed, and the application achieved 100% statement, branch, function, and line coverage.

This assignment also helped me understand how code coverage can be used to evaluate testing effectiveness and why it is important to combine different testing approaches.