;;;
"layout": "blank"
;;;

!!!html
%html{ ng: {app: 'MortgageCalculator'}}
%head
%script{ src: "//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js" }
%link{ rel: "stylesheet", href: 'style.css'}
%script
:plain
angular.module('MortgageCalculator', [])
.controller('MortgageController', function($scope) {
$scope.mortgage = {
income: 40000,
defaultTerm: 15,
defaultEquity: 10000,
defaultInterest: 5,
currency: '£',
tax: {
percentageOfSale:3,
percentageOfMortgage: 0
},
fees: {}
}
$scope.calculate = {
defaultPayment: function() {
$scope.mortgage.defaultPayment = Math.round($scope.mortgage.income / 12 / 4)
},
numberOfPayments: function() {
$scope.mortgage.numberOfPayments = $scope.mortgage.term * 12;
},
availableToBorrow: function() {
var x = Math.pow(1 + ($scope.mortgage.interest / 12 / 100), $scope.mortgage.numberOfPayments)
$scope.mortgage.availableToBorrow = ($scope.mortgage.payment * (x-1)) / ($scope.mortgage.interest * x)
},
finalYear: function() {
$scope.mortgage.finalYear = new Date().getFullYear() + $scope.mortgage.term
}
}
$scope.reset = {
payment: function() {
$scope.mortgage.payment = $scope.mortgage.defaultPayment;
},
term: function(e) {
$scope.mortgage.term = $scope.mortgage.defaultTerm;
},
interest: function() {
$scope.mortgage.interest = $scope.mortgage.defaultInterest;
},
equity: function() {
$scope.mortgage.equity = $scope.mortgage.defaultEquity;
}
};

$scope.resetInterest = function() {
$scope.mortgage.interest = $scope.mortgage.defaultInterest;
}

$scope.reset.term();
$scope.reset.payment();
$scope.reset.interest();
$scope.reset.equity();
$scope.calculate.numberOfPayments();
$scope.calculate.finalYear();

$scope.$watch('mortgage.term', $scope.calculate.numberOfPayments);
$scope.$watch('mortgage.term', $scope.calculate.finalYear);
$scope.$watch('mortgage.income', $scope.calculate.defaultPayment);
$scope.$watch('mortgage.income', $scope.reset.payment);
$scope.$watch('mortgage.payment', $scope.calculate.availableToBorrow)
$scope.$watch('mortgage.interest', $scope.calculate.availableToBorrow)
$scope.$watch('mortgage.numberOfPayments', $scope.calculate.availableToBorrow)

});
%body
%article
%div{ng: {controller: 'MortgageController'}}
%h1 Christian Mortgage Calculator

%p This calculator aims to tell you not how much you can borrow, but how much you can afford to borrow without crippling yourself and your family. It's based on suggestions made by Dave Ramsey.

.quote "The borrower is slave to the lender"

%form

%fieldset

%label{for: 'currency'} Currency:
%select#currency{ng: {model: 'mortgage.currency'}}
%option{ value: "£"} £
%option{ value: "$"} $
.note This makes no difference to the calculation

%label{for: 'income'} Income: {{mortgage.currency}}
%input#income{type: 'number', ng: {model: 'mortgage.income'}}
.note Your total household net income after tax.

%fieldset
%label{for: 'payment'} Monthly Payment: {{mortgage.currency}}
%input#income{type: 'number', ng: {model: 'mortgage.payment'}}
.note
Suggested maximum monthly payment is no more than 1/4 NET income. This assumes you have
%strong no other debt:
{{mortgage.defaultPayment | currency:mortgage.currency}}
%a{ng: {click: "reset.payment()"}}
use this value

%fieldset
%label{for: 'term'}
Mortgage Term
%input#income{type: 'number', ng: {model: 'mortgage.term'}}
%span.unit
Years
.note ({{mortgage.numberOfPayments}} monthly payments, paid off in {{mortgage.finalYear}})
.suggestion
Suggested term is 15 years
%a{ng: {click: "reset.term()"}}
use this value

%fieldset
%label{for: 'interest'}
Interest Rate
%input#income{type: 'number', ng: {model: "mortgage.interest"}}
%span.unit %

.note Unless you have a fixed rate deal, assume this will go up. It has been as high as 14% in recent years.
.suggestion
Suggestion: 5%
%a{ng: {click: "reset.interest()"}}
use this value

%fieldset
%label{for: 'equity'} Equity
%input#income{type: 'number', ng: {model: "mortgage.equity"}}
.note How much do you currently have saved up?
.suggestion
Aim to have at least {{mortgage.defaultEquity | currency:mortgage.currency}} in the bank.
%a{ng: {click: "reset.equity()"}}

%fieldset

%label Stamp Duty
%input#stamp_duty{type: 'number',ng: { model: 'mortgage.tax.percentageOfSale' }}
%span.unit %
.suggestion
In the UK you'll have to pay stamp duty, which is typically around 3% or the value of the house.

%fieldset

%p
You could probably afford to borrow {{mortgage.availableToBorrow | currency:mortgage.currency}}


%p
This means you could buy a home for {{ mortgage.availableToBorrow + mortgage.equity | currency:mortgage.currency }}

assuming {{mortgage.numberOfPayments}} payments of {{mortgage.payment | currency:mortgage.currency}} at {{mortgage.interest}}%, fully paid off in {{mortgage.finalYear}}



.disclaimer
Please note that I am in no way a mortgage advisor, and I can make no claims at all about the accuracy of the information presented here. This calculator is just something I chucked together quickly one evening for fun, and is therefore not suitable for any purpose whatsoever. Don't base any final decisions of any kind on it. It's likely there are errors here. Be warned, see a mortgage advisor, don't sue me, you have been warned.
