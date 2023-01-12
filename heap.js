async function heapSwap(ctx,v,x,y,color){
    ctx.fillStyle="red";
    ctx.fillRect(10+(x)*gap,500,width,-v[x]);
    ctx.fillRect(10+(y)*gap,500,width,-v[y]);
    await waitforme(delayTime);
    ctx.fillStyle="blue";
    ctx.clearRect(10+gap*x,500,width,-v[x]);
    ctx.fillRect(10+(x)*gap,500,width,-v[y]);
    ctx.clearRect(10+gap*y,500,width,-v[y]);
    if(color==1)
        ctx.fillStyle="green";
    ctx.fillRect(10+(y)*gap,500,width,-v[x]);
}
async function  heapify(ctx,arr,  n, i)
{
    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest !== i) {
         await heapSwap(ctx,arr,i,largest,0);
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        await heapify(ctx,arr, n, largest);
    }
}
async function heapSort( ctx,arr, n)
{
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        await heapify(ctx,arr, n, i);
  
    for (let i = n - 1; i >= 0; i--) {
         await heapSwap(ctx,arr,0,i,1);
        [arr[0],arr[i]]=[arr[i],arr[0]];
        await heapify(ctx,arr, i, 0);
    }
    console.log("hi",arr);
}
async function heap(ctx,v,n){
    await heapSort(ctx,v,n);
}