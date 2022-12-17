using System.Web.Http;
using System.Web.Http.Cors;

namespace v_management_api.App_Start
{
    public static class WebApiConfig
    {

        public static void Register(HttpConfiguration config) 
        { 

        EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
        config.EnableCors(cors);
     }
   }
}


