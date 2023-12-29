let prompt = require("prompt-sync")();
//A function to calculate and display students' grader:
function calculateStudentGrade(){
    //The prompt asks users to input student's marks
    //parseFLoat functionconverts input to a floating point number
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    // Check if marks are within the valid range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Determine the grade based on the specified ranges
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Output the result
        console.log("The grade for " + marks + " marks is: " + grade);
    } else {
        console.log("Invalid input. Marks should be between 0 and 100.");
    }
}

// Call the function
calculateStudentGrade();
