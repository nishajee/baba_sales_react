export function postLeadId(type,userData){
  
    return new Promise((resolve,reject)=>{
        let BaseUrl ='';
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