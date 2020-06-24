export function postData(type,userData){
  
    return new Promise((resolve,reject)=>{
        let BaseUrl ='https://api.thewallscript.com/restful/';
        fetch(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
         resolve(responseJson);
        })
        .catch((error) => {
         reject(error);
        });

    });
}