//验证码生成
let canvas=document.getElementById('canvas')//画布对象

let show_num=[]//装验证码的数组
//产生随机颜色
function randomColor(){
    var r=  Math.floor( Math.random()*256);
    var g=  Math.floor( Math.random()*256);
    var b=  Math.floor( Math.random()*256);
    return  "rgb("+r+","+g+","+b+") "
}
//画布
function draw(show_num){
    let canvas_clientWidth=document.getElementById('canvas').clientWidth//画布长度
    let canvas_clientHeight=document.getElementById('canvas').clientHeight//画布高度
    let context = canvas.getContext("2d")//画布环境 创建 context 对象：
    canvas.width=canvas_clientWidth
    canvas.height=canvas_clientHeight
    let str="A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
    let astr=str.split(',');//分割字符串形成数组
    let sLength=astr.length;//数组长度
    for (let i = 0; i <= 3; i++) {
        let j=Math.floor(Math.random()*sLength);//随机索引
        let deg=Math.random()*30*Math.PI/180;//0-30随机弧度
        let text=astr[j];//随机字符
        show_num[i]=text//验证码字符数组
        let x=10+i*20//x坐标
        let y=20+Math.random()*8//y坐标
        //位移 旋转角度 颜色 文字 样式开始位置
        context.font='bold 23px 微软雅黑'
        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle = randomColor();
        context.fillText(text,0,0)
        context.rotate(-deg)
        context.translate(-x,-y)
    }
    //验证码显示小点
    for(let i=0;i<=30;i++){
        context.strokeStyle=randomColor()//设置随机色用小点的颜色
        context.beginPath();//开始一条路径
        let m=Math.random()*canvas_clientWidth;
        let n=Math.random()*canvas_clientHeight;
        context.moveTo(m,n)//移动
        context.lineTo(m + 1, n + 1);//添加一个新点，然后在画布中创建从该点到最后指定点的线条
        context.stroke();//画上面定义好的路径
    }
    //验证码显示线条
    for (let i = 0; i < 8; i++) {
        context.strokeStyle=randomColor()
        context.beginPath()
        context.moveTo(Math.random()*canvas_clientWidth,Math.random()*canvas_clientHeight);
        context.lineTo(Math.random()*canvas_clientWidth,Math.random()*canvas_clientHeight)
        context.stroke()

    }

}
draw(show_num)
// console.log(show_num.toString().replace(/,/g, ""));

canvas.onclick=()=>{
    draw(show_num)
    // console.log(show_num.toString().replace(/,/g, ""));
}