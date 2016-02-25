
var app =  angular.module('starter', []);
app.controller('calendarCtrl', ["$scope","defDate",function ($scope,defDate) {

	
}]).factory("defDate",function(){
    return function(){
    	if(arguments.length > 1){
    		return new Date(arguments[0],arguments[1],arguments[2]);
    	}else if(arguments.length == 1){
            return new Date(arguments[0]);
        }else{
            return new Date();
        }

    };
}).directive("calandar",["defDate",function(defDate){
	return {
		restrict : "EA",
		templateUrl : "templates/calendar.html",
		scope : {},
		compile : function(){
			return function($scope,element,attrs){
					var date = defDate();
					var monthName = ["January","February","March","April","May","June","July","August","Septemper","October","November","December"];
					var monthIndex = date.getMonth(),
						nextIndex = monthIndex,
						lastIndex = monthIndex;
					var year = date.getFullYear(),
						lastYear = year,
						nextYear = year;
					var row = 7,column = null;

					function headMonth(){
						var headMonthDays = [];

						var week = getWeek(1)-1;
						var month = getLastMonthDays();

						while(week > 0){
							headMonthDays.unshift({day:month--});
							week--;
						}
						return headMonthDays;
					}

					function footMonth(){
						var gridLen = column * row;
						var footMonthDays = [];
						var notEmpty = (getWeek(1)-1)+getMonthDays();
						var empty = gridLen-notEmpty;
						if(empty > 0){
							var i=0;
							while(i<empty){
								footMonthDays.push({day:++i});
							}
						}
						return footMonthDays;
					}

					function getLastMonthDays(){
						if(monthIndex === 0){
							lastYear--;
							lastIndex = 12;
						}
						return defDate(lastYear,lastIndex,0).getDate();
					}

					function getNextMonthDays(){
						if(monthIndex == 11){
							nextYear++;
							nextIndex = -1;
						}
						return defDate(nextYear,nextIndex+2,0).getDate();
					}

					function getMonthDays(){
						return defDate(year,monthIndex+1,0).getDate();
					}

					function getWeek(i){
						var day = defDate(year,monthIndex,i).getDay();
						return  day === 0?7:day;
					}
					$scope.year = year;
					$scope.lastMonth = function(){
						--monthIndex;
						if(monthIndex < 0){
							monthIndex = 11;
							$scope.year = --year;
						}
						calender();
					};
					
					$scope.nextMonth = function(){
						++monthIndex;

						if(monthIndex > 11){
							monthIndex = 0;
							$scope.year = ++year;
						}
						calender();
					};
					
					function calender(){
						$scope.thisMonth = monthName[monthIndex];
						lastIndex = monthIndex;
						nextIndex = monthIndex;
						makeGrids();
						fillGrids();
					}
					calender();
					
					function fillGrids(){
						var colIndex = 0,rowIndex = getWeek(1)-1 , thisMonth = getMonthDays();
						var head = headMonth(),
							headMonthLen = head.length;
						
						var d=0,k=1,n=0;
						if(headMonthLen>0){
							for(; d<headMonthLen; d++){
								$scope.list[colIndex][d].day = head[d].day;
								$scope.list[colIndex][d].cssClass = 'calender_highlight';
							}
						}
						for(; k<=thisMonth; k++){
							$scope.list[colIndex][rowIndex++].day = k;
							if(rowIndex % 7 === 0){
								rowIndex=0;
								++colIndex;
							}
						}
						var foot = footMonth(),
							footMonthLen = foot.length;
						if(footMonthLen>0){
							var lastdayweek = getWeek(thisMonth);
							for(; n<footMonthLen; n++){
								$scope.list[$scope.list.length-1][lastdayweek+n].day = foot[n].day;
								$scope.list[$scope.list.length-1][lastdayweek+n].cssClass = 'calender_highlight';
							}
						}
					}
					
					function makeGrids(){
						var list = [];
						var grids = (getWeek(1)-1) + getMonthDays(),h=0,j=0;
						for(; h<Math.ceil(grids/7); h++){
							list.push([]);
						}
						for(; j<list.length; j++){
							for(var i=0; i<7; i++){
								list[j].push({});
							}
						}
						column = list.length;
						$scope.list = list;
					}

			};
		}
	};
}]);




