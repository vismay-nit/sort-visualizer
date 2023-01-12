// function initilize(opt){
//     let v=[];
//     let n=100;
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.fillStyle = "white";
    
//     //ctx.clearRect(0, 0, c.width, c.height);

//     ctx.fillRect(0, 0, c.width, c.height);
//     ctx.stroke();
//     v.splice(0,v.length);

//     for(var i=0;i<n;i++){
//         var x=Math.floor(Math.random()*500);
//         v.push(x);	
//     }
//     if(opt==1)bubble_sort(ctx,v,n);
//     if(opt==2)merge_sort(ctx,v,n);
// }

// function waitforme(ms)  {
//     return new Promise( resolve => {
//         setTimeout(()=> {resolve('')} ,ms );
//     })
// }
// var width=8;
// var gap=4;
// async function bubble_sort(ctx,v,n){
   
//     for(var i=0;i<n;i++){
//         var x=v[i];
//         ctx.fillStyle="blue";
//         ctx.fillRect(10+i*gap,500,width,-x);
//     }
//     var fre=n;
//     while(fre){
//         for(var i=0;i<n-1;i++){
//             if(v[i]>v[i+1]){
//                     await waitforme();
//                     ctx.fillStyle="blue";
//                     ctx.fillRect(10+(i+1)*gap,500,width,-v[i]);
//                     ctx.clearRect(10+gap*i,500,width,-v[i]);
//                     ctx.fillStyle="white";
//                     ctx.fillRect(10+gap*i,500,width,-v[i]);
//                     ctx.fillStyle="blue";
//                     ctx.fillRect(10+i*gap,500,width,-v[i+1]);
//                     [v[i],v[i+1]]=[v[i+1],v[i]];
//             }

//         }
//         fre--;
//     }
// }

// async function sset(ind,ctx,val,v){
//     await waitforme(10);
//     ctx.clearRect(10+gap*ind,500,width,-v[ind]);
//     ctx.fillStyle="blue";
//     ctx.fillRect(10+gap*ind,500,width,-val);
//     v[ind]=val;
// }
// //merge sort.
// async function ms(v,l,r,ctx){
//     if(l==r)return [v[l]];
//     var mid=Math.floor((l+r)/2);
//     var v1,v2;
//     v1= await ms(v,l,mid,ctx);
//     v2= await ms(v,mid+1,r,ctx);
//     var v3=[];
//     var k=r-l+1;
//     var i=0;
//     var j=0;
//     for(var p=k-1;p>=0;p--){
//         if(i<v1.length && j<v2.length){
//             if(v1[i]>v2[j]){
//                 await sset(l+i+j,ctx,v2[j],v);
//                 v3.push(v2[j]);
//                 j++;
//               }
//               else{
//                 await sset(l+i+j,ctx,v1[i],v);
//                 v3.push(v1[i]);
//                 i++;
//             }
//         }
//         else if(i<v1.length){
//             await sset(l+i+j,ctx,v1[i],v);
//             v3.push(v1[i]);
//             i++;
//         }
//         else{
//             await sset(l+i+j,ctx,v2[j],v);
//             v3.push(v2[j]);
//             j++;
//         }
//     }
//     return v3;
// }
// async function merge_sort(ctx,v,n){
//     console.log("before sorted ",v);
//     for(var i=0;i<n;i++){
//         var x=v[i];
//         ctx.fillStyle="blue";
//         ctx.fillRect(10+i*gap,500,width,-x);
//     }
//     var sorted=await ms(v,0,n-1,ctx);
//     console.log('hey',sorted);
//     console.log(v);
// }
