// Global Variables
let btnRes;
let bmiRes;
let weightCond;

/**
 * Calculate BMI function to calculate BMI using typeScript
 * @param height 
 * @param weight 
 */
function calculateBMI(height: any, weight: any){
    // console output
    console.log(height);
    console.log(weight);

    this.bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(this.bmiValue);

    if(this.bmiValue < 18.5){
        this.weightCond = 'Underweight';
    }else if(this.bmiValue >= 18.5 && this.bmiValue <= 24.9){
        this.weightCond = 'Normal';
    }else if(this.bmiValue >= 25 && this.bmiValue <= 29.9){
        this.weightCond = 'Overweight';
    }else if(this.bmiValue >= 30){
        this.weightCond = 'Obese';
    }
    console.log(this.weightCond);
}

// Call the function
calculateBMI(130, 75);