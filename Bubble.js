
async function bubble_swap(i,j,v,ctx){
    await waitforme(delayTime);
    ctx.fillStyle="red";
    ctx.fillRect(10+gap*i,500,width,-v[i]);
    ctx.fillRect(10+gap*j,500,width,-v[j]);
    await waitforme(delayTime);
    ctx.clearRect(10+gap*i,500,width,-v[i]);
    ctx.clearRect(10+gap*j,500,width,-v[j]);
    
    //await waitforme(80);
    ctx.fillStyle="blue";
    ctx.fillRect(10+gap*j,500,width,-v[i]);
    ctx.fillRect(10+gap*i,500,width,-v[j]);
}
async function bubble_sort(ctx,v,n){
    var fre=n;
    while(fre){
        for(let i=0;i<n-1;i++){
            if(v[i]>v[i+1]){
                    await bubble_swap(i,i+1,v,ctx);
                    [v[i],v[i+1]]=[v[i+1],v[i]];
            }

        }
        fre--;
    }
    for(let i=0;i<n;i++){
        ctx.fillStyle="green";
        await waitforme(10);
        ctx.fillRect(10+gap*i,500,width,-v[i]);
    }
}