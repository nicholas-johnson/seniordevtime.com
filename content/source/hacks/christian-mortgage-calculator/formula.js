100*((0.2*(1+0.02)^3)/(1_0.02)^3 -1)

100 * (Math.pow(0.2 * (1 + 0.02), 3) / Math.pow((1 + 0.02), 3) - 1)

numberOfPayments = 12 * 15 // number of payments
// principle = 11000 // principle
interest = 7/100/12 // monthly decimal interest
x = Math.pow(1+interest, numberOfPayments)

// monthlyPayment = (interest * principle * x) / (x - 1)
monthlyPayment = 750 + 500;
equity = 200000

newPrinciple = (monthlyPayment * (x-1)) / (interest * x)

total  = newPrinciple + equity
