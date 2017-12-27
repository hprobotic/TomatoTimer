import $ from 'jquery'

function configuration(user_settings) {
  return $.extend({
    time_in_seconds: 3600,
    time_format: 'MM:ss',
    tick: function (timer, time_in_seconds, formatted_time) {
      document.title = '(' + formatted_time + ')' + ' TomatoTimer';
    },
    buzzer: function (timer) {
      document.title = 'Buzzzzz!';
      // buzzer();
    },
    autostart: false
  }, user_settings);
}

var timeRemainFormat = function () {
  return function (seconds) {
    var min = Math.floor(seconds / 60);
    var secs = seconds - (min * 60);

    return ('0' + min).slice(-2) + ':' + ('0' + secs).slice(-2);
  }
}();

export const createTimer = (user_settings) => {
  var settings = configuration(user_settings);
  var timer_local = false;
  var timers = this;

  timers.text(timeRemainFormat(settings.time_in_seconds)).
    // timers.text(dateFormat(new Date(settings.time_in_seconds * 1000), settings.time_format)).
    data('countdown.duration', settings.time_in_seconds * 1000).
    data('countdown.state', 'ready').
    data('countdown.timer_id', new Date().getTime());

  if(settings.autostart) {
    this.startTimer(settings);
  }
  return this;
}

export const startTimer = (user_settings) => {
  var settings = configuration(user_settings);
  var my_state = this.data('countdown.state');
  return this.each(function () {
    if (my_state == 'running') {
      // console.log('already running');
      return;
    }
    var timer = $(this).data('countdown.state', 'running');
    var timerId = timer.data('countdown.timer_id');
    var end_time = new Date().getTime() + timer.data('countdown.duration');
    var interval = setInterval(function () {
      if (timerId == timer.data('countdown.timer_id') && timer.data('countdown.state') == 'running') {
        var current_time = Math.round((end_time - new Date().getTime()) / 1000);
        if (current_time <= 0) {
          clearInterval(interval);
          current_time = 0;
        }
        timer.data('countdown.duration', current_time * 1000);
        var formatted_time = timeRemainFormat(current_time);
        // var formatted_time = dateFormat(new Date(current_time * 1000), settings.time_format);
        timer.text(formatted_time);
        settings.tick(timer, current_time, formatted_time);
        //If the timer completed, fire the buzzer callback
        current_time == 0 && settings.buzzer(timer);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  });
}