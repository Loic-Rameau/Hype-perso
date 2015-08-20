/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient){

    function HypeCharts(){
        Object.defineProperty(this,"comments",{
            get:function(){
                if(this.hype)
                    return Comments.find({hype: this.hype._id}).fetch();
                return [];
            },
            set:function(){

            }
        });
        Object.defineProperty(this,"datasets",{
            get:function(){
                var dataset = {};
                this.comments.forEach(function(val){
                    var name;
                    if(val.user.profile !== undefined){
                        name = val.user.profile.name
                    } else {
                        name = val.user.username;
                    }
                    if(dataset[name] === undefined){
                        dataset[name] = 0;
                    }
                    dataset[name]++;
                });
                return dataset;
            },
            set:function(){

            }
        });
        this.hype = {};
    }
    HypeCharts.prototype.constructor = HypeCharts;
    HypeChart = new HypeCharts();
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function ColorLuminance(hex, lum) {

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }
    Template.charts_line.rendered = function() {
        var el = document.getElementById(this.data.id);
        HypeChart.hype = this.data.hype;
        var ctx = el.getContext("2d");
        var datasets = [];
        for(var i in HypeChart.datasets){
            var color = getRandomColor();
            var lighter = ColorLuminance(color,.05);
            datasets.push({
                label: i,
                color:color,
                highlight:lighter,
                value:HypeChart.datasets[i]
            });
        }
        var chart = new Chart(ctx).Pie(datasets,{
            responsive:true,
            animateScale:true
        });
        chart.resize();
        chart.render();
    }
}