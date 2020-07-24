function survol(img,mode){

  if(mode=="s"){

    tmp=document.images[img].src;

    document.images[img].src=tmp.substring(0,tmp.lastIndexOf("_")+1) + "surv" + tmp.substring(tmp.lastIndexOf("."));

  }else{

    tmp=document.images[img].src;

    document.images[img].src=tmp.substring(0,tmp.lastIndexOf("_")+1) + "norm" + tmp.substring(tmp.lastIndexOf("."));

  }

}


function ouvrirPage(page,t,l,w,h){

  window.open(page,"","toolbar=0,menubar=0,scrollbars=1,resizable=0,location=0,directories=0,top="+t+",left="+l+",width="+w+",height="+h);

}

