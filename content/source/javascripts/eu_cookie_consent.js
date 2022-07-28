angular.module('consent', ['ngCookies'])
    .directive('euCookieConsent', function ($cookies) {
        return {
            scope: {},

            restrict: 'C',
            template:
                `
                <div style="position: relative; z-index: 1000" ng-hide="consent()">
                    <div style="
                        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
                        font-size: 12px;
                        background: white; 
                        padding: 4px 10px; 
                        position: fixed; 
                        bottom: 0; 
                        left: 0; 
                        right: 0; 
                        display:flex; 
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                    ">
                        <div>
                            This site uses cookies.
                            <a href="/cookies">Read more</a>.
                        </div>
                        <a style="padding:5px 40px; border:1px solid grey;" href="" ng-click="consent(true)">OK</a>
                    </div>
                </div>
                `,
            controller: function ($scope) {
                var _consent = $cookies.get('consent');
                $scope.consent = function (consent) {
                    if (consent === undefined) {
                        return _consent;
                    } else if (consent) {
                        const expiry = new Date();
                        expiry.setYear(2200);

                        $cookies.put('consent', true, { 'expires': expiry });
                        _consent = true;
                    }
                };
            }
        };
    });