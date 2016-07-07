/**
 * Created by itc_user on 7/5/2016.
 */

var mineCraft = {};
mineCraft.toolSelected = '';
mineCraft.blockSelected = '';
mineCraft.selection = [mineCraft.toolSelected, mineCraft.blockSelected];
mineCraft.match = false;

mineCraft.blocks = {
    'sky': {class: 'sky', data: 'nothing'},
    'cloud':{class: 'cloud',data: 'nothing'},
    'dirt':{class: 'dirt',data: 'shovel'},
    'grass': {class: 'grass',data: 'shovel'},
    'leaf': {class: 'leaf',data: 'axe'},
    'tree': {class: 'tree',data: 'axe'},
    'rock': {class: 'rock',data: 'pickaxe'}
 };
mineCraft.tools = [
    {data: 'axe', src: 'images/axe.png'},
    {data: 'pickaxe', src: 'images/pickaxe.png'},
    {data: 'shovel', src: 'images/shovel.png'}
];


mineCraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'cloud', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'tree', 'sky', 'sky', 'rock'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']
];

$(document).ready(function(){
   mineCraft.createBoard();
});
mineCraft.checkMatch = function(){
    if (mineCraft.selection[0] === mineCraft.selection[1]){
        mineCraft.match = true;
    }
};
mineCraft.imageMover = function(){
    var toolArray = $(".toolItem");
    console.log(toolArray);
    for(var t=0;t<toolArray.length; t++ ){
        toolArray.eq(t).append("<img src=" + mineCraft.tools[t].src+">") ;
        toolArray.eq(t).attr('data', mineCraft.tools[t].data);
    }
};
mineCraft.createBoard = function(){
    var mainContain = $('#mainContain');
  for (var i=0;i<mineCraft.matrix.length;i++){
      for(var j=0; j<mineCraft.matrix[i].length; j++){
          var tile = $('<div/>');
          tile.addClass(mineCraft.blocks[mineCraft.matrix[i][j]].class)
              .addClass('box')
              .attr('data',mineCraft.blocks[mineCraft.matrix[i][j]].data)
              .click(mineCraft.clickBlock);
          mainContain.append(tile);

      }
  }
};
// mineCraft.boxes = $('.box');
// mineCraft.boxes.on('click', mineCraft.clickBlocks());
// mineCraft. = $('.toolItem');
//mineCraft.tools =
mineCraft.clickBlock = function () {
        mineCraft.blockSelected = $(this);
        console.log('block');
        mineCraft.checkMatch();
    };
mineCraft.clickTools = function (){
    $('.toolItem').on('click',function() {
        mineCraft.toolSelected = $(this);
        console.log('tool');
    })
};
// $('div').eq(7).attr('data');

mineCraft.colorShift = function(){
    $(".toolItem").click(function () {
        if(Benjifunction==true){
            $(this).css("background-color","blue");
        }
        else{$(this).css("background-color","red");

        }
    })
};

//function to move the selected block to the empty space itemselected div in the sidebar
mineCraft.shiftBlock =function(){
};

