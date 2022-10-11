export const isLogin = () =>{
    const fData=localStorage.getItem("user");

    if(fData === "123"){
        return true ;  
    }else{
        return false;

    }
}