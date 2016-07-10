/**
 * Created by itc_user on 7/10/2016.
 */


var tutorial = {};

tutorial.startTutorial= function() {
    $('#landing-page').css('display', 'none');
    $('#gameboard').css('display', 'block');
    mineCraft.buildToolSidebar();
    mineCraft.createBoard();
    tutorial.runTimeOut();
};

tutorial.runTimeOut = function (){
  setTimeout()

};