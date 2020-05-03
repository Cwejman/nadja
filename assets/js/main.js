var buttons = ['.dd.t','.d.p','.d.k'];
var buttons_t = ['.d.1','.d.2','.d.3','.d.4', '.d.5'];
var active = false;
var active_t = false;
var current = '';
var current_t = '';

function show($par, $array, $current){
  for (var i = 0; i < $array.length; i++) {
    if ($par == $array[i]) {
      $($par).show();
      active = true;
      current = $array[i];
    } else {
      $($array[i]).hide();
    }
  }

}

function activate($par, $array){
  if(!active) {
    show($par, $array)
  }else{
    if ($par == current) {
      for (var i = 0; i < $array.length; i++) {
        $($array[i]).hide();
      }
      active = false;
    }else{
      show($par, $array, current);
    }
  }

  $("html, body").scrollTop($(document).height() / 2);

}

function activate_t($par, $array){
  if(!active) {
    show($par, $array)
  }else{
    if ($par == current_t) {
      for (var i = 0; i < $array.length; i++) {
        $($array[i]).hide();
      }
      active_t = false;
    }else{
      show($par, $array, current_t);
    }
  }

  $("html, body").scrollTop($(document).height() / 2);

}

$(document).ready(function(){

  activate("none", buttons);
  activate_t("none", buttons_t);

  $(".b.h").click(function(){ activate("none", buttons); });
  $(".b.t").click(function(){ activate(".dd.t", buttons); });
  $(".b.p").click(function(){ activate(".d.p", buttons); });
  $(".b.k").click(function(){ activate(".d.k", buttons); });

  $(".b.1").click(function(){ activate_t(".d.1", buttons_t); });
  $(".b.2").click(function(){ activate_t(".d.2", buttons_t); });
  $(".b.3").click(function(){ activate_t(".d.3", buttons_t); });
  $(".b.4").click(function(){ activate_t(".d.4", buttons_t); });
  $(".b.5").click(function(){ activate_t(".d.5", buttons_t); });

});
