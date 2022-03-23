$(document).ready(function(){
    $('.tabs').tabs();
  });
var x = 0;
var grid = document.getElementById("card-grid");
var cards = '<div class="row"><div class="col s1"></div>';
var wordsBlock = 'AFRICA,AGENT,AIR,ALIEN,ALPS,AMAZON,AMBULANCE,AMERICA,ANGEL,ANTARCTICA,APPLE,ARM,ATLANTIS,AUSTRALIA,AZTEC,BACK,BALL,BAND,BANK,BAR,BARK,BAT,BATTERY,BEACH,BEAR,BEAT,BED,BEIJING,BELL,BELT,BERLIN,BERMUDA,BERRY,BILL,BLOCK,BOARD,BOLT,BOMB,BOND,BOOM,BOOT,BOTTLE,BOW,BOX,BRIDGE,BRUSH,BUCK,BUFFALO,BUG,BUGLE,BUTTON,CALF,CANADA,CAP,CAPITAL,CAR,CARD,CARROT,CASINO,CAST,CAT,CELL,CENTAUR,CENTER,CHAIR,CHANGE,CHARGE,CHECK,CHEST,CHICK,CHINA,CHOCOLATE,CHURCH,CIRCLE,CLIFF,CLOAK,CLUB,CODE,COLD,COMIC,COMPOUND,CONCERT,CONDUCTOR,CONTRACT,COOK,COPPER,COTTON,COURT,COVER,CRANE,CRASH,CRICKET,CROSS,CROWN,CYCLE,CZECH,DANCE,DATE,DAY,DEATH,DECK,DEGREE,DIAMOND,DICE,DINOSAUR,DISEASE,DOCTOR,DOG,DRAFT,DRAGON,DRESS,DRILL,DROP,DUCK,DWARF,EAGLE,EGYPT,EMBASSY,ENGINE,ENGLAND,EUROPE,EYE,FACE,FAIR,FALL,FAN,FENCE,FIELD,FIGHTER,FIGURE,FILE,FILM,FIRE,FISH,FLUTE,FLY,FOOT,FORCE,FOREST,FORK,FRANCE,GAME,GAS,GENIUS,GERMANY,GHOST,GIANT,GLASS,GLOVE,GOLD,GRACE,GRASS,GREECE,GREEN,GROUND,HAM,HAND,HAWK,HEAD,HEART,HELICOPTER,HIMALAYAS,HOLE,HOLLYWOOD,HONEY,HOOD,HOOK,HORN,HORSE,HORSESHOE,HOSPITAL,HOTEL,ICE,ICE CREAM,INDIA,IRON,IVORY,JACK,JAM,JET,JUPITER,KANGAROO,KETCHUP,KEY,KID,KING,KIWI,KNIFE,KNIGHT,LAB,LAP,LASER,LAWYER,LEAD,LEMON,LEPRECHAUN,LIFE,LIGHT,LIMOUSINE,LINE,LINK,LION,LITTER,LOCH NESS,LOCK,LOG,LONDON,LUCK,MAIL,MAMMOTH,MAPLE,MARBLE,MARCH,MASS,MATCH,MERCURY,MEXICO,MICROSCOPE,MILLIONAIRE,MINE,MINT,MISSILE,MODEL,MOLE,MOON,MOSCOW,MOUNT,MOUSE,MOUTH,MUG,NAIL,NEEDLE,NET,NEW YORK,NIGHT,NINJA,NOTE,NOVEL,NURSE,NUT,OCTOPUS,OIL,OLIVE,OLYMPUS,OPERA,ORANGE,ORGAN,PALM,PAN,PANTS,PAPER,PARACHUTE,PARK,PART,PASS,PASTE,PENGUIN,PHOENIX,PIANO,PIE,PILOT,PIN,PIPE,PIRATE,PISTOL,PIT,PITCH,PLANE,PLASTIC,PLATE,PLATYPUS,PLAY,PLOT,POINT,POISON,POLE,POLICE,POOL,PORT,POST,POUND,PRESS,PRINCESS,PUMPKIN,PUPIL,PYRAMID,QUEEN,RABBIT,RACKET,RAY,REVOLUTION,RING,ROBIN,ROBOT,ROCK,ROME,ROOT,ROSE,ROULETTE,ROUND,ROW,RULER,SATELLITE,SATURN,SCALE,SCHOOL,SCIENTIST,SCORPION,SCREEN,SCUBA DIVER,SEAL,SERVER,SHADOW,SHAKESPEARE,SHARK,SHIP,SHOE,SHOP,SHOT,SINK,SKYSCRAPER,SLIP,SLUG,SMUGGLER,SNOW,SNOWMAN,SOCK,SOLDIER,SOUL,SOUND,SPACE,SPELL,SPIDER,SPIKE,SPINE,SPOT,SPRING,SPY,SQUARE,STADIUM,STAFF,STAR,STATE,STICK,STOCK,STRAW,STREAM,STRIKE,STRING,SUB,SUIT,SUPERHERO,SWING,SWITCH,TABLE,TABLET,TAG,TAIL,TAP,TEACHER,TELESCOPE,TEMPLE,THEATER,THIEF,THUMB,TICK,TIE,TIME,TOKYO,TOOTH,TORCH,TOWER,TRACK,TRAIN,TRIANGLE,TRIP,TRUNK,TUBE,TURKEY,UNDERTAKER,UNICORN,VACUUM,VAN,VET,WAKE,WALL,WAR,WASHER,WASHINGTON,WATCH,WATER,WAVE,WEB,WELL,WHALE,WHIP,WIND,WITCH,WORM,YARD'
var words = wordsBlock.split(',');
var text = "word"
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
document.addEventListener('click',function(e){
    console.log(e.target.id);
    var el = document.getElementById(`reveal-${e.target.id}`);
    console.log(el.id);
    if(el.classList.contains('brown')){
    	el.classList.remove('brown');
      el.classList.add('red');
    }
    else if(el.classList.contains('black')){
    	el.classList.remove('black');
      el.classList.add('brown');
    }
    else if(el.classList.contains('red')){
    	el.classList.remove('red');
      el.classList.add('blue');
    }
    else if(el.classList.contains('blue')){
    	el.classList.remove('blue');
      el.classList.add('black');
    }
   	
 });
words = getRandomSubarray(words, 25)
while (x < 25){
  x++;
	cards += `<div class="col s2"><div class="card blue-grey darken-1 white-text"><ul class="container1">
    <li class="backwards">${words[x-1]}</li></ul><div class="card-content center"><span class="card-title activator">${words[x-1]}</span>
    </div><div class="card-reveal brown center" style="overflow: hidden;" id="reveal-${x}"><ul class="container1">
    <li class="backwards">${words[x-1]}</li></ul><span class="card-title">${words[x-1]}</span>
    <a class="btn btn-small waves-effect waves-light white black-text" id="${x}">Color</a></div></div></div>`;
	if (x % 5 === 0){
  	cards += `</div><div class="row"><div class="col s1"></div>`;
  }
}
x = 0;
grid.innerHTML = cards;
