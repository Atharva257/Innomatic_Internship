// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. Remaining balance: ${balance - amount}`;
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount >= 500) discount = 0.1;

    let discountedAmount = orderAmount * (1 - discount);
    let shipping = discountedAmount > 50 ? 0 : 10;

    return discountedAmount + shipping;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;

    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    if (density === "Moderate Traffic") return 40;
    if (density === "Light Traffic") return 20;
    return "Invalid traffic density";
}

// 5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8; 
    if (age > 60) price *= 0.7; 
    else if (age < 12) price *= 0.6; 
    return price.toFixed(2);
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.9;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount;
    }
    return "Coupon not applicable";
}

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsDietPlan) return "VIP ($80/month)";
    if (wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}

// 9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units <= 100) rate = 5;
    else if (units <= 300) rate = 4;
    else rate = 3;

    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;

    return (units * rate).toFixed(2);
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300;
    if (classType === "Business") fare += 200;
    else if (classType === "First") fare += 500;

    if (luggageWeight > 20) {
        let extraLuggage = luggageWeight - 20;
        fare += 50 * Math.ceil(extraLuggage / 10);
    }

    if (isStudent) fare *= 0.85; 
    else if (isSenior) fare *= 0.9; 

    return fare.toFixed(2);
}

// Test Cases
console.log(atmWithdrawal(5000, 2000, 1234, 1234)); 
console.log(atmWithdrawal(5000, 6000, 1234, 1234)); 
console.log(atmWithdrawal(5000, 1500, 1234, 1111)); 
console.log(calculateFinalAmount(1200)); 
console.log(calculateFinalAmount(400)); 
console.log(calculateGrade(85, 95)); 
console.log(calculateGrade(65, 80)); 
console.log(trafficLightControl("Heavy Traffic")); 
console.log(trafficLightControl("Moderate Traffic")); 
console.log(calculateTicketPrice(65, 19)); 
console.log(calculateTicketPrice(8, 15)); 
console.log(isEligibleForJob(25, 3, "Bachelor's Degree"));
console.log(isEligibleForJob(20, 1, "High School Diploma"));
console.log(applyCoupon(600, "DISCOUNT10")); 
console.log(applyCoupon(300, "FREESHIP")); 
console.log(choosePlan("Basic", true, false)); 
console.log(calculateElectricityBill(150, 15));
console.log(calculateElectricityBill(350, 22)); 
console.log(calculateFlightFare("First", 25, false, true)); 
console.log(calculateFlightFare("Economy", 15, true, false)); 