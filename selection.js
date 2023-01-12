async function select_swap(i,j,v,ctx){
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
    ctx.fillStyle="green";
    ctx.fillRect(10+gap*i,500,width,-v[j]);
}
async function selection_sort(ctx,v,n){
    for(let i=0;i<n;i++){
        let min=1e9;
        let min_index=i;
        for(let j=i;j<n;j++){
            if(v[j]<min){
               min=v[j];
               min_index=j;
               await waitforme(5);
            }
        }
        await select_swap(i,min_index,v,ctx);
        [v[i],v[min_index]]=[v[min_index],v[i]];
    }
    console.log(v);
}