async function insert_swap(i,j,v,ctx){
    await waitforme(delayTime);
    ctx.clearRect(10+gap*i,500,width,-v[i]);
    ctx.fillStyle="red";
    ctx.fillRect(10+gap*i,500,width,-v[j]);
    ctx.fillRect(10+gap*j,500,width,-v[i]);

    await waitforme(delayTime);
    ctx.fillStyle="green";
    ctx.fillRect(10+gap*i,500,width,-v[j]);
    ctx.fillRect(10+gap*j,500,width,-v[i]);
}
async function insertion_sort(ctx,v,n){
    for(let i=1;i<n;i++){
        for(let j=i;j>=0;j--){
            if(v[j-1]>v[j]){
                await insert_swap(j-1,j,v,ctx);
                [v[j],v[j-1]]=[v[j-1],v[j]];
            }
            else
                break;
        }
    }
}