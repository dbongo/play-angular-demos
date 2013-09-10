'use strict';

/* Controllers */

angular.module('mainApp.controllers', ['ngGrid'])

    /* Line Chart */
    .controller('highcharts-nggridCtrl', function($scope){
        $scope.data1 = [
            {id: 1, x: 5, y: 3},
            {id: 2, x: 10, y: 17},
            {id: 3, x: 15, y: 4},
            {id: 4, x: 2, y: 8}
        ];

        $scope.selectedPoints = $scope.data1;

        $scope.hello = "Hello World!";

        $scope.gridOptions = {
            data: 'selectedPoints',
            enableCellEdit: true,
            multiSelect: false,
            columnDefs:[
                {
                    field: 'x',
                    displayName: 'X',
                    enableCellEdit: true
                },
                {
                    field: 'y',
                    displayName: 'Y',
                    enableCellEdit: true
                }
            ]
        };

        $scope.chartOptions = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Scatter Plot'
            },
            plotOptions: {
                scatter: {
                    allowPointSelect: true,
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'x={point.x}, y={point.y}'
                    },
                    cursor: 'pointer',
                    point: {
                        events: {
                            select: function() {
                                $scope.selectedPoints = [];
                                $scope.selectedPoints.push($scope.data1[this.id-1]);
                                $scope.$apply();
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Series',
                color: 'rgba(223, 83, 83, .5)',
                data: $scope.data1
            }]
        };
    });