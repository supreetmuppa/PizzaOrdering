Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        services: [
        	{
        		name: 'Large Pizza',
        		price: 13.99,
        		active:true
        	},{
        		name: 'Add Pepperoni',
        		price: 1.99,
        		active:false
        	},{
        		name: 'Add Sausage',
        		price: 1.99,
        		active:false
        	},{
        		name: 'Add Bacon',
        		price: 2.99,
        		active:false
        	},{
        		name: 'Add Olives',
        		price: 1.99,
        		active:false
          },{
            name: 'Add Pineapples',
            price: 1.99,
            active:false
        	},{
            name: 'Add Breadsticks',
            price: 2.99,
            active:false
          }
        ]
    },
    methods: {
    	toggleActive: function(s){
            s.active = !s.active;
    	},
    	total: function(){

        	var total = 0;

        	this.services.forEach(function(s){
        		if (s.active){
        			total+= s.price;
        		}
        	});

    	   return total;
        }
    }
});
