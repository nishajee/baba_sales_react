

let apiDomain = ''
if(process.env.NODE_ENV === 'production'){
    apiDomain ='http://react-admin.amitavroy.com/';

}else{
    apiDomain= 'http://localhost:8000/';
}
class UrlService {
    static loginUrl(){
        return apiDomain + 'api/login';
    }
}

export default UrlService;