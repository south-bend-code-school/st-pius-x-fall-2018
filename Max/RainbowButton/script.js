(function () {
  $(document).ready(init);

  function init(){
 $("button").click(red);
  }

  function red(){
    $('button').css('background-color','red');
    $('button').click(orange);
  }
  function orange(){
    $('button').css('background-color','orange');
    $('button').click(yellow);
  }
  function yellow(){
    $('button').css('background-color','yellow');
    $('button').click(green);
  }

function green(){
  $('button').css('background-color','green');
  $('button').click(blue);
}

function blue(){
  $('button').css('background-color','blue');
  $('button').click(indigo);
}

function indigo(){
  $('button').css('background-color','indigo');
  $('button').click(violet);
}

function violet(){
  $('button').css('background-color','violet');
  $('button').click(red);
}

})();
