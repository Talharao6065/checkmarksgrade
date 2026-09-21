function CheckGrade(event) {

    event.preventDefault();

    let marks = document.querySelector("#Marks").value;
    let result = document.querySelector("#result");

    if (marks >= 80) {
        result.innerHTML = `
            <div class="alert alert-success text-center">
                <h4>Grade A</h4>
                <p>Excellent Result!</p>
            </div>
        `;
    }
    else if (marks >= 70) {
        result.innerHTML = `
            <div class="alert alert-success text-center">
                <h4>Grade B</h4>
                <p>Very Good Result!</p>
            </div>
        `;
    }
    else if (marks >= 60) {
        result.innerHTML = `
            <div class="alert alert-info text-center">
                <h4>Grade C</h4>
                <p>Good Result!</p>
            </div>
        `;
    }
    else if (marks >= 50) {
        result.innerHTML = `
            <div class="alert alert-warning text-center">
                <h4>Grade D</h4>
                <p>Need Improvement!</p>
            </div>
        `;
    }
    else {
        result.innerHTML = `
            <div class="alert alert-danger text-center">
                <h4>Fail</h4>
                <p>Better Luck Next Time!</p>
            </div>
        `;
    }
}