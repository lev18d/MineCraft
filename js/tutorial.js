/**
 * Created by itc_user on 7/10/2016.
 */


var tutorial = {};

tutorial.startTutorial= function() {
    $('#landing-page').css('display', 'none');
    $('#gameboard').css('display', 'block');
    $('#tutorial').css('display', 'block');
        
    mineCraft.buildToolSidebar();
    mineCraft.createBoard();
    tutorial.runTimeOut();
};

tutorial.runTimeOut = function (){
    tutorial.welcome();
    setTimeout(tutorial.axeTutorial, 10000);
    setTimeout(tutorial.pickaxeTutorial, 15000);
    setTimeout(tutorial.shovelTutorial,20000);
    setTimeout(tutorial.showCompatible, 25000);
    setTimeout(tutorial.shovelExample,30000);

};
tutorial.welcome = function(){
    $('#tutorial').text('Hello! Welcome to the tutorial for Minecraft Regressed.');
    setTimeout(function(){
        $('#tutorial').text('In this game you will get to alter the environment that you see on your screen with function specific tools.');
    },3000);
};
tutorial.axeTutorial = function(){
  $('#tutorial').text('This is the axe. It only works with leaves and wood.');
    $('.toolItem').eq(0).addClass('toolSelected');
    $('.leaf').css({"border-color": "black",
        "border-weight":"1px",
        "border-style":"solid"});
    $('.tree').css({"border-color": "black",
        "border-weight":"1px",
        "border-style":"solid"});
};
tutorial.pickaxeTutorial = function(){
    $('#tutorial').text('This is the pickaxe. It only works with rock.');
    $('.toolItem').removeClass('toolSelected');
    $('.toolItem').eq(1).addClass('toolSelected');
    $('.leaf').css({"border-style": "none"});
    $('.tree').css({"border-style": "none"});
    $('.rock').css({"border-color": "black",
        "border-weight":"1px",
        "border-style":"solid"});
};

tutorial.shovelTutorial = function(){
    $('#tutorial').text('This is the shovel. It only works with dirt and grass.');
    $('.toolItem').removeClass('toolSelected');
    $('.toolItem').eq(2).addClass('toolSelected');
    $('.rock').css({"border-style": "none"});
    $('.grass').css({"border-color": "black",
        "border-weight":"1px",
        "border-style":"solid"});
    $('.dirt').css({"border-color": "black",
        "border-weight":"1px",
        "border-style":"solid"});
};
tutorial.showCompatible = function(){
    $('#tutorial').text('If the tool you select is not compatible with the piece of environment you select, the tool will flash red.');
    mineCraft.incompatibility();
    setTimeout(function(){
        mineCraft.incompatibility();
    }, 400);
    setTimeout(function(){
        mineCraft.incompatibility();
    }, 800);
    setTimeout(function(){
        mineCraft.incompatibility();
    }, 1200);
    setTimeout(function(){
        mineCraft.incompatibility();
    }, 1600);
};
tutorial.shovelExample = function () {
    $('#tutorial').text('Watch as we move one piece of earth to the item selected box, and then back to the board!');
    $('.dirt').css({"border-style": "none"});
    $('.grass').css({"border-style": "none"});
    setTimeout(function () {
        $('#tutorial').text('Just click on the piece you would like to remove...');
    $('.box').eq(260).removeClass('grass');
    $('.box').eq(260).addClass('sky');
    $('#itemSelected').addClass('grass');
    }, 4000);
    setTimeout(function(){
        $('#tutorial').text('...and then click on the item selected box in the bottom right to put the piece back.');
        $('#itemSelected').removeClass('grass');
        $('.box').eq(241).addClass('grass');
        $('.box').eq(241).attr('data', 'shovel');
    }, 7000);
    setTimeout(function(){
        $('#tutorial').text('Now it\'s your turn! Happy crafting!');

    }, 11000);
    setTimeout(function(){
        $('#tutorial').css('display', 'none');
    },14000);
};

