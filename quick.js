async function quick_swap(v, leftIndex, rightIndex,ctx){
    let i=leftIndex;
    let j=rightIndex;
    await waitforme(delayTime);

    ctx.fillStyle="Red";
    ctx.fillRect(10+gap*i,500,width,-v[i]);
    ctx.fillRect(10+gap*j,500,width,-v[j]);
    await waitforme(delayTime);
    ctx.clearRect(10+gap*i,500,width,-v[i]);
    ctx.clearRect(10+gap*j,500,width,-v[j]);

    ctx.fillStyle="blue";
    ctx.fillRect(10+gap*j,500,width,-v[i]);
    ctx.fillRect(10+gap*i,500,width,-v[j]);

    [v[i],v[j]]=[v[j],v[i]];
}
async function setpiovet(v,i,color,ctx){
    ctx.fillStyle=color;
    ctx.fillRect(10+gap*i,500,width,-v[i]);
}
async function partition(v, left, right,ctx) {
    var piovetPoint=Math.floor((right + left) / 2);
    setpiovet(v,piovetPoint,"black",ctx);
    var pivot   = v[piovetPoint], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (v[i] < pivot) {
            i++;
        }
        while (v[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await quick_swap(v, i, j,ctx); //swapping two elements
            i++;
            j--;
        }
    }
    setpiovet(v,piovetPoint,"blue",ctx);
    return i;
}
async function quickSort(v, left, right,ctx) {
    var index;
    if (v.length > 1) {
        index = await partition(v, left, right,ctx); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(v, left, index - 1,ctx);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(v, index, right,ctx);
        }
    }
    return v;
}
async function quick_sort(ctx,v,n){
    await quickSort(v,0,n-1,ctx);
    for(let i=0;i<n;i++){
        ctx.fillStyle="green";
        await waitforme(10);
        ctx.fillRect(10+gap*i,500,width,-v[i]);
    }
}