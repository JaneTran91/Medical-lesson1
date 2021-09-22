function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mahJWkSQed":
        Script1();
        break;
      case "6ncBPbTlXPb":
        Script2();
        break;
      case "6jFbPZUJSeh":
        Script3();
        break;
      case "6FKiXwFijBg":
        Script4();
        break;
      case "6NoaVynTRwr":
        Script5();
        break;
      case "65PvuVghhwJ":
        Script6();
        break;
      case "5rWTBBor8ss":
        Script7();
        break;
      case "66Mv1Xxci2b":
        Script8();
        break;
      case "5hXQiJvNTIe":
        Script9();
        break;
      case "6P34GKpuw91":
        Script10();
        break;
      case "66IdNRkjHZs":
        Script11();
        break;
      case "6QJLwBUqCF2":
        Script12();
        break;
      case "6kCGAeR0G3X":
        Script13();
        break;
      case "64KIWaqqt9B":
        Script14();
        break;
      case "6SCMdPLKbjv":
        Script15();
        break;
      case "5hRRBBlQMHP":
        Script16();
        break;
      case "6fwU0U2sI0r":
        Script17();
        break;
      case "69JWaHDXd4s":
        Script18();
        break;
      case "5hSzLQn2IO3":
        Script19();
        break;
      case "6huaeQwTAJD":
        Script20();
        break;
      case "6VlM7unqIXj":
        Script21();
        break;
      case "65SRP46wAcr":
        Script22();
        break;
      case "67zXMl7HAmh":
        Script23();
        break;
      case "6BaLItvSnx5":
        Script24();
        break;
      case "6AFoLJlhLov":
        Script25();
        break;
      case "5vJi54OcKVr":
        Script26();
        break;
      case "66UZ09JmC92":
        Script27();
        break;
      case "60UauzNzSXr":
        Script28();
        break;
      case "5hQWXZDaIdG":
        Script29();
        break;
      case "6IBF2sXBoqh":
        Script30();
        break;
      case "6CtqOn8tJEg":
        Script31();
        break;
      case "6lgXqaNwhlb":
        Script32();
        break;
      case "5va5yTE1tW7":
        Script33();
        break;
      case "5zkuqr0QGEO":
        Script34();
        break;
      case "6AA59ZaMHOx":
        Script35();
        break;
      case "5vGgcgAublp":
        Script36();
        break;
      case "5oLQ9C3YqD0":
        Script37();
        break;
      case "5lRvuuTN1jc":
        Script38();
        break;
      case "64i8IzHsjIB":
        Script39();
        break;
      case "6k1HsZPTYcm":
        Script40();
        break;
      case "5pFNxHWgHgC":
        Script41();
        break;
      case "6nWgfW8dKW9":
        Script42();
        break;
      case "6SDXYhf9eDj":
        Script43();
        break;
      case "6aAoUK98Hbi":
        Script44();
        break;
      case "6Df2X9VmU7V":
        Script45();
        break;
      case "5oUajdMwc4E":
        Script46();
        break;
      case "6q2NNGaoAGG":
        Script47();
        break;
      case "6KI5SjPiZib":
        Script48();
        break;
      case "5oERxgwYLBc":
        Script49();
        break;
      case "5jueuaNI1VP":
        Script50();
        break;
      case "6YBhNDHlzlV":
        Script51();
        break;
      case "5fUGsRF6K8p":
        Script52();
        break;
      case "6eWn8bOkMVQ":
        Script53();
        break;
      case "5udyZYAIwjb":
        Script54();
        break;
      case "5cdM9ZHWvbm":
        Script55();
        break;
      case "6Qp8G1J3q2p":
        Script56();
        break;
      case "5kCwHHCo1GQ":
        Script57();
        break;
      case "60rkVxt64UH":
        Script58();
        break;
      case "5gjs8yRYsS5":
        Script59();
        break;
      case "6UnhDvvE0ad":
        Script60();
        break;
      case "6pNaXMAaiGe":
        Script61();
        break;
      case "6kLBLqSkYYo":
        Script62();
        break;
      case "5uvnG7wo8D0":
        Script63();
        break;
      case "68fkqihib9F":
        Script64();
        break;
      case "6Sop2Wdr469":
        Script65();
        break;
      case "6HhBYSOTZI1":
        Script66();
        break;
      case "62JLDDx8DeM":
        Script67();
        break;
      case "60SYKFMcUc3":
        Script68();
        break;
      case "6ozzSlTLt0E":
        Script69();
        break;
      case "5xlVYczRdGX":
        Script70();
        break;
  }
}

function Script1()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script2()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script3()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script4()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script5()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script6()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script7()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script8()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script9()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script10()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script11()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script12()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script13()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script14()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script15()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script16()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script17()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script18()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script19()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script20()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script21()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script22()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script23()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script24()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script25()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script26()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script27()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script28()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script29()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script30()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script31()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script32()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script33()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script34()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script35()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script36()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script37()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script38()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script39()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script40()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script41()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script42()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script43()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script44()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script45()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script46()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script47()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script48()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script49()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script50()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script51()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script52()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script53()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script54()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script55()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script56()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script57()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script58()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script59()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script60()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script61()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script62()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script63()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script64()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script65()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script66()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script67()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script68()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script69()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script70()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

