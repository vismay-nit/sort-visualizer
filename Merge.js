async function sset(ind,ctx,val,v){
    await waitforme(delayTime);
    ctx.clearRect(10+gap*ind,500,width,-v[ind]);
    ctx.fillStyle="blue";
    ctx.fillRect(10+gap*ind,500,width,-val);
    v[ind]=val;
}
//merge sort.
async function ms(v,l,r,ctx){
    if(l==r)return [v[l]];
    var mid=Math.floor((l+r)/2);
    var v1,v2;
    v1= await ms(v,l,mid,ctx);
    v2= await ms(v,mid+1,r,ctx);
    var v3=[];
    var k=r-l+1;
    var i=0;
    var j=0;
    for(var p=k-1;p>=0;p--){
        if(i<v1.length && j<v2.length){
            if(v1[i]>v2[j]){
                await sset(l+i+j,ctx,v2[j],v);
                v3.push(v2[j]);
                j++;
              }
              else{
                await sset(l+i+j,ctx,v1[i],v);
                v3.push(v1[i]);
                i++;
            }
        }
        else if(i<v1.length){
            await sset(l+i+j,ctx,v1[i],v);
            v3.push(v1[i]);
            i++;
        }
        else{
            await sset(l+i+j,ctx,v2[j],v);
            v3.push(v2[j]);
            j++;
        }
    }
    return v3;
}
async function merge_sort(ctx,v,n){
    var sorted=await ms(v,0,n-1,ctx);
}