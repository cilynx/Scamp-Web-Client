import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Dashboard',

    info: function () {
        console.log(this.get('infos'));
        return this.get('infos');
    }.property('infos'),

    chartData: {
        labels: ['2/1', '2/2', '2/3', '2/4', '2/5', '2/6', '2/7', '2/8', '2/9', '2/10', '2/11', '2/12'],
        series: [
            [90, 90, 70, 80, 50, 40, 60, 2, 30, 30, 40, 60],
            [40, 50, 30, 70, 30, 50, 50, 30, 40, 40, 50, 50],
            [50, 30, 40, 50, 60, 30, 30, 40, 50, 60, 30, 40],
            [30, 40, 50, 60, 70, 60, 40, 50, 60, 70, 60, 30]
        ]
    },

    chartOptions: {
        showArea: true,
        lineSmooth: true,
        showPoint: false,
        fullWidth: false,
        showLine: false
    }
});