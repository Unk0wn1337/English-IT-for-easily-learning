export function homePage(){
    let homePage = $("#szamalkHomePage");
     $(homePage).on("click",function() {
        window.location.href = "../htmlPages/index.html";
     });
}

