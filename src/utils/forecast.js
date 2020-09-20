const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/forecast?access_key=1d7c52aafb0d49953023a6f00e31dfde&query="+latitude+","+longitude;
    request({url,json : true},(error,{body})=>{
            if(error){
                callback("Unable to Connect to weather Request",undefined);
            }else if(body.error){
                callback("Unable to Find the Location",undefined);
            }
            else{
                callback(undefined,body.current.weather_descriptions[0]+" . It is currently "+body.current.temperature+" degree. It Feels like "+body.current.feelslike+" degree out .");
            }
        })
}
module.exports=forecast;