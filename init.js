
var width=20
var gap=40
var delayTime=500-parseInt($("#speed").val());
function initilize(opt){
    $(".canvas").empty();
    $(".canvas").html('<canvas id="myCanvas" width="800" height="600" style="border:1px solid #d3d3d3;"></canvas>');
    let v=[];
    let n=$("#arr_length").val();
    bar_width=(2*800)/(3*n);
    width=Math.floor(bar_width);
    gap=Math.floor(800/n);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "white";

    //ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillRect(0, 0, c.width, c.height); //bg white ho jayega
    ctx.stroke();//fill kiya hua dikhega
    v.splice(0,v.length);//readjust array length acc to user

    for(var i=0;i<n;i++){
        var x=Math.floor(Math.random()*500);
        v.push(x);
    }
    displayInitialBar(v,ctx)    //create bar wrt to array element value

    if(opt!=0){
        var offset = $("#myCanvas").offset();   // if canvas goes out of window it will come in focus
        //console.log(offset);
        offset.top=offset.top-240;
        //console.log(offset);
        $('html, body').animate({
            scrollTop: offset.top,
        },10);
    }


    if(opt==1){
        $(".about").html(Bubble_abt);
        bubble_sort(ctx,v,n);
    }
    else if(opt==2){
        $(".about").html(Merge_abt);
        merge_sort(ctx,v,n);
    }
    else if(opt==3){
        $(".about").html(Heap_abt);
        heap(ctx,v, n);
    }
    else if(opt==4){
        $(".about").html(Insert_abt);
        insertion_sort(ctx,v, n);
    }
    else if(opt==5){
        $(".about").html(Select_abt);
        selection_sort(ctx,v, n);
    }
    else if(opt==6){
        $(".about").html(Quick_abt);
        quick_sort(ctx,v, n);
    }

}

function displayInitialBar(v,ctx){
    for(var i=0;i<v.length;i++){
        var x=v[i];
        ctx.fillStyle="blue";
        ctx.fillRect(10+i*gap,500,width,-x);
    }
}

//timeoutfn
function waitforme(ms)  {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')} ,ms );
    })
}

initilize(0);
$(".Bubble_Sort").click(function(){
    initilize(1);
    console.log("Bubble_Sort");
})
$(".Merge_Sort").click(function(){
    initilize(2);
    console.log("Merge_Sort");
})
$(".heap_Sort").click(function(){
    initilize(3);
    console.log("heap_sort");
})
$(".Insert_Sort").click(function(){
    initilize(4);
    console.log("Insertion_sort");
})
$(".select_Sort").click(function(){
    initilize(5);
    console.log("Selection_sort");
})
$(".quick_Sort").click(function(){
    initilize(6);
    console.log("quick_sort");
})


$(window).resize(function() {
    let he=$(".header").height();
    $(".middle_section").css({
        "padding-top":he
    });
});

$("#speed").click(function(){
    delayTime=500-parseInt($("#speed").val());
})
//changing scroll button
// $(".line").click(function(e){
//     var mov=e.pageX-$(".line").offset().left;
//     delayTime=mov;
//     var x={"left":mov};
//     $(".point").css(x);
// })

