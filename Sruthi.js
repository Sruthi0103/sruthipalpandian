function totalPrice(){
    var nPeople = $("[name=price]:checked").val();
    var cat = $("[name=number]:checked").val();
    var taxRate = .05;
    var finalPrice = mul(nPeople,cat,taxRate);
    $("#r").html("<b style='color:red'>"+finalPrice+"</b>");
}

function mul(nPeople,cat,taxRate ){
    if(nPeople>0 && cat>0 && taxRate>0)
        return nPeople*cat*(1+taxRate);
    else
        return "Only Positive arguments are allowed";
}