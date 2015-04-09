
		var DonutShop = function(maxCustormers, minCustormers, averageDonuts) {
			this.maxCustormers = maxCustormers;
			this.minCustormers = minCustormers;
			this.averageDonuts = averageDonuts;
			this.donutsperhour = [];
			this.dailytotal = 0;
		};
		var downtown = new DonutShop(43, 8, 4.5, 'downtown');
		var capital_hill = new DonutShop(37, 4, 2, 'capital_hill');
		var south_lake_union = new DonutShop(23, 9, 6.33, 'south_lake_union');
		var wedgewood = new DonutShop(28, 2, 1.25, 'wedgewood');
		var ballard = new DonutShop(58, 8, 3.75, 'ballard');

		DonutShop.prototype.aveHourlyDonuts = function() {
    	var custormers = Math.floor(Math.random() * (this.maxCustormers - this.minCustormers + 1)) + this.minCustormers;
    	var avethishour = custormers * this.averageDonuts
    	this.donutsperhour.push(avethishour);
    	this.dailytotal = this.dailytotal + avethishour;
    	return this.donutsperhour;
		}
			var i = 0;
			for(i; i < 11; i++) {
				downtown.aveHourlyDonuts();
				capital_hill.aveHourlyDonuts();
				south_lake_union.aveHourlyDonuts();
				wedgewood.aveHourlyDonuts();
				ballard.aveHourlyDonuts();
			};
			var DonutShop2 = function(storelocation, options) {
				this.storelocation = storelocation;
				this.minCustormersperHour = options.minCustormersperHour;
				this.maxCustormersperHour = options.maxCustormersperHour;
				this.averageDonutsPerCust = options.averageDonutsPerCust;
				this.hourlyArray = []  //stores individual hourlytotals values for each
				this.total;// stores the total sum of the hoursly array
			};
			DonutShop2.prototype.dailyTotal = function() {
				var custormersperday = Math.floor(Math.random() * (this.maxCustormersperHour - this.minCustormersperHour) + this.minCustormersperHour);
					return Math.round(custormersperday * this.averageDonutsPerCust);
				};

			DonutShop2.prototype.dailytotal = function() {
				this.total = 0;
				for(var i = 0; i < 11; i++) {
					this.total += this.hourlytotals();
					this.hourlyArray.push(this.total);
				};
			}
			DonutShop.prototype.renderData = function() {
				// 1. Info needed from constructor obj: location name, hourly totals, daily totals.
      //var dailyDonuts = this.total; //Grabbing this.total value and storing in dailyDonuts
      //var hourlyDonuts = this.hourlyArray; //stores results of daily total method
      //var locationName = this.franchise; //grabs location names
     //  // 2. Create row elemnt in which to push new data from user inputs
     //  console.log(this.total);
     //  var row = document.creatElement('tr');
     //  //3. Create data element for row
    	// var data = document.creatElement('td');
    	//4. Put data from user into td tags
    	var donutTable = document.creatElementById('donutTable');
    	console.dir(donutTable);
   //  	//5. Append newly created data to tr tag
   //  	row.appendChild(data);
   //  	//6. Create 'for' loop to
			// }

		////work in progress! incomplete feilds
//franchise is storelocation, optons is


	 };

		// Methods to calculate the number of donuts each shop needs to bake per hour and per day.

		// As you define your model, make sure to do the following.

		// Add an HTML table with tr, th, and td tags so that one row represents one location. (See page 132 in the HTML & CSS book)
		// Update the page's DOM with your model's hourly and daily total
	console.dir (downtown);
	console.dir (capital_hill);
	console.dir (south_lake_union);
	console.dir (wedgewood);
	console.dir (ballard.renderData());
	console.dir (DonutShop);
